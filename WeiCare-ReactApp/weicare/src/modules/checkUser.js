export default async function fetchDailies(setDailies){
    let user = 'brownm';
    let res = await fetch(`http://localhost:8080/api/getDailies/${user}`);
    let resData = await res.json();
    setDailies(resData);
    //console.log(daylies);
}