# MarketCodeTotalInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BudgetTotalInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**ForecastTotalInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**ActualTotalInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**AFVarianceTotalInfo** | Pointer to [**[]MonthlyRevenueNightsVarianceInfoType**](MonthlyRevenueNightsVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 
**ABVarianceTotalInfo** | Pointer to [**[]MonthlyRevenueNightsVarianceInfoType**](MonthlyRevenueNightsVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 
**FBVarianceTotalInfo** | Pointer to [**[]MonthlyRevenueNightsVarianceInfoType**](MonthlyRevenueNightsVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 

## Methods

### NewMarketCodeTotalInformationType

`func NewMarketCodeTotalInformationType() *MarketCodeTotalInformationType`

NewMarketCodeTotalInformationType instantiates a new MarketCodeTotalInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketCodeTotalInformationTypeWithDefaults

`func NewMarketCodeTotalInformationTypeWithDefaults() *MarketCodeTotalInformationType`

NewMarketCodeTotalInformationTypeWithDefaults instantiates a new MarketCodeTotalInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudgetTotalInfo

`func (o *MarketCodeTotalInformationType) GetBudgetTotalInfo() RevenueNightsInfoType`

GetBudgetTotalInfo returns the BudgetTotalInfo field if non-nil, zero value otherwise.

### GetBudgetTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetBudgetTotalInfoOk() (*RevenueNightsInfoType, bool)`

GetBudgetTotalInfoOk returns a tuple with the BudgetTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetTotalInfo

`func (o *MarketCodeTotalInformationType) SetBudgetTotalInfo(v RevenueNightsInfoType)`

SetBudgetTotalInfo sets BudgetTotalInfo field to given value.

### HasBudgetTotalInfo

`func (o *MarketCodeTotalInformationType) HasBudgetTotalInfo() bool`

HasBudgetTotalInfo returns a boolean if a field has been set.

### GetForecastTotalInfo

`func (o *MarketCodeTotalInformationType) GetForecastTotalInfo() RevenueNightsInfoType`

GetForecastTotalInfo returns the ForecastTotalInfo field if non-nil, zero value otherwise.

### GetForecastTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetForecastTotalInfoOk() (*RevenueNightsInfoType, bool)`

GetForecastTotalInfoOk returns a tuple with the ForecastTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastTotalInfo

`func (o *MarketCodeTotalInformationType) SetForecastTotalInfo(v RevenueNightsInfoType)`

SetForecastTotalInfo sets ForecastTotalInfo field to given value.

### HasForecastTotalInfo

`func (o *MarketCodeTotalInformationType) HasForecastTotalInfo() bool`

HasForecastTotalInfo returns a boolean if a field has been set.

### GetActualTotalInfo

`func (o *MarketCodeTotalInformationType) GetActualTotalInfo() RevenueNightsInfoType`

GetActualTotalInfo returns the ActualTotalInfo field if non-nil, zero value otherwise.

### GetActualTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetActualTotalInfoOk() (*RevenueNightsInfoType, bool)`

GetActualTotalInfoOk returns a tuple with the ActualTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTotalInfo

`func (o *MarketCodeTotalInformationType) SetActualTotalInfo(v RevenueNightsInfoType)`

SetActualTotalInfo sets ActualTotalInfo field to given value.

### HasActualTotalInfo

`func (o *MarketCodeTotalInformationType) HasActualTotalInfo() bool`

HasActualTotalInfo returns a boolean if a field has been set.

### GetAFVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) GetAFVarianceTotalInfo() []MonthlyRevenueNightsVarianceInfoType`

GetAFVarianceTotalInfo returns the AFVarianceTotalInfo field if non-nil, zero value otherwise.

### GetAFVarianceTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetAFVarianceTotalInfoOk() (*[]MonthlyRevenueNightsVarianceInfoType, bool)`

GetAFVarianceTotalInfoOk returns a tuple with the AFVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) SetAFVarianceTotalInfo(v []MonthlyRevenueNightsVarianceInfoType)`

SetAFVarianceTotalInfo sets AFVarianceTotalInfo field to given value.

### HasAFVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) HasAFVarianceTotalInfo() bool`

HasAFVarianceTotalInfo returns a boolean if a field has been set.

### GetABVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) GetABVarianceTotalInfo() []MonthlyRevenueNightsVarianceInfoType`

GetABVarianceTotalInfo returns the ABVarianceTotalInfo field if non-nil, zero value otherwise.

### GetABVarianceTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetABVarianceTotalInfoOk() (*[]MonthlyRevenueNightsVarianceInfoType, bool)`

GetABVarianceTotalInfoOk returns a tuple with the ABVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) SetABVarianceTotalInfo(v []MonthlyRevenueNightsVarianceInfoType)`

SetABVarianceTotalInfo sets ABVarianceTotalInfo field to given value.

### HasABVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) HasABVarianceTotalInfo() bool`

HasABVarianceTotalInfo returns a boolean if a field has been set.

### GetFBVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) GetFBVarianceTotalInfo() []MonthlyRevenueNightsVarianceInfoType`

GetFBVarianceTotalInfo returns the FBVarianceTotalInfo field if non-nil, zero value otherwise.

### GetFBVarianceTotalInfoOk

`func (o *MarketCodeTotalInformationType) GetFBVarianceTotalInfoOk() (*[]MonthlyRevenueNightsVarianceInfoType, bool)`

GetFBVarianceTotalInfoOk returns a tuple with the FBVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) SetFBVarianceTotalInfo(v []MonthlyRevenueNightsVarianceInfoType)`

SetFBVarianceTotalInfo sets FBVarianceTotalInfo field to given value.

### HasFBVarianceTotalInfo

`func (o *MarketCodeTotalInformationType) HasFBVarianceTotalInfo() bool`

HasFBVarianceTotalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


