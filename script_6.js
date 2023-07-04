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