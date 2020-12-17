//function submitTask() {
//    let taskForm = document.getElementById("postTaskForm");
//    taskForm.submit();
//}
function submitUser() {
    console.log("Called submitUser");
    
    let userNameParam = document.getElementById("userName").value;
    let userPassword = document.getElementById("userPassword").value;
    console.log("userName:" + userNameParam);
    console.log("userPassword:" + userPassword);
    data = {'userPassword':userPassword, 'userName':userNameParam};
  
    console.log(JSON.stringify(data))
    let userURL = "http://localhost:4000/user";
    const fetchPromise = fetch(userURL,{ method:'POST', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(data)});
  
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log("Here POST");
        console.log(user);
        let userId, userName, password;
        let message = "ERROR";
        if (typeof user.id !== "undefined") {
          userName = user.data.name;
          userId = user.id;
          password = user.data.password;
          message = "Message: " + user.message + " ID: " + userId + "<br>userName: " + userName + "<br> Password: " + password; 
        }
        document.getElementById("postUserContent").innerHTML = message;
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("postUserContent").innerHTML = "Invalid user id: " + userIdParam;
    });
   
  }
  
  function getUser() {
      console.log("Called getUser");
      
      let userIdParam = document.getElementById("userId").value;
      console.log("UserId:" + userIdParam);
      let userURL = "http://localhost:4000/user?userId=" + userIdParam;
      const fetchPromise = fetch(userURL);
  
      fetchPromise
        .then((response) => {
          return response.json();
        })
        .then((user) => {
          console.log("Here");
          console.log(user);
          let userId, userName, password;
          let message = "ERROR";
          if (typeof user.data.id !== "undefined") {
            userName = user.data.userName;
            userId = user.data.id;
            password = user.data.password;
            message = "ID: " + userId + "<br>UserName: " + userName + "<br> Password: " + password; 
          }
          document.getElementById("getUserContent").innerHTML = message;
      })
      .catch((err) => {
          console.log(err);
          document.getElementById("getUserContent").innerHTML = "Invalid user id: " + userIdParam;
      });
     
  }
  
  function updateUser() {
    console.log("Called updateUser");
    
    let userIdParam = document.getElementById("updateUserId").value;
    let userNameParam = document.getElementById("updateUserName").value;
    console.log("UserId:" + userIdParam);
    console.log("UserName:" + userNameParam);
    data = {'userName':userNameParam};
  
    console.log(JSON.stringify(data))
    let taskURL = "http://localhost:4000/user?userId=" + userIdParam;
    const fetchPromise = fetch(userURL,{ method:'PUT', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(data)});
  
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log("Here Update");
        console.log(user);
        let userId, userName, password;
        let message = "ERROR";
        if (typeof user.data.id !== "undefined") {
          userName = user.data.userName;
          userId = user.data.id;
          
          message = "ID: " + userId + "<br>UserName: " + userName; 
        }
        document.getElementById("updatedUserContent").innerHTML = message;
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("updatedUserContent").innerHTML = "Invalid user id: " + userIdParam;
    });
   
  }
  
  