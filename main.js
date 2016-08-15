(function($) {
    $.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
            if (e.keyCode == 13){
            	func.apply(this, [e]);
            	e.stopPropagation();
            }
        });               
        return this; 
     };
})(jQuery);

$( function () {
    //console.log($("geneEntry"));
    $("#geneEntry").onEnter( function() {
    	var userInput = document.getElementById('geneEntry').value;
    	var url = "http://www.cbioportal.org/webservice.do?cmd=getGeneticProfiles&cancer_study_id=" + userInput;
        $('#stage').load(url);                       
    });
});
