//display the current day at the top of the page
var currentDate = moment();
var dateFormat = "dddd, MMMM Do, YYYY";
var dateDisplay = currentDate.format(dateFormat);
$("#currentDay").append(dateDisplay);

//each time a save button is clicked
$(".saveBtn").on("click", function(){
    //get the text in the description
    var activity = $(this).siblings(".description").val().trim();
    //get the id of the row
    var time = $(this).parent().attr("id");
    //send those values to localStorage with the key being the row id 
    //and the value being whats in the text area
    localStorage.setItem(time, activity);
})

//check the time in each row and compare it to the current time using moment()
function timeBlock(){
    var currentHour = moment().hours();
    //for each row element
    $(".row").each(function(){
        //get the id, split it into an array to get the number, 
        //and conver the string to a number
        var rowHour = parseInt($(this).attr("id").split("-")[1]);
        //set classes based on comparing the row number to the current hour
        if(rowHour < currentHour){
            $(this).children(".description").addClass("past");
        }
        else if(rowHour === currentHour){
            $(this).children(".description").removeClass("past");
            $(this).children(".description").addClass("present");
        }
        else{
            $(this).children(".description").removeClass("past");
            $(this).children(".description").removeClass("present");
            $(this).children(".description").addClass("future");
        }
    })
} 

//get each rows text out of localStorage
$("#h-9 .description").val(localStorage.getItem("h-9"));
$("#h-10 .description").val(localStorage.getItem("h-10"));
$("#h-11 .description").val(localStorage.getItem("h-11"));
$("#h-12 .description").val(localStorage.getItem("h-12"));
$("#h-13 .description").val(localStorage.getItem("h-13"));
$("#h-14 .description").val(localStorage.getItem("h-14"));
$("#h-15 .description").val(localStorage.getItem("h-15"));
$("#h-16 .description").val(localStorage.getItem("h-16"));
$("#h-17 .description").val(localStorage.getItem("h-17"));

//run timeBlock function when page loads, and every 15 minutes
setInterval(timeBlock, 900000);
timeBlock();