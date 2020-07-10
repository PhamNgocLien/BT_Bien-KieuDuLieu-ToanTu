function btnaverage() {
    let physical = +document.getElementById("physical").value;
    let chemistry = +document.getElementById("chemistry").value;
    let biological = +document.getElementById("biological").value;
    let average = (physical + chemistry + biological)/3;
    document.getElementById("dis.average").innerHTML = "Điểm trung bình: " + average;
}
function btntotal() {
    let physical = +document.getElementById("physical").value;
    let chemistry = +document.getElementById("chemistry").value;
    let biological = +document.getElementById("biological").value;
    let total = physical + chemistry + biological;
    document.getElementById("dis.total").innerHTML = "Tổng điểm: " + total;
}