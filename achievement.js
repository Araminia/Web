const isAdmin = true;

let achievements = [
  {
    title: "Academic Excellence",
    image: "https://i.imgur.com/t1zq8S1.jpg",
    description: "Top performing school in Math and Science for Region IV-B (2024). Recognized for academic competitions and excellence in education."
  },
  {
    title: "Sports Champion",
    image: "https://i.imgur.com/qVFXQfQ.jpg",
    description: "Champion in Provincial Basketball Tournament (2023). Our students showed teamwork, sportsmanship, and determination on and off the court."
  },
  {
    title: "Eco Project Award",
    image: "https://i.imgur.com/G2Z9tpL.jpg",
    description: "Recognized by DENR for the most impactful school-led reforestation and environmental awareness project in Marinduque."
  }
];

function renderAchievements() {
  const container = document.getElementById("achievementsGrid");
  container.innerHTML = "";

  achievements.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3 contenteditable="${isAdmin}" class="editable-title">${item.title}</h3>
      <p contenteditable="${isAdmin}" class="editable-desc">${item.description}</p>
      <button class="edit-btn" onclick="saveAchievement(${index})">Save</button>
      <button class="delete-btn" onclick="deleteAchievement(${index})">Delete</button>
    `;

    container.appendChild(card);
  });
}

function saveAchievement(index) {
  const card = document.querySelectorAll('.card')[index];
  const newTitle = card.querySelector('.editable-title').innerText;
  const newDesc = card.querySelector('.editable-desc').innerText;

  achievements[index].title = newTitle;
  achievements[index].description = newDesc;

  alert("Achievement updated!");
}

function deleteAchievement(index) {
  if (confirm("Are you sure you want to delete this achievement?")) {
    achievements.splice(index, 1);
    renderAchievements();
  }
}

function addAchievement() {
  const title = document.getElementById("newTitle").value.trim();
  const image = document.getElementById("newImage").value.trim();
  const description = document.getElementById("newDescription").value.trim();

  if (title && image && description) {
    achievements.push({ title, image, description });
    renderAchievements();

    document.getElementById("newTitle").value = "";
    document.getElementById("newImage").value = "";
    document.getElementById("newDescription").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

renderAchievements();
