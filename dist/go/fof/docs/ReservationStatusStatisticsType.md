# ReservationStatusStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationStatus** | Pointer to [**ReservationStatusEnumType**](ReservationStatusEnumType.md) |  | [optional] 
**Total** | Pointer to **int32** | Number of reservations. | [optional] 
**RoomClasses** | Pointer to [**[]RoomClassStatisticsType**](RoomClassStatisticsType.md) | Reservation Statistics for each Room Class | [optional] 

## Methods

### NewReservationStatusStatisticsType

`func NewReservationStatusStatisticsType() *ReservationStatusStatisticsType`

NewReservationStatusStatisticsType instantiates a new ReservationStatusStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationStatusStatisticsTypeWithDefaults

`func NewReservationStatusStatisticsTypeWithDefaults() *ReservationStatusStatisticsType`

NewReservationStatusStatisticsTypeWithDefaults instantiates a new ReservationStatusStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationStatus

`func (o *ReservationStatusStatisticsType) GetReservationStatus() ReservationStatusEnumType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *ReservationStatusStatisticsType) GetReservationStatusOk() (*ReservationStatusEnumType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *ReservationStatusStatisticsType) SetReservationStatus(v ReservationStatusEnumType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *ReservationStatusStatisticsType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetTotal

`func (o *ReservationStatusStatisticsType) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *ReservationStatusStatisticsType) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *ReservationStatusStatisticsType) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *ReservationStatusStatisticsType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetRoomClasses

`func (o *ReservationStatusStatisticsType) GetRoomClasses() []RoomClassStatisticsType`

GetRoomClasses returns the RoomClasses field if non-nil, zero value otherwise.

### GetRoomClassesOk

`func (o *ReservationStatusStatisticsType) GetRoomClassesOk() (*[]RoomClassStatisticsType, bool)`

GetRoomClassesOk returns a tuple with the RoomClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClasses

`func (o *ReservationStatusStatisticsType) SetRoomClasses(v []RoomClassStatisticsType)`

SetRoomClasses sets RoomClasses field to given value.

### HasRoomClasses

`func (o *ReservationStatusStatisticsType) HasRoomClasses() bool`

HasRoomClasses returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


