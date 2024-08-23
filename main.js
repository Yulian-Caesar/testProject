const items = document.querySelectorAll('.item');
let touchTimer;
let activeMode = false;
let selectedItemIds = [];

let holdTime = 500;


items.forEach(item => {
    item.addEventListener('touchstart', (event) => {
        if(activeMode === false) {
            touchTimer = setTimeout(() => {
                activateMode(true);
                item.classList.add('selected');
                selectedItemIds.push(item.getAttribute('id'))
            }, holdTime);
        }
    });

    item.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });

});

function activateMode(state) {
    activeMode = state;
}

function model_installation_assembly_multi_select(element) {
    if(element.classList.contains('selected')) {
        element.classList.remove('selected');
        selectedItemIds = selectedItemIds.filter(item => item != element.getAttribute('id'))
        console.log(selectedItemIds)
        if(!selectedItemIds.length) {
            alert('empty selected items')
            activateMode(false)
        }
    } else {
        element.classList.add('selected');
        selectedItemIds.push(element.getAttribute('id'))
    }
}


function myFunction(item) {
    if(activeMode) {
        model_installation_assembly_multi_select(item)
    } else {
        model_installation_assembly_select(item)
    }
}

function model_installation_assembly_select(item) {
    console.log('work')
    console.log(item)
}