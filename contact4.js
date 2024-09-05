// alert
document.getElementById('userContract').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your information have been sucessfully submited and we'll get back to you shortly");
    this.reset();
});
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
document.getElementById('nameContract').addEventListener('blur', function() {
    validateField('nameContract', 'errorContract');
});

document.getElementById('emailContract').addEventListener('blur', function() {
    validateField('emailContract', 'Contractemail');
});

document.getElementById('name2Contract').addEventListener('blur', function() {
    validateField('name2Contract', 'error2Contract');
});

// document.getElementById('project').addEventListener('blur', function() {
//     validateField('name2', 'projectError');
// });
document.getElementById('userContract').addEventListener('submit', function(event) {
    let valid = true;

    ['nameContract', 'emailContract', 'name2Contract'].forEach(function(fieldId) {
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