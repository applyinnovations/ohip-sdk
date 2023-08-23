# PutConversionCodesStatusRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IntegrationSystem** | Pointer to [**IntegrationSystemType**](IntegrationSystemType.md) |  | [optional] 
**ConversionCodesStatus** | Pointer to [**[]ConversionCodeStatusType**](ConversionCodeStatusType.md) | Conversion Code and status information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutConversionCodesStatusRequest

`func NewPutConversionCodesStatusRequest() *PutConversionCodesStatusRequest`

NewPutConversionCodesStatusRequest instantiates a new PutConversionCodesStatusRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConversionCodesStatusRequestWithDefaults

`func NewPutConversionCodesStatusRequestWithDefaults() *PutConversionCodesStatusRequest`

NewPutConversionCodesStatusRequestWithDefaults instantiates a new PutConversionCodesStatusRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIntegrationSystem

`func (o *PutConversionCodesStatusRequest) GetIntegrationSystem() IntegrationSystemType`

GetIntegrationSystem returns the IntegrationSystem field if non-nil, zero value otherwise.

### GetIntegrationSystemOk

`func (o *PutConversionCodesStatusRequest) GetIntegrationSystemOk() (*IntegrationSystemType, bool)`

GetIntegrationSystemOk returns a tuple with the IntegrationSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIntegrationSystem

`func (o *PutConversionCodesStatusRequest) SetIntegrationSystem(v IntegrationSystemType)`

SetIntegrationSystem sets IntegrationSystem field to given value.

### HasIntegrationSystem

`func (o *PutConversionCodesStatusRequest) HasIntegrationSystem() bool`

HasIntegrationSystem returns a boolean if a field has been set.

### GetConversionCodesStatus

`func (o *PutConversionCodesStatusRequest) GetConversionCodesStatus() []ConversionCodeStatusType`

GetConversionCodesStatus returns the ConversionCodesStatus field if non-nil, zero value otherwise.

### GetConversionCodesStatusOk

`func (o *PutConversionCodesStatusRequest) GetConversionCodesStatusOk() (*[]ConversionCodeStatusType, bool)`

GetConversionCodesStatusOk returns a tuple with the ConversionCodesStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodesStatus

`func (o *PutConversionCodesStatusRequest) SetConversionCodesStatus(v []ConversionCodeStatusType)`

SetConversionCodesStatus sets ConversionCodesStatus field to given value.

### HasConversionCodesStatus

`func (o *PutConversionCodesStatusRequest) HasConversionCodesStatus() bool`

HasConversionCodesStatus returns a boolean if a field has been set.

### GetLinks

`func (o *PutConversionCodesStatusRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutConversionCodesStatusRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutConversionCodesStatusRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutConversionCodesStatusRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutConversionCodesStatusRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutConversionCodesStatusRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutConversionCodesStatusRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutConversionCodesStatusRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


