# ConversionCodeMappingsToBeCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSystem** | Pointer to [**IntegrationSystemType**](IntegrationSystemType.md) |  | [optional] 
**ConversionCodeMappings** | Pointer to [**[]ConversionCodeMappingType**](ConversionCodeMappingType.md) | List of Conversion Code Mappings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewConversionCodeMappingsToBeCreated

`func NewConversionCodeMappingsToBeCreated() *ConversionCodeMappingsToBeCreated`

NewConversionCodeMappingsToBeCreated instantiates a new ConversionCodeMappingsToBeCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodeMappingsToBeCreatedWithDefaults

`func NewConversionCodeMappingsToBeCreatedWithDefaults() *ConversionCodeMappingsToBeCreated`

NewConversionCodeMappingsToBeCreatedWithDefaults instantiates a new ConversionCodeMappingsToBeCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSystem

`func (o *ConversionCodeMappingsToBeCreated) GetIntegrationSystem() IntegrationSystemType`

GetIntegrationSystem returns the IntegrationSystem field if non-nil, zero value otherwise.

### GetIntegrationSystemOk

`func (o *ConversionCodeMappingsToBeCreated) GetIntegrationSystemOk() (*IntegrationSystemType, bool)`

GetIntegrationSystemOk returns a tuple with the IntegrationSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSystem

`func (o *ConversionCodeMappingsToBeCreated) SetIntegrationSystem(v IntegrationSystemType)`

SetIntegrationSystem sets IntegrationSystem field to given value.

### HasIntegrationSystem

`func (o *ConversionCodeMappingsToBeCreated) HasIntegrationSystem() bool`

HasIntegrationSystem returns a boolean if a field has been set.

### GetConversionCodeMappings

`func (o *ConversionCodeMappingsToBeCreated) GetConversionCodeMappings() []ConversionCodeMappingType`

GetConversionCodeMappings returns the ConversionCodeMappings field if non-nil, zero value otherwise.

### GetConversionCodeMappingsOk

`func (o *ConversionCodeMappingsToBeCreated) GetConversionCodeMappingsOk() (*[]ConversionCodeMappingType, bool)`

GetConversionCodeMappingsOk returns a tuple with the ConversionCodeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodeMappings

`func (o *ConversionCodeMappingsToBeCreated) SetConversionCodeMappings(v []ConversionCodeMappingType)`

SetConversionCodeMappings sets ConversionCodeMappings field to given value.

### HasConversionCodeMappings

`func (o *ConversionCodeMappingsToBeCreated) HasConversionCodeMappings() bool`

HasConversionCodeMappings returns a boolean if a field has been set.

### GetLinks

`func (o *ConversionCodeMappingsToBeCreated) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConversionCodeMappingsToBeCreated) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConversionCodeMappingsToBeCreated) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConversionCodeMappingsToBeCreated) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ConversionCodeMappingsToBeCreated) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConversionCodeMappingsToBeCreated) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConversionCodeMappingsToBeCreated) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConversionCodeMappingsToBeCreated) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


