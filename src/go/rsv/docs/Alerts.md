# Alerts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alerts** | Pointer to [**AlertsType**](AlertsType.md) |  | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**GuestMessages** | Pointer to [**ResvGuestMessagesType**](ResvGuestMessagesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewAlerts

`func NewAlerts() *Alerts`

NewAlerts instantiates a new Alerts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertsWithDefaults

`func NewAlertsWithDefaults() *Alerts`

NewAlertsWithDefaults instantiates a new Alerts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlerts

`func (o *Alerts) GetAlerts() AlertsType`

GetAlerts returns the Alerts field if non-nil, zero value otherwise.

### GetAlertsOk

`func (o *Alerts) GetAlertsOk() (*AlertsType, bool)`

GetAlertsOk returns a tuple with the Alerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlerts

`func (o *Alerts) SetAlerts(v AlertsType)`

SetAlerts sets Alerts field to given value.

### HasAlerts

`func (o *Alerts) HasAlerts() bool`

HasAlerts returns a boolean if a field has been set.

### GetComments

`func (o *Alerts) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Alerts) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Alerts) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Alerts) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetGuestMessages

`func (o *Alerts) GetGuestMessages() ResvGuestMessagesType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *Alerts) GetGuestMessagesOk() (*ResvGuestMessagesType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *Alerts) SetGuestMessages(v ResvGuestMessagesType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *Alerts) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetLinks

`func (o *Alerts) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Alerts) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Alerts) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Alerts) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Alerts) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Alerts) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Alerts) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Alerts) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


