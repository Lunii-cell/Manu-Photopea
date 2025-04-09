export function initializeSidebar() {
  const tools = document.querySelectorAll('.sidebar-left button');
  let currentTool = 'Pincel';

  tools.forEach((tool) => {
    tool.addEventListener('click', () => {
      currentTool = tool.textContent;
      alert(`Herramienta seleccionada: ${currentTool}`);
    });
  });

  // Exportar la herramienta seleccionada
  return currentTool;
}