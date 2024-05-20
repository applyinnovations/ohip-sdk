# CustomCodeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**AFVarianceInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**ActualValueInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 
**BudgetValueInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 
**CustomCode** | Pointer to **string** | Custom code for which budget forecast information is fetched. | [optional] 
**CustomCodeDescription** | Pointer to **string** | Custom code description for Custom code. | [optional] 
**FBVarianceInfo** | Pointer to [**[]MonthlyCustomVarianceInfoType**](MonthlyCustomVarianceInfoType.md) | Monthly Value Variance information. | [optional] 
**ForecastValueInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 

## Methods

### NewCustomCodeInformationType

`func NewCustomCodeInformationType() *CustomCodeInformationType`

NewCustomCodeInformationType instantiates a new CustomCodeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomCodeInformationTypeWithDefaults

`func NewCustomCodeInformationTypeWithDefaults() *CustomCodeInformationType`

NewCustomCodeInformationTypeWithDefaults instantiates a new CustomCodeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceInfo

`func (o *CustomCodeInformationType) GetABVarianceInfo() []MonthlyCustomVarianceInfoType`

GetABVarianceInfo returns the ABVarianceInfo field if non-nil, zero value otherwise.

### GetABVarianceInfoOk

`func (o *CustomCodeInformationType) GetABVarianceInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceInfo

`func (o *CustomCodeInformationType) SetABVarianceInfo(v []MonthlyCustomVarianceInfoType)`

SetABVarianceInfo sets ABVarianceInfo field to given value.

### HasABVarianceInfo

`func (o *CustomCodeInformationType) HasABVarianceInfo() bool`

HasABVarianceInfo returns a boolean if a field has been set.

### GetAFVarianceInfo

`func (o *CustomCodeInformationType) GetAFVarianceInfo() []MonthlyCustomVarianceInfoType`

GetAFVarianceInfo returns the AFVarianceInfo field if non-nil, zero value otherwise.

### GetAFVarianceInfoOk

`func (o *CustomCodeInformationType) GetAFVarianceInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceInfo

`func (o *CustomCodeInformationType) SetAFVarianceInfo(v []MonthlyCustomVarianceInfoType)`

SetAFVarianceInfo sets AFVarianceInfo field to given value.

### HasAFVarianceInfo

`func (o *CustomCodeInformationType) HasAFVarianceInfo() bool`

HasAFVarianceInfo returns a boolean if a field has been set.

### GetActualValueInfo

`func (o *CustomCodeInformationType) GetActualValueInfo() CustomValueInfoType`

GetActualValueInfo returns the ActualValueInfo field if non-nil, zero value otherwise.

### GetActualValueInfoOk

`func (o *CustomCodeInformationType) GetActualValueInfoOk() (*CustomValueInfoType, bool)`

GetActualValueInfoOk returns a tuple with the ActualValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualValueInfo

`func (o *CustomCodeInformationType) SetActualValueInfo(v CustomValueInfoType)`

SetActualValueInfo sets ActualValueInfo field to given value.

### HasActualValueInfo

`func (o *CustomCodeInformationType) HasActualValueInfo() bool`

HasActualValueInfo returns a boolean if a field has been set.

### GetBudgetValueInfo

`func (o *CustomCodeInformationType) GetBudgetValueInfo() CustomValueInfoType`

GetBudgetValueInfo returns the BudgetValueInfo field if non-nil, zero value otherwise.

### GetBudgetValueInfoOk

`func (o *CustomCodeInformationType) GetBudgetValueInfoOk() (*CustomValueInfoType, bool)`

GetBudgetValueInfoOk returns a tuple with the BudgetValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetValueInfo

`func (o *CustomCodeInformationType) SetBudgetValueInfo(v CustomValueInfoType)`

SetBudgetValueInfo sets BudgetValueInfo field to given value.

### HasBudgetValueInfo

`func (o *CustomCodeInformationType) HasBudgetValueInfo() bool`

HasBudgetValueInfo returns a boolean if a field has been set.

### GetCustomCode

`func (o *CustomCodeInformationType) GetCustomCode() string`

GetCustomCode returns the CustomCode field if non-nil, zero value otherwise.

### GetCustomCodeOk

`func (o *CustomCodeInformationType) GetCustomCodeOk() (*string, bool)`

GetCustomCodeOk returns a tuple with the CustomCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCode

`func (o *CustomCodeInformationType) SetCustomCode(v string)`

SetCustomCode sets CustomCode field to given value.

### HasCustomCode

`func (o *CustomCodeInformationType) HasCustomCode() bool`

HasCustomCode returns a boolean if a field has been set.

### GetCustomCodeDescription

`func (o *CustomCodeInformationType) GetCustomCodeDescription() string`

GetCustomCodeDescription returns the CustomCodeDescription field if non-nil, zero value otherwise.

### GetCustomCodeDescriptionOk

`func (o *CustomCodeInformationType) GetCustomCodeDescriptionOk() (*string, bool)`

GetCustomCodeDescriptionOk returns a tuple with the CustomCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCodeDescription

`func (o *CustomCodeInformationType) SetCustomCodeDescription(v string)`

SetCustomCodeDescription sets CustomCodeDescription field to given value.

### HasCustomCodeDescription

`func (o *CustomCodeInformationType) HasCustomCodeDescription() bool`

HasCustomCodeDescription returns a boolean if a field has been set.

### GetFBVarianceInfo

`func (o *CustomCodeInformationType) GetFBVarianceInfo() []MonthlyCustomVarianceInfoType`

GetFBVarianceInfo returns the FBVarianceInfo field if non-nil, zero value otherwise.

### GetFBVarianceInfoOk

`func (o *CustomCodeInformationType) GetFBVarianceInfoOk() (*[]MonthlyCustomVarianceInfoType, bool)`

GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceInfo

`func (o *CustomCodeInformationType) SetFBVarianceInfo(v []MonthlyCustomVarianceInfoType)`

SetFBVarianceInfo sets FBVarianceInfo field to given value.

### HasFBVarianceInfo

`func (o *CustomCodeInformationType) HasFBVarianceInfo() bool`

HasFBVarianceInfo returns a boolean if a field has been set.

### GetForecastValueInfo

`func (o *CustomCodeInformationType) GetForecastValueInfo() CustomValueInfoType`

GetForecastValueInfo returns the ForecastValueInfo field if non-nil, zero value otherwise.

### GetForecastValueInfoOk

`func (o *CustomCodeInformationType) GetForecastValueInfoOk() (*CustomValueInfoType, bool)`

GetForecastValueInfoOk returns a tuple with the ForecastValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastValueInfo

`func (o *CustomCodeInformationType) SetForecastValueInfo(v CustomValueInfoType)`

SetForecastValueInfo sets ForecastValueInfo field to given value.

### HasForecastValueInfo

`func (o *CustomCodeInformationType) HasForecastValueInfo() bool`

HasForecastValueInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


