$(function(){
	$('#case-study-entry').focus();
	//search for input gene after "Submit" button is pressed
	$('#submit-case-study').click(searchGene);
	//search for input gene after "Enter" key is pressed
	$('#case-study-entry').on("keydown", function(e){
		if(e.keyCode == 13){
			searchGene();
		}
	});
	//check if textfield is empty --> enables reset
	$('#case-study-entry').on("keyup", checkTextField);
	//if reset is pressed, reset search box and stage
	$('#reset-search').click(reset);
});

//function for displaying api call results with input gene
function searchGene(){
	var userInput = document.getElementById('case-study-entry').value;
    var url = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=" + userInput;
    $('#stage').load(url);
    //after table is loaded, enable export to excel button
    $('#export-to-xls').attr('disabled', false);  
}

function checkTextField(){
	if($('#case-study-entry').val().length > 0){
		$('#submit-case-study').attr('disabled', false);
		$('#reset-search').attr('disabled', false);
	}
	else{
		if(!$.trim($('#stage').html()).length){
			$('#reset-search').attr('disabled', true);
		}
		$('#submit-case-study').attr('disabled', true);
	}
}

function reset(){
	$('#case-study-entry').val('');
	$('#case-study-entry').focus();
	document.getElementById('stage').innerHTML = "";
	$('#export-to-xls').attr('disabled', true);
	$('#reset-search').attr('disabled', true);
	$('#submit-case-study').attr('disabled', true);
}