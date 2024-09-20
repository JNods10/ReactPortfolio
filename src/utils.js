
/**
 * 
 * @param {*} path 
 * @returns full URL path
 * 
 * function is used to generate a URL 
 * for images or other assets within your project
 * 
 */

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };

  
/**
 * 
 * @returns the current year
 * 
 * function for the copyright year at bottom
 * of the page
 */

export const getYear = () => {
  return new Date().getFullYear();;
};


document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.querySelector(".image-container");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  // Dynamically determine the number of images
  const spans = document.querySelectorAll(".image-container span");
  const totalImages = spans.length;
  const rotationAngle = 360 / totalImages; // Calculate rotation angle based on the number of images

  let x = 0;

  // Set rotation angle for each span element dynamically
  spans.forEach((span, index) => {
    span.style.setProperty('--i', index);
    span.style.transform = `rotateY(${index * rotationAngle}deg) translateZ(400px)`;
  });

  prevBtn.addEventListener("click", () => {
    x += rotationAngle; // Increment rotation
    rotate();
  });

  nextBtn.addEventListener("click", () => {
    x -= rotationAngle; // Decrement rotation
    rotate();
  });

  function rotate() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  }
});