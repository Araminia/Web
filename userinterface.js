const searchData = [
    { title: "Home", keyword: "home", id: "home" },
    { title: "About Us", keyword: "about", id: "about" },
    { title: "Mission & Vision", keyword: "mission", id: "mission" },
    // Add more sections as needed
  ];

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = ""; // Clear old results

    if (query.trim() === "") return;

    const filtered = searchData.filter(item =>
      item.keyword.includes(query)
    );

    filtered.forEach(item => {
      const link = document.createElement("a");
      link.href = `#${item.id}`;
      link.textContent = item.title;
      link.style.display = "block";
      link.style.margin = "10px 0";
      link.style.color = "#1e3a8a";
      link.style.textDecoration = "none";
      link.style.fontWeight = "bold";
      link.style.fontSize = "16px";
      searchResults.appendChild(link);
    });

    if (filtered.length === 0) {
      searchResults.textContent = "No results found.";
    }
  });

