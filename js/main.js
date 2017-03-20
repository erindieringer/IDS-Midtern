function onReady(callback) {
	
	document.getElementById('contents').style.display = 'none';
	
    var intervalID = window.setInterval(checkReady, 2500);
  
    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);

        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('contents', true);
    show('loading', false);

});