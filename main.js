const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to the To-Do List Manager Application!");

console.log("\nSelect an action: \n"); // need function for all of this code to re-prompt user
console.log("[1] Create a to-do item.");
console.log("[2] Complete a to-do item.");
console.log("[3] Exit the application.");

let choice = Number(prompt("> ")); // user inputs choice here

let items = [""]; // create empty array for list of items 
let statusArray = [""]; // list of completed items (true/false)

while(choice !== 3){
    if(choice === 1){
        console.log("\n* Create a new item *\n");
    // prompt to ask user for new item
        let answer = prompt("Please enter an item: ")
        items.push(answer);
        statusArray.push(false);
        
        printList(); // displays items & calculates status
        selectChoice(); 
       
    } else if(choice === 2){
        if(statusArray.length > 1){
        console.log("\n* Select an item to complete *\n");
    // prompt for item number to complete
        let indexChoice = Number(prompt("Enter a list item number: "));
       // loop to stay here while completing items
        while(indexChoice > statusArray.length-1 || indexChoice === 0 || isNaN(indexChoice)){ // if not a number (isNan(indexChoice)// replaces if statement --v
       // if user selects number greater than array length
        //if (indexChoice > statusArray.length-1){
            console.log("Please choose a number that corresponds to list item.");
            indexChoice = Number(prompt("Enter a list item number: "));
            
        }
        if(statusArray[indexChoice] === false){
            statusArray[indexChoice] = true;
        }
    } else {
        console.log("No items in to-do list.");
    }

    //showcase changed/updated list
        printList();
        selectChoice();
    } else {
        console.log("\n* Please enter either 1, 2 or 3. *\n");

        selectChoice();
    }
}

// Functions
function selectChoice(){
    console.log("\nSelect an action:\n");
    console.log("[1] Create a to-do item.");
    console.log("[2] Complete a to-do item.");
    console.log("[3] Exit the application.");
    
    choice = Number(prompt("> "));
}

function printList(){
//loop that goes from beginning of items arr to end
    console.log("\nCurrent To-Do List:")
    let status = "";
    for(let i = 1; i < items.length; i++){ // goes thru entire items array (ignoring status)// accounts index 1 forward
        //if statement to check if status is true or false
        if(statusArray[i] === false){
            status = "[Incomplete] "
        } else if(statusArray[i] === true){
            status = "[Complete] "
        }

        console.log(i + ". " + status + items[i]);
    }
    console.log("");
}


/* 
1. Figure out the UI:
- console.logs()
    -different user options
    -welcome message
-prompts
    -check if they input 1-3 <-- if statement
        *1 for add, 2 for completing item, 3 ends application
-display the list to user (visibly see items on screen)

2. Store to-do list items (choice === 1)
-prompt user for to-do list item
- start array w empty string to account for us to loop through array from index 1
    -empty array to store prompts as a to-do list item 
    * push() : adds item to end of array
- start to-do list at 1 index (instead of 0)
-----
-store those items as incomplete

incomplete = false
complete = true
let statusArray = []; // when adding item to list, also adds item here

items: ["wash dog", "go for walk", "get groceries"]
status: [false         true            false      ]  < --- if only looking for go for walk

let completionStatus = false;
let completionStatus2 = false;
items[1]
items[2]

3. Completing incomplete items: (choice === 2)
-prompt for number that corresponds to number in to-do list that we are marking as complete

statusArray[2] : status at array index 1 
-at the index, user specifies change false to true

-conditional to check completion status
-need option for user to change incomplete to complete (false to trueo)




*/