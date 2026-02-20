# TrackItReservationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**GuestInfo** | Pointer to [**ResGuestInfoType**](ResGuestInfoType.md) |  | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**RoomId** | Pointer to **string** |  | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**ComputedReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 

## Methods

### NewTrackItReservationInfoType

`func NewTrackItReservationInfoType() *TrackItReservationInfoType`

NewTrackItReservationInfoType instantiates a new TrackItReservationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItReservationInfoTypeWithDefaults

`func NewTrackItReservationInfoTypeWithDefaults() *TrackItReservationInfoType`

NewTrackItReservationInfoTypeWithDefaults instantiates a new TrackItReservationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *TrackItReservationInfoType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *TrackItReservationInfoType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *TrackItReservationInfoType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *TrackItReservationInfoType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetTimeSpan

`func (o *TrackItReservationInfoType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *TrackItReservationInfoType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *TrackItReservationInfoType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *TrackItReservationInfoType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetGuestInfo

`func (o *TrackItReservationInfoType) GetGuestInfo() ResGuestInfoType`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *TrackItReservationInfoType) GetGuestInfoOk() (*ResGuestInfoType, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *TrackItReservationInfoType) SetGuestInfo(v ResGuestInfoType)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *TrackItReservationInfoType) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetRoomType

`func (o *TrackItReservationInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *TrackItReservationInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *TrackItReservationInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *TrackItReservationInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomId

`func (o *TrackItReservationInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *TrackItReservationInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *TrackItReservationInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *TrackItReservationInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomStatus

`func (o *TrackItReservationInfoType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *TrackItReservationInfoType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *TrackItReservationInfoType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *TrackItReservationInfoType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetGuarantee

`func (o *TrackItReservationInfoType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *TrackItReservationInfoType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *TrackItReservationInfoType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *TrackItReservationInfoType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetReservationStatus

`func (o *TrackItReservationInfoType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *TrackItReservationInfoType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *TrackItReservationInfoType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *TrackItReservationInfoType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetComputedReservationStatus

`func (o *TrackItReservationInfoType) GetComputedReservationStatus() PMSResStatusType`

GetComputedReservationStatus returns the ComputedReservationStatus field if non-nil, zero value otherwise.

### GetComputedReservationStatusOk

`func (o *TrackItReservationInfoType) GetComputedReservationStatusOk() (*PMSResStatusType, bool)`

GetComputedReservationStatusOk returns a tuple with the ComputedReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComputedReservationStatus

`func (o *TrackItReservationInfoType) SetComputedReservationStatus(v PMSResStatusType)`

SetComputedReservationStatus sets ComputedReservationStatus field to given value.

### HasComputedReservationStatus

`func (o *TrackItReservationInfoType) HasComputedReservationStatus() bool`

HasComputedReservationStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


