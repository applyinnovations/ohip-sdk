# GeneralInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateSVCheckIn** | Pointer to **bool** | Create stored value during checkin of a Hotel Interface | [optional] 
**EnableFailover** | Pointer to **bool** | Enable failover of a Hotel Interface | [optional] 
**CcVaultFunction** | Pointer to **bool** | CC vault of a Hotel Interface | [optional] 
**EnableResend** | Pointer to **bool** | Enable resend of a Hotel Interface | [optional] 
**SendARAuthType** | Pointer to **bool** | Send AR auth type of a Hotel Interface | [optional] 
**EnableDBVerification** | Pointer to **bool** | Enable DB verification of a Hotel Interface | [optional] 
**AllowCCCancelTransaction** | Pointer to **bool** | Allow CC cancel transactions of a Hotel Interface | [optional] 
**ShowStoredValuePin** | Pointer to **bool** | Show stored value pin of a Hotel Interface | [optional] 
**ShowSVTransaction** | Pointer to [**SVTransactionType**](SVTransactionType.md) |  | [optional] 
**StoredValueSystem** | Pointer to **bool** | Stored value system of a Hotel Interface | [optional] 
**SendEnhancedFields** | Pointer to **bool** | Send enhanced fields of a Hotel Interface | [optional] 
**CardPresentFlag** | Pointer to **bool** | Card present of a Hotel Interface | [optional] 
**HandleNightAudit** | Pointer to **bool** | Handle night audit command of a Hotel Interface | [optional] 
**RegularTransaction** | Pointer to **bool** | Regular transaction command of a Hotel Interface | [optional] 
**CourtesyCardHandling** | Pointer to **bool** | Courtesy card handling command of a Hotel Interface | [optional] 
**SendEndOfDay** | Pointer to **bool** | Send end of day of a Hotel Interface | [optional] 
**PortNumber1** | Pointer to **string** | Logical port number 1 of a the Hotel Interface | [optional] 
**PortNumber2** | Pointer to **string** | Logical port number 2 of a the Hotel Interface | [optional] 
**PortNumber3** | Pointer to **string** | Logical port number 3 of a the Hotel Interface | [optional] 
**PortNumber4** | Pointer to **string** | Logical port number 4 of a the Hotel Interface | [optional] 
**IPAddress** | Pointer to **string** | IP Address of a the Hotel Interface | [optional] 
**SVRedeemTrx** | Pointer to **string** | Stored value reedeem transaction of a the Hotel Interface | [optional] 
**Device** | Pointer to **string** | Device of a the Hotel Interface | [optional] 
**DepartmentCode1** | Pointer to **string** | Department code 1 of a the Hotel Interface | [optional] 
**DepartmentCode2** | Pointer to **string** | Department code 2 of a the Hotel Interface | [optional] 
**RollupTransactions** | Pointer to **bool** | Rollup transactions flag of the Hotel Interface | [optional] 
**AllowVideoCheckout** | Pointer to **bool** | Indicator if video checkout is allowed or not. | [optional] 
**CheckCreditLimit** | Pointer to **bool** | One of the video checkout options whether to check the credit limit. | [optional] 
**CheckBalance** | Pointer to **bool** | One of the video checkout options whether to check the balance. | [optional] 
**CheckRouting** | Pointer to **bool** | One of the video checkout options whether to check the routing. | [optional] 
**WakeupYn** | Pointer to **bool** | Indicator if the Hotel Interface handles wakeup calls. | [optional] 
**WakeupHandledBy** | Pointer to **string** | Determines who handles the wakeup calls, either by Opera (0) or a Vendor (1). | [optional] 
**WakeRetry** | Pointer to **int32** | Wakeup retry limit of the Hotel Interface. Value range is 0 to 999. | [optional] 
**WakeDelay** | Pointer to **int32** | Wakeup delay value of the Hotel Interface. | [optional] 
**PrevWake** | Pointer to **int32** | Used by the Interface module (IFC7.exe). | [optional] 
**FolioDisplayOption** | Pointer to **string** | Folio display option of the Hotel Interface applicable to VID and MSC. \&quot;0\&quot; means folio display option off. \&quot;A\&quot; means a guest folio display option. \&quot;U\&quot; means user defined folio display option. | [optional] 
**UserDefinedFolio1** | Pointer to **bool** | Indicator if the User defined folio 1 is utilized. | [optional] 
**UserDefinedFolio2** | Pointer to **bool** | Indicator if the User defined folio 2 is utilized. | [optional] 
**UserDefinedFolio3** | Pointer to **bool** | Indicator if the User defined folio 3 is utilized. | [optional] 
**UserDefinedFolio4** | Pointer to **bool** | Indicator if the User defined folio 4 is utilized. | [optional] 
**DisplayPhoneName** | Pointer to **bool** | Indicator if the phone name will be displayed. | [optional] 
**KeyPinActive** | Pointer to **bool** | Indicator if the Key Pin is active or not. It is supported only if OPERA Control Display Key Pin is active. | [optional] 
**AllPrintDetailOn** | Pointer to **bool** | Indicator for Default All Print Details On. | [optional] 

## Methods

### NewGeneralInfoType

`func NewGeneralInfoType() *GeneralInfoType`

NewGeneralInfoType instantiates a new GeneralInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneralInfoTypeWithDefaults

`func NewGeneralInfoTypeWithDefaults() *GeneralInfoType`

NewGeneralInfoTypeWithDefaults instantiates a new GeneralInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateSVCheckIn

`func (o *GeneralInfoType) GetCreateSVCheckIn() bool`

GetCreateSVCheckIn returns the CreateSVCheckIn field if non-nil, zero value otherwise.

### GetCreateSVCheckInOk

`func (o *GeneralInfoType) GetCreateSVCheckInOk() (*bool, bool)`

GetCreateSVCheckInOk returns a tuple with the CreateSVCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateSVCheckIn

`func (o *GeneralInfoType) SetCreateSVCheckIn(v bool)`

SetCreateSVCheckIn sets CreateSVCheckIn field to given value.

### HasCreateSVCheckIn

`func (o *GeneralInfoType) HasCreateSVCheckIn() bool`

HasCreateSVCheckIn returns a boolean if a field has been set.

### GetEnableFailover

`func (o *GeneralInfoType) GetEnableFailover() bool`

GetEnableFailover returns the EnableFailover field if non-nil, zero value otherwise.

### GetEnableFailoverOk

`func (o *GeneralInfoType) GetEnableFailoverOk() (*bool, bool)`

GetEnableFailoverOk returns a tuple with the EnableFailover field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableFailover

`func (o *GeneralInfoType) SetEnableFailover(v bool)`

SetEnableFailover sets EnableFailover field to given value.

### HasEnableFailover

`func (o *GeneralInfoType) HasEnableFailover() bool`

HasEnableFailover returns a boolean if a field has been set.

### GetCcVaultFunction

`func (o *GeneralInfoType) GetCcVaultFunction() bool`

GetCcVaultFunction returns the CcVaultFunction field if non-nil, zero value otherwise.

### GetCcVaultFunctionOk

`func (o *GeneralInfoType) GetCcVaultFunctionOk() (*bool, bool)`

GetCcVaultFunctionOk returns a tuple with the CcVaultFunction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcVaultFunction

`func (o *GeneralInfoType) SetCcVaultFunction(v bool)`

SetCcVaultFunction sets CcVaultFunction field to given value.

### HasCcVaultFunction

`func (o *GeneralInfoType) HasCcVaultFunction() bool`

HasCcVaultFunction returns a boolean if a field has been set.

### GetEnableResend

`func (o *GeneralInfoType) GetEnableResend() bool`

GetEnableResend returns the EnableResend field if non-nil, zero value otherwise.

### GetEnableResendOk

`func (o *GeneralInfoType) GetEnableResendOk() (*bool, bool)`

GetEnableResendOk returns a tuple with the EnableResend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableResend

`func (o *GeneralInfoType) SetEnableResend(v bool)`

SetEnableResend sets EnableResend field to given value.

### HasEnableResend

`func (o *GeneralInfoType) HasEnableResend() bool`

HasEnableResend returns a boolean if a field has been set.

### GetSendARAuthType

`func (o *GeneralInfoType) GetSendARAuthType() bool`

GetSendARAuthType returns the SendARAuthType field if non-nil, zero value otherwise.

### GetSendARAuthTypeOk

`func (o *GeneralInfoType) GetSendARAuthTypeOk() (*bool, bool)`

GetSendARAuthTypeOk returns a tuple with the SendARAuthType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendARAuthType

`func (o *GeneralInfoType) SetSendARAuthType(v bool)`

SetSendARAuthType sets SendARAuthType field to given value.

### HasSendARAuthType

`func (o *GeneralInfoType) HasSendARAuthType() bool`

HasSendARAuthType returns a boolean if a field has been set.

### GetEnableDBVerification

`func (o *GeneralInfoType) GetEnableDBVerification() bool`

GetEnableDBVerification returns the EnableDBVerification field if non-nil, zero value otherwise.

### GetEnableDBVerificationOk

`func (o *GeneralInfoType) GetEnableDBVerificationOk() (*bool, bool)`

GetEnableDBVerificationOk returns a tuple with the EnableDBVerification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableDBVerification

`func (o *GeneralInfoType) SetEnableDBVerification(v bool)`

SetEnableDBVerification sets EnableDBVerification field to given value.

### HasEnableDBVerification

`func (o *GeneralInfoType) HasEnableDBVerification() bool`

HasEnableDBVerification returns a boolean if a field has been set.

### GetAllowCCCancelTransaction

`func (o *GeneralInfoType) GetAllowCCCancelTransaction() bool`

GetAllowCCCancelTransaction returns the AllowCCCancelTransaction field if non-nil, zero value otherwise.

### GetAllowCCCancelTransactionOk

`func (o *GeneralInfoType) GetAllowCCCancelTransactionOk() (*bool, bool)`

GetAllowCCCancelTransactionOk returns a tuple with the AllowCCCancelTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCCCancelTransaction

`func (o *GeneralInfoType) SetAllowCCCancelTransaction(v bool)`

SetAllowCCCancelTransaction sets AllowCCCancelTransaction field to given value.

### HasAllowCCCancelTransaction

`func (o *GeneralInfoType) HasAllowCCCancelTransaction() bool`

HasAllowCCCancelTransaction returns a boolean if a field has been set.

### GetShowStoredValuePin

`func (o *GeneralInfoType) GetShowStoredValuePin() bool`

GetShowStoredValuePin returns the ShowStoredValuePin field if non-nil, zero value otherwise.

### GetShowStoredValuePinOk

`func (o *GeneralInfoType) GetShowStoredValuePinOk() (*bool, bool)`

GetShowStoredValuePinOk returns a tuple with the ShowStoredValuePin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowStoredValuePin

`func (o *GeneralInfoType) SetShowStoredValuePin(v bool)`

SetShowStoredValuePin sets ShowStoredValuePin field to given value.

### HasShowStoredValuePin

`func (o *GeneralInfoType) HasShowStoredValuePin() bool`

HasShowStoredValuePin returns a boolean if a field has been set.

### GetShowSVTransaction

`func (o *GeneralInfoType) GetShowSVTransaction() SVTransactionType`

GetShowSVTransaction returns the ShowSVTransaction field if non-nil, zero value otherwise.

### GetShowSVTransactionOk

`func (o *GeneralInfoType) GetShowSVTransactionOk() (*SVTransactionType, bool)`

GetShowSVTransactionOk returns a tuple with the ShowSVTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowSVTransaction

`func (o *GeneralInfoType) SetShowSVTransaction(v SVTransactionType)`

SetShowSVTransaction sets ShowSVTransaction field to given value.

### HasShowSVTransaction

`func (o *GeneralInfoType) HasShowSVTransaction() bool`

HasShowSVTransaction returns a boolean if a field has been set.

### GetStoredValueSystem

`func (o *GeneralInfoType) GetStoredValueSystem() bool`

GetStoredValueSystem returns the StoredValueSystem field if non-nil, zero value otherwise.

### GetStoredValueSystemOk

`func (o *GeneralInfoType) GetStoredValueSystemOk() (*bool, bool)`

GetStoredValueSystemOk returns a tuple with the StoredValueSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredValueSystem

`func (o *GeneralInfoType) SetStoredValueSystem(v bool)`

SetStoredValueSystem sets StoredValueSystem field to given value.

### HasStoredValueSystem

`func (o *GeneralInfoType) HasStoredValueSystem() bool`

HasStoredValueSystem returns a boolean if a field has been set.

### GetSendEnhancedFields

`func (o *GeneralInfoType) GetSendEnhancedFields() bool`

GetSendEnhancedFields returns the SendEnhancedFields field if non-nil, zero value otherwise.

### GetSendEnhancedFieldsOk

`func (o *GeneralInfoType) GetSendEnhancedFieldsOk() (*bool, bool)`

GetSendEnhancedFieldsOk returns a tuple with the SendEnhancedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendEnhancedFields

`func (o *GeneralInfoType) SetSendEnhancedFields(v bool)`

SetSendEnhancedFields sets SendEnhancedFields field to given value.

### HasSendEnhancedFields

`func (o *GeneralInfoType) HasSendEnhancedFields() bool`

HasSendEnhancedFields returns a boolean if a field has been set.

### GetCardPresentFlag

`func (o *GeneralInfoType) GetCardPresentFlag() bool`

GetCardPresentFlag returns the CardPresentFlag field if non-nil, zero value otherwise.

### GetCardPresentFlagOk

`func (o *GeneralInfoType) GetCardPresentFlagOk() (*bool, bool)`

GetCardPresentFlagOk returns a tuple with the CardPresentFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardPresentFlag

`func (o *GeneralInfoType) SetCardPresentFlag(v bool)`

SetCardPresentFlag sets CardPresentFlag field to given value.

### HasCardPresentFlag

`func (o *GeneralInfoType) HasCardPresentFlag() bool`

HasCardPresentFlag returns a boolean if a field has been set.

### GetHandleNightAudit

`func (o *GeneralInfoType) GetHandleNightAudit() bool`

GetHandleNightAudit returns the HandleNightAudit field if non-nil, zero value otherwise.

### GetHandleNightAuditOk

`func (o *GeneralInfoType) GetHandleNightAuditOk() (*bool, bool)`

GetHandleNightAuditOk returns a tuple with the HandleNightAudit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHandleNightAudit

`func (o *GeneralInfoType) SetHandleNightAudit(v bool)`

SetHandleNightAudit sets HandleNightAudit field to given value.

### HasHandleNightAudit

`func (o *GeneralInfoType) HasHandleNightAudit() bool`

HasHandleNightAudit returns a boolean if a field has been set.

### GetRegularTransaction

`func (o *GeneralInfoType) GetRegularTransaction() bool`

GetRegularTransaction returns the RegularTransaction field if non-nil, zero value otherwise.

### GetRegularTransactionOk

`func (o *GeneralInfoType) GetRegularTransactionOk() (*bool, bool)`

GetRegularTransactionOk returns a tuple with the RegularTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegularTransaction

`func (o *GeneralInfoType) SetRegularTransaction(v bool)`

SetRegularTransaction sets RegularTransaction field to given value.

### HasRegularTransaction

`func (o *GeneralInfoType) HasRegularTransaction() bool`

HasRegularTransaction returns a boolean if a field has been set.

### GetCourtesyCardHandling

`func (o *GeneralInfoType) GetCourtesyCardHandling() bool`

GetCourtesyCardHandling returns the CourtesyCardHandling field if non-nil, zero value otherwise.

### GetCourtesyCardHandlingOk

`func (o *GeneralInfoType) GetCourtesyCardHandlingOk() (*bool, bool)`

GetCourtesyCardHandlingOk returns a tuple with the CourtesyCardHandling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCourtesyCardHandling

`func (o *GeneralInfoType) SetCourtesyCardHandling(v bool)`

SetCourtesyCardHandling sets CourtesyCardHandling field to given value.

### HasCourtesyCardHandling

`func (o *GeneralInfoType) HasCourtesyCardHandling() bool`

HasCourtesyCardHandling returns a boolean if a field has been set.

### GetSendEndOfDay

`func (o *GeneralInfoType) GetSendEndOfDay() bool`

GetSendEndOfDay returns the SendEndOfDay field if non-nil, zero value otherwise.

### GetSendEndOfDayOk

`func (o *GeneralInfoType) GetSendEndOfDayOk() (*bool, bool)`

GetSendEndOfDayOk returns a tuple with the SendEndOfDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendEndOfDay

`func (o *GeneralInfoType) SetSendEndOfDay(v bool)`

SetSendEndOfDay sets SendEndOfDay field to given value.

### HasSendEndOfDay

`func (o *GeneralInfoType) HasSendEndOfDay() bool`

HasSendEndOfDay returns a boolean if a field has been set.

### GetPortNumber1

`func (o *GeneralInfoType) GetPortNumber1() string`

GetPortNumber1 returns the PortNumber1 field if non-nil, zero value otherwise.

### GetPortNumber1Ok

`func (o *GeneralInfoType) GetPortNumber1Ok() (*string, bool)`

GetPortNumber1Ok returns a tuple with the PortNumber1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortNumber1

`func (o *GeneralInfoType) SetPortNumber1(v string)`

SetPortNumber1 sets PortNumber1 field to given value.

### HasPortNumber1

`func (o *GeneralInfoType) HasPortNumber1() bool`

HasPortNumber1 returns a boolean if a field has been set.

### GetPortNumber2

`func (o *GeneralInfoType) GetPortNumber2() string`

GetPortNumber2 returns the PortNumber2 field if non-nil, zero value otherwise.

### GetPortNumber2Ok

`func (o *GeneralInfoType) GetPortNumber2Ok() (*string, bool)`

GetPortNumber2Ok returns a tuple with the PortNumber2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortNumber2

`func (o *GeneralInfoType) SetPortNumber2(v string)`

SetPortNumber2 sets PortNumber2 field to given value.

### HasPortNumber2

`func (o *GeneralInfoType) HasPortNumber2() bool`

HasPortNumber2 returns a boolean if a field has been set.

### GetPortNumber3

`func (o *GeneralInfoType) GetPortNumber3() string`

GetPortNumber3 returns the PortNumber3 field if non-nil, zero value otherwise.

### GetPortNumber3Ok

`func (o *GeneralInfoType) GetPortNumber3Ok() (*string, bool)`

GetPortNumber3Ok returns a tuple with the PortNumber3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortNumber3

`func (o *GeneralInfoType) SetPortNumber3(v string)`

SetPortNumber3 sets PortNumber3 field to given value.

### HasPortNumber3

`func (o *GeneralInfoType) HasPortNumber3() bool`

HasPortNumber3 returns a boolean if a field has been set.

### GetPortNumber4

`func (o *GeneralInfoType) GetPortNumber4() string`

GetPortNumber4 returns the PortNumber4 field if non-nil, zero value otherwise.

### GetPortNumber4Ok

`func (o *GeneralInfoType) GetPortNumber4Ok() (*string, bool)`

GetPortNumber4Ok returns a tuple with the PortNumber4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPortNumber4

`func (o *GeneralInfoType) SetPortNumber4(v string)`

SetPortNumber4 sets PortNumber4 field to given value.

### HasPortNumber4

`func (o *GeneralInfoType) HasPortNumber4() bool`

HasPortNumber4 returns a boolean if a field has been set.

### GetIPAddress

`func (o *GeneralInfoType) GetIPAddress() string`

GetIPAddress returns the IPAddress field if non-nil, zero value otherwise.

### GetIPAddressOk

`func (o *GeneralInfoType) GetIPAddressOk() (*string, bool)`

GetIPAddressOk returns a tuple with the IPAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIPAddress

`func (o *GeneralInfoType) SetIPAddress(v string)`

SetIPAddress sets IPAddress field to given value.

### HasIPAddress

`func (o *GeneralInfoType) HasIPAddress() bool`

HasIPAddress returns a boolean if a field has been set.

### GetSVRedeemTrx

`func (o *GeneralInfoType) GetSVRedeemTrx() string`

GetSVRedeemTrx returns the SVRedeemTrx field if non-nil, zero value otherwise.

### GetSVRedeemTrxOk

`func (o *GeneralInfoType) GetSVRedeemTrxOk() (*string, bool)`

GetSVRedeemTrxOk returns a tuple with the SVRedeemTrx field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSVRedeemTrx

`func (o *GeneralInfoType) SetSVRedeemTrx(v string)`

SetSVRedeemTrx sets SVRedeemTrx field to given value.

### HasSVRedeemTrx

`func (o *GeneralInfoType) HasSVRedeemTrx() bool`

HasSVRedeemTrx returns a boolean if a field has been set.

### GetDevice

`func (o *GeneralInfoType) GetDevice() string`

GetDevice returns the Device field if non-nil, zero value otherwise.

### GetDeviceOk

`func (o *GeneralInfoType) GetDeviceOk() (*string, bool)`

GetDeviceOk returns a tuple with the Device field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDevice

`func (o *GeneralInfoType) SetDevice(v string)`

SetDevice sets Device field to given value.

### HasDevice

`func (o *GeneralInfoType) HasDevice() bool`

HasDevice returns a boolean if a field has been set.

### GetDepartmentCode1

`func (o *GeneralInfoType) GetDepartmentCode1() string`

GetDepartmentCode1 returns the DepartmentCode1 field if non-nil, zero value otherwise.

### GetDepartmentCode1Ok

`func (o *GeneralInfoType) GetDepartmentCode1Ok() (*string, bool)`

GetDepartmentCode1Ok returns a tuple with the DepartmentCode1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentCode1

`func (o *GeneralInfoType) SetDepartmentCode1(v string)`

SetDepartmentCode1 sets DepartmentCode1 field to given value.

### HasDepartmentCode1

`func (o *GeneralInfoType) HasDepartmentCode1() bool`

HasDepartmentCode1 returns a boolean if a field has been set.

### GetDepartmentCode2

`func (o *GeneralInfoType) GetDepartmentCode2() string`

GetDepartmentCode2 returns the DepartmentCode2 field if non-nil, zero value otherwise.

### GetDepartmentCode2Ok

`func (o *GeneralInfoType) GetDepartmentCode2Ok() (*string, bool)`

GetDepartmentCode2Ok returns a tuple with the DepartmentCode2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentCode2

`func (o *GeneralInfoType) SetDepartmentCode2(v string)`

SetDepartmentCode2 sets DepartmentCode2 field to given value.

### HasDepartmentCode2

`func (o *GeneralInfoType) HasDepartmentCode2() bool`

HasDepartmentCode2 returns a boolean if a field has been set.

### GetRollupTransactions

`func (o *GeneralInfoType) GetRollupTransactions() bool`

GetRollupTransactions returns the RollupTransactions field if non-nil, zero value otherwise.

### GetRollupTransactionsOk

`func (o *GeneralInfoType) GetRollupTransactionsOk() (*bool, bool)`

GetRollupTransactionsOk returns a tuple with the RollupTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRollupTransactions

`func (o *GeneralInfoType) SetRollupTransactions(v bool)`

SetRollupTransactions sets RollupTransactions field to given value.

### HasRollupTransactions

`func (o *GeneralInfoType) HasRollupTransactions() bool`

HasRollupTransactions returns a boolean if a field has been set.

### GetAllowVideoCheckout

`func (o *GeneralInfoType) GetAllowVideoCheckout() bool`

GetAllowVideoCheckout returns the AllowVideoCheckout field if non-nil, zero value otherwise.

### GetAllowVideoCheckoutOk

`func (o *GeneralInfoType) GetAllowVideoCheckoutOk() (*bool, bool)`

GetAllowVideoCheckoutOk returns a tuple with the AllowVideoCheckout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowVideoCheckout

`func (o *GeneralInfoType) SetAllowVideoCheckout(v bool)`

SetAllowVideoCheckout sets AllowVideoCheckout field to given value.

### HasAllowVideoCheckout

`func (o *GeneralInfoType) HasAllowVideoCheckout() bool`

HasAllowVideoCheckout returns a boolean if a field has been set.

### GetCheckCreditLimit

`func (o *GeneralInfoType) GetCheckCreditLimit() bool`

GetCheckCreditLimit returns the CheckCreditLimit field if non-nil, zero value otherwise.

### GetCheckCreditLimitOk

`func (o *GeneralInfoType) GetCheckCreditLimitOk() (*bool, bool)`

GetCheckCreditLimitOk returns a tuple with the CheckCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckCreditLimit

`func (o *GeneralInfoType) SetCheckCreditLimit(v bool)`

SetCheckCreditLimit sets CheckCreditLimit field to given value.

### HasCheckCreditLimit

`func (o *GeneralInfoType) HasCheckCreditLimit() bool`

HasCheckCreditLimit returns a boolean if a field has been set.

### GetCheckBalance

`func (o *GeneralInfoType) GetCheckBalance() bool`

GetCheckBalance returns the CheckBalance field if non-nil, zero value otherwise.

### GetCheckBalanceOk

`func (o *GeneralInfoType) GetCheckBalanceOk() (*bool, bool)`

GetCheckBalanceOk returns a tuple with the CheckBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckBalance

`func (o *GeneralInfoType) SetCheckBalance(v bool)`

SetCheckBalance sets CheckBalance field to given value.

### HasCheckBalance

`func (o *GeneralInfoType) HasCheckBalance() bool`

HasCheckBalance returns a boolean if a field has been set.

### GetCheckRouting

`func (o *GeneralInfoType) GetCheckRouting() bool`

GetCheckRouting returns the CheckRouting field if non-nil, zero value otherwise.

### GetCheckRoutingOk

`func (o *GeneralInfoType) GetCheckRoutingOk() (*bool, bool)`

GetCheckRoutingOk returns a tuple with the CheckRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckRouting

`func (o *GeneralInfoType) SetCheckRouting(v bool)`

SetCheckRouting sets CheckRouting field to given value.

### HasCheckRouting

`func (o *GeneralInfoType) HasCheckRouting() bool`

HasCheckRouting returns a boolean if a field has been set.

### GetWakeupYn

`func (o *GeneralInfoType) GetWakeupYn() bool`

GetWakeupYn returns the WakeupYn field if non-nil, zero value otherwise.

### GetWakeupYnOk

`func (o *GeneralInfoType) GetWakeupYnOk() (*bool, bool)`

GetWakeupYnOk returns a tuple with the WakeupYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeupYn

`func (o *GeneralInfoType) SetWakeupYn(v bool)`

SetWakeupYn sets WakeupYn field to given value.

### HasWakeupYn

`func (o *GeneralInfoType) HasWakeupYn() bool`

HasWakeupYn returns a boolean if a field has been set.

### GetWakeupHandledBy

`func (o *GeneralInfoType) GetWakeupHandledBy() string`

GetWakeupHandledBy returns the WakeupHandledBy field if non-nil, zero value otherwise.

### GetWakeupHandledByOk

`func (o *GeneralInfoType) GetWakeupHandledByOk() (*string, bool)`

GetWakeupHandledByOk returns a tuple with the WakeupHandledBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeupHandledBy

`func (o *GeneralInfoType) SetWakeupHandledBy(v string)`

SetWakeupHandledBy sets WakeupHandledBy field to given value.

### HasWakeupHandledBy

`func (o *GeneralInfoType) HasWakeupHandledBy() bool`

HasWakeupHandledBy returns a boolean if a field has been set.

### GetWakeRetry

`func (o *GeneralInfoType) GetWakeRetry() int32`

GetWakeRetry returns the WakeRetry field if non-nil, zero value otherwise.

### GetWakeRetryOk

`func (o *GeneralInfoType) GetWakeRetryOk() (*int32, bool)`

GetWakeRetryOk returns a tuple with the WakeRetry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeRetry

`func (o *GeneralInfoType) SetWakeRetry(v int32)`

SetWakeRetry sets WakeRetry field to given value.

### HasWakeRetry

`func (o *GeneralInfoType) HasWakeRetry() bool`

HasWakeRetry returns a boolean if a field has been set.

### GetWakeDelay

`func (o *GeneralInfoType) GetWakeDelay() int32`

GetWakeDelay returns the WakeDelay field if non-nil, zero value otherwise.

### GetWakeDelayOk

`func (o *GeneralInfoType) GetWakeDelayOk() (*int32, bool)`

GetWakeDelayOk returns a tuple with the WakeDelay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeDelay

`func (o *GeneralInfoType) SetWakeDelay(v int32)`

SetWakeDelay sets WakeDelay field to given value.

### HasWakeDelay

`func (o *GeneralInfoType) HasWakeDelay() bool`

HasWakeDelay returns a boolean if a field has been set.

### GetPrevWake

`func (o *GeneralInfoType) GetPrevWake() int32`

GetPrevWake returns the PrevWake field if non-nil, zero value otherwise.

### GetPrevWakeOk

`func (o *GeneralInfoType) GetPrevWakeOk() (*int32, bool)`

GetPrevWakeOk returns a tuple with the PrevWake field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevWake

`func (o *GeneralInfoType) SetPrevWake(v int32)`

SetPrevWake sets PrevWake field to given value.

### HasPrevWake

`func (o *GeneralInfoType) HasPrevWake() bool`

HasPrevWake returns a boolean if a field has been set.

### GetFolioDisplayOption

`func (o *GeneralInfoType) GetFolioDisplayOption() string`

GetFolioDisplayOption returns the FolioDisplayOption field if non-nil, zero value otherwise.

### GetFolioDisplayOptionOk

`func (o *GeneralInfoType) GetFolioDisplayOptionOk() (*string, bool)`

GetFolioDisplayOptionOk returns a tuple with the FolioDisplayOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDisplayOption

`func (o *GeneralInfoType) SetFolioDisplayOption(v string)`

SetFolioDisplayOption sets FolioDisplayOption field to given value.

### HasFolioDisplayOption

`func (o *GeneralInfoType) HasFolioDisplayOption() bool`

HasFolioDisplayOption returns a boolean if a field has been set.

### GetUserDefinedFolio1

`func (o *GeneralInfoType) GetUserDefinedFolio1() bool`

GetUserDefinedFolio1 returns the UserDefinedFolio1 field if non-nil, zero value otherwise.

### GetUserDefinedFolio1Ok

`func (o *GeneralInfoType) GetUserDefinedFolio1Ok() (*bool, bool)`

GetUserDefinedFolio1Ok returns a tuple with the UserDefinedFolio1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFolio1

`func (o *GeneralInfoType) SetUserDefinedFolio1(v bool)`

SetUserDefinedFolio1 sets UserDefinedFolio1 field to given value.

### HasUserDefinedFolio1

`func (o *GeneralInfoType) HasUserDefinedFolio1() bool`

HasUserDefinedFolio1 returns a boolean if a field has been set.

### GetUserDefinedFolio2

`func (o *GeneralInfoType) GetUserDefinedFolio2() bool`

GetUserDefinedFolio2 returns the UserDefinedFolio2 field if non-nil, zero value otherwise.

### GetUserDefinedFolio2Ok

`func (o *GeneralInfoType) GetUserDefinedFolio2Ok() (*bool, bool)`

GetUserDefinedFolio2Ok returns a tuple with the UserDefinedFolio2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFolio2

`func (o *GeneralInfoType) SetUserDefinedFolio2(v bool)`

SetUserDefinedFolio2 sets UserDefinedFolio2 field to given value.

### HasUserDefinedFolio2

`func (o *GeneralInfoType) HasUserDefinedFolio2() bool`

HasUserDefinedFolio2 returns a boolean if a field has been set.

### GetUserDefinedFolio3

`func (o *GeneralInfoType) GetUserDefinedFolio3() bool`

GetUserDefinedFolio3 returns the UserDefinedFolio3 field if non-nil, zero value otherwise.

### GetUserDefinedFolio3Ok

`func (o *GeneralInfoType) GetUserDefinedFolio3Ok() (*bool, bool)`

GetUserDefinedFolio3Ok returns a tuple with the UserDefinedFolio3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFolio3

`func (o *GeneralInfoType) SetUserDefinedFolio3(v bool)`

SetUserDefinedFolio3 sets UserDefinedFolio3 field to given value.

### HasUserDefinedFolio3

`func (o *GeneralInfoType) HasUserDefinedFolio3() bool`

HasUserDefinedFolio3 returns a boolean if a field has been set.

### GetUserDefinedFolio4

`func (o *GeneralInfoType) GetUserDefinedFolio4() bool`

GetUserDefinedFolio4 returns the UserDefinedFolio4 field if non-nil, zero value otherwise.

### GetUserDefinedFolio4Ok

`func (o *GeneralInfoType) GetUserDefinedFolio4Ok() (*bool, bool)`

GetUserDefinedFolio4Ok returns a tuple with the UserDefinedFolio4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFolio4

`func (o *GeneralInfoType) SetUserDefinedFolio4(v bool)`

SetUserDefinedFolio4 sets UserDefinedFolio4 field to given value.

### HasUserDefinedFolio4

`func (o *GeneralInfoType) HasUserDefinedFolio4() bool`

HasUserDefinedFolio4 returns a boolean if a field has been set.

### GetDisplayPhoneName

`func (o *GeneralInfoType) GetDisplayPhoneName() bool`

GetDisplayPhoneName returns the DisplayPhoneName field if non-nil, zero value otherwise.

### GetDisplayPhoneNameOk

`func (o *GeneralInfoType) GetDisplayPhoneNameOk() (*bool, bool)`

GetDisplayPhoneNameOk returns a tuple with the DisplayPhoneName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayPhoneName

`func (o *GeneralInfoType) SetDisplayPhoneName(v bool)`

SetDisplayPhoneName sets DisplayPhoneName field to given value.

### HasDisplayPhoneName

`func (o *GeneralInfoType) HasDisplayPhoneName() bool`

HasDisplayPhoneName returns a boolean if a field has been set.

### GetKeyPinActive

`func (o *GeneralInfoType) GetKeyPinActive() bool`

GetKeyPinActive returns the KeyPinActive field if non-nil, zero value otherwise.

### GetKeyPinActiveOk

`func (o *GeneralInfoType) GetKeyPinActiveOk() (*bool, bool)`

GetKeyPinActiveOk returns a tuple with the KeyPinActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyPinActive

`func (o *GeneralInfoType) SetKeyPinActive(v bool)`

SetKeyPinActive sets KeyPinActive field to given value.

### HasKeyPinActive

`func (o *GeneralInfoType) HasKeyPinActive() bool`

HasKeyPinActive returns a boolean if a field has been set.

### GetAllPrintDetailOn

`func (o *GeneralInfoType) GetAllPrintDetailOn() bool`

GetAllPrintDetailOn returns the AllPrintDetailOn field if non-nil, zero value otherwise.

### GetAllPrintDetailOnOk

`func (o *GeneralInfoType) GetAllPrintDetailOnOk() (*bool, bool)`

GetAllPrintDetailOnOk returns a tuple with the AllPrintDetailOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllPrintDetailOn

`func (o *GeneralInfoType) SetAllPrintDetailOn(v bool)`

SetAllPrintDetailOn sets AllPrintDetailOn field to given value.

### HasAllPrintDetailOn

`func (o *GeneralInfoType) HasAllPrintDetailOn() bool`

HasAllPrintDetailOn returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


