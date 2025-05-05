# RoomOccupancyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomId** | Pointer to **string** | Room Id. | [optional] 
**RoomType** | Pointer to **string** | Room Type. | [optional] 
**RoomIsOccupied** | Pointer to **bool** | Indicates if the Room is currently occupied. | [optional] 
**EstimatedDepartureTime** | Pointer to **string** | Estimated Time of Departure of reservation when room status is occupied. | [optional] 
**GuestFirstName** | Pointer to **string** | Guest First/Given Name on reservation when room status is occupied. | [optional] 
**GuestLastName** | Pointer to **string** | Guest Last Name /Surname on reservation when room status is occupied. | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 

## Methods

### NewRoomOccupancyType

`func NewRoomOccupancyType() *RoomOccupancyType`

NewRoomOccupancyType instantiates a new RoomOccupancyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOccupancyTypeWithDefaults

`func NewRoomOccupancyTypeWithDefaults() *RoomOccupancyType`

NewRoomOccupancyTypeWithDefaults instantiates a new RoomOccupancyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomId

`func (o *RoomOccupancyType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomOccupancyType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomOccupancyType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomOccupancyType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomOccupancyType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomOccupancyType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomOccupancyType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomOccupancyType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomIsOccupied

`func (o *RoomOccupancyType) GetRoomIsOccupied() bool`

GetRoomIsOccupied returns the RoomIsOccupied field if non-nil, zero value otherwise.

### GetRoomIsOccupiedOk

`func (o *RoomOccupancyType) GetRoomIsOccupiedOk() (*bool, bool)`

GetRoomIsOccupiedOk returns a tuple with the RoomIsOccupied field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomIsOccupied

`func (o *RoomOccupancyType) SetRoomIsOccupied(v bool)`

SetRoomIsOccupied sets RoomIsOccupied field to given value.

### HasRoomIsOccupied

`func (o *RoomOccupancyType) HasRoomIsOccupied() bool`

HasRoomIsOccupied returns a boolean if a field has been set.

### GetEstimatedDepartureTime

`func (o *RoomOccupancyType) GetEstimatedDepartureTime() string`

GetEstimatedDepartureTime returns the EstimatedDepartureTime field if non-nil, zero value otherwise.

### GetEstimatedDepartureTimeOk

`func (o *RoomOccupancyType) GetEstimatedDepartureTimeOk() (*string, bool)`

GetEstimatedDepartureTimeOk returns a tuple with the EstimatedDepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedDepartureTime

`func (o *RoomOccupancyType) SetEstimatedDepartureTime(v string)`

SetEstimatedDepartureTime sets EstimatedDepartureTime field to given value.

### HasEstimatedDepartureTime

`func (o *RoomOccupancyType) HasEstimatedDepartureTime() bool`

HasEstimatedDepartureTime returns a boolean if a field has been set.

### GetGuestFirstName

`func (o *RoomOccupancyType) GetGuestFirstName() string`

GetGuestFirstName returns the GuestFirstName field if non-nil, zero value otherwise.

### GetGuestFirstNameOk

`func (o *RoomOccupancyType) GetGuestFirstNameOk() (*string, bool)`

GetGuestFirstNameOk returns a tuple with the GuestFirstName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFirstName

`func (o *RoomOccupancyType) SetGuestFirstName(v string)`

SetGuestFirstName sets GuestFirstName field to given value.

### HasGuestFirstName

`func (o *RoomOccupancyType) HasGuestFirstName() bool`

HasGuestFirstName returns a boolean if a field has been set.

### GetGuestLastName

`func (o *RoomOccupancyType) GetGuestLastName() string`

GetGuestLastName returns the GuestLastName field if non-nil, zero value otherwise.

### GetGuestLastNameOk

`func (o *RoomOccupancyType) GetGuestLastNameOk() (*string, bool)`

GetGuestLastNameOk returns a tuple with the GuestLastName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestLastName

`func (o *RoomOccupancyType) SetGuestLastName(v string)`

SetGuestLastName sets GuestLastName field to given value.

### HasGuestLastName

`func (o *RoomOccupancyType) HasGuestLastName() bool`

HasGuestLastName returns a boolean if a field has been set.

### GetRoomStatus

`func (o *RoomOccupancyType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *RoomOccupancyType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *RoomOccupancyType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *RoomOccupancyType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RoomOccupancyType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomOccupancyType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomOccupancyType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomOccupancyType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


