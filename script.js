document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let names = document.getElementById("names").value;
    let grades = document.getElementById("grades").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // let paragraf = names + "<br>" + grades + "<br>" + email + "<br>" + password;
    // document.getElementById("demo").innerHTML = paragraf;

    // console.log("Names:" + names);
    // console.log("Grades:" + grades);
    // console.log("Email:" + email);
    // console.log("Password:" + password);
    let text;
    if (grades >= 8) {
        text = "Ai luat nota buna";
    } else {
        text = "Mai invata!";
    }
    return text;

    let paragraf2 = text;
    document.getElementById("demo2").innerHTML = paragraf2;
    

});

// function result(grades) {
//     // let grades = document.getElementById("grades").value;
//     let text;
//     if(grades >= 8) {
//         text = "Ai luat nota buna";
//     } else {
//         text = "Mai invata!";
//     }
//       return text;  
// }

