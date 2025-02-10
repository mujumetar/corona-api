// let count = "russia";

// let opt = document.getElementById("option");

// let search = document.getElementById("dates").value

const api_url = `https://api.rootnet.in/covid19-in/stats/latest`;
// const country_url = `https://covid-193.p.rapidapi.com/statistics`;

fetch(api_url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let search = "Delhi";

    document.getElementById("dates").addEventListener("change", (e) => {
      search = e.target.value;
     

      let s_search = search.split(" ")

      search = s_search.map((ele) => {
      let val = ele.charAt(0).toUpperCase() + ele.slice(1);
      return val
     }).join(" ")

      console.log(search);
       showdata(data.data.regional, search)
    });
  });

function showdata(data, s) {
  document.getElementById("display").innerHTML = " ";

  data
    .filter((el) => el.loc == s.charAt(0).toUpperCase() + s.slice(1))
    .map((ele) => {
      console.log(ele);
      document.getElementById("display").innerHTML += `
<h3>covid data of <br/>  "${ele.loc}"</h3>
<div><b>critical: </b> ${ele.totalConfirmed}</div>
<div><b>indian cases:  </b>${ele.confirmedCasesIndian}</div>
<div><b>discharges: </b> ${ele.discharged}</div>
<div class="mb-4"><b>deaths: </b> ${ele.deaths}</div>
`;
    });
}
