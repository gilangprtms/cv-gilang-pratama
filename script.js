//js untuk zoom out soft skill
document
    .addEventListener("DOMContentLoaded", () => {
        const skill = document.querySelectorAll(".skill-list span");

        skill.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.1)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });
});