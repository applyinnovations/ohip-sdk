# CashierTransactionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierInfo** | Pointer to [**CashierClosureNoType**](CashierClosureNoType.md) |  | [optional] 
**SummaryTransactionList** | Pointer to [**[]CashierTransactionType**](CashierTransactionType.md) | Summary of all transactions during Cashier Shift. | [optional] 
**HotelTransactionList** | Pointer to [**[]HotelCashierTransactionType**](HotelCashierTransactionType.md) | Hotel&#39;s transactions during Cashier Shift. | [optional] 
**TrxCodesInfo** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 

## Methods

### NewCashierTransactionsType

`func NewCashierTransactionsType() *CashierTransactionsType`

NewCashierTransactionsType instantiates a new CashierTransactionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierTransactionsTypeWithDefaults

`func NewCashierTransactionsTypeWithDefaults() *CashierTransactionsType`

NewCashierTransactionsTypeWithDefaults instantiates a new CashierTransactionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierInfo

`func (o *CashierTransactionsType) GetCashierInfo() CashierClosureNoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *CashierTransactionsType) GetCashierInfoOk() (*CashierClosureNoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *CashierTransactionsType) SetCashierInfo(v CashierClosureNoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *CashierTransactionsType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetSummaryTransactionList

`func (o *CashierTransactionsType) GetSummaryTransactionList() []CashierTransactionType`

GetSummaryTransactionList returns the SummaryTransactionList field if non-nil, zero value otherwise.

### GetSummaryTransactionListOk

`func (o *CashierTransactionsType) GetSummaryTransactionListOk() (*[]CashierTransactionType, bool)`

GetSummaryTransactionListOk returns a tuple with the SummaryTransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryTransactionList

`func (o *CashierTransactionsType) SetSummaryTransactionList(v []CashierTransactionType)`

SetSummaryTransactionList sets SummaryTransactionList field to given value.

### HasSummaryTransactionList

`func (o *CashierTransactionsType) HasSummaryTransactionList() bool`

HasSummaryTransactionList returns a boolean if a field has been set.

### GetHotelTransactionList

`func (o *CashierTransactionsType) GetHotelTransactionList() []HotelCashierTransactionType`

GetHotelTransactionList returns the HotelTransactionList field if non-nil, zero value otherwise.

### GetHotelTransactionListOk

`func (o *CashierTransactionsType) GetHotelTransactionListOk() (*[]HotelCashierTransactionType, bool)`

GetHotelTransactionListOk returns a tuple with the HotelTransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelTransactionList

`func (o *CashierTransactionsType) SetHotelTransactionList(v []HotelCashierTransactionType)`

SetHotelTransactionList sets HotelTransactionList field to given value.

### HasHotelTransactionList

`func (o *CashierTransactionsType) HasHotelTransactionList() bool`

HasHotelTransactionList returns a boolean if a field has been set.

### GetTrxCodesInfo

`func (o *CashierTransactionsType) GetTrxCodesInfo() []TrxInfoType`

GetTrxCodesInfo returns the TrxCodesInfo field if non-nil, zero value otherwise.

### GetTrxCodesInfoOk

`func (o *CashierTransactionsType) GetTrxCodesInfoOk() (*[]TrxInfoType, bool)`

GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrxCodesInfo

`func (o *CashierTransactionsType) SetTrxCodesInfo(v []TrxInfoType)`

SetTrxCodesInfo sets TrxCodesInfo field to given value.

### HasTrxCodesInfo

`func (o *CashierTransactionsType) HasTrxCodesInfo() bool`

HasTrxCodesInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


