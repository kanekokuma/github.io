window.addEventListener("load", () => {
  document.querySelector("#hero h1").style.opacity = "1";
  document.querySelector("#hero p").style.opacity = "1";
});

const fadeInElements = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const scrollToTopBtn = document.createElement("button");

scrollToTopBtn.textContent = "↑";
scrollToTopBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopBtn);

const handleScroll = () => {
  let currentSection = "";
  const screenHeight = window.innerHeight;

  fadeInElements.forEach(section => {
    if (section.getBoundingClientRect().top < screenHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
    if (window.scrollY >= section.offsetTop - 100) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });

  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

window.addEventListener("scroll", handleScroll);
scrollToTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
