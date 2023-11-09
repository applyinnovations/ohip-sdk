# PutRoomDescriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomDescription** | Pointer to [**ChannelGlobalDescriptionType**](ChannelGlobalDescriptionType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoomDescriptionRequest

`func NewPutRoomDescriptionRequest() *PutRoomDescriptionRequest`

NewPutRoomDescriptionRequest instantiates a new PutRoomDescriptionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoomDescriptionRequestWithDefaults

`func NewPutRoomDescriptionRequestWithDefaults() *PutRoomDescriptionRequest`

NewPutRoomDescriptionRequestWithDefaults instantiates a new PutRoomDescriptionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomDescription

`func (o *PutRoomDescriptionRequest) GetChannelRoomDescription() ChannelGlobalDescriptionType`

GetChannelRoomDescription returns the ChannelRoomDescription field if non-nil, zero value otherwise.

### GetChannelRoomDescriptionOk

`func (o *PutRoomDescriptionRequest) GetChannelRoomDescriptionOk() (*ChannelGlobalDescriptionType, bool)`

GetChannelRoomDescriptionOk returns a tuple with the ChannelRoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomDescription

`func (o *PutRoomDescriptionRequest) SetChannelRoomDescription(v ChannelGlobalDescriptionType)`

SetChannelRoomDescription sets ChannelRoomDescription field to given value.

### HasChannelRoomDescription

`func (o *PutRoomDescriptionRequest) HasChannelRoomDescription() bool`

HasChannelRoomDescription returns a boolean if a field has been set.

### GetLinks

`func (o *PutRoomDescriptionRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoomDescriptionRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoomDescriptionRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoomDescriptionRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoomDescriptionRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoomDescriptionRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoomDescriptionRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoomDescriptionRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


