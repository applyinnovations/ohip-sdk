# BudgetForecastCustomInfoBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCodeInformation** | Pointer to [**[]CustomCodeInformationBaseType**](CustomCodeInformationBaseType.md) | Budget Forecast information for Custom segment code . | [optional] 
**CustomValue** | Pointer to **bool** | Flag to indicate if values information has to be included. | [optional] 

## Methods

### NewBudgetForecastCustomInfoBaseType

`func NewBudgetForecastCustomInfoBaseType() *BudgetForecastCustomInfoBaseType`

NewBudgetForecastCustomInfoBaseType instantiates a new BudgetForecastCustomInfoBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastCustomInfoBaseTypeWithDefaults

`func NewBudgetForecastCustomInfoBaseTypeWithDefaults() *BudgetForecastCustomInfoBaseType`

NewBudgetForecastCustomInfoBaseTypeWithDefaults instantiates a new BudgetForecastCustomInfoBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCodeInformation

`func (o *BudgetForecastCustomInfoBaseType) GetCustomCodeInformation() []CustomCodeInformationBaseType`

GetCustomCodeInformation returns the CustomCodeInformation field if non-nil, zero value otherwise.

### GetCustomCodeInformationOk

`func (o *BudgetForecastCustomInfoBaseType) GetCustomCodeInformationOk() (*[]CustomCodeInformationBaseType, bool)`

GetCustomCodeInformationOk returns a tuple with the CustomCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCodeInformation

`func (o *BudgetForecastCustomInfoBaseType) SetCustomCodeInformation(v []CustomCodeInformationBaseType)`

SetCustomCodeInformation sets CustomCodeInformation field to given value.

### HasCustomCodeInformation

`func (o *BudgetForecastCustomInfoBaseType) HasCustomCodeInformation() bool`

HasCustomCodeInformation returns a boolean if a field has been set.

### GetCustomValue

`func (o *BudgetForecastCustomInfoBaseType) GetCustomValue() bool`

GetCustomValue returns the CustomValue field if non-nil, zero value otherwise.

### GetCustomValueOk

`func (o *BudgetForecastCustomInfoBaseType) GetCustomValueOk() (*bool, bool)`

GetCustomValueOk returns a tuple with the CustomValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomValue

`func (o *BudgetForecastCustomInfoBaseType) SetCustomValue(v bool)`

SetCustomValue sets CustomValue field to given value.

### HasCustomValue

`func (o *BudgetForecastCustomInfoBaseType) HasCustomValue() bool`

HasCustomValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


