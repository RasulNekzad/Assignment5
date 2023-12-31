//adding on click handler to the intial cells (cells that are already loaded before hand)
assignCallEventHandlers();

//adds new row to the grid and is called when the add row button is clicked
function addNewRow() {
    var rows = document.getElementById("grid-rows");
    var numCols = document.getElementById("grid-columns").children.length;
    var newRow = document.createElement("tr");
    for (let i = 0; i < numCols; i++) {
        var newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    rows.appendChild(newRow);
    //adding onclick to new cells
    assignCallEventHandlers();
}

//adds new column to the grid and is called when the add column button is clicked
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
    //adding onclick to new cells
    assignCallEventHandlers();
}

//removes row from the grid
function removeRow() {
    var row = document.getElementById("grid-rows");
    row.lastElementChild.remove();
}

//removes column from the grid
function removeColumn() {
    var cols = document.getElementById("grid-columns");
    if (cols.lastElementChild != cols.firstElementChild) {
        cols.lastElementChild.remove();
    }
    var rows = document.getElementById("grid-rows");
    var numRows = rows.children.length;
    var allRows = rows.getElementsByTagName("tr");
    for (let i = 0; i < numRows; i++) {
        allRows[i].lastElementChild.remove();
    }
}

//fills all the cell with selected color
function fillAllCell() {
    selectedColor = document.getElementById("color-picker").value;
    var tHeadCells = document.getElementById("grid-columns").getElementsByTagName("th");
    //the two loops color all the cells
    for (let i = 0; i < tHeadCells.length; i++) {
        tHeadCells[i].style.backgroundColor = selectedColor;
    }
    var tBodyCells = document.getElementById("grid-rows").getElementsByTagName("td");
    for (let i = 0; i < tBodyCells.length; i++) {
        tBodyCells[i].style.backgroundColor = selectedColor;
    }
}

//a function that adds onclick to all the cells
function assignCallEventHandlers() {
    var table = document.getElementById("grid");
    var rows = table.rows;
    var numCols = rows[0].cells.length;
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < numCols; j++) {
            let currentCell = table.rows[i].cells[j];
            currentCell.onclick = function () {
                let selectedColor = document.getElementById("color-picker").value;
                currentCell.style.backgroundColor = selectedColor;
            }
        }
    }
}

var isDragging = false;
function handleMouseDown(e) {
    var currentElement = document.elementFromPoint(e.clientX, e.clientY);
    if (currentElement.tagName === "TD" || currentElement.tagName === "TH") {
        isDragging = true;
    }
}

function handleMouseOver(e) {
    if (isDragging) {
        var currentElement = document.elementFromPoint(e.clientX, e.clientY);
        if (currentElement.tagName === "TD" || currentElement.tagName === "TH") {
            selectedColor = document.getElementById("color-picker").value;
            currentElement.style.backgroundColor = selectedColor;
        }
    }
}

function handleMouseUp() {
    isDragging = false;
}

addEventListener("mousedown", handleMouseDown);
addEventListener("mouseover", handleMouseOver);
addEventListener("mouseup", handleMouseUp);
function restore() {
    var tHeadCells = document.getElementById("grid-columns").getElementsByTagName("th");
    for (let i = 0; i < tHeadCells.length; i++) {
        tHeadCells[i].style.backgroundColor = "";
    }
    var tBodyCells = document.getElementById("grid-rows").getElementsByTagName("td");
    for (let i = 0; i < tBodyCells.length; i++) {
        tBodyCells[i].style.backgroundColor = "";
    }
}

//fills all the colors to cells that are not colored with the selected color 
function fillUncoloredCell() {
    selectedColor = document.getElementById("color-picker").value;
    var tHeadCells = document.getElementById("grid-columns").getElementsByTagName("th");
    for (let i = 0; i < tHeadCells.length; i++) {
        var headCell = tHeadCells[i];
        if (!headCell.style.backgroundColor) {
            headCell.style.backgroundColor = selectedColor;
        }
    }
    var tBodyCells = document.getElementById("grid-rows").getElementsByTagName("td");
    for (let i = 0; i < tBodyCells.length; i++) {
        var bodyCell = tBodyCells[i];
        if (!bodyCell.style.backgroundColor) {
            bodyCell.style.backgroundColor = selectedColor;
        }
    }
}