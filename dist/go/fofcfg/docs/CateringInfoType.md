# CateringInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalRevenue** | Pointer to **float32** | Total revenue for segment code. | [optional] 
**TotalCovers** | Pointer to **float32** | Total Covers for segment code. | [optional] 
**MonthlyInfo** | Pointer to [**[]MonthlyCateringInfoType**](MonthlyCateringInfoType.md) | Catering information for each month for segment code. | [optional] 

## Methods

### NewCateringInfoType

`func NewCateringInfoType() *CateringInfoType`

NewCateringInfoType instantiates a new CateringInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringInfoTypeWithDefaults

`func NewCateringInfoTypeWithDefaults() *CateringInfoType`

NewCateringInfoTypeWithDefaults instantiates a new CateringInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalRevenue

`func (o *CateringInfoType) GetTotalRevenue() float32`

GetTotalRevenue returns the TotalRevenue field if non-nil, zero value otherwise.

### GetTotalRevenueOk

`func (o *CateringInfoType) GetTotalRevenueOk() (*float32, bool)`

GetTotalRevenueOk returns a tuple with the TotalRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRevenue

`func (o *CateringInfoType) SetTotalRevenue(v float32)`

SetTotalRevenue sets TotalRevenue field to given value.

### HasTotalRevenue

`func (o *CateringInfoType) HasTotalRevenue() bool`

HasTotalRevenue returns a boolean if a field has been set.

### GetTotalCovers

`func (o *CateringInfoType) GetTotalCovers() float32`

GetTotalCovers returns the TotalCovers field if non-nil, zero value otherwise.

### GetTotalCoversOk

`func (o *CateringInfoType) GetTotalCoversOk() (*float32, bool)`

GetTotalCoversOk returns a tuple with the TotalCovers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCovers

`func (o *CateringInfoType) SetTotalCovers(v float32)`

SetTotalCovers sets TotalCovers field to given value.

### HasTotalCovers

`func (o *CateringInfoType) HasTotalCovers() bool`

HasTotalCovers returns a boolean if a field has been set.

### GetMonthlyInfo

`func (o *CateringInfoType) GetMonthlyInfo() []MonthlyCateringInfoType`

GetMonthlyInfo returns the MonthlyInfo field if non-nil, zero value otherwise.

### GetMonthlyInfoOk

`func (o *CateringInfoType) GetMonthlyInfoOk() (*[]MonthlyCateringInfoType, bool)`

GetMonthlyInfoOk returns a tuple with the MonthlyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthlyInfo

`func (o *CateringInfoType) SetMonthlyInfo(v []MonthlyCateringInfoType)`

SetMonthlyInfo sets MonthlyInfo field to given value.

### HasMonthlyInfo

`func (o *CateringInfoType) HasMonthlyInfo() bool`

HasMonthlyInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


