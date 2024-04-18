# DeferredTaxesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Property context of the reservations. | [optional] 
**RefreshAlways** | Pointer to **bool** | Configuring this flag to be TRUE will make the postDeferredTax job to be submitted always. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewDeferredTaxesCriteriaType

`func NewDeferredTaxesCriteriaType() *DeferredTaxesCriteriaType`

NewDeferredTaxesCriteriaType instantiates a new DeferredTaxesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeferredTaxesCriteriaTypeWithDefaults

`func NewDeferredTaxesCriteriaTypeWithDefaults() *DeferredTaxesCriteriaType`

NewDeferredTaxesCriteriaTypeWithDefaults instantiates a new DeferredTaxesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *DeferredTaxesCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DeferredTaxesCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DeferredTaxesCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DeferredTaxesCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *DeferredTaxesCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DeferredTaxesCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DeferredTaxesCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DeferredTaxesCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRefreshAlways

`func (o *DeferredTaxesCriteriaType) GetRefreshAlways() bool`

GetRefreshAlways returns the RefreshAlways field if non-nil, zero value otherwise.

### GetRefreshAlwaysOk

`func (o *DeferredTaxesCriteriaType) GetRefreshAlwaysOk() (*bool, bool)`

GetRefreshAlwaysOk returns a tuple with the RefreshAlways field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshAlways

`func (o *DeferredTaxesCriteriaType) SetRefreshAlways(v bool)`

SetRefreshAlways sets RefreshAlways field to given value.

### HasRefreshAlways

`func (o *DeferredTaxesCriteriaType) HasRefreshAlways() bool`

HasRefreshAlways returns a boolean if a field has been set.

### GetReservationId

`func (o *DeferredTaxesCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DeferredTaxesCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DeferredTaxesCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DeferredTaxesCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


