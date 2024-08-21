# RestrictionInfoStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Booking channel code of actual restriction. | [optional] 
**Code** | Pointer to [**RestrictionStatusesType**](RestrictionStatusesType.md) |  | [optional] 
**LOS1** | Pointer to **bool** | Indicates Length of Stay 1 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS2** | Pointer to **bool** | Indicates Length of Stay 2 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS3** | Pointer to **bool** | Indicates Length of Stay 3 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS4** | Pointer to **bool** | Indicates Length of Stay 4 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS5** | Pointer to **bool** | Indicates Length of Stay 5 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS6** | Pointer to **bool** | Indicates Length of Stay 6 is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**LOS7** | Pointer to **bool** | Indicates Length of Stay 7 or more is not available. Defines restriction in conjunction with Restriction Code LOSNotAvailable. | [optional] 
**RateCategory** | Pointer to **string** | Rate Category of actual restriction. | [optional] 
**RateCode** | Pointer to **string** | Rate Code of actual restriction. | [optional] 
**RoomClass** | Pointer to **string** | Room Class of actual restriction. | [optional] 
**RoomType** | Pointer to **string** | Room Type of actual restriction. | [optional] 
**Unit** | Pointer to **int32** | Defines restriction in conjunction with Restriction Code. Value must be specified for Restriction Codes MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking. | [optional] 

## Methods

### NewRestrictionInfoStatusType

`func NewRestrictionInfoStatusType() *RestrictionInfoStatusType`

NewRestrictionInfoStatusType instantiates a new RestrictionInfoStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionInfoStatusTypeWithDefaults

`func NewRestrictionInfoStatusTypeWithDefaults() *RestrictionInfoStatusType`

NewRestrictionInfoStatusTypeWithDefaults instantiates a new RestrictionInfoStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *RestrictionInfoStatusType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *RestrictionInfoStatusType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *RestrictionInfoStatusType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *RestrictionInfoStatusType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetCode

`func (o *RestrictionInfoStatusType) GetCode() RestrictionStatusesType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RestrictionInfoStatusType) GetCodeOk() (*RestrictionStatusesType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RestrictionInfoStatusType) SetCode(v RestrictionStatusesType)`

SetCode sets Code field to given value.

### HasCode

`func (o *RestrictionInfoStatusType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetLOS1

`func (o *RestrictionInfoStatusType) GetLOS1() bool`

GetLOS1 returns the LOS1 field if non-nil, zero value otherwise.

### GetLOS1Ok

`func (o *RestrictionInfoStatusType) GetLOS1Ok() (*bool, bool)`

GetLOS1Ok returns a tuple with the LOS1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS1

`func (o *RestrictionInfoStatusType) SetLOS1(v bool)`

SetLOS1 sets LOS1 field to given value.

### HasLOS1

`func (o *RestrictionInfoStatusType) HasLOS1() bool`

HasLOS1 returns a boolean if a field has been set.

### GetLOS2

`func (o *RestrictionInfoStatusType) GetLOS2() bool`

GetLOS2 returns the LOS2 field if non-nil, zero value otherwise.

### GetLOS2Ok

`func (o *RestrictionInfoStatusType) GetLOS2Ok() (*bool, bool)`

GetLOS2Ok returns a tuple with the LOS2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS2

`func (o *RestrictionInfoStatusType) SetLOS2(v bool)`

SetLOS2 sets LOS2 field to given value.

### HasLOS2

`func (o *RestrictionInfoStatusType) HasLOS2() bool`

HasLOS2 returns a boolean if a field has been set.

### GetLOS3

`func (o *RestrictionInfoStatusType) GetLOS3() bool`

GetLOS3 returns the LOS3 field if non-nil, zero value otherwise.

### GetLOS3Ok

`func (o *RestrictionInfoStatusType) GetLOS3Ok() (*bool, bool)`

GetLOS3Ok returns a tuple with the LOS3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS3

`func (o *RestrictionInfoStatusType) SetLOS3(v bool)`

SetLOS3 sets LOS3 field to given value.

### HasLOS3

`func (o *RestrictionInfoStatusType) HasLOS3() bool`

HasLOS3 returns a boolean if a field has been set.

### GetLOS4

`func (o *RestrictionInfoStatusType) GetLOS4() bool`

GetLOS4 returns the LOS4 field if non-nil, zero value otherwise.

### GetLOS4Ok

`func (o *RestrictionInfoStatusType) GetLOS4Ok() (*bool, bool)`

GetLOS4Ok returns a tuple with the LOS4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS4

`func (o *RestrictionInfoStatusType) SetLOS4(v bool)`

SetLOS4 sets LOS4 field to given value.

### HasLOS4

`func (o *RestrictionInfoStatusType) HasLOS4() bool`

HasLOS4 returns a boolean if a field has been set.

### GetLOS5

`func (o *RestrictionInfoStatusType) GetLOS5() bool`

GetLOS5 returns the LOS5 field if non-nil, zero value otherwise.

### GetLOS5Ok

`func (o *RestrictionInfoStatusType) GetLOS5Ok() (*bool, bool)`

GetLOS5Ok returns a tuple with the LOS5 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS5

`func (o *RestrictionInfoStatusType) SetLOS5(v bool)`

SetLOS5 sets LOS5 field to given value.

### HasLOS5

`func (o *RestrictionInfoStatusType) HasLOS5() bool`

HasLOS5 returns a boolean if a field has been set.

### GetLOS6

`func (o *RestrictionInfoStatusType) GetLOS6() bool`

GetLOS6 returns the LOS6 field if non-nil, zero value otherwise.

### GetLOS6Ok

`func (o *RestrictionInfoStatusType) GetLOS6Ok() (*bool, bool)`

GetLOS6Ok returns a tuple with the LOS6 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS6

`func (o *RestrictionInfoStatusType) SetLOS6(v bool)`

SetLOS6 sets LOS6 field to given value.

### HasLOS6

`func (o *RestrictionInfoStatusType) HasLOS6() bool`

HasLOS6 returns a boolean if a field has been set.

### GetLOS7

`func (o *RestrictionInfoStatusType) GetLOS7() bool`

GetLOS7 returns the LOS7 field if non-nil, zero value otherwise.

### GetLOS7Ok

`func (o *RestrictionInfoStatusType) GetLOS7Ok() (*bool, bool)`

GetLOS7Ok returns a tuple with the LOS7 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLOS7

`func (o *RestrictionInfoStatusType) SetLOS7(v bool)`

SetLOS7 sets LOS7 field to given value.

### HasLOS7

`func (o *RestrictionInfoStatusType) HasLOS7() bool`

HasLOS7 returns a boolean if a field has been set.

### GetRateCategory

`func (o *RestrictionInfoStatusType) GetRateCategory() string`

GetRateCategory returns the RateCategory field if non-nil, zero value otherwise.

### GetRateCategoryOk

`func (o *RestrictionInfoStatusType) GetRateCategoryOk() (*string, bool)`

GetRateCategoryOk returns a tuple with the RateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategory

`func (o *RestrictionInfoStatusType) SetRateCategory(v string)`

SetRateCategory sets RateCategory field to given value.

### HasRateCategory

`func (o *RestrictionInfoStatusType) HasRateCategory() bool`

HasRateCategory returns a boolean if a field has been set.

### GetRateCode

`func (o *RestrictionInfoStatusType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RestrictionInfoStatusType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RestrictionInfoStatusType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RestrictionInfoStatusType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRoomClass

`func (o *RestrictionInfoStatusType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RestrictionInfoStatusType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RestrictionInfoStatusType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RestrictionInfoStatusType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *RestrictionInfoStatusType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RestrictionInfoStatusType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RestrictionInfoStatusType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RestrictionInfoStatusType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetUnit

`func (o *RestrictionInfoStatusType) GetUnit() int32`

GetUnit returns the Unit field if non-nil, zero value otherwise.

### GetUnitOk

`func (o *RestrictionInfoStatusType) GetUnitOk() (*int32, bool)`

GetUnitOk returns a tuple with the Unit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnit

`func (o *RestrictionInfoStatusType) SetUnit(v int32)`

SetUnit sets Unit field to given value.

### HasUnit

`func (o *RestrictionInfoStatusType) HasUnit() bool`

HasUnit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


