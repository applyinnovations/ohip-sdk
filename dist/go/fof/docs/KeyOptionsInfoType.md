# KeyOptionsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ProfileKeyOptions** | Pointer to [**[]ProfileKeyOptionsType**](ProfileKeyOptionsType.md) | Key option preferences currently attached to a profile associated with the reservation. | [optional] 
**ReservationKeyOptions** | Pointer to **string** | Key option preferences currently attached to the reservation. | [optional] 
**RoomKeyOptions** | Pointer to **string** | Key option preferences currently attached to the room assigned to the reservation. | [optional] 

## Methods

### NewKeyOptionsInfoType

`func NewKeyOptionsInfoType() *KeyOptionsInfoType`

NewKeyOptionsInfoType instantiates a new KeyOptionsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeyOptionsInfoTypeWithDefaults

`func NewKeyOptionsInfoTypeWithDefaults() *KeyOptionsInfoType`

NewKeyOptionsInfoTypeWithDefaults instantiates a new KeyOptionsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *KeyOptionsInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *KeyOptionsInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *KeyOptionsInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *KeyOptionsInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetProfileKeyOptions

`func (o *KeyOptionsInfoType) GetProfileKeyOptions() []ProfileKeyOptionsType`

GetProfileKeyOptions returns the ProfileKeyOptions field if non-nil, zero value otherwise.

### GetProfileKeyOptionsOk

`func (o *KeyOptionsInfoType) GetProfileKeyOptionsOk() (*[]ProfileKeyOptionsType, bool)`

GetProfileKeyOptionsOk returns a tuple with the ProfileKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileKeyOptions

`func (o *KeyOptionsInfoType) SetProfileKeyOptions(v []ProfileKeyOptionsType)`

SetProfileKeyOptions sets ProfileKeyOptions field to given value.

### HasProfileKeyOptions

`func (o *KeyOptionsInfoType) HasProfileKeyOptions() bool`

HasProfileKeyOptions returns a boolean if a field has been set.

### GetReservationKeyOptions

`func (o *KeyOptionsInfoType) GetReservationKeyOptions() string`

GetReservationKeyOptions returns the ReservationKeyOptions field if non-nil, zero value otherwise.

### GetReservationKeyOptionsOk

`func (o *KeyOptionsInfoType) GetReservationKeyOptionsOk() (*string, bool)`

GetReservationKeyOptionsOk returns a tuple with the ReservationKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationKeyOptions

`func (o *KeyOptionsInfoType) SetReservationKeyOptions(v string)`

SetReservationKeyOptions sets ReservationKeyOptions field to given value.

### HasReservationKeyOptions

`func (o *KeyOptionsInfoType) HasReservationKeyOptions() bool`

HasReservationKeyOptions returns a boolean if a field has been set.

### GetRoomKeyOptions

`func (o *KeyOptionsInfoType) GetRoomKeyOptions() string`

GetRoomKeyOptions returns the RoomKeyOptions field if non-nil, zero value otherwise.

### GetRoomKeyOptionsOk

`func (o *KeyOptionsInfoType) GetRoomKeyOptionsOk() (*string, bool)`

GetRoomKeyOptionsOk returns a tuple with the RoomKeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomKeyOptions

`func (o *KeyOptionsInfoType) SetRoomKeyOptions(v string)`

SetRoomKeyOptions sets RoomKeyOptions field to given value.

### HasRoomKeyOptions

`func (o *KeyOptionsInfoType) HasRoomKeyOptions() bool`

HasRoomKeyOptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


