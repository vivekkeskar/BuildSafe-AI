const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const report = document.getElementById("report");
const button = document.getElementById("analyzeBtn");

imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if(file){

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";

    }

});

button.addEventListener("click", function(){

    const file = imageInput.files[0];

    if(!file){
        alert("Please select an image.");
        return;
    }

    const formData = new FormData();

    formData.append("image", file);

    report.innerHTML = "Analyzing...";

    fetch("/analyze",{

        method:"POST",

        body:formData

    })

    .then(response => response.text())

    .then(data =>{

        report.innerHTML = data;

    })

    .catch(error=>{

        report.innerHTML="Something went wrong.";

    });

});
