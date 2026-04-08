# RevenueNightsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalRevenue** | Pointer to **float32** | Total revenue for segment code. | [optional] 
**TotalNights** | Pointer to **float32** | Total Nights for segment code. | [optional] 
**MonthlyRevenueInfo** | Pointer to [**[]MonthlyRevenueNightsInfoType**](MonthlyRevenueNightsInfoType.md) | Revenue information for each month for segment code. | [optional] 

## Methods

### NewRevenueNightsInfoType

`func NewRevenueNightsInfoType() *RevenueNightsInfoType`

NewRevenueNightsInfoType instantiates a new RevenueNightsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueNightsInfoTypeWithDefaults

`func NewRevenueNightsInfoTypeWithDefaults() *RevenueNightsInfoType`

NewRevenueNightsInfoTypeWithDefaults instantiates a new RevenueNightsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalRevenue

`func (o *RevenueNightsInfoType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *RevenueNightsInfoType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *RevenueNightsInfoType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *RevenueNightsInfoType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetTotalNights

`func (o *RevenueNightsInfoType) GetTotalNights() float32`

GetTotalNights returns the TotalNights field if non-nil, zero value otherwise.

### GetTotalNightsOk

`func (o *RevenueNightsInfoType) GetTotalNightsOk() (*float32, bool)`

GetTotalNightsOk returns a tuple with the TotalNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalNights

`func (o *RevenueNightsInfoType) SetTotalNights(v float32)`

SetTotalNights sets TotalNights field to given value.

### HasTotalNights

`func (o *RevenueNightsInfoType) HasTotalNights() bool`

HasTotalNights returns a boolean if a field has been set.

### GetMonthlyRevenueInfo

`func (o *RevenueNightsInfoType) GetMonthlyRevenueInfo() []MonthlyRevenueNightsInfoType`

GetMonthlyRevenueInfo returns the MonthlyRevenueInfo field if non-nil, zero value otherwise.

### GetMonthlyRevenueInfoOk

`func (o *RevenueNightsInfoType) GetMonthlyRevenueInfoOk() (*[]MonthlyRevenueNightsInfoType, bool)`

GetMonthlyRevenueInfoOk returns a tuple with the MonthlyRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthlyRevenueInfo

`func (o *RevenueNightsInfoType) SetMonthlyRevenueInfo(v []MonthlyRevenueNightsInfoType)`

SetMonthlyRevenueInfo sets MonthlyRevenueInfo field to given value.

### HasMonthlyRevenueInfo

`func (o *RevenueNightsInfoType) HasMonthlyRevenueInfo() bool`

HasMonthlyRevenueInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


