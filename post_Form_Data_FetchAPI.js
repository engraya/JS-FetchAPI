const formElement = document.getElementById("myForm");

formElement.addEventListener("submit", event => {
    event.preventDefault();

    formData = new FormData(formElement);

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