// variable for fetch call element
var mainContainer = document.getElementById("deezer");
var musicContainer = document.getElementById("insert-here");


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
  
  
    // comment name section localStorage
    var submit_button = document.getElementById("submitBtn");
    submit_button.onclick = saveData;

    function saveData() {
        var input = document.getElementById("name");
        localStorage.setItem("name", input.value);
        var storedData = localStorage.getItem("server");
    }
    
// text area localStorage
var submitButton = document.getElementById("submitBtn");
submitButton.onclick = saveInput;

function saveInput() {
    var input = document.getElementById("input");
    localStorage.setItem("input", input.value);
    var storedData = localStorage.getItem("server");
}

