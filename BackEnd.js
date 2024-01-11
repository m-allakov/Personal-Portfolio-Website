//  ! Login Page Start -->
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


    if (username === 'M-Aly' && password === '123') {
        alert('Giriş Başarılı!');
        window.open("CarpimTablosuOdev.html");
    }
    else {
        alert('Kullanıcı adı veya şifre hatalı!');
    }
}
//  ! Login Page End -->

//  ! Calculate Page Start -->

function calc() {
    var userInput1 = document.getElementById("userInput1").value;
    var userInput2 = document.getElementById("userInput2").value;
    result = userInput1 * userInput2;
    document.getElementById("calculate").innerHTML = carpim(result);
}

function carpim(result) {
    var table = "<table class='table table-bordered '>";
    for (var i = 1; i <= 10; i++) {
        table += "<tr>";
        for (var j = 1; j <= 10; j++) {
            var test = i * j;
            if (test == result) {
                table += "<td class='color_chenge' >" + test + "</td>";
            } else {
                table += "<td>" + test + "</td>";
            }
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}
var result;
document.getElementById("calculate").innerHTML = carpim(); 
//  ! Calculate Page End -->