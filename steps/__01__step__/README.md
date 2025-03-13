<a id=top></a>

# Building a Calorie Counter

<details>
  <summary>
    <h4>Description of the task</h4>
  </summary>
  <h3>Step 1</h2>
  <p>
    In this project, you'll learn to create a calorie counter form that enables users to input their daily calorie budget and the calorie counts of various meals. The form will then calculate and display whether the user is in a calorie deficit or surplus.
  </p>
  <p>
    You have been provided with boilerplate CSS and HTML. However, you need to build your calorie counter form.
  </p>
  <p>
    Feel free to explore the HTML and CSS, then add a <code>form</code> element and give it an <code>id</code> set to <code>calorie-counter</code>.
  </p>
</details>

#### preview

![preview 'Random Background Color Changer'](https://github.com/AndriiKot/JS__Validation_by_Building_a_Calorie_Counter__freeCodeCamp/blob/main/images/previews/preview_step01.png)

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
          <img src=https://github.com/AndriiKot/JS__Validation_by_Building_a_Calorie_Counter__freeCodeCamp/blob/main/images/icons/javascript-1.svg alt=JavaScript>
        </a>
      </td>
      <td height=33 width=91>
        <a href=https://www.w3.org/Style/CSS/>
          <img src=https://github.com/AndriiKot/JS__Validation_by_Building_a_Calorie_Counter__freeCodeCamp/blob/main/images/icons/css.svg alt=CSS>
        </a>
      </td>
      <td height=33 width=91>
        <a href=https://html.spec.whatwg.org/multipage/>
          <img src=https://github.com/AndriiKot/JS__Validation_by_Building_a_Calorie_Counter__freeCodeCamp/blob/main/images/icons/html.svg alt=HTML>
        </a>
      </td>
    </tr>
  </tbody>
</table>

| [index.html](#indexhtml) | [styles.css](#stylescss) | [script.js](#scriptjs) |
| ------------------------ | ------------------------ | ---------------------- |

</table>

[Back to top](#top)

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Calorie Counter</title>
  </head>
  <body>
    <main>
      <h1>Calorie Counter</h1>
      <div class="container">
        <form id="calorie-counter"></form>
      </div>
    </main>
  </body>
</html>
```

[Back to top](#top)

### styles.css

```css
:root {
  --light-grey: #f5f6f7;
  --dark-blue: #0a0a23;
  --fcc-blue: #1b1b32;
  --light-yellow: #fecc4c;
  --dark-yellow: #feac32;
  --light-pink: #ffadad;
  --dark-red: #850000;
  --light-green: #acd157;
}

body {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  font-size: 18px;
  background-color: var(--fcc-blue);
  color: var(--light-grey);
}

h1 {
  text-align: center;
}

.container {
  width: 90%;
  max-width: 680px;
}

h1,
.container,
.output {
  margin: 20px auto;
}

label,
legend {
  font-weight: bold;
}

.input-container {
  display: flex;
  flex-direction: column;
}

button {
  cursor: pointer;
  text-decoration: none;
  background-color: var(--light-yellow);
  border: 2px solid var(--dark-yellow);
}

button,
input,
select {
  min-height: 24px;
  color: var(--dark-blue);
}

fieldset,
label,
button,
input,
select {
  margin-bottom: 10px;
}

.output {
  border: 2px solid var(--light-grey);
  padding: 10px;
  text-align: center;
}

.hide {
  display: none;
}

.output span {
  font-weight: bold;
  font-size: 1.2em;
}

.surplus {
  color: var(--light-pink);
}

.deficit {
  color: var(--light-green);
}
```

[Back to top](#top)

### script.js

```js
'use strict';
```

[Back to top](#top)
