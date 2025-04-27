      
      document.getElementById("alt-msg").style.display="none";
      function login()
      {
        let userA=document.getElementById("login-user").value; 
        let userB=document.getElementById("login-password").value; 
        if(userA==="myname" && userB==="myname")
        {
          window.open("./home.html","_self");
        }
        else
        {
          document.getElementById("alt-msg").style.display="block"; 
        }
      }