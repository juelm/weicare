export default async function deleteDaily(dailyID){
    let reqBody = {
        DailyID: dailyID,
    };

    let requestDetails = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let res = await fetch('http://localhost:8080/api/deleteDaily', requestDetails);

    let resData = await res.text();
    
    alert(resData);
}