export default async function getDaylies(){
    let inDailys = await fetch('http://localhost:8080/api/getDailies/all')
                    .then(res => (res.json()))
                    .then(res => res.DailyText);
                    // .then(res => updateDailies(res))
                    // .catch(err => console.log(err))

    console.log(inDailys);

    return inDailys;
}