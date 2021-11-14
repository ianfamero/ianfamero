// JS FILTER

const allBtn = document.querySelector(".allBtn");
const beginnerBtn = document.querySelector(".beginnerBtn");
const intermediateBtn = document.querySelector(".intermediateBtn");
const advancedBtn = document.querySelector(".advancedBtn");
const skillsContainer = document.querySelector(".skills");

fetch('https://api.npoint.io/f7b331e88b45dce8ee39', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  json.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.innerHTML = skill.skillName;
    skillItem.classList.add("skill");
    switch(skill.skillExpertise) {
      case "Beginner":
        skillItem.classList.add("beginner");
        break;
      case "Intermediate":
        skillItem.classList.add("intermediate");
        break;
      case "Advanced":
        skillItem.classList.add("advanced");
        break;
    }
  
    allBtn.addEventListener("click", () => {
      skillItem.classList.remove("hide-skill");
      skillItem.classList.add("show-skill");
    });
  
    beginnerBtn.addEventListener("click", () => {
      skillItem.classList.remove("show-skill", "hide-skill");
      if (skill.skillExpertise === "Beginner") {
        skillItem.classList.add("show-skill");
      } else {
        skillItem.classList.add("hide-skill");
      }
    });
  
    intermediateBtn.addEventListener("click", () => {
      skillItem.classList.remove("show-skill", "hide-skill");
      if (skill.skillExpertise === "Intermediate") {
        skillItem.classList.add("show-skill");
      } else {
        skillItem.classList.add("hide-skill");
      }
    });
  
    advancedBtn.addEventListener("click", () => {
      skillItem.classList.remove("show-skill", "hide-skill");
      if (skill.skillExpertise === "Advanced") {
        skillItem.classList.add("show-skill");
      } else {
        skillItem.classList.add("hide-skill");
      }
    });
  
    skillsContainer.appendChild(skillItem);
  });
});