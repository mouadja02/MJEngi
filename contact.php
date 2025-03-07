<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mouad.jaouhari@enseirb-matmeca.fr";
    $subject = "New Contact Form Submission";
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers.
    $email_headers = "From: $name <$email>";

    // Send the email.
    if (mail($to, $subject, $email_content, $email_headers)) {
        echo "Merci! Votre message a été envoyé.";
    } else {
        echo "Oops! Une erreur est survenue lors de l'envoi du message.";
    }
}
?>
