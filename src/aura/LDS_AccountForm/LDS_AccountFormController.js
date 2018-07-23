({
	doInit: function(component, event, helper) {
		if(component.get('v.isNewRecord')) {
			const recordData = component.find('recordData');
			recordData.getNewRecord(
				"Account", // API name of the object,
				null, // record type of the object,
				false, // skip cache?
				$A.getCallback(function() {
					// new record is accessible through component attributes
					console.log('new account wrapper', JSON.parse(JSON.stringify(component.get('v.account'))));
					console.log('simple new account wrapper', JSON.parse(JSON.stringify(component.get('v.accountSimple'))));
					console.log('new account error', component.get('v.accountError'));
				})
				);
		}
	},

	handleRecordUpdated : function(component, event, helper) {
		const eventParams = event.getParams();
		const changeType = eventParams.changeType;

		if (changeType === 'LOADED') {
			// hide spinner
			$A.util.addClass(component.find('spinner'), 'slds-hide');
		}
	},

	handleSubmit: function(component, event, helper) {
		event.preventDefault();
		const recordData = component.find('recordData');
		/*
			validation
		*/
		recordData.saveRecord($A.getCallback(function(result) {
			const state = result.state;
			if (state === 'SUCCESS' ||  'DRAFT') {
				component.set('v.recordId', null);
				component.destroy();
			} else if (state === 'INCOMPLETE') {
				// do stuff
			} else if (state === 'ERROR') {
				// handle error
			}
		}));

	},

	handleDelete: function(component, event, helper) {
		const recordData = component.find('recordData');
		recordData.deleteRecord($A.getCallback(function(result) {
			const state = result.state;
			if (state === 'SUCCESS' ||  'DRAFT') {
				component.set('v.recordId', null);
				component.destroy();
			} else if (state === 'INCOMPLETE') {
				// do stuff
			} else if (state === 'ERROR') {
				// handle error
			}
		}));
	},

	handleCancel: function(component, event, helper) {
		const recordData = component.find('recordData');
		recordData.reloadRecord();
	},

	closeForm: function(component, event, helper) {
		component.set('v.recordId', null);
		component.destroy();
	}
})