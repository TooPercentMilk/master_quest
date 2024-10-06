let bone_list = new Array(21).fill(false);
let egg_list = new Array(8).fill(false);

const skull_images = document.querySelectorAll('input[type="image"].skull');
const egg_images = document.querySelectorAll('input[type="image"].egg');

function updateImageShading(image, status) {
    if (status) {
      image.classList.remove('darkened'); // Remove darkening when true
    } else {
      image.classList.add('darkened'); // Apply darkening when false
    }
  }

// Loop through each image
skull_images.forEach((image, index) => {
    updateImageShading(image, bone_list[index]);
    // Add a click event listener to each image
    image.addEventListener('click', function () {
    // Toggle the boolean value in the imageStatusList for the corresponding index
    bone_list[index] = !bone_list[index];
    console.log(`Image ${index + 1} clicked. Status: ${bone_list[index]}`);
    updateImageShading(image, bone_list[index]);
  });
});

egg_images.forEach((image, index) => {
    updateImageShading(image, egg_list[index]);
    // Add a click event listener to each image
    image.addEventListener('click', function () {
      // Toggle the boolean value in the imageStatusList for the corresponding index
      egg_list[index] = !egg_list[index];
      console.log(`Image ${index + 1} clicked. Status: ${egg_list[index]}`);
      updateImageShading(image, egg_list[index]);
    });
  });

