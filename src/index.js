console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const imgContainer = document.getElementById("dog-image-container");
  const breedList = document.getElementById("dog-breeds");
  const dropdown = document.getElementById("breed-dropdown");
  let breeds = [];

  // Challenge 1: Fetch and display dog images
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      data.message.forEach(img => {
        const imgEl = document.createElement("img");
        imgEl.src = img;
        imgEl.style.width = "200px";
        imgEl.style.margin = "10px";
        imgContainer.appendChild(imgEl);
      });
    });

  // Challenge 2: Fetch and display dog breeds
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breeds = Object.keys(data.message);
      renderBreeds(breeds);
    });

  // Helper to render list
  function renderBreeds(breeds) {
    breedList.innerHTML = "";
    breeds.forEach(breed => {
      const li = document.createElement("li");
      li.textContent = breed;

      // Challenge 3: Click to change color
      li.addEventListener("click", () => {
        li.style.color = "blue";
      });

      breedList.appendChild(li);
    });
  }

  // Challenge 4: Filter breeds by first letter
  dropdown.addEventListener("change", (e) => {
    const selectedLetter = e.target.value;
    const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
  });
});
