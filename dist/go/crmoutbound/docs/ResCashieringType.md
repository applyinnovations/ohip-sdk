# ResCashieringType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenuesAndBalances** | Pointer to [**ResRevenueBalanceType**](ResRevenueBalanceType.md) |  | [optional] 
**BillingPrivileges** | Pointer to [**BillingPrivilegesType**](BillingPrivilegesType.md) |  | [optional] 
**TaxType** | Pointer to [**ReservationTaxTypeInfo**](ReservationTaxTypeInfo.md) |  | [optional] 
**BedTaxReporting** | Pointer to [**BedTaxReportingType**](BedTaxReportingType.md) |  | [optional] 
**FolioTexts** | Pointer to [**FolioTextsType**](FolioTextsType.md) |  | [optional] 
**PeriodicFolio** | Pointer to [**ResPeriodicFolioType**](ResPeriodicFolioType.md) |  | [optional] 
**CompAccounting** | Pointer to [**ResCompAccountingType**](ResCompAccountingType.md) |  | [optional] 
**ResPreConfiguredRoutingInstruction** | Pointer to [**ResPreConfiguredRoutingInstrType**](ResPreConfiguredRoutingInstrType.md) |  | [optional] 
**FinanciallyResponsible** | Pointer to **bool** | The guest from whom payment has to be recovered (direct guest). | [optional] 
**ProratedBilling** | Pointer to **bool** | In case of Appartment style billing indicates whether a prorated amount should be used for an Apartment Style Billing rate. | [optional] 
**LastRoomAndTaxPostedDate** | Pointer to **string** | Date of the last Room And Tax posting. Used primarily to know the date in case of Advance Billing. | [optional] 
**ReverseCheckInAllowed** | Pointer to **bool** | This attribute is to verify if reverse check-in is allowed for the reservation. | [optional] 
**ReverseAdvanceCheckInAllowed** | Pointer to **bool** | This attribute is to verify if reverse advance check-in is allowed for the reservation. | [optional] 
**TransactionsPosted** | Pointer to **bool** | Specifies whether reservation has a financial transaction associated with it. | [optional] 

## Methods

### NewResCashieringType

`func NewResCashieringType() *ResCashieringType`

NewResCashieringType instantiates a new ResCashieringType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCashieringTypeWithDefaults

`func NewResCashieringTypeWithDefaults() *ResCashieringType`

NewResCashieringTypeWithDefaults instantiates a new ResCashieringType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenuesAndBalances

`func (o *ResCashieringType) GetRevenuesAndBalances() ResRevenueBalanceType`

GetRevenuesAndBalances returns the RevenuesAndBalances field if non-nil, zero value otherwise.

### GetRevenuesAndBalancesOk

`func (o *ResCashieringType) GetRevenuesAndBalancesOk() (*ResRevenueBalanceType, bool)`

GetRevenuesAndBalancesOk returns a tuple with the RevenuesAndBalances field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenuesAndBalances

`func (o *ResCashieringType) SetRevenuesAndBalances(v ResRevenueBalanceType)`

SetRevenuesAndBalances sets RevenuesAndBalances field to given value.

### HasRevenuesAndBalances

`func (o *ResCashieringType) HasRevenuesAndBalances() bool`

HasRevenuesAndBalances returns a boolean if a field has been set.

### GetBillingPrivileges

`func (o *ResCashieringType) GetBillingPrivileges() BillingPrivilegesType`

GetBillingPrivileges returns the BillingPrivileges field if non-nil, zero value otherwise.

### GetBillingPrivilegesOk

`func (o *ResCashieringType) GetBillingPrivilegesOk() (*BillingPrivilegesType, bool)`

GetBillingPrivilegesOk returns a tuple with the BillingPrivileges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingPrivileges

`func (o *ResCashieringType) SetBillingPrivileges(v BillingPrivilegesType)`

SetBillingPrivileges sets BillingPrivileges field to given value.

### HasBillingPrivileges

`func (o *ResCashieringType) HasBillingPrivileges() bool`

HasBillingPrivileges returns a boolean if a field has been set.

### GetTaxType

`func (o *ResCashieringType) GetTaxType() ReservationTaxTypeInfo`

GetTaxType returns the TaxType field if non-nil, zero value otherwise.

### GetTaxTypeOk

`func (o *ResCashieringType) GetTaxTypeOk() (*ReservationTaxTypeInfo, bool)`

GetTaxTypeOk returns a tuple with the TaxType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxType

`func (o *ResCashieringType) SetTaxType(v ReservationTaxTypeInfo)`

SetTaxType sets TaxType field to given value.

### HasTaxType

`func (o *ResCashieringType) HasTaxType() bool`

HasTaxType returns a boolean if a field has been set.

### GetBedTaxReporting

`func (o *ResCashieringType) GetBedTaxReporting() BedTaxReportingType`

GetBedTaxReporting returns the BedTaxReporting field if non-nil, zero value otherwise.

### GetBedTaxReportingOk

`func (o *ResCashieringType) GetBedTaxReportingOk() (*BedTaxReportingType, bool)`

GetBedTaxReportingOk returns a tuple with the BedTaxReporting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTaxReporting

`func (o *ResCashieringType) SetBedTaxReporting(v BedTaxReportingType)`

SetBedTaxReporting sets BedTaxReporting field to given value.

### HasBedTaxReporting

`func (o *ResCashieringType) HasBedTaxReporting() bool`

HasBedTaxReporting returns a boolean if a field has been set.

### GetFolioTexts

`func (o *ResCashieringType) GetFolioTexts() FolioTextsType`

GetFolioTexts returns the FolioTexts field if non-nil, zero value otherwise.

### GetFolioTextsOk

`func (o *ResCashieringType) GetFolioTextsOk() (*FolioTextsType, bool)`

GetFolioTextsOk returns a tuple with the FolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTexts

`func (o *ResCashieringType) SetFolioTexts(v FolioTextsType)`

SetFolioTexts sets FolioTexts field to given value.

### HasFolioTexts

`func (o *ResCashieringType) HasFolioTexts() bool`

HasFolioTexts returns a boolean if a field has been set.

### GetPeriodicFolio

`func (o *ResCashieringType) GetPeriodicFolio() ResPeriodicFolioType`

GetPeriodicFolio returns the PeriodicFolio field if non-nil, zero value otherwise.

### GetPeriodicFolioOk

`func (o *ResCashieringType) GetPeriodicFolioOk() (*ResPeriodicFolioType, bool)`

GetPeriodicFolioOk returns a tuple with the PeriodicFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodicFolio

`func (o *ResCashieringType) SetPeriodicFolio(v ResPeriodicFolioType)`

SetPeriodicFolio sets PeriodicFolio field to given value.

### HasPeriodicFolio

`func (o *ResCashieringType) HasPeriodicFolio() bool`

HasPeriodicFolio returns a boolean if a field has been set.

### GetCompAccounting

`func (o *ResCashieringType) GetCompAccounting() ResCompAccountingType`

GetCompAccounting returns the CompAccounting field if non-nil, zero value otherwise.

### GetCompAccountingOk

`func (o *ResCashieringType) GetCompAccountingOk() (*ResCompAccountingType, bool)`

GetCompAccountingOk returns a tuple with the CompAccounting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAccounting

`func (o *ResCashieringType) SetCompAccounting(v ResCompAccountingType)`

SetCompAccounting sets CompAccounting field to given value.

### HasCompAccounting

`func (o *ResCashieringType) HasCompAccounting() bool`

HasCompAccounting returns a boolean if a field has been set.

### GetResPreConfiguredRoutingInstruction

`func (o *ResCashieringType) GetResPreConfiguredRoutingInstruction() ResPreConfiguredRoutingInstrType`

GetResPreConfiguredRoutingInstruction returns the ResPreConfiguredRoutingInstruction field if non-nil, zero value otherwise.

### GetResPreConfiguredRoutingInstructionOk

`func (o *ResCashieringType) GetResPreConfiguredRoutingInstructionOk() (*ResPreConfiguredRoutingInstrType, bool)`

GetResPreConfiguredRoutingInstructionOk returns a tuple with the ResPreConfiguredRoutingInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResPreConfiguredRoutingInstruction

`func (o *ResCashieringType) SetResPreConfiguredRoutingInstruction(v ResPreConfiguredRoutingInstrType)`

SetResPreConfiguredRoutingInstruction sets ResPreConfiguredRoutingInstruction field to given value.

### HasResPreConfiguredRoutingInstruction

`func (o *ResCashieringType) HasResPreConfiguredRoutingInstruction() bool`

HasResPreConfiguredRoutingInstruction returns a boolean if a field has been set.

### GetFinanciallyResponsible

`func (o *ResCashieringType) GetFinanciallyResponsible() bool`

GetFinanciallyResponsible returns the FinanciallyResponsible field if non-nil, zero value otherwise.

### GetFinanciallyResponsibleOk

`func (o *ResCashieringType) GetFinanciallyResponsibleOk() (*bool, bool)`

GetFinanciallyResponsibleOk returns a tuple with the FinanciallyResponsible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinanciallyResponsible

`func (o *ResCashieringType) SetFinanciallyResponsible(v bool)`

SetFinanciallyResponsible sets FinanciallyResponsible field to given value.

### HasFinanciallyResponsible

`func (o *ResCashieringType) HasFinanciallyResponsible() bool`

HasFinanciallyResponsible returns a boolean if a field has been set.

### GetProratedBilling

`func (o *ResCashieringType) GetProratedBilling() bool`

GetProratedBilling returns the ProratedBilling field if non-nil, zero value otherwise.

### GetProratedBillingOk

`func (o *ResCashieringType) GetProratedBillingOk() (*bool, bool)`

GetProratedBillingOk returns a tuple with the ProratedBilling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProratedBilling

`func (o *ResCashieringType) SetProratedBilling(v bool)`

SetProratedBilling sets ProratedBilling field to given value.

### HasProratedBilling

`func (o *ResCashieringType) HasProratedBilling() bool`

HasProratedBilling returns a boolean if a field has been set.

### GetLastRoomAndTaxPostedDate

`func (o *ResCashieringType) GetLastRoomAndTaxPostedDate() string`

GetLastRoomAndTaxPostedDate returns the LastRoomAndTaxPostedDate field if non-nil, zero value otherwise.

### GetLastRoomAndTaxPostedDateOk

`func (o *ResCashieringType) GetLastRoomAndTaxPostedDateOk() (*string, bool)`

GetLastRoomAndTaxPostedDateOk returns a tuple with the LastRoomAndTaxPostedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastRoomAndTaxPostedDate

`func (o *ResCashieringType) SetLastRoomAndTaxPostedDate(v string)`

SetLastRoomAndTaxPostedDate sets LastRoomAndTaxPostedDate field to given value.

### HasLastRoomAndTaxPostedDate

`func (o *ResCashieringType) HasLastRoomAndTaxPostedDate() bool`

HasLastRoomAndTaxPostedDate returns a boolean if a field has been set.

### GetReverseCheckInAllowed

`func (o *ResCashieringType) GetReverseCheckInAllowed() bool`

GetReverseCheckInAllowed returns the ReverseCheckInAllowed field if non-nil, zero value otherwise.

### GetReverseCheckInAllowedOk

`func (o *ResCashieringType) GetReverseCheckInAllowedOk() (*bool, bool)`

GetReverseCheckInAllowedOk returns a tuple with the ReverseCheckInAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseCheckInAllowed

`func (o *ResCashieringType) SetReverseCheckInAllowed(v bool)`

SetReverseCheckInAllowed sets ReverseCheckInAllowed field to given value.

### HasReverseCheckInAllowed

`func (o *ResCashieringType) HasReverseCheckInAllowed() bool`

HasReverseCheckInAllowed returns a boolean if a field has been set.

### GetReverseAdvanceCheckInAllowed

`func (o *ResCashieringType) GetReverseAdvanceCheckInAllowed() bool`

GetReverseAdvanceCheckInAllowed returns the ReverseAdvanceCheckInAllowed field if non-nil, zero value otherwise.

### GetReverseAdvanceCheckInAllowedOk

`func (o *ResCashieringType) GetReverseAdvanceCheckInAllowedOk() (*bool, bool)`

GetReverseAdvanceCheckInAllowedOk returns a tuple with the ReverseAdvanceCheckInAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseAdvanceCheckInAllowed

`func (o *ResCashieringType) SetReverseAdvanceCheckInAllowed(v bool)`

SetReverseAdvanceCheckInAllowed sets ReverseAdvanceCheckInAllowed field to given value.

### HasReverseAdvanceCheckInAllowed

`func (o *ResCashieringType) HasReverseAdvanceCheckInAllowed() bool`

HasReverseAdvanceCheckInAllowed returns a boolean if a field has been set.

### GetTransactionsPosted

`func (o *ResCashieringType) GetTransactionsPosted() bool`

GetTransactionsPosted returns the TransactionsPosted field if non-nil, zero value otherwise.

### GetTransactionsPostedOk

`func (o *ResCashieringType) GetTransactionsPostedOk() (*bool, bool)`

GetTransactionsPostedOk returns a tuple with the TransactionsPosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionsPosted

`func (o *ResCashieringType) SetTransactionsPosted(v bool)`

SetTransactionsPosted sets TransactionsPosted field to given value.

### HasTransactionsPosted

`func (o *ResCashieringType) HasTransactionsPosted() bool`

HasTransactionsPosted returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


