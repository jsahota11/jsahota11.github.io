const btn = document.getElementById("theme-toggle");

btn?.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// Persist theme on reload
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

