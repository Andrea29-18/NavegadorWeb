const axios = require('axios');
const fs = require('fs');

document.getElementById('consultar').addEventListener('click', async () => {
    const url = document.getElementById('url').value;
    const method = document.getElementById('method').value;
    const responseType = document.querySelector('input[name="responseType"]:checked').value;

    try {
        const response = await axios({
            method,
            url,
        });

        document.getElementById('status').innerText = `Código de estado: ${response.status}`;
        document.getElementById('mimeType').innerText = `Tipo MIME: ${response.headers['content-type']}`;

        const responseBody = responseType === 'raw' ? response.data : new DOMParser().parseFromString(response.data, 'text/html');
        document.getElementById('body').innerText = responseType === 'raw' ? JSON.stringify(responseBody, null, 2) : responseBody.body.innerHTML;
    } catch (error) {
        console.error(error);
        alert('Error al realizar la petición');
    }
});

document.getElementById('guardar').addEventListener('click', () => {
    const mimeType = document.getElementById('mimeType').innerText.split(': ')[1];
    const extension = mimeType.split('/')[1];
    const content = document.getElementById('body').innerText;

    fs.writeFileSync(`respuesta.${extension}`, content);
    alert('Respuesta guardada');
});
