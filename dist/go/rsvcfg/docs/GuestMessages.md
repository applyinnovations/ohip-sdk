# GuestMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestMessages** | Pointer to [**[]GuestMessageCodeType**](GuestMessageCodeType.md) | Collection of guest messages with attached guest message types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestMessages

`func NewGuestMessages() *GuestMessages`

NewGuestMessages instantiates a new GuestMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestMessagesWithDefaults

`func NewGuestMessagesWithDefaults() *GuestMessages`

NewGuestMessagesWithDefaults instantiates a new GuestMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestMessages

`func (o *GuestMessages) GetGuestMessages() []GuestMessageCodeType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *GuestMessages) GetGuestMessagesOk() (*[]GuestMessageCodeType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *GuestMessages) SetGuestMessages(v []GuestMessageCodeType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *GuestMessages) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetLinks

`func (o *GuestMessages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestMessages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestMessages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestMessages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestMessages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestMessages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


