let url = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json";

let settings = { method: "Get" };

    
      
    
async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.length;                
            let ul = document.getElementsByTagName('ul');
            ul.innerHTML = ''
            for (x = 0; x < listSize; x++) {
                let zip_code = document.getElementsByTagName('input')[0];
                let name_payee = document.getElementsByTagName('input')[1];
                let agent = document.getElementsByTagName('input')[2];
                
                let finder = json;
                console.log(finder)
                let zip, name, agency, amount;
                zip = finder.zip_code
                name =finder.payee_name
                agency =finder.agency
                amount =finder.amount
                
                if (name == name_payee) {
                    let li = document.createElement('li');
                    li.innerHTML = 'Zip code: ' + zip + ', Payee: ' + name + ', Agency: ' + agency + ', Amount: ' + amount
                    body.appendChild(li);
                }

                if (zip == zip_code) {
                    let li = document.createElement('li');
                    li.innerHTML = 'Zip code: ' + zip + ', Payee: ' + name + ', Agency: ' + agency + ', Amount: ' + amount
                    body.appendChild(li);
                }

                if (agency == agent) {
                    let li = document.createElement('li');
                    li.innerHTML = 'Zip code: ' + zip + ', Payee: ' + name + ', Agency: ' + agency + ', Amount: ' + amount
                    body.appendChild(li);
                }
    
                }
            })
           
    };