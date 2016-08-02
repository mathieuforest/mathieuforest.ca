<?php
if($_POST) {

	$errors = array();  // array to hold validation errors
	$data = array();        // array to pass back data

	// validate the variables ========
	if (empty($_POST['name'])) {
	  $errors['name'] = 'Name is required.';
	} else if (empty($_POST['email'])) {
	  $errors['email'] = 'Email is required.';
	} else if (empty($_POST['subject'])) {
	  $errors['subject'] = 'Subject is required.';
	} else if (empty($_POST['message'])) {
	  $errors['message'] = 'Message is required.';
	}

	echo "test";
	echo json_encode($errors);
	// response if there are errors
	if (!empty($errors)) {
		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
		echo json_encode($errors);
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
        $data['message'] = "Your mail has been sent succesfully!";
	}

	echo "test";
	echo json_encode($errors);

	// return all our data to an AJAX call
	echo json_encode($data);
}