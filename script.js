const products = [
    {
        name: "Orange scandal",
        price: "Kshs. 250",
        img: "/Img/Orange-scandal.jpg",
        desc: "Serenity Gold envelops you with its blend of citrus top notes, golden woods, and a delicate touch of vanilla for enduring sophistication.",
        features: [
            { icon: "fa-clock", text: "Long-lasting, all-day wear" },
            { icon: "fa-oil-can", text: "Premium essential oils" },
            { icon: "fa-bottle-vial", text: "Gold-embellished bottle" }
        ]
    },
    {
        name: "Mon Paris",
        price: "Kshs. 250",
        img: "/Img/Mon-paris.jpg",
        desc: "Noir Élégance is a seductive masterpiece with notes of amber, musk, and black rose, fit for evening allure.",
        features: [
            { icon: "fa-clock", text: "12-hour persistence" },
            { icon: "fa-oil-can", text: "Ultra-concentrated oils" },
            { icon: "fa-bottle-vial", text: "Opulent matte black bottle" }
        ]
    },
    {
        name: "Poison girl",
        price: "Kshs. 250",
        img: "/Img/Poison-girl.jpg",
        desc: "Velvet Whisper flourishes with white florals and smooth sandalwood for a dreamy, gentle presence.",
        features: [
            { icon: "fa-clock", text: "Elegant day-to-night scent" },
            { icon: "fa-oil-can", text: "Refined, gentle formula" },
            { icon: "fa-bottle-vial", text: "Crystal-clear flacon" }
        ]
    },
    {
        name: "Burberry Her",
        price: "Kshs. 250",
        img: "/Img/Burberry-her.jpg",
        desc: "Aurora Luxe excites with hints of bergamot, iris, and creamy tonka, elevating any moment with flair.",
        features: [
            { icon: "fa-clock", text: "Rich, enduring fragrance" },
            { icon: "fa-oil-can", text: "Signature premium blend" },
            { icon: "fa-bottle-vial", text: "Sculpted-glass presentation" }
        ]
    },
    {
        name: "Invictus",
        price: "Kshs. 250",
        img: "/Img/Invictus.jpg",
        desc: "A radiant blend of vibrant citrus and warm spices ignites passion and confidence with every spray.",
        features: [
            { icon: "fa-clock", text: "Vibrant lasting scent" },
            { icon: "fa-oil-can", text: "Spicy essential oils" },
            { icon: "fa-bottle-vial", text: "Decorative flame bottle" }
        ]
    },
    {
        name: "My Way",
        price: "Kshs. 250",
        img: "/Img/My-way.jpg",
        desc: "Celebrate light and clarity with luminous floral accords and subtle musk for an effortlessly elegant scent.",
        features: [
            { icon: "fa-clock", text: "Fresh, clean aroma" },
            { icon: "fa-oil-can", text: "Floral musk blend" },
            { icon: "fa-bottle-vial", text: "Elegant clear bottle" }
        ]
    },
    {
        name: "Amber Silk",
        price: "Kshs. 250",
        img: "/Img/Amber.jpg",
        desc: "Rich amber and smooth silk notes envelop the skin, offering a warm and sensual fragrance experience.",
        features: [
            { icon: "fa-clock", text: "Warm and sensual" },
            { icon: "fa-oil-can", text: "Amber oil infusion" },
            { icon: "fa-bottle-vial", text: "Silk textured bottle" }
        ]
    },
   
    {
        name: "Olimpiya",
        price: "Kshs. 250",
        img: "/Img/Olimpiya.jpg",
        desc: "Regal iris flowers blended with hints of vanilla and musk create a luxurious and lasting scent.",
        features: [
            { icon: "fa-clock", text: "Rich, lasting luxury" },
            { icon: "fa-oil-can", text: "Vanilla musk blend" },
            { icon: "fa-bottle-vial", text: "Regal iris bottle" }
        ]
    },
    {
        name: "Mon Paris1",
        price: "Kshs. 250",
        img: "/Img/Mon-paris1.jpg",
        desc: "Mysterious oceanic notes and refreshing herbs blend to evoke the elegance of the sea breeze.",
        features: [
            { icon: "fa-clock", text: "Oceanic freshness" },
            { icon: "fa-oil-can", text: "Herbal infusion" },
            { icon: "fa-bottle-vial", text: "Sleek blue bottle" }
        ]
    },
    {
        name: "Red Scandal",
        price: "Kshs. 250",
        img: "/Img/Red-scandal.jpg",
        desc: "Delicate jasmine petals layered with warm amber and soft musk for a romantic floral fragrance.",
        features: [
            { icon: "fa-clock", text: "Romantic jasmine" },
            { icon: "fa-oil-can", text: "Amber warm notes" },
            { icon: "fa-bottle-vial", text: "Floral glass bottle" }
        ]
    },
    {
        name: "Si Perfume",
        price: "Kshs. 250",
        img: "/Img/Si-p.jpg",
        desc: "Light and airy notes of fresh rain, blue florals, and white musk create a serene and uplifting aura.",
        features: [
            { icon: "fa-clock", text: "Serene freshness" },
            { icon: "fa-oil-can", text: "Blue floral essence" },
            { icon: "fa-bottle-vial", text: "Elegant blue bottle" }
        ]
    },
    {
        name: "Valiame",
        price: "Kshs. 250",
        img: "/Img/Valiame.jpg",
        desc: "Bold and elegant, Rouge Grace combines ruby berries, rose petals, and rich sandalwood to captivate the senses.",
        features: [
            { icon: "fa-clock", text: "Bold elegance" },
            { icon: "fa-oil-can", text: "Ruby berry notes" },
            { icon: "fa-bottle-vial", text: "Sophisticated bottle" }
        ]
    }
];


// Modal logic
const productCards = document.querySelectorAll('.product-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalPopup = document.getElementById('modalPopup');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');

productCards.forEach((card, i) => {
    card.addEventListener('click', () => openModal(i));
    card.addEventListener('keydown', (e) => {
        if (e.key === "Enter" || e.key === " ") openModal(i);
    });
});
document.querySelectorAll('.product-card.dancing').forEach((card, i) => {
    // Use slightly different durations and delays for each card
    card.style.animationDuration = (2.5 + Math.random()*2) + "s";
    card.style.animationDelay = (Math.random() * 2) + "s";
});

function openModal(i) {
    const prod = products[i];
    modalImg.src = prod.img;
    modalName.textContent = prod.name;
    modalPrice.textContent = prod.price;
    modalDesc.textContent = prod.desc;
    modalFeatures.innerHTML = "";
    prod.features.forEach(f =>
        modalFeatures.innerHTML += `<li><i class="fa-solid ${f.icon}"></i> ${f.text}</li>`
    );
    modalOverlay.style.display = 'flex';
    setTimeout(() => modalPopup.classList.add('open'), 30);
    modalPopup.focus();
}
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay || e.target.classList.contains('close') || e.target.parentNode.classList.contains('close')) {
        closeModal();
    }
});
document.addEventListener('keydown', function(e) {
    if(e.key === "Escape" && modalOverlay.style.display === 'flex') {
        closeModal();
    }
});
function closeModal() {
    modalPopup.classList.remove('open');
    setTimeout(() => modalOverlay.style.display = 'none', 260);
}

// Testimonials Carousel
const carousel = document.getElementById('carousel');
const testimonials = carousel.querySelectorAll('.testimonial');
let currentTestimonial = 0;
function showTestimonial(n) {
    testimonials.forEach((t, i) => t.classList.remove('active'));
    testimonials[n].classList.add('active');
}
showTestimonial(currentTestimonial);

document.querySelector('.carousel-controls .prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});
document.querySelector('.carousel-controls .next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 6000);

// Fade-in on scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: 0.15 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);
faders.forEach(f => {
    appearOnScroll.observe(f);
});

// Dark Mode Toggle
function setDarkMode(on) {
    document.body.classList.toggle('dark', on);
    localStorage.setItem('darkmode', on ? '1' : '0');
    document.querySelectorAll('.darkmode-toggle i').forEach(i => {
        i.className = on ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
}
function toggleDarkMode() {
    setDarkMode(!document.body.classList.contains('dark'));
}
document.getElementById('darkToggle').onclick = toggleDarkMode;
document.getElementById('darkToggleFooter').onclick = toggleDarkMode;
if (localStorage.getItem('darkmode') === '1') setDarkMode(true);

// Newsletter JS Validation
const newsletterForm = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const successMsg = document.getElementById('successMsg');
newsletterForm.addEventListener('submit', function(e) {
    const emailVal = emailInput.value.trim();
    if (!emailVal.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        e.preventDefault();
        emailInput.style.borderColor = "red";
        emailInput.value = "";
        emailInput.placeholder = "Enter a valid email!";
        setTimeout(() => emailInput.style.borderColor = "var(--gold)", 1300);
        return false;
    }
    successMsg.classList.add('pop');
    setTimeout(() => successMsg.classList.remove('pop'), 2600);
});

function multilineTyping(container, lines, speeds={type:35, erase:13, hold:900}) {
  let row = 0, charIdx = 0, direction = 1;
  let elements = Array.from(container.querySelectorAll('.typing-row'));
  
  function animate() {
    // Clear all lines except the current
    elements.forEach((el, idx) => {
      if (idx < row) el.textContent = lines[idx];
      else if (idx > row) el.textContent = '';
    });
    // Animate current line
    let text = lines[row];
    elements[row].classList.add('typing');
    elements[row].textContent = text.substring(0, charIdx);

    if (direction === 1 && charIdx <= text.length) {
      charIdx++;
      setTimeout(animate, speeds.type);
    } else if (direction === 1 && charIdx > text.length) {
      direction = -1;
      setTimeout(animate, speeds.hold);
    } else if (direction === -1 && charIdx > 0) {
      charIdx--;
      setTimeout(animate, speeds.erase);
    } else if (direction === -1 && charIdx === 0) {
      elements[row].classList.remove('typing');
      row = (row + 1) % lines.length;
      charIdx = 0;
      direction = 1;
      setTimeout(animate, speeds.hold * 0.7);
    }
  }
  animate();
}

// Usage Example:
document.addEventListener('DOMContentLoaded', function(){
  const lines = [
    "Unleash Your Scent. Define Your Story.",
    "Luxury fragrances designed to last."
  ];
  const typingContainer = document.getElementById('typing-multiline');
  multilineTyping(typingContainer, lines, {type:32, erase:13, hold:950});
});
function loopTypingEffect(elem, text, typeSpeed = 90, eraseSpeed = 32, pause = 840) {
    let i = 0, mode = 'type';
    function run() {
        elem.textContent = text.substr(0, i);
        if (mode === 'type') {
            if (i < text.length) {
                i++;
                setTimeout(run, typeSpeed);
            } else {
                mode = 'erase';
                setTimeout(run, pause);
            }
        } else {
            if (i > 0) {
                i--;
                setTimeout(run, eraseSpeed);
            } else {
                mode = 'type';
                setTimeout(run, pause);
            }
        }
    }
    run();
}

document.addEventListener('DOMContentLoaded', function() {
    const logoTyping = document.getElementById('logo-typing');
    loopTypingEffect(logoTyping, "Abinje Perfume Shop", 88, 34, 1100);
});
