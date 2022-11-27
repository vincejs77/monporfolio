import competencesJson from "../../data/competences.json" assert { type: "json" };

const competences = competencesJson;

console.log(competences.length);

const competencesDiv = document.querySelector(".data-competences");

for (let i = 0; i < competences.length; i++) {
	const div = document.createElement("div");
	div.classList.add("box");
	div.innerHTML = `
    <div> <img src="${competences[i].icon}" /> </div>
    `;
	competencesDiv.appendChild(div);
}
