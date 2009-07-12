function onLoad() 
{
	window.screenX += 24;
	window.screenY += 45;
	setTimeout(ensureSizeAndPosition, 0);
}

function ensureSizeAndPosition() 
{
	var windowX = window.screenX;
  	if (windowX < screen.availLeft)
    	windowX = screen.availLeft;
  	else 
  	{
    	var availX = screen.availLeft + screen.availWidth - window.outerWidth;
   	 	if (windowX > availX)
     		windowX = availX;
  	}
  	var windowY = window.screenY;
  	
  	if (windowY < screen.availTop)
    	windowY = screen.availTop;
  	else 
  	{
    	var availY = screen.availTop + screen.availHeight - window.outerHeight;
    	if (windowY > availY)
      		windowY = availY;
  	}
  	
  	window.moveTo(windowX, windowY);
}
