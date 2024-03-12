<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Sliding Modal Box Style</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <!--Jquery CDN link -->
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <!-- CSS file -->
    <link rel="stylesheet" href="style.css">
    <!-- JavaScript file-->
    <script src="function.js"></script>
  </head>
  <body>
    <!--Home page popup button-->
    <div class="start-btn">
      <a href="#">Registration</a>
    </div>
    <!--popup box-->
    <div class="center modal-box">
      <!--cancle button-->
      <div class="fas fa-times"></div>
<!--Registration form-->
    <div class="form_container">
     <form name="form">
       <!-- name input box-->
       <div class="form_wrap form_grp">
          <div class="form_item">
              <label>First Name</label>
              <input type="text">
          </div>
          <div class="form_item">
              <label>Last Name</label>
              <input type="text">
          </div>
      </div>
      <!-- email input-->
      <div class="form_wrap">
          <div class="form_item">
              <label>Email Address</label>
              <input type="text">
          </div>
      </div>
      <!--password and confirm password-->
      <div class="form_wrap form_grp">
          <div class="form_item">
              <label>Password</label>
              <input type="password">
          </div>
          <div class="form_item">
              <label>Confirm Password</label>
              <input type="password">
          </div>
      </div>
      <!--city name input-->
      <div class="form_wrap">
          <div class="form_item">
              <label>City</label>
              <select name="country">
                  <option>Male</option>
                  <option>Famale</option>
                  <option>others</option>
              </select>
          </div>
      </div>
      <!--phone no input-->
      <div class="form_wrap">
          <div class="form_item">
              <label>Phone</label>
              <input type="text">
              <div class="error" id="phone"></div>
          </div>
      </div>
      <!--submit button-->
      <div class="btn">
        <input type="submit" value="Get Started">
      </div>
     </form>
   </div>
  </div>
 
  </body>
</html>