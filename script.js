// Простой скрипт для портфолио

console.log("Сайт портфолио загружен!");

// Функция смены темы
function changeTheme() {
    // Находим элемент body
    const body = document.body;

    // Переключаем класс 'dark'
    body.classList.toggle('dark');

    // Получаем кнопку
    const button = document.getElementById('themeButton');

    // Меняем текст на кнопке
    if (body.classList.contains('dark')) {
        button.textContent = 'Светлая тема';
        console.log('Включена темная тема');
    } else {
        button.textContent = 'Темная тема';
        console.log('Включена светлая тема');
    }
}

// Функция для плавной прокрутки
function smoothScroll(event) {
    // Проверяем, что кликнули по ссылке
    if (event.target.tagName === 'A') {
        // Получаем id раздела из ссылки
        const targetId = event.target.getAttribute('href');

        // Если это ссылка на раздел на этой странице
        if (targetId.startsWith('#')) {
            // Отменяем стандартное поведение
            event.preventDefault();

            // Находим нужный раздел
            const targetElement = document.querySelector(targetId);

            // Плавно прокручиваем к разделу
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        }
    }
}

// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM загружен, скрипт запущен");

    // Находим кнопку смены темы
    const themeButton = document.getElementById('themeButton');

    // Добавляем обработчик клика на кнопку
    themeButton.addEventListener('click', changeTheme);

    // Добавляем обработчик клика на навигацию
    const nav = document.querySelector('nav');
    nav.addEventListener('click', smoothScroll);

    // Выводим приветствие в консоль
    console.log("Все функции подключены!");
});