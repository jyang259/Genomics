$(function(){
	//search for input gene after "Submit" button is pressed
	$('#submit-gene').click(searchGene);
	//check if textfield is empty --> enables reset
	$('#gene-entry').on("keyup", checkTextField);
	//if reset is pressed, reset search box and stage
	$('#reset-search').click(reset);
});

//search for input gene after "Enter" key is pressed
$(document).keypress(function(e){
	if(e.which == 13){
		searchGene();
	}
});

//function for displaying api call results with input gene
function searchGene(){
	var userInput = document.getElementById('gene-entry').value;
    var url = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=" + userInput;
    $('#stage').load(url);
    //after table is loaded, enable export to excel button
    $('#export-to-xls').attr('disabled', false);  
}

function checkTextField(){
	if($('#gene-entry').val().length > 0){
		$('#reset-search').attr('disabled', false);
		$('#submit-gene').attr('disabled', false);
	}
	else{
		$('#reset-search').attr('disabled', true);
		$('#submit-gene').attr('disabled', true);
	}

}

function reset(){
	$('#gene-entry').val('');
	document.getElementById('stage').innerHTML = "";
	$('#export-to-xls').attr('disabled', true);
	$('#reset-search').attr('disabled', true);
	$('#submit-gene').attr('disabled', true);
}