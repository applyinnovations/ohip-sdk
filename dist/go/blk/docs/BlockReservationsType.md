# BlockReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**Shares** | Pointer to [**[]RoomingListShareType**](RoomingListShareType.md) | Contains a set of rooming list reservations that need to be shared. | [optional] 

## Methods

### NewBlockReservationsType

`func NewBlockReservationsType() *BlockReservationsType`

NewBlockReservationsType instantiates a new BlockReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockReservationsTypeWithDefaults

`func NewBlockReservationsTypeWithDefaults() *BlockReservationsType`

NewBlockReservationsTypeWithDefaults instantiates a new BlockReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *BlockReservationsType) GetReservations() HotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BlockReservationsType) GetReservationsOk() (*HotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BlockReservationsType) SetReservations(v HotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BlockReservationsType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetShares

`func (o *BlockReservationsType) GetShares() []RoomingListShareType`

GetShares returns the Shares field if non-nil, zero value otherwise.

### GetSharesOk

`func (o *BlockReservationsType) GetSharesOk() (*[]RoomingListShareType, bool)`

GetSharesOk returns a tuple with the Shares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShares

`func (o *BlockReservationsType) SetShares(v []RoomingListShareType)`

SetShares sets Shares field to given value.

### HasShares

`func (o *BlockReservationsType) HasShares() bool`

HasShares returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


