let submit = document.getElementById("submit")
let update = document.getElementById("update")
console.log(submit)
submit.addEventListener("click", values)
submit.addEventListener("click", updateValue)

function values(){
    let firstnameinput = document.getElementById("firstname").value;
    let lastnameinput = document.getElementById("lastname").value;
    let passwordinput = document.getElementById("password").value;
    let ageinput = document.getElementById("age").value;
    let emailinput = document.getElementById("email").value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstname:firstnameinput,lastname:lastnameinput, password:passwordinput,age:ageinput, email:emailinput})
      })
}

function updateValue(){
    let id = document.getElementById("id").value;
    let firstnameinput = document.getElementById("firstname").value;
    let lastnameinput = document.getElementById("lastname").value;
    let passwordinput = document.getElementById("password").value;
    let ageinput = document.getElementById("age").value;
    let emailinput = document.getElementById("email").value;

    fetch('/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstname:firstnameinput,lastname:lastnameinput, password:passwordinput,age:ageinput, email:emailinput, id: id})
      })
}
