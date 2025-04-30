# CateringTotalsInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BudgetTotalInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 
**ForecastTotalInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 
**ActualTotalInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 
**AFVarianceTotalInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 
**ABVarianceTotalInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 
**FBVarianceTotalInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 

## Methods

### NewCateringTotalsInformationType

`func NewCateringTotalsInformationType() *CateringTotalsInformationType`

NewCateringTotalsInformationType instantiates a new CateringTotalsInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringTotalsInformationTypeWithDefaults

`func NewCateringTotalsInformationTypeWithDefaults() *CateringTotalsInformationType`

NewCateringTotalsInformationTypeWithDefaults instantiates a new CateringTotalsInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudgetTotalInfo

`func (o *CateringTotalsInformationType) GetBudgetTotalInfo() CateringInfoType`

GetBudgetTotalInfo returns the BudgetTotalInfo field if non-nil, zero value otherwise.

### GetBudgetTotalInfoOk

`func (o *CateringTotalsInformationType) GetBudgetTotalInfoOk() (*CateringInfoType, bool)`

GetBudgetTotalInfoOk returns a tuple with the BudgetTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetTotalInfo

`func (o *CateringTotalsInformationType) SetBudgetTotalInfo(v CateringInfoType)`

SetBudgetTotalInfo sets BudgetTotalInfo field to given value.

### HasBudgetTotalInfo

`func (o *CateringTotalsInformationType) HasBudgetTotalInfo() bool`

HasBudgetTotalInfo returns a boolean if a field has been set.

### GetForecastTotalInfo

`func (o *CateringTotalsInformationType) GetForecastTotalInfo() CateringInfoType`

GetForecastTotalInfo returns the ForecastTotalInfo field if non-nil, zero value otherwise.

### GetForecastTotalInfoOk

`func (o *CateringTotalsInformationType) GetForecastTotalInfoOk() (*CateringInfoType, bool)`

GetForecastTotalInfoOk returns a tuple with the ForecastTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastTotalInfo

`func (o *CateringTotalsInformationType) SetForecastTotalInfo(v CateringInfoType)`

SetForecastTotalInfo sets ForecastTotalInfo field to given value.

### HasForecastTotalInfo

`func (o *CateringTotalsInformationType) HasForecastTotalInfo() bool`

HasForecastTotalInfo returns a boolean if a field has been set.

### GetActualTotalInfo

`func (o *CateringTotalsInformationType) GetActualTotalInfo() CateringInfoType`

GetActualTotalInfo returns the ActualTotalInfo field if non-nil, zero value otherwise.

### GetActualTotalInfoOk

`func (o *CateringTotalsInformationType) GetActualTotalInfoOk() (*CateringInfoType, bool)`

GetActualTotalInfoOk returns a tuple with the ActualTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTotalInfo

`func (o *CateringTotalsInformationType) SetActualTotalInfo(v CateringInfoType)`

SetActualTotalInfo sets ActualTotalInfo field to given value.

### HasActualTotalInfo

`func (o *CateringTotalsInformationType) HasActualTotalInfo() bool`

HasActualTotalInfo returns a boolean if a field has been set.

### GetAFVarianceTotalInfo

`func (o *CateringTotalsInformationType) GetAFVarianceTotalInfo() []MonthlyCateringVarianceInfoType`

GetAFVarianceTotalInfo returns the AFVarianceTotalInfo field if non-nil, zero value otherwise.

### GetAFVarianceTotalInfoOk

`func (o *CateringTotalsInformationType) GetAFVarianceTotalInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetAFVarianceTotalInfoOk returns a tuple with the AFVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceTotalInfo

`func (o *CateringTotalsInformationType) SetAFVarianceTotalInfo(v []MonthlyCateringVarianceInfoType)`

SetAFVarianceTotalInfo sets AFVarianceTotalInfo field to given value.

### HasAFVarianceTotalInfo

`func (o *CateringTotalsInformationType) HasAFVarianceTotalInfo() bool`

HasAFVarianceTotalInfo returns a boolean if a field has been set.

### GetABVarianceTotalInfo

`func (o *CateringTotalsInformationType) GetABVarianceTotalInfo() []MonthlyCateringVarianceInfoType`

GetABVarianceTotalInfo returns the ABVarianceTotalInfo field if non-nil, zero value otherwise.

### GetABVarianceTotalInfoOk

`func (o *CateringTotalsInformationType) GetABVarianceTotalInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetABVarianceTotalInfoOk returns a tuple with the ABVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceTotalInfo

`func (o *CateringTotalsInformationType) SetABVarianceTotalInfo(v []MonthlyCateringVarianceInfoType)`

SetABVarianceTotalInfo sets ABVarianceTotalInfo field to given value.

### HasABVarianceTotalInfo

`func (o *CateringTotalsInformationType) HasABVarianceTotalInfo() bool`

HasABVarianceTotalInfo returns a boolean if a field has been set.

### GetFBVarianceTotalInfo

`func (o *CateringTotalsInformationType) GetFBVarianceTotalInfo() []MonthlyCateringVarianceInfoType`

GetFBVarianceTotalInfo returns the FBVarianceTotalInfo field if non-nil, zero value otherwise.

### GetFBVarianceTotalInfoOk

`func (o *CateringTotalsInformationType) GetFBVarianceTotalInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetFBVarianceTotalInfoOk returns a tuple with the FBVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceTotalInfo

`func (o *CateringTotalsInformationType) SetFBVarianceTotalInfo(v []MonthlyCateringVarianceInfoType)`

SetFBVarianceTotalInfo sets FBVarianceTotalInfo field to given value.

### HasFBVarianceTotalInfo

`func (o *CateringTotalsInformationType) HasFBVarianceTotalInfo() bool`

HasFBVarianceTotalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


