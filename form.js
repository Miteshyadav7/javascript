<html>
    <head>
        <style>
           button{
            background-color: rgb(0, 255, 51);
           } 
           small{
            color: red;
           }
        </style>
       </head>
       <body>
        <form>
       <div>
        <input onkeyup="validateUsername()" id="username" type="text" placeholder="Enter username"/><br>
        <small id="usernameError"></small>
    
  <div>
<input onkeyup="validateemail()" id ="email" type ="text" placeholder="email"/><br>
<small id ="emailError"></small>
</div>
<div>
    Gender:&nbsp;
    <input onclick="validategender()" id ="male" type = "radio" name="gen"/>MALE 
    <input onclick="validategender()" id ="female" type = "radio" name="gen"/>FEMALE 
    <small id ="genderError"></small>
</div>
<div> 
    <button onclick="return validateData()" type="submit">Submit</button>
</div>

<script>
    function validategender(){
        let status = true;
        let male = document.getElementById("male").checked;
        let female = document.getElementById("female").checked;
        let gendererror = document.getElementById("genderError");

        if(!male && !female){
            genderError.inne rText = "gender is required"
status = false;
        }
        else 
        genderError.innerText = "";
    return status;
        
    }
   function validateUsername(){
        let status = true;
        let username = document.getElementById("username").value;
        let usernameError = document.getElementById("usernameError");
        if(username.length == 0){
            usernameError.innerText = "username is required";
            status = false;
        }else 
            usernameError.innerText = "";
         return status;
    }
    function validateemail(){
         let status = true;
         let count=0;
        let email = document.getElementById("email").value;
        let emailError = document.getElementById("emailError");

        if(email.length == 0){
         emailError.innerText = "Email is required";
             status = false;
        }
        else{
            
            for(let i=0; i<email.length; i++){
                if(email.charAt(i) == "@"){
                    count++;
                }
            }
            if(count !=1){
                emailError.innerText = "@ is only one";
                status = false;
            }
            else if(!email.endsWith(".com")){
                emailError.innerText = ".com is required";
                status = false;
            } 
            else emailError.innerText = "";
        }
        return status;
       
}
    
    function validateData(){
        let user = validateUsername();
        let email = validateemail();
        let gender = validategender();
        if(user && email && gender) 
        return true;
        return false;
    }
  </script>
</form>
</body>
</html>
