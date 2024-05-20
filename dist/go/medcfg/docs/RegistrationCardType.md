# RegistrationCardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code for the registration card. | [optional] 
**RegistrationCard** | Pointer to **string** | Registration card PDF. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewRegistrationCardType

`func NewRegistrationCardType() *RegistrationCardType`

NewRegistrationCardType instantiates a new RegistrationCardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegistrationCardTypeWithDefaults

`func NewRegistrationCardTypeWithDefaults() *RegistrationCardType`

NewRegistrationCardTypeWithDefaults instantiates a new RegistrationCardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RegistrationCardType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RegistrationCardType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RegistrationCardType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RegistrationCardType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRegistrationCard

`func (o *RegistrationCardType) GetRegistrationCard() string`

GetRegistrationCard returns the RegistrationCard field if non-nil, zero value otherwise.

### GetRegistrationCardOk

`func (o *RegistrationCardType) GetRegistrationCardOk() (*string, bool)`

GetRegistrationCardOk returns a tuple with the RegistrationCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationCard

`func (o *RegistrationCardType) SetRegistrationCard(v string)`

SetRegistrationCard sets RegistrationCard field to given value.

### HasRegistrationCard

`func (o *RegistrationCardType) HasRegistrationCard() bool`

HasRegistrationCard returns a boolean if a field has been set.

### GetReservationId

`func (o *RegistrationCardType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *RegistrationCardType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *RegistrationCardType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *RegistrationCardType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


