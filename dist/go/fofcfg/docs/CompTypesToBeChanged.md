# CompTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompTypes** | Pointer to [**[]CompTypeType**](CompTypeType.md) | List of Comp Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompTypesToBeChanged

`func NewCompTypesToBeChanged() *CompTypesToBeChanged`

NewCompTypesToBeChanged instantiates a new CompTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompTypesToBeChangedWithDefaults

`func NewCompTypesToBeChangedWithDefaults() *CompTypesToBeChanged`

NewCompTypesToBeChangedWithDefaults instantiates a new CompTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompTypes

`func (o *CompTypesToBeChanged) GetCompTypes() []CompTypeType`

GetCompTypes returns the CompTypes field if non-nil, zero value otherwise.

### GetCompTypesOk

`func (o *CompTypesToBeChanged) GetCompTypesOk() (*[]CompTypeType, bool)`

GetCompTypesOk returns a tuple with the CompTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompTypes

`func (o *CompTypesToBeChanged) SetCompTypes(v []CompTypeType)`

SetCompTypes sets CompTypes field to given value.

### HasCompTypes

`func (o *CompTypesToBeChanged) HasCompTypes() bool`

HasCompTypes returns a boolean if a field has been set.

### GetLinks

`func (o *CompTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


