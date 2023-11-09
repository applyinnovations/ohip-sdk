# MoveInHouseGuestCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Used for Character Strings, length 0 to 2000. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**IncludeDepartureRooms** | Pointer to **bool** | Indicates if departure rooms are to be included for room assignment. | [optional] 
**IncludedSharers** | Pointer to [**[]ReservationIdList**](ReservationIdList.md) | Valid share reservation identifier. | [optional] 
**OldRoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 
**OrderBy** | Pointer to [**HotelRoomsOrderBy**](HotelRoomsOrderBy.md) |  | [optional] 
**OverrideInstructions** | Pointer to [**ReservationRoomSelectionOverrideType**](ReservationRoomSelectionOverrideType.md) |  | [optional] 
**ReasonCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room identifier which the reservation will hold. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | Update the do not move flag used to locking the reservation room number. | [optional] 
**UpdateRoomTypeCharged** | Pointer to **bool** | Update the Room Type used for the Rate calculation. | [optional] 

## Methods

### NewMoveInHouseGuestCriteria

`func NewMoveInHouseGuestCriteria() *MoveInHouseGuestCriteria`

NewMoveInHouseGuestCriteria instantiates a new MoveInHouseGuestCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMoveInHouseGuestCriteriaWithDefaults

`func NewMoveInHouseGuestCriteriaWithDefaults() *MoveInHouseGuestCriteria`

NewMoveInHouseGuestCriteriaWithDefaults instantiates a new MoveInHouseGuestCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *MoveInHouseGuestCriteria) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MoveInHouseGuestCriteria) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MoveInHouseGuestCriteria) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MoveInHouseGuestCriteria) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *MoveInHouseGuestCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MoveInHouseGuestCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MoveInHouseGuestCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MoveInHouseGuestCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetIncludeDepartureRooms

`func (o *MoveInHouseGuestCriteria) GetIncludeDepartureRooms() bool`

GetIncludeDepartureRooms returns the IncludeDepartureRooms field if non-nil, zero value otherwise.

### GetIncludeDepartureRoomsOk

`func (o *MoveInHouseGuestCriteria) GetIncludeDepartureRoomsOk() (*bool, bool)`

GetIncludeDepartureRoomsOk returns a tuple with the IncludeDepartureRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDepartureRooms

`func (o *MoveInHouseGuestCriteria) SetIncludeDepartureRooms(v bool)`

SetIncludeDepartureRooms sets IncludeDepartureRooms field to given value.

### HasIncludeDepartureRooms

`func (o *MoveInHouseGuestCriteria) HasIncludeDepartureRooms() bool`

HasIncludeDepartureRooms returns a boolean if a field has been set.

### GetIncludedSharers

`func (o *MoveInHouseGuestCriteria) GetIncludedSharers() []ReservationIdList`

GetIncludedSharers returns the IncludedSharers field if non-nil, zero value otherwise.

### GetIncludedSharersOk

`func (o *MoveInHouseGuestCriteria) GetIncludedSharersOk() (*[]ReservationIdList, bool)`

GetIncludedSharersOk returns a tuple with the IncludedSharers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedSharers

`func (o *MoveInHouseGuestCriteria) SetIncludedSharers(v []ReservationIdList)`

SetIncludedSharers sets IncludedSharers field to given value.

### HasIncludedSharers

`func (o *MoveInHouseGuestCriteria) HasIncludedSharers() bool`

HasIncludedSharers returns a boolean if a field has been set.

### GetOldRoomStatus

`func (o *MoveInHouseGuestCriteria) GetOldRoomStatus() HousekeepingRoomStatusType`

GetOldRoomStatus returns the OldRoomStatus field if non-nil, zero value otherwise.

### GetOldRoomStatusOk

`func (o *MoveInHouseGuestCriteria) GetOldRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetOldRoomStatusOk returns a tuple with the OldRoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRoomStatus

`func (o *MoveInHouseGuestCriteria) SetOldRoomStatus(v HousekeepingRoomStatusType)`

SetOldRoomStatus sets OldRoomStatus field to given value.

### HasOldRoomStatus

`func (o *MoveInHouseGuestCriteria) HasOldRoomStatus() bool`

HasOldRoomStatus returns a boolean if a field has been set.

### GetOrderBy

`func (o *MoveInHouseGuestCriteria) GetOrderBy() HotelRoomsOrderBy`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *MoveInHouseGuestCriteria) GetOrderByOk() (*HotelRoomsOrderBy, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *MoveInHouseGuestCriteria) SetOrderBy(v HotelRoomsOrderBy)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *MoveInHouseGuestCriteria) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOverrideInstructions

`func (o *MoveInHouseGuestCriteria) GetOverrideInstructions() ReservationRoomSelectionOverrideType`

GetOverrideInstructions returns the OverrideInstructions field if non-nil, zero value otherwise.

### GetOverrideInstructionsOk

`func (o *MoveInHouseGuestCriteria) GetOverrideInstructionsOk() (*ReservationRoomSelectionOverrideType, bool)`

GetOverrideInstructionsOk returns a tuple with the OverrideInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstructions

`func (o *MoveInHouseGuestCriteria) SetOverrideInstructions(v ReservationRoomSelectionOverrideType)`

SetOverrideInstructions sets OverrideInstructions field to given value.

### HasOverrideInstructions

`func (o *MoveInHouseGuestCriteria) HasOverrideInstructions() bool`

HasOverrideInstructions returns a boolean if a field has been set.

### GetReasonCode

`func (o *MoveInHouseGuestCriteria) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *MoveInHouseGuestCriteria) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *MoveInHouseGuestCriteria) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *MoveInHouseGuestCriteria) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MoveInHouseGuestCriteria) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MoveInHouseGuestCriteria) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MoveInHouseGuestCriteria) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MoveInHouseGuestCriteria) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRoomId

`func (o *MoveInHouseGuestCriteria) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *MoveInHouseGuestCriteria) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *MoveInHouseGuestCriteria) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *MoveInHouseGuestCriteria) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *MoveInHouseGuestCriteria) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *MoveInHouseGuestCriteria) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *MoveInHouseGuestCriteria) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *MoveInHouseGuestCriteria) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetUpdateRoomTypeCharged

`func (o *MoveInHouseGuestCriteria) GetUpdateRoomTypeCharged() bool`

GetUpdateRoomTypeCharged returns the UpdateRoomTypeCharged field if non-nil, zero value otherwise.

### GetUpdateRoomTypeChargedOk

`func (o *MoveInHouseGuestCriteria) GetUpdateRoomTypeChargedOk() (*bool, bool)`

GetUpdateRoomTypeChargedOk returns a tuple with the UpdateRoomTypeCharged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateRoomTypeCharged

`func (o *MoveInHouseGuestCriteria) SetUpdateRoomTypeCharged(v bool)`

SetUpdateRoomTypeCharged sets UpdateRoomTypeCharged field to given value.

### HasUpdateRoomTypeCharged

`func (o *MoveInHouseGuestCriteria) HasUpdateRoomTypeCharged() bool`

HasUpdateRoomTypeCharged returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


