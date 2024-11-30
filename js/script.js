$(document).ready(function(){
    $(".envoyer").on("click", function(){
        let message = $(".whrite").html();
        $(".date").after("<div class='contain_message'><div class='message_ecrit'>"+message+"</div></div>")
        $(".whrite").text("");
        $(".emoji_content").addClass("hide");
    })
    $(".emoji i").on("click", function(){
        // $(".emoji_content").toggleClass("hide");
        if ($(".emoji_content").attr("class")=="emoji_content hide"){
            $(".emoji_content").removeClass("hide");
        }
        else{
            $(".emoji_content").addClass("hide");
        }
    })
    $(".emoji_content img").on("click",function(){
        let emoj = $(this).attr("src")
        $(".whrite").append("<img class='emoji_picture' src='"+emoj+"' alt=''>")
    })
})