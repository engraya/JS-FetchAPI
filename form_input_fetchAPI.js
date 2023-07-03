const myButton = document.getElementById("button");

myButton.addEventListener("click", getUserData);


async function getUserData(){

    const urlParameter = document.getElementById("formInput").value;

    if (!urlParameter) {
        alert("Please Enter a valid URL Parameter!")
        return;
    }

    const apiEndPiont = new URL(`https://reqres.in/api/${urlParameter}`)

    // Adding other Search Parameters to the new Url
    // apiEndPiont.searchParams.set("token", "YOUR_ACTIVE_TOKEN_HERE")

    const response = await fetch(apiEndPiont);

    if (response.status == 4040){
        alert("Error Occured!")
        return
    }

    const data = await response.json();

    const responseResult = data.data
    
    console.log(responseResult)


    successResult = `First Name : ${responseResult[2].first_name}\n Last Name :${responseResult[2].last_name}\n Email : ${responseResult[2].email}`

    console.log(successResult);
    alert(successResult);

}

