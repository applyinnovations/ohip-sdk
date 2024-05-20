# RatePlanChannelInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlanId** | Pointer to [**RatePlanChannelInfoTypeRatePlanId**](RatePlanChannelInfoTypeRatePlanId.md) |  | [optional] 
**RatePlanLevel** | Pointer to **string** | All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level. | [optional] 
**RatePlanWebName** | Pointer to **string** | To populate the RatePlanName, setup for the channel. | [optional] 

## Methods

### NewRatePlanChannelInfoType

`func NewRatePlanChannelInfoType() *RatePlanChannelInfoType`

NewRatePlanChannelInfoType instantiates a new RatePlanChannelInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanChannelInfoTypeWithDefaults

`func NewRatePlanChannelInfoTypeWithDefaults() *RatePlanChannelInfoType`

NewRatePlanChannelInfoTypeWithDefaults instantiates a new RatePlanChannelInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlanId

`func (o *RatePlanChannelInfoType) GetRatePlanId() RatePlanChannelInfoTypeRatePlanId`

GetRatePlanId returns the RatePlanId field if non-nil, zero value otherwise.

### GetRatePlanIdOk

`func (o *RatePlanChannelInfoType) GetRatePlanIdOk() (*RatePlanChannelInfoTypeRatePlanId, bool)`

GetRatePlanIdOk returns a tuple with the RatePlanId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanId

`func (o *RatePlanChannelInfoType) SetRatePlanId(v RatePlanChannelInfoTypeRatePlanId)`

SetRatePlanId sets RatePlanId field to given value.

### HasRatePlanId

`func (o *RatePlanChannelInfoType) HasRatePlanId() bool`

HasRatePlanId returns a boolean if a field has been set.

### GetRatePlanLevel

`func (o *RatePlanChannelInfoType) GetRatePlanLevel() string`

GetRatePlanLevel returns the RatePlanLevel field if non-nil, zero value otherwise.

### GetRatePlanLevelOk

`func (o *RatePlanChannelInfoType) GetRatePlanLevelOk() (*string, bool)`

GetRatePlanLevelOk returns a tuple with the RatePlanLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanLevel

`func (o *RatePlanChannelInfoType) SetRatePlanLevel(v string)`

SetRatePlanLevel sets RatePlanLevel field to given value.

### HasRatePlanLevel

`func (o *RatePlanChannelInfoType) HasRatePlanLevel() bool`

HasRatePlanLevel returns a boolean if a field has been set.

### GetRatePlanWebName

`func (o *RatePlanChannelInfoType) GetRatePlanWebName() string`

GetRatePlanWebName returns the RatePlanWebName field if non-nil, zero value otherwise.

### GetRatePlanWebNameOk

`func (o *RatePlanChannelInfoType) GetRatePlanWebNameOk() (*string, bool)`

GetRatePlanWebNameOk returns a tuple with the RatePlanWebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanWebName

`func (o *RatePlanChannelInfoType) SetRatePlanWebName(v string)`

SetRatePlanWebName sets RatePlanWebName field to given value.

### HasRatePlanWebName

`func (o *RatePlanChannelInfoType) HasRatePlanWebName() bool`

HasRatePlanWebName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


