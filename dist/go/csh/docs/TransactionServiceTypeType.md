# TransactionServiceTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ServiceType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Revenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Payment** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TotalPostings** | Pointer to **int32** | Running total number of the service type. | [optional] 

## Methods

### NewTransactionServiceTypeType

`func NewTransactionServiceTypeType() *TransactionServiceTypeType`

NewTransactionServiceTypeType instantiates a new TransactionServiceTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionServiceTypeTypeWithDefaults

`func NewTransactionServiceTypeTypeWithDefaults() *TransactionServiceTypeType`

NewTransactionServiceTypeTypeWithDefaults instantiates a new TransactionServiceTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetServiceType

`func (o *TransactionServiceTypeType) GetServiceType() CodeDescriptionType`

GetServiceType returns the ServiceType field if non-nil, zero value otherwise.

### GetServiceTypeOk

`func (o *TransactionServiceTypeType) GetServiceTypeOk() (*CodeDescriptionType, bool)`

GetServiceTypeOk returns a tuple with the ServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceType

`func (o *TransactionServiceTypeType) SetServiceType(v CodeDescriptionType)`

SetServiceType sets ServiceType field to given value.

### HasServiceType

`func (o *TransactionServiceTypeType) HasServiceType() bool`

HasServiceType returns a boolean if a field has been set.

### GetRevenue

`func (o *TransactionServiceTypeType) GetRevenue() CurrencyAmountType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *TransactionServiceTypeType) GetRevenueOk() (*CurrencyAmountType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *TransactionServiceTypeType) SetRevenue(v CurrencyAmountType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *TransactionServiceTypeType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetPayment

`func (o *TransactionServiceTypeType) GetPayment() CurrencyAmountType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *TransactionServiceTypeType) GetPaymentOk() (*CurrencyAmountType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *TransactionServiceTypeType) SetPayment(v CurrencyAmountType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *TransactionServiceTypeType) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetBalance

`func (o *TransactionServiceTypeType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *TransactionServiceTypeType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *TransactionServiceTypeType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *TransactionServiceTypeType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetTotalPostings

`func (o *TransactionServiceTypeType) GetTotalPostings() int32`

GetTotalPostings returns the TotalPostings field if non-nil, zero value otherwise.

### GetTotalPostingsOk

`func (o *TransactionServiceTypeType) GetTotalPostingsOk() (*int32, bool)`

GetTotalPostingsOk returns a tuple with the TotalPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPostings

`func (o *TransactionServiceTypeType) SetTotalPostings(v int32)`

SetTotalPostings sets TotalPostings field to given value.

### HasTotalPostings

`func (o *TransactionServiceTypeType) HasTotalPostings() bool`

HasTotalPostings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


