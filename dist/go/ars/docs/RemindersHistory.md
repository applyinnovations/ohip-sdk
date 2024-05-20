# RemindersHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARReminderHistory** | Pointer to [**[]ARReminderHistoryType**](ARReminderHistoryType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRemindersHistory

`func NewRemindersHistory() *RemindersHistory`

NewRemindersHistory instantiates a new RemindersHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRemindersHistoryWithDefaults

`func NewRemindersHistoryWithDefaults() *RemindersHistory`

NewRemindersHistoryWithDefaults instantiates a new RemindersHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARReminderHistory

`func (o *RemindersHistory) GetARReminderHistory() []ARReminderHistoryType`

GetARReminderHistory returns the ARReminderHistory field if non-nil, zero value otherwise.

### GetARReminderHistoryOk

`func (o *RemindersHistory) GetARReminderHistoryOk() (*[]ARReminderHistoryType, bool)`

GetARReminderHistoryOk returns a tuple with the ARReminderHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARReminderHistory

`func (o *RemindersHistory) SetARReminderHistory(v []ARReminderHistoryType)`

SetARReminderHistory sets ARReminderHistory field to given value.

### HasARReminderHistory

`func (o *RemindersHistory) HasARReminderHistory() bool`

HasARReminderHistory returns a boolean if a field has been set.

### GetLinks

`func (o *RemindersHistory) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RemindersHistory) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RemindersHistory) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RemindersHistory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RemindersHistory) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RemindersHistory) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RemindersHistory) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RemindersHistory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


