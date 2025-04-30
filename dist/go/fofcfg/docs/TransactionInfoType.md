# TransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalRevenue** | Pointer to **float32** | Total Value for TRANSACTION segment code. | [optional] 
**MonthlyRevenueInfo** | Pointer to [**[]MonthlyTransactionInfoType**](MonthlyTransactionInfoType.md) | Value information for each month for TRANSACTION segment code. | [optional] 

## Methods

### NewTransactionInfoType

`func NewTransactionInfoType() *TransactionInfoType`

NewTransactionInfoType instantiates a new TransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionInfoTypeWithDefaults

`func NewTransactionInfoTypeWithDefaults() *TransactionInfoType`

NewTransactionInfoTypeWithDefaults instantiates a new TransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalRevenue

`func (o *TransactionInfoType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *TransactionInfoType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *TransactionInfoType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *TransactionInfoType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetMonthlyRevenueInfo

`func (o *TransactionInfoType) GetMonthlyRevenueInfo() []MonthlyTransactionInfoType`

GetMonthlyRevenueInfo returns the MonthlyRevenueInfo field if non-nil, zero value otherwise.

### GetMonthlyRevenueInfoOk

`func (o *TransactionInfoType) GetMonthlyRevenueInfoOk() (*[]MonthlyTransactionInfoType, bool)`

GetMonthlyRevenueInfoOk returns a tuple with the MonthlyRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthlyRevenueInfo

`func (o *TransactionInfoType) SetMonthlyRevenueInfo(v []MonthlyTransactionInfoType)`

SetMonthlyRevenueInfo sets MonthlyRevenueInfo field to given value.

### HasMonthlyRevenueInfo

`func (o *TransactionInfoType) HasMonthlyRevenueInfo() bool`

HasMonthlyRevenueInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


