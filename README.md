# mobileui-popup
A simple popup done with &lt;div> in landscape mode.

This has three steps that needed to be accomplished with some help from Javascript.

1. add the ```popUp``` class
2. add the ```fadeout``` class with a delay
3. reset to the initial state with a slight delay


## CSS code for popup ##
```
    #popup {
        height:200px;
        width:300px;
        background-color:#eeeeee;
        padding:0.5em;
        border:1px black solid;
        border-radius: 0.5em;

        position:absolute;
        left:50px;
        top:50px;
    }
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
```

## line by line break down ##

**box**

* height:200px;  - height of the box
* width:300px;   - width of the box
* background-color:#eeeeee; - the background color inside the box
* padding:0.5em; - space between the edge of the box and the text
* border:1px black solid; - the box border
* border-radius: 0.5em; - the round corner and border to the box

**placement**

* position:absolute; - places the box relative to its closest positioned ancestor or to the containing block (the screen or 'view port' in this case)
* left:50px; - 50 px from the left
* top:50px; - 50 px from the top

**display trick**<br>
Working with help from: http://fvsch.com/code/transition-fade/

**.hidden - set the block to initial be hidden**
* visibility:hidden; - *hidden* makes so the block is not seen, in this case collapse will work too.
* display:none; - *none* makes it so NO space is taken in the "flow"


**.popUp - set the block to be seen & set the initial state for animation**
* visibility:visible;display:block; -- toggles to make visible
* below here NOT required, but here for completeness
* opacity: 1; -- 1=fully visible, 0=hidden, anything between 0.0&lt;-&gt;1.0 is the tranparency percentage
* transition: opacity 1.5s ease-in-out; -- 

**.fadeOut - set the block to fadeOut (via CSS animation)**
* opacity: 0; - make fully transparent
* transition: opacity 1.5s ease-in-out; - animate the 'opacity' for '1.5' seconds and the 'ease-in-out' formula
