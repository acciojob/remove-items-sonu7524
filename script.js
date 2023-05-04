//your JS code here. If required.
const colorSelect = document.getElementById('colorSelect');
const button = document.getElementById('removeColorButton');

// add click event listener to the button
button.addEventListener('click', () => {
  // get the selected option element
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];
  // remove the selected option element from the dropdown list
  colorSelect.removeChild(selectedOption);
});