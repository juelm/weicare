export default async function postDaily(dailyText, dailyTitle, userName, className, setState){
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

    let resData = await res.text();
    
    if(resData === "Record Successfully Updated"){
        setState({ text: "", title: "", classRoom: "" });
    }
    
    alert(resData);

    return await res;
}