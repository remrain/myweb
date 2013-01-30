$("#errmsg").hide();

function showSuccess(msg){
    $("#errmsg").text(msg);
    $("#errmsg").removeClass();
    $("#errmsg").addClass("alert alert-success");
    $("#errmsg").show();
}

function showError(msg){
    $("#errmsg").text(msg);
    $("#errmsg").removeClass();
    $("#errmsg").addClass("alert alert-error");
    $("#errmsg").fadeIn();
}
