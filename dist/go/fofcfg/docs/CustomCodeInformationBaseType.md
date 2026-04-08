# CustomCodeInformationBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCode** | Pointer to **string** | Custom code for which budget forecast information is fetched. | [optional] 
**CustomCodeDescription** | Pointer to **string** | Custom code description for Custom code. | [optional] 
**BudgetValueInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 
**ForecastValueInfo** | Pointer to [**CustomValueInfoType**](CustomValueInfoType.md) |  | [optional] 

## Methods

### NewCustomCodeInformationBaseType

`func NewCustomCodeInformationBaseType() *CustomCodeInformationBaseType`

NewCustomCodeInformationBaseType instantiates a new CustomCodeInformationBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomCodeInformationBaseTypeWithDefaults

`func NewCustomCodeInformationBaseTypeWithDefaults() *CustomCodeInformationBaseType`

NewCustomCodeInformationBaseTypeWithDefaults instantiates a new CustomCodeInformationBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCode

`func (o *CustomCodeInformationBaseType) GetCustomCode() string`

GetCustomCode returns the CustomCode field if non-nil, zero value otherwise.

### GetCustomCodeOk

`func (o *CustomCodeInformationBaseType) GetCustomCodeOk() (*string, bool)`

GetCustomCodeOk returns a tuple with the CustomCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCode

`func (o *CustomCodeInformationBaseType) SetCustomCode(v string)`

SetCustomCode sets CustomCode field to given value.

### HasCustomCode

`func (o *CustomCodeInformationBaseType) HasCustomCode() bool`

HasCustomCode returns a boolean if a field has been set.

### GetCustomCodeDescription

`func (o *CustomCodeInformationBaseType) GetCustomCodeDescription() string`

GetCustomCodeDescription returns the CustomCodeDescription field if non-nil, zero value otherwise.

### GetCustomCodeDescriptionOk

`func (o *CustomCodeInformationBaseType) GetCustomCodeDescriptionOk() (*string, bool)`

GetCustomCodeDescriptionOk returns a tuple with the CustomCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCodeDescription

`func (o *CustomCodeInformationBaseType) SetCustomCodeDescription(v string)`

SetCustomCodeDescription sets CustomCodeDescription field to given value.

### HasCustomCodeDescription

`func (o *CustomCodeInformationBaseType) HasCustomCodeDescription() bool`

HasCustomCodeDescription returns a boolean if a field has been set.

### GetBudgetValueInfo

`func (o *CustomCodeInformationBaseType) GetBudgetValueInfo() CustomValueInfoType`

GetBudgetValueInfo returns the BudgetValueInfo field if non-nil, zero value otherwise.

### GetBudgetValueInfoOk

`func (o *CustomCodeInformationBaseType) GetBudgetValueInfoOk() (*CustomValueInfoType, bool)`

GetBudgetValueInfoOk returns a tuple with the BudgetValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetValueInfo

`func (o *CustomCodeInformationBaseType) SetBudgetValueInfo(v CustomValueInfoType)`

SetBudgetValueInfo sets BudgetValueInfo field to given value.

### HasBudgetValueInfo

`func (o *CustomCodeInformationBaseType) HasBudgetValueInfo() bool`

HasBudgetValueInfo returns a boolean if a field has been set.

### GetForecastValueInfo

`func (o *CustomCodeInformationBaseType) GetForecastValueInfo() CustomValueInfoType`

GetForecastValueInfo returns the ForecastValueInfo field if non-nil, zero value otherwise.

### GetForecastValueInfoOk

`func (o *CustomCodeInformationBaseType) GetForecastValueInfoOk() (*CustomValueInfoType, bool)`

GetForecastValueInfoOk returns a tuple with the ForecastValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForecastValueInfo

`func (o *CustomCodeInformationBaseType) SetForecastValueInfo(v CustomValueInfoType)`

SetForecastValueInfo sets ForecastValueInfo field to given value.

### HasForecastValueInfo

`func (o *CustomCodeInformationBaseType) HasForecastValueInfo() bool`

HasForecastValueInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


