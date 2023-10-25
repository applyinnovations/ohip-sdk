# PutNumberDescriptionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NumberDescriptions** | Pointer to [**[]NumberDescriptionType**](NumberDescriptionType.md) | Individual number and description. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutNumberDescriptionsRequest

`func NewPutNumberDescriptionsRequest() *PutNumberDescriptionsRequest`

NewPutNumberDescriptionsRequest instantiates a new PutNumberDescriptionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutNumberDescriptionsRequestWithDefaults

`func NewPutNumberDescriptionsRequestWithDefaults() *PutNumberDescriptionsRequest`

NewPutNumberDescriptionsRequestWithDefaults instantiates a new PutNumberDescriptionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutNumberDescriptionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutNumberDescriptionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutNumberDescriptionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutNumberDescriptionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNumberDescriptions

`func (o *PutNumberDescriptionsRequest) GetNumberDescriptions() []NumberDescriptionType`

GetNumberDescriptions returns the NumberDescriptions field if non-nil, zero value otherwise.

### GetNumberDescriptionsOk

`func (o *PutNumberDescriptionsRequest) GetNumberDescriptionsOk() (*[]NumberDescriptionType, bool)`

GetNumberDescriptionsOk returns a tuple with the NumberDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberDescriptions

`func (o *PutNumberDescriptionsRequest) SetNumberDescriptions(v []NumberDescriptionType)`

SetNumberDescriptions sets NumberDescriptions field to given value.

### HasNumberDescriptions

`func (o *PutNumberDescriptionsRequest) HasNumberDescriptions() bool`

HasNumberDescriptions returns a boolean if a field has been set.

### GetWarnings

`func (o *PutNumberDescriptionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutNumberDescriptionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutNumberDescriptionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutNumberDescriptionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


