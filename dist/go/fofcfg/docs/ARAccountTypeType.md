# ARAccountTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountType** | Pointer to **string** | Account receivable account type | [optional] 
**CreditLimit** | Pointer to **float32** | Maximum credit available for account type | [optional] 
**Description** | Pointer to **string** | Full description of account type | [optional] 
**FinanceCharge** | Pointer to [**ARFinanceChargeType**](ARFinanceChargeType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property associated with account type | [optional] 
**PrintPreference** | Pointer to [**ARPrintPreferenceType**](ARPrintPreferenceType.md) |  | [optional] 
**ReminderCycle** | Pointer to [**ARReminderCycleType**](ARReminderCycleType.md) |  | [optional] 
**ReminderDelayDays** | Pointer to **int32** | Defines the number of days(aging) within which the payment must be made for a account type, if not a reminder is generated. | [optional] 
**StatementMode** | Pointer to [**StatementType**](StatementType.md) |  | [optional] 
**StatementName** | Pointer to **string** | Statement file name that account receivable account types uses | [optional] 
**StatementNameDesc** | Pointer to **string** | Description associated with statement file name | [optional] 

## Methods

### NewARAccountTypeType

`func NewARAccountTypeType() *ARAccountTypeType`

NewARAccountTypeType instantiates a new ARAccountTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountTypeTypeWithDefaults

`func NewARAccountTypeTypeWithDefaults() *ARAccountTypeType`

NewARAccountTypeTypeWithDefaults instantiates a new ARAccountTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountType

`func (o *ARAccountTypeType) GetAccountType() string`

GetAccountType returns the AccountType field if non-nil, zero value otherwise.

### GetAccountTypeOk

`func (o *ARAccountTypeType) GetAccountTypeOk() (*string, bool)`

GetAccountTypeOk returns a tuple with the AccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountType

`func (o *ARAccountTypeType) SetAccountType(v string)`

SetAccountType sets AccountType field to given value.

### HasAccountType

`func (o *ARAccountTypeType) HasAccountType() bool`

HasAccountType returns a boolean if a field has been set.

### GetCreditLimit

`func (o *ARAccountTypeType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *ARAccountTypeType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *ARAccountTypeType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *ARAccountTypeType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetDescription

`func (o *ARAccountTypeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ARAccountTypeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ARAccountTypeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ARAccountTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFinanceCharge

`func (o *ARAccountTypeType) GetFinanceCharge() ARFinanceChargeType`

GetFinanceCharge returns the FinanceCharge field if non-nil, zero value otherwise.

### GetFinanceChargeOk

`func (o *ARAccountTypeType) GetFinanceChargeOk() (*ARFinanceChargeType, bool)`

GetFinanceChargeOk returns a tuple with the FinanceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinanceCharge

`func (o *ARAccountTypeType) SetFinanceCharge(v ARFinanceChargeType)`

SetFinanceCharge sets FinanceCharge field to given value.

### HasFinanceCharge

`func (o *ARAccountTypeType) HasFinanceCharge() bool`

HasFinanceCharge returns a boolean if a field has been set.

### GetHotelId

`func (o *ARAccountTypeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAccountTypeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAccountTypeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAccountTypeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPrintPreference

`func (o *ARAccountTypeType) GetPrintPreference() ARPrintPreferenceType`

GetPrintPreference returns the PrintPreference field if non-nil, zero value otherwise.

### GetPrintPreferenceOk

`func (o *ARAccountTypeType) GetPrintPreferenceOk() (*ARPrintPreferenceType, bool)`

GetPrintPreferenceOk returns a tuple with the PrintPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintPreference

`func (o *ARAccountTypeType) SetPrintPreference(v ARPrintPreferenceType)`

SetPrintPreference sets PrintPreference field to given value.

### HasPrintPreference

`func (o *ARAccountTypeType) HasPrintPreference() bool`

HasPrintPreference returns a boolean if a field has been set.

### GetReminderCycle

`func (o *ARAccountTypeType) GetReminderCycle() ARReminderCycleType`

GetReminderCycle returns the ReminderCycle field if non-nil, zero value otherwise.

### GetReminderCycleOk

`func (o *ARAccountTypeType) GetReminderCycleOk() (*ARReminderCycleType, bool)`

GetReminderCycleOk returns a tuple with the ReminderCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderCycle

`func (o *ARAccountTypeType) SetReminderCycle(v ARReminderCycleType)`

SetReminderCycle sets ReminderCycle field to given value.

### HasReminderCycle

`func (o *ARAccountTypeType) HasReminderCycle() bool`

HasReminderCycle returns a boolean if a field has been set.

### GetReminderDelayDays

`func (o *ARAccountTypeType) GetReminderDelayDays() int32`

GetReminderDelayDays returns the ReminderDelayDays field if non-nil, zero value otherwise.

### GetReminderDelayDaysOk

`func (o *ARAccountTypeType) GetReminderDelayDaysOk() (*int32, bool)`

GetReminderDelayDaysOk returns a tuple with the ReminderDelayDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderDelayDays

`func (o *ARAccountTypeType) SetReminderDelayDays(v int32)`

SetReminderDelayDays sets ReminderDelayDays field to given value.

### HasReminderDelayDays

`func (o *ARAccountTypeType) HasReminderDelayDays() bool`

HasReminderDelayDays returns a boolean if a field has been set.

### GetStatementMode

`func (o *ARAccountTypeType) GetStatementMode() StatementType`

GetStatementMode returns the StatementMode field if non-nil, zero value otherwise.

### GetStatementModeOk

`func (o *ARAccountTypeType) GetStatementModeOk() (*StatementType, bool)`

GetStatementModeOk returns a tuple with the StatementMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementMode

`func (o *ARAccountTypeType) SetStatementMode(v StatementType)`

SetStatementMode sets StatementMode field to given value.

### HasStatementMode

`func (o *ARAccountTypeType) HasStatementMode() bool`

HasStatementMode returns a boolean if a field has been set.

### GetStatementName

`func (o *ARAccountTypeType) GetStatementName() string`

GetStatementName returns the StatementName field if non-nil, zero value otherwise.

### GetStatementNameOk

`func (o *ARAccountTypeType) GetStatementNameOk() (*string, bool)`

GetStatementNameOk returns a tuple with the StatementName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementName

`func (o *ARAccountTypeType) SetStatementName(v string)`

SetStatementName sets StatementName field to given value.

### HasStatementName

`func (o *ARAccountTypeType) HasStatementName() bool`

HasStatementName returns a boolean if a field has been set.

### GetStatementNameDesc

`func (o *ARAccountTypeType) GetStatementNameDesc() string`

GetStatementNameDesc returns the StatementNameDesc field if non-nil, zero value otherwise.

### GetStatementNameDescOk

`func (o *ARAccountTypeType) GetStatementNameDescOk() (*string, bool)`

GetStatementNameDescOk returns a tuple with the StatementNameDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNameDesc

`func (o *ARAccountTypeType) SetStatementNameDesc(v string)`

SetStatementNameDesc sets StatementNameDesc field to given value.

### HasStatementNameDesc

`func (o *ARAccountTypeType) HasStatementNameDesc() bool`

HasStatementNameDesc returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


