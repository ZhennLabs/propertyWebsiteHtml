function saveFormData(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const notelp = document.getElementById('notelp').value;
    const alamat = document.getElementById('alamat').value;

    const property = { nama, email, notelp, alamat };
    let properties = JSON.parse(localStorage.getItem('properties')) || [];
    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));
    
    alert('Form data saved!');
    document.getElementById('myForm').reset();
}