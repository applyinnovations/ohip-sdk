# ConversionCodeMappingsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSystem** | Pointer to [**IntegrationSystemType**](IntegrationSystemType.md) |  | [optional] 
**ConversionCodeMappings** | Pointer to [**[]ConversionCodeMappingType**](ConversionCodeMappingType.md) | List of Conversion Code Mappings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewConversionCodeMappingsToBeChanged

`func NewConversionCodeMappingsToBeChanged() *ConversionCodeMappingsToBeChanged`

NewConversionCodeMappingsToBeChanged instantiates a new ConversionCodeMappingsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodeMappingsToBeChangedWithDefaults

`func NewConversionCodeMappingsToBeChangedWithDefaults() *ConversionCodeMappingsToBeChanged`

NewConversionCodeMappingsToBeChangedWithDefaults instantiates a new ConversionCodeMappingsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSystem

`func (o *ConversionCodeMappingsToBeChanged) GetIntegrationSystem() IntegrationSystemType`

GetIntegrationSystem returns the IntegrationSystem field if non-nil, zero value otherwise.

### GetIntegrationSystemOk

`func (o *ConversionCodeMappingsToBeChanged) GetIntegrationSystemOk() (*IntegrationSystemType, bool)`

GetIntegrationSystemOk returns a tuple with the IntegrationSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSystem

`func (o *ConversionCodeMappingsToBeChanged) SetIntegrationSystem(v IntegrationSystemType)`

SetIntegrationSystem sets IntegrationSystem field to given value.

### HasIntegrationSystem

`func (o *ConversionCodeMappingsToBeChanged) HasIntegrationSystem() bool`

HasIntegrationSystem returns a boolean if a field has been set.

### GetConversionCodeMappings

`func (o *ConversionCodeMappingsToBeChanged) GetConversionCodeMappings() []ConversionCodeMappingType`

GetConversionCodeMappings returns the ConversionCodeMappings field if non-nil, zero value otherwise.

### GetConversionCodeMappingsOk

`func (o *ConversionCodeMappingsToBeChanged) GetConversionCodeMappingsOk() (*[]ConversionCodeMappingType, bool)`

GetConversionCodeMappingsOk returns a tuple with the ConversionCodeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodeMappings

`func (o *ConversionCodeMappingsToBeChanged) SetConversionCodeMappings(v []ConversionCodeMappingType)`

SetConversionCodeMappings sets ConversionCodeMappings field to given value.

### HasConversionCodeMappings

`func (o *ConversionCodeMappingsToBeChanged) HasConversionCodeMappings() bool`

HasConversionCodeMappings returns a boolean if a field has been set.

### GetLinks

`func (o *ConversionCodeMappingsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConversionCodeMappingsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConversionCodeMappingsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConversionCodeMappingsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ConversionCodeMappingsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConversionCodeMappingsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConversionCodeMappingsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConversionCodeMappingsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


