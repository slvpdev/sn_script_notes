function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
    var options = {
     '0' : 'None',
     '1001' : 'Active',
     '1002' : 'Complete',
     '1003' : 'Pending',
    }
 
     var gprev = g_scratchpad.prevValue;
     var prevValue = g_scratchpad.prevValue ? gprev : '0';
         alert("User status changed from " + options[prevValue] + " to " + options[newValue]);
     
     g_scratchpad.prevValue = newValue;
 }