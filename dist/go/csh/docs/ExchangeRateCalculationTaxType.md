# ExchangeRateCalculationTaxType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PercentageAppliedOn** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**BaseAmount** | Pointer to **float32** | Based Amount in local currency to be added on top of computed service tax based on Percentage. | [optional] 
**Percentage** | Pointer to **float32** | Percentage to be multiplied to Percentage Applied On to get the service tax. | [optional] 
**MinServiceTax** | Pointer to **float32** | Minimum service tax in local currency to be charged | [optional] 
**MaxServiceTax** | Pointer to **float32** | Maximum service tax in local currency to be charged. | [optional] 
**ExchangeRateTransactionGenerateTaxes** | Pointer to [**[]ExchangeRateTransactionGenerateTaxType**](ExchangeRateTransactionGenerateTaxType.md) | Exchange rate calculation tax information based on Transaction Code Generate. | [optional] 

## Methods

### NewExchangeRateCalculationTaxType

`func NewExchangeRateCalculationTaxType() *ExchangeRateCalculationTaxType`

NewExchangeRateCalculationTaxType instantiates a new ExchangeRateCalculationTaxType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeRateCalculationTaxTypeWithDefaults

`func NewExchangeRateCalculationTaxTypeWithDefaults() *ExchangeRateCalculationTaxType`

NewExchangeRateCalculationTaxTypeWithDefaults instantiates a new ExchangeRateCalculationTaxType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPercentageAppliedOn

`func (o *ExchangeRateCalculationTaxType) GetPercentageAppliedOn() CurrencyAmountType`

GetPercentageAppliedOn returns the PercentageAppliedOn field if non-nil, zero value otherwise.

### GetPercentageAppliedOnOk

`func (o *ExchangeRateCalculationTaxType) GetPercentageAppliedOnOk() (*CurrencyAmountType, bool)`

GetPercentageAppliedOnOk returns a tuple with the PercentageAppliedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageAppliedOn

`func (o *ExchangeRateCalculationTaxType) SetPercentageAppliedOn(v CurrencyAmountType)`

SetPercentageAppliedOn sets PercentageAppliedOn field to given value.

### HasPercentageAppliedOn

`func (o *ExchangeRateCalculationTaxType) HasPercentageAppliedOn() bool`

HasPercentageAppliedOn returns a boolean if a field has been set.

### GetBaseAmount

`func (o *ExchangeRateCalculationTaxType) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *ExchangeRateCalculationTaxType) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *ExchangeRateCalculationTaxType) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *ExchangeRateCalculationTaxType) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetPercentage

`func (o *ExchangeRateCalculationTaxType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *ExchangeRateCalculationTaxType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *ExchangeRateCalculationTaxType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *ExchangeRateCalculationTaxType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetMinServiceTax

`func (o *ExchangeRateCalculationTaxType) GetMinServiceTax() float32`

GetMinServiceTax returns the MinServiceTax field if non-nil, zero value otherwise.

### GetMinServiceTaxOk

`func (o *ExchangeRateCalculationTaxType) GetMinServiceTaxOk() (*float32, bool)`

GetMinServiceTaxOk returns a tuple with the MinServiceTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinServiceTax

`func (o *ExchangeRateCalculationTaxType) SetMinServiceTax(v float32)`

SetMinServiceTax sets MinServiceTax field to given value.

### HasMinServiceTax

`func (o *ExchangeRateCalculationTaxType) HasMinServiceTax() bool`

HasMinServiceTax returns a boolean if a field has been set.

### GetMaxServiceTax

`func (o *ExchangeRateCalculationTaxType) GetMaxServiceTax() float32`

GetMaxServiceTax returns the MaxServiceTax field if non-nil, zero value otherwise.

### GetMaxServiceTaxOk

`func (o *ExchangeRateCalculationTaxType) GetMaxServiceTaxOk() (*float32, bool)`

GetMaxServiceTaxOk returns a tuple with the MaxServiceTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxServiceTax

`func (o *ExchangeRateCalculationTaxType) SetMaxServiceTax(v float32)`

SetMaxServiceTax sets MaxServiceTax field to given value.

### HasMaxServiceTax

`func (o *ExchangeRateCalculationTaxType) HasMaxServiceTax() bool`

HasMaxServiceTax returns a boolean if a field has been set.

### GetExchangeRateTransactionGenerateTaxes

`func (o *ExchangeRateCalculationTaxType) GetExchangeRateTransactionGenerateTaxes() []ExchangeRateTransactionGenerateTaxType`

GetExchangeRateTransactionGenerateTaxes returns the ExchangeRateTransactionGenerateTaxes field if non-nil, zero value otherwise.

### GetExchangeRateTransactionGenerateTaxesOk

`func (o *ExchangeRateCalculationTaxType) GetExchangeRateTransactionGenerateTaxesOk() (*[]ExchangeRateTransactionGenerateTaxType, bool)`

GetExchangeRateTransactionGenerateTaxesOk returns a tuple with the ExchangeRateTransactionGenerateTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRateTransactionGenerateTaxes

`func (o *ExchangeRateCalculationTaxType) SetExchangeRateTransactionGenerateTaxes(v []ExchangeRateTransactionGenerateTaxType)`

SetExchangeRateTransactionGenerateTaxes sets ExchangeRateTransactionGenerateTaxes field to given value.

### HasExchangeRateTransactionGenerateTaxes

`func (o *ExchangeRateCalculationTaxType) HasExchangeRateTransactionGenerateTaxes() bool`

HasExchangeRateTransactionGenerateTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


