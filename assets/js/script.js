//modal code
// adds an active class when the Submit button is clicked
$(".submitBtn").on("click", function() {
    $(".modal, .modal-content").addClass("active");
});

// when close button is clicked the modal or "Active class" goes away
$(".close, .modal").on("click", function() {
    $(".modal, .modal-content").removeClass("active");
});

fetch("https://api.deezer.com/artist/486308/top?limit=50", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "d0f3f1eba7msh430ab68207dc835p1cacebjsnab2cb1117987",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        
    }
    
})
.then(response => {
    console.log(response);
    
    const li = document.createElement("li");
})

.catch(err => {
	console.error(err);
});