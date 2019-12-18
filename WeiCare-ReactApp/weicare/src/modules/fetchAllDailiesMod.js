export default async function fetchAllDailies(setDailies, setCurrent, userName, userType) {

    let reqBody = {
      user: userName,
      userType: userType
    };

    let requestDetails = {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json"
      }
    };

    let res = await fetch(
      "http://localhost:8080/api/fetchAllDailies",
      requestDetails
    );

    let resData= await res.json();
    setDailies(resData); 
    setCurrent(resData[0]);
}
