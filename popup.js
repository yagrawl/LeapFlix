var c = 0;
function myCounter() {
	
	c = c+1;
    document.getElementById("timer").innerHTML = c;
    console.log('Time: ', c);
}

function startCount()
{
	myTimer = setInterval(myCounter, 1000);
	myCounter();
}

document.getElementById("timer").addEventListener('click', startCount);

var tabLink = 'Leaping..';


  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('getUrl').addEventListener('click', clickHandler);
  });

function stopCount()
{
	clearInterval(myTimer);
}
function clickHandler(e) {
	
	stopCount();
	chrome.tabs.getSelected(null,function(tab) 
	{
		var track = tab.url;
		check = track.substring(47, 55);
		switch(check.toString())
		{
			case '14170082':
				num = (c + 115).toString();
				break;

			case 'http':
				num = (c + 46).toString();
				break;

			default:
				num = (c + 69).toString();
		}
		tablink = tab.url + '&t=' + num;
		console.log('Tab: ', tablink);
	});

	chrome.tabs.update({url: tablink });
	window.close(); 

}




