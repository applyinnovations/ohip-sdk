# RoomKeyInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalRooms** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**GuestInfo** | Pointer to [**RoomKeyGuest**](RoomKeyGuest.md) |  | [optional] 
**HotelId** | Pointer to **string** | Name of the resort . | [optional] 
**KeyCount** | Pointer to **string** | Number of keys has been created for the reservation . | [optional] 
**KeyExpiryDate** | Pointer to **string** | Expiry date and time of the key. | [optional] 
**KeyOptions** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**KeyStartDate** | Pointer to **string** | Start date and time of the key. | [optional] 
**KeyTrack** | Pointer to [**KeyTrackType**](KeyTrackType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room Number. | [optional] 

## Methods

### NewRoomKeyInfoType

`func NewRoomKeyInfoType() *RoomKeyInfoType`

NewRoomKeyInfoType instantiates a new RoomKeyInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomKeyInfoTypeWithDefaults

`func NewRoomKeyInfoTypeWithDefaults() *RoomKeyInfoType`

NewRoomKeyInfoTypeWithDefaults instantiates a new RoomKeyInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalRooms

`func (o *RoomKeyInfoType) GetAdditionalRooms() CodeListType`

GetAdditionalRooms returns the AdditionalRooms field if non-nil, zero value otherwise.

### GetAdditionalRoomsOk

`func (o *RoomKeyInfoType) GetAdditionalRoomsOk() (*CodeListType, bool)`

GetAdditionalRoomsOk returns a tuple with the AdditionalRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalRooms

`func (o *RoomKeyInfoType) SetAdditionalRooms(v CodeListType)`

SetAdditionalRooms sets AdditionalRooms field to given value.

### HasAdditionalRooms

`func (o *RoomKeyInfoType) HasAdditionalRooms() bool`

HasAdditionalRooms returns a boolean if a field has been set.

### GetGuestInfo

`func (o *RoomKeyInfoType) GetGuestInfo() RoomKeyGuest`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *RoomKeyInfoType) GetGuestInfoOk() (*RoomKeyGuest, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *RoomKeyInfoType) SetGuestInfo(v RoomKeyGuest)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *RoomKeyInfoType) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomKeyInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomKeyInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomKeyInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomKeyInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetKeyCount

`func (o *RoomKeyInfoType) GetKeyCount() string`

GetKeyCount returns the KeyCount field if non-nil, zero value otherwise.

### GetKeyCountOk

`func (o *RoomKeyInfoType) GetKeyCountOk() (*string, bool)`

GetKeyCountOk returns a tuple with the KeyCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyCount

`func (o *RoomKeyInfoType) SetKeyCount(v string)`

SetKeyCount sets KeyCount field to given value.

### HasKeyCount

`func (o *RoomKeyInfoType) HasKeyCount() bool`

HasKeyCount returns a boolean if a field has been set.

### GetKeyExpiryDate

`func (o *RoomKeyInfoType) GetKeyExpiryDate() string`

GetKeyExpiryDate returns the KeyExpiryDate field if non-nil, zero value otherwise.

### GetKeyExpiryDateOk

`func (o *RoomKeyInfoType) GetKeyExpiryDateOk() (*string, bool)`

GetKeyExpiryDateOk returns a tuple with the KeyExpiryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyExpiryDate

`func (o *RoomKeyInfoType) SetKeyExpiryDate(v string)`

SetKeyExpiryDate sets KeyExpiryDate field to given value.

### HasKeyExpiryDate

`func (o *RoomKeyInfoType) HasKeyExpiryDate() bool`

HasKeyExpiryDate returns a boolean if a field has been set.

### GetKeyOptions

`func (o *RoomKeyInfoType) GetKeyOptions() CodeListType`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *RoomKeyInfoType) GetKeyOptionsOk() (*CodeListType, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *RoomKeyInfoType) SetKeyOptions(v CodeListType)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *RoomKeyInfoType) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetKeyStartDate

`func (o *RoomKeyInfoType) GetKeyStartDate() string`

GetKeyStartDate returns the KeyStartDate field if non-nil, zero value otherwise.

### GetKeyStartDateOk

`func (o *RoomKeyInfoType) GetKeyStartDateOk() (*string, bool)`

GetKeyStartDateOk returns a tuple with the KeyStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyStartDate

`func (o *RoomKeyInfoType) SetKeyStartDate(v string)`

SetKeyStartDate sets KeyStartDate field to given value.

### HasKeyStartDate

`func (o *RoomKeyInfoType) HasKeyStartDate() bool`

HasKeyStartDate returns a boolean if a field has been set.

### GetKeyTrack

`func (o *RoomKeyInfoType) GetKeyTrack() KeyTrackType`

GetKeyTrack returns the KeyTrack field if non-nil, zero value otherwise.

### GetKeyTrackOk

`func (o *RoomKeyInfoType) GetKeyTrackOk() (*KeyTrackType, bool)`

GetKeyTrackOk returns a tuple with the KeyTrack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyTrack

`func (o *RoomKeyInfoType) SetKeyTrack(v KeyTrackType)`

SetKeyTrack sets KeyTrack field to given value.

### HasKeyTrack

`func (o *RoomKeyInfoType) HasKeyTrack() bool`

HasKeyTrack returns a boolean if a field has been set.

### GetReservationId

`func (o *RoomKeyInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RoomKeyInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RoomKeyInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RoomKeyInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomKeyInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomKeyInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomKeyInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomKeyInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


