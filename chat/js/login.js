function loginButton() {
    var idInput = $("#name").val();
    var passInput = $("#password").val();
    var errorMsg = $("#validationMsg");
    if (idInput === 0)
        errorMsg.text("Adınız boş bırakılmamalıdır.Lütfen kontrol ediniz.");
    else if (passInput === 0)
        errorMsg.text("Şifreniz boş bırakılmamalıdır.Lütfen kontrol ediniz.");
    else if (idInput !== 0 && passInput !== 0) {
        errorMsg.text("");
        document.getElementById("loginForm").submit();
    }
}