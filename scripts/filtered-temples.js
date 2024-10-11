const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "São Paulo Brazil",
      location: "São Paulo, Brazil",
      dedicated: "1978, October, 30",
      area: 59246,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego, California, United States",
      dedicated: "1993, April, 25",
      area: 72000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
      templeName: "Provo City Center",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 85084,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1550159-wallpaper.jpg"
    }
];

const galleryDiv = document.getElementById("gallery");

temples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    // create and append image element
    const templeImg = document.createElement("img"); // new element img created here represented by templeImg constant
    templeImg.src = temple.imageUrl; // defining the src of the image
    templeImg.alt = temple.templeName; //defining the alt of the image using temples name
    templeImg.loading = "lazy";
    templeCard.appendChild(templeImg); // appending the image to the temple card

    // create and append a title (name of temple)
    const templeTitle = document.createElement("h3");
    templeTitle.textContent = temple.templeName;
    templeCard.appendChild(templeTitle);

    // create and append a location
    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeCard.appendChild(templeLocation);

    // create and append a dedicated date
    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeCard.appendChild(templeDedicated);

    // create and append an area
    const templeArea = document.createElement("p");
    templeArea.textContent = `Area: ${temple.area} sq ft`;
    templeCard.appendChild(templeArea);

    // append the temple card to the gallery
    galleryDiv.appendChild(templeCard);

});



function filterOldTemples() {
    const templeCards = document.querySelectorAll(".temple-card"); // selecting all the temple cards

    templeCards.forEach((card) => { //for each card in the array
        dedicatedDate = card.querySelector("p:nth-child(4)").textContent; // selects the 4th item, which is the dedicated date
        const year = parseInt(dedicatedDate.split(", ")[0].replace("Dedicated: ", "")); //this makes the "Dedicated: " nothing, so you can get the correct value, which is the first item before the comma

        if (year < 1900) {
            card.style.display = "block";
        } else {
            card.style.display = "none"; // the approach here is to hide the filtered items
        }
    });
}

function filterNewTemples() {
    const templeCards = document.querySelectorAll(".temple-card");

    templeCards.forEach((card) => {
        dedicatedDate = card.querySelector("p:nth-child(4)").textContent;
        const year = parseInt(dedicatedDate.split(", ")[0].replace("Dedicated: ", ""));

        if (year > 2000) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function filterLargeTemples() {
    const templeCards = document.querySelectorAll(".temple-card");

    templeCards.forEach((card) => {
        templeArea = card.querySelector("p:nth-child(5)").textContent;
        const area = parseInt(templeArea.split(" ")[1].replace("Area: ", "")); // same logic but now we need the second index because the first returns NaN

        if (area > 90000) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function filterSmallTemples() {
    const templeCards = document.querySelectorAll(".temple-card");

    templeCards.forEach((card) => {
        templeArea = card.querySelector("p:nth-child(5)").textContent;
        const area = parseInt(templeArea.split(" ")[1].replace("Area: ", ""));

        if (area < 10000) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}


// used my beloved switch conditional that changes based on clicks on the nav bar
function applyFilter() {
    const filter = window.location.hash.substring(1); // i'm using the hashtag as a value for the conditionals, so that the page don't load every time but i can keep the nav bar as is.

    switch (filter) {
        case "old":
            filterOldTemples();
            break;
        case "new":
            filterNewTemples();
            break;
        case "large":
            filterLargeTemples();
            break;
        case "small":
            filterSmallTemples();
            break;
        case "home":
        default:
            document.querySelectorAll(".temple-card").forEach(card => {
                card.style.display = "block";
            });
            break;      
    }
}

// this receives the hashchange and load events to execute the filter function
window.addEventListener("hashchange", applyFilter);
window.addEventListener("load", applyFilter);


