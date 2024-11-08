function registerMenuToggle() {
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    const nav = document.querySelector("nav");
    toggle.addEventListener("click", () => {
      nav.classList[nav.classList.contains("active") ? "remove" : "add"](
        "active"
      );
    });
  }
}

function initMap() {
  let map = L.map("map").setView([44.6479101, -63.571131], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  // Add markers for destinations
  L.marker([44.6479101, -63.571131])
    .addTo(map)
    .bindPopup("Halifax Waterfront: World's longest downtown boardwalk")
    .openPopup();
}

function initGalleryGrid() {
  let elem = document.querySelector(".grid");
  let msnry = new Masonry(elem, {
    itemSelector: ".gallery-item",
    columnWidth: ".gallery-item",
    gutter: 10,
  });

  msnry.layout();
}

function drawCharts() {
  new Chart(document.querySelector(".activity-chart"), {
    type: "bar",
    data: {
      labels: [
        "Sightseeing and driving tours",
        "Visited a beach",
        "Shopping for crafts",
        "Visiting friends and relatives",
        "Visited national or provincial parks",
        "Experienced historical or culture",
      ],
      datasets: [
        {
          label: "Percentage of Visitors",
          data: [67, 61.4, 50.3, 49.9, 48.4, 42.6],
          backgroundColor: "#d4eefb",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: "Percentage",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Top Visitor Activities in Nova Scotia",
        },
      },
    },
  });
}

function setupForm() {
  new Cleave("#input-departureDate", {
    date: true,
    datePattern: ["m", "d", "Y"],
  });

  new Cleave("#input-returnDate", {
    date: true,
    datePattern: ["m", "d", "Y"],
  });

  new Cleave("#input-budget", {
    numeral: true,
    numeralThousandsGroupStyle: "thousand",
    prefix: "CAD ",
  });

  new Cleave("#input-phone", {
    phone: true,
    phoneRegionCode: "CA",
  });
}

window.addEventListener("load", () => {
  registerMenuToggle();
  initMap();
  initGalleryGrid();
  drawCharts();
  setupForm();
});
