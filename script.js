//your code here!
// script.js

const list = document.getElementById('infi-list');

// Function to add list items
function addItems(count = 2) {
  for (let i = 0; i < count; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(listItem);
  }
}

// Initially load 10 items
addItems(10);

// Infinite Scroll Detection
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    addItems(2);
  }
});


