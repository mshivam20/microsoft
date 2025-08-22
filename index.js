$(".hero").on("click",function(){
    window.open("https://www.microsoft.com/en-in/surface/devices/surface-laptop-7th-edition?icid=mscom_marcom_H1a_SurfaceLaptop7Edition_FY24SpringSurface");
});

$(".windows365").on("click",function(){
    window.open("https://www.microsoft.com/en-in/microsoft-365/buy/compare-all-microsoft-365-products?icid=MSCOM_QL_M365");
});

$(".shopbox").on("click",function(){
    window.open("https://www.xbox.com/en-in?icid=MSCOM_QL_Xbox");
});

$(".windows11").on("click",function(){
    window.open("https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows");
});

$(".surface_device").on("click",function(){
    window.open("https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface");
});

$(".b1").on("click",function(){
    window.open("https://www.microsoft.com/en-in/surface/devices/surface-pro-11th-edition?icid=mscom_marcom_CPH1a_SurfacePro11Edition_FY24SpringSurface");
});

$(".b2").on("click",function(){
    window.open("");
});

$(".b3").on("click",function(){
    window.open("https://www.xbox.com/en-in/consoles/xbox-series-s?icid=mscom_marcom_CPH3a_XboxSeriesS");
});

$(".b4").on("click",function(){
    window.open("https://www.xbox.com/en-in/consoles/xbox-series-x?icid=mscom_marcom_CPH4a_XboxSeriesX");
});

$(".b5").on("click",function(){
    window.open("https://www.xbox.com/en-in/games/store/xbox-game-pass-ultimate/cfq7ttc0khs0?icid=mscom_marcom_MPH1a_GamePass");
});


$(".b21").on("click",function(){
    window.open("https://www.microsoft.com/en-in/surface/business/surface-pro-intel-11th-edition?icid=mscom_marcom_CPW1a_SurfaceProForBusinessCopilotPCIntel");
});

$(".b22").on("click",function(){
    window.open("https://www.microsoft.com/en-in/microsoft-365/copilot/business?icid=mscom_marcom_CPW2a_M365forBusiness_Copilot?icid=mscom_marcom_CPW2a_M365forBusiness_Copilot");
});

$(".b23").on("click",function(){
    window.open("https://www.microsoft.com/en-in/windows-365/what-is-windows-365?icid=mscom_marcom_CPW3a_Windows365Offer");
});

$(".b24").on("click",function(){
    window.open("https://www.microsoft.com/en-in/ai?icid=mscom_marcom_CPW4a_AzureAI");
});

$(".facebook").on("click",function(){
    window.open("https://www.facebook.com/MicrosoftIndia");
});

$(".x").on("click",function(){
    window.open("https://twitter.com/microsoftindia");
});

$(".youtube").on("click",function(){
    window.open("https://www.youtube.com/user/IndiaMicrosoftVideos");
});

$(".top").on("click",function(){
    
});

$(".p1").on("click",function(){
    window.open("https://www.microsoft.com/en-in/locale");
});

$(".p2").on("click",function(){
    window.open("https://account.microsoft.com/privacy/third-party-ads?scrolltonewtoggle=true");
});

$(".p3").on("click",function(){
    window.open("https://www.microsoft.com/en-us/privacy/microsoft-consumer-health-data-privacy-policy");
});

$(".l1").on("click",function(){
    window.open("https://support.microsoft.com/contactus");
});

$(".l2").on("click",function(){
    window.open("https://www.microsoft.com/en-us/privacy/privacystatement");
});

$(".l3").on("click",function(){
    window.open("https://www.microsoft.com/en-us/legal/terms-of-use");
});

$(".l4").on("click",function(){
    window.open("https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks");
});

$(".l21").on("click",function(){
    window.open("https://account.microsoft.com/privacy/ad-settings/signedout?refd=www.microsoft.com&ru=https%3A%2F%2Faccount.microsoft.com%2Fprivacy%2Fad-settings%3Frefd%3Dwww.microsoft.com");
});

$(".cart").on("click",function(){
    window.open("https://www.microsoft.com/en-in/store/cart");
});

$(".a2").on("click",function(){
    $(".pc").html("Achive the Extraordinary");
    $(".para").html("Microsoft 365 delivers cloud storage, security and Microsoft Copilot in your favourite apps – all in one plan.");
    $(".img").attr("src","./img2.avif");
    $(".c1").css({"background-color":"white"});
    $(".c2").css({"background-color":"black"});

});

$(".a1").on("click",function(){
    $(".pc").html("Meet Surface Laptop");
    $(".para").html("Unlock AI features like Live Captiions and Cocreator with this exceptionally powerful laptop");
    $(".img").attr("src","./img1.avif");
    $(".c1").css({"background-color":"black"});
    $(".c2").css({"background-color":"white"});

});


$(".menu1").on("click",function(){
    $(".menu").removeClass("-translate-x-96");
    $(".menu1").addClass("hidden");
    $(".close").removeClass("hidden");
});

$(".close").on("click",function(){
    $(".menu").addClass("-translate-x-96");
    $(".menu1").removeClass("hidden");
    $(".close").addClass("hidden");
})
$(".dropdown").on("click",function(){
    $(".software").removeClass("hidden");
    $(".dropdown").addClass("hidden");
    $(".dropup").removeClass("hidden");

});
$(".dropup").on("click",function(){
    $(".software").addClass("hidden");
    $(".dropdown").removeClass("hidden");
    $(".dropup").addClass("hidden");

});

$(".dropdown2").on("click",function(){
    $(".devices").removeClass("hidden");
    $(".dropdown2").addClass("hidden");
    $(".dropup2").removeClass("hidden");

});
$(".dropup2").on("click",function(){
    $(".devices").addClass("hidden");
    $(".dropdown2").removeClass("hidden");
    $(".dropup2").addClass("hidden");

});


$(".dropdown3").on("click",function(){
    $(".entertainment").removeClass("hidden");
    $(".dropdown3").addClass("hidden");
    $(".dropup3").removeClass("hidden");

});
$(".dropup3").on("click",function(){
    $(".entertainment").addClass("hidden");
    $(".dropdown3").removeClass("hidden");
    $(".dropup3").addClass("hidden");

});

$(".dropdown4").on("click",function(){
    $(".business").removeClass("hidden");
    $(".dropdown4").addClass("hidden");
    $(".dropup4").removeClass("hidden");

});
$(".dropup4").on("click",function(){
    $(".business").addClass("hidden");
    $(".dropdown4").removeClass("hidden");
    $(".dropup4").addClass("hidden");

});


$(".search").on("click",function(){
    $(".search").addClass("border-2 border-blue-500 w-66 placeholder:Search ml-4");
    $(".logo").addClass("hidden");
    $(".third").addClass("hidden");
    $(".search_back").removeClass("hidden");
     $(".close").addClass("hidden");
     $(".menu1").addClass("hidden");
     $(".search_input").removeClass("hidden");


});

$(".search_back").on("click",function(){
    $(".search").removeClass("border-2 border-blue-500 w-66 ml-4");
    $(".logo").removeClass("hidden");
    $(".third").removeClass("hidden");
    $(".search_back").addClass("hidden");
     $(".search_input").addClass("hidden");
 
     $(".menu1").removeClass("hidden");
})












