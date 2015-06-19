# mobileui-popup
A simple popup done with &lt;div> in landscape mode.

This has three steps that needed to be accomplished with javascript.

1. add the ```popUp``` class
2. add the ```fadeout``` class with a delay
3. reset to the initial state with a slight delay


## CSS code for popup ##
```
    .hidden {visibility:collapse;display:none;}
    .popUp {
        visibility:visible;display:block;
        opacity: 1;
        transition: opacity 1.5s linear;
    }
    .fadeOut {
        opacity: 0;
        transition: opacity 1.5s linear;
    }
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

**display trick**
Working with help from: http://fvsch.com/code/transition-fade/

* .hidden - set the block to initial be hidden
** visibility:hidden; - hidden makes so the block is not seen, in this case collapse will work too.
** display:none; - none makes it so NO space is taken in the "flow"
* .popUp - set the block to be seen & set the initial state for animation
** opacity: 1; - 1=fully visible, 0=hidden; 
** transition: opacity 1.5s ease-in-out;
* .fadeOut - set the block to fadeOut (via CSS animation)
** opacity: 0;
** transition: opacity 1.5s ease-in-out;


