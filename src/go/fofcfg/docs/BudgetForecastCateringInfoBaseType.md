# BudgetForecastCateringInfoBaseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringCodeInformation** | Pointer to [**[]CateringCodeInformationBaseType**](CateringCodeInformationBaseType.md) | Budget Forecast information for Catering segment code . | [optional] 
**Covers** | Pointer to **bool** | Flag to indicate if covers information has to be included. | [optional] 
**Revenue** | Pointer to **bool** | Flag to indicate if revenue information has to be included. | [optional] 

## Methods

### NewBudgetForecastCateringInfoBaseType

`func NewBudgetForecastCateringInfoBaseType() *BudgetForecastCateringInfoBaseType`

NewBudgetForecastCateringInfoBaseType instantiates a new BudgetForecastCateringInfoBaseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastCateringInfoBaseTypeWithDefaults

`func NewBudgetForecastCateringInfoBaseTypeWithDefaults() *BudgetForecastCateringInfoBaseType`

NewBudgetForecastCateringInfoBaseTypeWithDefaults instantiates a new BudgetForecastCateringInfoBaseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringCodeInformation

`func (o *BudgetForecastCateringInfoBaseType) GetCateringCodeInformation() []CateringCodeInformationBaseType`

GetCateringCodeInformation returns the CateringCodeInformation field if non-nil, zero value otherwise.

### GetCateringCodeInformationOk

`func (o *BudgetForecastCateringInfoBaseType) GetCateringCodeInformationOk() (*[]CateringCodeInformationBaseType, bool)`

GetCateringCodeInformationOk returns a tuple with the CateringCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringCodeInformation

`func (o *BudgetForecastCateringInfoBaseType) SetCateringCodeInformation(v []CateringCodeInformationBaseType)`

SetCateringCodeInformation sets CateringCodeInformation field to given value.

### HasCateringCodeInformation

`func (o *BudgetForecastCateringInfoBaseType) HasCateringCodeInformation() bool`

HasCateringCodeInformation returns a boolean if a field has been set.

### GetCovers

`func (o *BudgetForecastCateringInfoBaseType) GetCovers() bool`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *BudgetForecastCateringInfoBaseType) GetCoversOk() (*bool, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *BudgetForecastCateringInfoBaseType) SetCovers(v bool)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *BudgetForecastCateringInfoBaseType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetRevenue

`func (o *BudgetForecastCateringInfoBaseType) GetRevenue() bool`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *BudgetForecastCateringInfoBaseType) GetRevenueOk() (*bool, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *BudgetForecastCateringInfoBaseType) SetRevenue(v bool)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *BudgetForecastCateringInfoBaseType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


