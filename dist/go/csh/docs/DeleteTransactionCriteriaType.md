# DeleteTransactionCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**TransactionList** | Pointer to **[]float32** | The unique transaction number of this transaction. | [optional] 
**ReasonCode** | Pointer to **string** | The reason code for the deletion. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewDeleteTransactionCriteriaType

`func NewDeleteTransactionCriteriaType() *DeleteTransactionCriteriaType`

NewDeleteTransactionCriteriaType instantiates a new DeleteTransactionCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteTransactionCriteriaTypeWithDefaults

`func NewDeleteTransactionCriteriaTypeWithDefaults() *DeleteTransactionCriteriaType`

NewDeleteTransactionCriteriaTypeWithDefaults instantiates a new DeleteTransactionCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DeleteTransactionCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DeleteTransactionCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DeleteTransactionCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DeleteTransactionCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransactionList

`func (o *DeleteTransactionCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *DeleteTransactionCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *DeleteTransactionCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *DeleteTransactionCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetReasonCode

`func (o *DeleteTransactionCriteriaType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *DeleteTransactionCriteriaType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *DeleteTransactionCriteriaType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *DeleteTransactionCriteriaType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetCashierId

`func (o *DeleteTransactionCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DeleteTransactionCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DeleteTransactionCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DeleteTransactionCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


