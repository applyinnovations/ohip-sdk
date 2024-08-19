# TransactionCodeInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ABVarianceInfo** | Pointer to [**[]MonthlyTransactionVarianceInfoType**](MonthlyTransactionVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 
**AFVarianceInfo** | Pointer to [**[]MonthlyTransactionVarianceInfoType**](MonthlyTransactionVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 
**ActualInfo** | Pointer to [**TransactionInfoType**](TransactionInfoType.md) |  | [optional] 
**BudgetInfo** | Pointer to [**TransactionInfoType**](TransactionInfoType.md) |  | [optional] 
**FBVarianceInfo** | Pointer to [**[]MonthlyTransactionVarianceInfoType**](MonthlyTransactionVarianceInfoType.md) | Monthly Revenue Variance information. | [optional] 
**ForecastInfo** | Pointer to [**TransactionInfoType**](TransactionInfoType.md) |  | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code for which budget forecast information is fetched. | [optional] 
**TransactionCodeDescription** | Pointer to **string** | Transaction code description for Transaction code. | [optional] 
**TransactionCodeGrp** | Pointer to **string** | Transaction code group of segment code. | [optional] 

## Methods

### NewTransactionCodeInformationType

`func NewTransactionCodeInformationType() *TransactionCodeInformationType`

NewTransactionCodeInformationType instantiates a new TransactionCodeInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeInformationTypeWithDefaults

`func NewTransactionCodeInformationTypeWithDefaults() *TransactionCodeInformationType`

NewTransactionCodeInformationTypeWithDefaults instantiates a new TransactionCodeInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetABVarianceInfo

`func (o *TransactionCodeInformationType) GetABVarianceInfo() []MonthlyTransactionVarianceInfoType`

GetABVarianceInfo returns the ABVarianceInfo field if non-nil, zero value otherwise.

### GetABVarianceInfoOk

`func (o *TransactionCodeInformationType) GetABVarianceInfoOk() (*[]MonthlyTransactionVarianceInfoType, bool)`

GetABVarianceInfoOk returns a tuple with the ABVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetABVarianceInfo

`func (o *TransactionCodeInformationType) SetABVarianceInfo(v []MonthlyTransactionVarianceInfoType)`

SetABVarianceInfo sets ABVarianceInfo field to given value.

### HasABVarianceInfo

`func (o *TransactionCodeInformationType) HasABVarianceInfo() bool`

HasABVarianceInfo returns a boolean if a field has been set.

### GetAFVarianceInfo

`func (o *TransactionCodeInformationType) GetAFVarianceInfo() []MonthlyTransactionVarianceInfoType`

GetAFVarianceInfo returns the AFVarianceInfo field if non-nil, zero value otherwise.

### GetAFVarianceInfoOk

`func (o *TransactionCodeInformationType) GetAFVarianceInfoOk() (*[]MonthlyTransactionVarianceInfoType, bool)`

GetAFVarianceInfoOk returns a tuple with the AFVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAFVarianceInfo

`func (o *TransactionCodeInformationType) SetAFVarianceInfo(v []MonthlyTransactionVarianceInfoType)`

SetAFVarianceInfo sets AFVarianceInfo field to given value.

### HasAFVarianceInfo

`func (o *TransactionCodeInformationType) HasAFVarianceInfo() bool`

HasAFVarianceInfo returns a boolean if a field has been set.

### GetActualInfo

`func (o *TransactionCodeInformationType) GetActualInfo() TransactionInfoType`

GetActualInfo returns the ActualInfo field if non-nil, zero value otherwise.

### GetActualInfoOk

`func (o *TransactionCodeInformationType) GetActualInfoOk() (*TransactionInfoType, bool)`

GetActualInfoOk returns a tuple with the ActualInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualInfo

`func (o *TransactionCodeInformationType) SetActualInfo(v TransactionInfoType)`

SetActualInfo sets ActualInfo field to given value.

### HasActualInfo

`func (o *TransactionCodeInformationType) HasActualInfo() bool`

HasActualInfo returns a boolean if a field has been set.

### GetBudgetInfo

`func (o *TransactionCodeInformationType) GetBudgetInfo() TransactionInfoType`

GetBudgetInfo returns the BudgetInfo field if non-nil, zero value otherwise.

### GetBudgetInfoOk

`func (o *TransactionCodeInformationType) GetBudgetInfoOk() (*TransactionInfoType, bool)`

GetBudgetInfoOk returns a tuple with the BudgetInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetInfo

`func (o *TransactionCodeInformationType) SetBudgetInfo(v TransactionInfoType)`

SetBudgetInfo sets BudgetInfo field to given value.

### HasBudgetInfo

`func (o *TransactionCodeInformationType) HasBudgetInfo() bool`

HasBudgetInfo returns a boolean if a field has been set.

### GetFBVarianceInfo

`func (o *TransactionCodeInformationType) GetFBVarianceInfo() []MonthlyTransactionVarianceInfoType`

GetFBVarianceInfo returns the FBVarianceInfo field if non-nil, zero value otherwise.

### GetFBVarianceInfoOk

`func (o *TransactionCodeInformationType) GetFBVarianceInfoOk() (*[]MonthlyTransactionVarianceInfoType, bool)`

GetFBVarianceInfoOk returns a tuple with the FBVarianceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBVarianceInfo

`func (o *TransactionCodeInformationType) SetFBVarianceInfo(v []MonthlyTransactionVarianceInfoType)`

SetFBVarianceInfo sets FBVarianceInfo field to given value.

### HasFBVarianceInfo

`func (o *TransactionCodeInformationType) HasFBVarianceInfo() bool`

HasFBVarianceInfo returns a boolean if a field has been set.

### GetForecastInfo

`func (o *TransactionCodeInformationType) GetForecastInfo() TransactionInfoType`

GetForecastInfo returns the ForecastInfo field if non-nil, zero value otherwise.

### GetForecastInfoOk

`func (o *TransactionCodeInformationType) GetForecastInfoOk() (*TransactionInfoType, bool)`

GetForecastInfoOk returns a tuple with the ForecastInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastInfo

`func (o *TransactionCodeInformationType) SetForecastInfo(v TransactionInfoType)`

SetForecastInfo sets ForecastInfo field to given value.

### HasForecastInfo

`func (o *TransactionCodeInformationType) HasForecastInfo() bool`

HasForecastInfo returns a boolean if a field has been set.

### GetTransactionCode

`func (o *TransactionCodeInformationType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *TransactionCodeInformationType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *TransactionCodeInformationType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *TransactionCodeInformationType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionCodeDescription

`func (o *TransactionCodeInformationType) GetTransactionCodeDescription() string`

GetTransactionCodeDescription returns the TransactionCodeDescription field if non-nil, zero value otherwise.

### GetTransactionCodeDescriptionOk

`func (o *TransactionCodeInformationType) GetTransactionCodeDescriptionOk() (*string, bool)`

GetTransactionCodeDescriptionOk returns a tuple with the TransactionCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeDescription

`func (o *TransactionCodeInformationType) SetTransactionCodeDescription(v string)`

SetTransactionCodeDescription sets TransactionCodeDescription field to given value.

### HasTransactionCodeDescription

`func (o *TransactionCodeInformationType) HasTransactionCodeDescription() bool`

HasTransactionCodeDescription returns a boolean if a field has been set.

### GetTransactionCodeGrp

`func (o *TransactionCodeInformationType) GetTransactionCodeGrp() string`

GetTransactionCodeGrp returns the TransactionCodeGrp field if non-nil, zero value otherwise.

### GetTransactionCodeGrpOk

`func (o *TransactionCodeInformationType) GetTransactionCodeGrpOk() (*string, bool)`

GetTransactionCodeGrpOk returns a tuple with the TransactionCodeGrp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeGrp

`func (o *TransactionCodeInformationType) SetTransactionCodeGrp(v string)`

SetTransactionCodeGrp sets TransactionCodeGrp field to given value.

### HasTransactionCodeGrp

`func (o *TransactionCodeInformationType) HasTransactionCodeGrp() bool`

HasTransactionCodeGrp returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


