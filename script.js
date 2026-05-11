let equalPresses = 0;
let unlockMode = false;

function press(value) {
  const display = document.getElementById("display");

  if (value === '=') {

    if (display.value === '') {
      equalPresses++;

      if (equalPresses >= 3) {
        unlockMode = true;
        display.placeholder = 'Enter Code';
      }

      return;
    }

    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }

    return;
  }

  if (unlockMode) {
    display.value += value;

    if (display.value === '6825') {
      window.location.href = 'https://sites.google.com/view/pixelatedpix6825/home';
    }

    return;
  }

  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
