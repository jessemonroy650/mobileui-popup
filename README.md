# mobileui-popup
A simple popup done with &lt;div> in landscape mode


## CSS code for popup ##
```
	#popup {
		height:200px;
		width:300px;
		padding:0.5em;
		background-color:#eeeeee;
		border:1px black solid;
		position:absolute;
		left:50px;
		top:50px;
		opacity: 1;
		border-radius: 0.5em;
		-moz-transition: opacity 1.5s ease-in-out;
		transition: opacity 1.5s ease-inout;
	}
```

## line by line break down ##

**box**

* height:200px;  - height of the box
* width:300px;   - width of the box
* padding:0.5em; - space between the edge of the box and the text
* background-color:#eeeeee; - the color inside the box
* opacity: 1; - the opposite of transparency (1 = not transparent)
* border:1px black solid; - the box border
* border-radius: 0.5em; - the round corner and border to the box

**placement**

* position:absolute; - places the box relative the the view port (screen in this case)
* left:50px; - 50 px from the left
* top:50px; - 50 px from the top

**display trick (not working)**

* -moz-transition: opacity 1.5s ease-in-out;
* transition: opacity 1.5s ease-inout;
