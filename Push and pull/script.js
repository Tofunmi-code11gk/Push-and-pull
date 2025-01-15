const itemInput = document.getElementById('itemInput');
const pushButton = document.getElementById('pushButton');
const popButton = document.getElementById('popButton');
const itemList = document.getElementById('itemList');

let items = [];

Add.addEventListener('click', () => {
    const item = itemInput.value.trim();
    if (item) {
        items.push(item);
        updateList();
        itemInput.value = '';
    }
});

Remove.addEventListener('click', () => {
    items.pop();
    updateList();
});

function updateList() {
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
}