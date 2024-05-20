# PropertyTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyTypes** | Pointer to [**[]PropertyTypeType**](PropertyTypeType.md) | List of Property Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPropertyTypesToBeChanged

`func NewPropertyTypesToBeChanged() *PropertyTypesToBeChanged`

NewPropertyTypesToBeChanged instantiates a new PropertyTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyTypesToBeChangedWithDefaults

`func NewPropertyTypesToBeChangedWithDefaults() *PropertyTypesToBeChanged`

NewPropertyTypesToBeChangedWithDefaults instantiates a new PropertyTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyTypes

`func (o *PropertyTypesToBeChanged) GetPropertyTypes() []PropertyTypeType`

GetPropertyTypes returns the PropertyTypes field if non-nil, zero value otherwise.

### GetPropertyTypesOk

`func (o *PropertyTypesToBeChanged) GetPropertyTypesOk() (*[]PropertyTypeType, bool)`

GetPropertyTypesOk returns a tuple with the PropertyTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyTypes

`func (o *PropertyTypesToBeChanged) SetPropertyTypes(v []PropertyTypeType)`

SetPropertyTypes sets PropertyTypes field to given value.

### HasPropertyTypes

`func (o *PropertyTypesToBeChanged) HasPropertyTypes() bool`

HasPropertyTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PropertyTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PropertyTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PropertyTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PropertyTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PropertyTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PropertyTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PropertyTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PropertyTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


