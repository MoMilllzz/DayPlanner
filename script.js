$(".saveBtn").click(function() {
    let time=$(this).parent().attr("id")
    let text=$(this).siblings(".description").val()
    console.log (text) 

    localStorage.setItem(time, text)
})

function changeColor() {
    let currentHour = moment().hours()
    console.log(currentHour)
$(".time-block").each(function() {
let calendarHour= parseInt($(this).attr("id"))
console.log (calendarHour)
if(calendarHour<currentHour) {
    $(this).addClass("past")
}
else if(calendarHour===currentHour) { 
    $(this).removeClass("past")
    $(this).addClass("present")
}
else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
}
})
}
changeColor()


$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))

