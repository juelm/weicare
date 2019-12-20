export default async function updateUser(userFirstName, userLastName, userPhone, userEmail, userType){
    let reqBody = {
        fName: userFirstName,
        lName: userLastName,
        phone: userPhone,
        email: userEmail
    };

    let requestDetails = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    let res = await fetch(`http://localhost:8080/api/updateUser${userType}`, requestDetails);

    let resData = await res.text();
    
    alert(resData);
}