export default async function getDaylies(){
    let inDailys = await fetch('http://localhost:3001/api/getDailies/all');
    return inDailys;
}