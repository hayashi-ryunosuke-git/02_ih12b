console.log("===jquery===");

// $("セレクタ").メソッド.パラメータ("引数")

// =====セレクタ演習
$("h1")
    .css({
        "backgroundcolor":"red",
        "color":"white"
    })
    .width("500px");
    // console.log($("h1") . css("color"));

    // ====CSS,Atributes
$("p").addClass("testP");
$(".testP").css("color","red");
$("img").attr({
    "src":"image/testimage.jpg",
    "class":"testimage"
});

// ====Effects
// $(".testimage")
//     .fadeout(1000)
//     .fadein(500)
//     .inimaite({"width":"800px"},1500,js22);



// ===manupilation・traversing
$(".testimage").Wrap("<p class='testimageP'></p>");

$(".testimageP")
    .after("<ul></ul>")
    .next()
    .append("<li></li>");
    attr("class","testlist");

$(".testlist li").text("テスト");


// ===Event
$("h1")
    .on("mouseover",function(){
    console.log("===click===")
    // ====Effects
    $(".testimage")
    .fadeout(1000)
    .fadein(500)
    .inimaite({"width":"800px"},1500,js22);
})
.on("mouseleave",function(){
    console.log("===leave===");
});
$("h1").on("click",{name: "春太郎"},testevent);

// ===callback(eventのコールバック)
function testevent(evevt){
    console.log(event.data.name);
    $("h1").text(event.data.name);
};


// ===callback(コールバック)
function js22(){
    $("h1").animate({"width":"800px"},800,"easeoutexpo",js23);
};

// ===callback(コールバック)
function js23(){
    console.log("===js23===");
    $(".testimage").animate({
        "margintop":"100px",
        "marginleft":"100px"
    });
};

