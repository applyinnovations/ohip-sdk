# ReservationQueueStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AverageQueueTimeCurrentReservations** | Pointer to **int32** | The average time, in seconds, of the reservations currently in queue. | [optional] 
**AverageQueueTimeToCheckIn** | Pointer to **int32** | The average time, in seconds, a reservation was on queue prior to Check-In. | [optional] 
**RoomType** | Pointer to [**[]ReservationQueueRoomTypeStatisticsType**](ReservationQueueRoomTypeStatisticsType.md) | Room Type statistics for the reservations currently in Queue for Check-In. | [optional] 

## Methods

### NewReservationQueueStatisticsType

`func NewReservationQueueStatisticsType() *ReservationQueueStatisticsType`

NewReservationQueueStatisticsType instantiates a new ReservationQueueStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueueStatisticsTypeWithDefaults

`func NewReservationQueueStatisticsTypeWithDefaults() *ReservationQueueStatisticsType`

NewReservationQueueStatisticsTypeWithDefaults instantiates a new ReservationQueueStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAverageQueueTimeCurrentReservations

`func (o *ReservationQueueStatisticsType) GetAverageQueueTimeCurrentReservations() int32`

GetAverageQueueTimeCurrentReservations returns the AverageQueueTimeCurrentReservations field if non-nil, zero value otherwise.

### GetAverageQueueTimeCurrentReservationsOk

`func (o *ReservationQueueStatisticsType) GetAverageQueueTimeCurrentReservationsOk() (*int32, bool)`

GetAverageQueueTimeCurrentReservationsOk returns a tuple with the AverageQueueTimeCurrentReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageQueueTimeCurrentReservations

`func (o *ReservationQueueStatisticsType) SetAverageQueueTimeCurrentReservations(v int32)`

SetAverageQueueTimeCurrentReservations sets AverageQueueTimeCurrentReservations field to given value.

### HasAverageQueueTimeCurrentReservations

`func (o *ReservationQueueStatisticsType) HasAverageQueueTimeCurrentReservations() bool`

HasAverageQueueTimeCurrentReservations returns a boolean if a field has been set.

### GetAverageQueueTimeToCheckIn

`func (o *ReservationQueueStatisticsType) GetAverageQueueTimeToCheckIn() int32`

GetAverageQueueTimeToCheckIn returns the AverageQueueTimeToCheckIn field if non-nil, zero value otherwise.

### GetAverageQueueTimeToCheckInOk

`func (o *ReservationQueueStatisticsType) GetAverageQueueTimeToCheckInOk() (*int32, bool)`

GetAverageQueueTimeToCheckInOk returns a tuple with the AverageQueueTimeToCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageQueueTimeToCheckIn

`func (o *ReservationQueueStatisticsType) SetAverageQueueTimeToCheckIn(v int32)`

SetAverageQueueTimeToCheckIn sets AverageQueueTimeToCheckIn field to given value.

### HasAverageQueueTimeToCheckIn

`func (o *ReservationQueueStatisticsType) HasAverageQueueTimeToCheckIn() bool`

HasAverageQueueTimeToCheckIn returns a boolean if a field has been set.

### GetRoomType

`func (o *ReservationQueueStatisticsType) GetRoomType() []ReservationQueueRoomTypeStatisticsType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ReservationQueueStatisticsType) GetRoomTypeOk() (*[]ReservationQueueRoomTypeStatisticsType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ReservationQueueStatisticsType) SetRoomType(v []ReservationQueueRoomTypeStatisticsType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ReservationQueueStatisticsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


