function validateForm() {
       var pass = document.getElementById("Password");
       var email = document.getElementById("Email");
       var form = document.getElementsByTagName("form")[0];
       console.log(form);

        if ((email == username) && (pass == password)) {
            alert("Login successful");
            return false;
        }
        else {
            alert ("Login was unsuccessful, please check your username and password");
        }
      }