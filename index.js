const containerE1 = document.querySelector(".container");

window.addEventListener("mousemove",(event) => {
    containerE1.innerHTML = `
<div class="mouseevent">
    ${event.clientX}
    <h4>Mouse X Position(px)</h4>
</div>
<div class="mouseevent">
     ${event.clientY}
    <h4>Mouse Y Position(px)</h4>
</div>
     `
});