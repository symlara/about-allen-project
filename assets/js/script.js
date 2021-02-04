// variable for fetch call element
var track = document.querySelector(".container");


//modal code
// adds an active class when the Submit button is clicked
$(".submitBtn").on("click", function() {
    $(".modal, .modal-content").addClass("active");
});

// when close button is clicked the modal or "Active class" goes away
$(".close, .modal").on("click", function() {
    $(".modal, .modal-content").removeClass("active");
});

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		
	}
});

xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=allen%20stone");
xhr.setRequestHeader("x-rapidapi-key", "d0f3f1eba7msh430ab68207dc835p1cacebjsnab2cb1117987");
xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");

xhr.send(data);

const div = document.createElement("div");

div.classList.add("link");
const markup = `<h2 class="track_short"`;

div.innerHTML = markup;
track.appendChild(div);