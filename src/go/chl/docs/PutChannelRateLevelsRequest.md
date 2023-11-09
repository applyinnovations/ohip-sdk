# PutChannelRateLevelsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RateLevels** | Pointer to [**ChannelRateLevelsRateLevels**](ChannelRateLevelsRateLevels.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutChannelRateLevelsRequest

`func NewPutChannelRateLevelsRequest() *PutChannelRateLevelsRequest`

NewPutChannelRateLevelsRequest instantiates a new PutChannelRateLevelsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelRateLevelsRequestWithDefaults

`func NewPutChannelRateLevelsRequestWithDefaults() *PutChannelRateLevelsRequest`

NewPutChannelRateLevelsRequestWithDefaults instantiates a new PutChannelRateLevelsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutChannelRateLevelsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelRateLevelsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelRateLevelsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelRateLevelsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateLevels

`func (o *PutChannelRateLevelsRequest) GetRateLevels() ChannelRateLevelsRateLevels`

GetRateLevels returns the RateLevels field if non-nil, zero value otherwise.

### GetRateLevelsOk

`func (o *PutChannelRateLevelsRequest) GetRateLevelsOk() (*ChannelRateLevelsRateLevels, bool)`

GetRateLevelsOk returns a tuple with the RateLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevels

`func (o *PutChannelRateLevelsRequest) SetRateLevels(v ChannelRateLevelsRateLevels)`

SetRateLevels sets RateLevels field to given value.

### HasRateLevels

`func (o *PutChannelRateLevelsRequest) HasRateLevels() bool`

HasRateLevels returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelRateLevelsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelRateLevelsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelRateLevelsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelRateLevelsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


