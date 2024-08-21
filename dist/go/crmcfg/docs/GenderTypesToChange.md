# GenderTypesToChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenderTypes** | Pointer to [**[]GenderType**](GenderType.md) | List of Gender Type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGenderTypesToChange

`func NewGenderTypesToChange() *GenderTypesToChange`

NewGenderTypesToChange instantiates a new GenderTypesToChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenderTypesToChangeWithDefaults

`func NewGenderTypesToChangeWithDefaults() *GenderTypesToChange`

NewGenderTypesToChangeWithDefaults instantiates a new GenderTypesToChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenderTypes

`func (o *GenderTypesToChange) GetGenderTypes() []GenderType`

GetGenderTypes returns the GenderTypes field if non-nil, zero value otherwise.

### GetGenderTypesOk

`func (o *GenderTypesToChange) GetGenderTypesOk() (*[]GenderType, bool)`

GetGenderTypesOk returns a tuple with the GenderTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenderTypes

`func (o *GenderTypesToChange) SetGenderTypes(v []GenderType)`

SetGenderTypes sets GenderTypes field to given value.

### HasGenderTypes

`func (o *GenderTypesToChange) HasGenderTypes() bool`

HasGenderTypes returns a boolean if a field has been set.

### GetLinks

`func (o *GenderTypesToChange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GenderTypesToChange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GenderTypesToChange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GenderTypesToChange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GenderTypesToChange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GenderTypesToChange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GenderTypesToChange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GenderTypesToChange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


