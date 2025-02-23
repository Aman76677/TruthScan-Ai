// Show Analyze button after video is uploaded
function displayFileName() {
    const fileInput = document.getElementById('videoUpload');
    const analyzeButton = document.getElementById('analyzeButton');
    const uploadResult = document.getElementById('uploadResult');
    const allowedFormats = ['video/mp4', 'video/webm', 'video/ogg'];

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileName = file.name;
        const fileType = file.type;

        if (allowedFormats.includes(fileType)) {
            document.getElementById('fileLabel').innerText = "File Selected: " + fileName;
            uploadResult.innerText = "Ready to upload: " + fileName;
            uploadResult.style.color = "green";
            // Show the analyze button after file selection
            analyzeButton.style.display = 'inline-block';
        } else {
            document.getElementById('fileLabel').innerText = "Invalid file type!";
            uploadResult.innerText = "Error: Please upload a video file in .mp4, .webm, or .ogg format.";
            uploadResult.style.color = "red";
            fileInput.value = ""; // Reset file input
            analyzeButton.style.display = 'none';
        }
    } else {
        document.getElementById('fileLabel').innerText = "Choose a video file";
        uploadResult.innerText = "";
        analyzeButton.style.display = 'none';
    }
}

// Placeholder function for actual upload functionality
function uploadVideo() {
    const fileInput = document.getElementById('videoUpload');
    const uploadResult = document.getElementById('uploadResult');

    if (fileInput.files.length > 0) {
        uploadResult.innerText = "Uploading...";
        setTimeout(() => {
            uploadResult.innerText = "Upload successful!";
            uploadResult.style.color = "green";
        }, 2000);
    } else {
        uploadResult.innerText = "No file selected to upload!";
        uploadResult.style.color = "red";
    }
}


function analyzeVideo() {
    document.getElementById('analyzing').style.display = 'block'; 


    setTimeout(() => {
        document.getElementById('analyzing').style.display = 'none'; 
        
        const isFake = Math.random() > 0.5;  
        const resultElement = document.getElementById('result');

        if (isFake) {
            resultElement.innerText = "The video is AI-generated (deepfake).";
            resultElement.style.color = 'red';
        } else {
            resultElement.innerText = "The video is authentic.";
            resultElement.style.color = 'green';
        }
    }, 3000); 
}
