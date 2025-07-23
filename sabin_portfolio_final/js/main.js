
document.addEventListener("DOMContentLoaded", () => {
  feather.replace();

  const grid = document.getElementById("project-grid");
  projects.forEach(project => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <img src="${project.image}" alt="${project.title}" style="width:100%">
      <h3>${project.title}</h3>
      <p>${project.category}</p>
      <a href="${project.github}" target="_blank">GitHub</a>
    `;
    grid.appendChild(div);
  });

  const track = document.getElementById("testimonial-track");
  if (track) {
    testimonials.forEach(testimonial => {
      const div = document.createElement("div");
      div.className = "testimonial";
      div.innerHTML = `
        <p>"${testimonial.quote}"</p>
        <small>- ${testimonial.author}</small>
      `;
      track.appendChild(div);
    });
  }
});
