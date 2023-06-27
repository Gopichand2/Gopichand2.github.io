function handleCardClick(cardNumber) {
    console.log("Clicked card:", cardNumber);
    // Perform actions based on the clicked card
    if (cardNumber === 1) {
      // Code for card 1
      console.log('1 button clicked');
      window.open('Java.html','_blank');
    } else if (cardNumber === 2) {
      // Code for card 2
      window.open('CSS.html','_blank');
      console.log('1 button clicked');
    }else if(cardNumber==3){
        console.log('1 button clicked');
        window.open('Python.html','_blank');
    }
  }


  function javaBack(){
    console.log('Back to MainPage');
    window.open('MainPage.html', 'MainPage.html');
  }


  function navigateToDiv(divID){

    var element = document.getElementById(divID);

    if(element){
        element.scrollIntoView({behavior: 'smooth'});
    }
}