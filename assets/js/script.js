// variable for fetch call element
var musicContainer = document.getElementById("insert-here");


//modal code
// adds an active class when the Submit button is clicked
$("#submitBtn").on("click", function() {
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
    .then(data => {
       
        console.log(data)      

        data.data.forEach(element => {
            var link = document.createElement("a");
            link.textContent = element.title;
            link.href = element.preview;
            console.log("link");
            musicContainer.appendChild(link);
        });
      
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
.then(data => {
var myList = document.getElementById('images');
for(d in data){
    let listItem = document.createElement('li');
    let image = document.createElement('img');
        image.src = data[d]['node']['thumbnail_src'];
        listItem.appendChild(image);
        myList.appendChild(listItem);
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


    var input = document.getElementById("comment");
    localStorage.setItem("comment", input.value);
    var storedData = localStorage.getItem("name");
   }