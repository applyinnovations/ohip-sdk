# RoomKeyExternal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EncoderId** | **string** | Unique Id as defined by Door Lock System. | 
**EncoderTerminal** | **string** | The Unique PMS encoder name linked with the encoderId | 
**RoomId** | Pointer to **string** | The PMS room number to generate a key for. | [optional] 
**OldRoomId** | Pointer to **string** | Old Room Number is used when a room move (keyType RoomMove) is performed. | [optional] 
**NoOfKeys** | Pointer to **int32** | Number of keys to be created.The value is always 1 | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**GuestShareFlag** | Pointer to **bool** | Indicates if Guest is a sharer or not | [optional] 
**OldGuestShareFlag** | Pointer to **bool** | Indicates if old Guest room is a sharer or not when a room move (keyType RoomMove) is performed. | [optional] 
**KeyOptions** | Pointer to **string** | Lists the access areas defined in PMS valid for the room key. | [optional] 
**KeyValidityStart** | Pointer to **string** | The date/time the room key is valid from. | [optional] 
**KeyValidityEnd** | Pointer to **string** | The date/time the room key is valid to. | [optional] 
**KeyType** | [**RoomKeyOutBoundType**](RoomKeyOutBoundType.md) |  | 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**OutBoundCode** | Pointer to **string** | OutBound Code of the Door Lock System (DLS). | [optional] 
**AdditionalRooms** | Pointer to **[]string** | Collection of additional rooms to be included in key creation of reservation room. | [optional] 
**OldAdditionalRooms** | Pointer to **[]string** | Collection of old additional rooms in key creation of reservation room when a room move (keyType RoomMove) is performed. | [optional] 
**UserId** | Pointer to **string** | Unique identifier for the PMS user. | [optional] 
**RequestType** | Pointer to [**RequestType**](RequestType.md) |  | [optional] 
**RoomKeyGuests** | Pointer to [**[]RoomKeyGuest**](RoomKeyGuest.md) | Collection of of Room key guests for multiple guest room key functionality. | [optional] 

## Methods

### NewRoomKeyExternal

`func NewRoomKeyExternal(encoderId string, encoderTerminal string, keyType RoomKeyOutBoundType, ) *RoomKeyExternal`

NewRoomKeyExternal instantiates a new RoomKeyExternal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyExternalWithDefaults

`func NewRoomKeyExternalWithDefaults() *RoomKeyExternal`

NewRoomKeyExternalWithDefaults instantiates a new RoomKeyExternal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEncoderId

`func (o *RoomKeyExternal) GetEncoderId() string`

GetEncoderId returns the EncoderId field if non-nil, zero value otherwise.

### GetEncoderIdOk

`func (o *RoomKeyExternal) GetEncoderIdOk() (*string, bool)`

GetEncoderIdOk returns a tuple with the EncoderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderId

`func (o *RoomKeyExternal) SetEncoderId(v string)`

SetEncoderId sets EncoderId field to given value.


### GetEncoderTerminal

`func (o *RoomKeyExternal) GetEncoderTerminal() string`

GetEncoderTerminal returns the EncoderTerminal field if non-nil, zero value otherwise.

### GetEncoderTerminalOk

`func (o *RoomKeyExternal) GetEncoderTerminalOk() (*string, bool)`

GetEncoderTerminalOk returns a tuple with the EncoderTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderTerminal

`func (o *RoomKeyExternal) SetEncoderTerminal(v string)`

SetEncoderTerminal sets EncoderTerminal field to given value.


### GetRoomId

`func (o *RoomKeyExternal) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomKeyExternal) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomKeyExternal) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomKeyExternal) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetOldRoomId

`func (o *RoomKeyExternal) GetOldRoomId() string`

GetOldRoomId returns the OldRoomId field if non-nil, zero value otherwise.

### GetOldRoomIdOk

`func (o *RoomKeyExternal) GetOldRoomIdOk() (*string, bool)`

GetOldRoomIdOk returns a tuple with the OldRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRoomId

`func (o *RoomKeyExternal) SetOldRoomId(v string)`

SetOldRoomId sets OldRoomId field to given value.

### HasOldRoomId

`func (o *RoomKeyExternal) HasOldRoomId() bool`

HasOldRoomId returns a boolean if a field has been set.

### GetNoOfKeys

`func (o *RoomKeyExternal) GetNoOfKeys() int32`

GetNoOfKeys returns the NoOfKeys field if non-nil, zero value otherwise.

### GetNoOfKeysOk

`func (o *RoomKeyExternal) GetNoOfKeysOk() (*int32, bool)`

GetNoOfKeysOk returns a tuple with the NoOfKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfKeys

`func (o *RoomKeyExternal) SetNoOfKeys(v int32)`

SetNoOfKeys sets NoOfKeys field to given value.

### HasNoOfKeys

`func (o *RoomKeyExternal) HasNoOfKeys() bool`

HasNoOfKeys returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RoomKeyExternal) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomKeyExternal) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomKeyExternal) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomKeyExternal) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetGuestShareFlag

`func (o *RoomKeyExternal) GetGuestShareFlag() bool`

GetGuestShareFlag returns the GuestShareFlag field if non-nil, zero value otherwise.

### GetGuestShareFlagOk

`func (o *RoomKeyExternal) GetGuestShareFlagOk() (*bool, bool)`

GetGuestShareFlagOk returns a tuple with the GuestShareFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestShareFlag

`func (o *RoomKeyExternal) SetGuestShareFlag(v bool)`

SetGuestShareFlag sets GuestShareFlag field to given value.

### HasGuestShareFlag

`func (o *RoomKeyExternal) HasGuestShareFlag() bool`

HasGuestShareFlag returns a boolean if a field has been set.

### GetOldGuestShareFlag

`func (o *RoomKeyExternal) GetOldGuestShareFlag() bool`

GetOldGuestShareFlag returns the OldGuestShareFlag field if non-nil, zero value otherwise.

### GetOldGuestShareFlagOk

`func (o *RoomKeyExternal) GetOldGuestShareFlagOk() (*bool, bool)`

GetOldGuestShareFlagOk returns a tuple with the OldGuestShareFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldGuestShareFlag

`func (o *RoomKeyExternal) SetOldGuestShareFlag(v bool)`

SetOldGuestShareFlag sets OldGuestShareFlag field to given value.

### HasOldGuestShareFlag

`func (o *RoomKeyExternal) HasOldGuestShareFlag() bool`

HasOldGuestShareFlag returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKeyExternal) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeyExternal) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeyExternal) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeyExternal) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyValidityStart

`func (o *RoomKeyExternal) GetKeyValidityStart() string`

GetKeyValidityStart returns the KeyValidityStart field if non-nil, zero value otherwise.

### GetKeyValidityStartOk

`func (o *RoomKeyExternal) GetKeyValidityStartOk() (*string, bool)`

GetKeyValidityStartOk returns a tuple with the KeyValidityStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityStart

`func (o *RoomKeyExternal) SetKeyValidityStart(v string)`

SetKeyValidityStart sets KeyValidityStart field to given value.

### HasKeyValidityStart

`func (o *RoomKeyExternal) HasKeyValidityStart() bool`

HasKeyValidityStart returns a boolean if a field has been set.

### GetKeyValidityEnd

`func (o *RoomKeyExternal) GetKeyValidityEnd() string`

GetKeyValidityEnd returns the KeyValidityEnd field if non-nil, zero value otherwise.

### GetKeyValidityEndOk

`func (o *RoomKeyExternal) GetKeyValidityEndOk() (*string, bool)`

GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityEnd

`func (o *RoomKeyExternal) SetKeyValidityEnd(v string)`

SetKeyValidityEnd sets KeyValidityEnd field to given value.

### HasKeyValidityEnd

`func (o *RoomKeyExternal) HasKeyValidityEnd() bool`

HasKeyValidityEnd returns a boolean if a field has been set.

### GetKeyType

`func (o *RoomKeyExternal) GetKeyType() RoomKeyOutBoundType`

GetKeyType returns the KeyType field if non-nil, zero value otherwise.

### GetKeyTypeOk

`func (o *RoomKeyExternal) GetKeyTypeOk() (*RoomKeyOutBoundType, bool)`

GetKeyTypeOk returns a tuple with the KeyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyType

`func (o *RoomKeyExternal) SetKeyType(v RoomKeyOutBoundType)`

SetKeyType sets KeyType field to given value.


### GetKeyTrack

`func (o *RoomKeyExternal) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKeyExternal) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKeyExternal) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKeyExternal) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetOutBoundCode

`func (o *RoomKeyExternal) GetOutBoundCode() string`

GetOutBoundCode returns the OutBoundCode field if non-nil, zero value otherwise.

### GetOutBoundCodeOk

`func (o *RoomKeyExternal) GetOutBoundCodeOk() (*string, bool)`

GetOutBoundCodeOk returns a tuple with the OutBoundCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutBoundCode

`func (o *RoomKeyExternal) SetOutBoundCode(v string)`

SetOutBoundCode sets OutBoundCode field to given value.

### HasOutBoundCode

`func (o *RoomKeyExternal) HasOutBoundCode() bool`

HasOutBoundCode returns a boolean if a field has been set.

### GetAdditionalRooms

`func (o *RoomKeyExternal) GetAdditionalRooms() []string`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *RoomKeyExternal) GetAdditionalRoomsOk() (*[]string, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *RoomKeyExternal) SetAdditionalRooms(v []string)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *RoomKeyExternal) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.

### GetOldAdditionalRooms

`func (o *RoomKeyExternal) GetOldAdditionalRooms() []string`

GetOldAdditionalRooms returns the OldAdditionalRooms field if non-nil, zero value otherwise.

### GetOldAdditionalRoomsOk

`func (o *RoomKeyExternal) GetOldAdditionalRoomsOk() (*[]string, bool)`

GetOldAdditionalRoomsOk returns a tuple with the OldAdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldAdditionalRooms

`func (o *RoomKeyExternal) SetOldAdditionalRooms(v []string)`

SetOldAdditionalRooms sets OldAdditionalRooms field to given value.

### HasOldAdditionalRooms

`func (o *RoomKeyExternal) HasOldAdditionalRooms() bool`

HasOldAdditionalRooms returns a boolean if a field has been set.

### GetUserId

`func (o *RoomKeyExternal) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *RoomKeyExternal) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *RoomKeyExternal) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *RoomKeyExternal) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetRequestType

`func (o *RoomKeyExternal) GetRequestType() RequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *RoomKeyExternal) GetRequestTypeOk() (*RequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *RoomKeyExternal) SetRequestType(v RequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *RoomKeyExternal) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetRoomKeyGuests

`func (o *RoomKeyExternal) GetRoomKeyGuests() []RoomKeyGuest`

GetRoomKeyGuests returns the RoomKeyGuests field if non-nil, zero value otherwise.

### GetRoomKeyGuestsOk

`func (o *RoomKeyExternal) GetRoomKeyGuestsOk() (*[]RoomKeyGuest, bool)`

GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyGuests

`func (o *RoomKeyExternal) SetRoomKeyGuests(v []RoomKeyGuest)`

SetRoomKeyGuests sets RoomKeyGuests field to given value.

### HasRoomKeyGuests

`func (o *RoomKeyExternal) HasRoomKeyGuests() bool`

HasRoomKeyGuests returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


