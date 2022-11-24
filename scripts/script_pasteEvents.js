const data = {
    "fechaActual": "2022-01-01",
    "eventos": [
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
            "name": "Korean style",
            "date": "2021-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Campo de FutbÃ³l",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
            "name": "15K NY",
            "date": "2021-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
            "name": "Batman",
            "date": "2021-03-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            "image": "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
}
/* DATE TO TIMESTAMP */
const startingDate = data.fechaActual;
//"2022-01-01"
const startingDateSplit = startingDate.split("-");
// [2022, 01, 01]
const startingDateParsed = new Date(startingDateSplit[0], startingDateSplit[1] - 1, startingDateSplit[2])
//Sat Jan 01 2022 00:00:00 GMT-0300 (hora estándar de Argentina)
const startingDateToCompare = startingDateParsed.getTime();
console.log(startingDateToCompare)
//1641006000000


/* FUNCION PARA CONVERTIR A TIMESTAMP LA DATE DE CADA EVENTO */
function convertDate(events) {
    //para cada uno de los eventos cuando lo recorramos en el for
    let eventDate = data.eventos[events].date;
    let eventDateSplit = eventDate.split("-");
    let eventDateParsed = new Date(eventDateSplit[0], eventDateSplit[1] - 1, eventDateSplit[2]);
    let eventDateToCompare = eventDateParsed.getTime();
    //console.log(eventDateToCompare)
    return (eventDateToCompare)
}

/* FUNCION PARA CREAR LAS CARDS */
function creatingCards(parameters) {
    let cardContent = ``;
    const divOfCards = document.getElementById("cards");
    // console.log("estamos mostrando el div contenedor", divOfCards);
    for (let i = 0; i < data.eventos.length; i++) {
        if (convertDate(i) < startingDateToCompare) {
            cardContent += `
            <div class="data-events card text-center px-3 pt-3 pb-2 mx-2 my-3 col-lg-12" style="width: 18rem;" id= "${data.eventos[i].category.split(' ').join('').toLowerCase()}">
            <img src="${data.eventos[i].image}" class="card-img-top img-fluid" alt="race">
            <div class="card-body mt-2 p-0">
                <h5 class="card-title">${data.eventos[i].name}</h5>
                <p class="card-text" style="height: 6rem;">${data.eventos[i].description}</p>
                <div class="bottom-card">
                    <div class="price-card">
                        <p class="m-0">$${data.eventos[i].price}</p>
                    </div>
                    <div class="button-card">
                        <button class="btn btn-primary color-button" type="button"><a class="button-a" href="./pages/events.html">More info</a></button>
                    </div>
                </div>
            </div>
        </div>
            `;
            
            
        }; 
    }
    divOfCards.innerHTML = cardContent;
};

creatingCards(data);


/*----- Categorías de los eventos -----*/
let categoriesRepeated = data.eventos.map(evento => evento.category)
const categoriesWithoutRepeating = [...new Set(categoriesRepeated)];
const categoriesFieldset = document.getElementById('categories-fieldset');
function creatingCategories() {
  categoriesWithoutRepeating.map((category) => {
    const newCheckbox = document.createElement('div')
    newCheckbox.classList.add('category-checkbox');
    newCheckbox.classList.add('mx-1')
    let categoryCheckbox = `
    <input class="check-boxes" type="checkbox" name="${category.split(' ').join('').toLowerCase()}" id="${category.split(' ').join('').toLowerCase()}">
    <label for="${category.split(' ').join('').toLowerCase()}">${category}</label>`
    newCheckbox.innerHTML = categoryCheckbox
    categoriesFieldset.appendChild(newCheckbox)
  })
};
creatingCategories()


//input
const inputSearch = document.getElementById('input-search')
//cada una de las cards
const dataEvents = document.querySelectorAll('.data-events')

categoriesFieldset.addEventListener('change', (event) => {
  // cada uno de los checkbox
  const checkBoxes = document.querySelectorAll('.check-boxes')
  let checkedCategories = []
  checkBoxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkedCategories.push(checkbox.id)
    }
  })
  //console.log(checkedCategories)
  dataEvents.forEach((card) => {
    if (checkedCategories.includes(card.id)) {
      card.classList.remove('hidden')
    } else {
      card.classList.add('hidden')
    }
    if (checkedCategories.length === 0) {
      card.classList.remove('hidden')
    }
  })
})

inputSearch.addEventListener('keyup', (event) => {
    // console.log(event.target.value)
    dataEvents.forEach(dataEvent => {
      dataEvent.textContent.split(' ').join('').toLowerCase().includes(event.target.value.split(' ').join('').toLowerCase())
      ? dataEvent.classList.remove('hidden')
      : dataEvent.classList.add('hidden')
    });
  })

/* 
const mainDate = data.fechaActual;
console.log(mainDate);

const mainDateToParse = Date.parse(mainDate)
console.log(mainDateToParse)
//1640995200000 */

/* 
let arrayOfPastEvents = [];
for (let i = 0; i < data.eventos.length; i++) {

    let eventDate = data.eventos[i].date;
    let eventDateSplit = eventDate.split("-");
    let eventDateParsed = new Date(eventDateSplit[0], eventDateSplit[1]-1, eventDateSplit[2]);
    let eventDateToCompare = eventDateParsed.getTime(); 
    console.log(eventDateToCompare)
} */

/* 
if (startingDateToCompare > eventDateToCompare){
    console.log(eventDateToCompare) 
    arrayOfPastEvents.push(eventDateToCompare)
    console.log(arrayOfPastEvents)
     
} /* 
function creatingCards(parameters){
      let cardContent = ``;
      const divOfCards = document.getElementById("cards");
      console.log("estamos mostrando el div contenedor", divOfCards);
  
      for (let i = 0; i < data.eventos.length; i++) {
          cardContent += `
          <div class="card text-center px-3 pt-3 pb-2 mx-2 my-3 col-lg-12" style="width: 18rem;">
          <img src="${data.eventos[i].image}" class="card-img-top img-fluid" alt="race">
          <div class="card-body mt-2 p-0">
              <h5 class="card-title ">${data.eventos[i].name}</h5>
              <p class="card-text" style="height: 6rem;">${data.eventos[i].description}</p>
              <div class="bottom-card">
                  <div class="price-card">
                      <p class="m-0">$${data.eventos[i].price}</p>
                  </div>
                  <div class="button-card">
                      <button class="btn btn-primary color-button" type="button"><a class="button-a" href="./pages/events.html">More info</a></button>
                  </div>
              </div>
          </div>
      </div>
          `;
      };
  
      divOfCards.innerHTML = cardContent;
  }
   */
/*  creatingCards(data)  */