let bone_list = new Array(21).fill(false);
let egg_list = new Array(8).fill(false);
let map_list = new Array(21).fill(false);

let bone_count = 0;
let egg_count = 0;

let bone_count_element = document.getElementById("bone_count_display");
let egg_count_element = document.getElementById("egg_count_display");

const skull_images = document.querySelectorAll('input[type="image"].skull');
const egg_images = document.querySelectorAll('input[type="image"].egg');

fetch('map_data.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n');
    let eggedex = 0;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const columns = row.split(',');
      map_list[i - 1] = columns[0];
      bone_list[i - 1] = +columns[1];
      if (+columns[2][0] < 2) {
        egg_list[eggedex] = +columns[2][0];
        eggedex++;
      }
    }
  })
  .catch(error => console.error('Error fetching map data:', error));


function updateImageShading(image, status) {
    bone_count = bone_list.filter(value => value == true).length;
    bone_count_element.innerHTML = bone_count;
    egg_count = egg_list.filter(value => value == true).length;
    egg_count_element.innerHTML = egg_count;
    if (status) {
      image.classList.remove('darkened'); // Remove darkening when true
      bone_count = trueCount;
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

console.log(bone_list);

