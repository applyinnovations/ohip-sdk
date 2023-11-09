# MarketCodeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**AFVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**ActualRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**BudgetRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**FBVarianceInfo** | Pointer to [**RevenueNightsVarianceInfoType**](RevenueNightsVarianceInfoType.md) |  | [optional] 
**ForecastRevenueInfo** | Pointer to [**RevenueNightsInfoType**](RevenueNightsInfoType.md) |  | [optional] 
**MarketCode** | Pointer to **string** | Segment code for which budget forecast information is fetched. | [optional] 
**MarketCodeDescription** | Pointer to **string** | Segment code description for segment code. | [optional] 

## Methods

### NewMarketCodeInformationType

`func NewMarketCodeInformationType() *MarketCodeInformationType`

NewMarketCodeInformationType instantiates a new MarketCodeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketCodeInformationTypeWithDefaults

`func NewMarketCodeInformationTypeWithDefaults() *MarketCodeInformationType`

NewMarketCodeInformationTypeWithDefaults instantiates a new MarketCodeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceInfo

`func (o *MarketCodeInformationType) GetABVarianceInfo() RevenueNightsVarianceInfoType`

GetABVarianceInfo returns the ABVarianceInfo field if non-nil, zero value otherwise.

### GetABVarianceInfoOk

`func (o *MarketCodeInformationType) GetABVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceInfo

`func (o *MarketCodeInformationType) SetABVarianceInfo(v RevenueNightsVarianceInfoType)`

SetABVarianceInfo sets ABVarianceInfo field to given value.

### HasABVarianceInfo

`func (o *MarketCodeInformationType) HasABVarianceInfo() bool`

HasABVarianceInfo returns a boolean if a field has been set.

### GetAFVarianceInfo

`func (o *MarketCodeInformationType) GetAFVarianceInfo() RevenueNightsVarianceInfoType`

GetAFVarianceInfo returns the AFVarianceInfo field if non-nil, zero value otherwise.

### GetAFVarianceInfoOk

`func (o *MarketCodeInformationType) GetAFVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceInfo

`func (o *MarketCodeInformationType) SetAFVarianceInfo(v RevenueNightsVarianceInfoType)`

SetAFVarianceInfo sets AFVarianceInfo field to given value.

### HasAFVarianceInfo

`func (o *MarketCodeInformationType) HasAFVarianceInfo() bool`

HasAFVarianceInfo returns a boolean if a field has been set.

### GetActualRevenueInfo

`func (o *MarketCodeInformationType) GetActualRevenueInfo() RevenueNightsInfoType`

GetActualRevenueInfo returns the ActualRevenueInfo field if non-nil, zero value otherwise.

### GetActualRevenueInfoOk

`func (o *MarketCodeInformationType) GetActualRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetActualRevenueInfoOk returns a tuple with the ActualRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualRevenueInfo

`func (o *MarketCodeInformationType) SetActualRevenueInfo(v RevenueNightsInfoType)`

SetActualRevenueInfo sets ActualRevenueInfo field to given value.

### HasActualRevenueInfo

`func (o *MarketCodeInformationType) HasActualRevenueInfo() bool`

HasActualRevenueInfo returns a boolean if a field has been set.

### GetBudgetRevenueInfo

`func (o *MarketCodeInformationType) GetBudgetRevenueInfo() RevenueNightsInfoType`

GetBudgetRevenueInfo returns the BudgetRevenueInfo field if non-nil, zero value otherwise.

### GetBudgetRevenueInfoOk

`func (o *MarketCodeInformationType) GetBudgetRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetBudgetRevenueInfoOk returns a tuple with the BudgetRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetRevenueInfo

`func (o *MarketCodeInformationType) SetBudgetRevenueInfo(v RevenueNightsInfoType)`

SetBudgetRevenueInfo sets BudgetRevenueInfo field to given value.

### HasBudgetRevenueInfo

`func (o *MarketCodeInformationType) HasBudgetRevenueInfo() bool`

HasBudgetRevenueInfo returns a boolean if a field has been set.

### GetFBVarianceInfo

`func (o *MarketCodeInformationType) GetFBVarianceInfo() RevenueNightsVarianceInfoType`

GetFBVarianceInfo returns the FBVarianceInfo field if non-nil, zero value otherwise.

### GetFBVarianceInfoOk

`func (o *MarketCodeInformationType) GetFBVarianceInfoOk() (*RevenueNightsVarianceInfoType, bool)`

GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceInfo

`func (o *MarketCodeInformationType) SetFBVarianceInfo(v RevenueNightsVarianceInfoType)`

SetFBVarianceInfo sets FBVarianceInfo field to given value.

### HasFBVarianceInfo

`func (o *MarketCodeInformationType) HasFBVarianceInfo() bool`

HasFBVarianceInfo returns a boolean if a field has been set.

### GetForecastRevenueInfo

`func (o *MarketCodeInformationType) GetForecastRevenueInfo() RevenueNightsInfoType`

GetForecastRevenueInfo returns the ForecastRevenueInfo field if non-nil, zero value otherwise.

### GetForecastRevenueInfoOk

`func (o *MarketCodeInformationType) GetForecastRevenueInfoOk() (*RevenueNightsInfoType, bool)`

GetForecastRevenueInfoOk returns a tuple with the ForecastRevenueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastRevenueInfo

`func (o *MarketCodeInformationType) SetForecastRevenueInfo(v RevenueNightsInfoType)`

SetForecastRevenueInfo sets ForecastRevenueInfo field to given value.

### HasForecastRevenueInfo

`func (o *MarketCodeInformationType) HasForecastRevenueInfo() bool`

HasForecastRevenueInfo returns a boolean if a field has been set.

### GetMarketCode

`func (o *MarketCodeInformationType) GetMarketCode() string`

GetMarketCode returns the MarketCode field if non-nil, zero value otherwise.

### GetMarketCodeOk

`func (o *MarketCodeInformationType) GetMarketCodeOk() (*string, bool)`

GetMarketCodeOk returns a tuple with the MarketCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCode

`func (o *MarketCodeInformationType) SetMarketCode(v string)`

SetMarketCode sets MarketCode field to given value.

### HasMarketCode

`func (o *MarketCodeInformationType) HasMarketCode() bool`

HasMarketCode returns a boolean if a field has been set.

### GetMarketCodeDescription

`func (o *MarketCodeInformationType) GetMarketCodeDescription() string`

GetMarketCodeDescription returns the MarketCodeDescription field if non-nil, zero value otherwise.

### GetMarketCodeDescriptionOk

`func (o *MarketCodeInformationType) GetMarketCodeDescriptionOk() (*string, bool)`

GetMarketCodeDescriptionOk returns a tuple with the MarketCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodeDescription

`func (o *MarketCodeInformationType) SetMarketCodeDescription(v string)`

SetMarketCodeDescription sets MarketCodeDescription field to given value.

### HasMarketCodeDescription

`func (o *MarketCodeInformationType) HasMarketCodeDescription() bool`

HasMarketCodeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


