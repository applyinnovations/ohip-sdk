# MonthlyTransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Month** | Pointer to **int32** | Month number | [optional] 
**Revenue** | Pointer to **float32** | Revenue information for a month. | [optional] 

## Methods

### NewMonthlyTransactionInfoType

`func NewMonthlyTransactionInfoType() *MonthlyTransactionInfoType`

NewMonthlyTransactionInfoType instantiates a new MonthlyTransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonthlyTransactionInfoTypeWithDefaults

`func NewMonthlyTransactionInfoTypeWithDefaults() *MonthlyTransactionInfoType`

NewMonthlyTransactionInfoTypeWithDefaults instantiates a new MonthlyTransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMonth

`func (o *MonthlyTransactionInfoType) GetMonth() int32`

GetMonth returns the Month field if non-nil, zero value otherwise.

### GetMonthOk

`func (o *MonthlyTransactionInfoType) GetMonthOk() (*int32, bool)`

GetMonthOk returns a tuple with the Month field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonth

`func (o *MonthlyTransactionInfoType) SetMonth(v int32)`

SetMonth sets Month field to given value.

### HasMonth

`func (o *MonthlyTransactionInfoType) HasMonth() bool`

HasMonth returns a boolean if a field has been set.

### GetRevenue

`func (o *MonthlyTransactionInfoType) GetRevenue() float32`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *MonthlyTransactionInfoType) GetRevenueOk() (*float32, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *MonthlyTransactionInfoType) SetRevenue(v float32)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *MonthlyTransactionInfoType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


