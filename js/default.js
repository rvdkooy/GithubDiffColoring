$(function(){

	chrome.storage.sync.get({
        addedNum: '#90EE90',
        addedHighlight: '#00FF00',
        deletedHighlight: '#FFDDDD',
        deletedNum: '',
    }, function(items) {

    	$('.blob-num-addition').css('background-color', items.addedNum);
    	$('.blob-num-addition').css('color', 'white');
		$('.blob-code-addition').css('background-color', '#00FF00');
    });
})