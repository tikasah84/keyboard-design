function toogle() {
  if (document.getElementById("main").classList.contains("main-dark")) {
    document.getElementById("main").classList.remove("main-dark");
  } else {
    document.getElementById("main").classList.add("main-dark");
  }
}

document.getElementById("btn").addEventListener("click", function () {
  console.log(document.getElementById("btn").innerHTML);
});
