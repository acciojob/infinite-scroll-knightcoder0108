const list = document.querySelector('ul'); // get the list element
let itemCount = 10; // number of items to add by default

// Add initial items to the list
for (let i = 1; i <= itemCount; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  list.appendChild(li);
}

// Function to add more items to the list
function addItems() {
  for (let i = 1; i <= 2; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Check if the user has reached the bottom of the list
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    addItems();
  }
});