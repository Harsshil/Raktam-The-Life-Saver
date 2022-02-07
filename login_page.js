function addUser(){
    user_name = document.getElementById("phone_number").value;
    localStorage.setItem("phone_number" ,phone_number);
  
    window.location = "login_page2.html";
  }

  function addUser2() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "login_page3.html";
  }
  
  
  function addUser3(){
    user_name = document.getElementById("email_id").value;
    localStorage.setItem("email_id" ,email_id);
  
    window.location = "login_page4.html";
  }

  function addUser4(){
    user_name = document.getElementById("loc_ation").value;
    localStorage.setItem("loc_ation" ,loc_ation);
  
    window.location = "group_selection.html";
  } 

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";