//===================Exercise #1===========================//
/*Write a function that takes in the string and the list of dog names, loops through the list and
checks that the current name is in the string passed in. The output should be: "Matched dog_name" if 
name is in the string, if no matches are present console.log "no matches"*/

 let dog_string = "Hello Max, my name is Dog, and I have purple eyes!" 
 let dog_names = ["Max", "Has", "PuRple", "dog"]

function findWords(string, listofNames){ 
    string=string.toLowerCase();
    for (let name of listofNames){
        if (string.includes(name.toLowerCase())){
            console.log(`Matched ${name}`);
        }
        else{
            console.log("No Matches");
        };
    };
};

findWords(dog_string, dog_names);


//===========================Exercise #2================================//
/*Write a function that takes in an array and removes every even index with a splice, 
and replaces it with the string "even index" */

givenArr ==["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function replaceEvens(givenArr){
    for (let i =0; i< givenArr.length; i++){
        if (i % 2==0){
            givenArr.splice(i,1,'even index')
        }
    }
}
console.log(replaceEvens(givenArr))

/*let new_group =grpONames.splice(0,0,'Scarlett')
console.log(grpONames)

let new_groups =grpONames.splice(1,2,'Scarlett')
console.log(grpONames)
*/