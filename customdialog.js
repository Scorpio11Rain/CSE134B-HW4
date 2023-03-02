let alertDialog = document.querySelector('#alertDialog');
let alertButton = document.querySelector('#alertButton');
let alertclose = document.querySelector('#alertok');

function showAlert() {
    alertDialog.showModal();
  }
alertButton.addEventListener('click',showAlert);

alertclose.addEventListener('click', () => {
  alertDialog.close();
});


let confirmDialog = document.querySelector('#confirmDialog');
let confirmButton = document.querySelector('#confirmButton');
let confirmyes = document.querySelector('#yes');
let confirmno = document.querySelector('#no');

function showConfirm() {
    confirmDialog.showModal();
  }
confirmButton.addEventListener('click',showConfirm);
confirmyes.addEventListener('click', () => {
    let output = document.querySelector('output');
    output.textContent = 'Confirm Result: True'
    confirmDialog.close();
  });
confirmno.addEventListener('click', () => {
    let output = document.querySelector('output');
    output.textContent = 'Confirm Result: False'
    confirmDialog.close();
  });



let promptDialog = document.querySelector('#promptDialog');
let promptButton = document.querySelector('#promptButton')
let promptInput = document.querySelector('#input');
let promptOk = document.querySelector('#promptOk');
let promptCancel = document.querySelector('#promptCancel');

function showPrompt() {
    promptDialog.showModal();
  }
promptButton.addEventListener('click',showPrompt);

promptOk.addEventListener('click', () => {
    let content = promptInput.value;
    let output = document.querySelector('output');
    if (content === null || content === undefined || content == ''){
        output.textContent = 'User didn’t enter anything';
    }
    else {
        let clean = DOMPurify.sanitize(content);
        output.innerHTML = `Prompt Result: ${clean}`;
    }
    promptDialog.close();
  });

 promptCancel.addEventListener('click', () => {
    let output = document.querySelector('output');
    output.textContent = 'User didn’t enter anything';
    promptDialog.close();
  });







