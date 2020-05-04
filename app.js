var tl = gsap.timeline({
    repeat: 2384
});
tl.to(".spinner", {
    duration: 2,
    rotation: 540,
    ease: "power4"
});
tl.to(".box", {
    duration: 0.5,
    width: "100%"
}, ">-.8");
tl.to(".spinner", {
    duration: 2,
    rotation: -90,
    ease: "power4"
});
tl.to(".box", {
    duration: 0.5,
    width: 0
}, ">-.8");

function modal(id) {
    var modal = document.querySelector("#" + id);
    modal.style.display = "flex"
    modal.addEventListener("click", () => {
        modal.style.display = "none"
    })
    modal.childNodes[1].addEventListener("click", () => {
        modal.style.display = "none"
    });
}
var rows = document.querySelectorAll(".row");
rows.forEach((e, i) => {
    if (e.childElementCount < 3) {
        e.style.justifyContent = "space-evenly";
    }
});
$(window).on("load", function() {
    $(".load-page").fadeOut("slow")
})
var iframeElement = document.querySelector('iframe');
var iframeElementID = iframeElement.id;
var widget1 = SC.Widget(iframeElement);
var widget2 = SC.Widget(iframeElementID);
console.log(widget1 + ' widget 1 is to the left... and widget two is to the right ');
// widget1 === widget2
console.log(widget2);