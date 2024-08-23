const items = document.querySelectorAll('.item');
let touchTimer;
let activeMode = false;
let selectedItemIds = [];

let holdTime = 500;

const itemList = document.querySelector('.item-list');

itemList.addEventListener('touchstart', function(event) {
    // Check if the event target is an item
    if (event.target && event.target.matches('.item')) {
        let item = event.target;
        // activateMode(true);
        // event.target.classList.add('selected');
        // selectedItemIds.push(event.target.getAttribute('id'))
        
        setTimeout(() => {
            activateMode(true);
            item.classList.add('selected');
            selectedItemIds.push(item.getAttribute('id'))
        }, 500);
    }
  });

// items.forEach(item => {
//     item.addEventListener('touchstart', (event) => {
//         if(activeMode === false) {
//             touchTimer = setTimeout(() => {
//                 activateMode(item);
//                 item.classList.add('selected');
//                 selectedItemIds.push(item.getAttribute('id'))
//             }, holdTime);
//         }
//     });

//     item.addEventListener('touchend', () => {
//         clearTimeout(touchTimer);
//     });

// });

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