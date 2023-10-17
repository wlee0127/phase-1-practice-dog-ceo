console.log('%c HI', 'color: firebrick');


async function fetchImage() {
const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
const imageObject = await response.json();
    let imageUrl = imageObject.message;
    for (const element of imageUrl){
        dogImage = document.getElementById("dog-image-container");
        let dogImageElement = document.createElement("img");
        dogImage.appendChild(dogImageElement);
        dogImageElement.setAttribute("src", element);
    }    
}

async function fetchBreeds() {
const response = await fetch("https://dog.ceo/api/breeds/list/all");
const breedObject = await response.json();
    let breedUrl = breedObject.message;
    for(const key in breedUrl) {
        dogBreed = document.getElementById("dog-breeds");
        let dogBreedElement = document.createElement("li");
        dogBreedElement.setAttribute("class", "breeds");
        let value = key.toString();
        dogBreedElement.textContent = value;
        dogBreed.appendChild(dogBreedElement);
    }
    let breedClass = document.getElementsByClassName('breeds');
    for(const breeds of breedClass) {
        breeds.addEventListener("click", function() {
            breeds.style.color = "red";
        })
    }
    breedDropDown = document.getElementById("breed-dropdown");
    
    breedDropDown.addEventListener("change", function() {
        let selectedCategory = breedDropDown.value;
        //let selectedCategoryString = selectedCategory.toString();
        for(const breeds of breedClass){
            let breedText = breeds.innerText;
            let breedString = breedText.toString();
            if(breedString.charAt(0)===selectedCategory){
                breeds.style.display = "block";
            } else {
                breeds.style.display = "none";
            }
        }
    })
}
fetchImage()
fetchBreeds()

/*
let breedClass = document.getElementsByClassName("breeds");

breedDropDown.addEventListener("change", function() {
    let selectedCategory = breedDropDown.value;
    for(const breeds of breedClass) {
        let test = (((breeds.innerText).toString()).charAt(0));
        console.log(test);
        /*if(selectedCategory === ((breeds.innerText).toString()).charAt(0)){

        }*/
    






