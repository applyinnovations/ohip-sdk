# ReservationsInQueue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**ReservationList**](ReservationList.md) |  | [optional] 
**RoomStatusInfo** | Pointer to [**HotelRoomsType**](HotelRoomsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationsInQueue

`func NewReservationsInQueue() *ReservationsInQueue`

NewReservationsInQueue instantiates a new ReservationsInQueue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsInQueueWithDefaults

`func NewReservationsInQueueWithDefaults() *ReservationsInQueue`

NewReservationsInQueueWithDefaults instantiates a new ReservationsInQueue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *ReservationsInQueue) GetReservations() ReservationList`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ReservationsInQueue) GetReservationsOk() (*ReservationList, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ReservationsInQueue) SetReservations(v ReservationList)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ReservationsInQueue) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetRoomStatusInfo

`func (o *ReservationsInQueue) GetRoomStatusInfo() HotelRoomsType`

GetRoomStatusInfo returns the RoomStatusInfo field if non-nil, zero value otherwise.

### GetRoomStatusInfoOk

`func (o *ReservationsInQueue) GetRoomStatusInfoOk() (*HotelRoomsType, bool)`

GetRoomStatusInfoOk returns a tuple with the RoomStatusInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatusInfo

`func (o *ReservationsInQueue) SetRoomStatusInfo(v HotelRoomsType)`

SetRoomStatusInfo sets RoomStatusInfo field to given value.

### HasRoomStatusInfo

`func (o *ReservationsInQueue) HasRoomStatusInfo() bool`

HasRoomStatusInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationsInQueue) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationsInQueue) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationsInQueue) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationsInQueue) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationsInQueue) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationsInQueue) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationsInQueue) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationsInQueue) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


