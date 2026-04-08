# StayRevenuesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueAmount** | Pointer to **float32** | Specifies the amount of revenue. | [optional] 
**RevenueBucketCode** | **string** | Specifies the bucket code to which the revenue belongs. | 
**TransactionDate** | **string** | Date on which the transaction was done. | 

## Methods

### NewStayRevenuesType

`func NewStayRevenuesType(revenueBucketCode string, transactionDate string, ) *StayRevenuesType`

NewStayRevenuesType instantiates a new StayRevenuesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayRevenuesTypeWithDefaults

`func NewStayRevenuesTypeWithDefaults() *StayRevenuesType`

NewStayRevenuesTypeWithDefaults instantiates a new StayRevenuesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueAmount

`func (o *StayRevenuesType) GetRevenueAmount() float32`

GetRevenueAmount returns the RevenueAmount field if non-nil, zero value otherwise.

### GetRevenueAmountOk

`func (o *StayRevenuesType) GetRevenueAmountOk() (*float32, bool)`

GetRevenueAmountOk returns a tuple with the RevenueAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueAmount

`func (o *StayRevenuesType) SetRevenueAmount(v float32)`

SetRevenueAmount sets RevenueAmount field to given value.

### HasRevenueAmount

`func (o *StayRevenuesType) HasRevenueAmount() bool`

HasRevenueAmount returns a boolean if a field has been set.

### GetRevenueBucketCode

`func (o *StayRevenuesType) GetRevenueBucketCode() string`

GetRevenueBucketCode returns the RevenueBucketCode field if non-nil, zero value otherwise.

### GetRevenueBucketCodeOk

`func (o *StayRevenuesType) GetRevenueBucketCodeOk() (*string, bool)`

GetRevenueBucketCodeOk returns a tuple with the RevenueBucketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketCode

`func (o *StayRevenuesType) SetRevenueBucketCode(v string)`

SetRevenueBucketCode sets RevenueBucketCode field to given value.


### GetTransactionDate

`func (o *StayRevenuesType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *StayRevenuesType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *StayRevenuesType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


