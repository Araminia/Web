function addOffering(name = '', description = '') {
  const container = document.getElementById('offeringsContainer');

  const card = document.createElement('div');
  card.className = 'offering-card';

  card.innerHTML = `
    <input type="text" placeholder="Program Name" value="${name}" />
    <textarea rows="3" placeholder="Program Description...">${description}</textarea>
    <div class="actions">
      <button onclick="deleteOffering(this)">🗑️</button>
    </div>
  `;

  container.appendChild(card);
}

function deleteOffering(btn) {
  const card = btn.closest('.offering-card');
  card.remove();
}

// Pre-filled offerings
addOffering('STEM Strand', 'Science, Technology, Engineering, and Mathematics');
addOffering('ABM Strand', 'Accountancy, Business, and Management');
addOffering('HUMSS Strand', 'Humanities and Social Sciences');

// ✅ Make the function accessible on the website
window.addOffering = addOffering;
