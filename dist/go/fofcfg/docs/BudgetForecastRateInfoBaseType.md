# BudgetForecastRateInfoBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nights** | Pointer to **bool** | Flag to indicate if nights information has to be included. | [optional] 
**RateCodeInformation** | Pointer to [**[]RateCodeInformationBaseType**](RateCodeInformationBaseType.md) | Budget Forecast information for budget segment code . | [optional] 
**Revenue** | Pointer to **bool** | Flag to indicate if revenue information has to be included. | [optional] 

## Methods

### NewBudgetForecastRateInfoBaseType

`func NewBudgetForecastRateInfoBaseType() *BudgetForecastRateInfoBaseType`

NewBudgetForecastRateInfoBaseType instantiates a new BudgetForecastRateInfoBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastRateInfoBaseTypeWithDefaults

`func NewBudgetForecastRateInfoBaseTypeWithDefaults() *BudgetForecastRateInfoBaseType`

NewBudgetForecastRateInfoBaseTypeWithDefaults instantiates a new BudgetForecastRateInfoBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNights

`func (o *BudgetForecastRateInfoBaseType) GetNights() bool`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *BudgetForecastRateInfoBaseType) GetNightsOk() (*bool, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *BudgetForecastRateInfoBaseType) SetNights(v bool)`

SetNights sets Nights field to given value.

### HasNights

`func (o *BudgetForecastRateInfoBaseType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetRateCodeInformation

`func (o *BudgetForecastRateInfoBaseType) GetRateCodeInformation() []RateCodeInformationBaseType`

GetRateCodeInformation returns the RateCodeInformation field if non-nil, zero value otherwise.

### GetRateCodeInformationOk

`func (o *BudgetForecastRateInfoBaseType) GetRateCodeInformationOk() (*[]RateCodeInformationBaseType, bool)`

GetRateCodeInformationOk returns a tuple with the RateCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCodeInformation

`func (o *BudgetForecastRateInfoBaseType) SetRateCodeInformation(v []RateCodeInformationBaseType)`

SetRateCodeInformation sets RateCodeInformation field to given value.

### HasRateCodeInformation

`func (o *BudgetForecastRateInfoBaseType) HasRateCodeInformation() bool`

HasRateCodeInformation returns a boolean if a field has been set.

### GetRevenue

`func (o *BudgetForecastRateInfoBaseType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *BudgetForecastRateInfoBaseType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *BudgetForecastRateInfoBaseType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *BudgetForecastRateInfoBaseType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


