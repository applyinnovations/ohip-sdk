# PostRoomKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalRooms** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**EncoderId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EncoderTerminal** | Pointer to **string** |  | [optional] 
**KeyCardType** | Pointer to [**KeyCardType**](KeyCardType.md) |  | [optional] 
**KeyCardUId** | Pointer to **string** |  | [optional] 
**KeyOptions** | Pointer to **string** |  | [optional] 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**KeyType** | Pointer to [**RoomKeyType**](RoomKeyType.md) |  | [optional] 
**KeyValidityEnd** | Pointer to **string** |  | [optional] 
**KeyValidityStart** | Pointer to **string** |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**NoOfKeys** | Pointer to **int32** |  | [optional] 
**ReservationIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**Resort** | Pointer to **string** |  | [optional] 
**RoomKeyGuests** | Pointer to [**[]RoomKeyGuest**](RoomKeyGuest.md) | Collection of of Room key guests for multiple guest room key functionality. | [optional] 
**RoomNumber** | Pointer to **string** | A room number to generate a key for. When creating keys using just the room number, the interface may allow only one-shot keys. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomKeyRequest

`func NewPostRoomKeyRequest() *PostRoomKeyRequest`

NewPostRoomKeyRequest instantiates a new PostRoomKeyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomKeyRequestWithDefaults

`func NewPostRoomKeyRequestWithDefaults() *PostRoomKeyRequest`

NewPostRoomKeyRequestWithDefaults instantiates a new PostRoomKeyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalRooms

`func (o *PostRoomKeyRequest) GetAdditionalRooms() CodeListType`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *PostRoomKeyRequest) GetAdditionalRoomsOk() (*CodeListType, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *PostRoomKeyRequest) SetAdditionalRooms(v CodeListType)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *PostRoomKeyRequest) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.

### GetEncoderId

`func (o *PostRoomKeyRequest) GetEncoderId() UniqueIDType`

GetEncoderId returns the EncoderId field if non-nil, zero value otherwise.

### GetEncoderIdOk

`func (o *PostRoomKeyRequest) GetEncoderIdOk() (*UniqueIDType, bool)`

GetEncoderIdOk returns a tuple with the EncoderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderId

`func (o *PostRoomKeyRequest) SetEncoderId(v UniqueIDType)`

SetEncoderId sets EncoderId field to given value.

### HasEncoderId

`func (o *PostRoomKeyRequest) HasEncoderId() bool`

HasEncoderId returns a boolean if a field has been set.

### GetEncoderTerminal

`func (o *PostRoomKeyRequest) GetEncoderTerminal() string`

GetEncoderTerminal returns the EncoderTerminal field if non-nil, zero value otherwise.

### GetEncoderTerminalOk

`func (o *PostRoomKeyRequest) GetEncoderTerminalOk() (*string, bool)`

GetEncoderTerminalOk returns a tuple with the EncoderTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderTerminal

`func (o *PostRoomKeyRequest) SetEncoderTerminal(v string)`

SetEncoderTerminal sets EncoderTerminal field to given value.

### HasEncoderTerminal

`func (o *PostRoomKeyRequest) HasEncoderTerminal() bool`

HasEncoderTerminal returns a boolean if a field has been set.

### GetKeyCardType

`func (o *PostRoomKeyRequest) GetKeyCardType() KeyCardType`

GetKeyCardType returns the KeyCardType field if non-nil, zero value otherwise.

### GetKeyCardTypeOk

`func (o *PostRoomKeyRequest) GetKeyCardTypeOk() (*KeyCardType, bool)`

GetKeyCardTypeOk returns a tuple with the KeyCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCardType

`func (o *PostRoomKeyRequest) SetKeyCardType(v KeyCardType)`

SetKeyCardType sets KeyCardType field to given value.

### HasKeyCardType

`func (o *PostRoomKeyRequest) HasKeyCardType() bool`

HasKeyCardType returns a boolean if a field has been set.

### GetKeyCardUId

`func (o *PostRoomKeyRequest) GetKeyCardUId() string`

GetKeyCardUId returns the KeyCardUId field if non-nil, zero value otherwise.

### GetKeyCardUIdOk

`func (o *PostRoomKeyRequest) GetKeyCardUIdOk() (*string, bool)`

GetKeyCardUIdOk returns a tuple with the KeyCardUId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCardUId

`func (o *PostRoomKeyRequest) SetKeyCardUId(v string)`

SetKeyCardUId sets KeyCardUId field to given value.

### HasKeyCardUId

`func (o *PostRoomKeyRequest) HasKeyCardUId() bool`

HasKeyCardUId returns a boolean if a field has been set.

### GetKeyOptions

`func (o *PostRoomKeyRequest) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *PostRoomKeyRequest) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *PostRoomKeyRequest) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *PostRoomKeyRequest) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyTrack

`func (o *PostRoomKeyRequest) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *PostRoomKeyRequest) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *PostRoomKeyRequest) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *PostRoomKeyRequest) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetKeyType

`func (o *PostRoomKeyRequest) GetKeyType() RoomKeyType`

GetKeyType returns the KeyType field if non-nil, zero value otherwise.

### GetKeyTypeOk

`func (o *PostRoomKeyRequest) GetKeyTypeOk() (*RoomKeyType, bool)`

GetKeyTypeOk returns a tuple with the KeyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyType

`func (o *PostRoomKeyRequest) SetKeyType(v RoomKeyType)`

SetKeyType sets KeyType field to given value.

### HasKeyType

`func (o *PostRoomKeyRequest) HasKeyType() bool`

HasKeyType returns a boolean if a field has been set.

### GetKeyValidityEnd

`func (o *PostRoomKeyRequest) GetKeyValidityEnd() string`

GetKeyValidityEnd returns the KeyValidityEnd field if non-nil, zero value otherwise.

### GetKeyValidityEndOk

`func (o *PostRoomKeyRequest) GetKeyValidityEndOk() (*string, bool)`

GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityEnd

`func (o *PostRoomKeyRequest) SetKeyValidityEnd(v string)`

SetKeyValidityEnd sets KeyValidityEnd field to given value.

### HasKeyValidityEnd

`func (o *PostRoomKeyRequest) HasKeyValidityEnd() bool`

HasKeyValidityEnd returns a boolean if a field has been set.

### GetKeyValidityStart

`func (o *PostRoomKeyRequest) GetKeyValidityStart() string`

GetKeyValidityStart returns the KeyValidityStart field if non-nil, zero value otherwise.

### GetKeyValidityStartOk

`func (o *PostRoomKeyRequest) GetKeyValidityStartOk() (*string, bool)`

GetKeyValidityStartOk returns a tuple with the KeyValidityStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityStart

`func (o *PostRoomKeyRequest) SetKeyValidityStart(v string)`

SetKeyValidityStart sets KeyValidityStart field to given value.

### HasKeyValidityStart

`func (o *PostRoomKeyRequest) HasKeyValidityStart() bool`

HasKeyValidityStart returns a boolean if a field has been set.

### GetLinks

`func (o *PostRoomKeyRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRoomKeyRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRoomKeyRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRoomKeyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoOfKeys

`func (o *PostRoomKeyRequest) GetNoOfKeys() int32`

GetNoOfKeys returns the NoOfKeys field if non-nil, zero value otherwise.

### GetNoOfKeysOk

`func (o *PostRoomKeyRequest) GetNoOfKeysOk() (*int32, bool)`

GetNoOfKeysOk returns a tuple with the NoOfKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfKeys

`func (o *PostRoomKeyRequest) SetNoOfKeys(v int32)`

SetNoOfKeys sets NoOfKeys field to given value.

### HasNoOfKeys

`func (o *PostRoomKeyRequest) HasNoOfKeys() bool`

HasNoOfKeys returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PostRoomKeyRequest) GetReservationIdList() UniqueIDListType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PostRoomKeyRequest) GetReservationIdListOk() (*UniqueIDListType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PostRoomKeyRequest) SetReservationIdList(v UniqueIDListType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PostRoomKeyRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResort

`func (o *PostRoomKeyRequest) GetResort() string`

GetResort returns the Resort field if non-nil, zero value otherwise.

### GetResortOk

`func (o *PostRoomKeyRequest) GetResortOk() (*string, bool)`

GetResortOk returns a tuple with the Resort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResort

`func (o *PostRoomKeyRequest) SetResort(v string)`

SetResort sets Resort field to given value.

### HasResort

`func (o *PostRoomKeyRequest) HasResort() bool`

HasResort returns a boolean if a field has been set.

### GetRoomKeyGuests

`func (o *PostRoomKeyRequest) GetRoomKeyGuests() []RoomKeyGuest`

GetRoomKeyGuests returns the RoomKeyGuests field if non-nil, zero value otherwise.

### GetRoomKeyGuestsOk

`func (o *PostRoomKeyRequest) GetRoomKeyGuestsOk() (*[]RoomKeyGuest, bool)`

GetRoomKeyGuestsOk returns a tuple with the RoomKeyGuests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyGuests

`func (o *PostRoomKeyRequest) SetRoomKeyGuests(v []RoomKeyGuest)`

SetRoomKeyGuests sets RoomKeyGuests field to given value.

### HasRoomKeyGuests

`func (o *PostRoomKeyRequest) HasRoomKeyGuests() bool`

HasRoomKeyGuests returns a boolean if a field has been set.

### GetRoomNumber

`func (o *PostRoomKeyRequest) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *PostRoomKeyRequest) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *PostRoomKeyRequest) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *PostRoomKeyRequest) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomKeyRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomKeyRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomKeyRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomKeyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


