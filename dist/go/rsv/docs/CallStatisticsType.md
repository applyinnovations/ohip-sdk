# CallStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppUserName** | Pointer to **string** | Application User for which the Call Statistics is being retrieved. | [optional] 
**TotalCallTime** | Pointer to **int32** | Holds Total Call Time by Agent. | [optional] 
**TotalCalls** | Pointer to **int32** | Holds Total Calls made by Agent. | [optional] 
**AverageCallTime** | Pointer to **int32** | Holds Average Call Time of Agent. | [optional] 
**TotalSales** | Pointer to **int32** | Holds Total Sales by Agent. | [optional] 
**TotalRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCallStatisticsType

`func NewCallStatisticsType() *CallStatisticsType`

NewCallStatisticsType instantiates a new CallStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallStatisticsTypeWithDefaults

`func NewCallStatisticsTypeWithDefaults() *CallStatisticsType`

NewCallStatisticsTypeWithDefaults instantiates a new CallStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppUserName

`func (o *CallStatisticsType) GetAppUserName() string`

GetAppUserName returns the AppUserName field if non-nil, zero value otherwise.

### GetAppUserNameOk

`func (o *CallStatisticsType) GetAppUserNameOk() (*string, bool)`

GetAppUserNameOk returns a tuple with the AppUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppUserName

`func (o *CallStatisticsType) SetAppUserName(v string)`

SetAppUserName sets AppUserName field to given value.

### HasAppUserName

`func (o *CallStatisticsType) HasAppUserName() bool`

HasAppUserName returns a boolean if a field has been set.

### GetTotalCallTime

`func (o *CallStatisticsType) GetTotalCallTime() int32`

GetTotalCallTime returns the TotalCallTime field if non-nil, zero value otherwise.

### GetTotalCallTimeOk

`func (o *CallStatisticsType) GetTotalCallTimeOk() (*int32, bool)`

GetTotalCallTimeOk returns a tuple with the TotalCallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCallTime

`func (o *CallStatisticsType) SetTotalCallTime(v int32)`

SetTotalCallTime sets TotalCallTime field to given value.

### HasTotalCallTime

`func (o *CallStatisticsType) HasTotalCallTime() bool`

HasTotalCallTime returns a boolean if a field has been set.

### GetTotalCalls

`func (o *CallStatisticsType) GetTotalCalls() int32`

GetTotalCalls returns the TotalCalls field if non-nil, zero value otherwise.

### GetTotalCallsOk

`func (o *CallStatisticsType) GetTotalCallsOk() (*int32, bool)`

GetTotalCallsOk returns a tuple with the TotalCalls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCalls

`func (o *CallStatisticsType) SetTotalCalls(v int32)`

SetTotalCalls sets TotalCalls field to given value.

### HasTotalCalls

`func (o *CallStatisticsType) HasTotalCalls() bool`

HasTotalCalls returns a boolean if a field has been set.

### GetAverageCallTime

`func (o *CallStatisticsType) GetAverageCallTime() int32`

GetAverageCallTime returns the AverageCallTime field if non-nil, zero value otherwise.

### GetAverageCallTimeOk

`func (o *CallStatisticsType) GetAverageCallTimeOk() (*int32, bool)`

GetAverageCallTimeOk returns a tuple with the AverageCallTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAverageCallTime

`func (o *CallStatisticsType) SetAverageCallTime(v int32)`

SetAverageCallTime sets AverageCallTime field to given value.

### HasAverageCallTime

`func (o *CallStatisticsType) HasAverageCallTime() bool`

HasAverageCallTime returns a boolean if a field has been set.

### GetTotalSales

`func (o *CallStatisticsType) GetTotalSales() int32`

GetTotalSales returns the TotalSales field if non-nil, zero value otherwise.

### GetTotalSalesOk

`func (o *CallStatisticsType) GetTotalSalesOk() (*int32, bool)`

GetTotalSalesOk returns a tuple with the TotalSales field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSales

`func (o *CallStatisticsType) SetTotalSales(v int32)`

SetTotalSales sets TotalSales field to given value.

### HasTotalSales

`func (o *CallStatisticsType) HasTotalSales() bool`

HasTotalSales returns a boolean if a field has been set.

### GetTotalRevenue

`func (o *CallStatisticsType) GetTotalRevenue() CurrencyAmountType`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *CallStatisticsType) GetTotalRevenueOk() (*CurrencyAmountType, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *CallStatisticsType) SetTotalRevenue(v CurrencyAmountType)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *CallStatisticsType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


