# BlockRestrictionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActualTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**BlockRestrictionStatus** | Pointer to [**RestrictionStatusType**](RestrictionStatusType.md) |  | [optional] 
**RestrictionDate** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Room Type selected for the block restriction. | [optional] 

## Methods

### NewBlockRestrictionType

`func NewBlockRestrictionType() *BlockRestrictionType`

NewBlockRestrictionType instantiates a new BlockRestrictionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRestrictionTypeWithDefaults

`func NewBlockRestrictionTypeWithDefaults() *BlockRestrictionType`

NewBlockRestrictionTypeWithDefaults instantiates a new BlockRestrictionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActualTimeSpan

`func (o *BlockRestrictionType) GetActualTimeSpan() TimeSpanType`

GetActualTimeSpan returns the ActualTimeSpan field if non-nil, zero value otherwise.

### GetActualTimeSpanOk

`func (o *BlockRestrictionType) GetActualTimeSpanOk() (*TimeSpanType, bool)`

GetActualTimeSpanOk returns a tuple with the ActualTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTimeSpan

`func (o *BlockRestrictionType) SetActualTimeSpan(v TimeSpanType)`

SetActualTimeSpan sets ActualTimeSpan field to given value.

### HasActualTimeSpan

`func (o *BlockRestrictionType) HasActualTimeSpan() bool`

HasActualTimeSpan returns a boolean if a field has been set.

### GetBlockRestrictionStatus

`func (o *BlockRestrictionType) GetBlockRestrictionStatus() RestrictionStatusType`

GetBlockRestrictionStatus returns the BlockRestrictionStatus field if non-nil, zero value otherwise.

### GetBlockRestrictionStatusOk

`func (o *BlockRestrictionType) GetBlockRestrictionStatusOk() (*RestrictionStatusType, bool)`

GetBlockRestrictionStatusOk returns a tuple with the BlockRestrictionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRestrictionStatus

`func (o *BlockRestrictionType) SetBlockRestrictionStatus(v RestrictionStatusType)`

SetBlockRestrictionStatus sets BlockRestrictionStatus field to given value.

### HasBlockRestrictionStatus

`func (o *BlockRestrictionType) HasBlockRestrictionStatus() bool`

HasBlockRestrictionStatus returns a boolean if a field has been set.

### GetRestrictionDate

`func (o *BlockRestrictionType) GetRestrictionDate() TimeSpanDaysOfWeekType`

GetRestrictionDate returns the RestrictionDate field if non-nil, zero value otherwise.

### GetRestrictionDateOk

`func (o *BlockRestrictionType) GetRestrictionDateOk() (*TimeSpanDaysOfWeekType, bool)`

GetRestrictionDateOk returns a tuple with the RestrictionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionDate

`func (o *BlockRestrictionType) SetRestrictionDate(v TimeSpanDaysOfWeekType)`

SetRestrictionDate sets RestrictionDate field to given value.

### HasRestrictionDate

`func (o *BlockRestrictionType) HasRestrictionDate() bool`

HasRestrictionDate returns a boolean if a field has been set.

### GetRoomType

`func (o *BlockRestrictionType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *BlockRestrictionType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *BlockRestrictionType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *BlockRestrictionType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


