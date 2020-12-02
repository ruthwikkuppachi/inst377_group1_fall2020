let url = "https://data.princegeorgescountymd.gov/resource/uh6s-izyj.json";

console.log(url);
//const ul = document.getElementById("redditList");
let settings = { method: "Get" };



async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let zip = json.zip_code;
            let name = json.payee_name;
            let amount = json.amount;
        })
}