# CurrencyExchangeRatesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExchangeRates** | Pointer to [**[]CurrencyExchangeRatesDetailsExchangeRatesInner**](CurrencyExchangeRatesDetailsExchangeRatesInner.md) | List of currency codes with their exchange rates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCurrencyExchangeRatesDetails

`func NewCurrencyExchangeRatesDetails() *CurrencyExchangeRatesDetails`

NewCurrencyExchangeRatesDetails instantiates a new CurrencyExchangeRatesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyExchangeRatesDetailsWithDefaults

`func NewCurrencyExchangeRatesDetailsWithDefaults() *CurrencyExchangeRatesDetails`

NewCurrencyExchangeRatesDetailsWithDefaults instantiates a new CurrencyExchangeRatesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchangeRates

`func (o *CurrencyExchangeRatesDetails) GetExchangeRates() []CurrencyExchangeRatesDetailsExchangeRatesInner`

GetExchangeRates returns the ExchangeRates field if non-nil, zero value otherwise.

### GetExchangeRatesOk

`func (o *CurrencyExchangeRatesDetails) GetExchangeRatesOk() (*[]CurrencyExchangeRatesDetailsExchangeRatesInner, bool)`

GetExchangeRatesOk returns a tuple with the ExchangeRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRates

`func (o *CurrencyExchangeRatesDetails) SetExchangeRates(v []CurrencyExchangeRatesDetailsExchangeRatesInner)`

SetExchangeRates sets ExchangeRates field to given value.

### HasExchangeRates

`func (o *CurrencyExchangeRatesDetails) HasExchangeRates() bool`

HasExchangeRates returns a boolean if a field has been set.

### GetLinks

`func (o *CurrencyExchangeRatesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CurrencyExchangeRatesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CurrencyExchangeRatesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CurrencyExchangeRatesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CurrencyExchangeRatesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CurrencyExchangeRatesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CurrencyExchangeRatesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CurrencyExchangeRatesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


