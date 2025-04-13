# Pyramid Generator

JavaScript is a powerful scripting language
that you can use to make web pages interactive.
It's one of the core technologies of the web,
along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental
programming concepts in JavaScript by coding your
own Pyramid Generator. You'll learn how to work
with arrays, strings, functions, loops,
if/else statements, and more.

### technologies

<table>
  <thead>
    <tr>
      <th height=33 width=91>JavaScript</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td height=33 width=91>
        <a href=https://ecma-international.org/publications-and-standards/standards/>
          <img src=https://github.com/AndriiKot/JS__Pyramid_Generator__FreeCodeCamp/blob/main/icons/javascript-1.svg alt=JavaScript>
        </a>
      </td>
    </tr>
  </tbody>
</table>


### Result

```md
         !
        !!!
       !!!!!
      !!!!!!!
     !!!!!!!!!
    !!!!!!!!!!!
   !!!!!!!!!!!!!
  !!!!!!!!!!!!!!!
 !!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!
```

### Code

```js
const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
```

[Back to top](#pyramid-generator)



