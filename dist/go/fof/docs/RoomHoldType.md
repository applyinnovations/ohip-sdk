# RoomHoldType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HoldUntil** | Pointer to **string** | The date and time when hold will expire. | [optional] 
**HoldUser** | Pointer to **string** | User who placed room on hold. | [optional] 
**Comments** | Pointer to **string** | Comments of the room hold. | [optional] 

## Methods

### NewRoomHoldType

`func NewRoomHoldType() *RoomHoldType`

NewRoomHoldType instantiates a new RoomHoldType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomHoldTypeWithDefaults

`func NewRoomHoldTypeWithDefaults() *RoomHoldType`

NewRoomHoldTypeWithDefaults instantiates a new RoomHoldType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHoldUntil

`func (o *RoomHoldType) GetHoldUntil() string`

GetHoldUntil returns the HoldUntil field if non-nil, zero value otherwise.

### GetHoldUntilOk

`func (o *RoomHoldType) GetHoldUntilOk() (*string, bool)`

GetHoldUntilOk returns a tuple with the HoldUntil field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldUntil

`func (o *RoomHoldType) SetHoldUntil(v string)`

SetHoldUntil sets HoldUntil field to given value.

### HasHoldUntil

`func (o *RoomHoldType) HasHoldUntil() bool`

HasHoldUntil returns a boolean if a field has been set.

### GetHoldUser

`func (o *RoomHoldType) GetHoldUser() string`

GetHoldUser returns the HoldUser field if non-nil, zero value otherwise.

### GetHoldUserOk

`func (o *RoomHoldType) GetHoldUserOk() (*string, bool)`

GetHoldUserOk returns a tuple with the HoldUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldUser

`func (o *RoomHoldType) SetHoldUser(v string)`

SetHoldUser sets HoldUser field to given value.

### HasHoldUser

`func (o *RoomHoldType) HasHoldUser() bool`

HasHoldUser returns a boolean if a field has been set.

### GetComments

`func (o *RoomHoldType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *RoomHoldType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *RoomHoldType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *RoomHoldType) HasComments() bool`

HasComments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


