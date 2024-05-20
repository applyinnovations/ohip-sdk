# RateTierType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndLOS** | Pointer to **int32** | The ending length of stay days. This is not a required field. | [optional] 
**StartLOS** | Pointer to **int32** | The starting length of stay days. This is a required field. | [optional] 
**TierID** | Pointer to **int32** |  | [optional] 

## Methods

### NewRateTierType

`func NewRateTierType() *RateTierType`

NewRateTierType instantiates a new RateTierType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateTierTypeWithDefaults

`func NewRateTierTypeWithDefaults() *RateTierType`

NewRateTierTypeWithDefaults instantiates a new RateTierType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndLOS

`func (o *RateTierType) GetEndLOS() int32`

GetEndLOS returns the EndLOS field if non-nil, zero value otherwise.

### GetEndLOSOk

`func (o *RateTierType) GetEndLOSOk() (*int32, bool)`

GetEndLOSOk returns a tuple with the EndLOS field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndLOS

`func (o *RateTierType) SetEndLOS(v int32)`

SetEndLOS sets EndLOS field to given value.

### HasEndLOS

`func (o *RateTierType) HasEndLOS() bool`

HasEndLOS returns a boolean if a field has been set.

### GetStartLOS

`func (o *RateTierType) GetStartLOS() int32`

GetStartLOS returns the StartLOS field if non-nil, zero value otherwise.

### GetStartLOSOk

`func (o *RateTierType) GetStartLOSOk() (*int32, bool)`

GetStartLOSOk returns a tuple with the StartLOS field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartLOS

`func (o *RateTierType) SetStartLOS(v int32)`

SetStartLOS sets StartLOS field to given value.

### HasStartLOS

`func (o *RateTierType) HasStartLOS() bool`

HasStartLOS returns a boolean if a field has been set.

### GetTierID

`func (o *RateTierType) GetTierID() int32`

GetTierID returns the TierID field if non-nil, zero value otherwise.

### GetTierIDOk

`func (o *RateTierType) GetTierIDOk() (*int32, bool)`

GetTierIDOk returns a tuple with the TierID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierID

`func (o *RateTierType) SetTierID(v int32)`

SetTierID sets TierID field to given value.

### HasTierID

`func (o *RateTierType) HasTierID() bool`

HasTierID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


