/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 0;
let number_per_day = 0;

let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let half_day = document.getElementById("half");
let full_day = document.getElementById("full");
let clear_day = document.getElementById("clear-button");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

//should turn Yellow upon click
function monday_click() {
    //clicked class in css***
    monday.classList.add("clicked");
    number_per_day += 1
    calculation();
}
monday.addEventListener("click", monday_click);

function tuesday_click() {
    //clicked class in css***
    tuesday.classList.add("clicked");
    number_per_day += 1
    calculation();
}
tuesday.addEventListener("click", tuesday_click);

function wednesday_click() {
    //clicked class in css***
    wednesday.classList.add("clicked");
    number_per_day += 1
}
wednesday.addEventListener("click", wednesday_click);

function thursday_click() {
    //clicked class in css***
    thursday.classList.add("clicked");
    number_per_day += 1
}
thursday.addEventListener("click", thursday_click);

function friday_click() {
    //clicked class in css***
    friday.classList.add("clicked");
    number_per_day += 1
}
friday.addEventListener("click", friday_click);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clear_button() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    friday.classList.remove("clicked");

    cost_per_day = 0;
    number_per_day = 0;

    calculation();

}
clear_day.addEventListener("click", clear_button);




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function half_days_selected() {
    cost_per_day = 20;
    half_day.classList.add("clicked");
    full_day.classList.remove("clicked");

    calculation();
}
half_day.addEventListener("click", half_days_selected);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function full_days_selected() {
    cost_per_day = 35;
    half_day.classList.remove("clicked");
    full_day.classList.add("clicked");

    calculation();
}
full_day.addEventListener("click", full_days_selected);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation() {
    let calculated_cost = cost_per_day * number_per_day;
    document.getElementById("calculated-cost").innerHTML = calculated_cost;
}

