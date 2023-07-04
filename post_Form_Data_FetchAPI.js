const formElement1 = document.getElementById("myForm");
const formElement2 = document.getElementById("myForm2");


// Using Normal JSON as Data Content Type
formElement1.addEventListener("submit", event => {
    event.preventDefault();

    formData = new FormData(formElement1);

    const dataObject = Object.fromEntries(formData);

    console.log(dataObject);

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(dataObject)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
 
})


// Using Normal x-www-form-urlEncoded as Data Content Type
formElement2.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(formElement2);

    const newURLdata = new URLSearchParams(formData);

    console.log(dataObject);

    fetch("https://reqres.in/api/users", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
        body: newURLdata
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
})