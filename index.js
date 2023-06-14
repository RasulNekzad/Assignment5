function addNewRow() {
    var rows = document.getElementById("grid-rows");
    var numCols = document.getElementById("grid-columns").children.length;
    var newRow = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        var newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    rows.appendChild(newRow);
}

function addNewColumn() {
    var cols = document.getElementById("grid-columns");
    var numRows = document.getElementById("grid-rows").children.length;
    var rows = document.getElementById("grid-rows");
    cols.appendChild(document.createElement("th"));
    var allRows = rows.getElementsByTagName("tr");
    for (let i = 0; i < allRows.length; i++) {
        var newCol = document.createElement("td");
        allRows[i].appendChild(newCol);
    }
}

function removeRow() {
    var row = document.getElementById("grid-rows");
    row.parentNode.deleteRow(row);
}

function removeColumn() {
    cells = 1;
    let table = document.getElementById("grid");
    let lastColumn = table.rows[0].cells.length - 1;

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = lastColumn; j > 0; j--) {
            table.rows[i].deleteCell(j);
        }
    }
}