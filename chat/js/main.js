$(document).ready(function () {
    $(".status").click(function () {
        $(".status > .status-icon").removeClass("status-icon-active");
        $(".status > .status-text").removeClass("status-text-active");
        $("> .status-icon", this).addClass("status-icon-active");
        $("> .status-text", this).addClass("status-text-active");
    });
    $(".exit-button, .quit-button").click(function () {
        window.location.href = "login.html";
    });
    $("body").on("click", ".section-1-sixth-item-item", function () {
        $(".section-1").addClass("sm-hidden");
        $(".section-1-sixth-item-item-container").removeClass("section-1-sixth-item-item-container-active");
        $("> .section-1-sixth-item-item-container", this).addClass("section-1-sixth-item-item-container-active");
        $(".user-name-surname").removeClass("user-name-surname-active");
        $("> .section-1-sixth-item-item-container > .section-1-sixth-item-item-second-item > .user-name-surname", this).addClass("user-name-surname-active");
        var id = parseInt($(this).attr("id"));
        $(".section-2").removeClass("xl-hidden");
        $(".profile-avatar").attr("src", customers[id - 1].avatar);
        $(".profile-user-name-surname").text(customers[id - 1].nameSurname);
        $(".user-phone").text(customers[id - 1].phone);
        $(".section-2-second-item-item:first-child > .order-information-value").text(customers[id - 1].order);
        $(".section-2-second-item-item:nth-child(2) > .order-information-value").text(customers[id - 1].cartAvarage + "₺");
        $(".section-2-second-item-item:nth-child(3) > .order-information-value").text(customers[id - 1].totalExpenditure + "₺");
        $(".section-2-second-item-item:nth-child(4) > .order-information-value").text(customers[id - 1].frequencyOfCommunication);
        $(".section-2-second-item-item:last-child > .order-information-value").text(customers[id - 1].lastCommunication);
        $(".text-field").val("");
        $(".address-field").val("");
        $(".text-field").css("border", "1px solid #aaaaaa");
        $(".address-field").css("border", "1px solid #aaaaaa");
        $(".error-message").remove();
        $(".section-3").removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
        $(".emoji-category").removeClass("emoji-category-active");
        $(".emoji-category[data-group-id=1]").addClass("emoji-category-active");
        $(".emoji").css("display", "none");
        $(".emoji[data-group-id=1]").removeAttr("style");
        $(".emojis").scrollTop(0);
        $(".emoji-button-icon").removeClass("fas fa-times");
        $(".emoji-button-icon").addClass("far fa-smile");
        $(".section-3-sixth-item-last-item").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        $(".message-field").text("");
        setHeightToMessagesPartInSection3();
        $(".section-3-second-item-container > .col").remove();
        for (var i = 0; i <= messages.length - 1; i++) {
            if (messages[i].customerID === id) {
                if (messages[i].from === "customer")
                    $(".section-3-second-item-container").append("<div class='col'>" +
                        "<div class='message-header-customer'>" +
                        "<i class='fas fa-circle message-customer-status-icon'></i>" +
                        "<span class='message-from'>" + customers[id - 1].nameSurname + "</span>" +
                        "<span class='message-time'>" + messages[i].time + ", " + messages[i].date + "</span>" +
                        "</div>" +
                        "<div class='talking-balloon talking-balloon-first-message-customer'>" + messages[i].text + "</div>" +
                        /*"<div class='talking-balloon talking-balloon-second-message-customer'>Yardımcı olur musunuz?</div>" +*/
                        "</div>");
                else
                    $(".section-3-item:nth-child(2) > .section-3-second-item-container").append("<div class='col'>" +
                        "<div class='message-header-agent'>" +
                        "<i class='fas fa-circle message-agent-status-icon'></i>" +
                        "<span class='message-from'>Agent</span>" +
                        "<span class='message-time'>" + messages[i].time + ", " + messages[i].date + "</span>" +
                        "</div>" +
                        "<div class='talking-balloon talking-balloon-first-message-agent'>" + messages[i].text + "</div>" +
                        /*"<div class='talking-balloon talking-balloon-second-message-customer'>Yardımcı olur musunuz?</div>" +*/
                        "</div>");
            }
        }
    }).on("click", ".tag", function () {
        $(this).parent().remove();
    });
    $(".add").click(function () {
        Swal.fire({
            cancelButtonColor: "#d9d9d9",
            cancelButtonText: "İptal",
            confirmButtonColor: "#f33a3f",
            confirmButtonText: "Ekle",
            input: "text",
            inputValidator: function (value) {
                if (!value)
                    return "Boş Bırakmayınız!";
                else
                    $(".add").parent().parent().append("<div class='col section-2-fourth-item-item'>" +
                        "<button class='tag'>" +
                        "#" + value +
                        "<i class='fas fa-times tag-icon'></i>" +
                        "</button>" +
                        "</div>");
            },
            showCancelButton: true,
            title: "Etiket Giriniz"
        });
    });
    $(".group").click(function () {
        $(this).parent().remove();
    });
    $(".save").click(function () {
        $(".error-message").remove();
        $(".text-field").css("border", "1px solid #aaaaaa");
        $(".address-field").css("border", "1px solid #aaaaaa");
        var nameSurnameInput = $("input[name='name-surname']");
        var eMailInput = $("input[name='e-mail']");
        var phoneInput = $("input[name='phone']");
        var birthdayInput = $("input[name='birthday']");
        var addressTextArea = $("textarea[name='address']");
        var isNotError = true;
        if (nameSurnameInput.val() === "")
            isNotError = showErrorMessage(nameSurnameInput);
        if (eMailInput.val() === "")
            isNotError = showErrorMessage(eMailInput);
        if (phoneInput.val() === "")
            isNotError = showErrorMessage(phoneInput);
        if (birthdayInput.val() === "")
            isNotError = showErrorMessage(birthdayInput);
        if (addressTextArea.val() === "")
            isNotError = showErrorMessage(addressTextArea);
        if (isNotError) {
            Swal.fire({
                animation: false,
                showCloseButton: true,
                showConfirmButton: false,
                title: "Bilgiler Kaydedildi",
                type: "success"
            });
            nameSurnameInput.val("");
            eMailInput.val("");
            phoneInput.val("");
            birthdayInput.val("");
            addressTextArea.val("");
        }
    });

    function showErrorMessage(input) {
        input.css("border", "1px solid #f33a3f");
        input.parent().append("<span class='error-message'>Boş Bırakmayınız!</span>");
        return false;
    }

    $(".back-button").click(function () {
        $(".section-1").removeClass("sm-hidden");
        $(".section-1-sixth-item-item-container").removeClass("section-1-sixth-item-item-container-active");
        $(".user-name-surname").removeClass("user-name-surname-active");
        $(".section-2").addClass("xl-hidden");
        $(".section-3").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        $(".section-3-second-item-container > .col").remove();
        //selecti sıfırla
        $(".message-field").text("");
    });
    $(".conversation-end-button").click(function () {
        $(".section-1").addClass("lg-hidden md-hidden xl-hidden");
        $(".section-3").addClass("sm-hidden");
        $(".section-4").removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
    });
    $(".cancel-button").click(function () {
        $(".section-1").removeClass("lg-hidden md-hidden xl-hidden");
        $(".section-3").removeClass("sm-hidden");
        $(".section-4").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        $(".termination-input").prop("checked", false);
        $(".reminders-input").prop("checked", false);
        $(".termination-title").text("Lütfen sonlandırma durumunu belirtiniz.");
    });
    $(".termination-button").click(function () {
        if ($(".termination-input:checked").val() === undefined)
            $(".section-4-last-item-item-container").css("border", "1px solid #f33a3f");
        else {
            $(".section-1").removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
            $(".conversation-first > .conversation-number").text(parseInt($(".conversation-first > .conversation-number").text()) - 1);
            $(".conversation-second > .conversation-number").text(parseInt($(".conversation-second > .conversation-number").text()) + 1);
            var id = parseInt($(".section-1-sixth-item-item-container-active").parent().attr("id"));
            customers[id - 1].conversationStatus = "passive";
            $("#" + id).addClass("lg-hidden md-hidden sm-hidden xl-hidden");
            $("#" + id + " > .section-1-sixth-item-item-container").removeClass("section-1-sixth-item-item-container-active");
            $("#" + id + " > .section-1-sixth-item-item-container > .section-1-sixth-item-item-second-item > .user-name-surname").removeClass("user-name-surname-active");
            $(".section-2").addClass("xl-hidden");
            $("input[name='name-surname']").val("");
            $("input[name='e-mail']").val("");
            $("input[name='phone']").val("");
            $("input[name='birthday']").val("");
            $("textarea[name='address']").val("");
            $(".text-field").val("").css("border", "1px solid #aaaaaa");
            $(".address-field").val("").css("border", "1px solid #aaaaaa");
            $(".error-message").remove();
            $(".section-3").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
            $(".section-3-second-item-container > .col").remove();
            //selecti sıfırla
            $(".message-field").text("");
            $(".section-4").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
            $(".termination-input").prop("checked", false);
            $(".reminders-input").prop("checked", false);
            $(".section-4-last-item-item-container").css("border", "1px solid #aaaaaa");
        }
    });
    var customers = [{
        "avatar": "./image/main-page/avatar-1.png",
        "cartAvarage": 150,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Seyrek",
        "from": 1,
        "id": 1,
        "lastCommunication": "15.09.2019",
        "nameSurname": "Elif Aslan",
        "newMessageCount": 5,
        "order": 15,
        "phone": "+90 546 125 78 11",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 8512.47
    }, {
        "avatar": "./image/main-page/avatar-2.png",
        "cartAvarage": 100,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Orta",
        "from": 0,
        "id": 2,
        "lastCommunication": "25.12.2019",
        "nameSurname": "Deniz Gidik",
        "newMessageCount": 25,
        "order": 9,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 10189.63
    }, {
        "avatar": "./image/main-page/avatar-3.png",
        "cartAvarage": 180,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Yüksek",
        "from": 1,
        "id": 3,
        "lastCommunication": "09.11.2019",
        "nameSurname": "Hülya Yıldız",
        "newMessageCount": 100,
        "order": 20,
        "phone": "+90 532 987 65 49",
        "priority": "#00baff",
        "status": "online",
        "totalExpenditure": 842.25
    }, {
        "avatar": "./image/main-page/avatar-4.png",
        "cartAvarage": 48,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Orta",
        "from": 0,
        "id": 4,
        "lastCommunication": "24.06.2019",
        "nameSurname": "Ercan Balcı",
        "newMessageCount": 19,
        "order": 32,
        "phone": "+90 532 987 65 49",
        "priority": "#f33a3f",
        "status": "online",
        "totalExpenditure": 465.47
    }, {
        "avatar": "./image/main-page/avatar-5.png",
        "cartAvarage": 75,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Seyrek",
        "from": 0,
        "id": 5,
        "lastCommunication": "11.05.2019",
        "nameSurname": "Fatih Çamak",
        "newMessageCount": 3,
        "order": 10,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 205.79
    }, {
        "avatar": "./image/main-page/avatar-6.png",
        "cartAvarage": 150,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Orta",
        "from": 0,
        "id": 6,
        "lastCommunication": "20.08.2019",
        "nameSurname": "Derya Haspa",
        "newMessageCount": 22,
        "order": 11,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 5200.38
    }, {
        "avatar": "./image/main-page/avatar-7.png",
        "cartAvarage": 390,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Yüksek",
        "from": 1,
        "id": 7,
        "lastCommunication": "30.04.2019",
        "nameSurname": "Deniz Gidik",
        "newMessageCount": 11,
        "order": 19,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 980.63
    }, {
        "avatar": "./image/main-page/avatar-1.png",
        "cartAvarage": 607,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Orta",
        "from": 0,
        "id": 8,
        "lastCommunication": "12.11.2019",
        "nameSurname": "Saliha Genc",
        "newMessageCount": 90,
        "order": 34,
        "phone": "+90 532 987 65 49",
        "priority": "#272421",
        "status": "online",
        "totalExpenditure": 3500.35
    }, {
        "avatar": "./image/main-page/avatar-2.png",
        "cartAvarage": 419,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Yüksek",
        "from": 0,
        "id": 9,
        "lastCommunication": "30.11.2019",
        "nameSurname": "Fadime Gelik",
        "newMessageCount": 1000,
        "order": 22,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 1997.84
    }, {
        "avatar": "./image/main-page/avatar-3.png",
        "cartAvarage": 782,
        "conversationStatus": "active",
        "frequencyOfCommunication": "Orta",
        "from": 0,
        "id": 10,
        "lastCommunication": "17.10.2019",
        "nameSurname": "Deniz Gidik",
        "newMessageCount": 7,
        "order": 43,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 4401
    }, {
        "avatar": "./image/main-page/avatar-4.png",
        "cartAvarage": 500,
        "conversationStatus": "passive",
        "frequencyOfCommunication": "Seyrek",
        "from": 2,
        "id": 11,
        "lastCommunication": "09.09.2019",
        "nameSurname": "Kemal Bilir",
        "newMessageCount": "",
        "order": 36,
        "phone": "+90 532 987 65 49",
        "priority": "#37b349",
        "status": "online",
        "totalExpenditure": 1020.59
    }];
    var messages = [{
        "date": "25.10.2019",
        "from": "customer",
        "customerID": 1,
        "text": "Merhaba bir ürün sipariş vermek istiyorum.",
        "time": "23:10"
    }, {
        "date": "25.10.2019",
        "from": "customer",
        "customerID": 1,
        "text": "Yardımcı olur musunuz?",
        "time": "23:10"
    }, {
        "date": "25.10.2019",
        "from": "agent",
        "customerID": 1,
        "text": "Merhabalar",
        "time": "23:11"
    }, {
        "date": "25.10.2019",
        "from": "agent",
        "customerID": 1,
        "text": "Nasıl bir elbise istersiniz?",
        "time": "23:11"
    }, {
        "date": "25.10.2019",
        "from": "customer",
        "customerID": 1,
        "text": "Kırmızı elbise istiyorum.",
        "time": "23:12"
    }, {
        "date": "25.10.2019",
        "from": "customer",
        "customerID": 1,
        "text": "32 beden",
        "time": "23:12"
    }];
    var from = ["whatsapp", "facebook-messenger", "instagram"];
    var conversation = $(".conversation");
    var conversationFirst = $(".conversation-first");
    var conversationSecond = $(".conversation-second");
    var conversationFirstNumber = $(".conversation-first > .conversation-number");
    var conversationSecondNumber = $(".conversation-second >.conversation-number");
    /*for (var i = 0; i <= customers.length - 1; i++) {
        $(".section-1-sixth-item-container").prepend("<div class='col section-1-sixth-item-item' id='" + customers[i].id + "'>" +
            "<div class='lg-middle lg-outside-16 lg-table md-middle md-outside-16 md-table section-1-sixth-item-item-container sm-middle sm-outside-16 sm-table wrap xl-middle xl-outside-16 xl-table'>" +
            "<div class='col section-1-sixth-item-item-first-item'>" +
            "<img alt='avatar' class='avatar' src='" + customers[i].avatar + "'>" +
            "</div>" +
            "<div class='col section-1-sixth-item-item-second-item'>" +
            "<span class='user-name-surname'>" + customers[i].nameSurname + "</span>" +
            "<span class='user-status'>" +
            "<i class='fas fa-circle user-status-icon'></i>" +
            " " + customers[i].status +
            "</span>" +
            "<span class='user-new-message-count'>" + customers[i].newMessageCount + "</span>" +
            "</div>" +
            "<div class='col section-1-sixth-item-item-last-item' style='border-right: 4px solid " + customers[i].priority + "'>" +
            "<i class='fab fa-" + from[customers[i].from] + " social-media-icon " + from[customers[i].from] + "-icon'></i>" +
            "</div>" +
            "</div>" +
            "</div>");
        var conversationNumber;
        if (customers[i].conversationStatus === "active") {
            conversationNumber = parseInt(conversationFirstNumber.text());
            conversationFirstNumber.text(conversationNumber + 1);
        } else {
            conversationNumber = parseInt(conversationSecondNumber.text());
            conversationSecondNumber.text(conversationNumber + 1);
            $(".section-1-sixth-item-container > #" + customers[i].id).addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        }
    }*/

    conversationFirst.click(function () {
        showCustomersByConversationStatus($(this));
    });
    conversationSecond.click(function () {
        showCustomersByConversationStatus($(this));
    });

    function showCustomersByConversationStatus(conversationStatus) {
        conversation.removeClass("conversation-active");
        conversationStatus.addClass("conversation-active");
        for (var i = 0; i <= customers.length - 1; i++) {
            var customer = $(".section-1-sixth-item-container > #" + customers[i].id);
            if (customer.hasClass("lg-hidden md-hidden sm-hidden xl-hidden"))
                customer.removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
            else
                customer.addClass("lg-hidden md-hidden sm-hidden xl-hidden");
        }
    }

    $(".operation-transfer").click(function () {
        Swal.fire({
            cancelButtonColor: "#d9d9d9",
            cancelButtonText: "İptal",
            confirmButtonColor: "#f33a3f",
            confirmButtonText: "Tamam",
            input: "select",
            inputOptions: {
                "0": "Yusuf Baş",
                "1": "Kerem Canlı"
            },
            inputPlaceholder: "Müşteri Temsilcisi Seçiniz",
            inputValidator: function (value) {
                if (!value)
                    return "Boş Bırakmayınız!";
                else {

                }
            },
            showCancelButton: true,
            showCloseButton: true,
            title: "Müşteri Temsilcisi Seçiniz"
        });
    });
    $(".conversation-ban-button").click(function () {
        Swal.fire({
            cancelButtonColor: "#d9d9d9",
            cancelButtonText: "Hayır",
            confirmButtonColor: "#f33a3f",
            confirmButtonText: "Evet",
            icon: "warning",
            showCancelButton: true,
            showCloseButton: true,
            text: "Müşteri engellendiğinde geri alınamayacaktır.",
            title: "Emin Misiniz?"
        }).then(function (result) {
            if (result.value)
                Swal.fire({
                    animation: false,
                    confirmButtonColor: "#f33a3f",
                    confirmButtonText: "Tamam",
                    showCloseButton: true,
                    text: "Müşteri Engellendi.",
                    type: "success"
                });
        });
    });
    var messageField = $(".message-field");
    var messageButton = $(".message-button");
    messageButton.click(function () {
        if ($(".message-field").text() !== "") {
            $(".emojis").scrollTop(0);
            $(".emoji-button-icon").removeClass("fas fa-times");
            $(".emoji-button-icon").addClass("far fa-smile");
            $(".section-3-sixth-item-last-item").addClass("lg-hidden md-hidden sm-hidden xl-hidden");
            var id = parseInt($(".section-1-sixth-item-item-container-active").parent().attr("id"));
            var date = new Date();
            var month = parseInt(date.getMonth()) + 1;
            var newAgentMessage = {
                "date": date.getDate() + month + date.getFullYear(),
                "from": "agent",
                "customerID": id,
                "text": $(".message-field").text(),
                "time": date.getHours() + ":" + date.getMinutes()
            };
            messages.push(newAgentMessage);
            $(".section-3-second-item-container").append("<div class='col'>" +
                "<div class='message-header-agent'>" +
                "<i class='fas fa-circle message-agent-status-icon'></i>" +
                "<span class='message-from'>Agent</span>" +
                "<span class='message-time'>" + newAgentMessage.time + ", " + newAgentMessage.date + "</span>" +
                "</div>" +
                "<div class='talking-balloon talking-balloon-first-message-agent'>" + newAgentMessage.text + "</div>" +
                "</div>");
            messageField.text("");
            setHeightToMessagesPartInSection3();
        }
    });
    var windowWidth = $(window).width();
    messageField.on("input keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            messageButton.click();
        }
        setHeightToMessagesPartInSection3();
    }).on("keypress", function (event) {
        if (event.keyCode === 13)
            event.preventDefault();
    }).on("paste", function (event) {
        event.preventDefault();
        var text = "";
        if (event.clipboardData || event.originalEvent.clipboardData)
            text = (event.originalEvent || event).clipboardData.getData("text/plain");
        else if (window.clipboardData)
            text = window.clipboardData.getData("Text");
        if (document.queryCommandSupported("insertText"))
            document.execCommand("insertText", false, text);
        else
            document.execCommand("paste", false, text);
    });
    $(window).resize(function () {
        if (windowWidth !== $(window).width()) {
            setHeightToMessagesPartInSection3();
            windowWidth = $(window).width();
        }
    });
    $(".emoji-button").click(function () {
        var emojiButtonIcon = $(".emoji-button-icon");
        var section3SixthItemLastItem = $(".section-3-sixth-item-last-item");
        if (emojiButtonIcon.hasClass("fa-smile")) {
            emojiButtonIcon.removeClass("far fa-smile");
            emojiButtonIcon.addClass("fas fa-times");
            section3SixthItemLastItem.removeClass("lg-hidden md-hidden sm-hidden xl-hidden");
            setHeightToMessagesPartInSection3();
        } else {
            $(".emojis").scrollTop(0);
            emojiButtonIcon.removeClass("fas fa-times");
            emojiButtonIcon.addClass("far fa-smile");
            section3SixthItemLastItem.addClass("lg-hidden md-hidden sm-hidden xl-hidden");
            setHeightToMessagesPartInSection3();
        }
    });

    function setHeightToMessagesPartInSection3() {
        if ($(window).width() <= 667)
            $(".section-3-item:nth-child(2)").css("height", "calc(55% - " + messageField.parent().parent().parent().css("height") + ")");
        else
            $(".section-3-item:nth-child(2)").css("height", "calc(65% - " + messageField.parent().parent().parent().css("height") + ")");
    }

    $(".emoji-category-button").click(function () {
        $(".emoji-category").removeClass("emoji-category-active");
        $(this).parent().addClass("emoji-category-active");
        var groupID = $(this).parent().attr("data-group-id");
        $(".emoji").css("display", "none");
        $(".emoji[data-group-id=" + groupID + "]").removeAttr("style");
        $(".emojis").scrollTop(0);
    });
    $("body").on("click", ".emoji", function (e) {
        $(this).blur();
        messageField.focus();
        var caretPosition;
        var messageFieldText = messageField.text();
        if ($(window.getSelection().anchorNode).is(messageField))
            caretPosition = 0;
        else
            caretPosition = window.getSelection().anchorOffset;
        var beforeText = messageFieldText.substring(0, caretPosition);
        var afterText = messageFieldText.substring(caretPosition, messageFieldText.length);
        messageField.text(beforeText + $(this).text() + afterText);
    });
});