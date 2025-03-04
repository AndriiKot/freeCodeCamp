<a id=top></a>

<details>
  <summary>
    <h4>Description of the task</h4>
  </summary>
  <h3>Step 3</h3>
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

# Random Background Color changer

Debugging is the process of going through your code, finding any issues, and fixing them.

In this project, you will help CamperBot build a random background color changer and help them find and fix errors.

#### preview

![preview 'Random Background Color Changer step 3'](https://github.com/AndriiKot/JS__Random_Background_Color_Changer__freeCodeCamp/blob/main/preview/step1.png)

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
  console.log(Math.floor(darkColorsArr.length * Math.random()));
}

getRandomIndex();
```

[back to top](#top)
