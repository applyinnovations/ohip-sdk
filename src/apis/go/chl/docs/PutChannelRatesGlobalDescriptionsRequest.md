# PutChannelRatesGlobalDescriptionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelGlobalDescriptions** | Pointer to [**[]GenericGlobalDescriptionType**](GenericGlobalDescriptionType.md) | Collection of GDS channel Global description types | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelRatesGlobalDescriptionsRequest

`func NewPutChannelRatesGlobalDescriptionsRequest() *PutChannelRatesGlobalDescriptionsRequest`

NewPutChannelRatesGlobalDescriptionsRequest instantiates a new PutChannelRatesGlobalDescriptionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelRatesGlobalDescriptionsRequestWithDefaults

`func NewPutChannelRatesGlobalDescriptionsRequestWithDefaults() *PutChannelRatesGlobalDescriptionsRequest`

NewPutChannelRatesGlobalDescriptionsRequestWithDefaults instantiates a new PutChannelRatesGlobalDescriptionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelGlobalDescriptions

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetChannelGlobalDescriptions() []GenericGlobalDescriptionType`

GetChannelGlobalDescriptions returns the ChannelGlobalDescriptions field if non-nil, zero value otherwise.

### GetChannelGlobalDescriptionsOk

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetChannelGlobalDescriptionsOk() (*[]GenericGlobalDescriptionType, bool)`

GetChannelGlobalDescriptionsOk returns a tuple with the ChannelGlobalDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelGlobalDescriptions

`func (o *PutChannelRatesGlobalDescriptionsRequest) SetChannelGlobalDescriptions(v []GenericGlobalDescriptionType)`

SetChannelGlobalDescriptions sets ChannelGlobalDescriptions field to given value.

### HasChannelGlobalDescriptions

`func (o *PutChannelRatesGlobalDescriptionsRequest) HasChannelGlobalDescriptions() bool`

HasChannelGlobalDescriptions returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelRatesGlobalDescriptionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelRatesGlobalDescriptionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelRatesGlobalDescriptionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelRatesGlobalDescriptionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelRatesGlobalDescriptionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


