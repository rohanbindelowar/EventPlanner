document.getElementById('vendorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let vendorName = document.getElementById('vendorName').value;
    let category = document.getElementById('category').value;
    let location = document.getElementById('location').value;
    let contact = document.getElementById('contact').value;
    let phone = document.getElementById('phone').value;
    let image = document.getElementById('image').files[0];
    let imageURL = '';
    
    if (image) {
        imageURL = URL.createObjectURL(image);
    }

    let vendorDiv = document.createElement('div');
    vendorDiv.classList.add('vendor');
    vendorDiv.innerHTML = `
        <h2>${vendorName}</h2>
        <p class="category">Category: ${category}</p>
        <p class="location">Location: ${location}</p>
        <p class="contact">Contact: ${contact}</p>
        <p>Phone: ${phone}</p>
        ${imageURL ? `<img src="${imageURL}" alt="Vendor Image">` : ''}
        <button class="delete-btn" onclick="deleteVendor(this)">Delete</button>
    `;

    document.getElementById('vendorList').appendChild(vendorDiv);

    document.getElementById('vendorForm').reset();
});

function deleteVendor(button) {
    let vendorDiv = button.parentElement;
    vendorDiv.remove();
}
