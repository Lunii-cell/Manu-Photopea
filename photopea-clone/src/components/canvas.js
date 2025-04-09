export function initializeCanvas() {
  const canvas = document.getElementById('drawingCanvas');
  const ctx = canvas.getContext('2d');
  const colorPicker = document.getElementById('colorPicker');
  const canvasContainer = document.querySelector('.canvas-container');
  const layers = document.getElementById('layers');
  const addLayerButton = document.getElementById('addLayer');
  const removeLayerButton = document.getElementById('removeLayer');

  let isDrawing = false;
  let currentColor = '#ffffff';
  let currentTool = 'Pincel';
  let layerCount = 1;

  // Establecer el fondo del lienzo a blanco
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  colorPicker.addEventListener('input', (event) => {
    currentColor = event.target.value;
  });

  canvas.addEventListener('mousedown', () => (isDrawing = true));
  canvas.addEventListener('mouseup', () => (isDrawing = false));
  canvas.addEventListener('mousemove', (event) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = event;

    if (currentTool === 'Pincel') {
      ctx.lineWidth = 2;
      ctx.strokeStyle = currentColor;
      ctx.lineCap = 'round';
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    } else if (currentTool === 'Borrador') {
      ctx.clearRect(offsetX - 5, offsetY - 5, 10, 10); // Borra un área pequeña
    }
  });

  canvas.addEventListener('mouseleave', () => (isDrawing = false));

  function createNewLayer() {
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 1200;
    newCanvas.height = 800;
    newCanvas.className = 'layer';
    canvasContainer.appendChild(newCanvas);

    const newLayer = document.createElement('li');
    newLayer.textContent = `Capa ${++layerCount}`;
    layers.appendChild(newLayer);
  }

  function removeLastLayer() {
    if (canvasContainer.children.length > 1) {
      canvasContainer.removeChild(canvasContainer.lastChild);
      layers.removeChild(layers.lastChild);
      layerCount--;
    }
  }

  addLayerButton.addEventListener('click', createNewLayer);
  removeLayerButton.addEventListener('click', removeLastLayer);
}