// Открытие изображения на весь экран
function openFullscreen(img) {
  const modal = document.getElementById('fullscreen-modal');
  const fullscreenImg = document.getElementById('fullscreen-image');
  const caption = document.getElementById('image-caption');
  
  // Остановка всплытия события, чтобы не закрыть сразу
  event.stopPropagation();
  
  fullscreenImg.src = img.src;
  caption.textContent = img.alt;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Блокировка прокрутки
  
  // Добавляем обработчик клавиатуры
  document.addEventListener('keydown', handleKeyPress);
}

// Закрытие полноэкранного режима
function closeFullscreen() {
  const modal = document.getElementById('fullscreen-modal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Возвращаем прокрутку
  
  // Удаляем обработчик клавиатуры
  document.removeEventListener('keydown', handleKeyPress);
}

// Обработка нажатия клавиши ESC
function handleKeyPress(event) {
  if (event.key === 'Escape') {
    closeFullscreen();
  }
}

// Закрытие при клике вне изображения
window.onclick = function(event) {
  const modal = document.getElementById('fullscreen-modal');
  if (event.target === modal) {
    closeFullscreen();
  }
}


// РАСКРЫТИЕ
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Находим родительский блок аккордеона
    const accordionItem = button.closest('.accordion-item');
    
    // Переключаем класс expanded (раскрыто/закрыто)
    accordionItem.classList.toggle('expanded');
    
    // Прокрутка к раскрытому блоку (опционально)
    if(accordionItem.classList.contains('expanded')) {
      accordionItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});