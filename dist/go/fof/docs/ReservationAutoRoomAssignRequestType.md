# ReservationAutoRoomAssignRequestType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationCriteria** | Pointer to [**[][]UniqueIDType**]([]UniqueIDType.md) | A list of reservation ids which will be used to auto assign rooms. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | Update the do not move flag used to locking the reservation room number. | [optional] 
**RoomSelectionCriteria** | Pointer to [**ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria**](ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria.md) |  | [optional] 

## Methods

### NewReservationAutoRoomAssignRequestType

`func NewReservationAutoRoomAssignRequestType() *ReservationAutoRoomAssignRequestType`

NewReservationAutoRoomAssignRequestType instantiates a new ReservationAutoRoomAssignRequestType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAutoRoomAssignRequestTypeWithDefaults

`func NewReservationAutoRoomAssignRequestTypeWithDefaults() *ReservationAutoRoomAssignRequestType`

NewReservationAutoRoomAssignRequestTypeWithDefaults instantiates a new ReservationAutoRoomAssignRequestType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationCriteria

`func (o *ReservationAutoRoomAssignRequestType) GetReservationCriteria() [][]UniqueIDType`

GetReservationCriteria returns the ReservationCriteria field if non-nil, zero value otherwise.

### GetReservationCriteriaOk

`func (o *ReservationAutoRoomAssignRequestType) GetReservationCriteriaOk() (*[][]UniqueIDType, bool)`

GetReservationCriteriaOk returns a tuple with the ReservationCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCriteria

`func (o *ReservationAutoRoomAssignRequestType) SetReservationCriteria(v [][]UniqueIDType)`

SetReservationCriteria sets ReservationCriteria field to given value.

### HasReservationCriteria

`func (o *ReservationAutoRoomAssignRequestType) HasReservationCriteria() bool`

HasReservationCriteria returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *ReservationAutoRoomAssignRequestType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *ReservationAutoRoomAssignRequestType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *ReservationAutoRoomAssignRequestType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *ReservationAutoRoomAssignRequestType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetRoomSelectionCriteria

`func (o *ReservationAutoRoomAssignRequestType) GetRoomSelectionCriteria() ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria`

GetRoomSelectionCriteria returns the RoomSelectionCriteria field if non-nil, zero value otherwise.

### GetRoomSelectionCriteriaOk

`func (o *ReservationAutoRoomAssignRequestType) GetRoomSelectionCriteriaOk() (*ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria, bool)`

GetRoomSelectionCriteriaOk returns a tuple with the RoomSelectionCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSelectionCriteria

`func (o *ReservationAutoRoomAssignRequestType) SetRoomSelectionCriteria(v ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria)`

SetRoomSelectionCriteria sets RoomSelectionCriteria field to given value.

### HasRoomSelectionCriteria

`func (o *ReservationAutoRoomAssignRequestType) HasRoomSelectionCriteria() bool`

HasRoomSelectionCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


