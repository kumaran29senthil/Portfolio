const video1 = document.getElementById('pv1');
const video2 = document.getElementById('pv2');
const videoList = [video1,video2];
const hoverSign = document.getElementById(".hover-sign");
videoList.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
    })
    video.addEventListener('mouseout', function(){
        video.pause();
        hoverSign.classList.remove("active")
    })
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});


document.getElementById("contact-btn").addEventListener("click", function() {
    var contactInfo = document.getElementById("contact-info");
    contactInfo.classList.toggle("show");
});
