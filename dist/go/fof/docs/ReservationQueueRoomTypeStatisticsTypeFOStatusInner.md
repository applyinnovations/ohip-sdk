# ReservationQueueRoomTypeStatisticsTypeFOStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomStatus** | Pointer to [**[]ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner**](ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner.md) | The total number of rooms for the room type grouped by their Room Status i.e Clean, Dirty etc.. | [optional] 
**FrontOfficeStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 
**TotalRooms** | Pointer to **int32** | The total number of rooms for the Front Office status. | [optional] 

## Methods

### NewReservationQueueRoomTypeStatisticsTypeFOStatusInner

`func NewReservationQueueRoomTypeStatisticsTypeFOStatusInner() *ReservationQueueRoomTypeStatisticsTypeFOStatusInner`

NewReservationQueueRoomTypeStatisticsTypeFOStatusInner instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerWithDefaults

`func NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerWithDefaults() *ReservationQueueRoomTypeStatisticsTypeFOStatusInner`

NewReservationQueueRoomTypeStatisticsTypeFOStatusInnerWithDefaults instantiates a new ReservationQueueRoomTypeStatisticsTypeFOStatusInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetRoomStatus() []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetRoomStatusOk() (*[]ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetRoomStatus(v []ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetFrontOfficeStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetFrontOfficeStatus() FrontOfficeRoomStatusType`

GetFrontOfficeStatus returns the FrontOfficeStatus field if non-nil, zero value otherwise.

### GetFrontOfficeStatusOk

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetFrontOfficeStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetFrontOfficeStatusOk returns a tuple with the FrontOfficeStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontOfficeStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetFrontOfficeStatus(v FrontOfficeRoomStatusType)`

SetFrontOfficeStatus sets FrontOfficeStatus field to given value.

### HasFrontOfficeStatus

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasFrontOfficeStatus() bool`

HasFrontOfficeStatus returns a boolean if a field has been set.

### GetTotalRooms

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetTotalRooms() int32`

GetTotalRooms returns the TotalRooms field if non-nil, zero value otherwise.

### GetTotalRoomsOk

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) GetTotalRoomsOk() (*int32, bool)`

GetTotalRoomsOk returns a tuple with the TotalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRooms

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) SetTotalRooms(v int32)`

SetTotalRooms sets TotalRooms field to given value.

### HasTotalRooms

`func (o *ReservationQueueRoomTypeStatisticsTypeFOStatusInner) HasTotalRooms() bool`

HasTotalRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


