## Use display: flex to Position Two Boxes

This section uses alternating challenge  
styles to show how to use CSS to position elements in a flexible way.  
First, a challenge will explain theory,  
then a practical challenge using a simple  
tweet component will apply the flexbox concept.

Placing the CSS property _display: flex;_  
on an element allows you to use  
other flex properties to build a responsive page.

Add the CSS property _display_  
to _#box-container_ and set its value to flex.

<style>
  #box-container {
    height: 500px;

  }

  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>
<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
