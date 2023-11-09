# PutChannelRoomMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomMapping** | Pointer to [**ChannelRoomMappingType**](ChannelRoomMappingType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutChannelRoomMappingRequest

`func NewPutChannelRoomMappingRequest() *PutChannelRoomMappingRequest`

NewPutChannelRoomMappingRequest instantiates a new PutChannelRoomMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelRoomMappingRequestWithDefaults

`func NewPutChannelRoomMappingRequestWithDefaults() *PutChannelRoomMappingRequest`

NewPutChannelRoomMappingRequestWithDefaults instantiates a new PutChannelRoomMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomMapping

`func (o *PutChannelRoomMappingRequest) GetChannelRoomMapping() ChannelRoomMappingType`

GetChannelRoomMapping returns the ChannelRoomMapping field if non-nil, zero value otherwise.

### GetChannelRoomMappingOk

`func (o *PutChannelRoomMappingRequest) GetChannelRoomMappingOk() (*ChannelRoomMappingType, bool)`

GetChannelRoomMappingOk returns a tuple with the ChannelRoomMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomMapping

`func (o *PutChannelRoomMappingRequest) SetChannelRoomMapping(v ChannelRoomMappingType)`

SetChannelRoomMapping sets ChannelRoomMapping field to given value.

### HasChannelRoomMapping

`func (o *PutChannelRoomMappingRequest) HasChannelRoomMapping() bool`

HasChannelRoomMapping returns a boolean if a field has been set.

### GetLinks

`func (o *PutChannelRoomMappingRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelRoomMappingRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelRoomMappingRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelRoomMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelRoomMappingRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelRoomMappingRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelRoomMappingRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelRoomMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


