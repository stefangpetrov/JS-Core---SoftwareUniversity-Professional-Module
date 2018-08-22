function addItem() {

    let text = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');

    option.value = inputValue;
    option.textContent = text;

    let menu = document.getElementById('menu');
    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';



    
}