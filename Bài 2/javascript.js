function convert() {
    let input = document.getElementById("doC").value;
    let doF = input * 9 / 5 + 32;
    document.getElementById("result").innerHTML = "Độ F: " + doF;
}