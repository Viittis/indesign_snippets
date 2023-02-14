#target InDesign;

// Include an external JS file that includes functions
#include './indesign_functions.js'

// Get all tables from the active/current page
var allTables = app.activeWindow.activePage.textFrames.everyItem().tables.everyItem().getElements();

// Read a csv file in to a 2d array (prompt)
var data = csv_to_array();

// Get cells from current a table headerrow
var headerRowCells = currentTable.rows[0].cells.everyItem().getElements();

// Get text for a cell
cellText = currentTable.rows[0].cells[i].contents;

// Update cell text
var updateCell = currentTable.rows[0].cells[0]
updateCell.contents = "str"

// Get all values a first column in a table
codeColCells = currentTable.columns[0].cells.everyItem().contents;
