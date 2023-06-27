

const loginForm = document.getElementById("loginForm");




function validateForm(event){

     event.preventDefault();

    const username = document.getElementById('username').value;
    const password =document.getElementById('password').value;

    if(username=='Gopichand' && password == '12345'){
        window.open("MainPage.html", "_blank");
    }else{
        window.alert("Inavalid Credentials \nUsername or password is InValid");
    }

}