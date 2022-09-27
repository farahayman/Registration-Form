function Validate()
{
    var characters = /^[A-Za-z ]+$/;
    var numbers = /^[0-9]+$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var idLen = document.getElementById("userID").value.length;
    var passLen = document.getElementById("pass").value.length;
    var username = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zcode").value;
    var usersex = document.getElementById("male");
    var usersex2 = document.getElementById("female");
    var userLang1 = document.getElementById("lan1");
    var userLang2 = document.getElementById("lan2");
    var userEmail = document.getElementById("email").value;
    if(idLen==0)
    {
        window.alert("ID shouldn't be empty please try again..!");
    }
    else if(idLen <5 || idLen>12)
    {
        window.alert("ID length should be from 5 to 12 ..!");
    }
    if(passLen==0)
    {
        window.alert("Password shouldn't be empty please try again..!");
    }
    else if(passLen <7 || passLen>12)
    {
        window.alert("Password length should be from 7 to 12 ..!");
    }
    if(username.length == 0)
    {
        window.alert("Name shouldn't be empty please try again..!");
    }
    else if(!characters.test(username))
    {
        window.alert("Name should contain alphabates characters only..!");
    }
    if(country == "def")
    {
        window.alert("Please select your country..!");
    }
    if(zipcode.length==0)
    {
        window.alert("zip code shouldn't be empty please try again..!");
    }
    else if(!numbers.test(zipcode))
    {
        window.alert("zip code should contain numbers only..!");
    }
    if(userEmail.length == 0)
    {
        window.alert("Email shouldn't be empty please try again..!");
    }
    else if(!validRegex.test(userEmail))
    {
        window.alert("Invalid Email Address please try again..!");
    }
    if(!usersex.checked)
    {
        if(!usersex2.checked)
        {
            window.alert("please choose your sex..!");
        }
    }
    if(!userLang1.checked)
    {
        if(!userLang2.checked)
        {
            window.alert("please choose your Language..!");
        }
    }



}