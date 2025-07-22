// PROPERTY SELECTORS
console.log(document.querySelector('[translate = "no"]').tagName);

// STATIC EVENTS (trigger once, trigger automatically, all at once)
document.querySelector('[popovertargetaction = "show"]').onclick = console.log("Clicked 1!");
document.querySelector('[popovertargetaction = "show"]').onclick = console.log("Clicked 2!");

// STATIC EVENTS (trigger each time action performed, doesn't trigger automatically but when action performed, overwrites so trigger only latest)
document.querySelector('[popovertargetaction = "show"]').onclick = () => { console.log("Clicked 3!") };
document.querySelector('[popovertargetaction = "show"]').onclick = () => { console.log("Clicked 4!") };

// DYNAMIC EVENTS USING EVENT LISTENERS (each time action performed, doesn't trigger automaticelly, trigger all at once)
document.querySelector('[id = "gg"]').addEventListener("click", () => { console.log("Clicked 5!"); });
document.querySelector('[id = "gg"]').addEventListener("click", () => { console.log("Clicked 6!"); });

// DYNAMIC EVENTS USING EVENT LISTENERS (non-console.log, performing visible changes on browser)
document.querySelector('[id = "gg"]').addEventListener("click", () => { document.querySelector('[draggable = "true"]').style.color = "blue"; });



console.log("01", document.documentElement);
console.log("02", document.head);
console.log("03", document.body);

console.log("04", document.body.childNodes);
console.log("05", document.body.children);



console.log("06", document.head.firstChild);
console.log("07", document.head.lastChild);

console.log("08", document.head.firstElementChild);
console.log("09", document.head.lastElementChild);



for (node of document.head.children) {
    console.log("10", node.tag);
    console.log("11", node.tagName);}

console.log("12", Array.from(document.body.children));



console.log("13", document.head.children[1].tagName);

console.log("14", document.head.children[1].previousSibling);
console.log("15", document.head.children[1].nextSibling);

console.log("16", document.head.children[1].previousElementSibling);
console.log("17", document.head.children[2].nextElementSibling.textContent);



console.log("18", document.getElementsByName("name"));
console.log("18", document.getElementsByTagNameNS("DOM.html", "name"));
console.log("19", document.getElementsByTagName("script"));
console.log("20", document.getElementsByClassName("class"));
console.log("21", document.getElementById("id"));



// Query Selectors are static where as Get Elements are dynamic.
console.log("22", document.querySelector('[title = "title"]'));
console.log("23", document.querySelectorAll('[title = "title"]'));

console.log("24", document.querySelector('.class'));
console.log("25", document.querySelectorAll('.class'));

console.log("26", document.querySelector('#id'));
console.log("27", document.querySelectorAll('#id'));



console.log("28", document.getElementById("id").textContent);
console.log("29", document.getElementById("id").innerHTML);

console.log("30", document.getElementById("id").getAttributeNames());
console.log("31", document.getElementById("id").getAttribute("title"));
console.log("32", document.getElementById("id").getAttributeNode("title").value);