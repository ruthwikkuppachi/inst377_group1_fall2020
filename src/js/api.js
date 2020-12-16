let url = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json";

console.log(url);
let settings = { method: "Get" };
const main = document.getElementById("main");

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let zip = json.zip_code;
            let agency = json.agency;
            let name = json.payee_name;
            let amount = json.amount;


            console.log(route);
            sessionStorage.setItem('Payee Name', name);
            sessionStorage.setItem('zip code', zip);
            sessionStorage.setItem('agency', agency);
            sessionStorage.setItem('amount', amount);
            //turn json into sql with columns zip, name, amount, agency - Creates table with all 4 columns that can be queried
            //query for every row that zip/name/agency (whatever was inputed into the search bar)
            //sum up the amounts section and add to console
            //*ALLOWS USER TO SEARCH FOR TOTAL COSTS BY ZIP, NAME, AND AGENCY
            //TO GROUP: we need either three search bars, one zip, name, and agency
        })
}
