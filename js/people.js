$( "#tom" ).click(function() { $("#person").text("Tom ?"); });
$( "#poppy" ).click(function() { $("#person").text("Poppy ?"); });
$( "#matt" ).click(function() { $("#person").text("Matt ?"); });
$( "#laura" ).click(function() { $("#person").text("Laura ?"); });
$( "#michael" ).click(function() { $("#person").text("Michael ?"); });
$( "#emily" ).click(function() { $("#person").text("Emily ?"); });
$( "#richard" ).click(function() { $("#person").text("Richard ?"); });
$( "#trisha" ).click(function() { $("#person").text("Trisha ?"); });
$( "#anthony" ).click(function() { $("#person").text("Anthony ?"); });
$( "#gill" ).click(function() { $("#person").text("Gill ?"); });
$( "#evelina" ).click(function() { $("#person").text("Evelina ?"); });
$( "#robbie" ).click(function() { $("#person").text("Robbie ?"); });


$( "#confirm-button" ).click(function() {
    var node = document.getElementById('person');
    var text = node.textContent || node.innerText;

    if (text === '?') {
    } else if (confirm("Are you " + text)) {
        if (confirm("Are you sure you are " + text)) {
            if (confirm("Are you very sure that you are " + text + " No peaking at other people ?")) {
                if (confirm("Last chance! One more 'Ok' and you will see your Secret Santa?")) {
                }
            }
        }
    } else {

    }
});



//
// var people = [{name: '1', spouse: '2', current: ''},
//     {name: '2', spouse: '1', current: ''},
//     {name: '3', spouse: '4', current: ''},
//     {name: '4',spouse: '3',current: '',
//     {name: '5',spouse: '',current: ''},
//     {name: '6',spouse: '',current: ''}
// ];
//
// const setCurrentToBlank = (people) => people.forEach((person) => person.current = '');
// const verifyGiftPartners = (people) => people.every((person) => person.current);
//
// //Knuth shuffle
// var shuffle = function shuffle(array) {
//     var currentIndex = array.length,
//         temporaryValue,
//         randomIndex;
//
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
// };
//
// var assignGiftPartners = function(people) {
//     var peopleLeftToAssign = people.map(person => person.name);
//
//     people.forEach(function(person) {
//         var choices = peopleLeftToAssign.filter(function(personToAssign) {
//             return (
//                 personToAssign != person.name &&
//                 personToAssign != person.spouse &&
//                 // personToAssign != person.spouse &&
//                 // person.past.indexOf(personToAssign) === -1
//             );
//         });
//         shuffle(choices);
//         person.current = choices[0];
//         var index = peopleLeftToAssign.indexOf(choices[0]);
//         peopleLeftToAssign.splice(index, 1);
//     });
// };
//
// var allAssigned = false;
// var loopCount = 0;
// while (!allAssigned) {
//     assignGiftPartners(people);
//     allAssigned = verifyGiftPartners(people);
//     //exit loop if going too long
//     if (loopCount > 50) {
//         throw 'Something went wrong with the assignment';
//     }
//     if (!allAssigned) {
//         setCurrentToBlank(people);
//     }
// }
