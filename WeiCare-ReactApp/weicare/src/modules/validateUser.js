export default async function ValidateCredentials(userName, password){
    let reqBody = {
        userName: userName,
        password: password
    };

    let requestDetails = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let res = await fetch('http://localhost:8080/api/validateCredentials', requestDetails);
    res = await res.json();

    if (res.length === 0) return await null;
    else return await res[0].UserType;
}