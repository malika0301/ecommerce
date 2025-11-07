let outerModal = document.getElementById("outer-modal");
let profile = document.getElementById("profile");
let form = document.getElementById("form");
let profObj = JSON.parse(localStorage.getItem("profile") || "{}");
let profileImg = document.getElementById("profile-img");
let profileName = document.getElementById("profile-name");

profileImg.src = profObj.photoUrl;
profileName.textContent = profObj.name;

profile.addEventListener("click", function () {
    outerModal.classList.remove("hidden")
})
outerModal.addEventListener("click", function () {
    outerModal.classList.add("hidden")
})
form.addEventListener("click", function (e) {
    e.stopPropagation();
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    profObj.photoUrl = e.target[0].value
    profObj.name = e.target[1].value
    profObj.number = e.target[2].value
    localStorage.setItem("profile" , JSON.stringify(profObj));

    profileImg.src = profObj.photoUrl;
    profileName.textContent = profObj.name;
    outerModal.classList.add("hidden");
})
