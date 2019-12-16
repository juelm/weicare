export default async function postDaily(dailyText, dailyTitle, userName, className){
    let reqBody = {
        user: userName,
        class: className,
        title: dailyTitle,
        text: dailyText
    };

    let requestDetails = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let res = await fetch('http://localhost:8080/api/postDailies', requestDetails);

    return await res;
    //let resData = await res.json();
    // setDailies(resData);
    //console.log(daylies);
}