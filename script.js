//Första bilden

//Rad 1
const rad1 = document.createElement('h1');
document.body.append(rad1);
rad1.innerText = 'Rad ';

//Rad 2
const rad2 = document.createElement('h1');
document.body.append(rad2);
rad2.innerText = 'Rad ';

//Rad 3
const rad3 = document.createElement('h1');
document.body.append(rad3);
rad3.innerText = 'Rad ';

//Rad 4
const rad4 = document.createElement('h1');
document.body.append(rad4);
rad4.innerText = 'Rad ';

//Rad 5
const rad5 = document.createElement('h1');
document.body.append(rad5);
rad5.innerText = 'Rad ';

//Gör alla p-element lila
const pAll = document.querySelectorAll("h1");
console.log(pAll);
var colors = ["#b6fbb6", "#b6fbcd", "#b6fbe4", "#b6fbfb", "#b5e4fb"];
for (let i = 0; i < pAll.length; i++) {
  pAll[i].style.color = '#6f6ff7';
  pAll[i].innerText = `Rad ${i + 1}`;
  pAll[i].style.textAlign = "center";
  pAll[i].style.fontSize = `${i + 1}em`;
  pAll[i].style.backgroundColor = colors[i % colors.length];


}

//Andra bilden

const square = document.createElement("div");
square.style.border = "1px solid black";
square.style.width = "95%";
square.style.height = "290px";
square.style.display = "flex";
square.style.justifyContent = "space-around";
square.style.padding = "50px 35px";
square.style.marginBottom = "100px";


document.body.appendChild(square);

for (let i = 0; i < 3; i++) {
  const ol = document.createElement('ol');
  ol.style.padding = "20px 10px 2px 10px";
  ol.style.marginBottom = "10px";
  ol.style.width = "90px";
  ol.style.backgroundColor = "#a8a8f0";

  square.append(ol);

  for (let k = 0; k < 10; k++) {

    const li = document.createElement('li');
    li.style.listStyle = "none";
    li.style.paddingTop = "2px";
    li.style.paddingBottom = "2px";
    ol.append(li);



    if (i === 0) {
      li.innerText = `${k}`;
    }


    else if (i === 1) {
      li.innerText = `${9 - k}`;
      li.style.textAlign = "center";
    }

    else {
      const arraylist = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
      li.innerText = `${arraylist[k]}`;
      li.style.textAlign = "right";
    }
  }

}
const liElements = document.querySelectorAll('li');
console.log(liElements);
const liElementsFirstList = document.querySelectorAll('ol:first-child li');
console.log('li elements of first list', liElementsFirstList);

let index = 0;
for (const li of liElementsFirstList) {

  li.style.background = 'white';
  if (index % 2 == 1) {
    li.style.background = 'black';
    li.style.color = "white";
  }
  else if (index == 4) {
    li.style.background = '#a8a8f0';
    li.style.color = "white";
  }
  index++;
}

const liElements2 = document.querySelectorAll('li');
console.log(liElements2);
const liElementsSecondList = document.querySelectorAll('ol:nth-child(2) li');
console.log(liElementsSecondList, 'ol:nth-child(2) li');


index = 0;
for (const li of liElementsSecondList) {
  console.log(index);
  li.style.background = "black";
  li.style.color = "white";
  if (index % 2 == 1 && index != 1) {
    li.style.background = 'white';
    li.style.color = "black";

  }
  else if (index == 1) {
    li.style.backgroundColor = '#a8a8f0';
  }
  index++;
}

const liElements3 = document.querySelectorAll('li');
console.log(liElements3);
const liElementsThirdList = document.querySelectorAll('ol:nth-child(3) li');
console.log(liElementsThirdList);


index = 0;
for (const li of liElementsThirdList) {

  li.style.background = "white";
  if (index % 2 == 1 && index != 5) {
    li.style.background = 'black';
    li.style.color = 'white';
  }

  else if (index == 5) {
    li.style.background = '#a8a8f0';
    li.style.color = ""

  }

  index++;
}





