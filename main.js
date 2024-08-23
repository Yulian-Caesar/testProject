const items = document.querySelectorAll('.item');
let activeMode = false;
let selectedItemIds = [];

items.forEach(item => {
    item.addEventListener('touchstart', (event) => {
        if(activeMode === false) {
            setTimeout(() => {
                activateMode(true);
                item.classList.add('selected');
                selectedItemIds.push(item.getAttribute('id'))
            }, 500);
        }
    });
});

function activateMode(state) {
    activeMode = state;
}

// Optionally, deactivate mode after some action or another click
document.addEventListener('click', (event) => {
    if (!activeMode) return;
    let clickedEl = event.target;
    if (clickedEl.classList.contains('item')) {
        if(clickedEl.classList.contains('selected')) {
            clickedEl.classList.remove('selected');
            selectedItemIds = selectedItemIds.filter(item => item != clickedEl.getAttribute('id'))
            console.log(selectedItemIds)
            if(!selectedItemIds.length) {
                alert('empty selected items')
                activateMode(false)
            }
        } else {
            clickedEl.classList.add('selected');
            selectedItemIds.push(clickedEl.getAttribute('id'))
        }
    } 
});


function myFunction(e) {
    if(activeMode) {
        console.log(e.target)
    } else {
        model_installation_assembly_select()
    }
}

function model_installation_assembly_select() {
    console.log('work')
}