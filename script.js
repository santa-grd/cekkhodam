function getRandomKhodam() {
    const randomIndex = Math.floor(Math.random() * khodamImages.length);
    return khodamImages[randomIndex];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addKhodam() {
    let nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== '') {
        nameInput = capitalizeFirstLetter(nameInput);  

        const tableBody = document.querySelector('#khodamTable tbody');
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = nameInput;

        const khodamCell = document.createElement('td');
        const khodamImg = document.createElement('img');
        khodamImg.src = getRandomKhodam();
        khodamImg.alt = "Gambar Khodam";
        khodamCell.appendChild(khodamImg);

        newRow.appendChild(nameCell);
        newRow.appendChild(khodamCell);

        if (tableBody.rows.length >= 5) {
            tableBody.deleteRow(0); 
        }

        tableBody.appendChild(newRow);
		newRow.scrollIntoView({ behavior: 'smooth' });

        document.getElementById('nameInput').value = ''; 
    }
}
document.getElementById('nameInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addKhodam();
    }
});
