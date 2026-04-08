# HotelCashierTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transactions** | Pointer to [**[]CashierTransactionType**](CashierTransactionType.md) | Hotel&#39;s transaction in cashier shift. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 

## Methods

### NewHotelCashierTransactionType

`func NewHotelCashierTransactionType() *HotelCashierTransactionType`

NewHotelCashierTransactionType instantiates a new HotelCashierTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelCashierTransactionTypeWithDefaults

`func NewHotelCashierTransactionTypeWithDefaults() *HotelCashierTransactionType`

NewHotelCashierTransactionTypeWithDefaults instantiates a new HotelCashierTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactions

`func (o *HotelCashierTransactionType) GetTransactions() []CashierTransactionType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *HotelCashierTransactionType) GetTransactionsOk() (*[]CashierTransactionType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *HotelCashierTransactionType) SetTransactions(v []CashierTransactionType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *HotelCashierTransactionType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelCashierTransactionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelCashierTransactionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelCashierTransactionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelCashierTransactionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


