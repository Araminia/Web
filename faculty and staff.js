let staff = [];

function addStaff() {
  const name = document.getElementById("name").value;
  const advisory = document.getElementById("advisory").value;
  const position = document.getElementById("position").value;
  const fileInput = document.getElementById("imageFile");
  const file = fileInput.files[0];

  if (!name || !position || !file) return alert("All fields are required.");

  const reader = new FileReader();
  reader.onload = function(e) {
    staff.push({ name, advisory, position, image: e.target.result });
    clearForm();
    render();
  };
  reader.readAsDataURL(file);
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("advisory").value = "";
  document.getElementById("position").value = "";
  document.getElementById("imageFile").value = "";
}

function deleteStaff(index) {
  if (confirm("Delete this entry?")) {
    staff.splice(index, 1);
    render();
  }
}

function saveEdit(index) {
    const name = document.getElementById(`name-${index}`).value;
    const advisory = document.getElementById(`advisory-${index}`).value;
    staff[index].name = name;
    staff[index].advisory = advisory;
    render();
  }
  

function render() {
  const sections = {
    formerDirectors: [], currentDirector: [], currentPrincipal: [],
    seniorHigh: [], juniorHigh: [], elementary: [], adminStaff: [], otherPersonnel: []
  };

  staff.forEach((person, index) => {
    const card = document.createElement("div");
    card.className = "staff-card";
    card.innerHTML = `
      <img src="${person.image}" alt="${person.name}" id="img-${index}">
      <div class="info">
        <input id="name-${index}" value="${person.name}">
        <input id="advisory-${index}" value="${person.advisory || ''}" placeholder="Advisory Class">
      </div>
      <div class="card-actions">
        <button class="save-btn" onclick="saveEdit(${index})">Save</button>
        <button class="delete-btn" onclick="deleteStaff(${index})">Delete</button>
      </div>
    `;

    const pos = person.position.toLowerCase();
    if (pos.includes("former director") || pos.includes("former principal")) sections.formerDirectors.push(card);
    else if (pos === "director") sections.currentDirector.push(card);
    else if (pos === "principal") sections.currentPrincipal.push(card);
    else if (pos.includes("shs") || pos.includes("senior")) sections.seniorHigh.push(card);
    else if (pos.includes("jhs") || pos.includes("junior")) sections.juniorHigh.push(card);
    else if (pos.includes("elementary")) sections.elementary.push(card);
    else if (pos.includes("admin")) sections.adminStaff.push(card);
    else sections.otherPersonnel.push(card);
  });

  Object.entries(sections).forEach(([key, cards]) => {
    const container = document.getElementById(key);
    container.innerHTML = "";
    cards.forEach(card => container.appendChild(card));
  });
}
