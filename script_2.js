function onLoad() {
    //Check to see if the form is for a new record.  If it is a new record,
    //set the Requested for value to the currently logged in user.
  
    if (g_form.isNewRecord()) {
      g_form.setValue("u_requested_for", g_user.userID);
  
      // Instantiate the GetEmailAddress Script Include
      var getEmailAddr = new GlideAjax("GetEmailAddress");
      // Specify the getEmail method
      getEmailAddr.addParam("sysparm_name", "getEmail");
      // Pass the Requested for sys_id
      getEmailAddr.addParam("sysparm_userID", g_user.userID);
      // Send the request to the server
      getEmailAddr.getXML(populateEmailField);
  
      // When the response is back from the server
      function populateEmailField(response) {
        // Extract the email address from the response, clear any value from the email field,
        // set new value in the email field
        var emailFromScriptInclude =
          response.responseXML.documentElement.getAttribute("answer");
        g_form.clearValue("u_requested_for_email");
        g_form.setValue("u_requested_for_email", emailFromScriptInclude);
      }
    }
  }
  