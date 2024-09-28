const menuButton = document.querySelector("#menu-button");

function toggleMenu() {
    const menuList = document.querySelector(".nav-list");
    menuList.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".nav-list");
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

function viewHandler(event) {
    // Get the clicked image and its source
    const clickedImage = event.target;
    const imgSrc = clickedImage.getAttribute("src").split("-");
    
    // Construct the new image file name by adding "-full.jpeg"
    const newImageSrc = imgSrc[0] + "-full.jpeg";
    const altText = clickedImage.getAttribute("alt");

    // Select the existing viewer and its image element
    const viewer = document.querySelector(".viewer");
    const viewerImage = viewer.querySelector("img");

    // Update the viewer image's src and alt attributes
    viewerImage.src = newImageSrc;
    viewerImage.alt = altText;

    // Show the viewer
    viewer.style.display = "grid";
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.style.display = "none"; // Hide the viewer when the close button is clicked
    }
}

// Add event listeners to all images in the gallery
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(img => {
    img.addEventListener("click", viewHandler);
});

// Add event listener to the close button
document.querySelector(".close-viewer").addEventListener("click", closeViewer);

// Ensure menu resizing works
window.addEventListener("resize", handleResize);
