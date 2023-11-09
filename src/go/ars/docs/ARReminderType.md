# ARReminderType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Age** | Pointer to **int32** | The minimum age(days) of the invoices to be included in the Reminder | [optional] 
**CurrencyCode** | Pointer to **string** | Reminder summary currency code. | [optional] 
**Cycle** | Pointer to **int32** | The current Reminder Cycle number for this reminder. This would be available when Simple Reminder functionality is ON. | [optional] 
**CycleUsed** | Pointer to [**ReminderCycleType**](ReminderCycleType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the Account belongs. | [optional] 
**Invoices** | Pointer to [**ARInvoicesType**](ARInvoicesType.md) |  | [optional] 
**IsHistoryExists** | Pointer to **bool** | Indicates that reminders history exists. | [optional] 
**LastCycle** | Pointer to **int32** | The Last Reminder Cycle used for this Account. This would be available when Simple Reminder functionality is ON. | [optional] 
**LastReminderSent** | Pointer to **string** | The date of the Last Reminder Sent. | [optional] 
**LetterName** | Pointer to **string** | The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type. | [optional] 
**MaxAge** | Pointer to **int32** | The maximum Age(days) of the invoices in the Reminder. This would be available when Simple Reminder functionality is OFF. | [optional] 
**ReportFileName** | Pointer to **string** | The Reminder report file name Letter name which is to be used for reprint. | [optional] 

## Methods

### NewARReminderType

`func NewARReminderType() *ARReminderType`

NewARReminderType instantiates a new ARReminderType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARReminderTypeWithDefaults

`func NewARReminderTypeWithDefaults() *ARReminderType`

NewARReminderTypeWithDefaults instantiates a new ARReminderType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ARReminderType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARReminderType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARReminderType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARReminderType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAge

`func (o *ARReminderType) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARReminderType) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARReminderType) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARReminderType) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *ARReminderType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *ARReminderType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *ARReminderType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *ARReminderType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCycle

`func (o *ARReminderType) GetCycle() int32`

GetCycle returns the Cycle field if non-nil, zero value otherwise.

### GetCycleOk

`func (o *ARReminderType) GetCycleOk() (*int32, bool)`

GetCycleOk returns a tuple with the Cycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycle

`func (o *ARReminderType) SetCycle(v int32)`

SetCycle sets Cycle field to given value.

### HasCycle

`func (o *ARReminderType) HasCycle() bool`

HasCycle returns a boolean if a field has been set.

### GetCycleUsed

`func (o *ARReminderType) GetCycleUsed() ReminderCycleType`

GetCycleUsed returns the CycleUsed field if non-nil, zero value otherwise.

### GetCycleUsedOk

`func (o *ARReminderType) GetCycleUsedOk() (*ReminderCycleType, bool)`

GetCycleUsedOk returns a tuple with the CycleUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCycleUsed

`func (o *ARReminderType) SetCycleUsed(v ReminderCycleType)`

SetCycleUsed sets CycleUsed field to given value.

### HasCycleUsed

`func (o *ARReminderType) HasCycleUsed() bool`

HasCycleUsed returns a boolean if a field has been set.

### GetHotelId

`func (o *ARReminderType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARReminderType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARReminderType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARReminderType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvoices

`func (o *ARReminderType) GetInvoices() ARInvoicesType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARReminderType) GetInvoicesOk() (*ARInvoicesType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARReminderType) SetInvoices(v ARInvoicesType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARReminderType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetIsHistoryExists

`func (o *ARReminderType) GetIsHistoryExists() bool`

GetIsHistoryExists returns the IsHistoryExists field if non-nil, zero value otherwise.

### GetIsHistoryExistsOk

`func (o *ARReminderType) GetIsHistoryExistsOk() (*bool, bool)`

GetIsHistoryExistsOk returns a tuple with the IsHistoryExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsHistoryExists

`func (o *ARReminderType) SetIsHistoryExists(v bool)`

SetIsHistoryExists sets IsHistoryExists field to given value.

### HasIsHistoryExists

`func (o *ARReminderType) HasIsHistoryExists() bool`

HasIsHistoryExists returns a boolean if a field has been set.

### GetLastCycle

`func (o *ARReminderType) GetLastCycle() int32`

GetLastCycle returns the LastCycle field if non-nil, zero value otherwise.

### GetLastCycleOk

`func (o *ARReminderType) GetLastCycleOk() (*int32, bool)`

GetLastCycleOk returns a tuple with the LastCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastCycle

`func (o *ARReminderType) SetLastCycle(v int32)`

SetLastCycle sets LastCycle field to given value.

### HasLastCycle

`func (o *ARReminderType) HasLastCycle() bool`

HasLastCycle returns a boolean if a field has been set.

### GetLastReminderSent

`func (o *ARReminderType) GetLastReminderSent() string`

GetLastReminderSent returns the LastReminderSent field if non-nil, zero value otherwise.

### GetLastReminderSentOk

`func (o *ARReminderType) GetLastReminderSentOk() (*string, bool)`

GetLastReminderSentOk returns a tuple with the LastReminderSent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReminderSent

`func (o *ARReminderType) SetLastReminderSent(v string)`

SetLastReminderSent sets LastReminderSent field to given value.

### HasLastReminderSent

`func (o *ARReminderType) HasLastReminderSent() bool`

HasLastReminderSent returns a boolean if a field has been set.

### GetLetterName

`func (o *ARReminderType) GetLetterName() string`

GetLetterName returns the LetterName field if non-nil, zero value otherwise.

### GetLetterNameOk

`func (o *ARReminderType) GetLetterNameOk() (*string, bool)`

GetLetterNameOk returns a tuple with the LetterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLetterName

`func (o *ARReminderType) SetLetterName(v string)`

SetLetterName sets LetterName field to given value.

### HasLetterName

`func (o *ARReminderType) HasLetterName() bool`

HasLetterName returns a boolean if a field has been set.

### GetMaxAge

`func (o *ARReminderType) GetMaxAge() int32`

GetMaxAge returns the MaxAge field if non-nil, zero value otherwise.

### GetMaxAgeOk

`func (o *ARReminderType) GetMaxAgeOk() (*int32, bool)`

GetMaxAgeOk returns a tuple with the MaxAge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAge

`func (o *ARReminderType) SetMaxAge(v int32)`

SetMaxAge sets MaxAge field to given value.

### HasMaxAge

`func (o *ARReminderType) HasMaxAge() bool`

HasMaxAge returns a boolean if a field has been set.

### GetReportFileName

`func (o *ARReminderType) GetReportFileName() string`

GetReportFileName returns the ReportFileName field if non-nil, zero value otherwise.

### GetReportFileNameOk

`func (o *ARReminderType) GetReportFileNameOk() (*string, bool)`

GetReportFileNameOk returns a tuple with the ReportFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportFileName

`func (o *ARReminderType) SetReportFileName(v string)`

SetReportFileName sets ReportFileName field to given value.

### HasReportFileName

`func (o *ARReminderType) HasReportFileName() bool`

HasReportFileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


