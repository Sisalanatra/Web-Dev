let user_input = document.getElementById("input");
let input_button = document.getElementById("input-button");
let items = document.getElementById("items");

function add_to(){
    const text = user_input.value;
    if (text === ''){
        return;
    }
    const div = document.createElement('div');
    div.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = cross_element

    const li_text = document.createElement('p');
    li_text.textContent = text;

    const del_button = document.createElement('button');
    del_button.textContent = '🗑';
    del_button.onclick = del_element;
    div.appendChild(checkbox);
    div.appendChild(li_text);
    div.appendChild(del_button);
    items.appendChild(div);
    user_input.value = '';
}
input_button.addEventListener("click", add_to);

function cross_element(){
    let element = event.currentTarget.parentElement;
    if (element.classList.contains('lined')){
        element.classList.remove('lined');
    }else {
        element.classList.add('lined');
    }
}

function del_element() {
    event.currentTarget.parentElement.remove();
}