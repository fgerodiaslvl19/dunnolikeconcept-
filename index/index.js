document.getElementById("submitBtn").onclick = function(){
    const firstName = document.getElementById("firstName").value;
    const middleName = document.getElementById("middleName").value;
    const lastName = document.getElementById("lastName").value;
    const birthDate = document.getElementById("birthDate").value;
    const REGION = document.getElementById("region").value;
    const CITY = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const GMAIL = document.getElementById("gmail").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    if (!(firstName == "" || middleName == "" || lastName == "" || birthDate == "" || REGION == "" ||CITY == "" || address == "" || GMAIL == "" || phoneNumber == "")) {
        document.getElementById("warningSignOne").innerHTML = "";
        document.getElementById("warningSignOne").style.opacity = 0;
        console.log("First Name:", firstName);
        console.log("Middle Name:", middleName);
        console.log("Last Name:", lastName);
        console.log("Birthdate:", birthDate);
        console.log("Region:", REGION);
        console.log("City:", CITY);
        console.log("Address:", address);
        console.log("Gmail:", GMAIL);
        console.log("Phone Number:", phoneNumber);
    }  
    else {
        document.getElementById("warningSignOne").innerHTML = "Please fill all the required documentations!";
        document.getElementById("warningSignOne").style.opacity = 1;
    }
}