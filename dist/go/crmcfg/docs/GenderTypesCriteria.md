# GenderTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GenderTypes** | Pointer to [**[]GenderType**](GenderType.md) | List of Gender Type. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGenderTypesCriteria

`func NewGenderTypesCriteria() *GenderTypesCriteria`

NewGenderTypesCriteria instantiates a new GenderTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenderTypesCriteriaWithDefaults

`func NewGenderTypesCriteriaWithDefaults() *GenderTypesCriteria`

NewGenderTypesCriteriaWithDefaults instantiates a new GenderTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenderTypes

`func (o *GenderTypesCriteria) GetGenderTypes() []GenderType`

GetGenderTypes returns the GenderTypes field if non-nil, zero value otherwise.

### GetGenderTypesOk

`func (o *GenderTypesCriteria) GetGenderTypesOk() (*[]GenderType, bool)`

GetGenderTypesOk returns a tuple with the GenderTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenderTypes

`func (o *GenderTypesCriteria) SetGenderTypes(v []GenderType)`

SetGenderTypes sets GenderTypes field to given value.

### HasGenderTypes

`func (o *GenderTypesCriteria) HasGenderTypes() bool`

HasGenderTypes returns a boolean if a field has been set.

### GetLinks

`func (o *GenderTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GenderTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GenderTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GenderTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GenderTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GenderTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GenderTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GenderTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


