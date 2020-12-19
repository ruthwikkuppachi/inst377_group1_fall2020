
const main = document.getElementById("main");
function getResources() {
    let resource = document.getElementById("agency").value;

    if ((typeof resource !== "undefined") & (resource !=="")) {
        let resourceURL = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json?agency=" + resource;

        fetch(resourceURL)
        .then((results) => {return results.json();})
  
        .then((route) => {
            let payee_name = route.payee_name;
            let agency = route.agency;
            let zip_code = route.zip_code;
            let amount = route.amount
            let payment_description = route.payment_description;
            let nothing = "Nothing Set!";
  
            sessionStorage.setItem("title", payee_name);
            sessionStorage.setItem("lat_max", agency);
            sessionStorage.setItem("lat_min", zip_code);
            sessionStorage.setItem("lon_max", amount);
            sessionStorage.setItem("lon_min", payment_description);

            Array.prototype.sum = function (prop) {
              var total = 0
              for ( var i = 0, _len = this.length; i < _len; i++ ) {
                  total += parseFloat(this[i][prop])
              }
              return total
          }

          sum = route.sum("amount");
          
            string = JSON.stringify(route)
            document.getElementById("total").innerHTML = "Total spending on " + resource+ ":  $" + sum;
            document.getElementById("main").innerHTML = string;
            
          
            
          }
        )
        .catch((err) => {
          console.log(err);
          main.innerHTML = "Invalid input";
          sessionStorage.setItem("title", nothing);
          sessionStorage.setItem("lat_max", nothing);
          sessionStorage.setItem("lat_min", nothing);
          sessionStorage.setItem("lon_max", nothing);
          sessionStorage.setItem("lon_min", nothing);
        

        }
        );
    } else {
      main.innerHTML = "No value provided";
      sessionStorage.setItem("title", nothing);
      sessionStorage.setItem("lat_max", nothing);
      sessionStorage.setItem("lat_min", nothing);
      sessionStorage.setItem("lon_max", nothing);
      sessionStorage.setItem("lon_min", nothing);
    }
    
  }
  function getResources1() {
    let resource1 = document.getElementById("zip").value;

    if ((typeof resource1 !== "undefined") & (resource1 !=="")) {
        let resource1URL = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json?zip_code=" + resource1;

        fetch(resource1URL)
        .then((results) => {return results.json();})
  
        .then((route) => {
            let payee_name = route.payee_name;
            let agency = route.agency;
            let zip_code = route.zip_code;
            let amount = route.amount
            let payment_description = route.payment_description;
            let nothing = "Nothing Set!";
  
            sessionStorage.setItem("title", payee_name);
            sessionStorage.setItem("lat_max", agency);
            sessionStorage.setItem("lat_min", zip_code);
            sessionStorage.setItem("lon_max", amount);
            sessionStorage.setItem("lon_min", payment_description);

            Array.prototype.sum = function (prop) {
              var total = 0
              for ( var i = 0, _len = this.length; i < _len; i++ ) {
                  total += parseFloat(this[i][prop])
              }
              return total
          }

          sum = route.sum("amount");
          
            string = JSON.stringify(route)
            document.getElementById("total").innerHTML = "Total spending on " + resource1+ ":  $" + sum;
            document.getElementById("main").innerHTML = string;
            
          
            
          }
        )
        .catch((err) => {
          console.log(err);
          main.innerHTML = "Invalid input";
          sessionStorage.setItem("title", nothing);
          sessionStorage.setItem("lat_max", nothing);
          sessionStorage.setItem("lat_min", nothing);
          sessionStorage.setItem("lon_max", nothing);
          sessionStorage.setItem("lon_min", nothing);
        

        }
        );
    } else {
      main.innerHTML = "No value provided";
      sessionStorage.setItem("title", nothing);
      sessionStorage.setItem("lat_max", nothing);
      sessionStorage.setItem("lat_min", nothing);
      sessionStorage.setItem("lon_max", nothing);
      sessionStorage.setItem("lon_min", nothing);
    }
    
  }
  
  function getResources2() {
    let resource2 = document.getElementById("name").value;

    if ((typeof resource2 !== "undefined") & (resource2 !=="")) {
        let resource2URL = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json?payee_name=" + resource2;

        fetch(resource2URL)
        .then((results) => {return results.json();})
  
        .then((route) => {
            let payee_name = route.payee_name;
            let agency = route.agency;
            let zip_code = route.zip_code;
            let amount = route.amount
            let payment_description = route.payment_description;
            let nothing = "Nothing Set!";
  
            sessionStorage.setItem("title", payee_name);
            sessionStorage.setItem("lat_max", agency);
            sessionStorage.setItem("lat_min", zip_code);
            sessionStorage.setItem("lon_max", amount);
            sessionStorage.setItem("lon_min", payment_description);

            Array.prototype.sum = function (prop) {
              var total = 0
              for ( var i = 0, _len = this.length; i < _len; i++ ) {
                  total += parseFloat(this[i][prop])
              }
              return total
          }

          sum = route.sum("amount");
          
            string = JSON.stringify(route)
            document.getElementById("total").innerHTML = "Total spending on " + resource2+ ":  $" + sum;
            document.getElementById("main").innerHTML = string;
            
          
            
          }
        )
        .catch((err) => {
          console.log(err);
          main.innerHTML = "Invalid input";
          sessionStorage.setItem("title", nothing);
          sessionStorage.setItem("lat_max", nothing);
          sessionStorage.setItem("lat_min", nothing);
          sessionStorage.setItem("lon_max", nothing);
          sessionStorage.setItem("lon_min", nothing);
        

        }
        );
    } else {
      main.innerHTML = "No value provided";
      sessionStorage.setItem("title", nothing);
      sessionStorage.setItem("lat_max", nothing);
      sessionStorage.setItem("lat_min", nothing);
      sessionStorage.setItem("lon_max", nothing);
      sessionStorage.setItem("lon_min", nothing);
    }
    
  }