# CurrencyExchangeRatesDetailsExchangeRatesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExchangeInfo** | Pointer to [**[]CurrencyExchangeRateType**](CurrencyExchangeRateType.md) | Exchange Rate information for a currency code. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 

## Methods

### NewCurrencyExchangeRatesDetailsExchangeRatesInner

`func NewCurrencyExchangeRatesDetailsExchangeRatesInner() *CurrencyExchangeRatesDetailsExchangeRatesInner`

NewCurrencyExchangeRatesDetailsExchangeRatesInner instantiates a new CurrencyExchangeRatesDetailsExchangeRatesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyExchangeRatesDetailsExchangeRatesInnerWithDefaults

`func NewCurrencyExchangeRatesDetailsExchangeRatesInnerWithDefaults() *CurrencyExchangeRatesDetailsExchangeRatesInner`

NewCurrencyExchangeRatesDetailsExchangeRatesInnerWithDefaults instantiates a new CurrencyExchangeRatesDetailsExchangeRatesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchangeInfo

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) GetExchangeInfo() []CurrencyExchangeRateType`

GetExchangeInfo returns the ExchangeInfo field if non-nil, zero value otherwise.

### GetExchangeInfoOk

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) GetExchangeInfoOk() (*[]CurrencyExchangeRateType, bool)`

GetExchangeInfoOk returns a tuple with the ExchangeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeInfo

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) SetExchangeInfo(v []CurrencyExchangeRateType)`

SetExchangeInfo sets ExchangeInfo field to given value.

### HasExchangeInfo

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) HasExchangeInfo() bool`

HasExchangeInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CurrencyExchangeRatesDetailsExchangeRatesInner) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


