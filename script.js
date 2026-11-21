// =====================================
// FADIA PERSONAL PORTFOLIO
// JavaScript Interactions
// =====================================


// 1. ظهور العناصر عند التمرير

const revealElements = document.querySelectorAll(
    '.section, .skill-card, .project-card, .about-card, .goals-card'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// 2. تمييز القسم الحالي في قائمة التنقل

const sections = document.querySelectorAll('main section[id]');

const navLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }

    });

}

window.addEventListener('scroll', updateActiveLink);

updateActiveLink();


// 3. تحديث سنة حقوق النشر تلقائيًا

const footerText = document.querySelector('footer p');

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} فادية حسن محمد. جميع الحقوق محفوظة.`;

}


// 4. تأثير ترحيبي في وحدة التحكم

console.log(
    '%cWelcome to Fadia Hassan Mohammed Portfolio!',
    'color: #00d9ff; font-size: 16px; font-weight: bold;'
);


// 5. منع الروابط الفارغة من الانتقال إلى أعلى الصفحة

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener('click', event => {
        event.preventDefault();
    });

});