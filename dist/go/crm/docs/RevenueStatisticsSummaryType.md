# RevenueStatisticsSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueDetails** | Pointer to [**[]RevenueStatisticsDetailType**](RevenueStatisticsDetailType.md) | The collection of profile revenue statistics. | [optional] 
**RevenueBucketsSummary** | Pointer to [**RevenueBucketListType**](RevenueBucketListType.md) |  | [optional] 
**Year** | Pointer to **string** | Year of the revenue. | [optional] 

## Methods

### NewRevenueStatisticsSummaryType

`func NewRevenueStatisticsSummaryType() *RevenueStatisticsSummaryType`

NewRevenueStatisticsSummaryType instantiates a new RevenueStatisticsSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueStatisticsSummaryTypeWithDefaults

`func NewRevenueStatisticsSummaryTypeWithDefaults() *RevenueStatisticsSummaryType`

NewRevenueStatisticsSummaryTypeWithDefaults instantiates a new RevenueStatisticsSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueDetails

`func (o *RevenueStatisticsSummaryType) GetRevenueDetails() []RevenueStatisticsDetailType`

GetRevenueDetails returns the RevenueDetails field if non-nil, zero value otherwise.

### GetRevenueDetailsOk

`func (o *RevenueStatisticsSummaryType) GetRevenueDetailsOk() (*[]RevenueStatisticsDetailType, bool)`

GetRevenueDetailsOk returns a tuple with the RevenueDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDetails

`func (o *RevenueStatisticsSummaryType) SetRevenueDetails(v []RevenueStatisticsDetailType)`

SetRevenueDetails sets RevenueDetails field to given value.

### HasRevenueDetails

`func (o *RevenueStatisticsSummaryType) HasRevenueDetails() bool`

HasRevenueDetails returns a boolean if a field has been set.

### GetRevenueBucketsSummary

`func (o *RevenueStatisticsSummaryType) GetRevenueBucketsSummary() RevenueBucketListType`

GetRevenueBucketsSummary returns the RevenueBucketsSummary field if non-nil, zero value otherwise.

### GetRevenueBucketsSummaryOk

`func (o *RevenueStatisticsSummaryType) GetRevenueBucketsSummaryOk() (*RevenueBucketListType, bool)`

GetRevenueBucketsSummaryOk returns a tuple with the RevenueBucketsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBucketsSummary

`func (o *RevenueStatisticsSummaryType) SetRevenueBucketsSummary(v RevenueBucketListType)`

SetRevenueBucketsSummary sets RevenueBucketsSummary field to given value.

### HasRevenueBucketsSummary

`func (o *RevenueStatisticsSummaryType) HasRevenueBucketsSummary() bool`

HasRevenueBucketsSummary returns a boolean if a field has been set.

### GetYear

`func (o *RevenueStatisticsSummaryType) GetYear() string`

GetYear returns the Year field if non-nil, zero value otherwise.

### GetYearOk

`func (o *RevenueStatisticsSummaryType) GetYearOk() (*string, bool)`

GetYearOk returns a tuple with the Year field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYear

`func (o *RevenueStatisticsSummaryType) SetYear(v string)`

SetYear sets Year field to given value.

### HasYear

`func (o *RevenueStatisticsSummaryType) HasYear() bool`

HasYear returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


