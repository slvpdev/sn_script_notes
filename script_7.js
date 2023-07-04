/**
 * CLIENT SCRIPT START
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === "") {
      return;
    }
  
    // get urgency list
    var urgency_list_string = g_scratchpad.urgencyList;
  
    if (urgency_list_string.length > 0 && !isLoading) {
      //remove all spaces between commas in front and back and split into array
      var urgency_list = urgency_list_string.replace(/, /g, ",").split(",");
      var short_description = g_form.getValue("short_description");
  
      //loop urgency list
      for (var i = 0; i < urgency_list.length; i++) {
        if (short_description.includes(urgency_list[i])) {
          g_form.setValue("priority", 2);
          break;
        }
      }
    }
  }
  /**
   * CLIENT SCRIPT END
   */
  
  /**
   * BUSINESS RULE START
   */
  // gs.info("Batch Script Start");
  var gr = new GlideRecord('incident');
  gr.addQuery('assignment_group.name', 'Software');
  gr.addQuery('assigned_to.name', 'Don Goodlife');
  gr.addQuery('state', '7');
  // gr.addEncodedQuery("assigned_to=9ee1b13dc6112271007f9d0efdb69cd0^assignment_group=8a4dde73c6112278017a6a4baf547aa7^state=7"); 
  gr.query(); 
  while (gr.next()) {
      gr.state = 2;
      gr.update();
  }
  // gs.info("Batch Script End");
  /**
   * BUSINESS RULE END
   */