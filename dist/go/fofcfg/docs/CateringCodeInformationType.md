# CateringCodeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 
**AFVarianceInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 
**ActualInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 
**BudgetInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 
**CateringCode** | Pointer to **string** | Catering segment code for which budget forecast information is fetched. | [optional] 
**CateringCodeDescription** | Pointer to **string** | Catering code description for segment code. | [optional] 
**CateringCodeGrp** | Pointer to **string** | Catering code group of segment code. | [optional] 
**FBVarianceInfo** | Pointer to [**[]MonthlyCateringVarianceInfoType**](MonthlyCateringVarianceInfoType.md) | Monthly Variance information. | [optional] 
**ForecastInfo** | Pointer to [**CateringInfoType**](CateringInfoType.md) |  | [optional] 

## Methods

### NewCateringCodeInformationType

`func NewCateringCodeInformationType() *CateringCodeInformationType`

NewCateringCodeInformationType instantiates a new CateringCodeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringCodeInformationTypeWithDefaults

`func NewCateringCodeInformationTypeWithDefaults() *CateringCodeInformationType`

NewCateringCodeInformationTypeWithDefaults instantiates a new CateringCodeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceInfo

`func (o *CateringCodeInformationType) GetABVarianceInfo() []MonthlyCateringVarianceInfoType`

GetABVarianceInfo returns the ABVarianceInfo field if non-nil, zero value otherwise.

### GetABVarianceInfoOk

`func (o *CateringCodeInformationType) GetABVarianceInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceInfo

`func (o *CateringCodeInformationType) SetABVarianceInfo(v []MonthlyCateringVarianceInfoType)`

SetABVarianceInfo sets ABVarianceInfo field to given value.

### HasABVarianceInfo

`func (o *CateringCodeInformationType) HasABVarianceInfo() bool`

HasABVarianceInfo returns a boolean if a field has been set.

### GetAFVarianceInfo

`func (o *CateringCodeInformationType) GetAFVarianceInfo() []MonthlyCateringVarianceInfoType`

GetAFVarianceInfo returns the AFVarianceInfo field if non-nil, zero value otherwise.

### GetAFVarianceInfoOk

`func (o *CateringCodeInformationType) GetAFVarianceInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceInfo

`func (o *CateringCodeInformationType) SetAFVarianceInfo(v []MonthlyCateringVarianceInfoType)`

SetAFVarianceInfo sets AFVarianceInfo field to given value.

### HasAFVarianceInfo

`func (o *CateringCodeInformationType) HasAFVarianceInfo() bool`

HasAFVarianceInfo returns a boolean if a field has been set.

### GetActualInfo

`func (o *CateringCodeInformationType) GetActualInfo() CateringInfoType`

GetActualInfo returns the ActualInfo field if non-nil, zero value otherwise.

### GetActualInfoOk

`func (o *CateringCodeInformationType) GetActualInfoOk() (*CateringInfoType, bool)`

GetActualInfoOk returns a tuple with the ActualInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualInfo

`func (o *CateringCodeInformationType) SetActualInfo(v CateringInfoType)`

SetActualInfo sets ActualInfo field to given value.

### HasActualInfo

`func (o *CateringCodeInformationType) HasActualInfo() bool`

HasActualInfo returns a boolean if a field has been set.

### GetBudgetInfo

`func (o *CateringCodeInformationType) GetBudgetInfo() CateringInfoType`

GetBudgetInfo returns the BudgetInfo field if non-nil, zero value otherwise.

### GetBudgetInfoOk

`func (o *CateringCodeInformationType) GetBudgetInfoOk() (*CateringInfoType, bool)`

GetBudgetInfoOk returns a tuple with the BudgetInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetInfo

`func (o *CateringCodeInformationType) SetBudgetInfo(v CateringInfoType)`

SetBudgetInfo sets BudgetInfo field to given value.

### HasBudgetInfo

`func (o *CateringCodeInformationType) HasBudgetInfo() bool`

HasBudgetInfo returns a boolean if a field has been set.

### GetCateringCode

`func (o *CateringCodeInformationType) GetCateringCode() string`

GetCateringCode returns the CateringCode field if non-nil, zero value otherwise.

### GetCateringCodeOk

`func (o *CateringCodeInformationType) GetCateringCodeOk() (*string, bool)`

GetCateringCodeOk returns a tuple with the CateringCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCode

`func (o *CateringCodeInformationType) SetCateringCode(v string)`

SetCateringCode sets CateringCode field to given value.

### HasCateringCode

`func (o *CateringCodeInformationType) HasCateringCode() bool`

HasCateringCode returns a boolean if a field has been set.

### GetCateringCodeDescription

`func (o *CateringCodeInformationType) GetCateringCodeDescription() string`

GetCateringCodeDescription returns the CateringCodeDescription field if non-nil, zero value otherwise.

### GetCateringCodeDescriptionOk

`func (o *CateringCodeInformationType) GetCateringCodeDescriptionOk() (*string, bool)`

GetCateringCodeDescriptionOk returns a tuple with the CateringCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCodeDescription

`func (o *CateringCodeInformationType) SetCateringCodeDescription(v string)`

SetCateringCodeDescription sets CateringCodeDescription field to given value.

### HasCateringCodeDescription

`func (o *CateringCodeInformationType) HasCateringCodeDescription() bool`

HasCateringCodeDescription returns a boolean if a field has been set.

### GetCateringCodeGrp

`func (o *CateringCodeInformationType) GetCateringCodeGrp() string`

GetCateringCodeGrp returns the CateringCodeGrp field if non-nil, zero value otherwise.

### GetCateringCodeGrpOk

`func (o *CateringCodeInformationType) GetCateringCodeGrpOk() (*string, bool)`

GetCateringCodeGrpOk returns a tuple with the CateringCodeGrp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCodeGrp

`func (o *CateringCodeInformationType) SetCateringCodeGrp(v string)`

SetCateringCodeGrp sets CateringCodeGrp field to given value.

### HasCateringCodeGrp

`func (o *CateringCodeInformationType) HasCateringCodeGrp() bool`

HasCateringCodeGrp returns a boolean if a field has been set.

### GetFBVarianceInfo

`func (o *CateringCodeInformationType) GetFBVarianceInfo() []MonthlyCateringVarianceInfoType`

GetFBVarianceInfo returns the FBVarianceInfo field if non-nil, zero value otherwise.

### GetFBVarianceInfoOk

`func (o *CateringCodeInformationType) GetFBVarianceInfoOk() (*[]MonthlyCateringVarianceInfoType, bool)`

GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceInfo

`func (o *CateringCodeInformationType) SetFBVarianceInfo(v []MonthlyCateringVarianceInfoType)`

SetFBVarianceInfo sets FBVarianceInfo field to given value.

### HasFBVarianceInfo

`func (o *CateringCodeInformationType) HasFBVarianceInfo() bool`

HasFBVarianceInfo returns a boolean if a field has been set.

### GetForecastInfo

`func (o *CateringCodeInformationType) GetForecastInfo() CateringInfoType`

GetForecastInfo returns the ForecastInfo field if non-nil, zero value otherwise.

### GetForecastInfoOk

`func (o *CateringCodeInformationType) GetForecastInfoOk() (*CateringInfoType, bool)`

GetForecastInfoOk returns a tuple with the ForecastInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastInfo

`func (o *CateringCodeInformationType) SetForecastInfo(v CateringInfoType)`

SetForecastInfo sets ForecastInfo field to given value.

### HasForecastInfo

`func (o *CateringCodeInformationType) HasForecastInfo() bool`

HasForecastInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


