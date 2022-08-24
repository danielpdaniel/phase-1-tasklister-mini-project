document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const toDoList = document.querySelector("ul#tasks")
  let listArray = document.getElementsByTagName("li")

  form.addEventListener("submit", function(e){
    e.preventDefault();
    let formContent = document.getElementById("new-task-description").value;
    addToList(formContent);
    form.reset();
    
});

function addToList(newTodo) {
  const newLi = document.createElement("li");
  const btn = document.createElement("button");
  const prioritySelection = document.createElement("select");
  const prioOne = document.createElement("option");
  const prioTwo = document.createElement("option");
  const prioThree = document.createElement("option");

  btn.textContent = "x"

    newLi.textContent = `${newTodo} `;
    
    newLi.appendChild(btn)
    newLi.appendChild(prioritySelection)
      prioOne.textContent = "High Priority";
      prioTwo.textContent = "Medium Priority";
      prioThree.textContent = "Low Priority";
    prioritySelection.appendChild(prioOne);
    prioritySelection.appendChild(prioTwo);
    prioritySelection.appendChild(prioThree);

    newLi.style.color = "red"
    prioritySelection.addEventListener("change", function(e){
      let currentSelection = prioritySelection.value;
      // console.log (currentSelection)

      if (currentSelection === "High Priority"){
        newLi.style.color = "red";
        // listArray.unshift(newLi);
      } else if (currentSelection === "Medium Priority"){
        newLi.style.color = "yellow";
      } else if (currentSelection === "Low Priority"){
        newLi.style.color = "green";
      }
      
    

      // listArray.map(element => {
      //   if (element.style.color === "yellow"){
      //     listArray.splice(element);
      //   }
      // });
      
      // listArray.map(function(element){
      //   let newArray = []
      //   if (element.style.color === "red"){
      //     console.log(newArray.splice(0,0,element));
      //   } else if(element.style.color === 'yellow'){
      //     return listArray.splice(1,0,element)
      //   } else if (element.style.color === "green"){
      //     return listArray.splice(2,0,element)
      //   }
      // })
    })
//     function addToListArray() {
//       let newArray = [];
//   for (li of listArray){
//     newArray.shift('li')
//   }
// }
// addToListArray();
  
    // console.log(listArray);
    toDoList.appendChild(newLi);

    btn.addEventListener("click", function(){
      newLi.remove();
    })

    // if (prioOne.value = "High Priority"){
    //   console.log("heyy")
    //   newLi.style.color = "#ffc0cb";
    // } else if (prioTwo.value = "Medium Priority") {
    //   newLi.style.color = "yellow";
    // } else if (prioThree.value = "Low Priority"){
    //   newLi.style.color = "green";
    // }
    
}



})
