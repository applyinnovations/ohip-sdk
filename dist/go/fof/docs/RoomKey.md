# RoomKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalRooms** | Pointer to **[]string** |  | [optional] 
**EncoderId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EncoderTerminal** | Pointer to **string** |  | [optional] 
**KeyCardType** | Pointer to [**KeyCardType**](KeyCardType.md) |  | [optional] 
**KeyCardUId** | Pointer to **string** |  | [optional] 
**KeyOptions** | Pointer to **string** |  | [optional] 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**KeyType** | Pointer to [**RoomKeyType**](RoomKeyType.md) |  | [optional] 
**KeyValidityEnd** | Pointer to **string** |  | [optional] 
**KeyValidityStart** | Pointer to **string** |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NoOfKeys** | Pointer to **int32** |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Resort** | Pointer to **string** |  | [optional] 
**RoomKeyGuests** | Pointer to [**[]RoomKeyGuest**](RoomKeyGuest.md) | Collection of of Room key guests for multiple guest room key functionality. | [optional] 
**RoomNumber** | Pointer to **string** | A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomKey

`func NewRoomKey() *RoomKey`

NewRoomKey instantiates a new RoomKey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyWithDefaults

`func NewRoomKeyWithDefaults() *RoomKey`

NewRoomKeyWithDefaults instantiates a new RoomKey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalRooms

`func (o *RoomKey) GetAdditionalRooms() []string`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *RoomKey) GetAdditionalRoomsOk() (*[]string, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *RoomKey) SetAdditionalRooms(v []string)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *RoomKey) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.

### GetEncoderId

`func (o *RoomKey) GetEncoderId() UniqueIDType`

GetEncoderId returns the EncoderId field if non-nil, zero value otherwise.

### GetEncoderIdOk

`func (o *RoomKey) GetEncoderIdOk() (*UniqueIDType, bool)`

GetEncoderIdOk returns a tuple with the EncoderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderId

`func (o *RoomKey) SetEncoderId(v UniqueIDType)`

SetEncoderId sets EncoderId field to given value.

### HasEncoderId

`func (o *RoomKey) HasEncoderId() bool`

HasEncoderId returns a boolean if a field has been set.

### GetEncoderTerminal

`func (o *RoomKey) GetEncoderTerminal() string`

GetEncoderTerminal returns the EncoderTerminal field if non-nil, zero value otherwise.

### GetEncoderTerminalOk

`func (o *RoomKey) GetEncoderTerminalOk() (*string, bool)`

GetEncoderTerminalOk returns a tuple with the EncoderTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderTerminal

`func (o *RoomKey) SetEncoderTerminal(v string)`

SetEncoderTerminal sets EncoderTerminal field to given value.

### HasEncoderTerminal

`func (o *RoomKey) HasEncoderTerminal() bool`

HasEncoderTerminal returns a boolean if a field has been set.

### GetKeyCardType

`func (o *RoomKey) GetKeyCardType() KeyCardType`

GetKeyCardType returns the KeyCardType field if non-nil, zero value otherwise.

### GetKeyCardTypeOk

`func (o *RoomKey) GetKeyCardTypeOk() (*KeyCardType, bool)`

GetKeyCardTypeOk returns a tuple with the KeyCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCardType

`func (o *RoomKey) SetKeyCardType(v KeyCardType)`

SetKeyCardType sets KeyCardType field to given value.

### HasKeyCardType

`func (o *RoomKey) HasKeyCardType() bool`

HasKeyCardType returns a boolean if a field has been set.

### GetKeyCardUId

`func (o *RoomKey) GetKeyCardUId() string`

GetKeyCardUId returns the KeyCardUId field if non-nil, zero value otherwise.

### GetKeyCardUIdOk

`func (o *RoomKey) GetKeyCardUIdOk() (*string, bool)`

GetKeyCardUIdOk returns a tuple with the KeyCardUId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCardUId

`func (o *RoomKey) SetKeyCardUId(v string)`

SetKeyCardUId sets KeyCardUId field to given value.

### HasKeyCardUId

`func (o *RoomKey) HasKeyCardUId() bool`

HasKeyCardUId returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKey) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKey) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKey) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKey) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyTrack

`func (o *RoomKey) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKey) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKey) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKey) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetKeyType

`func (o *RoomKey) GetKeyType() RoomKeyType`

GetKeyType returns the KeyType field if non-nil, zero value otherwise.

### GetKeyTypeOk

`func (o *RoomKey) GetKeyTypeOk() (*RoomKeyType, bool)`

GetKeyTypeOk returns a tuple with the KeyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyType

`func (o *RoomKey) SetKeyType(v RoomKeyType)`

SetKeyType sets KeyType field to given value.

### HasKeyType

`func (o *RoomKey) HasKeyType() bool`

HasKeyType returns a boolean if a field has been set.

### GetKeyValidityEnd

`func (o *RoomKey) GetKeyValidityEnd() string`

GetKeyValidityEnd returns the KeyValidityEnd field if non-nil, zero value otherwise.

### GetKeyValidityEndOk

`func (o *RoomKey) GetKeyValidityEndOk() (*string, bool)`

GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityEnd

`func (o *RoomKey) SetKeyValidityEnd(v string)`

SetKeyValidityEnd sets KeyValidityEnd field to given value.

### HasKeyValidityEnd

`func (o *RoomKey) HasKeyValidityEnd() bool`

HasKeyValidityEnd returns a boolean if a field has been set.

### GetKeyValidityStart

`func (o *RoomKey) GetKeyValidityStart() string`

GetKeyValidityStart returns the KeyValidityStart field if non-nil, zero value otherwise.

### GetKeyValidityStartOk

`func (o *RoomKey) GetKeyValidityStartOk() (*string, bool)`

GetKeyValidityStartOk returns a tuple with the KeyValidityStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityStart

`func (o *RoomKey) SetKeyValidityStart(v string)`

SetKeyValidityStart sets KeyValidityStart field to given value.

### HasKeyValidityStart

`func (o *RoomKey) HasKeyValidityStart() bool`

HasKeyValidityStart returns a boolean if a field has been set.

### GetLinks

`func (o *RoomKey) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomKey) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomKey) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomKey) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoOfKeys

`func (o *RoomKey) GetNoOfKeys() int32`

GetNoOfKeys returns the NoOfKeys field if non-nil, zero value otherwise.

### GetNoOfKeysOk

`func (o *RoomKey) GetNoOfKeysOk() (*int32, bool)`

GetNoOfKeysOk returns a tuple with the NoOfKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfKeys

`func (o *RoomKey) SetNoOfKeys(v int32)`

SetNoOfKeys sets NoOfKeys field to given value.

### HasNoOfKeys

`func (o *RoomKey) HasNoOfKeys() bool`

HasNoOfKeys returns a boolean if a field has been set.

### GetReservationIdList

`func (o *RoomKey) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomKey) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomKey) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomKey) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResort

`func (o *RoomKey) GetResort() string`

GetResort returns the Resort field if non-nil, zero value otherwise.

### GetResortOk

`func (o *RoomKey) GetResortOk() (*string, bool)`

GetResortOk returns a tuple with the Resort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResort

`func (o *RoomKey) SetResort(v string)`

SetResort sets Resort field to given value.

### HasResort

`func (o *RoomKey) HasResort() bool`

HasResort returns a boolean if a field has been set.

### GetRoomKeyGuests

`func (o *RoomKey) GetRoomKeyGuests() []RoomKeyGuest`

GetRoomKeyGuests returns the RoomKeyGuests field if non-nil, zero value otherwise.

### GetRoomKeyGuestsOk

`func (o *RoomKey) GetRoomKeyGuestsOk() (*[]RoomKeyGuest, bool)`

GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyGuests

`func (o *RoomKey) SetRoomKeyGuests(v []RoomKeyGuest)`

SetRoomKeyGuests sets RoomKeyGuests field to given value.

### HasRoomKeyGuests

`func (o *RoomKey) HasRoomKeyGuests() bool`

HasRoomKeyGuests returns a boolean if a field has been set.

### GetRoomNumber

`func (o *RoomKey) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *RoomKey) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *RoomKey) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *RoomKey) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomKey) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomKey) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomKey) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomKey) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


