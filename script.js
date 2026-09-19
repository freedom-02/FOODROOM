/* =====================================================
   FOODROOM JAVASCRIPT
===================================================== */


/* ================= LOADER ================= */

window.addEventListener("load", () => {
  
  const loader = document.getElementById("loader");
  
  setTimeout(() => {
    
    loader.classList.add("hide");
    
  }, 900);
  
});


/* ================= FULLSCREEN MENU ================= */

const menuButton = document.getElementById("menuButton");
const menuClose = document.getElementById("menuClose");
const fullscreenMenu = document.getElementById("fullscreenMenu");

function openMenu() {
  
  fullscreenMenu.classList.add("open");
  
  document.body.classList.add("menu-open");
  
}

function closeMenu() {
  
  fullscreenMenu.classList.remove("open");
  
  document.body.classList.remove("menu-open");
  
}


menuButton.addEventListener("click", openMenu);

menuClose.addEventListener("click", closeMenu);


/* Close menu when navigation link is clicked */

const menuLinks =
  fullscreenMenu.querySelectorAll("nav a");

menuLinks.forEach(link => {
  
  link.addEventListener("click", closeMenu);
  
});


/* ================= MENU TABS ================= */

const menuTabs =
  document.querySelectorAll(".menu-tab");

const menuPanels =
  document.querySelectorAll(".menu-panel");


menuTabs.forEach(tab => {
  
  tab.addEventListener("click", () => {
    
    const target =
      tab.getAttribute("data-menu");
    
    
    menuTabs.forEach(item => {
      
      item.classList.remove("active");
      
    });
    
    
    menuPanels.forEach(panel => {
      
      panel.classList.remove("active");
      
    });
    
    
    tab.classList.add("active");
    
    
    const selected =
      document.getElementById(target);
    
    
    if (selected) {
      
      selected.classList.add("active");
      
    }
    
  });
  
});


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {
  
  year.textContent =
    new Date().getFullYear();
  
}


/* ================= IMAGE REVEAL ================= */

const revealItems =
  document.querySelectorAll(
    ".experience-card, .story-image, .story-content, .stay-image, .stay-content, .about-copy, .contact-inner"
  );


const observer =
  new IntersectionObserver(
    
    entries => {
      
      entries.forEach(entry => {
        
        if (entry.isIntersecting) {
          
          entry.target.classList.add("revealed");
          
          observer.unobserve(entry.target);
          
        }
        
      });
      
    },
    
    {
      threshold: 0.08
    }
    
  );


revealItems.forEach(item => {
  
  observer.observe(item);
  
});


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", event => {
  
  if (event.key === "Escape") {
    
    closeMenu();
    
  }
  
});


/* ================= CARD IMAGE HOVER ================= */

const cards =
  document.querySelectorAll(".experience-card");

cards.forEach(card => {
  
  card.addEventListener("mouseenter", () => {
    
    card.style.zIndex = "5";
    
  });
  
  card.addEventListener("mouseleave", () => {
    
    card.style.zIndex = "1";
    
  });
  
});


/* ================= PHONE LINK PROTECTION ================= */

document.querySelectorAll('a[href^="tel:"]')
  .forEach(link => {
    
    link.addEventListener("click", () => {
      
      console.log(
        "Calling Foodroom: 0704 506 0343"
      );
      
    });
    
  });