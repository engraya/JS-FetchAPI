// GET ALL USER DATA AND INFO
function fetchUserData() {
    fetch("https://reqres.in/api/users").then(Response => {
        const statusResponse = Response.ok;
        console.log(Response)
        if(!statusResponse) {
            throw Error("Please Try again Later with good Request Credentials!....")
        } 
        return Response.json()
    }).then(outputResult => {
        console.log(outputResult.data);
        const html = outputResult.data.map(user => {
            return `
            <div class="mainSec">
                <p><img id="pic" src="${user.avatar}" alt="${user.first_name}"/></p>
                <hr>
                <p>ID: ${user.id}</p>
                <p>First Name: ${user.first_name}</p>
                <p>Last Name: ${user.last_name}</p>
                <p>Email Address: ${user.email}</p>
            </div>
            `;
        }).join("");
 
        // inject the Data into the front HTML Page
        document.getElementById("division").insertAdjacentHTML("afterbegin", html);
    }).catch(error => {
        console.log(error)
    })
}

fetchUserData();


// POST A DATA TO THE API SET USING THE POST METHOD
function postUserData() {
    fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Ahmad",
            Profession: "Engineer"
        })
    })
    .then(Response => {
        const statusResponse = Response.ok;
        if(!statusResponse) {
            throw Error("Please Try again Later with good Request Credentials!....")
        } 
        return Response.json()
    }).then(outputResult => {
        console.log(outputResult.data);
    }).catch(error => {
        console.log(error)
    })
}

postUserData();