function loadProperties() {
    const properties = JSON.parse(localStorage.getItem('properties')) || [];
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    properties.forEach(property => {
        let row = tableBody.insertRow();
        let cellNama = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellNotelp = row.insertCell(2);
        let cellAlamat = row.insertCell(2);

        cellNama.innerHTML = property.nama;
        cellEmail.innerHTML = property.email;
        cellNotelp.innerHTML = property.notelp;
        cellAlamat.innerHTML = property.alamat;
    });
}

window.onload = loadProperties;