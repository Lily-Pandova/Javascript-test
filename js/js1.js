
$(document).ready(function(){
    $(".nav-11").click(function() {
        var nav = document.getElementById('nav'),
            anchor = nav.getElementsByClassName('.nav-11'),
            current = window.location;
       console.log("anchor = ",anchor,"current = ",current);
        for (var i = 0; i < anchor.length; i++) {
            if(anchor[i].href == current) {
                anchor[i].className = "active";
            }
        }
    })
});

function showMe(){
    var navig=document.getElementById("nav-2");
    if(navig.style.display=="none"){
        navig.style.display="block";
    }
    else{
        navig.style.display="none";
    }
}
function lookMe() {
    var nav=document.getElementById("slide1");
    if(nav.style.display=="none") {
        nav.style.display="block";
    }
    else {
        nav.style.display="none";
    }

}
function lookMe1() {
    var nav1=document.getElementById('slide22');
    if(nav1.style.display=="none") {
        nav1.style.display="block";
    }
    else {
        nav1.style.display="none";
    }

}
function lookMe3() {
    var nav2=document.getElementById("slide33");
    if(nav2.style.display=="none") {
        nav2.style.display="block";
    }
    else {
        nav2.style.display="none";
    }

}


var content = {
    heading: 'My Collegues',
    table: [
        {'ID': 2,	'First Name': 'Martin',		'Last Name': 'Chaov',		'Occupation': 'Designer'},
        {'ID': 6,	'First Name': 'Lyubomir',	'Last Name': 'Todorov',		'Occupation': 'Front-end developer'},
        {'ID': 1,	'First Name': 'Daniela',	'Last Name': 'Popova',		'Occupation': 'Front-end developer'},
        {'ID': 4,	'First Name': 'Tzvetana',	'Last Name': 'Zlatareva',	'Occupation': 'Designer'},
        {'ID': 11,	'First Name': 'Galina',		'Last Name': 'Georgieva',	'Occupation': 'C# .NET developer'},
        {'ID': 3,	'First Name': 'Maya',		'Last Name': 'Petkova',		'Occupation': 'Front-end developer'},
        {'ID': 5,	'First Name': 'Desislava',	'Last Name': 'Zaharieva',	'Occupation': 'Team Leader'},
        {'ID': 12,	'First Name': 'Panaoyt',	'Last Name': 'Popov',		'Occupation': 'C# .NET developer'},
        {'ID': 7,	'First Name': 'Viktor',		'Last Name': 'Mitev',		'Occupation': 'C# .NET developer'},
        {'ID': 13,	'First Name': 'Gancho',		'Last Name': 'Angelov',		'Occupation': 'Front-end developer'},
        {'ID': 9,	'First Name': 'Gabriel',	'Last Name': 'Kunchev',		'Occupation': 'Front-end developer'},
        {'ID': 10,	'First Name': 'Petko',		'Last Name': 'Petkov',		'Occupation': 'C# .NET developer'},
        {'ID': 8,	'First Name': 'Dobri',		'Last Name': 'Ugrenov',		'Occupation': 'Marketing'},
        {'ID': 14,	'First Name': 'Stanislav',	'Last Name': 'Kumanov',		'Occupation': 'Front-end developer'},
        {'ID': 15,	'First Name': 'Marin',		'Last Name': 'Dimitrov',	'Occupation': 'Team Leader'},
        {'ID': 16,	'First Name': 'Ivan',		'Last Name': 'Atanasov',	'Occupation': 'Team Leader'},
        {'ID': 17,	'First Name': 'Stoil',		'Last Name': 'Pankov',		'Occupation': 'Team Leader'},
        {'ID': 18,	'First Name': 'Elina',		'Last Name': 'Basheva',		'Occupation': 'Team Leader'},
        {'ID': 19,	'First Name': 'Nicole',		'Last Name': 'Kalcheva',	'Occupation': 'Product manager'},
        {'ID': 20,	'First Name': 'Desislava',	'Last Name': 'Savova',		'Occupation': 'Project manager'},
        {'ID': 21,	'First Name': 'Rosica',		'Last Name': 'Dencheva',	'Occupation': 'Account manager'},
        {'ID': 22,	'First Name': 'Boian',		'Last Name': 'Botev',		'Occupation': 'Team Leader'},
        {'ID': 23,	'First Name': 'Diana',		'Last Name': 'Karcheva',	'Occupation': 'C# .Net developer'},
        {'ID': 24,	'First Name': 'Miroslav',	'Last Name': 'Uzunov',		'Occupation': 'DBA'},
        {'ID': 25,	'First Name': 'Ivan',		'Last Name': 'Tsatsarov',	'Occupation': 'DBA'}
    ]

};

window.onload=function(){
    var target1=document.getElementById("miasto");
    target1.innerHTML="<table id=tablica1>" + "<caption>" + "My Collegues" + "</caption>" + "<tr><th>" + "ID"+ "</th>" + "<th>"+ "First Name" + "</th>" + "<th>" + "Last Name" + "</th>" + "<th>" + "Occupation" +"</th></tr>";
    var object=content.table,
        counts=object.length,
        target=document.getElementById("tablica"),
        i;
    for(i=0;i<counts; i=i+1){
        var item = object[i],
            ID=item.ID,
            FirstName = item.FirstName;
           /* var sortIt=content.table.sort("alphabetic");*/
            object.sort(function(a,b) {
                return parseFloat(a.ID)-parseFloat(b.ID);
            });
        target.innerHTML +="<table id=tablica>"+"<tr><td class='tabl'>" + content.table[i].ID + "</td>" + "<td class='tabl'>" + content.table[i]['First Name'] +"</td>"+ "<td class='tabl'>" + content.table[i]['Last Name'] +"</td>" + "<td class='tabl'>" + content.table[i].Occupation + "</td></tr>"+ "</table>"
    }

};


