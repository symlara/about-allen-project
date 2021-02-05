// variable for fetch call element
var mainContainer = document.getElementById("deezer");


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
    .then(data => {
        console.log(data)      
        // for loop for objects in json object
        for (var i = 0; i < data.length; i++) {
            // append each object to page
            function appendData(data) {
            var div = document.createElement("div");
            div.innerHTML = 'Name: ' + data[i].preview + ' ' + data[i].link;
            mainContainer.appendChild(div);
        }
    }
    })
    .catch(err => {
        console.error(err);
    });
  
  






    



