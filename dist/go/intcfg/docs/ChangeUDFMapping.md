# ChangeUDFMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UDFMapping** | Pointer to [**UDFMappingType**](UDFMappingType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeUDFMapping

`func NewChangeUDFMapping() *ChangeUDFMapping`

NewChangeUDFMapping instantiates a new ChangeUDFMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeUDFMappingWithDefaults

`func NewChangeUDFMappingWithDefaults() *ChangeUDFMapping`

NewChangeUDFMappingWithDefaults instantiates a new ChangeUDFMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeUDFMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeUDFMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeUDFMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeUDFMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUDFMapping

`func (o *ChangeUDFMapping) GetUDFMapping() UDFMappingType`

GetUDFMapping returns the UDFMapping field if non-nil, zero value otherwise.

### GetUDFMappingOk

`func (o *ChangeUDFMapping) GetUDFMappingOk() (*UDFMappingType, bool)`

GetUDFMappingOk returns a tuple with the UDFMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFMapping

`func (o *ChangeUDFMapping) SetUDFMapping(v UDFMappingType)`

SetUDFMapping sets UDFMapping field to given value.

### HasUDFMapping

`func (o *ChangeUDFMapping) HasUDFMapping() bool`

HasUDFMapping returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeUDFMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeUDFMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeUDFMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeUDFMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


