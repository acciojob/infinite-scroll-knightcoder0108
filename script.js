//your code here!
document.addEventListener('DOMContentLoaded', function () {
    const list = document.getElementById('infinite-list');

    // Function to add list items
    function addListItems(numItems) {
        for (let i = 0; i < numItems; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Add initial list items
    addListItems(10);

    // Infinite scroll function
    function infiniteScroll() {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 5) {
            // User reached the end of the list, add more items
            addListItems(2);
        }
    }

    // Attach scroll event listener to window
    window.addEventListener('scroll', infiniteScroll);
});

