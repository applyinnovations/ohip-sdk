# PutChannelGuaranteeCodeMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelGuaranteeCodeMapping** | Pointer to [**ChannelGuaranteeCodeMappingType**](ChannelGuaranteeCodeMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelGuaranteeCodeMappingRequest

`func NewPutChannelGuaranteeCodeMappingRequest() *PutChannelGuaranteeCodeMappingRequest`

NewPutChannelGuaranteeCodeMappingRequest instantiates a new PutChannelGuaranteeCodeMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelGuaranteeCodeMappingRequestWithDefaults

`func NewPutChannelGuaranteeCodeMappingRequestWithDefaults() *PutChannelGuaranteeCodeMappingRequest`

NewPutChannelGuaranteeCodeMappingRequestWithDefaults instantiates a new PutChannelGuaranteeCodeMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelGuaranteeCodeMapping

`func (o *PutChannelGuaranteeCodeMappingRequest) GetChannelGuaranteeCodeMapping() ChannelGuaranteeCodeMappingType`

GetChannelGuaranteeCodeMapping returns the ChannelGuaranteeCodeMapping field if non-nil, zero value otherwise.

### GetChannelGuaranteeCodeMappingOk

`func (o *PutChannelGuaranteeCodeMappingRequest) GetChannelGuaranteeCodeMappingOk() (*ChannelGuaranteeCodeMappingType, bool)`

GetChannelGuaranteeCodeMappingOk returns a tuple with the ChannelGuaranteeCodeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelGuaranteeCodeMapping

`func (o *PutChannelGuaranteeCodeMappingRequest) SetChannelGuaranteeCodeMapping(v ChannelGuaranteeCodeMappingType)`

SetChannelGuaranteeCodeMapping sets ChannelGuaranteeCodeMapping field to given value.

### HasChannelGuaranteeCodeMapping

`func (o *PutChannelGuaranteeCodeMappingRequest) HasChannelGuaranteeCodeMapping() bool`

HasChannelGuaranteeCodeMapping returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelGuaranteeCodeMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelGuaranteeCodeMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelGuaranteeCodeMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelGuaranteeCodeMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelGuaranteeCodeMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelGuaranteeCodeMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelGuaranteeCodeMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelGuaranteeCodeMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


