// variable for fetch call element
var mainContainer = document.getElementById("deezer");
var musicContainer = document.getElementById("insert-here");
var instaContainer = document.getElementById("insta");
var feedContainer = document.getElementById("feed-here")


//modal code
// adds an active class when the Submit button is clicked
$(".submitBtn").on("click", function() {
    $(".modal, .modal-content").addClass("active");
});

// when close button is clicked the modal or "Active class" goes away
$(".close, .modal").on("click", function() {
    $(".modal, .modal-content").removeClass("active");
});

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=allen%20stone", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "d0f3f1eba7msh430ab68207dc835p1cacebjsnab2cb1117987",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(response => {
        var data = response.data;
        console.log(data)      
        // for loop for objects in json object
        for (var i = 0; i < data.length; i++) {
            // append each object to page

            var link = document.createElement("a");
            link.textContent = data[i].title;
            link.href = data[i].preview;
            document.getElementById("insert-here");
            musicContainer.appendChild(link);
            
          
    }
    })

    .catch(err => {
        console.error(err);
});
  
  
//Instagram API
fetch("https://instagram40.p.rapidapi.com/account-feed?username=allenstone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2cea0e1111msh0740a4417e802b2p119ddfjsn058400fb53b2",
		"x-rapidapi-host": "instagram40.p.rapidapi.com"
	}
})
    .then(response => response.json())
    .then(response => {
        var instaData = response.data;
        console.log(instaData);

        for (var i = 0; i < instaData.length; i++) {
            var instaLink = document.createElement("b")
            instaLink.textContent = instaData[i].title;
            instaLink.href = instaData[i].preview;
            document.getElementById("feed-here")
            feedContainer.appendChild(instaLink)
        }
    })
    .catch(err => {
        console.error(err);
    });



    



