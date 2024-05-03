# CalculatedForeignCurrency

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExchangeInfo** | Pointer to [**[]ExchangeRateCalculationType**](ExchangeRateCalculationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCalculatedForeignCurrency

`func NewCalculatedForeignCurrency() *CalculatedForeignCurrency`

NewCalculatedForeignCurrency instantiates a new CalculatedForeignCurrency object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalculatedForeignCurrencyWithDefaults

`func NewCalculatedForeignCurrencyWithDefaults() *CalculatedForeignCurrency`

NewCalculatedForeignCurrencyWithDefaults instantiates a new CalculatedForeignCurrency object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchangeInfo

`func (o *CalculatedForeignCurrency) GetExchangeInfo() []ExchangeRateCalculationType`

GetExchangeInfo returns the ExchangeInfo field if non-nil, zero value otherwise.

### GetExchangeInfoOk

`func (o *CalculatedForeignCurrency) GetExchangeInfoOk() (*[]ExchangeRateCalculationType, bool)`

GetExchangeInfoOk returns a tuple with the ExchangeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeInfo

`func (o *CalculatedForeignCurrency) SetExchangeInfo(v []ExchangeRateCalculationType)`

SetExchangeInfo sets ExchangeInfo field to given value.

### HasExchangeInfo

`func (o *CalculatedForeignCurrency) HasExchangeInfo() bool`

HasExchangeInfo returns a boolean if a field has been set.

### GetLinks

`func (o *CalculatedForeignCurrency) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CalculatedForeignCurrency) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CalculatedForeignCurrency) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CalculatedForeignCurrency) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CalculatedForeignCurrency) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CalculatedForeignCurrency) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CalculatedForeignCurrency) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CalculatedForeignCurrency) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


