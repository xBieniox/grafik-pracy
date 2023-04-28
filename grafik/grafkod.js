
const dnitygodnia = ["Pon", "Wto", "Śro", "Czw", "Pią", "Sob", "Nie"];
const miesiace = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

var lastday;
var firstday;

var days;
var changes;
var dni=[];
var zerday;
var zer = 0;
var licze =0;
var tem=0;
function datedown()
{

var date = new Date();
 firstday = new Date(date.getFullYear(), date.getMonth()+tem, 1);
 lastday = new Date(date.getFullYear(), date.getMonth() + 1 + tem, 0);

 console.log(dnitygodnia[lastday.getDay() - 1]);
console.log(miesiace[firstday.getMonth()]);

 days = lastday.getDate();
 changes = days * 2;
 if(firstday.getDay()>0)
 {
 zerday = firstday.getDay()-1;
 }
 console.log(zerday);
 $("#monthname").html(miesiace[firstday.getMonth()]+" <br> "+firstday.getFullYear());

}


 function nextmonth()
 {
  tem++;
 table();
 }


 function prevmonth()
 {
  tem--;
 table();
 }

class pracownik {
  constructor(name, nr) {
    this.name = name;
    this.godziny = 0;
    this.dni = [];
    this.blad="";
    for (let i = 0; i < 30; i++) {
      this.dni[i] = "W";
      this.nr = nr;
    }
  }

  checking(dzien, ajdi, nr) {
    if (this.dni[dzien] != "W") {
      $(z[ajdi]).html(this.dni[dzien]);
    } else {
      $(z[ajdi]).html("");
    }

   
}
}

let workers = [
  "Bartek",
  "Aneta",
  "Rafał",
  "Karolina",
  "Natalia",
  "Dorota",
  "Sylwia",
  "Jerzy",
  "Kinga",
];

var tabled = [workers.length];
for (let i = 0; i < workers.length; i++) {
  workers[i] = new pracownik(workers[i], i);
}

let z = [];

window.onload = table;

function table() {

  datedown();
  var generator = "<table><tr><th colspan='2'> </th>";

  for (let j = 0; j < days; j++) {
    generator += "<td id='daytyg" + j + "'class='days' colspan='1'>0</td>";
  }

  generator += "</tr>";

  generator += "<tr><th colspan='2'> </th>";

  for (let i = 0; i < days; i++) {
    dni[i] = [];
    dni[i][0] = i;
    dni[i][1] = 0;
    dni[i][2] = 0;

    generator +=
      "<td id='day" + i + "'class='days' colspan='1'>" + (i + 1) + "</td>";
  }

  generator += "</tr>";

  for (let i = 0; i < workers.length; i++) {
    generator +=
      "<tr> <th class='days' colspan='2'>" + workers[i].name + "</th>";

    for (let j = 0; j < days; j++) {
      generator += "<td id='prac" + i + "dzien" + j + "'class='changes'></td>";

      if (j == days - 1) {
        generator += "<td id='prach" + i + "'class='changes'>0</td>";
      }
    }

    generator += "</tr>";
  }
  generator += "<tr> <th colspan='2'></th>";

  for (let j = 0; j < days; j++) {
    generator += "<td id='dzien" + j + "'class='check'></td>";
  }

  generator += "</tr></table>";

  $("#board").html(generator);

  for (let i = 0; i < workers.length; i++) {
    for (let j = 0; j < days; j++) {
      z[days * i + j] = document.getElementById("prac" + i + "dzien" + j);

      z[days * i + j].addEventListener("click", function () {
        praca(i, j);
      });

      z[days * i + j].addEventListener("contextmenu", function (e) {
        e.preventDefault();
        urlop(i, j);
      });
    }
  }

console.log(document.querySelector(`#daytyg${days-1}`).innerHTML);
console.log(days-1);
var oo=0;
  while(document.querySelector(`#daytyg${days-1}`).innerHTML==0)
    {
      
      document.querySelector(`#daytyg${oo}`).innerHTML = dnitygodnia[zerday];

    if(dnitygodnia[zerday]=="Nie"|| dnitygodnia[zerday]=="Sob")
    {
      $("#daytyg"+oo).css("background-color","#A9A9A9");
      $("#day"+oo).css("background-color","#A9A9A9");
    }

    oo++;
    zerday++;
    if(zerday==7)
   {
  
zerday=0;

  }

   }
  }

function refiling() {
  const changesperday = 2;
  const peopleperchange = 2;
  const peopleperday = 4;
  const maxdayinrow = 2;
  let currentworker = Math.floor(Math.random() * workers.length);
}



function praca(nr, dzien) {
  let ajdi = days * nr + dzien;

  if (workers[nr].dni[dzien] == "W") {
    workers[nr].dni[dzien] = "D";
    workers[nr].godziny += 12;
    $("#prach" + nr).html(workers[nr].godziny);
    workers[nr].checking(dzien, ajdi, nr);
  } else {
    if (workers[nr].dni[dzien] == "U") {
      return 0;
    }

    if (workers[nr].dni[dzien] == "D") {
      workers[nr].dni[dzien] = "N";
      workers[nr].checking(dzien, ajdi, nr);
    } else {
      workers[nr].dni[dzien] = "W";
      workers[nr].godziny -= 12;
      $("#prach" + nr).html(workers[nr].godziny);
      workers[nr].checking(dzien, ajdi, nr);
    }
  }
}

function urlop(prac, dzien) {
  var ajdi = days * prac + dzien;

  if (workers[prac].dni[dzien] == "W") {
    $(z[ajdi]).addClass("urlop");
    workers[prac].dni[dzien] = "U";
  } else {
    if (workers[prac].dni[dzien] == "U") {
      workers[prac].dni[dzien] = "W";

      $(z[ajdi]).removeClass("urlop");
      z[days * prac + dzien].addEventListener("click", function () {
        praca(prac, dzien);
      });
    }
  }
}
