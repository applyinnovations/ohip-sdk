# BatchAdvanceFolioType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Property context of the reservations. | [optional] 
**Reservations** | Pointer to [**Reservations**](Reservations.md) |  | [optional] 

## Methods

### NewBatchAdvanceFolioType

`func NewBatchAdvanceFolioType() *BatchAdvanceFolioType`

NewBatchAdvanceFolioType instantiates a new BatchAdvanceFolioType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchAdvanceFolioTypeWithDefaults

`func NewBatchAdvanceFolioTypeWithDefaults() *BatchAdvanceFolioType`

NewBatchAdvanceFolioTypeWithDefaults instantiates a new BatchAdvanceFolioType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *BatchAdvanceFolioType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BatchAdvanceFolioType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BatchAdvanceFolioType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BatchAdvanceFolioType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *BatchAdvanceFolioType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BatchAdvanceFolioType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BatchAdvanceFolioType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BatchAdvanceFolioType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservations

`func (o *BatchAdvanceFolioType) GetReservations() Reservations`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *BatchAdvanceFolioType) GetReservationsOk() (*Reservations, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *BatchAdvanceFolioType) SetReservations(v Reservations)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *BatchAdvanceFolioType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


