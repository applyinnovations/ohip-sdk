# RateCodeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**AFVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**ActualRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**BudgetRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**FBVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**ForecastRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**RateCode** | Pointer to **string** | Segment code for which budget forecast information is fetched. | [optional] 
**RateCodeDescription** | Pointer to **string** | Segment code description for segment code. | [optional] 

## Methods

### NewRateCodeInformationType

`func NewRateCodeInformationType() *RateCodeInformationType`

NewRateCodeInformationType instantiates a new RateCodeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateCodeInformationTypeWithDefaults

`func NewRateCodeInformationTypeWithDefaults() *RateCodeInformationType`

NewRateCodeInformationTypeWithDefaults instantiates a new RateCodeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceInfo

`func (o *RateCodeInformationType) GetABVarianceInfo() RevenueNightsVarianceInfoType`

GetABVarianceInfo returns the ABVarianceInfo field if non-nil, zero value otherwise.

### GetABVarianceInfoOk

`func (o *RateCodeInformationType) GetABVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceInfo

`func (o *RateCodeInformationType) SetABVarianceInfo(v RevenueNightsVarianceInfoType)`

SetABVarianceInfo sets ABVarianceInfo field to given value.

### HasABVarianceInfo

`func (o *RateCodeInformationType) HasABVarianceInfo() bool`

HasABVarianceInfo returns a boolean if a field has been set.

### GetAFVarianceInfo

`func (o *RateCodeInformationType) GetAFVarianceInfo() RevenueNightsVarianceInfoType`

GetAFVarianceInfo returns the AFVarianceInfo field if non-nil, zero value otherwise.

### GetAFVarianceInfoOk

`func (o *RateCodeInformationType) GetAFVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceInfo

`func (o *RateCodeInformationType) SetAFVarianceInfo(v RevenueNightsVarianceInfoType)`

SetAFVarianceInfo sets AFVarianceInfo field to given value.

### HasAFVarianceInfo

`func (o *RateCodeInformationType) HasAFVarianceInfo() bool`

HasAFVarianceInfo returns a boolean if a field has been set.

### GetActualRevenueInfo

`func (o *RateCodeInformationType) GetActualRevenueInfo() RevenueNightsInfoType`

GetActualRevenueInfo returns the ActualRevenueInfo field if non-nil, zero value otherwise.

### GetActualRevenueInfoOk

`func (o *RateCodeInformationType) GetActualRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetActualRevenueInfoOk returns a tuple with the ActualRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualRevenueInfo

`func (o *RateCodeInformationType) SetActualRevenueInfo(v RevenueNightsInfoType)`

SetActualRevenueInfo sets ActualRevenueInfo field to given value.

### HasActualRevenueInfo

`func (o *RateCodeInformationType) HasActualRevenueInfo() bool`

HasActualRevenueInfo returns a boolean if a field has been set.

### GetBudgetRevenueInfo

`func (o *RateCodeInformationType) GetBudgetRevenueInfo() RevenueNightsInfoType`

GetBudgetRevenueInfo returns the BudgetRevenueInfo field if non-nil, zero value otherwise.

### GetBudgetRevenueInfoOk

`func (o *RateCodeInformationType) GetBudgetRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetBudgetRevenueInfoOk returns a tuple with the BudgetRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetRevenueInfo

`func (o *RateCodeInformationType) SetBudgetRevenueInfo(v RevenueNightsInfoType)`

SetBudgetRevenueInfo sets BudgetRevenueInfo field to given value.

### HasBudgetRevenueInfo

`func (o *RateCodeInformationType) HasBudgetRevenueInfo() bool`

HasBudgetRevenueInfo returns a boolean if a field has been set.

### GetFBVarianceInfo

`func (o *RateCodeInformationType) GetFBVarianceInfo() RevenueNightsVarianceInfoType`

GetFBVarianceInfo returns the FBVarianceInfo field if non-nil, zero value otherwise.

### GetFBVarianceInfoOk

`func (o *RateCodeInformationType) GetFBVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceInfo

`func (o *RateCodeInformationType) SetFBVarianceInfo(v RevenueNightsVarianceInfoType)`

SetFBVarianceInfo sets FBVarianceInfo field to given value.

### HasFBVarianceInfo

`func (o *RateCodeInformationType) HasFBVarianceInfo() bool`

HasFBVarianceInfo returns a boolean if a field has been set.

### GetForecastRevenueInfo

`func (o *RateCodeInformationType) GetForecastRevenueInfo() RevenueNightsInfoType`

GetForecastRevenueInfo returns the ForecastRevenueInfo field if non-nil, zero value otherwise.

### GetForecastRevenueInfoOk

`func (o *RateCodeInformationType) GetForecastRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetForecastRevenueInfoOk returns a tuple with the ForecastRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastRevenueInfo

`func (o *RateCodeInformationType) SetForecastRevenueInfo(v RevenueNightsInfoType)`

SetForecastRevenueInfo sets ForecastRevenueInfo field to given value.

### HasForecastRevenueInfo

`func (o *RateCodeInformationType) HasForecastRevenueInfo() bool`

HasForecastRevenueInfo returns a boolean if a field has been set.

### GetRateCode

`func (o *RateCodeInformationType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RateCodeInformationType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RateCodeInformationType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RateCodeInformationType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRateCodeDescription

`func (o *RateCodeInformationType) GetRateCodeDescription() string`

GetRateCodeDescription returns the RateCodeDescription field if non-nil, zero value otherwise.

### GetRateCodeDescriptionOk

`func (o *RateCodeInformationType) GetRateCodeDescriptionOk() (*string, bool)`

GetRateCodeDescriptionOk returns a tuple with the RateCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeDescription

`func (o *RateCodeInformationType) SetRateCodeDescription(v string)`

SetRateCodeDescription sets RateCodeDescription field to given value.

### HasRateCodeDescription

`func (o *RateCodeInformationType) HasRateCodeDescription() bool`

HasRateCodeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


