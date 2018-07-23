<aura:application extends="force:slds" controller="AccountController">
	
	<!-- list of all account ids that needs to be rendered -->
	<aura:attribute name="accounts" type="String[]"></aura:attribute>

	<!-- id of the account that is currently being edited -->
	<aura:attribute name="editedAccountId" type="String"></aura:attribute>

	<!-- flag that tell the form if it should load the skeleton of an account object -->
	<aura:attribute name="createNewAccount" type="Boolean" default="false"></aura:attribute>

	<!-- calls a method that gets the account ids from an apex method -->
	<aura:handler name="init" value="{!this}" action="{!c.doInit}"></aura:handler>

	<!-- handles an event fired from the account details component -->
	<aura:handler name="EditAccountEvt"  event="c:EditAccountEvent" action="{!c.handleEditAccountEvent}"></aura:handler>

	<div class="slds-card slds-p-around_large">
		<header class="slds-grid slds-grid_align-spread slds-border_bottom slds-m-bottom_large slds-p-vertical_small">
			<h1 class="slds-text-heading_large">Lightning Data Service Example</h1>

			<!-- displays the account form for creating a new record -->
			<lightning:button label="New Account" variant="brand" onclick="{!c.toggleForm}"></lightning:button>
		</header>
		
		<aura:if isTrue="{!not(empty(v.editedAccountId)) || v.createNewAccount}">
			<div class="form-wrapper slds-m-vertical_large">
				<!-- new account / edit account form -->
				<c:LDS_AccountForm recordId="{!v.editedAccountId}" isNewRecord="{!v.createNewAccount}"></c:LDS_AccountForm>
			</div>	
		</aura:if>
		
		
		<!-- list of accounts -->
		<aura:if isTrue="{!not(empty(v.accounts))}">
			<div class="slds-grid slds-wrap slds-grid_align_spread">
				<aura:iteration items="{!v.accounts}" var="accountId" indexVar="index">
					<c:LDS_AccountDetails recordId="{!accountId}"></c:LDS_AccountDetails>
				</aura:iteration>	
			</div>
		</aura:if>
		
	</div>

</aura:application>