const display = document.getElementById('display');

function appendValue(val) {
  if (display.textContent === '0') {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent.replace(/[^-+*/().\d]/g, ''));
  } catch (e) {
    display.textContent = 'Error';
  }
}

function backspace() {
  let current = display.textContent;
  if (current.length === 1 || current === 'Error') {
    display.textContent = '0';
  } else {
    display.textContent = current.slice(0, -1);
  }
}