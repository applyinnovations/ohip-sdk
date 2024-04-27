# ReservationQueueRoomTypeStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FOStatus** | Pointer to [**[]ReservationQueueRoomTypeStatisticsTypeFOStatusInner**](ReservationQueueRoomTypeStatisticsTypeFOStatusInner.md) | The number of rooms for the room type grouped by their FO status i.e Vacant or Occupied. | [optional] 
**RoomType** | Pointer to **string** | The room type for the statistics. | [optional] 
**TotalInQueue** | Pointer to **int32** | The total number of reservations in Queue for this room type. | [optional] 

## Methods

### NewReservationQueueRoomTypeStatisticsType

`func NewReservationQueueRoomTypeStatisticsType() *ReservationQueueRoomTypeStatisticsType`

NewReservationQueueRoomTypeStatisticsType instantiates a new ReservationQueueRoomTypeStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueueRoomTypeStatisticsTypeWithDefaults

`func NewReservationQueueRoomTypeStatisticsTypeWithDefaults() *ReservationQueueRoomTypeStatisticsType`

NewReservationQueueRoomTypeStatisticsTypeWithDefaults instantiates a new ReservationQueueRoomTypeStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFOStatus

`func (o *ReservationQueueRoomTypeStatisticsType) GetFOStatus() []ReservationQueueRoomTypeStatisticsTypeFOStatusInner`

GetFOStatus returns the FOStatus field if non-nil, zero value otherwise.

### GetFOStatusOk

`func (o *ReservationQueueRoomTypeStatisticsType) GetFOStatusOk() (*[]ReservationQueueRoomTypeStatisticsTypeFOStatusInner, bool)`

GetFOStatusOk returns a tuple with the FOStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFOStatus

`func (o *ReservationQueueRoomTypeStatisticsType) SetFOStatus(v []ReservationQueueRoomTypeStatisticsTypeFOStatusInner)`

SetFOStatus sets FOStatus field to given value.

### HasFOStatus

`func (o *ReservationQueueRoomTypeStatisticsType) HasFOStatus() bool`

HasFOStatus returns a boolean if a field has been set.

### GetRoomType

`func (o *ReservationQueueRoomTypeStatisticsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ReservationQueueRoomTypeStatisticsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ReservationQueueRoomTypeStatisticsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ReservationQueueRoomTypeStatisticsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetTotalInQueue

`func (o *ReservationQueueRoomTypeStatisticsType) GetTotalInQueue() int32`

GetTotalInQueue returns the TotalInQueue field if non-nil, zero value otherwise.

### GetTotalInQueueOk

`func (o *ReservationQueueRoomTypeStatisticsType) GetTotalInQueueOk() (*int32, bool)`

GetTotalInQueueOk returns a tuple with the TotalInQueue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalInQueue

`func (o *ReservationQueueRoomTypeStatisticsType) SetTotalInQueue(v int32)`

SetTotalInQueue sets TotalInQueue field to given value.

### HasTotalInQueue

`func (o *ReservationQueueRoomTypeStatisticsType) HasTotalInQueue() bool`

HasTotalInQueue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


