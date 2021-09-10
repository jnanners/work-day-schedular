//WHAT THIS NEEDS TO DO:
//display the current day at the top of the page
var currentDate = moment();

var dateFormat = "dddd, MMMM Do, YYYY";

var dateDisplay = currentDate.format(dateFormat);

$("#currentDay").append(dateDisplay);


//when a timeblock is clicked turn it into an editable text area
$(".description").on("click", function(){
    var container = $(this).text().trim();

    var textInput = $("<textarea>").addClass("container").val(container);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");
})


//save the text to localStorage by clicking the save button in the corresponding row



//check the time in each row and compare it to the current time using moment()
