({
	getAccounts : function(component) {
		const action = component.get('c.getAccounts');

		// set params if needed
		// action.setParams({
		// 	param1: 'value for param 1 goes here',
		// 	param2: 'value for param 2 goes here',
		// });
		
		action.setCallback(this, function(response) {
			const state = response.getState();
			if (state === 'SUCCESS') {
				const accounts = response.getReturnValue();
				if (!$A.util.isEmpty(accounts)) {
					component.set('v.accounts', accounts);
				}
			} else if (state === 'ERROR') {
				// handle error
			}
		});
		$A.enqueueAction(action);
	}
})