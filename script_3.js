// Get sysprops
var howLongToClose = gs.getProperty('x_58872_needit.autoCloseOverdue');

// Get record
var overdueNITask = new GlideRecord('x_58872_needit_needit_task');
overdueNITask.addQuery('due_date', '<=', gs.daysAgo(howLongToClose));
overdueNITask.addQuery('state', '<', 3);
overdueNITask.query();
while (overdueNITask.next()) {
    // Log record
    gs.info('Auto close NeedIt Task record = ' + overdueNITask.number);

    // Update record
    overdueNITask.work_notes = "Record closed because it was too far past the Due date.";
    overdueNITask.state = 4;
    overdueNITask.update()
    
}