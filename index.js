// let count = "russia";

// let opt = document.getElementById("option");

const api_url = `https://api.rootnet.in/covid19-in/stats/latest`;
// const country_url = `https://covid-193.p.rapidapi.com/statistics`;


fetch(api_url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    showdata(data.data.regional);
  })

document.getElementById("dates").addEventListener("change", (e) => {
  let date = e.target.value;
  console.log(date);
});

function showdata(data) {

  data.map((ele) => {
    console.log(ele)
      document.getElementById("display").innerHTML += `
<h3>covid data of <br/>  "${ele.loc}"</h3>
<div><b>critical: </b> ${ele.totalConfirmed}</div>
<div><b>indian cases:  </b>${ele.confirmedCasesIndian}</div>
<div><b>discharges: </b> ${ele.discharged}</div>
<div class="mb-4"><b>deaths: </b> ${ele.deaths}</div>
`;
  })

}


