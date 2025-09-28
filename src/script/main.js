// -- Header -- //
document.getElementById("year").textContent = new Date().getFullYear();

const Nav = document.querySelector('.Nav');
const Section = document.querySelector(".Detalles");
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', function() {
    Nav.style.display = Nav.style.display === "none" ? "flex" : "none";
    Section.style.display = Section.style.display === "flex" ? "none" : "flex";
});

const Background = document.getElementById("Background");
const Day = document.querySelector(".Day");
const Moon = document.querySelector(".Moon");

Background.addEventListener('click', function() {

    Day.style.display = Day.style.display === "none" ? "block" : "none";
    Moon.style.display = Moon.style.display === "block" ? "none" : "block";

    document.documentElement.style.setProperty('--C-Base-Oscuro', (document.documentElement.style.getPropertyValue('--C-Base-Oscuro') === '#4A4261') ? '#5728E0' : '#4A4261');
    document.documentElement.style.setProperty('--C-Base-Claro', (document.documentElement.style.getPropertyValue('--C-Base-Claro') === '#5728E0') ? '#4A4261' : '#5728E0');

    document.documentElement.style.setProperty('--C-Primario-Oscuro', (document.documentElement.style.getPropertyValue('--C-Primario-Oscuro') === '#666433') ? '#E0D028' : '#666433');
    document.documentElement.style.setProperty('--C-Primario-Claro', (document.documentElement.style.getPropertyValue('--C-Primario-Claro') === '#E0D028') ? '#666433' : '#E0D028');

    document.documentElement.style.setProperty('--C-Secundario-Oscuro', (document.documentElement.style.getPropertyValue('--C-Secundario-Oscuro') === '#338B75') ? '#17E69B' : '#338B75');
    document.documentElement.style.setProperty('--C-Secundario-Claro', (document.documentElement.style.getPropertyValue('--C-Secundario-Claro') === '#17E69B') ? '#338B75' : '#17E69B');

    document.documentElement.style.setProperty('--C-Terciario-Oscuro', (document.documentElement.style.getPropertyValue('--C-Terciario-Oscuro') === '#a36355') ? '#E04928' : '#a36355');
    document.documentElement.style.setProperty('--C-Terciario-Claro', (document.documentElement.style.getPropertyValue('--C-Terciario-Claro') === '#E04928') ? '#a36355' : '#E04928');

    document.documentElement.style.setProperty('--C-Color-Oscuro', (document.documentElement.style.getPropertyValue('--C-Color-Oscuro') === '#494949') ? '#c4c4c4' : '#494949');
    document.documentElement.style.setProperty('--C-Color-Claro', (document.documentElement.style.getPropertyValue('--C-Color-Claro') === '#c4c4c4') ? '#494949' : '#c4c4c4');
});

// -- Scroll -- //

const scrollContainer = document.getElementById("scrollList");
const items = scrollContainer.querySelectorAll(".section");

function updateEffects() {
  const containerRect = scrollContainer.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      items.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const itemCenter = itemRect.top + itemRect.height / 2;
    const distance = Math.abs(containerCenter - itemCenter);
    const ratio = Math.max(0, 1 - distance / (containerRect.height / 2));
    item.style.transform = `scale(${0.3 + ratio * 0.7})`;
    item.style.opacity = 0.2 + ratio * 0.8;
    ratio > 0.95 ? item.classList.add("active") : item.classList.remove("active");
    });
}

scrollContainer.addEventListener("scroll", updateEffects);
window.addEventListener("load", updateEffects);

// -- aside -- //

const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('aside li a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;

      links.forEach(link => {
        if (link.dataset.target === id) {
          link.classList.add('active');
        } else {
           link.classList.remove('active');
        }
      });
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));

// -- Index -- //

const container = document.getElementById('scrollContainer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

const scrollAmount = 200;

leftBtn.addEventListener('click', function() {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

rightBtn.addEventListener('click', function() {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// -- Modelos 3D -- //