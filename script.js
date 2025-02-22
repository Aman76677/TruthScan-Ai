// Function to display the selected file name
function displayFileName() {
    const fileInput = document.getElementById('videoUpload');
    const fileLabel = document.getElementById('fileLabel');
    const uploadResult = document.getElementById('uploadResult');
    const allowedFormats = ['video/mp4', 'video/webm', 'video/ogg'];
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileName = file.name;
        const fileType = file.type;

        if (allowedFormats.includes(fileType)) {
            fileLabel.innerText = "File Selected: " + fileName;
            uploadResult.innerText = "Ready to upload: " + fileName;
            uploadResult.style.color = "green";
        } else {
            fileLabel.innerText = "Invalid file type!";
            uploadResult.innerText = "Error: Please upload a video file in .mp4, .webm, or .ogg format.";
            uploadResult.style.color = "red";
            fileInput.value = ""; // Reset file input
        }
    } else {
        fileLabel.innerText = "Choose a video file";
        uploadResult.innerText = "";
    }
}

// Placeholder function for actual upload functionality
function uploadVideo() {
    const fileInput = document.getElementById('videoUpload');
    const uploadResult = document.getElementById('uploadResult');

    if (fileInput.files.length > 0) {
        uploadResult.innerText = "Uploading...";
        // Simulate an upload process
        setTimeout(() => {
            uploadResult.innerText = "Upload successful!";
            uploadResult.style.color = "green";
        }, 2000);
    } else {
        uploadResult.innerText = "No file selected to upload!";
        uploadResult.style.color = "red";
    }
}
