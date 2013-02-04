$("#title-login").addClass("active");

$("#login").click(function(){
    var username = $("#username").val();
    var pass1 = $("#password").val();
    var pass2 = $("#password-repeat").val();
    if (pass1 == "" || username == ""){
        showError("帐号密码不允许为空");
        return;
    }
    if (pass1 != pass2){
        showError("两次输入的密码不一致");
        return;
    }

    $.ajax({
        "url" : "/adduser",
        "type" : "POST",
        "dataType" : "json",
        "data" : {
            "name" : username,
            "pass" : pass1
        },
        "success" : function(ret){
            if (ret.success){
                showSuccess("注册成功");
            }
            else{
                showError(ret.message);
            }
        },
        "error" : function(){
            showError("注册失败");
        }
    });
});
