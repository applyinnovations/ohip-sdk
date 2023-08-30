# ChangedConversionCodeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConversionCodeMappingStatus** | Pointer to [**ConversionCodeMappingStatusType**](ConversionCodeMappingStatusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangedConversionCodeMappings

`func NewChangedConversionCodeMappings() *ChangedConversionCodeMappings`

NewChangedConversionCodeMappings instantiates a new ChangedConversionCodeMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangedConversionCodeMappingsWithDefaults

`func NewChangedConversionCodeMappingsWithDefaults() *ChangedConversionCodeMappings`

NewChangedConversionCodeMappingsWithDefaults instantiates a new ChangedConversionCodeMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConversionCodeMappingStatus

`func (o *ChangedConversionCodeMappings) GetConversionCodeMappingStatus() ConversionCodeMappingStatusType`

GetConversionCodeMappingStatus returns the ConversionCodeMappingStatus field if non-nil, zero value otherwise.

### GetConversionCodeMappingStatusOk

`func (o *ChangedConversionCodeMappings) GetConversionCodeMappingStatusOk() (*ConversionCodeMappingStatusType, bool)`

GetConversionCodeMappingStatusOk returns a tuple with the ConversionCodeMappingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodeMappingStatus

`func (o *ChangedConversionCodeMappings) SetConversionCodeMappingStatus(v ConversionCodeMappingStatusType)`

SetConversionCodeMappingStatus sets ConversionCodeMappingStatus field to given value.

### HasConversionCodeMappingStatus

`func (o *ChangedConversionCodeMappings) HasConversionCodeMappingStatus() bool`

HasConversionCodeMappingStatus returns a boolean if a field has been set.

### GetLinks

`func (o *ChangedConversionCodeMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangedConversionCodeMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangedConversionCodeMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangedConversionCodeMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangedConversionCodeMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangedConversionCodeMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangedConversionCodeMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangedConversionCodeMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


