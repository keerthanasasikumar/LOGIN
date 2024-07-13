function mul() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = "";
    for (i = 1; i <= b; i++) {
        c = c + a + " * " + i + " = " + a * i + "<br>";
    }
    document.getElementById("result").innerHTML = c;

}