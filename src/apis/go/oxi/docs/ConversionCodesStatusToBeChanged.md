# ConversionCodesStatusToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSystem** | Pointer to [**IntegrationSystemType**](IntegrationSystemType.md) |  | [optional] 
**ConversionCodesStatus** | Pointer to [**[]ConversionCodeStatusType**](ConversionCodeStatusType.md) | Conversion Code and status information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewConversionCodesStatusToBeChanged

`func NewConversionCodesStatusToBeChanged() *ConversionCodesStatusToBeChanged`

NewConversionCodesStatusToBeChanged instantiates a new ConversionCodesStatusToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConversionCodesStatusToBeChangedWithDefaults

`func NewConversionCodesStatusToBeChangedWithDefaults() *ConversionCodesStatusToBeChanged`

NewConversionCodesStatusToBeChangedWithDefaults instantiates a new ConversionCodesStatusToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSystem

`func (o *ConversionCodesStatusToBeChanged) GetIntegrationSystem() IntegrationSystemType`

GetIntegrationSystem returns the IntegrationSystem field if non-nil, zero value otherwise.

### GetIntegrationSystemOk

`func (o *ConversionCodesStatusToBeChanged) GetIntegrationSystemOk() (*IntegrationSystemType, bool)`

GetIntegrationSystemOk returns a tuple with the IntegrationSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSystem

`func (o *ConversionCodesStatusToBeChanged) SetIntegrationSystem(v IntegrationSystemType)`

SetIntegrationSystem sets IntegrationSystem field to given value.

### HasIntegrationSystem

`func (o *ConversionCodesStatusToBeChanged) HasIntegrationSystem() bool`

HasIntegrationSystem returns a boolean if a field has been set.

### GetConversionCodesStatus

`func (o *ConversionCodesStatusToBeChanged) GetConversionCodesStatus() []ConversionCodeStatusType`

GetConversionCodesStatus returns the ConversionCodesStatus field if non-nil, zero value otherwise.

### GetConversionCodesStatusOk

`func (o *ConversionCodesStatusToBeChanged) GetConversionCodesStatusOk() (*[]ConversionCodeStatusType, bool)`

GetConversionCodesStatusOk returns a tuple with the ConversionCodesStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodesStatus

`func (o *ConversionCodesStatusToBeChanged) SetConversionCodesStatus(v []ConversionCodeStatusType)`

SetConversionCodesStatus sets ConversionCodesStatus field to given value.

### HasConversionCodesStatus

`func (o *ConversionCodesStatusToBeChanged) HasConversionCodesStatus() bool`

HasConversionCodesStatus returns a boolean if a field has been set.

### GetLinks

`func (o *ConversionCodesStatusToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConversionCodesStatusToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConversionCodesStatusToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConversionCodesStatusToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ConversionCodesStatusToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConversionCodesStatusToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConversionCodesStatusToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConversionCodesStatusToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


