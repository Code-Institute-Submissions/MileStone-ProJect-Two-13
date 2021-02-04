function sendMail(contactForm) {
    emailjs.send("gmail", "template_s3om2o4", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
           alert("Thank You ! We'll be in touch");
           window.location.replace("/");
        },
        function(error) {
            alert("Oops! Something went wrong");
        }
    );
    return false;
}