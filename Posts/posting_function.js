

function post_popup() { 
    var post_window = document.getElementById("posting_background");
    post_window.style.display = "block";
}

var images = []

function hide_post_popup() {
    var post_window = document.getElementById("posting_background");
    var title = (document.getElementById("post_title_input"))
    var body = (document.getElementById("post_body_input"))

    post_window.style.display = "none";

    body.value=""
    title.value=""

    update_max_letter_counter('post_title_input', 'title_character_count')
    update_max_letter_counter('post_body_input', 'body_character_count')
    
    var mediaItems = document.getElementsByClassName("added_image");
  
    // Convert the HTMLCollection to an array for easier manipulation
    var mediaItemsArray = Array.from(mediaItems);
    
    // Remove each media item from the DOM
    mediaItemsArray.forEach(function(item) {
      item.remove();
    });

    images = []

    var images_box = document.getElementById("images_box");
    images_box.style.display = "none";
}



function output_post_package() {
    var title = (document.getElementById("post_title_input").value)
    var body = (document.getElementById("post_body_input").value)
    
    

    var author = "horsey"
    if (title.length > 0 && body.length > 0) {
        console.log([[title,body,author],images]);
        hide_post_popup();
    } else {
        alert("Empty title or body, those are required fields");
    }
    images = [];

    var mediaItems = document.getElementsByClassName("added_image");
  
    // Convert the HTMLCollection to an array for easier manipulation
    var mediaItemsArray = Array.from(mediaItems);
    
    // Remove each media item from the DOM
    mediaItemsArray.forEach(function(item) {
      item.remove();
    });
}

function update_max_letter_counter(place_to_take_input, place_to_update) {
    var letters = document.getElementById(place_to_take_input).value.length;
    var counter = document.getElementById(place_to_update);

    counter.innerHTML = letters;
}

function open_images_dropdown() {
    var buttons = document.getElementById("buttons");
    buttons.style.borderBottom = "#555 1px solid";

    var images_box = document.getElementById("images_box");
    images_box.style.display = "flex";
}

function highlight_add_box(highlight) {
    var add_box = document.getElementById("add_image")

    if (highlight) {
        add_box.style.backgroundColor = "rgb(50,50,50)";
    } else {
        add_box.style.backgroundColor = "rgb(20,20,20)";
    }
}

function openFileUpload() {
    var fileInput = document.getElementById("fileInput");
    fileInput.click();
  }
  
document.getElementById("fileInput").addEventListener("change", handleFileUpload);


function handleFileUpload(event) {
    var mediaContainer = document.getElementById("images_box");

    var files = event.target.files;
    images.push(file);

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var fileURL = URL.createObjectURL(file);
        
        if (file.type.startsWith("image/")) {
          // For image files, create an <img> element and add it to the media container
          var img = document.createElement("img");
          img.src = fileURL;
          img.classList.add("added_image");
          mediaContainer.appendChild(img);
        } else if (file.type.startsWith("video/")) {
          // For video files, create a <video> element and add it to the media container
          var video = document.createElement("video");
          video.src = fileURL;
          video.classList.add("added_image");
          mediaContainer.appendChild(video);
        }
    }
}
  