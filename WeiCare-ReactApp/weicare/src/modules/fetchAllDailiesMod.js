export default async function fetchAllDailies(setDailies, setCurrent, userName, userClass) {

    console.log(userName)
    let reqBody = {
      user: userName,
      userType: userClass
    };

    let requestDetails = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json"
      }
    };

    let res = await fetch("http://localhost:8080/api/fetchAllDailies", requestDetails);

    let resData= await res.json();
    console.log(resData);
    setDailies(resData); 
    setCurrent(resData[0]);
}
