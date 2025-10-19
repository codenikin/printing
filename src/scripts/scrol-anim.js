// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(
//     ".img-anim-top, .img-anim-bottom, .img-anim-left, .img-anim-right"
//   );

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-in-view");
//           observer.unobserve(entry.target); // Optional: animate only once
//         }
//       });
//     },
//     {
//       threshold: 0.1, // triggers when 10% of the element is visible
//     }
//   );

//   elements.forEach((el) => observer.observe(el));
// });
