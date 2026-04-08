# TrxSplitCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**TransactionList** | Pointer to **[]float32** | The unique transaction number of this transaction. | [optional] 
**SplitDetails** | Pointer to [**TrxSplitCriteriaTypeSplitDetails**](TrxSplitCriteriaTypeSplitDetails.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewTrxSplitCriteriaType

`func NewTrxSplitCriteriaType() *TrxSplitCriteriaType`

NewTrxSplitCriteriaType instantiates a new TrxSplitCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxSplitCriteriaTypeWithDefaults

`func NewTrxSplitCriteriaTypeWithDefaults() *TrxSplitCriteriaType`

NewTrxSplitCriteriaTypeWithDefaults instantiates a new TrxSplitCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TrxSplitCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxSplitCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxSplitCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxSplitCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionList

`func (o *TrxSplitCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *TrxSplitCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *TrxSplitCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *TrxSplitCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetSplitDetails

`func (o *TrxSplitCriteriaType) GetSplitDetails() TrxSplitCriteriaTypeSplitDetails`

GetSplitDetails returns the SplitDetails field if non-nil, zero value otherwise.

### GetSplitDetailsOk

`func (o *TrxSplitCriteriaType) GetSplitDetailsOk() (*TrxSplitCriteriaTypeSplitDetails, bool)`

GetSplitDetailsOk returns a tuple with the SplitDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSplitDetails

`func (o *TrxSplitCriteriaType) SetSplitDetails(v TrxSplitCriteriaTypeSplitDetails)`

SetSplitDetails sets SplitDetails field to given value.

### HasSplitDetails

`func (o *TrxSplitCriteriaType) HasSplitDetails() bool`

HasSplitDetails returns a boolean if a field has been set.

### GetCashierId

`func (o *TrxSplitCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TrxSplitCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TrxSplitCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TrxSplitCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


