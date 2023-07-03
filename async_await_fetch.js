const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");




// Traditional Method with .then 
function displayUsersDataTraditionalFunction() {
    fetch("https://reqres.in/api/users").then(response => {
        const SuccessfulServerResponse = response.ok;
        // Guard Clause
        if(!SuccessfulServerResponse) {
            console.log("Problem Occured During Request Operation!");
            return;
        }
        return response.json();
    }).then(serverResult => {
        console.log(serverResult.data)
    }).catch(error => {
        console.log(error);
    })
}


// Using Asyc Await Syntactical Sugar to GET User Data
async function displayUsersDataAsyncAwaitFunctionGET() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const data = await response.json();
        const SuccessfulServerResponse = response.ok;
        // Guard Clause
        if(!SuccessfulServerResponse) {
        console.log("Problem Occured During Request Operation!");
        return;
    }
        console.log(data);     
    } catch (error) {
        console.log(error); 
    }
}


// Using Asyc Await Syntactical Sugar to POST User Data
const newUserPOST = {
    first_name : 'NextUserPOST',
    profession: 'Engineer'
}
async function displayUsersDataAsyncAwaitFunctionPOST() {
    try {
        const response = await fetch("https://reqres.in/api/users", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newUserPOST)
        });
        const data = await response.json();
        const SuccessfulServerResponse = response.ok;
        // Guard Clause
        if(!SuccessfulServerResponse) {
        console.log("Problem Occured During POST Operation!");
        return;
    }
        console.log(data);    
        
    } catch (error) {
        console.log(error);
        
    }

}


// Using Asyc Await Syntactical Sugar to PUT User Data
const newUserPUT = {
    first_name : 'NextUserPUT',
    profession: 'Lawyer'
}
async function displayUsersDataAsyncAwaitFunctionPUT() {
    try {
        const response = await fetch("https://reqres.in/api/users/22", {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newUserPUT)
        });
        const data = await response.json();
        const SuccessfulServerResponse = response.ok;
        // Guard Clause
        if(!SuccessfulServerResponse) {
        console.log("Problem Occured During PUT Operation!");
        return;
    }
        console.log(data);    
        
    } catch (error) {
        console.log(error);
        
    }
}


// Using Asyc Await Syntactical Sugar to DELETE User Data
async function displayUsersDataAsyncAwaitFunctionDELETE() {
    try {
        const response = await fetch("https://reqres.in/api/users/32", {
            method : 'DELETE'
        });
        const data = await response.json();
        const SuccessfulServerResponse = response.ok;

        // Guard Clause
        if(!SuccessfulServerResponse) {
        console.log("Problem Occured During DELETE Operation!");
        return;
    }
        console.log("User Data Deleted Successfully");    
        
    } catch (error) {
        console.log(error);
        
    }

}


btn.addEventListener("click", displayUsersDataTraditionalFunction)
btn2.addEventListener("click", displayUsersDataAsyncAwaitFunctionGET)
btn3.addEventListener("click", displayUsersDataAsyncAwaitFunctionPOST)
btn4.addEventListener("click", displayUsersDataAsyncAwaitFunctionPUT)
btn5.addEventListener("click", displayUsersDataAsyncAwaitFunctionDELETE)


