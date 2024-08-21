# ARReminderHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Age** | Pointer to **int32** | The minimum age(days) of the invoices to be included in the Reminder | [optional] 
**DateSent** | Pointer to **string** | The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type. | [optional] 
**ReportFileName** | Pointer to **string** | Report file name when exists to allow report re-printing. | [optional] 
**ReportName** | Pointer to **string** | Report Name. | [optional] 

## Methods

### NewARReminderHistoryType

`func NewARReminderHistoryType() *ARReminderHistoryType`

NewARReminderHistoryType instantiates a new ARReminderHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARReminderHistoryTypeWithDefaults

`func NewARReminderHistoryTypeWithDefaults() *ARReminderHistoryType`

NewARReminderHistoryTypeWithDefaults instantiates a new ARReminderHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAge

`func (o *ARReminderHistoryType) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARReminderHistoryType) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARReminderHistoryType) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARReminderHistoryType) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetDateSent

`func (o *ARReminderHistoryType) GetDateSent() string`

GetDateSent returns the DateSent field if non-nil, zero value otherwise.

### GetDateSentOk

`func (o *ARReminderHistoryType) GetDateSentOk() (*string, bool)`

GetDateSentOk returns a tuple with the DateSent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSent

`func (o *ARReminderHistoryType) SetDateSent(v string)`

SetDateSent sets DateSent field to given value.

### HasDateSent

`func (o *ARReminderHistoryType) HasDateSent() bool`

HasDateSent returns a boolean if a field has been set.

### GetReportFileName

`func (o *ARReminderHistoryType) GetReportFileName() string`

GetReportFileName returns the ReportFileName field if non-nil, zero value otherwise.

### GetReportFileNameOk

`func (o *ARReminderHistoryType) GetReportFileNameOk() (*string, bool)`

GetReportFileNameOk returns a tuple with the ReportFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportFileName

`func (o *ARReminderHistoryType) SetReportFileName(v string)`

SetReportFileName sets ReportFileName field to given value.

### HasReportFileName

`func (o *ARReminderHistoryType) HasReportFileName() bool`

HasReportFileName returns a boolean if a field has been set.

### GetReportName

`func (o *ARReminderHistoryType) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *ARReminderHistoryType) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *ARReminderHistoryType) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *ARReminderHistoryType) HasReportName() bool`

HasReportName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


