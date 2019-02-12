<?php
if($_POST) {

	$errors = array();  // array to hold validation errors
	$data = array();        // array to pass back data

	// validate the variables ========
	if (empty($_POST['name'])) {
	  $errors['name'] = 'Le nom est requis.';
	} else if (empty($_POST['email'])) {
	  $errors['email'] = 'Le courriel est requis.';
	} else if (empty($_POST['subject'])) {
	  $errors['subject'] = 'Le sujet est requis.';
	} else if (empty($_POST['message'])) {
	  $errors['message'] = 'Le message est requis.';
	}

	// response if there are errors
	if ( !empty($errors) ) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {
		// if there are no errors, return a message
	    $name = trim($_POST['name']);
	    $email = trim($_POST['email']);
	    $message = trim($_POST['message']);
	    $subject = trim($_POST['subject']);
	    $my_address = "mathew126@gmail.com";
	    $headers = "From: ".$email;
	    $message = "Contact name: $name\nContact Email: $email\nContact Message: $message";
	    $to = $my_address;

	    mail($to, $subject, $message, $headers);
		$data['success'] = true;
        $data['message'] = "Votre message a été envoyé.";
	}

	// return all our data to an AJAX call
	echo json_encode($data);
}