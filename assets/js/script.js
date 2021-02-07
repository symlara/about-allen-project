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

//  Deezer API
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
    
    // fetch api call for deezer api end

  
  
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
        console.log(response);
        var feed = response.data;
        for (var i = 0; i < feed.length; i++) {
            var link = document.createElement("a");
            link.textContent = feed[i].title;
            link.href = feed[i].preview;
            document.getElementById("feed-here");
            feedContainer.appendChild(link);
        }
    })

    .catch(err => {
        console.error(err);
});



    



  
   // localStorage call 
   var save_button = document.getElementById('submitBtn');
   save_button.onclick = saveData;
   
   function saveData() {
     var input = document.getElementById("name");
     localStorage.setItem("name", input.value);
   var storedValue = localStorage.getItem("name");


    var input = document.getElementById("input");
    localStorage.setItem("value", input.value);
    var storedData = localStorage.getItem("name");
   }
