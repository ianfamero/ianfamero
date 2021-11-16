const all_btn = document.querySelector(".all_btn");
const beginner_btn = document.querySelector(".beginner_btn");
const intermediate_btn = document.querySelector(".intermediate_btn");
const advanced_btn = document.querySelector(".advanced_btn");
const skills_container = document.querySelector(".skills");

fetch('./js/technical-skills.json', { 
  method: 'GET'
}).then((res) => { 
  return res.json(); 
}).then((json) => {
  json.forEach((skill) => {
    const skill_item = document.createElement("div");
    skill_item.innerHTML = skill.skill_name;
    skill_item.classList.add("skill");
    switch(skill.skill_expertise) {
      case "Beginner":
        skill_item.classList.add("beginner");
        break;
      case "Intermediate":
        skill_item.classList.add("intermediate");
        break;
      case "Advanced":
        skill_item.classList.add("advanced");
        break;
    }
  
    all_btn.addEventListener("click", () => {
      skill_item.classList.remove("hide-skill");
      skill_item.classList.add("show-skill");
    });
  
    beginner_btn.addEventListener("click", () => {
      skill_item.classList.remove("show-skill", "hide-skill");
      if (skill.skill_expertise === "Beginner") {
        skill_item.classList.add("show-skill");
      } else {
        skill_item.classList.add("hide-skill");
      }
    });
  
    intermediate_btn.addEventListener("click", () => {
      skill_item.classList.remove("show-skill", "hide-skill");
      if (skill.skill_expertise === "Intermediate") {
        skill_item.classList.add("show-skill");
      } else {
        skill_item.classList.add("hide-skill");
      }
    });
  
    advanced_btn.addEventListener("click", () => {
      skill_item.classList.remove("show-skill", "hide-skill");
      if (skill.skill_expertise === "Advanced") {
        skill_item.classList.add("show-skill");
      } else {
        skill_item.classList.add("hide-skill");
      }
    });
  
    skills_container.appendChild(skill_item);
  });
});