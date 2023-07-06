// Additional Condition && current.getRecordClassName() !='u_task_child' && current.getRecordClassName() !='u_task_grandchild'
var TaskChildCascadeDelete = Class.create();
// Extend the global.AbstractAjaxProcessor class
TaskChildCascadeDelete.prototype = Object.extendsObject(global.AbstractAjaxProcessor,{
  deleteGrandChild: function() {

    // delete grandchild records
    var gr = new GlideRecord('u_task_grandchild');
	var recordCount = 0;
    gr.addQuery('u_parent_task_child', this.getParameter('sysparm_childID'));
    gr.query();
    while (gr.next()) {
      gr.deleteRecord();
		recordCount++;
    }


    // delete child record
    var child = new GlideRecord('u_task_child');
    child.addQuery('sys_id', this.getParameter('sysparm_childID'));
    child.query();
    while (child.next()) {
      child.deleteRecord();
    }

	return recordCount;
  },
  type: 'TaskChildCascadeDelete'
});

// Client-side script Delete Child
function taskChildCascadeDelete(){
	var ga = new GlideAjax('global.TaskChildCascadeDelete');
	ga.addParam('sysparm_name', 'deleteGrandChild');
	ga.addParam('sysparm_childID', g_form.getUniqueValue());
	ga.getXMLAnswer(function(response){
		if(response > 0){
				
			alert("Deleted " + Math. trunc(response) + " Grandchildren. Record deleted.");
		}else{
			alert("Record deleted, no grandchild found.");
		}
		top.window.location = "https://dev176457.service-now.com/now/nav/ui/classic/params/target/u_task_child_list.do";
	});
}

// Client-side script Delete Grandchild
function taskChildCascadeDelete(){
	var ga = new GlideAjax('global.TaskChildCascadeDelete');
	ga.addParam('sysparm_name', 'deleteGrandChild');
	ga.addParam('sysparm_childID', g_form.getUniqueValue());
	ga.getXMLAnswer(function(response){
			alert("Grandchild deleted");
		top.window.location = "https://dev176457.service-now.com/now/nav/ui/classic/params/target/u_task_grandchild_list.do";
	});
}