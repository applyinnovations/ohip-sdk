# BudgetForecastMarketInfoBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketCodeInformation** | Pointer to [**[]MarketCodeInformationBaseType**](MarketCodeInformationBaseType.md) | Budget Forecast information for budget segment code . | [optional] 
**Nights** | Pointer to **bool** | Flag to indicate if nights information is included. | [optional] 
**Revenue** | Pointer to **bool** | Flag to indicate if revenue information is included. | [optional] 

## Methods

### NewBudgetForecastMarketInfoBaseType

`func NewBudgetForecastMarketInfoBaseType() *BudgetForecastMarketInfoBaseType`

NewBudgetForecastMarketInfoBaseType instantiates a new BudgetForecastMarketInfoBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastMarketInfoBaseTypeWithDefaults

`func NewBudgetForecastMarketInfoBaseTypeWithDefaults() *BudgetForecastMarketInfoBaseType`

NewBudgetForecastMarketInfoBaseTypeWithDefaults instantiates a new BudgetForecastMarketInfoBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMarketCodeInformation

`func (o *BudgetForecastMarketInfoBaseType) GetMarketCodeInformation() []MarketCodeInformationBaseType`

GetMarketCodeInformation returns the MarketCodeInformation field if non-nil, zero value otherwise.

### GetMarketCodeInformationOk

`func (o *BudgetForecastMarketInfoBaseType) GetMarketCodeInformationOk() (*[]MarketCodeInformationBaseType, bool)`

GetMarketCodeInformationOk returns a tuple with the MarketCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketCodeInformation

`func (o *BudgetForecastMarketInfoBaseType) SetMarketCodeInformation(v []MarketCodeInformationBaseType)`

SetMarketCodeInformation sets MarketCodeInformation field to given value.

### HasMarketCodeInformation

`func (o *BudgetForecastMarketInfoBaseType) HasMarketCodeInformation() bool`

HasMarketCodeInformation returns a boolean if a field has been set.

### GetNights

`func (o *BudgetForecastMarketInfoBaseType) GetNights() bool`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *BudgetForecastMarketInfoBaseType) GetNightsOk() (*bool, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *BudgetForecastMarketInfoBaseType) SetNights(v bool)`

SetNights sets Nights field to given value.

### HasNights

`func (o *BudgetForecastMarketInfoBaseType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetRevenue

`func (o *BudgetForecastMarketInfoBaseType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *BudgetForecastMarketInfoBaseType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *BudgetForecastMarketInfoBaseType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *BudgetForecastMarketInfoBaseType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


