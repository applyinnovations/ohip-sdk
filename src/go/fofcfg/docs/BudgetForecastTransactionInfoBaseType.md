# BudgetForecastTransactionInfoBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Revenue** | Pointer to **bool** | Flag to indicate if revenue information has to be included. | [optional] 
**TransactionCodeInformation** | Pointer to [**[]TransactionCodeInformationBaseType**](TransactionCodeInformationBaseType.md) | Budget Forecast information for Transaction segment code . | [optional] 

## Methods

### NewBudgetForecastTransactionInfoBaseType

`func NewBudgetForecastTransactionInfoBaseType() *BudgetForecastTransactionInfoBaseType`

NewBudgetForecastTransactionInfoBaseType instantiates a new BudgetForecastTransactionInfoBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastTransactionInfoBaseTypeWithDefaults

`func NewBudgetForecastTransactionInfoBaseTypeWithDefaults() *BudgetForecastTransactionInfoBaseType`

NewBudgetForecastTransactionInfoBaseTypeWithDefaults instantiates a new BudgetForecastTransactionInfoBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenue

`func (o *BudgetForecastTransactionInfoBaseType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *BudgetForecastTransactionInfoBaseType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *BudgetForecastTransactionInfoBaseType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *BudgetForecastTransactionInfoBaseType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetTransactionCodeInformation

`func (o *BudgetForecastTransactionInfoBaseType) GetTransactionCodeInformation() []TransactionCodeInformationBaseType`

GetTransactionCodeInformation returns the TransactionCodeInformation field if non-nil, zero value otherwise.

### GetTransactionCodeInformationOk

`func (o *BudgetForecastTransactionInfoBaseType) GetTransactionCodeInformationOk() (*[]TransactionCodeInformationBaseType, bool)`

GetTransactionCodeInformationOk returns a tuple with the TransactionCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeInformation

`func (o *BudgetForecastTransactionInfoBaseType) SetTransactionCodeInformation(v []TransactionCodeInformationBaseType)`

SetTransactionCodeInformation sets TransactionCodeInformation field to given value.

### HasTransactionCodeInformation

`func (o *BudgetForecastTransactionInfoBaseType) HasTransactionCodeInformation() bool`

HasTransactionCodeInformation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


