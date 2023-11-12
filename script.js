document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos del menú y las opciones de selección
    const menuItems = document.querySelectorAll('.menu-item');
    const mostrarTodo = document.getElementById('mostrarTodo');
    const mostrarComida = document.getElementById('mostrarComida');
    const mostrarBebida = document.getElementById('mostrarBebida');
    const mostrarPostres = document.getElementById('mostrarPostres');
  
    // Función para mostrar elementos del menú según la categoría
    function mostrarCategoria(categoria) {
      menuItems.forEach(function (item) {
        if (categoria === 'todo' || item.classList.contains(categoria)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  
    // Agrega manejadores de eventos a las opciones de selección
    // Llama a la función para mostrar todo el menú
    mostrarTodo.addEventListener('click', function () {
      mostrarCategoria('todo');
    });
  
    // Llama a la función para mostrar la categoría 'comida'
    mostrarComida.addEventListener('click', function () {
      mostrarCategoria('comida');
    });
    // Llama a la función para mostrar la categoría 'bebida'
    mostrarBebida.addEventListener('click', function () {
      mostrarCategoria('bebida');
    });
  
    // Llama a la función para mostrar la categoría 'postre'
    mostrarPostres.addEventListener('click', function () {
      mostrarCategoria('postre');
    });
  
    // POP
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const descripcionPopup = document.getElementById('descripcion-popup');
  
    menuItems.forEach((item) => {
        const image = item.querySelector('.menu-image');
        const descripcion = item.querySelector('.descripcion');
  
        image.addEventListener('click', (event) => {
            popupImage.src = image.src;
            popup.style.display = 'block';
  
            if (descripcion) {
                descripcionPopup.innerHTML = descripcion.innerHTML;
                descripcionPopup.classList.remove('hidden');
            } else {
                descripcionPopup.innerHTML = '';
                descripcionPopup.classList.add('hidden');
            }
        });
    });
  
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            descripcionPopup.innerHTML = '';
            descripcionPopup.classList.add('hidden');
        }
    });
  });
  
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        descripcionPopup.innerHTML = '';
        descripcionPopup.classList.add('hidden');
    }
  });
  
  // Recarga la Pagina cuendo se le da click al logo 
  document.addEventListener('DOMContentLoaded', function () {
    // Obtén el elemento del logo
    const logo = document.querySelector('.logo');
  
    // Agrega un manejador de clic al logo
    logo.addEventListener('click', function () {
      location.reload(); // Recarga la página
    });
  });