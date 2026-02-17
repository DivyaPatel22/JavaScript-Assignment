// Event delegation :---- is an efficient way to manage events for multiple elements by attaching a single event listener to their common parent.

const item = document.getElementById('item-list');

item.addEventListener('click',(event)=>{
    if(event.target.tagName == 'li'){
        console.log(`clicked on ${event.target.textContent}`);
    }
})