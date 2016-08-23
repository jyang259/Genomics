$(function(){
	$('#cancer-study-entry').focus();
	//search for input gene after "Submit" button is pressed
	$('#submit-cancer-study').click(searchCancerStudy);
	//search for input gene after "Enter" key is pressed
	$('#cancer-study-entry').on("keydown", function(e){
		if(e.keyCode == 13){
			searchCancerStudy();
		}
	});
	//check if textfield is empty --> enables reset
	$('#cancer-study-entry').on("keyup", checkTextField);
	//if reset is pressed, reset search box and stage
	$('#reset-search').click(reset);

	//*************************
	//for now - testing tsv parsing function in d3 library - https://github.com/d3/d3-dsv/blob/master/README.md#tsvParseRows
	$('#export-to-xls').click(parseTSV);
	//*************************
});

//function for displaying api call results with input gene
function searchCancerStudy(){
	var userInput = document.getElementById('cancer-study-entry').value;
    var url = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=" + userInput;
    $('#stage').load(url);
    //after table is loaded, enable export to excel button
    $('#export-to-xls').attr('disabled', false);  
}

function checkTextField(){
	if($('#cancer-study-entry').val().length > 0){
		$('#submit-cancer-study').attr('disabled', false);
		$('#reset-search').attr('disabled', false);
	}
	else{
		if(!$.trim($('#stage').html()).length){
			$('#reset-search').attr('disabled', true);
		}
		$('#submit-cancer-study').attr('disabled', true);
	}
}

//reset text boxes and stage
function reset(){
	$('#cancer-study-entry').val('');
	$('#cancer-study-entry').focus();
	document.getElementById('stage').innerHTML = "";
	$('#export-to-xls').attr('disabled', true);
	$('#reset-search').attr('disabled', true);
	$('#submit-cancer-study').attr('disabled', true);
}

//
function parseTSV(){
	var unparsedData = document.getElementById('stage').innerHTML;
	var parsedData = d3.tsvParse(unparsedData);
	console.log(parsedData);
	/*
	var unparsedData = document.getElementById('stage').innerHTML;
	document.getElementById('stage').innerHTML = "";
	document.getElementById('stage').innerHTML = "new stuff" + unparsedData; 
	*/
}

//create table corresponding to url output
function createTable(parsedTSV){
//http://stackoverflow.com/questions/16126357/create-html-table-using-javascript
}

