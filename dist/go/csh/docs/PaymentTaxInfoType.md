# PaymentTaxInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel context for the Reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Taxes** | Pointer to [**[]PaymentTaxType**](PaymentTaxType.md) | Payment Tax record. | [optional] 

## Methods

### NewPaymentTaxInfoType

`func NewPaymentTaxInfoType() *PaymentTaxInfoType`

NewPaymentTaxInfoType instantiates a new PaymentTaxInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentTaxInfoTypeWithDefaults

`func NewPaymentTaxInfoTypeWithDefaults() *PaymentTaxInfoType`

NewPaymentTaxInfoTypeWithDefaults instantiates a new PaymentTaxInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *PaymentTaxInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PaymentTaxInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PaymentTaxInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PaymentTaxInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *PaymentTaxInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PaymentTaxInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PaymentTaxInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PaymentTaxInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTaxes

`func (o *PaymentTaxInfoType) GetTaxes() []PaymentTaxType`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *PaymentTaxInfoType) GetTaxesOk() (*[]PaymentTaxType, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *PaymentTaxInfoType) SetTaxes(v []PaymentTaxType)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *PaymentTaxInfoType) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


