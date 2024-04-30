// Only change code below this line
function urlSlug(title) {
    return title.trim().toLowerCase().split(/\s+/).join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
