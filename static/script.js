const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const report = document.getElementById("report");
const button = document.getElementById("analyzeBtn");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if(file){

        preview.src = URL.createObjectURL(file);

        preview.style.display = "block";

    }

});

button.addEventListener("click", function(){

    if(imageInput.files.length===0){

        alert("Please upload a construction site image.");

        return;

    }

    report.innerHTML="Analyzing construction site...";

});
