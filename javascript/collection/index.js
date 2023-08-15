let allChecked = false;

const checkboxList = {
  react: false,
  next: false,
  node: false,
};

const handleClick = (label) => {
  checkboxList[label] = !checkboxList[label];

  const isCheckAll = Object.keys(checkboxList).every(
    (label) => checkboxList[label] === true
  );
  allChecked = isCheckAll;

  renderCheckbox();
};

const handleClickAll = () => {
  const isCheckAll = Object.keys(checkboxList).every(
    (label) => checkboxList[label] === true
  );

  for (const key of Object.keys(checkboxList)) {
    checkboxList[key] = !isCheckAll;
  }

  allChecked = !isCheckAll;

  renderCheckbox();
};

const renderCheckbox = () => {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const checkWrap = document.createElement("div");
  const allCheck = document.createElement("input");
  const allLabel = document.createElement("label");
  allCheck.id = "allCheck";
  allCheck.type = "checkbox";
  allCheck.value = "allCheck";
  allCheck.checked = allChecked;
  allLabel.innerText = "AllCheck";
  allLabel.for = "allCheck";
  allCheck.onchange = () => handleClickAll();

  checkWrap.classList.add("checkbox-wrap");
  checkWrap.appendChild(allCheck);
  checkWrap.appendChild(allLabel);
  container.appendChild(checkWrap);

  for (const key of Object.keys(checkboxList)) {
    const wrap = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.id = key;
    input.type = "checkbox";
    input.value = key;
    input.checked = checkboxList[key];
    label.innerText = key;
    label.for = key;
    label.style.textTransform = "capitalize";
    input.onchange = () => handleClick(key);
    wrap.classList.add("checkbox-wrap");

    wrap.appendChild(input);
    wrap.appendChild(label);
    container.appendChild(wrap);
  }
};

renderCheckbox();
