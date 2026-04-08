# TransactionCodeInformationBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCode** | Pointer to **string** | Transaction code for which budget forecast information is fetched. | [optional] 
**TransactionCodeGrp** | Pointer to **string** | Transaction code group of segment code. | [optional] 
**TransactionCodeDescription** | Pointer to **string** | Transaction code description for Transaction code. | [optional] 
**BudgetInfo** | Pointer to [**TransactionInfoType**](TransactionInfoType.md) |  | [optional] 
**ForecastInfo** | Pointer to [**TransactionInfoType**](TransactionInfoType.md) |  | [optional] 

## Methods

### NewTransactionCodeInformationBaseType

`func NewTransactionCodeInformationBaseType() *TransactionCodeInformationBaseType`

NewTransactionCodeInformationBaseType instantiates a new TransactionCodeInformationBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeInformationBaseTypeWithDefaults

`func NewTransactionCodeInformationBaseTypeWithDefaults() *TransactionCodeInformationBaseType`

NewTransactionCodeInformationBaseTypeWithDefaults instantiates a new TransactionCodeInformationBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCode

`func (o *TransactionCodeInformationBaseType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *TransactionCodeInformationBaseType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *TransactionCodeInformationBaseType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *TransactionCodeInformationBaseType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionCodeGrp

`func (o *TransactionCodeInformationBaseType) GetTransactionCodeGrp() string`

GetTransactionCodeGrp returns the TransactionCodeGrp field if non-nil, zero value otherwise.

### GetTransactionCodeGrpOk

`func (o *TransactionCodeInformationBaseType) GetTransactionCodeGrpOk() (*string, bool)`

GetTransactionCodeGrpOk returns a tuple with the TransactionCodeGrp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeGrp

`func (o *TransactionCodeInformationBaseType) SetTransactionCodeGrp(v string)`

SetTransactionCodeGrp sets TransactionCodeGrp field to given value.

### HasTransactionCodeGrp

`func (o *TransactionCodeInformationBaseType) HasTransactionCodeGrp() bool`

HasTransactionCodeGrp returns a boolean if a field has been set.

### GetTransactionCodeDescription

`func (o *TransactionCodeInformationBaseType) GetTransactionCodeDescription() string`

GetTransactionCodeDescription returns the TransactionCodeDescription field if non-nil, zero value otherwise.

### GetTransactionCodeDescriptionOk

`func (o *TransactionCodeInformationBaseType) GetTransactionCodeDescriptionOk() (*string, bool)`

GetTransactionCodeDescriptionOk returns a tuple with the TransactionCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodeDescription

`func (o *TransactionCodeInformationBaseType) SetTransactionCodeDescription(v string)`

SetTransactionCodeDescription sets TransactionCodeDescription field to given value.

### HasTransactionCodeDescription

`func (o *TransactionCodeInformationBaseType) HasTransactionCodeDescription() bool`

HasTransactionCodeDescription returns a boolean if a field has been set.

### GetBudgetInfo

`func (o *TransactionCodeInformationBaseType) GetBudgetInfo() TransactionInfoType`

GetBudgetInfo returns the BudgetInfo field if non-nil, zero value otherwise.

### GetBudgetInfoOk

`func (o *TransactionCodeInformationBaseType) GetBudgetInfoOk() (*TransactionInfoType, bool)`

GetBudgetInfoOk returns a tuple with the BudgetInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetInfo

`func (o *TransactionCodeInformationBaseType) SetBudgetInfo(v TransactionInfoType)`

SetBudgetInfo sets BudgetInfo field to given value.

### HasBudgetInfo

`func (o *TransactionCodeInformationBaseType) HasBudgetInfo() bool`

HasBudgetInfo returns a boolean if a field has been set.

### GetForecastInfo

`func (o *TransactionCodeInformationBaseType) GetForecastInfo() TransactionInfoType`

GetForecastInfo returns the ForecastInfo field if non-nil, zero value otherwise.

### GetForecastInfoOk

`func (o *TransactionCodeInformationBaseType) GetForecastInfoOk() (*TransactionInfoType, bool)`

GetForecastInfoOk returns a tuple with the ForecastInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastInfo

`func (o *TransactionCodeInformationBaseType) SetForecastInfo(v TransactionInfoType)`

SetForecastInfo sets ForecastInfo field to given value.

### HasForecastInfo

`func (o *TransactionCodeInformationBaseType) HasForecastInfo() bool`

HasForecastInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


