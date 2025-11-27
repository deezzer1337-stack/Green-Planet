// Основная инициализация сайта
$(document).ready(function() {
    // Плавная прокрутка к якорям
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            var headerHeight = $('.header').outerHeight();
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight - 20
            }, 1000);
        }
    });

    // Фиксация хедера при скролле
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    });

    // Анимация появления элементов при скролле
    function animateOnScroll() {
        $('.section').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    // Инициализация анимации
    animateOnScroll();
    $(window).scroll(animateOnScroll);

    // Обработка форм
    $('form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var formData = new FormData(this);
        
        // Здесь можно добавить AJAX отправку формы
        console.log('Форма отправлена:', formData);
        
        // Временное сообщение об успехе
        alert('Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        form[0].reset();
    });

    // Инициализация ленивой загрузки изображений
    if (typeof LazyLoad !== 'undefined') {
        var lazyLoadInstance = new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    // Добавление класса для анимаций
    $('.section').addClass('animate__animated');
});

// CSS для анимаций
const animationStyles = `
    .section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .header.scrolled {
        background-color: rgba(191, 216, 194, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;

// Добавление стилей анимации
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);