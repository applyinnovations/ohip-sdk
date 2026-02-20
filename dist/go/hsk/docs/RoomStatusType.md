# RoomStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationStatusList** | Pointer to [**[]HousekeepingRoomReservationStatusType**](HousekeepingRoomReservationStatusType.md) | List of status of the reservation to which this Room is assigned.. | [optional] 
**HousekeepingRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**FrontOfficeStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 
**HousekeepingStatus** | Pointer to [**FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) |  | [optional] 

## Methods

### NewRoomStatusType

`func NewRoomStatusType() *RoomStatusType`

NewRoomStatusType instantiates a new RoomStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomStatusTypeWithDefaults

`func NewRoomStatusTypeWithDefaults() *RoomStatusType`

NewRoomStatusTypeWithDefaults instantiates a new RoomStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationStatusList

`func (o *RoomStatusType) GetReservationStatusList() []HousekeepingRoomReservationStatusType`

GetReservationStatusList returns the ReservationStatusList field if non-nil, zero value otherwise.

### GetReservationStatusListOk

`func (o *RoomStatusType) GetReservationStatusListOk() (*[]HousekeepingRoomReservationStatusType, bool)`

GetReservationStatusListOk returns a tuple with the ReservationStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatusList

`func (o *RoomStatusType) SetReservationStatusList(v []HousekeepingRoomReservationStatusType)`

SetReservationStatusList sets ReservationStatusList field to given value.

### HasReservationStatusList

`func (o *RoomStatusType) HasReservationStatusList() bool`

HasReservationStatusList returns a boolean if a field has been set.

### GetHousekeepingRoomStatus

`func (o *RoomStatusType) GetHousekeepingRoomStatus() HousekeepingRoomStatusType`

GetHousekeepingRoomStatus returns the HousekeepingRoomStatus field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusOk

`func (o *RoomStatusType) GetHousekeepingRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusOk returns a tuple with the HousekeepingRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatus

`func (o *RoomStatusType) SetHousekeepingRoomStatus(v HousekeepingRoomStatusType)`

SetHousekeepingRoomStatus sets HousekeepingRoomStatus field to given value.

### HasHousekeepingRoomStatus

`func (o *RoomStatusType) HasHousekeepingRoomStatus() bool`

HasHousekeepingRoomStatus returns a boolean if a field has been set.

### GetFrontOfficeStatus

`func (o *RoomStatusType) GetFrontOfficeStatus() FrontOfficeRoomStatusType`

GetFrontOfficeStatus returns the FrontOfficeStatus field if non-nil, zero value otherwise.

### GetFrontOfficeStatusOk

`func (o *RoomStatusType) GetFrontOfficeStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetFrontOfficeStatusOk returns a tuple with the FrontOfficeStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontOfficeStatus

`func (o *RoomStatusType) SetFrontOfficeStatus(v FrontOfficeRoomStatusType)`

SetFrontOfficeStatus sets FrontOfficeStatus field to given value.

### HasFrontOfficeStatus

`func (o *RoomStatusType) HasFrontOfficeStatus() bool`

HasFrontOfficeStatus returns a boolean if a field has been set.

### GetHousekeepingStatus

`func (o *RoomStatusType) GetHousekeepingStatus() FrontOfficeRoomStatusType`

GetHousekeepingStatus returns the HousekeepingStatus field if non-nil, zero value otherwise.

### GetHousekeepingStatusOk

`func (o *RoomStatusType) GetHousekeepingStatusOk() (*FrontOfficeRoomStatusType, bool)`

GetHousekeepingStatusOk returns a tuple with the HousekeepingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingStatus

`func (o *RoomStatusType) SetHousekeepingStatus(v FrontOfficeRoomStatusType)`

SetHousekeepingStatus sets HousekeepingStatus field to given value.

### HasHousekeepingStatus

`func (o *RoomStatusType) HasHousekeepingStatus() bool`

HasHousekeepingStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


