//Event Bubbling : process where an event triggers on the target element and then propagates upwards through its ancestors in the DOM.

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent clicked');
});

child.addEventListener('click', () => {
  console.log('Child clicked');
});

//here first Parent clicked then print child clicked parent clicked becuase it bubles upward means propagating upwards.

//Use event.stopPropagation() to prevent the event from propagating upwards.

child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Child clicked only');
});



//Event Capturing : also called "trickling", is the reverse of bubbling. The event propagates from the root element down to the target element.

// Enable event capturing
// Capturing is enabled by passing { capture: true } to addEventListener() as the third argument.

const parent1 = document.getElementById('parent');
const child2 = document.getElementById('child');

parent1.addEventListener(
  'click', () => {
    console.log('Parent capturing');
  }, { capture: true },
);

child2.addEventListener('click', () => {
  console.log('Child clicked');
});








// Mouseenter and Mouseover :

// MouseEnter : does not bubble up Dom tree.
// Triggered only when the mouse ointer enters the element itself,excluding its children.
//Fires a single event when entering the target element

// mouseover :
// Bubbles up the DOM tree.
// Triggered when the mouse pointer enters the target element or any of its children.
// Fires multiple events when moving over child elements.