# OfferTotalType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountAfterTax** | Pointer to **float32** | The total amount including all associated taxes (e.g., sales tax, VAT, GST or any associated tax). | [optional] 
**CurrencyCode** | Pointer to **string** | ISO 4217 currency code | [optional] 

## Methods

### NewOfferTotalType

`func NewOfferTotalType() *OfferTotalType`

NewOfferTotalType instantiates a new OfferTotalType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOfferTotalTypeWithDefaults

`func NewOfferTotalTypeWithDefaults() *OfferTotalType`

NewOfferTotalTypeWithDefaults instantiates a new OfferTotalType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountAfterTax

`func (o *OfferTotalType) GetAmountAfterTax() float32`

GetAmountAfterTax returns the AmountAfterTax field if non-nil, zero value otherwise.

### GetAmountAfterTaxOk

`func (o *OfferTotalType) GetAmountAfterTaxOk() (*float32, bool)`

GetAmountAfterTaxOk returns a tuple with the AmountAfterTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountAfterTax

`func (o *OfferTotalType) SetAmountAfterTax(v float32)`

SetAmountAfterTax sets AmountAfterTax field to given value.

### HasAmountAfterTax

`func (o *OfferTotalType) HasAmountAfterTax() bool`

HasAmountAfterTax returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *OfferTotalType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *OfferTotalType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *OfferTotalType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *OfferTotalType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


