// Open a file browsing dialog for locating  a CSV file, return an array.
function csv_to_array(){
	var data = [];
	var csvFile = File.openDialog();

	// Read CSV file
	if (csvFile) {
		csvFile.encoding = 'UTF8';
		csvFile.open('r');
		var csv = csvFile.read();
		csvFile.close();
		
		//Split to list/1d array of rows
		var rows = csv.split("\n");

		// Split rows to cells
		for (var i = 0; i < rows.length; i++) {
		  var cells = rows[i].split(";");
		  data.push( cells );
		}
		
		//Return 2d array
		return data
				
	} else {
		// Stop execution if a file is not selected
		throw new Error("No file selected.")
	}
}


// Adds a blank space as a thousand separator
function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


// Necessary for function getIndexOfK to work.
Array.prototype.indexOf = function (item) {
	var index = 0, length = this.length;

	for ( ; index < length; index++ ) {
		if ( this[index] === item )
			return index;
	}

	return -1;

}


// Get index of variable in 2d array
function getIndexOfK(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}
