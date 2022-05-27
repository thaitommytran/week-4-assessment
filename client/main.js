const complimentBtn = document.getElementById("complimentButton");

const fortuneBtn = document.getElementById("fortuneButton");

const magic8BallBtn = document.getElementById("magic8BallButton");

const coolPeopleBtn = document.getElementById("coolPeopleButton");

const people = document.getElementById("people");

const enterCool = document.getElementById("enterCool");

const enterChange = document.getElementById("enterChange");

const coolForm = document.getElementById("coolForm");

const changeForm = document.getElementById("changeForm");

const clearNames = () => {
  people.innerHTML = "";
};

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getAnswer = () => {
  axios.get("http://localhost:4000/api/answer/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getCoolPeople = () => {
  axios.get("http://localhost:4000/api/coolPeople/").then((res) => {
    const data = res.data;
    data.forEach((element) => {
      const newListElem = document.createElement("li");
      newListElem.textContent = element;
      console.log(newListElem.innerText);
      people.appendChild(newListElem);
    });
  });
};

const submitCoolPerson = (event) => {
  event.preventDefault();
  let coolObj = {
    name: enterCool.value
  };
  axios.post("http://localhost:4000/api/submitCool", coolObj).then((res) => {
    console.log("hit2");
    clearNames();
    const data = res.data;
    data.forEach((element) => {
      const newListElem = document.createElement("li");
      newListElem.textContent = element;
      console.log(newListElem.innerText);
      people.appendChild(newListElem);
    });
  });
};

const changeCoolPerson = (event) => {
  event.preventDefault();
  let changeObj = {
    name: enterChange.value
  };
  axios.put("http://localhost:4000/api/changeCool", changeObj).then();
};

complimentBtn.addEventListener("click", getCompliment);

fortuneBtn.addEventListener("click", getFortune);

magic8BallBtn.addEventListener("click", getAnswer);

coolPeopleBtn.addEventListener("click", getCoolPeople);

coolForm.addEventListener("submit", submitCoolPerson);

changeForm.addEventListener("submit", changeCoolPerson);
