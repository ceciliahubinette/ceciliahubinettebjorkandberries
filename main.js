var angle = 0;
$('#plusImg').click(function() {
  angle += 180
  $(this).css('-webkit-transform','rotate('+angle+'deg)');
}); // help of https://stackoverflow.com/questions/40991445/how-to-rotate-an-image-on-click

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//https://www.w3schools.com/howto/howto_js_collapsible.asp used this as help then figured out how to use an imag as a button with this
