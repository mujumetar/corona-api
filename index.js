let count = "russia";

const api_url = `https://covid-193.p.rapidapi.com/statistics?country=all`;
const country_url = `https://covid-193.p.rapidapi.com/statistics`;
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d62844f455msh2195c074f0292d4p139cd5jsn1d0960856900",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
};

fetch(api_url, options)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data.response[0]);
    showdata(data.response[0]);
  });

document.getElementById("dates").addEventListener("change", (e) => {
  let date = e.target.value;
  console.log(date);
});


fetch(country_url, options)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.response[0]);
    showcountry(data.response[0]);
  });

document.getElementById("dates").addEventListener("change", (e) => {
  let date = e.target.value;
  console.log(date);
});

function showdata(data) {
  document.getElementById("display").innerHTML += `
<h1>World Wild Real-Time Data of <br/>${data.day}</h1>
<div><b>active:  </b>${data.cases.active}</div>
<div><b>new: </b> ${data.cases.new}</div>
<div><b>critical: </b> ${data.cases.critical}</div>
<div><b>recovered: </b> ${data.cases.recovered}</div>
<div><b>total: </b> ${data.cases.total}</div>
<div><b>deaths: </b> ${data.deaths.total}</div>
`;
}

function showcountry(data) {
  document.getElementById("option").innerHTML += `
                <option value=${data}>${data}</option>

`;
}
