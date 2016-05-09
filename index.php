<!DOCTYPE html>
<html>
	<head>
		<title>JavaScript</title>

		<link rel="stylesheet" type="text/css" href="css/template.css">
	</head>

	<body>
		<div class="wrapper">
			<header>

				<h1>JavaScript</h1>
				
				<nav class="nav-container">
					<p id="local-time"></p>
				</nav>

				

			</header>

			<div class="content-container">

				<h3>Calculate the area of a triangle</h3>

				<form name="calculate-area-form" class="form-container">

					<p>Height:<span id="height-error-message" class="error-message"></span></p>
					<input type="text" name="height" id="triangle-height">

					<p>Base:<span id="base-error-message" class="error-message"></span></p>
					<input type="text" name="base" id="triangle-base">

					<p>Area: <span id="triangle-area"></span></p>

					<input type="button" name="Submit" value="Calculate" id="submit-btn">
				</form>
				
				<form name="personal-info-form" method="post" class="personal-info-form-container">

					<p><span class="required"></span>First Name: </p>
					<input type="text" name="first-name">

					<p style="padding-left: 62px">Middle Names: </p>
					<input type="text" name="middle-name">

					<p><span class="required"></span>Last Name: </p>
					<input type="text" name="last-name">

					<p><span class="required"></span>Email: </p>
					<input type="email" name="email">

					<p><span class="required"></span>Gender:</p>
					<div class="radio">
						<input type="radio" name="gender" value="Male"><label>Male</label><br>
						<input type="radio" name="gender" value="Female"><label>Female</label><br>
						<input type="radio" name="gender" value="Other"><label>Other</label>
					</div>

					<input type="submit" value="Submit" id="personal-form-submit-btn">
					
				</form>
                
                <?php 
                    $first_name = $_POST['first-name'];
                    $visitor_email = $_POST['email'];
                    $gender = $_POST['gender'];

                    $to = "matt_palmer_20@hotmail.co.uk";
                
                    mail($to, 'Order Request', $gender, $visitor_email);

                    
                ?>
			</div>

			<footer>
				<p>&copy Copyright Matt Palmer<span id="copyright-year"></span></p>
			</footer>
		</div>

		<script type="text/javascript" src="js/javascript.js"></script>
	</body>
</html>