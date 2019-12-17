export default async function getClassRoster(setRoster) {

  let className = "red"; 
  
  let roster = await fetch(`http://localhost:8080/api/classRoster/${className}`);
  let rosterData = await roster.json(); 
  console.log(rosterData); 
  console.log(className);
  setRoster(rosterData);
}
