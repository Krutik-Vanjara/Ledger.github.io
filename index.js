document.addEventListener('DOMContentLoaded', () => {
    const uploadBtn = document.getElementById('upload-btn');
    const uploadPic = document.getElementById('upload-pic');
    const profilePic = document.getElementById('profile-pic');
    const editHandleBtn = document.getElementById('edit-handle-btn');
    const instagramHandle = document.getElementById('instagram-handle');

    // Handle profile picture upload
    uploadBtn.addEventListener('click', (event) => {
        event.preventDefault();
        uploadPic.click();
    });

    uploadPic.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });

    // Handle Instagram handle edit
    editHandleBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const newHandle = prompt('Enter your new Instagram handle:', instagramHandle.textContent);
        if (newHandle) {
            instagramHandle.textContent = newHandle;
        }
    });
});

