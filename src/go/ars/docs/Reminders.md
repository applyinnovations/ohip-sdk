# Reminders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RemindersDetails** | Pointer to [**ARRemindersType**](ARRemindersType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReminders

`func NewReminders() *Reminders`

NewReminders instantiates a new Reminders object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRemindersWithDefaults

`func NewRemindersWithDefaults() *Reminders`

NewRemindersWithDefaults instantiates a new Reminders object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Reminders) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Reminders) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Reminders) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Reminders) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRemindersDetails

`func (o *Reminders) GetRemindersDetails() ARRemindersType`

GetRemindersDetails returns the RemindersDetails field if non-nil, zero value otherwise.

### GetRemindersDetailsOk

`func (o *Reminders) GetRemindersDetailsOk() (*ARRemindersType, bool)`

GetRemindersDetailsOk returns a tuple with the RemindersDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemindersDetails

`func (o *Reminders) SetRemindersDetails(v ARRemindersType)`

SetRemindersDetails sets RemindersDetails field to given value.

### HasRemindersDetails

`func (o *Reminders) HasRemindersDetails() bool`

HasRemindersDetails returns a boolean if a field has been set.

### GetWarnings

`func (o *Reminders) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Reminders) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Reminders) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Reminders) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


