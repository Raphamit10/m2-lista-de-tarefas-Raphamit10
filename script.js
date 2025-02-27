const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function createTaskItem (object) {
  const li_Item = document.createElement("li");
  const div_Item = document.createElement("div");
  const span_Item = document.createElement("span");
  const p_Item = document.createElement("p");
  const button_Item = document.createElement("button");

  p_Item.innerText = object.title;

  li_Item.classList.add("task__item");
  div_Item.classList.add("task-info__container");
  span_Item.classList.add("task-type");
  button_Item.classList.add("task__button--remove-task");

  if(object.type.toLowerCase() == "urgente") {
    span_Item.classList.add("span-urgent");
    } else if(object.type.toLowerCase() == "importante") {
    span_Item.classList.add("span-important");
    } else if(object.type.toLowerCase() == "normal") {
    span_Item.classList.add("span-normal");
  }

  button_Item.addEventListener("click", function () {
    const deleteItem = tasks.indexOf(object);
    tasks.splice(deleteItem, 1);

    renderElements(tasks);
  });      

  div_Item.append(span_Item, p_Item);
  li_Item.append(div_Item, button_Item);

  const ul_Item = document.querySelector(".tasks__list");
  ul_Item.append(li_Item);
  
  return li_Item;
} 

function renderElements(array) {
  const list = document.querySelector(".tasks__list");
  
  list.innerHTML = "";
  
  for (let i = 0; i < array.length; i++) {
    const item_add = createTaskItem(array[i]);
    
    list.appendChild(item_add)
  }
}

 function addNewTask() {
  const form = document.querySelector(".form__button--add-task");

  form.addEventListener("click", function(event) {
    event.preventDefault();
  
  const inputTitle_Item = document.querySelector("#input_title");
  const inputSelect_Item = document.querySelector(".form__input--priority");

  const newTask = {
    title: inputTitle_Item.value,
    type: inputSelect_Item.value,
  } 
    //console.log(newTask)
  tasks.push(newTask)
  renderElements(tasks)
}) 
};

renderElements(tasks)
addNewTask()  
