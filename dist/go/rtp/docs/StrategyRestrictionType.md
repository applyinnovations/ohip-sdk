# StrategyRestrictionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateCategory** | Pointer to **string** | Rate category for the strategy. | [optional] 
**RateCode** | Pointer to **string** | Rate code for the strategy. | [optional] 
**RateClass** | Pointer to **string** | Rate class for the strategy. | [optional] 
**RoomClass** | Pointer to **string** | Room class for the strategy. | [optional] 
**RoomType** | Pointer to **string** | Room Type for the strategy. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms for this room type. | [optional] 
**RestrictionRange** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**Status** | Pointer to [**StrategyRestrictionStatusesType**](StrategyRestrictionStatusesType.md) |  | [optional] 
**Unit** | Pointer to **int32** | Defines restriction in conjunction with Status. Value must be specified for Status MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. | [optional] 

## Methods

### NewStrategyRestrictionType

`func NewStrategyRestrictionType() *StrategyRestrictionType`

NewStrategyRestrictionType instantiates a new StrategyRestrictionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStrategyRestrictionTypeWithDefaults

`func NewStrategyRestrictionTypeWithDefaults() *StrategyRestrictionType`

NewStrategyRestrictionTypeWithDefaults instantiates a new StrategyRestrictionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateCategory

`func (o *StrategyRestrictionType) GetRateCategory() string`

GetRateCategory returns the RateCategory field if non-nil, zero value otherwise.

### GetRateCategoryOk

`func (o *StrategyRestrictionType) GetRateCategoryOk() (*string, bool)`

GetRateCategoryOk returns a tuple with the RateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategory

`func (o *StrategyRestrictionType) SetRateCategory(v string)`

SetRateCategory sets RateCategory field to given value.

### HasRateCategory

`func (o *StrategyRestrictionType) HasRateCategory() bool`

HasRateCategory returns a boolean if a field has been set.

### GetRateCode

`func (o *StrategyRestrictionType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *StrategyRestrictionType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *StrategyRestrictionType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *StrategyRestrictionType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateClass

`func (o *StrategyRestrictionType) GetRateClass() string`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *StrategyRestrictionType) GetRateClassOk() (*string, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *StrategyRestrictionType) SetRateClass(v string)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *StrategyRestrictionType) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetRoomClass

`func (o *StrategyRestrictionType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *StrategyRestrictionType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *StrategyRestrictionType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *StrategyRestrictionType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *StrategyRestrictionType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *StrategyRestrictionType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *StrategyRestrictionType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *StrategyRestrictionType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *StrategyRestrictionType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *StrategyRestrictionType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *StrategyRestrictionType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *StrategyRestrictionType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetRestrictionRange

`func (o *StrategyRestrictionType) GetRestrictionRange() TimeSpanDaysOfWeekType`

GetRestrictionRange returns the RestrictionRange field if non-nil, zero value otherwise.

### GetRestrictionRangeOk

`func (o *StrategyRestrictionType) GetRestrictionRangeOk() (*TimeSpanDaysOfWeekType, bool)`

GetRestrictionRangeOk returns a tuple with the RestrictionRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionRange

`func (o *StrategyRestrictionType) SetRestrictionRange(v TimeSpanDaysOfWeekType)`

SetRestrictionRange sets RestrictionRange field to given value.

### HasRestrictionRange

`func (o *StrategyRestrictionType) HasRestrictionRange() bool`

HasRestrictionRange returns a boolean if a field has been set.

### GetStatus

`func (o *StrategyRestrictionType) GetStatus() StrategyRestrictionStatusesType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StrategyRestrictionType) GetStatusOk() (*StrategyRestrictionStatusesType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StrategyRestrictionType) SetStatus(v StrategyRestrictionStatusesType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StrategyRestrictionType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetUnit

`func (o *StrategyRestrictionType) GetUnit() int32`

GetUnit returns the Unit field if non-nil, zero value otherwise.

### GetUnitOk

`func (o *StrategyRestrictionType) GetUnitOk() (*int32, bool)`

GetUnitOk returns a tuple with the Unit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnit

`func (o *StrategyRestrictionType) SetUnit(v int32)`

SetUnit sets Unit field to given value.

### HasUnit

`func (o *StrategyRestrictionType) HasUnit() bool`

HasUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


