# ARAccountTypeLastReminderInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReportName** | Pointer to **string** | Report Name. | [optional] 
**ReportFileName** | Pointer to **string** | Report file name when exists to allow report re-printing. | [optional] 
**DateSent** | Pointer to **string** | The Reminder Letter name which is to be used for this Reminder based on the setup on the Account Type. | [optional] 
**Age** | Pointer to **int32** | The minimum age(days) of the invoices to be included in the Reminder | [optional] 
**HistoryExists** | Pointer to **bool** | Indicates that reminders history exists. | [optional] 

## Methods

### NewARAccountTypeLastReminderInfo

`func NewARAccountTypeLastReminderInfo() *ARAccountTypeLastReminderInfo`

NewARAccountTypeLastReminderInfo instantiates a new ARAccountTypeLastReminderInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountTypeLastReminderInfoWithDefaults

`func NewARAccountTypeLastReminderInfoWithDefaults() *ARAccountTypeLastReminderInfo`

NewARAccountTypeLastReminderInfoWithDefaults instantiates a new ARAccountTypeLastReminderInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReportName

`func (o *ARAccountTypeLastReminderInfo) GetReportName() string`

GetReportName returns the ReportName field if non-nil, zero value otherwise.

### GetReportNameOk

`func (o *ARAccountTypeLastReminderInfo) GetReportNameOk() (*string, bool)`

GetReportNameOk returns a tuple with the ReportName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportName

`func (o *ARAccountTypeLastReminderInfo) SetReportName(v string)`

SetReportName sets ReportName field to given value.

### HasReportName

`func (o *ARAccountTypeLastReminderInfo) HasReportName() bool`

HasReportName returns a boolean if a field has been set.

### GetReportFileName

`func (o *ARAccountTypeLastReminderInfo) GetReportFileName() string`

GetReportFileName returns the ReportFileName field if non-nil, zero value otherwise.

### GetReportFileNameOk

`func (o *ARAccountTypeLastReminderInfo) GetReportFileNameOk() (*string, bool)`

GetReportFileNameOk returns a tuple with the ReportFileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportFileName

`func (o *ARAccountTypeLastReminderInfo) SetReportFileName(v string)`

SetReportFileName sets ReportFileName field to given value.

### HasReportFileName

`func (o *ARAccountTypeLastReminderInfo) HasReportFileName() bool`

HasReportFileName returns a boolean if a field has been set.

### GetDateSent

`func (o *ARAccountTypeLastReminderInfo) GetDateSent() string`

GetDateSent returns the DateSent field if non-nil, zero value otherwise.

### GetDateSentOk

`func (o *ARAccountTypeLastReminderInfo) GetDateSentOk() (*string, bool)`

GetDateSentOk returns a tuple with the DateSent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateSent

`func (o *ARAccountTypeLastReminderInfo) SetDateSent(v string)`

SetDateSent sets DateSent field to given value.

### HasDateSent

`func (o *ARAccountTypeLastReminderInfo) HasDateSent() bool`

HasDateSent returns a boolean if a field has been set.

### GetAge

`func (o *ARAccountTypeLastReminderInfo) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARAccountTypeLastReminderInfo) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARAccountTypeLastReminderInfo) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARAccountTypeLastReminderInfo) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetHistoryExists

`func (o *ARAccountTypeLastReminderInfo) GetHistoryExists() bool`

GetHistoryExists returns the HistoryExists field if non-nil, zero value otherwise.

### GetHistoryExistsOk

`func (o *ARAccountTypeLastReminderInfo) GetHistoryExistsOk() (*bool, bool)`

GetHistoryExistsOk returns a tuple with the HistoryExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistoryExists

`func (o *ARAccountTypeLastReminderInfo) SetHistoryExists(v bool)`

SetHistoryExists sets HistoryExists field to given value.

### HasHistoryExists

`func (o *ARAccountTypeLastReminderInfo) HasHistoryExists() bool`

HasHistoryExists returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


