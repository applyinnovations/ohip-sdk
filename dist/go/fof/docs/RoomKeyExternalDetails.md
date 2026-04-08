# RoomKeyExternalDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EncoderId** | Pointer to **string** | Unique Id as defined by Door Lock System. | [optional] 
**EncoderTerminal** | **string** | The Unique PMS encoder name linked with the encoderId | 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**RoomId** | **string** | The PMS room number to generate a key for. | 
**KeyTrack** | Pointer to [**[]KeyTrackType**](KeyTrackType.md) | KeyTrack Data. | [optional] 
**KeyOptions** | Pointer to **string** | Lists all PMS access areas - only send in response for keyType: &#39;Read&#39; request | [optional] 
**KeyValidityStart** | Pointer to **string** | Date/Time Key is valid from - only send in response for keyType: &#39;Read&#39; request | [optional] 
**KeyValidityEnd** | Pointer to **string** | Date/Time Key is valid to - only send in response for keyType: &#39;Read&#39; request | [optional] 
**ResponseText** | Pointer to **string** | A user-friendly text with information on why a request is not successful | [optional] 
**ResponseCode** | [**RoomKeyResponseCodeType**](RoomKeyResponseCodeType.md) |  | 
**AdditionalRooms** | Pointer to **[]string** | Collection of additional rooms to be included in key creation of reservation room. | [optional] 

## Methods

### NewRoomKeyExternalDetails

`func NewRoomKeyExternalDetails(encoderTerminal string, roomId string, responseCode RoomKeyResponseCodeType, ) *RoomKeyExternalDetails`

NewRoomKeyExternalDetails instantiates a new RoomKeyExternalDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyExternalDetailsWithDefaults

`func NewRoomKeyExternalDetailsWithDefaults() *RoomKeyExternalDetails`

NewRoomKeyExternalDetailsWithDefaults instantiates a new RoomKeyExternalDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEncoderId

`func (o *RoomKeyExternalDetails) GetEncoderId() string`

GetEncoderId returns the EncoderId field if non-nil, zero value otherwise.

### GetEncoderIdOk

`func (o *RoomKeyExternalDetails) GetEncoderIdOk() (*string, bool)`

GetEncoderIdOk returns a tuple with the EncoderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderId

`func (o *RoomKeyExternalDetails) SetEncoderId(v string)`

SetEncoderId sets EncoderId field to given value.

### HasEncoderId

`func (o *RoomKeyExternalDetails) HasEncoderId() bool`

HasEncoderId returns a boolean if a field has been set.

### GetEncoderTerminal

`func (o *RoomKeyExternalDetails) GetEncoderTerminal() string`

GetEncoderTerminal returns the EncoderTerminal field if non-nil, zero value otherwise.

### GetEncoderTerminalOk

`func (o *RoomKeyExternalDetails) GetEncoderTerminalOk() (*string, bool)`

GetEncoderTerminalOk returns a tuple with the EncoderTerminal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEncoderTerminal

`func (o *RoomKeyExternalDetails) SetEncoderTerminal(v string)`

SetEncoderTerminal sets EncoderTerminal field to given value.


### GetReservationIdList

`func (o *RoomKeyExternalDetails) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomKeyExternalDetails) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomKeyExternalDetails) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomKeyExternalDetails) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomKeyExternalDetails) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomKeyExternalDetails) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomKeyExternalDetails) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.


### GetKeyTrack

`func (o *RoomKeyExternalDetails) GetKeyTrack() []KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKeyExternalDetails) GetKeyTrackOk() (*[]KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKeyExternalDetails) SetKeyTrack(v []KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKeyExternalDetails) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKeyExternalDetails) GetKeyOptions() string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeyExternalDetails) GetKeyOptionsOk() (*string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeyExternalDetails) SetKeyOptions(v string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeyExternalDetails) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyValidityStart

`func (o *RoomKeyExternalDetails) GetKeyValidityStart() string`

GetKeyValidityStart returns the KeyValidityStart field if non-nil, zero value otherwise.

### GetKeyValidityStartOk

`func (o *RoomKeyExternalDetails) GetKeyValidityStartOk() (*string, bool)`

GetKeyValidityStartOk returns a tuple with the KeyValidityStart field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityStart

`func (o *RoomKeyExternalDetails) SetKeyValidityStart(v string)`

SetKeyValidityStart sets KeyValidityStart field to given value.

### HasKeyValidityStart

`func (o *RoomKeyExternalDetails) HasKeyValidityStart() bool`

HasKeyValidityStart returns a boolean if a field has been set.

### GetKeyValidityEnd

`func (o *RoomKeyExternalDetails) GetKeyValidityEnd() string`

GetKeyValidityEnd returns the KeyValidityEnd field if non-nil, zero value otherwise.

### GetKeyValidityEndOk

`func (o *RoomKeyExternalDetails) GetKeyValidityEndOk() (*string, bool)`

GetKeyValidityEndOk returns a tuple with the KeyValidityEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyValidityEnd

`func (o *RoomKeyExternalDetails) SetKeyValidityEnd(v string)`

SetKeyValidityEnd sets KeyValidityEnd field to given value.

### HasKeyValidityEnd

`func (o *RoomKeyExternalDetails) HasKeyValidityEnd() bool`

HasKeyValidityEnd returns a boolean if a field has been set.

### GetResponseText

`func (o *RoomKeyExternalDetails) GetResponseText() string`

GetResponseText returns the ResponseText field if non-nil, zero value otherwise.

### GetResponseTextOk

`func (o *RoomKeyExternalDetails) GetResponseTextOk() (*string, bool)`

GetResponseTextOk returns a tuple with the ResponseText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseText

`func (o *RoomKeyExternalDetails) SetResponseText(v string)`

SetResponseText sets ResponseText field to given value.

### HasResponseText

`func (o *RoomKeyExternalDetails) HasResponseText() bool`

HasResponseText returns a boolean if a field has been set.

### GetResponseCode

`func (o *RoomKeyExternalDetails) GetResponseCode() RoomKeyResponseCodeType`

GetResponseCode returns the ResponseCode field if non-nil, zero value otherwise.

### GetResponseCodeOk

`func (o *RoomKeyExternalDetails) GetResponseCodeOk() (*RoomKeyResponseCodeType, bool)`

GetResponseCodeOk returns a tuple with the ResponseCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseCode

`func (o *RoomKeyExternalDetails) SetResponseCode(v RoomKeyResponseCodeType)`

SetResponseCode sets ResponseCode field to given value.


### GetAdditionalRooms

`func (o *RoomKeyExternalDetails) GetAdditionalRooms() []string`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *RoomKeyExternalDetails) GetAdditionalRoomsOk() (*[]string, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *RoomKeyExternalDetails) SetAdditionalRooms(v []string)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *RoomKeyExternalDetails) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


