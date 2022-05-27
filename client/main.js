const complimentBtn = document.getElementById("complimentButton");

const fortuneBtn = document.getElementById("fortuneButton");

const coolPeopleBtn = document.getElementById("coolPeopleButton");

const people = document.getElementById("people");

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

const getCoolPeople = () => {
  axios.get("http://localhost:4000/api/coolPeople/").then((res) => {
    const data = res.data;
    data.forEach(element => {
        const newListElem = document.createElement("li")
        newListElem.innerText = element
        console.log(newListElem.innerText)
        people.appendChild(newListElem)
    });
  });
};

complimentBtn.addEventListener("click", getCompliment);

fortuneBtn.addEventListener("click", getFortune);

coolPeopleBtn.addEventListener("click", getCoolPeople);
