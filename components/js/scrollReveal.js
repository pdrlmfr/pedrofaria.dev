const scroll = ScrollReveal({
  duration: 2000,
  reset: false,
});

ScrollReveal().reveal(".main", { delay: 600 });
ScrollReveal().reveal(".name", { delay: 200 });
ScrollReveal().reveal(".footer", {
  delay: 900,
  distance: "50px",
  origin: "bottom"
});