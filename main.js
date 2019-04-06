let place = [];

const printToDom = (divId, textToPrint) =>{
    const getDiv = document.getElementById(divId);
    getDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) =>{
    
    let domString = '';
    arrayToPrint.forEach((p)=>{
        domString += `<div class="placeCard col-sm-3 m-2 card">`;
        domString += `<img src="${p.cityImage}"class="img-thumbnail" />`;
        domString += `<div class="card-body">`;
        domString += `<h5>${p.favId}</h5>`;
        domString += `<p>${p.favoriteTouristAttraction}</p>`;
        domString += `<p>${p.favoriteHotel}</p>`;
        domString += `<p>${p.favoriteBar}</p>`;
        domString += `<p>${p.cityName}, ${p.cityState}</p>`;
        domString += `</div>`;
        domString += `</div>`;
 
    });
    printToDom('placesCard', domString);
};

function successCont(){
    const data = JSON.parse(this.responseText);
    place = data.favoritePlace;
    domStringBuilder(place);
    console.log(place);
};

function dataFail() {
    console.log('oh crap!');
};

const getData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', successCont);
    myRequest.addEventListener('error', dataFail);
    myRequest.open('GET', './db/favoritePlace.json');
    myRequest.send();
};


const init = ()=>{
    getData();
};

init();