# BudgetForecastCustomInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomCodeInformation** | Pointer to [**[]CustomCodeInformationType**](CustomCodeInformationType.md) | Budget Forecast information for Custom segment code . | [optional] 
**CustomCodeTotalInformation** | Pointer to [**CustomCodeTotalInformationType**](CustomCodeTotalInformationType.md) |  | [optional] 

## Methods

### NewBudgetForecastCustomInfoType

`func NewBudgetForecastCustomInfoType() *BudgetForecastCustomInfoType`

NewBudgetForecastCustomInfoType instantiates a new BudgetForecastCustomInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastCustomInfoTypeWithDefaults

`func NewBudgetForecastCustomInfoTypeWithDefaults() *BudgetForecastCustomInfoType`

NewBudgetForecastCustomInfoTypeWithDefaults instantiates a new BudgetForecastCustomInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomCodeInformation

`func (o *BudgetForecastCustomInfoType) GetCustomCodeInformation() []CustomCodeInformationType`

GetCustomCodeInformation returns the CustomCodeInformation field if non-nil, zero value otherwise.

### GetCustomCodeInformationOk

`func (o *BudgetForecastCustomInfoType) GetCustomCodeInformationOk() (*[]CustomCodeInformationType, bool)`

GetCustomCodeInformationOk returns a tuple with the CustomCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCodeInformation

`func (o *BudgetForecastCustomInfoType) SetCustomCodeInformation(v []CustomCodeInformationType)`

SetCustomCodeInformation sets CustomCodeInformation field to given value.

### HasCustomCodeInformation

`func (o *BudgetForecastCustomInfoType) HasCustomCodeInformation() bool`

HasCustomCodeInformation returns a boolean if a field has been set.

### GetCustomCodeTotalInformation

`func (o *BudgetForecastCustomInfoType) GetCustomCodeTotalInformation() CustomCodeTotalInformationType`

GetCustomCodeTotalInformation returns the CustomCodeTotalInformation field if non-nil, zero value otherwise.

### GetCustomCodeTotalInformationOk

`func (o *BudgetForecastCustomInfoType) GetCustomCodeTotalInformationOk() (*CustomCodeTotalInformationType, bool)`

GetCustomCodeTotalInformationOk returns a tuple with the CustomCodeTotalInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCodeTotalInformation

`func (o *BudgetForecastCustomInfoType) SetCustomCodeTotalInformation(v CustomCodeTotalInformationType)`

SetCustomCodeTotalInformation sets CustomCodeTotalInformation field to given value.

### HasCustomCodeTotalInformation

`func (o *BudgetForecastCustomInfoType) HasCustomCodeTotalInformation() bool`

HasCustomCodeTotalInformation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


