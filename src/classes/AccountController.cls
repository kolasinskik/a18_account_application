public with sharing class AccountController {
	
	// returns list of Account.Id
	@AuraEnabled
	public static List<String> getAccounts() {
		try {
			List<String> ids = new List<String>();
			for (Account a : [select Id from Account]) {
				ids.add(a.Id);
			}
			return ids;

		} catch (Exception e) {
			throw new AuraHandledException(e.getMessage());
		}
	}
}