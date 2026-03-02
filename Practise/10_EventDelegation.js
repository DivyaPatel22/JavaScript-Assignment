// Event delegation :---- is an efficient way to manage events for multiple elements by attaching a single event listener to their common parent.

// <ul id="item-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

const item = document.getElementById('item-list');

item.addEventListener('click',(event)=>{
    if(event.target.tagName == 'LI'){
        console.log(`clicked on ${event.target.textContent}`);
    }
})