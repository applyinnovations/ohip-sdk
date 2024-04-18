# HotelReservationsIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | All reservation ids in the list must belong to this property. | [optional] 
**ReservationId** | Pointer to [**[]ReservationId**](ReservationId.md) | Unique identifier for a reservation. | [optional] 

## Methods

### NewHotelReservationsIDType

`func NewHotelReservationsIDType() *HotelReservationsIDType`

NewHotelReservationsIDType instantiates a new HotelReservationsIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationsIDTypeWithDefaults

`func NewHotelReservationsIDTypeWithDefaults() *HotelReservationsIDType`

NewHotelReservationsIDTypeWithDefaults instantiates a new HotelReservationsIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HotelReservationsIDType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelReservationsIDType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelReservationsIDType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelReservationsIDType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *HotelReservationsIDType) GetReservationId() []ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *HotelReservationsIDType) GetReservationIdOk() (*[]ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *HotelReservationsIDType) SetReservationId(v []ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *HotelReservationsIDType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

