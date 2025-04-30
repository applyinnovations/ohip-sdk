# CompTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompTypes** | Pointer to [**[]CompTypeType**](CompTypeType.md) | List of Comp Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompTypesCriteria

`func NewCompTypesCriteria() *CompTypesCriteria`

NewCompTypesCriteria instantiates a new CompTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTypesCriteriaWithDefaults

`func NewCompTypesCriteriaWithDefaults() *CompTypesCriteria`

NewCompTypesCriteriaWithDefaults instantiates a new CompTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompTypes

`func (o *CompTypesCriteria) GetCompTypes() []CompTypeType`

GetCompTypes returns the CompTypes field if non-nil, zero value otherwise.

### GetCompTypesOk

`func (o *CompTypesCriteria) GetCompTypesOk() (*[]CompTypeType, bool)`

GetCompTypesOk returns a tuple with the CompTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTypes

`func (o *CompTypesCriteria) SetCompTypes(v []CompTypeType)`

SetCompTypes sets CompTypes field to given value.

### HasCompTypes

`func (o *CompTypesCriteria) HasCompTypes() bool`

HasCompTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CompTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


