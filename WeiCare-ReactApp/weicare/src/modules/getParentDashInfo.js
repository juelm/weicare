export default async function getClassRoster(setClassInfo, userName) {
  

  let classInfo = await fetch(
    `http://localhost:8080/api/parentDashInfo/${userName}`
  );
  let classInfoData = await classInfo.json();
 
  setClassInfo(classInfoData);
}

