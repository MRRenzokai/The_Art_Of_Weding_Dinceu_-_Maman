function initGallery(galleryImages) {
    const galleryGrid = document.getElementById("gallery-grid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    if (!galleryGrid) return;

    galleryGrid.innerHTML = "";

    galleryImages.forEach(src => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Wedding Gallery Photo";
        img.loading = "lazy";

        item.appendChild(img);
        galleryGrid.appendChild(item);

        // Lightbox Trigger
        item.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = src;
        });
    });

    // Close Lightbox
    lightboxClose.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });
}