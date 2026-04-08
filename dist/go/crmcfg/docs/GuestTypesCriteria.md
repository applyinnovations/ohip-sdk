# GuestTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTypes** | Pointer to [**[]GuestTypeType**](GuestTypeType.md) | List of Guest Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGuestTypesCriteria

`func NewGuestTypesCriteria() *GuestTypesCriteria`

NewGuestTypesCriteria instantiates a new GuestTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestTypesCriteriaWithDefaults

`func NewGuestTypesCriteriaWithDefaults() *GuestTypesCriteria`

NewGuestTypesCriteriaWithDefaults instantiates a new GuestTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTypes

`func (o *GuestTypesCriteria) GetGuestTypes() []GuestTypeType`

GetGuestTypes returns the GuestTypes field if non-nil, zero value otherwise.

### GetGuestTypesOk

`func (o *GuestTypesCriteria) GetGuestTypesOk() (*[]GuestTypeType, bool)`

GetGuestTypesOk returns a tuple with the GuestTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTypes

`func (o *GuestTypesCriteria) SetGuestTypes(v []GuestTypeType)`

SetGuestTypes sets GuestTypes field to given value.

### HasGuestTypes

`func (o *GuestTypesCriteria) HasGuestTypes() bool`

HasGuestTypes returns a boolean if a field has been set.

### GetLinks

`func (o *GuestTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuestTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuestTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuestTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuestTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuestTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuestTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuestTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


