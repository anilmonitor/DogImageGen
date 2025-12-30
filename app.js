// APi - https://dog.ceo/api/breeds/image/random

let apiUrl = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let dispImg = document.querySelector("#imgDog");
let loading = document.querySelector("#loading");

console.log(loading);

btn.addEventListener("click", async () => {
  dispImg.src = "";

  let finalImg = await dogPicGen();
  dispImg.alt = "Loading...";
  dispImg.src = finalImg;
  dispImg.style.border = "3px solid white";
  dispImg.style.boxShadow = "0px 0px 10px #0000006b";
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
