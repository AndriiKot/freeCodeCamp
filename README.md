<a id=top></a>

# Random Background Color changer

Debugging is the process of going through your code, finding any issues, and fixing them.

In this project, you will help CamperBot build a random background color changer and help them find and fix errors.

<details>
  <summary>
    <h4>Description of the Tasks</h4>
  </summary>
  <details>
      <summary>
        <h5>Step 1</h5>
      </summary>
      <p>
        CamperBot is trying to build out a random background color changer. But they keep running into issues and need your help to debug the code
      </p>
      <p>
        CamperBot has already added the HTML and CSS for the project. But they are confused as to why none of the styles and content is showing up on the page.
      </p>
      <p>
        When they open up the console they see this message:
      </p>
      <details>
        <summary>
          <h5>Example Code</h5>
        </summary>
        <code>SyntaxError: unknown: Unexpected token, expected "," (5:2)</code>
      </details>
      <p>
        Syntax errors are thrown when the JavaScript engine encounters something it can't interpret. In this case, it looks like CamperBot has syntax errors in the <code>darkColorsArr</code> array.
      </p>
      <p>
        Fix the syntax errors in the <code>darkColorsArr</code> array and you should see the content and styles show up on the page.
      </p>
  </details>
  <details>
    <summary>
      <h5>Step 2</h5>
    </summary>
    <p>
      Now, CamperBot is trying to create a function that will return a random index from the <code>darkColorsArr</code>. But they have run into the following error message:
    </p>
    <details>
      <summary>
        <h5>Example Code</h5>
      </summary>
      <code>Uncaught ReferenceError: math is not defined</code>
    </details>
    <p>
      A <code>ReferenceError</code> is thrown when a non-existent variable is referenced. In this case, it looks like CamperBot is trying to use <code>math</code> but JavaScript doesn't have a <code>math</code> object.
    </p>
    <p>
      Fix CamperBot's error in the <code>math.random()</code> line and open up the console again.
    </p>
  </details>
  <details>
  <summary>
    <h5>Step 3</h5>
  </summary>
        <p>
          Now that the <code>ReferenceError</code> is resolved, the console is displaying the correct results for a random number between <code>0</code> and <code>9</code>. But CamperBot was not expecting to see decimal numbers like these:
        </p>
            <details>
                <summary>
                    <h5>Example Code</h5>
                </summary>
                <code>0.015882899879771095</code><br>
                <code>2.114596286197641</code><br>
                <code>6.040964780197666</code><br>
            </details>
        <p>
            Update the <code>console</code> statement to print a whole number between <code>0</code> and <code>9</code>.
        </p>
        <p>
            Remember that you worked with a method in the Role Playing Game that rounds a number down to the nearest whole number.
        </p>
    </details>
    <details>
    <summary>
      <h5>Step 4</h5>
    </summary>
    <p>
        CamperBot is finished with building out the
        getRandomIndex function and it is working as expected. But now they are running into this issue
        when trying to create a reference to the <code>body</code> element in the DOM:
    </p>
    <p>
        <code>Uncaught TypeError: document.queryselector is not a function</code>
    </p>
    <p>
        A TypeError means that the code is trying to perform
        an operation on a value that is not of the expected type.
    </p>
    <p>
        Fix the TypeError by updating the document.queryselector
        method to the correct method name that selects an element from the DOM.
    </p>
  </details>
  <details>
    <summary>
      <h5>Step 5</h5>
    </summary>
      <p>
        CamperBot has created a new variable called <code>bgHexCodeSpanElement</code> to store the reference to the <code>span</code> element with the <code>id</code> of <code>bg-hex-code</code>. However, when they try to log that variable to the console, they get <code>null</code>.
      </p>
      <p>
        <code>null</code> is a special value in JavaScript that represents the absence of a value. This can happen when you try to access a property of an object that doesn't exist
        In this case, CamperBot is not passing in the correct selector to the <code>document.querySelector</code> method
      </p>
      <p>
        Fix the <code>document.querySelector("bg-hex-code")</code> line so that it correctly selects the element with the <code>id</code> of <code>bg-hex-code</code>.
      </p>
  </details>
  <details>
  <summary>
    <h5>Step 6</h5>
  </summary>
      <p>
        CamperBot has now created a function called <code>changeBackgroundColor</code> that changes the background color of the page to a random color from the <code>darkColorsArr</code> array. The function also displays the hex code for that new color.
      </p>
      <p>
        When they try to test out this function, they notice that the background color is not changing and the text shows the following:
      </p>
      <details>
        <summary>
          <h5>Example Code</h5>
        </summary>
        <code>Hex Code: undefined</code>
      </details>
      <p>
        <code>undefined</code> is showing up here because the <code>color</code> variable is not being set correctly.
      </p>
      <p>
        Fix the error in the <code>darkColorsArr[getRandomIndex]</code> line so that the color variable is set to a random color from the <code>darkColorsArr</code> array.
      </p>
    </details>
    <details>
      <summary>
        <h5>Step 7</h5>
      </summary>
        <p>
            CamperBot is trying to create a new variable called <code>btn</code> to store the reference to the button element with the <code>id</code> of <code>click-btn</code>
        </p>
        <p>
            However, when they try to log the button element to the console, they see that the button element is <code>null</code>.
        </p>
        <p>
             Open up the <code>index.html</code> to see the correct <code>id</code> name for that button element.
        </p>
        <p>
            Then fix the error for the <code>document.querySelector("#click-btn");</code> line.
        </p>
    </details>
    <details>
      <summary>
        <h5>Step 8</h5>
      </summary>
        <p>
          CamperBot has finished building out their random background color changer. However, when they click the button, the background color does not change.
        </p>
        <p>
          It looks like they are trying to use the <code>onclick</code> property but they are using it incorrectly. The <code>onclick</code> property should be assigned a function reference.
        </p>
        <p>
            Fix the error in the <code>btn.onclick = changeBackgroundColor;</code> line.
        </p>
        <p>
            Remember that you worked with the <code>onclick</code> property in the Role playing game project. Look back at the final solution to see how <code>onclick</code> was properly used.
        </p>
        <p>
            Once you fix that final bug, the random background color changer will be complete!
        </p>
    </details>
</details>

#### preview

![preview 'Random Background Color Changer step 8'](https://github.com/AndriiKot/JS__Random_Background_Color_Changer__freeCodeCamp/blob/main/preview/end-project.png)

| [index.html](#indexhtml) | [styles.css](#stylescss) | [script.js](#scriptjs) |
| ------------------------ | ------------------------ | ---------------------- |

### technologies

<table>
  <thead>
    <tr>
      <th height=33 width=91>JavaScript</th>
      <th height=33 width=91>CSS</th>
      <th height=33 width=91>HTML</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td height=33 width=91>
        <a href=https://ecma-international.org/publications-and-standards/standards/>
          <img src=https://github.com/AndriiKot/JS__Role_Playing_Game__FreeCodeCamp/blob/main/preview/icons/javascript-1.svg alt=JavaScript>
        </a>
      </td>
      <td height=33 width=91>
        <a href=https://www.w3.org/Style/CSS/>
          <img src=https://github.com/AndriiKot/JS__Role_Playing_Game__FreeCodeCamp/blob/main/preview/icons/css.svg alt=CSS>
        </a>
      </td>
      <td height=33 width=91>
        <a href=https://html.spec.whatwg.org/multipage/>
          <img src=https://github.com/AndriiKot/JS__Role_Playing_Game__FreeCodeCamp/blob/main/preview/icons/html.svg alt=HTML>
        </a>
      </td>
    </tr>
  </tbody>
</table>

[back to top](#top)

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build a random background color changer</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Random Background Color changer</h1>

    <main>
      <section class="bg-information-container">
        <p>Hex Code: <span id="bg-hex-code">#110815</span></p>
      </section>

      <button class="btn" id="btn">Change Background Color</button>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
```

[back to top](#top)

### styles.css

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --yellow: #f1be32;
  --golden-yellow: #feac32;
  --dark-purple: #110815;
  --light-grey: #efefef;
}

body {
  background-color: var(--dark-purple);
  color: var(--light-grey);
  text-align: center;
}

.bg-information-container {
  margin: 15px 0 25px;
  font-size: 1.2rem;
}

.btn {
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  color: var(--dark-purple);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}
```

[back to top](#top)

### script.js

```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn");

btn.onclick = changeBackgroundColor;
```

[back to top](#top)
