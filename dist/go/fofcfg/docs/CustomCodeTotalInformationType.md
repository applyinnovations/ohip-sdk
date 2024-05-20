# CustomCodeTotalInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceTotalInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**AFVarianceTotalInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**ActualTotalInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 
**BudgetTotalInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 
**FBVarianceTotalInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**ForecastTotalInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 

## Methods

### NewCustomCodeTotalInformationType

`func NewCustomCodeTotalInformationType() *CustomCodeTotalInformationType`

NewCustomCodeTotalInformationType instantiates a new CustomCodeTotalInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomCodeTotalInformationTypeWithDefaults

`func NewCustomCodeTotalInformationTypeWithDefaults() *CustomCodeTotalInformationType`

NewCustomCodeTotalInformationTypeWithDefaults instantiates a new CustomCodeTotalInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) GetABVarianceTotalInfo() []MonthlyCustomVarianceInfoType`

GetABVarianceTotalInfo returns the ABVarianceTotalInfo field if non-nil, zero value otherwise.

### GetABVarianceTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetABVarianceTotalInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetABVarianceTotalInfoOk returns a tuple with the ABVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) SetABVarianceTotalInfo(v []MonthlyCustomVarianceInfoType)`

SetABVarianceTotalInfo sets ABVarianceTotalInfo field to given value.

### HasABVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) HasABVarianceTotalInfo() bool`

HasABVarianceTotalInfo returns a boolean if a field has been set.

### GetAFVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) GetAFVarianceTotalInfo() []MonthlyCustomVarianceInfoType`

GetAFVarianceTotalInfo returns the AFVarianceTotalInfo field if non-nil, zero value otherwise.

### GetAFVarianceTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetAFVarianceTotalInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetAFVarianceTotalInfoOk returns a tuple with the AFVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) SetAFVarianceTotalInfo(v []MonthlyCustomVarianceInfoType)`

SetAFVarianceTotalInfo sets AFVarianceTotalInfo field to given value.

### HasAFVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) HasAFVarianceTotalInfo() bool`

HasAFVarianceTotalInfo returns a boolean if a field has been set.

### GetActualTotalInfo

`func (o *CustomCodeTotalInformationType) GetActualTotalInfo() CustomValueInfoType`

GetActualTotalInfo returns the ActualTotalInfo field if non-nil, zero value otherwise.

### GetActualTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetActualTotalInfoOk() (*CustomValueInfoType, bool)`

GetActualTotalInfoOk returns a tuple with the ActualTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTotalInfo

`func (o *CustomCodeTotalInformationType) SetActualTotalInfo(v CustomValueInfoType)`

SetActualTotalInfo sets ActualTotalInfo field to given value.

### HasActualTotalInfo

`func (o *CustomCodeTotalInformationType) HasActualTotalInfo() bool`

HasActualTotalInfo returns a boolean if a field has been set.

### GetBudgetTotalInfo

`func (o *CustomCodeTotalInformationType) GetBudgetTotalInfo() CustomValueInfoType`

GetBudgetTotalInfo returns the BudgetTotalInfo field if non-nil, zero value otherwise.

### GetBudgetTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetBudgetTotalInfoOk() (*CustomValueInfoType, bool)`

GetBudgetTotalInfoOk returns a tuple with the BudgetTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetTotalInfo

`func (o *CustomCodeTotalInformationType) SetBudgetTotalInfo(v CustomValueInfoType)`

SetBudgetTotalInfo sets BudgetTotalInfo field to given value.

### HasBudgetTotalInfo

`func (o *CustomCodeTotalInformationType) HasBudgetTotalInfo() bool`

HasBudgetTotalInfo returns a boolean if a field has been set.

### GetFBVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) GetFBVarianceTotalInfo() []MonthlyCustomVarianceInfoType`

GetFBVarianceTotalInfo returns the FBVarianceTotalInfo field if non-nil, zero value otherwise.

### GetFBVarianceTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetFBVarianceTotalInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetFBVarianceTotalInfoOk returns a tuple with the FBVarianceTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) SetFBVarianceTotalInfo(v []MonthlyCustomVarianceInfoType)`

SetFBVarianceTotalInfo sets FBVarianceTotalInfo field to given value.

### HasFBVarianceTotalInfo

`func (o *CustomCodeTotalInformationType) HasFBVarianceTotalInfo() bool`

HasFBVarianceTotalInfo returns a boolean if a field has been set.

### GetForecastTotalInfo

`func (o *CustomCodeTotalInformationType) GetForecastTotalInfo() CustomValueInfoType`

GetForecastTotalInfo returns the ForecastTotalInfo field if non-nil, zero value otherwise.

### GetForecastTotalInfoOk

`func (o *CustomCodeTotalInformationType) GetForecastTotalInfoOk() (*CustomValueInfoType, bool)`

GetForecastTotalInfoOk returns a tuple with the ForecastTotalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastTotalInfo

`func (o *CustomCodeTotalInformationType) SetForecastTotalInfo(v CustomValueInfoType)`

SetForecastTotalInfo sets ForecastTotalInfo field to given value.

### HasForecastTotalInfo

`func (o *CustomCodeTotalInformationType) HasForecastTotalInfo() bool`

HasForecastTotalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


