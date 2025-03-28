var bars_connected_ul = document.getElementById("bars-connected-ul")
var status_of_div = "hide"
console.log("1");
function unhide_hide() {
    if (status_of_div ==  "hide") {
        bars_connected_ul.classList.add('bars-connected-ul-js')
        console.log("2");
        status_of_div = "unhide"
    }
    else{
        bars_connected_ul.classList.remove('bars-connected-ul-js')
        console.log("3");
        status_of_div = "hide"
    }
}
var extra_bars = document.getElementById('extra-bars')
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
  
    if (scrollPosition >= 100) {
      extra_bars.style.right = 0 + "px" // Change to the desired color
    } else {
        extra_bars.style.right = -50 + "px" // Change to the original color
    }
  });
  
document.getElementsByClassName('mail')[0].addEventListener('click',(e)=>{
    e.preventDefault()
    location.replace('https://gmail.com')
})