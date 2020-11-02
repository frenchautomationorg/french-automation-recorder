const ipc = require('electron').ipcRenderer;

/* Click events */
document.addEventListener('click', function (e) {
	e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;

    if (target.tagName == 'INPUT') {

	    let data = {};
	    data.id = target.id;
	    data.name = target.name;
	    data.tagName = target.tagName;
	    data.value = target.value;
	    data.type = target.type;
	    data.text = text;

    	if (target.value == '') {
    		data.operation = 'focus';
    	}
    	else {
    		data.operation = 'input';
    	}

  		ipc.send('clickEvent', data);
  	}
    else if (target.tagName == 'BUTTON') {

	    let data = {};
	    data.id = target.id;
	    data.name = target.name;
	    data.tagName = target.tagName;
	    data.value = target.value;
	    data.type = target.type;
	    data.text = text;
		data.operation = 'click';
  		ipc.send('clickEvent', data);
  	}
    else if (target.tagName == 'A') {

        let data = {};
        data.id = target.id;
        data.name = target.name;
        data.tagName = target.tagName;
        data.value = target.value;
        data.href = target.href;
        data.text = text;
        data.operation = 'click';
        ipc.send('clickEvent', data);
    }
    else {
        let data = {};
        data.id = target.id;
        data.name = target.name;
        data.tagName = target.tagName;
        data.value = target.value;
        data.href = target.href;
        data.text = text;
        data.operation = 'click';
        ipc.send('clickEvent', data);
    }

});

/* Submit forms */
document.addEventListener('submit', function (e) {
	e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;

    let data = {};
    data.id = target.id;
    data.name = target.name;
    data.tagName = target.tagName;
    data.value = target.value;
    data.type = target.type;
    data.action = target.action;
    data.method = target.method;
    data.text = text;
	data.operation = 'submit';

	ipc.send('submitEvent', data);
  	
});

/* Change events */
document.addEventListener('change', function (e) {
	e = e || window.event;
    var target = e.target || e.srcElement,
    text = target.textContent || target.innerText;



    if (target.tagName == 'INPUT') {

	    let data = {};
	    data.id = target.id;
	    data.name = target.name;
	    data.tagName = target.tagName;
	    data.value = target.value;
	    data.type = target.type;
	    data.text = text;

    	if (target.value == '') {
    		data.operation = 'focus';
    	}
    	else {
    		data.operation = 'input';
    	}

    	ipc.send('changeEvent', data);
    }

    console.log(target.tagName);
    if (target.tagName == 'SELECT') {

        let data = {};
        data.id = target.id;
        data.name = target.name;
        data.tagName = target.tagName;
        data.value = target.value;
        data.type = target.type;
        data.text = text;
        data.operation = 'select';

        ipc.send('changeEvent', data);
    }

  	
});




