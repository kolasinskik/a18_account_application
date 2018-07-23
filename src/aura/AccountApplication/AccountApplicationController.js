({
	doInit : function(component, event, helper) {
		helper.getAccounts(component);
	},

	handleEditAccountEvent: function(component, event, helper) {
		component.set('v.editedAccountId', event.getParam('accountId'));
		component.set('v.createNewAccount', false);
	},

	toggleForm: function(component, event, helper) {
		component.set('v.createNewAccount', true);
	}
})