const items = document.querySelectorAll('.item');
const activeModeEl = document.querySelector('.active-move-value');
let touchTimer;
let activeMode = false;
let selectedItemIds = [];
activeModeEl.innerHTML = activeMode;

items.forEach(item => {
    item.addEventListener('touchstart', (event) => {
        if(activeMode === false) {
            touchTimer = setTimeout(() => {
                activateMode(item);
                item.classList.add('selected');
                selectedItemIds.push(item.getAttribute('id'))
            }, 1000);
        }
    });

    item.addEventListener('touchend', () => {
        clearTimeout(touchTimer);
    });

});

function activateMode(state) {
    activeMode = state;
    activeModeEl.innerHTML = state;
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