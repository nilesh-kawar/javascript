const courses = [
    {
        name: "Complete ReactJS course",
        price: "2.3",
    },
    {
        name: "Complete Angular course",
        price: "2.2",
    },
    {
        name: "Complete Python course",
        price: "2.7",
    },
    {
        name: "Complete Django course",
        price: "3.0",
    },
    {
        name: "Complete MERN course",
        price: "2.5",
    },
];

{/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
</ul> */}


function generateLIST() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( (course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        ul.appendChild(li);

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode(course.price);
        span.appendChild(price);

        li.appendChild(span);
        
    });

}

// generateLIST();

window.addEventListener("load", generateLIST);

const buttonAcending = document.querySelector(".sort-btn-ascending");

buttonAcending.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  generateLIST();
});

const buttonDescending = document.querySelector(".sort-btn-descending");

buttonDescending.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price).reverse();
  generateLIST();
});

