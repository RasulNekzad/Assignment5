assignCallEventHandlers();

function addNewRow() {
    var rows = document.getElementById("grid-rows");
    var numCols = document.getElementById("grid-columns").children.length;
    var newRow = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        var newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    rows.appendChild(newRow);
    assignCallEventHandlers();
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
    assignCallEventHandlers();
}

function removeRow() {
    var row = document.getElementById("grid-rows");
    row.lastElementChild.remove();
}

function removeColumn() {
    var cols = document.getElementById("grid-columns");
    if (cols.lastElementChild!=cols.firstElementChild){
        cols.lastElementChild.remove();
    }
    var rows = document.getElementById("grid-rows");
    var numRows = rows.children.length;
    var allRows = rows.getElementsByTagName("tr");
    for (let i = 0; i < numRows; i++) {
        allRows[i].lastElementChild.remove();
    }
}

function fillAllCell() {
    selectedColor = document.getElementById("color-picker").value;
    var tHeadCells = document.getElementById("grid-columns").getElementsByTagName("th");
    for (let i = 0; i < tHeadCells.length; i++) {
        tHeadCells[i].style.backgroundColor = selectedColor;
    }
    var tBodyCells = document.getElementById("grid-rows").getElementsByTagName("td");
    for (let i = 0; i < tBodyCells.length; i++) {
        tBodyCells[i].style.backgroundColor = selectedColor;
    }
}

function assignCallEventHandlers(){
    var table = document.getElementById("grid");
    var rows = table.rows;
    var numCols = rows[0].cells.length;
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < numCols; j++){
            let currentCell = table.rows[i].cells[j];
            currentCell.onclick = function(){
                let selectedColor = document.getElementById("color-picker").value;
                currentCell.style.backgroundColor = selectedColor;
            }
        }
    }
}

function restore() {
    var tHeadCells = document.getElementById("grid-columns").getElementsByTagName("th");
    for (let i = 0; i < tHeadCells.length; i++) {
        tHeadCells[i].style.backgroundColor = "white";
    }
    var tBodyCells = document.getElementById("grid-rows").getElementsByTagName("td");
    for (let i = 0; i < tBodyCells.length; i++) {
        tBodyCells[i].style.backgroundColor = "white";
    }
}