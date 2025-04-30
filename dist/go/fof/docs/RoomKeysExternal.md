# RoomKeysExternal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EncoderId** | **string** | Unique Id as defined by Door Lock System. | 
**EncoderTerminal** | **string** | The Unique PMS encoder name linked with the encoderId | 
**RoomId** | Pointer to **string** | The PMS room number to generate a key for. | [optional] 
**OldRoomId** | Pointer to **string** | Old Room Number is used when a room move (keyType RoomMove) is performed. | [optional] 
**NoOfKeys** | Pointer to **int32** | Number of keys to be created. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**GuestShareFlag** | Pointer to **bool** | Indicates if Guest is a sharer or not | [optional] 
**OldGuestShareFlag** | Pointer to **bool** | Indicates if old Guest room is a sharer or not when a room move (keyType RoomMove) is performed. | [optional] 
**KeyValidityStart** | Pointer to **string** | The date/time the room key is valid from. | [optional] 
**KeyValidityEnd** | Pointer to **string** | The date/time the room key is valid to. | [optional] 
**KeyType** | [**RoomKeyOutBoundType**](RoomKeyOutBoundType.md) |  | 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**OutBoundCode** | Pointer to **string** | OutBound Code of the Door Lock System (DLS). | [optional] 
**AdditionalRooms** | Pointer to **[]string** | Collection of additional rooms to be included in key creation of reservation room. | [optional] 
**OldAdditionalRooms** | Pointer to **[]string** | Collection of old additional rooms in key creation of reservation room when a room move (keyType RoomMove) is performed. | [optional] 
**UserId** | Pointer to **string** | Unique identifier for the PMS user. | [optional] 
**RoomKeyGuests** | Pointer to [**[]RoomKeyGuest**](RoomKeyGuest.md) | Collection of of Room key guests for multiple guest room key functionality. | [optional] 
**KeyOptions** | Pointer to [**[]KeyOptionsType**](KeyOptionsType.md) | Lists the access areas defined in PMS valid for the room key. | [optional] 
**KeyRequestTime** | **string** | The date/time the room key is requested. | 
**RoomKeyType** | [**ExternalRoomKeyType**](ExternalRoomKeyType.md) |  | 
**KeyUserType** | [**KeyUserType**](KeyUserType.md) |  | 
**CardSerialNumber** | Pointer to **string** | Unique identifier of RFID card used for KeyPayload generation. Required when roomKeyType is KeyPayload. | [optional] 
**PrintData** | Pointer to [**PrintDataType**](PrintDataType.md) |  | [optional] 

## Methods

### NewRoomKeysExternal

`func NewRoomKeysExternal(encoderId string, encoderTerminal string, keyType RoomKeyOutBoundType, keyRequestTime string, roomKeyType ExternalRoomKeyType, keyUserType KeyUserType, ) *RoomKeysExternal`

NewRoomKeysExternal instantiates a new RoomKeysExternal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeysExternalWithDefaults

`func NewRoomKeysExternalWithDefaults() *RoomKeysExternal`

NewRoomKeysExternalWithDefaults instantiates a new RoomKeysExternal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEncoderId

`func (o *RoomKeysExternal) GetEncoderId() string`

GetEncoderId returns the EncoderId field if non-nil, zero value otherwise.

### GetEncoderIdOk

`func (o *RoomKeysExternal) GetEncoderIdOk() (*string, bool)`

GetEncoderIdOk returns a tuple with the EncoderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderId

`func (o *RoomKeysExternal) SetEncoderId(v string)`

SetEncoderId sets EncoderId field to given value.


### GetEncoderTerminal

`func (o *RoomKeysExternal) GetEncoderTerminal() string`

GetEncoderTerminal returns the EncoderTerminal field if non-nil, zero value otherwise.

### GetEncoderTerminalOk

`func (o *RoomKeysExternal) GetEncoderTerminalOk() (*string, bool)`

GetEncoderTerminalOk returns a tuple with the EncoderTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderTerminal

`func (o *RoomKeysExternal) SetEncoderTerminal(v string)`

SetEncoderTerminal sets EncoderTerminal field to given value.


### GetRoomId

`func (o *RoomKeysExternal) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomKeysExternal) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomKeysExternal) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomKeysExternal) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetOldRoomId

`func (o *RoomKeysExternal) GetOldRoomId() string`

GetOldRoomId returns the OldRoomId field if non-nil, zero value otherwise.

### GetOldRoomIdOk

`func (o *RoomKeysExternal) GetOldRoomIdOk() (*string, bool)`

GetOldRoomIdOk returns a tuple with the OldRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRoomId

`func (o *RoomKeysExternal) SetOldRoomId(v string)`

SetOldRoomId sets OldRoomId field to given value.

### HasOldRoomId

`func (o *RoomKeysExternal) HasOldRoomId() bool`

HasOldRoomId returns a boolean if a field has been set.

### GetNoOfKeys

`func (o *RoomKeysExternal) GetNoOfKeys() int32`

GetNoOfKeys returns the NoOfKeys field if non-nil, zero value otherwise.

### GetNoOfKeysOk

`func (o *RoomKeysExternal) GetNoOfKeysOk() (*int32, bool)`

GetNoOfKeysOk returns a tuple with the NoOfKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfKeys

`func (o *RoomKeysExternal) SetNoOfKeys(v int32)`

SetNoOfKeys sets NoOfKeys field to given value.

### HasNoOfKeys

`func (o *RoomKeysExternal) HasNoOfKeys() bool`

HasNoOfKeys returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RoomKeysExternal) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomKeysExternal) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomKeysExternal) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomKeysExternal) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetGuestShareFlag

`func (o *RoomKeysExternal) GetGuestShareFlag() bool`

GetGuestShareFlag returns the GuestShareFlag field if non-nil, zero value otherwise.

### GetGuestShareFlagOk

`func (o *RoomKeysExternal) GetGuestShareFlagOk() (*bool, bool)`

GetGuestShareFlagOk returns a tuple with the GuestShareFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestShareFlag

`func (o *RoomKeysExternal) SetGuestShareFlag(v bool)`

SetGuestShareFlag sets GuestShareFlag field to given value.

### HasGuestShareFlag

`func (o *RoomKeysExternal) HasGuestShareFlag() bool`

HasGuestShareFlag returns a boolean if a field has been set.

### GetOldGuestShareFlag

`func (o *RoomKeysExternal) GetOldGuestShareFlag() bool`

GetOldGuestShareFlag returns the OldGuestShareFlag field if non-nil, zero value otherwise.

### GetOldGuestShareFlagOk

`func (o *RoomKeysExternal) GetOldGuestShareFlagOk() (*bool, bool)`

GetOldGuestShareFlagOk returns a tuple with the OldGuestShareFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldGuestShareFlag

`func (o *RoomKeysExternal) SetOldGuestShareFlag(v bool)`

SetOldGuestShareFlag sets OldGuestShareFlag field to given value.

### HasOldGuestShareFlag

`func (o *RoomKeysExternal) HasOldGuestShareFlag() bool`

HasOldGuestShareFlag returns a boolean if a field has been set.

### GetKeyValidityStart

`func (o *RoomKeysExternal) GetKeyValidityStart() string`

GetKeyValidityStart returns the KeyValidityStart field if non-nil, zero value otherwise.

### GetKeyValidityStartOk

`func (o *RoomKeysExternal) GetKeyValidityStartOk() (*string, bool)`

GetKeyValidityStartOk returns a tuple with the KeyValidityStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityStart

`func (o *RoomKeysExternal) SetKeyValidityStart(v string)`

SetKeyValidityStart sets KeyValidityStart field to given value.

### HasKeyValidityStart

`func (o *RoomKeysExternal) HasKeyValidityStart() bool`

HasKeyValidityStart returns a boolean if a field has been set.

### GetKeyValidityEnd

`func (o *RoomKeysExternal) GetKeyValidityEnd() string`

GetKeyValidityEnd returns the KeyValidityEnd field if non-nil, zero value otherwise.

### GetKeyValidityEndOk

`func (o *RoomKeysExternal) GetKeyValidityEndOk() (*string, bool)`

GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityEnd

`func (o *RoomKeysExternal) SetKeyValidityEnd(v string)`

SetKeyValidityEnd sets KeyValidityEnd field to given value.

### HasKeyValidityEnd

`func (o *RoomKeysExternal) HasKeyValidityEnd() bool`

HasKeyValidityEnd returns a boolean if a field has been set.

### GetKeyType

`func (o *RoomKeysExternal) GetKeyType() RoomKeyOutBoundType`

GetKeyType returns the KeyType field if non-nil, zero value otherwise.

### GetKeyTypeOk

`func (o *RoomKeysExternal) GetKeyTypeOk() (*RoomKeyOutBoundType, bool)`

GetKeyTypeOk returns a tuple with the KeyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyType

`func (o *RoomKeysExternal) SetKeyType(v RoomKeyOutBoundType)`

SetKeyType sets KeyType field to given value.


### GetKeyTrack

`func (o *RoomKeysExternal) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKeysExternal) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKeysExternal) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKeysExternal) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetOutBoundCode

`func (o *RoomKeysExternal) GetOutBoundCode() string`

GetOutBoundCode returns the OutBoundCode field if non-nil, zero value otherwise.

### GetOutBoundCodeOk

`func (o *RoomKeysExternal) GetOutBoundCodeOk() (*string, bool)`

GetOutBoundCodeOk returns a tuple with the OutBoundCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutBoundCode

`func (o *RoomKeysExternal) SetOutBoundCode(v string)`

SetOutBoundCode sets OutBoundCode field to given value.

### HasOutBoundCode

`func (o *RoomKeysExternal) HasOutBoundCode() bool`

HasOutBoundCode returns a boolean if a field has been set.

### GetAdditionalRooms

`func (o *RoomKeysExternal) GetAdditionalRooms() []string`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *RoomKeysExternal) GetAdditionalRoomsOk() (*[]string, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *RoomKeysExternal) SetAdditionalRooms(v []string)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *RoomKeysExternal) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.

### GetOldAdditionalRooms

`func (o *RoomKeysExternal) GetOldAdditionalRooms() []string`

GetOldAdditionalRooms returns the OldAdditionalRooms field if non-nil, zero value otherwise.

### GetOldAdditionalRoomsOk

`func (o *RoomKeysExternal) GetOldAdditionalRoomsOk() (*[]string, bool)`

GetOldAdditionalRoomsOk returns a tuple with the OldAdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldAdditionalRooms

`func (o *RoomKeysExternal) SetOldAdditionalRooms(v []string)`

SetOldAdditionalRooms sets OldAdditionalRooms field to given value.

### HasOldAdditionalRooms

`func (o *RoomKeysExternal) HasOldAdditionalRooms() bool`

HasOldAdditionalRooms returns a boolean if a field has been set.

### GetUserId

`func (o *RoomKeysExternal) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *RoomKeysExternal) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *RoomKeysExternal) SetUserId(v string)`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *RoomKeysExternal) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### GetRoomKeyGuests

`func (o *RoomKeysExternal) GetRoomKeyGuests() []RoomKeyGuest`

GetRoomKeyGuests returns the RoomKeyGuests field if non-nil, zero value otherwise.

### GetRoomKeyGuestsOk

`func (o *RoomKeysExternal) GetRoomKeyGuestsOk() (*[]RoomKeyGuest, bool)`

GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyGuests

`func (o *RoomKeysExternal) SetRoomKeyGuests(v []RoomKeyGuest)`

SetRoomKeyGuests sets RoomKeyGuests field to given value.

### HasRoomKeyGuests

`func (o *RoomKeysExternal) HasRoomKeyGuests() bool`

HasRoomKeyGuests returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKeysExternal) GetKeyOptions() []KeyOptionsType`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeysExternal) GetKeyOptionsOk() (*[]KeyOptionsType, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeysExternal) SetKeyOptions(v []KeyOptionsType)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeysExternal) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyRequestTime

`func (o *RoomKeysExternal) GetKeyRequestTime() string`

GetKeyRequestTime returns the KeyRequestTime field if non-nil, zero value otherwise.

### GetKeyRequestTimeOk

`func (o *RoomKeysExternal) GetKeyRequestTimeOk() (*string, bool)`

GetKeyRequestTimeOk returns a tuple with the KeyRequestTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyRequestTime

`func (o *RoomKeysExternal) SetKeyRequestTime(v string)`

SetKeyRequestTime sets KeyRequestTime field to given value.


### GetRoomKeyType

`func (o *RoomKeysExternal) GetRoomKeyType() ExternalRoomKeyType`

GetRoomKeyType returns the RoomKeyType field if non-nil, zero value otherwise.

### GetRoomKeyTypeOk

`func (o *RoomKeysExternal) GetRoomKeyTypeOk() (*ExternalRoomKeyType, bool)`

GetRoomKeyTypeOk returns a tuple with the RoomKeyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyType

`func (o *RoomKeysExternal) SetRoomKeyType(v ExternalRoomKeyType)`

SetRoomKeyType sets RoomKeyType field to given value.


### GetKeyUserType

`func (o *RoomKeysExternal) GetKeyUserType() KeyUserType`

GetKeyUserType returns the KeyUserType field if non-nil, zero value otherwise.

### GetKeyUserTypeOk

`func (o *RoomKeysExternal) GetKeyUserTypeOk() (*KeyUserType, bool)`

GetKeyUserTypeOk returns a tuple with the KeyUserType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyUserType

`func (o *RoomKeysExternal) SetKeyUserType(v KeyUserType)`

SetKeyUserType sets KeyUserType field to given value.


### GetCardSerialNumber

`func (o *RoomKeysExternal) GetCardSerialNumber() string`

GetCardSerialNumber returns the CardSerialNumber field if non-nil, zero value otherwise.

### GetCardSerialNumberOk

`func (o *RoomKeysExternal) GetCardSerialNumberOk() (*string, bool)`

GetCardSerialNumberOk returns a tuple with the CardSerialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardSerialNumber

`func (o *RoomKeysExternal) SetCardSerialNumber(v string)`

SetCardSerialNumber sets CardSerialNumber field to given value.

### HasCardSerialNumber

`func (o *RoomKeysExternal) HasCardSerialNumber() bool`

HasCardSerialNumber returns a boolean if a field has been set.

### GetPrintData

`func (o *RoomKeysExternal) GetPrintData() PrintDataType`

GetPrintData returns the PrintData field if non-nil, zero value otherwise.

### GetPrintDataOk

`func (o *RoomKeysExternal) GetPrintDataOk() (*PrintDataType, bool)`

GetPrintDataOk returns a tuple with the PrintData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintData

`func (o *RoomKeysExternal) SetPrintData(v PrintDataType)`

SetPrintData sets PrintData field to given value.

### HasPrintData

`func (o *RoomKeysExternal) HasPrintData() bool`

HasPrintData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


