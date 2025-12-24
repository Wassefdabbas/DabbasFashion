// --- SIDEBAR TOGGLE ---
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');

  if (sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }
}

// --- LANGUAGE DATA ---
const translations = {
  en: {
    home: "Home", about: "About", services: "Services", veils: "Collection", contact: "Contact",
    Est: "Est. 1990",
    hero_title: "Elegance Woven in Every Thread",
    hero_sub: "Handmade wedding veils to complement your dress and brighten your special day",
    cta_btn: "Discover Collection",
    stat_exp: "Years Experience", stat_prod: "Happy Bride", stat_qual: "% Handmade",
    about_sub: "Our Heritage", about_title: "The Art of Detail",
    about_head: "From Damascus to the World",
    about_p1: "Dabbas Fashion represents the pinnacle of bridal craftsmanship. Every veil tells a story of tradition, woven with modern aesthetics to create something truly timeless.",
    about_p2: "From the initial sketch to the final lace embroidery, our process is 100% handmade, ensuring that your walk down the aisle is accompanied by a masterpiece tailored just for you.",
    serv_sub: "What We Do", serv_title: "Bespoke Services",
    serv_1_t: "Bridal Veils", serv_1_d: "Exquisite long and short veils featuring lace and crystal embellishments.",
    // serv_3_t: "Bridal Accessories", serv_3_d: "Refined finishing touches designed to elevate every bridal look with timeless elegance.",
    serv_3_t: "Custom Bridal Veils", serv_3_d: "We craft your veil to perfectly match your dress and personality, ensuring it shines with you on your special day.",
    serv_4_t: "Embroidery", serv_4_d: "Intricate handwork.",
    veil_sub: "Collection", veil_title: "Curated Pieces",
    prod_1: "The Classic Pearl Veil", prod_2: "The Floral Veil", prod_3: "The Royal Lace Veil", prod_4: "The Veined Silan Veil",
    prod_1_info: "A luxurious veil adorned with intricate pearls, featuring a majestic design that combines timeless elegance with modern sophistication.",
    prod_2_info: "A long veil featuring handcrafted flowers, designed to add a touch of luxury.",
    prod_3_info: "A luxurious soft tulle veil with a wide lace border and delicate eyelash edges, exuding elegance offering a sophisticated and royal look for the modern bride.",
    prod_4_info: "Ceylon veil is enchanting, with beaded embroidery on the edges and delicate floral veins adorning the border, giving the bride a dreamy and luxurious look that steals the show.",
    acc_sub: "Details",
    acc_title: "Bridal Accessories", acc_1: "Pearl Headpiece", acc_2: "Silk & Lace Gloves",
    cont_title: "Start Your Journey", cont_btn: "Send via WhatsApp",
    why_title: "Why Dabbas Fashion",
    why_1: "Over 35 years of bridal couture experience",
    why_2: "Exceptional craftsmanship with precise execution",
    why_3: "Consistent premium quality in every piece",
    why_4: "Integrated design, tailoring, and embroidery under one roof",
    why_5: "Custom-made veils tailored for each bride",
    cont_sub: "Inquiries",
    cont_desc: "Consult with our designers to craft your perfect bridal masterpiece.",
    cont_name: "FULL NAME",
    cont_phone: "PHONE NUMBER",
    cont_msg: "DESCRIBE YOUR VISION",
    cont_btn: "Connect on WhatsApp"


  },
  ar: {
    home: "الرئيسية", about: "من نحن", services: "خدماتنا", veils: "المجموعة", contact: "تواصل معنا",
    Est: "تأسست 1990",
    hero_title: "أناقة منسوجة في كل خيط",
    hero_sub: "طرحات زفاف مصنوعة يدوياً لتناسب فستانك وتضيء يومك الخاص",
    cta_btn: "اكتشفي المجموعة",
    stat_exp: "سنوات خبرة", stat_prod: "عروس سعيدة", stat_qual: "٪ شغل يدوي",
    about_sub: "تراثنا", about_title: "فن التفاصيل",
    about_head: "من دمشق إلى العالم",
    about_p1: "تمثل أزياء دباس  قمة الحرفية في أزياء الزفاف. كل طرحة تروي قصة من التقاليد، منسوجة بجماليات حديثة لخلق قطعة خالدة بحق.",
    about_p2: "من الرسم الأولي إلى التطريز والدانتيل النهائي، عمليتنا يدوية 100٪، مما يضمن أن رحلتك نحو الممر مصحوبة بقطعة فنية مصممة خصيصاً لك.",
    serv_sub: "ماذا نقدم", serv_title: "خدمات مفصلة",
    serv_1_t: "طرحات الزفاف", serv_1_d: "طرحات طويلة وقصيرة رائعة تتميز بالدانتيل وزخارف الكريستال.",
    // serv_3_t: "إكسسوارات الزفاف", serv_3_d: "لمسات نهائية راقية تضيف أناقة خالدة وتكمل إطلالة العروس بكل توازن.",
    serv_3_t: "طرحات زفاف مصممة خصيصاً", serv_3_d: "نصمم طرحتك لتتناسب تمامًا مع فستانك وشخصيتك، مما يضمن أن تتألق معك في يومك الخاص.",
    serv_4_t: "تطريز يدوي", serv_4_d: "تطريز يدوي دقيق.",
    veil_sub: "المجموعة", veil_title: "قطع مختارة",
    prod_1: "طرحة اللؤلؤ الكلاسيكية", prod_2: "طرحة الأزهار", prod_3: "طرحة الدانتيل الملكية", prod_4: "طرحة سيلان ذات العروق",
    prod_1_info: "طرحة زفاف فاخرة مرصعة بلآلئ مشغولة يدويًا، بتصميم مهيب يجمع بين الرقي الجمالي الخالد.",
    prod_2_info: "طرحة زفاف طويلة مزينة بأزهار يدوية، مصممة لإضافة لمسة فاخرة.",
    prod_3_info: "طرحة زفاف فاخرة من التول الناعم مع حافة دانتيل واسعة وحواف رموش دقيقة، تعكس الأناقة وتقدم مظهراً راقياً وعصرياً للعروس الحديثة.",
    prod_4_info: "طرحة سيلان ساحرة، بتطريزها المخرز على الحواف وعروقها الزهرية الرقيقة التي تزين الحدود، مما يمنح العروس مظهراً حالماً وفاخراً يخطف الأنظار.",
    acc_sub: "تفاصيل",
    acc_title: "إكسسوارات الزفاف", acc_1: "طوق لؤلؤي", acc_2: "قفازات حرير ودانتيل",
    cont_title: "ابدئي رحلتك", cont_btn: "إرسال عبر واتساب",
    why_title: "لماذا أزياء دباس ",
    why_1: "أكثر من 35 عاماً من الخبرة في أزياء الزفاف",
    why_2: "حرفية عالية مع دقة متناهية في التنفيذ",
    why_3: "جودة فاخرة ثابتة في كل قطعة",
    why_4: "تصميم وخياطة وتطريز متكامل تحت سقف واحد",
    why_5: "طرحات مصممة خصيصاً لتعكس شخصية كل عروس",
    cont_sub: "للاستفسار",
    cont_desc: "تواصلي مع مصممينا لصناعة تحفة زفافك المثالية.",
    cont_name: "الاسم الكامل",
    cont_phone: "رقم الهاتف",
    cont_msg: "صفي رؤيتك",
    cont_btn: "التواصل عبر واتساب"


  }
};

// --- LANGUAGE TOGGLE FUNCTION ---
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
  document.querySelector('.lang-btn').textContent = currentLang === 'en' ? 'AR' : 'EN';

  // Toggle Logo
  const logos = document.querySelectorAll('.logo');
  logos.forEach(l => l.style.display = l.dataset.lang === currentLang ? 'block' : 'none');

  // nav text
  document.querySelectorAll("[data-key]").forEach(el => {
    el.textContent = translations[currentLang][el.dataset.key];
  });

  // Update Text
  document.querySelectorAll('[data-key]').forEach(elem => {
    const key = elem.getAttribute('data-key');
    if (translations[currentLang][key]) {
      elem.textContent = translations[currentLang][key];
    }
  }
  );

  const body = document.body;
  const isArabic = body.classList.toggle("lang-ar");

  document.querySelectorAll('[data-lang="en"]').forEach(el => {
    el.style.display = isArabic ? "none" : "block";
  });

  document.querySelectorAll('[data-lang="ar"]').forEach(el => {
    el.style.display = isArabic ? "block" : "none";
  });

  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.dataset.keyPlaceholder;
    el.placeholder = translations[currentLang][key];
  });

}

// --- STICKY NAVBAR ---
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- SCROLL ANIMATION OBSERVER ---
const observerOptions = { threshold: 0.1 };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => fadeObserver.observe(el));

// --- STATS COUNTER ---
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  let started = false;

  const animateCounters = () => {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const target = +counter.dataset.target;
      const duration = 1800; // animation speed (ms)
      const startTime = performance.now();

      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // ease-out effect
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);

        counter.textContent = value + (counter.textContent.includes('%') ? '%' : '+');

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
        }
      };

      requestAnimationFrame(updateCounter);
    });
  };

  // Trigger when stats are visible
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.getElementById("stats-section"));
});

// --- WHATSAPP FORM ---
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const phoneNumber = "963933530813";

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const text = `Hello Dabbas Fashion,%0A%0AMy name is ${name}.%0APhone: ${phone}%0A%0AI am interested in: ${message}`;
  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
});

