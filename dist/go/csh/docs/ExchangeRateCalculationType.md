# ExchangeRateCalculationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BuyCommission** | Pointer to **float32** | Buy commission for the foreign currency. | [optional] 
**CalculatedAmount** | Pointer to **float32** | Pure calculated amount. | [optional] 
**Date** | Pointer to **string** | Date on which the exchange is to take place. | [optional] 
**EuroAmount** | Pointer to **float32** | Amount in Euro for the exchange. | [optional] 
**EuroExchangeRate** | Pointer to **float32** | Exchange rate against Euro. | [optional] 
**ExchangeDate** | Pointer to **string** | Date on which exchange rate was obtained. | [optional] 
**ExchangeInformation** | Pointer to **string** | Exchange Information - text presentation of the exchange operation including formula, buy rate, etc. | [optional] 
**ExchangeRate** | Pointer to **float32** | Exchange Rate. | [optional] 
**ExchangeRateCalculationTax** | Pointer to [**ExchangeRateCalculationTaxType**](ExchangeRateCalculationTaxType.md) |  | [optional] 
**ExchangeReference** | Pointer to **string** | Exchange references. | [optional] 
**ExchangeType** | Pointer to [**CurrencyExchangeType**](CurrencyExchangeType.md) |  | [optional] 
**FromCurrencyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code where the currency is being converted. | [optional] 
**RoundingAmount** | Pointer to **float32** | Amount by which the exchange was rounded. | [optional] 
**Sell** | Pointer to **bool** | Buy or Sell for calculation. | [optional] 
**ServiceTax** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ToCurrencyAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewExchangeRateCalculationType

`func NewExchangeRateCalculationType() *ExchangeRateCalculationType`

NewExchangeRateCalculationType instantiates a new ExchangeRateCalculationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeRateCalculationTypeWithDefaults

`func NewExchangeRateCalculationTypeWithDefaults() *ExchangeRateCalculationType`

NewExchangeRateCalculationTypeWithDefaults instantiates a new ExchangeRateCalculationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBuyCommission

`func (o *ExchangeRateCalculationType) GetBuyCommission() float32`

GetBuyCommission returns the BuyCommission field if non-nil, zero value otherwise.

### GetBuyCommissionOk

`func (o *ExchangeRateCalculationType) GetBuyCommissionOk() (*float32, bool)`

GetBuyCommissionOk returns a tuple with the BuyCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuyCommission

`func (o *ExchangeRateCalculationType) SetBuyCommission(v float32)`

SetBuyCommission sets BuyCommission field to given value.

### HasBuyCommission

`func (o *ExchangeRateCalculationType) HasBuyCommission() bool`

HasBuyCommission returns a boolean if a field has been set.

### GetCalculatedAmount

`func (o *ExchangeRateCalculationType) GetCalculatedAmount() float32`

GetCalculatedAmount returns the CalculatedAmount field if non-nil, zero value otherwise.

### GetCalculatedAmountOk

`func (o *ExchangeRateCalculationType) GetCalculatedAmountOk() (*float32, bool)`

GetCalculatedAmountOk returns a tuple with the CalculatedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculatedAmount

`func (o *ExchangeRateCalculationType) SetCalculatedAmount(v float32)`

SetCalculatedAmount sets CalculatedAmount field to given value.

### HasCalculatedAmount

`func (o *ExchangeRateCalculationType) HasCalculatedAmount() bool`

HasCalculatedAmount returns a boolean if a field has been set.

### GetDate

`func (o *ExchangeRateCalculationType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ExchangeRateCalculationType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ExchangeRateCalculationType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ExchangeRateCalculationType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetEuroAmount

`func (o *ExchangeRateCalculationType) GetEuroAmount() float32`

GetEuroAmount returns the EuroAmount field if non-nil, zero value otherwise.

### GetEuroAmountOk

`func (o *ExchangeRateCalculationType) GetEuroAmountOk() (*float32, bool)`

GetEuroAmountOk returns a tuple with the EuroAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEuroAmount

`func (o *ExchangeRateCalculationType) SetEuroAmount(v float32)`

SetEuroAmount sets EuroAmount field to given value.

### HasEuroAmount

`func (o *ExchangeRateCalculationType) HasEuroAmount() bool`

HasEuroAmount returns a boolean if a field has been set.

### GetEuroExchangeRate

`func (o *ExchangeRateCalculationType) GetEuroExchangeRate() float32`

GetEuroExchangeRate returns the EuroExchangeRate field if non-nil, zero value otherwise.

### GetEuroExchangeRateOk

`func (o *ExchangeRateCalculationType) GetEuroExchangeRateOk() (*float32, bool)`

GetEuroExchangeRateOk returns a tuple with the EuroExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEuroExchangeRate

`func (o *ExchangeRateCalculationType) SetEuroExchangeRate(v float32)`

SetEuroExchangeRate sets EuroExchangeRate field to given value.

### HasEuroExchangeRate

`func (o *ExchangeRateCalculationType) HasEuroExchangeRate() bool`

HasEuroExchangeRate returns a boolean if a field has been set.

### GetExchangeDate

`func (o *ExchangeRateCalculationType) GetExchangeDate() string`

GetExchangeDate returns the ExchangeDate field if non-nil, zero value otherwise.

### GetExchangeDateOk

`func (o *ExchangeRateCalculationType) GetExchangeDateOk() (*string, bool)`

GetExchangeDateOk returns a tuple with the ExchangeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeDate

`func (o *ExchangeRateCalculationType) SetExchangeDate(v string)`

SetExchangeDate sets ExchangeDate field to given value.

### HasExchangeDate

`func (o *ExchangeRateCalculationType) HasExchangeDate() bool`

HasExchangeDate returns a boolean if a field has been set.

### GetExchangeInformation

`func (o *ExchangeRateCalculationType) GetExchangeInformation() string`

GetExchangeInformation returns the ExchangeInformation field if non-nil, zero value otherwise.

### GetExchangeInformationOk

`func (o *ExchangeRateCalculationType) GetExchangeInformationOk() (*string, bool)`

GetExchangeInformationOk returns a tuple with the ExchangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeInformation

`func (o *ExchangeRateCalculationType) SetExchangeInformation(v string)`

SetExchangeInformation sets ExchangeInformation field to given value.

### HasExchangeInformation

`func (o *ExchangeRateCalculationType) HasExchangeInformation() bool`

HasExchangeInformation returns a boolean if a field has been set.

### GetExchangeRate

`func (o *ExchangeRateCalculationType) GetExchangeRate() float32`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *ExchangeRateCalculationType) GetExchangeRateOk() (*float32, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *ExchangeRateCalculationType) SetExchangeRate(v float32)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *ExchangeRateCalculationType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.

### GetExchangeRateCalculationTax

`func (o *ExchangeRateCalculationType) GetExchangeRateCalculationTax() ExchangeRateCalculationTaxType`

GetExchangeRateCalculationTax returns the ExchangeRateCalculationTax field if non-nil, zero value otherwise.

### GetExchangeRateCalculationTaxOk

`func (o *ExchangeRateCalculationType) GetExchangeRateCalculationTaxOk() (*ExchangeRateCalculationTaxType, bool)`

GetExchangeRateCalculationTaxOk returns a tuple with the ExchangeRateCalculationTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRateCalculationTax

`func (o *ExchangeRateCalculationType) SetExchangeRateCalculationTax(v ExchangeRateCalculationTaxType)`

SetExchangeRateCalculationTax sets ExchangeRateCalculationTax field to given value.

### HasExchangeRateCalculationTax

`func (o *ExchangeRateCalculationType) HasExchangeRateCalculationTax() bool`

HasExchangeRateCalculationTax returns a boolean if a field has been set.

### GetExchangeReference

`func (o *ExchangeRateCalculationType) GetExchangeReference() string`

GetExchangeReference returns the ExchangeReference field if non-nil, zero value otherwise.

### GetExchangeReferenceOk

`func (o *ExchangeRateCalculationType) GetExchangeReferenceOk() (*string, bool)`

GetExchangeReferenceOk returns a tuple with the ExchangeReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeReference

`func (o *ExchangeRateCalculationType) SetExchangeReference(v string)`

SetExchangeReference sets ExchangeReference field to given value.

### HasExchangeReference

`func (o *ExchangeRateCalculationType) HasExchangeReference() bool`

HasExchangeReference returns a boolean if a field has been set.

### GetExchangeType

`func (o *ExchangeRateCalculationType) GetExchangeType() CurrencyExchangeType`

GetExchangeType returns the ExchangeType field if non-nil, zero value otherwise.

### GetExchangeTypeOk

`func (o *ExchangeRateCalculationType) GetExchangeTypeOk() (*CurrencyExchangeType, bool)`

GetExchangeTypeOk returns a tuple with the ExchangeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeType

`func (o *ExchangeRateCalculationType) SetExchangeType(v CurrencyExchangeType)`

SetExchangeType sets ExchangeType field to given value.

### HasExchangeType

`func (o *ExchangeRateCalculationType) HasExchangeType() bool`

HasExchangeType returns a boolean if a field has been set.

### GetFromCurrencyAmount

`func (o *ExchangeRateCalculationType) GetFromCurrencyAmount() CurrencyAmountType`

GetFromCurrencyAmount returns the FromCurrencyAmount field if non-nil, zero value otherwise.

### GetFromCurrencyAmountOk

`func (o *ExchangeRateCalculationType) GetFromCurrencyAmountOk() (*CurrencyAmountType, bool)`

GetFromCurrencyAmountOk returns a tuple with the FromCurrencyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCurrencyAmount

`func (o *ExchangeRateCalculationType) SetFromCurrencyAmount(v CurrencyAmountType)`

SetFromCurrencyAmount sets FromCurrencyAmount field to given value.

### HasFromCurrencyAmount

`func (o *ExchangeRateCalculationType) HasFromCurrencyAmount() bool`

HasFromCurrencyAmount returns a boolean if a field has been set.

### GetHotelId

`func (o *ExchangeRateCalculationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExchangeRateCalculationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExchangeRateCalculationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExchangeRateCalculationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoundingAmount

`func (o *ExchangeRateCalculationType) GetRoundingAmount() float32`

GetRoundingAmount returns the RoundingAmount field if non-nil, zero value otherwise.

### GetRoundingAmountOk

`func (o *ExchangeRateCalculationType) GetRoundingAmountOk() (*float32, bool)`

GetRoundingAmountOk returns a tuple with the RoundingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingAmount

`func (o *ExchangeRateCalculationType) SetRoundingAmount(v float32)`

SetRoundingAmount sets RoundingAmount field to given value.

### HasRoundingAmount

`func (o *ExchangeRateCalculationType) HasRoundingAmount() bool`

HasRoundingAmount returns a boolean if a field has been set.

### GetSell

`func (o *ExchangeRateCalculationType) GetSell() bool`

GetSell returns the Sell field if non-nil, zero value otherwise.

### GetSellOk

`func (o *ExchangeRateCalculationType) GetSellOk() (*bool, bool)`

GetSellOk returns a tuple with the Sell field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSell

`func (o *ExchangeRateCalculationType) SetSell(v bool)`

SetSell sets Sell field to given value.

### HasSell

`func (o *ExchangeRateCalculationType) HasSell() bool`

HasSell returns a boolean if a field has been set.

### GetServiceTax

`func (o *ExchangeRateCalculationType) GetServiceTax() CurrencyAmountType`

GetServiceTax returns the ServiceTax field if non-nil, zero value otherwise.

### GetServiceTaxOk

`func (o *ExchangeRateCalculationType) GetServiceTaxOk() (*CurrencyAmountType, bool)`

GetServiceTaxOk returns a tuple with the ServiceTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceTax

`func (o *ExchangeRateCalculationType) SetServiceTax(v CurrencyAmountType)`

SetServiceTax sets ServiceTax field to given value.

### HasServiceTax

`func (o *ExchangeRateCalculationType) HasServiceTax() bool`

HasServiceTax returns a boolean if a field has been set.

### GetToCurrencyAmount

`func (o *ExchangeRateCalculationType) GetToCurrencyAmount() CurrencyAmountType`

GetToCurrencyAmount returns the ToCurrencyAmount field if non-nil, zero value otherwise.

### GetToCurrencyAmountOk

`func (o *ExchangeRateCalculationType) GetToCurrencyAmountOk() (*CurrencyAmountType, bool)`

GetToCurrencyAmountOk returns a tuple with the ToCurrencyAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCurrencyAmount

`func (o *ExchangeRateCalculationType) SetToCurrencyAmount(v CurrencyAmountType)`

SetToCurrencyAmount sets ToCurrencyAmount field to given value.

### HasToCurrencyAmount

`func (o *ExchangeRateCalculationType) HasToCurrencyAmount() bool`

HasToCurrencyAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


