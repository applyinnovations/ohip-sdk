# DailyRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountAfterTax** | Pointer to **float32** | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**AmountBeforeTax** | Pointer to **float32** | The total amount not including any associated tax (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**BaseAmount** | Pointer to **float32** | The rate&#39;s base price. Amount excluding price for any add to rate combine line package attached to the rate.Also excludes any discounts | [optional] 
**Code** | Pointer to **string** | Type of charge. | [optional] 
**CurrencyCode** | Pointer to **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | [optional] 
**CurrencySymbol** | Pointer to **string** | The symbol for the currency, e.g, for currencyCode USD the symbol is $. | [optional] 
**DecimalPlaces** | Pointer to **int32** | Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard \&quot;minor unit\&quot;. Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces&#x3D;\&quot;2\&quot; to represent $85). | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Discount** | Pointer to [**DiscountType**](DiscountType.md) |  | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Fees** | Pointer to [**FeesType**](FeesType.md) |  | [optional] 
**RateOverride** | Pointer to **bool** | When true indicates that the rate amount has been overridden. | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**Taxes** | Pointer to [**TaxesType**](TaxesType.md) |  | [optional] 

## Methods

### NewDailyRateType

`func NewDailyRateType() *DailyRateType`

NewDailyRateType instantiates a new DailyRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyRateTypeWithDefaults

`func NewDailyRateTypeWithDefaults() *DailyRateType`

NewDailyRateTypeWithDefaults instantiates a new DailyRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountAfterTax

`func (o *DailyRateType) GetAmountAfterTax() float32`

GetAmountAfterTax returns the AmountAfterTax field if non-nil, zero value otherwise.

### GetAmountAfterTaxOk

`func (o *DailyRateType) GetAmountAfterTaxOk() (*float32, bool)`

GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountAfterTax

`func (o *DailyRateType) SetAmountAfterTax(v float32)`

SetAmountAfterTax sets AmountAfterTax field to given value.

### HasAmountAfterTax

`func (o *DailyRateType) HasAmountAfterTax() bool`

HasAmountAfterTax returns a boolean if a field has been set.

### GetAmountBeforeTax

`func (o *DailyRateType) GetAmountBeforeTax() float32`

GetAmountBeforeTax returns the AmountBeforeTax field if non-nil, zero value otherwise.

### GetAmountBeforeTaxOk

`func (o *DailyRateType) GetAmountBeforeTaxOk() (*float32, bool)`

GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountBeforeTax

`func (o *DailyRateType) SetAmountBeforeTax(v float32)`

SetAmountBeforeTax sets AmountBeforeTax field to given value.

### HasAmountBeforeTax

`func (o *DailyRateType) HasAmountBeforeTax() bool`

HasAmountBeforeTax returns a boolean if a field has been set.

### GetBaseAmount

`func (o *DailyRateType) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *DailyRateType) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *DailyRateType) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *DailyRateType) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetCode

`func (o *DailyRateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *DailyRateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *DailyRateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *DailyRateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *DailyRateType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *DailyRateType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *DailyRateType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *DailyRateType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetCurrencySymbol

`func (o *DailyRateType) GetCurrencySymbol() string`

GetCurrencySymbol returns the CurrencySymbol field if non-nil, zero value otherwise.

### GetCurrencySymbolOk

`func (o *DailyRateType) GetCurrencySymbolOk() (*string, bool)`

GetCurrencySymbolOk returns a tuple with the CurrencySymbol field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencySymbol

`func (o *DailyRateType) SetCurrencySymbol(v string)`

SetCurrencySymbol sets CurrencySymbol field to given value.

### HasCurrencySymbol

`func (o *DailyRateType) HasCurrencySymbol() bool`

HasCurrencySymbol returns a boolean if a field has been set.

### GetDecimalPlaces

`func (o *DailyRateType) GetDecimalPlaces() int32`

GetDecimalPlaces returns the DecimalPlaces field if non-nil, zero value otherwise.

### GetDecimalPlacesOk

`func (o *DailyRateType) GetDecimalPlacesOk() (*int32, bool)`

GetDecimalPlacesOk returns a tuple with the DecimalPlaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecimalPlaces

`func (o *DailyRateType) SetDecimalPlaces(v int32)`

SetDecimalPlaces sets DecimalPlaces field to given value.

### HasDecimalPlaces

`func (o *DailyRateType) HasDecimalPlaces() bool`

HasDecimalPlaces returns a boolean if a field has been set.

### GetDescription

`func (o *DailyRateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DailyRateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DailyRateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DailyRateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDiscount

`func (o *DailyRateType) GetDiscount() DiscountType`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *DailyRateType) GetDiscountOk() (*DiscountType, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *DailyRateType) SetDiscount(v DiscountType)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *DailyRateType) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetEnd

`func (o *DailyRateType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *DailyRateType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *DailyRateType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *DailyRateType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFees

`func (o *DailyRateType) GetFees() FeesType`

GetFees returns the Fees field if non-nil, zero value otherwise.

### GetFeesOk

`func (o *DailyRateType) GetFeesOk() (*FeesType, bool)`

GetFeesOk returns a tuple with the Fees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFees

`func (o *DailyRateType) SetFees(v FeesType)`

SetFees sets Fees field to given value.

### HasFees

`func (o *DailyRateType) HasFees() bool`

HasFees returns a boolean if a field has been set.

### GetRateOverride

`func (o *DailyRateType) GetRateOverride() bool`

GetRateOverride returns the RateOverride field if non-nil, zero value otherwise.

### GetRateOverrideOk

`func (o *DailyRateType) GetRateOverrideOk() (*bool, bool)`

GetRateOverrideOk returns a tuple with the RateOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateOverride

`func (o *DailyRateType) SetRateOverride(v bool)`

SetRateOverride sets RateOverride field to given value.

### HasRateOverride

`func (o *DailyRateType) HasRateOverride() bool`

HasRateOverride returns a boolean if a field has been set.

### GetStart

`func (o *DailyRateType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *DailyRateType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *DailyRateType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *DailyRateType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetTaxes

`func (o *DailyRateType) GetTaxes() TaxesType`

GetTaxes returns the Taxes field if non-nil, zero value otherwise.

### GetTaxesOk

`func (o *DailyRateType) GetTaxesOk() (*TaxesType, bool)`

GetTaxesOk returns a tuple with the Taxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxes

`func (o *DailyRateType) SetTaxes(v TaxesType)`

SetTaxes sets Taxes field to given value.

### HasTaxes

`func (o *DailyRateType) HasTaxes() bool`

HasTaxes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


