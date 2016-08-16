
//search for input gene after "Enter" key is pressed
$(document).keypress(function(e){
	if(e.which == 13){
		searchGene();
	}
});

//search for input gene after "Submit" button is pressed
$(function(){
	$('#submit-gene').click(searchGene);
});

//function for displaying api call results with input gene
function searchGene(){
	var userInput = document.getElementById('gene-entry').value;
    var url = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=" + userInput;
    $('#stage').load(url);
    //after table is loaded, enable export to excel button
    $('#export-to-xls').attr('disabled', false);  
}

function reset(){
	$('#gene-entry').val('');
	$('#stage').val('');
	$('#export-to-xls').attr('disabled', true);
}