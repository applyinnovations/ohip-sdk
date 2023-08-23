# PutChannelCardTypeMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelCardTypeMapping** | Pointer to [**ChannelCardTypeMappingType**](ChannelCardTypeMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelCardTypeMappingRequest

`func NewPutChannelCardTypeMappingRequest() *PutChannelCardTypeMappingRequest`

NewPutChannelCardTypeMappingRequest instantiates a new PutChannelCardTypeMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelCardTypeMappingRequestWithDefaults

`func NewPutChannelCardTypeMappingRequestWithDefaults() *PutChannelCardTypeMappingRequest`

NewPutChannelCardTypeMappingRequestWithDefaults instantiates a new PutChannelCardTypeMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelCardTypeMapping

`func (o *PutChannelCardTypeMappingRequest) GetChannelCardTypeMapping() ChannelCardTypeMappingType`

GetChannelCardTypeMapping returns the ChannelCardTypeMapping field if non-nil, zero value otherwise.

### GetChannelCardTypeMappingOk

`func (o *PutChannelCardTypeMappingRequest) GetChannelCardTypeMappingOk() (*ChannelCardTypeMappingType, bool)`

GetChannelCardTypeMappingOk returns a tuple with the ChannelCardTypeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCardTypeMapping

`func (o *PutChannelCardTypeMappingRequest) SetChannelCardTypeMapping(v ChannelCardTypeMappingType)`

SetChannelCardTypeMapping sets ChannelCardTypeMapping field to given value.

### HasChannelCardTypeMapping

`func (o *PutChannelCardTypeMappingRequest) HasChannelCardTypeMapping() bool`

HasChannelCardTypeMapping returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelCardTypeMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelCardTypeMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelCardTypeMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelCardTypeMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelCardTypeMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelCardTypeMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelCardTypeMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelCardTypeMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


