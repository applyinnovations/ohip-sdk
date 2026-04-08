# GuestMessageTemplates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestMessageTemplates** | Pointer to [**[]GuestMessageTemplateType**](GuestMessageTemplateType.md) | Collection of guest messages templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestMessageTemplates

`func NewGuestMessageTemplates() *GuestMessageTemplates`

NewGuestMessageTemplates instantiates a new GuestMessageTemplates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestMessageTemplatesWithDefaults

`func NewGuestMessageTemplatesWithDefaults() *GuestMessageTemplates`

NewGuestMessageTemplatesWithDefaults instantiates a new GuestMessageTemplates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestMessageTemplates

`func (o *GuestMessageTemplates) GetGuestMessageTemplates() []GuestMessageTemplateType`

GetGuestMessageTemplates returns the GuestMessageTemplates field if non-nil, zero value otherwise.

### GetGuestMessageTemplatesOk

`func (o *GuestMessageTemplates) GetGuestMessageTemplatesOk() (*[]GuestMessageTemplateType, bool)`

GetGuestMessageTemplatesOk returns a tuple with the GuestMessageTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessageTemplates

`func (o *GuestMessageTemplates) SetGuestMessageTemplates(v []GuestMessageTemplateType)`

SetGuestMessageTemplates sets GuestMessageTemplates field to given value.

### HasGuestMessageTemplates

`func (o *GuestMessageTemplates) HasGuestMessageTemplates() bool`

HasGuestMessageTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *GuestMessageTemplates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestMessageTemplates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestMessageTemplates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestMessageTemplates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestMessageTemplates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestMessageTemplates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestMessageTemplates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestMessageTemplates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


