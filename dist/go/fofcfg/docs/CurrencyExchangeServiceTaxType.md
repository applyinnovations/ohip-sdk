# CurrencyExchangeServiceTaxType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountFrom** | Pointer to **float32** | Starting value of exchange equivalent range | [optional] 
**AmountTo** | Pointer to **float32** | End value of exchange equivalent range | [optional] 
**BaseAmount** | Pointer to **float32** | Base tax basis of local currency. This is normally configured to the resulting tax basis of the previous tax slab range. | [optional] 
**Code** | Pointer to **string** | Currency exchange service tax code | [optional] 
**Hotel** | Pointer to **string** | Property associated with currency exchange service tax | [optional] 
**MaxServiceTax** | Pointer to **float32** | Maximimum service tax to be collected | [optional] 
**MinServiceTax** | Pointer to **float32** | Minimum service tax to be collected | [optional] 
**Percentage** | Pointer to **float32** | Percentage of local currency | [optional] 

## Methods

### NewCurrencyExchangeServiceTaxType

`func NewCurrencyExchangeServiceTaxType() *CurrencyExchangeServiceTaxType`

NewCurrencyExchangeServiceTaxType instantiates a new CurrencyExchangeServiceTaxType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyExchangeServiceTaxTypeWithDefaults

`func NewCurrencyExchangeServiceTaxTypeWithDefaults() *CurrencyExchangeServiceTaxType`

NewCurrencyExchangeServiceTaxTypeWithDefaults instantiates a new CurrencyExchangeServiceTaxType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountFrom

`func (o *CurrencyExchangeServiceTaxType) GetAmountFrom() float32`

GetAmountFrom returns the AmountFrom field if non-nil, zero value otherwise.

### GetAmountFromOk

`func (o *CurrencyExchangeServiceTaxType) GetAmountFromOk() (*float32, bool)`

GetAmountFromOk returns a tuple with the AmountFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountFrom

`func (o *CurrencyExchangeServiceTaxType) SetAmountFrom(v float32)`

SetAmountFrom sets AmountFrom field to given value.

### HasAmountFrom

`func (o *CurrencyExchangeServiceTaxType) HasAmountFrom() bool`

HasAmountFrom returns a boolean if a field has been set.

### GetAmountTo

`func (o *CurrencyExchangeServiceTaxType) GetAmountTo() float32`

GetAmountTo returns the AmountTo field if non-nil, zero value otherwise.

### GetAmountToOk

`func (o *CurrencyExchangeServiceTaxType) GetAmountToOk() (*float32, bool)`

GetAmountToOk returns a tuple with the AmountTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountTo

`func (o *CurrencyExchangeServiceTaxType) SetAmountTo(v float32)`

SetAmountTo sets AmountTo field to given value.

### HasAmountTo

`func (o *CurrencyExchangeServiceTaxType) HasAmountTo() bool`

HasAmountTo returns a boolean if a field has been set.

### GetBaseAmount

`func (o *CurrencyExchangeServiceTaxType) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *CurrencyExchangeServiceTaxType) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *CurrencyExchangeServiceTaxType) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *CurrencyExchangeServiceTaxType) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetCode

`func (o *CurrencyExchangeServiceTaxType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CurrencyExchangeServiceTaxType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CurrencyExchangeServiceTaxType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CurrencyExchangeServiceTaxType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetHotel

`func (o *CurrencyExchangeServiceTaxType) GetHotel() string`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *CurrencyExchangeServiceTaxType) GetHotelOk() (*string, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *CurrencyExchangeServiceTaxType) SetHotel(v string)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *CurrencyExchangeServiceTaxType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetMaxServiceTax

`func (o *CurrencyExchangeServiceTaxType) GetMaxServiceTax() float32`

GetMaxServiceTax returns the MaxServiceTax field if non-nil, zero value otherwise.

### GetMaxServiceTaxOk

`func (o *CurrencyExchangeServiceTaxType) GetMaxServiceTaxOk() (*float32, bool)`

GetMaxServiceTaxOk returns a tuple with the MaxServiceTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxServiceTax

`func (o *CurrencyExchangeServiceTaxType) SetMaxServiceTax(v float32)`

SetMaxServiceTax sets MaxServiceTax field to given value.

### HasMaxServiceTax

`func (o *CurrencyExchangeServiceTaxType) HasMaxServiceTax() bool`

HasMaxServiceTax returns a boolean if a field has been set.

### GetMinServiceTax

`func (o *CurrencyExchangeServiceTaxType) GetMinServiceTax() float32`

GetMinServiceTax returns the MinServiceTax field if non-nil, zero value otherwise.

### GetMinServiceTaxOk

`func (o *CurrencyExchangeServiceTaxType) GetMinServiceTaxOk() (*float32, bool)`

GetMinServiceTaxOk returns a tuple with the MinServiceTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinServiceTax

`func (o *CurrencyExchangeServiceTaxType) SetMinServiceTax(v float32)`

SetMinServiceTax sets MinServiceTax field to given value.

### HasMinServiceTax

`func (o *CurrencyExchangeServiceTaxType) HasMinServiceTax() bool`

HasMinServiceTax returns a boolean if a field has been set.

### GetPercentage

`func (o *CurrencyExchangeServiceTaxType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *CurrencyExchangeServiceTaxType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *CurrencyExchangeServiceTaxType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *CurrencyExchangeServiceTaxType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


