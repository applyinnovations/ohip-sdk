# ReservationRoomSelectionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**IncludeDepartureRooms** | Pointer to **bool** | Indicates if departure rooms are to be included for room assignment. | [optional] 
**IncludedSharers** | Pointer to [**[]ReservationIdList**](ReservationIdList.md) | Valid share reservation identifier. | [optional] 
**OrderBy** | Pointer to [**HotelRoomsOrderBy**](HotelRoomsOrderBy.md) |  | [optional] 
**OverrideInstructions** | Pointer to [**ReservationRoomSelectionOverrideType**](ReservationRoomSelectionOverrideType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room identifier which the reservation will hold. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | Update the do not move flag used to locking the reservation room number. | [optional] 
**UpdateRoomTypeCharged** | Pointer to **bool** | Update the Room Type used for the Rate calculation. | [optional] 

## Methods

### NewReservationRoomSelectionType

`func NewReservationRoomSelectionType() *ReservationRoomSelectionType`

NewReservationRoomSelectionType instantiates a new ReservationRoomSelectionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRoomSelectionTypeWithDefaults

`func NewReservationRoomSelectionTypeWithDefaults() *ReservationRoomSelectionType`

NewReservationRoomSelectionTypeWithDefaults instantiates a new ReservationRoomSelectionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationRoomSelectionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationRoomSelectionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationRoomSelectionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationRoomSelectionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeDepartureRooms

`func (o *ReservationRoomSelectionType) GetIncludeDepartureRooms() bool`

GetIncludeDepartureRooms returns the IncludeDepartureRooms field if non-nil, zero value otherwise.

### GetIncludeDepartureRoomsOk

`func (o *ReservationRoomSelectionType) GetIncludeDepartureRoomsOk() (*bool, bool)`

GetIncludeDepartureRoomsOk returns a tuple with the IncludeDepartureRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDepartureRooms

`func (o *ReservationRoomSelectionType) SetIncludeDepartureRooms(v bool)`

SetIncludeDepartureRooms sets IncludeDepartureRooms field to given value.

### HasIncludeDepartureRooms

`func (o *ReservationRoomSelectionType) HasIncludeDepartureRooms() bool`

HasIncludeDepartureRooms returns a boolean if a field has been set.

### GetIncludedSharers

`func (o *ReservationRoomSelectionType) GetIncludedSharers() []ReservationIdList`

GetIncludedSharers returns the IncludedSharers field if non-nil, zero value otherwise.

### GetIncludedSharersOk

`func (o *ReservationRoomSelectionType) GetIncludedSharersOk() (*[]ReservationIdList, bool)`

GetIncludedSharersOk returns a tuple with the IncludedSharers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSharers

`func (o *ReservationRoomSelectionType) SetIncludedSharers(v []ReservationIdList)`

SetIncludedSharers sets IncludedSharers field to given value.

### HasIncludedSharers

`func (o *ReservationRoomSelectionType) HasIncludedSharers() bool`

HasIncludedSharers returns a boolean if a field has been set.

### GetOrderBy

`func (o *ReservationRoomSelectionType) GetOrderBy() HotelRoomsOrderBy`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *ReservationRoomSelectionType) GetOrderByOk() (*HotelRoomsOrderBy, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *ReservationRoomSelectionType) SetOrderBy(v HotelRoomsOrderBy)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *ReservationRoomSelectionType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOverrideInstructions

`func (o *ReservationRoomSelectionType) GetOverrideInstructions() ReservationRoomSelectionOverrideType`

GetOverrideInstructions returns the OverrideInstructions field if non-nil, zero value otherwise.

### GetOverrideInstructionsOk

`func (o *ReservationRoomSelectionType) GetOverrideInstructionsOk() (*ReservationRoomSelectionOverrideType, bool)`

GetOverrideInstructionsOk returns a tuple with the OverrideInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstructions

`func (o *ReservationRoomSelectionType) SetOverrideInstructions(v ReservationRoomSelectionOverrideType)`

SetOverrideInstructions sets OverrideInstructions field to given value.

### HasOverrideInstructions

`func (o *ReservationRoomSelectionType) HasOverrideInstructions() bool`

HasOverrideInstructions returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReservationRoomSelectionType) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReservationRoomSelectionType) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReservationRoomSelectionType) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReservationRoomSelectionType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationRoomSelectionType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationRoomSelectionType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationRoomSelectionType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationRoomSelectionType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *ReservationRoomSelectionType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *ReservationRoomSelectionType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *ReservationRoomSelectionType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *ReservationRoomSelectionType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetUpdateRoomTypeCharged

`func (o *ReservationRoomSelectionType) GetUpdateRoomTypeCharged() bool`

GetUpdateRoomTypeCharged returns the UpdateRoomTypeCharged field if non-nil, zero value otherwise.

### GetUpdateRoomTypeChargedOk

`func (o *ReservationRoomSelectionType) GetUpdateRoomTypeChargedOk() (*bool, bool)`

GetUpdateRoomTypeChargedOk returns a tuple with the UpdateRoomTypeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateRoomTypeCharged

`func (o *ReservationRoomSelectionType) SetUpdateRoomTypeCharged(v bool)`

SetUpdateRoomTypeCharged sets UpdateRoomTypeCharged field to given value.

### HasUpdateRoomTypeCharged

`func (o *ReservationRoomSelectionType) HasUpdateRoomTypeCharged() bool`

HasUpdateRoomTypeCharged returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


