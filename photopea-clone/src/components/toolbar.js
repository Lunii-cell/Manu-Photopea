export function initializeToolbar() {
  const toolbarButtons = document.querySelectorAll('.toolbar-left button');

  toolbarButtons.forEach((button) => {
    button.addEventListener('click', () => {
      alert(`Opción seleccionada: ${button.textContent}`);
    });
  });

  // Añadir selector de color
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.id = 'colorPicker';
  colorPicker.value = '#ffffff'; // Color inicial
  document.querySelector('.toolbar-right').appendChild(colorPicker);
}