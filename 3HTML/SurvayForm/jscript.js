function formValidation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;

    if (fname === "" || lname === "" || email === "" || phone === ""|| dob === "" || country === "Select Country" || gender.length === 0 || profession === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    return true;
}


function formSubmit() {
    if (formValidation()) {
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var dob = document.getElementById("dob").value;
        var country = document.getElementById("country").value;
        var gender = document.querySelectorAll('input[name="gender"]:checked');
        var profession = document.getElementById("profession").value;

        var genderValues = [];
        for (var i = 0; i < gender.length; i++) {
            genderValues.push(gender[i].value);
        }

        var popupContent = "First Name: " + fname + "\n" +
                           "Last Name: " + lname + "\n" +
                           "Email: " + email + "\n" +
                           "Phone: " + phone + "\n" +
                           "DOB: " + dob + "\n" +
                           "Country: " + country +"\n" +
                           "Gender: " + genderValues.join(", ") + "\n" +
                           "Profession: " + profession;

        alert("Survey Data Submitted Successfully:\n\n" + popupContent);
        resetForm();
    }
}


function resetForm(){
    document.getElementById("myForm").reset();
}