export default async function fetchDailies(setDailies, setCurrent, user){
   
    let res = await fetch(`http://localhost:8080/api/getDailies/${user}`);
    let resData = await res.json();
    console.log(resData);
    setDailies(resData);
    setCurrent(resData[0]);
    //console.log(daylies);
}