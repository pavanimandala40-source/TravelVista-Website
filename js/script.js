const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("searchButton").addEventListener("click", () => {
  const destination = document.getElementById("destinationSearch").value.trim();
  const date = document.getElementById("travelDate").value;
  if (!destination) {
    alert("Please enter a destination to explore.");
    document.getElementById("destinationSearch").focus();
    return;
  }
  const query = encodeURIComponent(destination);
  document.getElementById("destinations").scrollIntoView({ behavior: "smooth" });
  alert(`Let's explore ${destination}${date ? ` for ${date}` : ""}! This demo search is ready to be connected to a booking service.`);
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your demo enquiry has been received.`;
  event.target.reset();
});
