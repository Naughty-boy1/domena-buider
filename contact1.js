// message alert
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your information have been sucessfully submited and we'll get back to you shortly");
    this.reset();
});
// dropdown sign
document.getElementById('dropdownButton').addEventListener('click', function() {
    const sign = this.querySelector('.sign');
    sign.classList.toggle('rotated');
});
// dropdown
document.getElementById('dropdownButton').addEventListener('click', function() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

function selectOption(element, option) {
    document.getElementById('dropdownButton').innerText = option;
    document.getElementById('dropdownContent').style.display = 'none';

    // Remove 'selected' class from all options
    const options = document.querySelectorAll('.dropdown-content p');
    options.forEach(opt => opt.classList.remove('selected'));

    // Add 'selected' class to the clicked option
    element.classList.add('selected');
}

// form with error message
function validateField(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (!field.value) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
} 
document.getElementById('name').addEventListener('blur', function() {
    validateField('name', 'nameError');
});

document.getElementById('email').addEventListener('blur', function() {
    validateField('email', 'emailError');
});

document.getElementById('name2').addEventListener('blur', function() {
    validateField('name2', 'name2Error');
});

document.getElementById('project').addEventListener('blur', function() {
    validateField('name2', 'projectError');
});
document.getElementById('userForm').addEventListener('submit', function(event) {
    let valid = true;

    ['name', 'email', 'name2', 'project'].forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        const error = document.getElementById(fieldId + 'Error');
        if (!field.value) {
            error.style.display = 'none';
            valid = false;
        } else {
            error.style.display = 'none';
        }
    });

    if (!valid) {
        event.preventDefault();
    }
});