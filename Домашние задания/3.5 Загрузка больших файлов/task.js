const form = document.getElementById('form');
const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');
const fileNameSpan = document.querySelector('.input__wrapper-desc');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameSpan.textContent = fileInput.files[0].name;
    } else {
        fileNameSpan.textContent = 'файл не выбран';
    }
    });

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const xhttp= new XMLHttpRequest();

    xhttp.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhttp.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total;
        }
    });

    xhttp.onload = () => {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            console.log('File has been uploaded');
        } else {
            console.error('Failed to upload:', xhttp.statusText);
        }
    };

    xhttp.onerror = () => {
        console.error('Issues with Network');
    };

    xhttp.send(formData);
})
