({
	// handles record updates such as initial load or record removal
	handleRecordUpdated : function(component, event, helper) {
		const eventParams = event.getParams();
		const changeType = eventParams.changeType;

		
		if (changeType === "ERROR") {
			// error on initial load / after update, handle error
		} else if (changeType === 'LOADED') {
			// initial load, hide spinner
			$A.util.addClass(component.find('spinner'), 'slds-hide');
		} else if (changeType === 'CHANGED') {
			// updated from other place, do stuff with new data
			$A.util.addClass(component, 'account-updated');
		} else if (changeType === 'REMOVED') {
			// record has been removed, do stuff
			component.destroy();
		}
	},

	// fires an event with the account id that needs to be edited
	editAccount: function(component, event, helper) {
		const evt = component.getEvent('EditAccountEvt');
		evt.setParams({accountId: component.get('v.account.id')}).fire();
	}
})