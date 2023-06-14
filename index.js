function addNewRow() {
    var rows = document.getElementById("grid-rows");
    var cols = document.getElementById("grid-columns").children.length;
    var newRow = document.createElement("tr");
    for (let i = 0; i < cols; i++) {
        var newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    rows.appendChild(newRow);
}

function removeRow(){
    var row = document.getElementById("grid-rows");
    row.parentNode.deleteRow(row);
}