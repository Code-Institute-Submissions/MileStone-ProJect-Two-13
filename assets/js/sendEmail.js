function sendMail(contactForm) {
    emailjs.send("gmail", "template_s3om2o4", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        // Message for user 
        function(response) {
            //User alert if message went through
           alert("Thank You ! We'll be in touch");
            //Send user to Home page
           window.location.replace("/");
        },
        function(error) {
            //In case of error to print message
            alert("Oops! Something went wrong");
        }
    );
    return false;
}
