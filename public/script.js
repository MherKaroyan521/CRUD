let submit = document.getElementById("submit")
console.log(submit)
submit.addEventListener("click", values)

function values(){
    let nameinput = document.getElementById("name").value;
    let passwordinput = document.getElementById("password").value;
    let emailinput = document.getElementById("email").value;

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:nameinput, password:passwordinput, email:emailinput})
      })
}