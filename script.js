$(document).ready(function(){
    var group = ["Alan", "Joel", "Yanella", "Josue", "Tushar", "Odalys"];
    var ScriptEducators = ["Aaron", "Justin", "Zach", "Julia", "Alyxe"];
    $("#studentButton").click(function() {
        var students = Math.floor(Math.random()*group.length);
        $("#studentDisplay").append(group[students]);

    });
$("#teacherButton").click(function() {
    var teachers = Math.floor(Math.random()*ScriptEducators.length);
    $("#teacherDisplay").append(ScriptEducators[teachers]);
});


});
