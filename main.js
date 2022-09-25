const addressCountry = document.querySelector("#inputCountry");
const addressState = document.querySelector("#inputState");
const basicChoose = `<option>Choose...</option>`;

const getStates = async (countryName = "") => {
  const response = await fetch("./assets/states.json");
  const result = await response.json();
  const desiredCountry = result.countries.find(
    (oneCountry) => oneCountry.country === countryName
  );

  return desiredCountry.states;
};

const hungaryStates = await getStates("Hungary");
const usaStates = await getStates("United States");

const createTemplates = (arr = []) => {
  let html = "";
  arr.forEach((element) => {
    html += `<option>${element}</option>`;
  });

  return html;
};

const templateInsert = (template, toWhere) => {
  toWhere.innerHTML = "";
  toWhere.innerHTML = template;
};

addressCountry.addEventListener("change", (e) => {
  const actualItem = e.target;
  console.log(actualItem.value);
  switch (actualItem.value) {
    case "Hungary":
      templateInsert(createTemplates(hungaryStates), addressState);
      break;
    case "United States":
      templateInsert(createTemplates(usaStates), addressState);
      break;
    default:
      templateInsert(basicChoose, addressState);
  }
});
