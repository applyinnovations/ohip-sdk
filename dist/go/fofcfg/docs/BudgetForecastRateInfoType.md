# BudgetForecastRateInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateCodeInformation** | Pointer to [**[]RateCodeInformationType**](RateCodeInformationType.md) | Budget Forecast totals information for Rate segment. | [optional] 
**RateCodeTotalInformation** | Pointer to [**RateCodeTotalInformationType**](RateCodeTotalInformationType.md) |  | [optional] 

## Methods

### NewBudgetForecastRateInfoType

`func NewBudgetForecastRateInfoType() *BudgetForecastRateInfoType`

NewBudgetForecastRateInfoType instantiates a new BudgetForecastRateInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastRateInfoTypeWithDefaults

`func NewBudgetForecastRateInfoTypeWithDefaults() *BudgetForecastRateInfoType`

NewBudgetForecastRateInfoTypeWithDefaults instantiates a new BudgetForecastRateInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateCodeInformation

`func (o *BudgetForecastRateInfoType) GetRateCodeInformation() []RateCodeInformationType`

GetRateCodeInformation returns the RateCodeInformation field if non-nil, zero value otherwise.

### GetRateCodeInformationOk

`func (o *BudgetForecastRateInfoType) GetRateCodeInformationOk() (*[]RateCodeInformationType, bool)`

GetRateCodeInformationOk returns a tuple with the RateCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeInformation

`func (o *BudgetForecastRateInfoType) SetRateCodeInformation(v []RateCodeInformationType)`

SetRateCodeInformation sets RateCodeInformation field to given value.

### HasRateCodeInformation

`func (o *BudgetForecastRateInfoType) HasRateCodeInformation() bool`

HasRateCodeInformation returns a boolean if a field has been set.

### GetRateCodeTotalInformation

`func (o *BudgetForecastRateInfoType) GetRateCodeTotalInformation() RateCodeTotalInformationType`

GetRateCodeTotalInformation returns the RateCodeTotalInformation field if non-nil, zero value otherwise.

### GetRateCodeTotalInformationOk

`func (o *BudgetForecastRateInfoType) GetRateCodeTotalInformationOk() (*RateCodeTotalInformationType, bool)`

GetRateCodeTotalInformationOk returns a tuple with the RateCodeTotalInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeTotalInformation

`func (o *BudgetForecastRateInfoType) SetRateCodeTotalInformation(v RateCodeTotalInformationType)`

SetRateCodeTotalInformation sets RateCodeTotalInformation field to given value.

### HasRateCodeTotalInformation

`func (o *BudgetForecastRateInfoType) HasRateCodeTotalInformation() bool`

HasRateCodeTotalInformation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


