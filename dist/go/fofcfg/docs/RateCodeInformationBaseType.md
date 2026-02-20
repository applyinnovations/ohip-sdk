# RateCodeInformationBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateCode** | Pointer to **string** | Segment code for which budget forecast information is fetched. | [optional] 
**RateCodeDescription** | Pointer to **string** | Segment code description for segment code. | [optional] 
**BudgetRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**ForecastRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 

## Methods

### NewRateCodeInformationBaseType

`func NewRateCodeInformationBaseType() *RateCodeInformationBaseType`

NewRateCodeInformationBaseType instantiates a new RateCodeInformationBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateCodeInformationBaseTypeWithDefaults

`func NewRateCodeInformationBaseTypeWithDefaults() *RateCodeInformationBaseType`

NewRateCodeInformationBaseTypeWithDefaults instantiates a new RateCodeInformationBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateCode

`func (o *RateCodeInformationBaseType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RateCodeInformationBaseType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RateCodeInformationBaseType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RateCodeInformationBaseType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateCodeDescription

`func (o *RateCodeInformationBaseType) GetRateCodeDescription() string`

GetRateCodeDescription returns the RateCodeDescription field if non-nil, zero value otherwise.

### GetRateCodeDescriptionOk

`func (o *RateCodeInformationBaseType) GetRateCodeDescriptionOk() (*string, bool)`

GetRateCodeDescriptionOk returns a tuple with the RateCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeDescription

`func (o *RateCodeInformationBaseType) SetRateCodeDescription(v string)`

SetRateCodeDescription sets RateCodeDescription field to given value.

### HasRateCodeDescription

`func (o *RateCodeInformationBaseType) HasRateCodeDescription() bool`

HasRateCodeDescription returns a boolean if a field has been set.

### GetBudgetRevenueInfo

`func (o *RateCodeInformationBaseType) GetBudgetRevenueInfo() RevenueNightsInfoType`

GetBudgetRevenueInfo returns the BudgetRevenueInfo field if non-nil, zero value otherwise.

### GetBudgetRevenueInfoOk

`func (o *RateCodeInformationBaseType) GetBudgetRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetBudgetRevenueInfoOk returns a tuple with the BudgetRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetRevenueInfo

`func (o *RateCodeInformationBaseType) SetBudgetRevenueInfo(v RevenueNightsInfoType)`

SetBudgetRevenueInfo sets BudgetRevenueInfo field to given value.

### HasBudgetRevenueInfo

`func (o *RateCodeInformationBaseType) HasBudgetRevenueInfo() bool`

HasBudgetRevenueInfo returns a boolean if a field has been set.

### GetForecastRevenueInfo

`func (o *RateCodeInformationBaseType) GetForecastRevenueInfo() RevenueNightsInfoType`

GetForecastRevenueInfo returns the ForecastRevenueInfo field if non-nil, zero value otherwise.

### GetForecastRevenueInfoOk

`func (o *RateCodeInformationBaseType) GetForecastRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetForecastRevenueInfoOk returns a tuple with the ForecastRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastRevenueInfo

`func (o *RateCodeInformationBaseType) SetForecastRevenueInfo(v RevenueNightsInfoType)`

SetForecastRevenueInfo sets ForecastRevenueInfo field to given value.

### HasForecastRevenueInfo

`func (o *RateCodeInformationBaseType) HasForecastRevenueInfo() bool`

HasForecastRevenueInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


