(function(){
 /* code */ 
$(document).ready(function(){
 function credential(uid,pwd){
 	var self = this;
 	self.uid = uid;
 	self.pwd = pwd;
 }

 function viewModel(){
 	var self = this;
 	self.uid = ko.observable();
 	self.pwd = ko.observable();
 	self.errorMsg = ko.observable("");
	self.credentials = ko.observableArray(
		[new credential("Jon","123")
		,new credential("Toby","abc")
		,new credential("Sanjeev","password")]);
	
	self.validateInput = function(){
		self.errorMsg("");
		var retVal = false;
		ko.utils.arrayForEach(self.credentials(), function(item){	
			if (self.uid() == item.uid && self.pwd() == item.pwd){
				retVal = true;
			}
		});
		if(retVal == true)
		{
			console.log("Success")
			window.location = "sel.html"
		}
		else
		{
			console.log("Fail")
			self.errorMsg("Invalid credentials");
		}
	}
};

ko.applyBindings(new viewModel());
});
}())


