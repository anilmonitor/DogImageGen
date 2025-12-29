// APi - https://dog.ceo/api/breeds/image/random

let apiUrl = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let dispImg = document.querySelector("#imgDog");
btn.addEventListener("click", async () => {
  dispImg.src = "";
  dispImg.alt = "Loading...";
  let finalImg = await dogPicGen();
  dispImg.src = finalImg;
});

//Get random img from api URL
async function dogPicGen() {
  try {
    let img = await axios.get(apiUrl);
    return img.data.message;
  } catch (error) {
    return `oops!! Somthing erro: ${error}`;
  }
}
