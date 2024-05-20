# TotalType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountAfterTax** | Pointer to **float32** | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**AmountBeforeTax** | Pointer to **float32** | The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**Code** | Pointer to **string** | Type of charge. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Fees** | Pointer to [**FeesType**](FeesType.md) |  | [optional] 
**RateOverride** | Pointer to **bool** | When true indicates that the rate amount has been overridden. | [optional] 
**Taxes** | Pointer to [**TaxesType**](TaxesType.md) |  | [optional] 

## Methods

### NewTotalType

`func NewTotalType() *TotalType`

NewTotalType instantiates a new TotalType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTotalTypeWithDefaults

`func NewTotalTypeWithDefaults() *TotalType`

NewTotalTypeWithDefaults instantiates a new TotalType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountAfterTax

`func (o *TotalType) GetAmountAfterTax() float32`

GetAmountAfterTax returns the AmountAfterTax field if non-nil, zero value otherwise.

### GetAmountAfterTaxOk

`func (o *TotalType) GetAmountAfterTaxOk() (*float32, bool)`

GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountAfterTax

`func (o *TotalType) SetAmountAfterTax(v float32)`

SetAmountAfterTax sets AmountAfterTax field to given value.

### HasAmountAfterTax

`func (o *TotalType) HasAmountAfterTax() bool`

HasAmountAfterTax returns a boolean if a field has been set.

### GetAmountBeforeTax

`func (o *TotalType) GetAmountBeforeTax() float32`

GetAmountBeforeTax returns the AmountBeforeTax field if non-nil, zero value otherwise.

### GetAmountBeforeTaxOk

`func (o *TotalType) GetAmountBeforeTaxOk() (*float32, bool)`

GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountBeforeTax

`func (o *TotalType) SetAmountBeforeTax(v float32)`

SetAmountBeforeTax sets AmountBeforeTax field to given value.

### HasAmountBeforeTax

`func (o *TotalType) HasAmountBeforeTax() bool`

HasAmountBeforeTax returns a boolean if a field has been set.

### GetCode

`func (o *TotalType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TotalType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TotalType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TotalType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *TotalType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *TotalType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *TotalType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *TotalType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *TotalType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *TotalType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *TotalType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *TotalType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *TotalType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *TotalType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *TotalType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *TotalType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetDescription

`func (o *TotalType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TotalType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TotalType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TotalType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFees

`func (o *TotalType) GetFees() FeesType`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *TotalType) GetFeesOk() (*FeesType, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *TotalType) SetFees(v FeesType)`

SetFees sets Fees field to given value.

### HasFees

`func (o *TotalType) HasFees() bool`

HasFees returns a boolean if a field has been set.

### GetRateOverride

`func (o *TotalType) GetRateOverride() bool`

GetRateOverride returns the RateOverride field if non-nil, zero value otherwise.

### GetRateOverrideOk

`func (o *TotalType) GetRateOverrideOk() (*bool, bool)`

GetRateOverrideOk returns a tuple with the RateOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateOverride

`func (o *TotalType) SetRateOverride(v bool)`

SetRateOverride sets RateOverride field to given value.

### HasRateOverride

`func (o *TotalType) HasRateOverride() bool`

HasRateOverride returns a boolean if a field has been set.

### GetTaxes

`func (o *TotalType) GetTaxes() TaxesType`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *TotalType) GetTaxesOk() (*TaxesType, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *TotalType) SetTaxes(v TaxesType)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *TotalType) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


