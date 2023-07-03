
// GET Request
fetch("https://reqres.in/api/users")
.then(response => {
    const goodResponse = response.ok;

    // Guard Clause
    if(!goodResponse) {
        console.log("Problem Occured During GET Operation!");
        return;
    }
   return response.json();
})
.then(result => {
    console.log(result.data);
}).catch(error => {
    console.log(error);
})



// POST Request
const newUserPOST = {
    name : "Muhammad",
    country : "Afghanistan"
}

fetch("https://reqres.in/api/users", {
    method : "POST",
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newUserPOST)
})
.then(response => {
    const goodResponse = response.ok;

    // Guard Clause
    if(!goodResponse) {
        console.log("Problem Occured During POST Operation!");
        return;
    }
   return response.json();
})
.then(result => {
    console.log("User Added Successfully!!!!!");
}).catch(error => {
    console.log(error);
})



// PUT Request
const newUserPUT = {
    first_name : 'NextUser',
    profession: 'Engineer'
}

fetch("https://reqres.in/api/users/3", {
    method : 'PUT',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newUserPUT)
})
.then(response => {
    const goodResponse = response.ok;

    // Guard Clause
    if(!goodResponse) {
        console.log("Problem Occured During PUT Operation!");
        return;
    }
   return response.json();
})
.then(result => {
    console.log("User Infomation Updated Successfully!!!!!");
}).catch(error => {
    console.log(error);
})



// DELETE Request
// Nt necessary Specifying the User Details during Delete Method
const userDELETE = {
    first_name : 'NextUser',
    profession: 'Engineer'
}

fetch("https://reqres.in/api/users/10", {
    method : 'DELETE',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(newUserPUT)
})
.then(response => {
    const goodResponse = response.ok;

    // Guard Clause
    if(!goodResponse) {
        console.log("Problem Occured During DELETE Operation!");
        return;
    }
   return response.json();
})
.then(result => {
    console.log("User Deleted Successfully!!!!!");
}).catch(error => {
    console.log(error);
})




