import competencesJson from "../../data/competences.json" assert { type: "json" };

const competences = competencesJson;

console.log(competences.length);

const competencesDiv = document.querySelector(".data-competences");

for (let i = 0; i < competences.length; i++) {
	const div = document.createElement("div");
	div.classList.add("box");
	div.innerHTML = `
    <div> <img src="${competences[i].icon}" /> </div>
	<h3> ${competences[i].title} </h3>
	<p> ${competences[i].desc} </p>
    `;
	competencesDiv.appendChild(div);
}

const menuBtn = document.querySelector("#menu-mobile");

document.querySelectorAll(".menu a").forEach((a) => {
	a.addEventListener("click", function (event) {
		menu.classList.remove("is-visible");
		overlay.classList.remove("is-visible");
	});
});

const menu = document.querySelector("#menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function (event) {
	menu.classList.toggle("is-visible");
	overlay.classList.toggle("is-visible");
});
