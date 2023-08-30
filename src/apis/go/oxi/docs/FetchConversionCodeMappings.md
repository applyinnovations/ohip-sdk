# FetchConversionCodeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConversionCodeMappings** | Pointer to [**[]ConversionCodeMappingType**](ConversionCodeMappingType.md) | List of Conversion Code Mappings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchConversionCodeMappings

`func NewFetchConversionCodeMappings() *FetchConversionCodeMappings`

NewFetchConversionCodeMappings instantiates a new FetchConversionCodeMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchConversionCodeMappingsWithDefaults

`func NewFetchConversionCodeMappingsWithDefaults() *FetchConversionCodeMappings`

NewFetchConversionCodeMappingsWithDefaults instantiates a new FetchConversionCodeMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConversionCodeMappings

`func (o *FetchConversionCodeMappings) GetConversionCodeMappings() []ConversionCodeMappingType`

GetConversionCodeMappings returns the ConversionCodeMappings field if non-nil, zero value otherwise.

### GetConversionCodeMappingsOk

`func (o *FetchConversionCodeMappings) GetConversionCodeMappingsOk() (*[]ConversionCodeMappingType, bool)`

GetConversionCodeMappingsOk returns a tuple with the ConversionCodeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodeMappings

`func (o *FetchConversionCodeMappings) SetConversionCodeMappings(v []ConversionCodeMappingType)`

SetConversionCodeMappings sets ConversionCodeMappings field to given value.

### HasConversionCodeMappings

`func (o *FetchConversionCodeMappings) HasConversionCodeMappings() bool`

HasConversionCodeMappings returns a boolean if a field has been set.

### GetLinks

`func (o *FetchConversionCodeMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchConversionCodeMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchConversionCodeMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchConversionCodeMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchConversionCodeMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchConversionCodeMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchConversionCodeMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchConversionCodeMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


