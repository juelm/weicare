export default async function ValidateCredentials(userName, password, userType){
    let reqBody = {
        userName: userName,
        password: password,
        userType: userType
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
    // res = await res.keys();
    console.log(res);

    return await res;
}