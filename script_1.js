// ServiceNow Client Script

// option const
const wn_options = {
    'hr' : [
        ['hr1', 'Human Resources 1'],
        ['hr2', 'Human Resources 2'],
    ],
    'facilities' : [
        ['facilities1', 'Facilities 1'],
        ['facilities2', 'Facilities 2'],
    ],
    'legal' : [
        ['legal1', 'Legal 1'],
        ['legal2', 'Legal 2'],
    ]

}


// Limit What Needed field based on Request Type field
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
     //Get wn
     var whatneeded = g_form.getValue('u_what_needed');
     //Clear wn Options
     g_form.clearOptions('u_what_needed');

    var wn_new_options = wn_options[newValue]

    wn_new_options.forEach(function(option) {
        g_form.addOption('u_what_needed',option[0],option[1]);
    });
    g_form.addOption('u_what_needed','other','Other');
    
    // Set new value when changed
    if(isLoading && !g_form.isNewRecord()){
        g_form.setValue('u_what_needed', whatneeded);
    }
 }