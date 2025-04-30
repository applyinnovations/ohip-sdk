# ExchangeRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where exchange rate is set. | [optional] 
**ExchangeType** | Pointer to [**[]CurrencyExchangeType**](CurrencyExchangeType.md) | Type for exchange calculation. | [optional] 
**Currency** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BaseCurrency** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**BeginDate** | Pointer to **string** | Date on which the rate is to become active. | [optional] 
**BuyRate** | Pointer to **float32** | Buy Rate for foreign currency. | [optional] 
**BuyCommission** | Pointer to **float32** | Percentage of the amount that is to be a commission for the currency buy operation. | [optional] 
**SellRate** | Pointer to **float32** | Sell Rate for foreign currency. | [optional] 
**SellCommission** | Pointer to **float32** | Percentage of the amount that is to be a commission for the currency sell operation. | [optional] 
**Comment** | Pointer to **string** | Comments associated with the exchange rate. | [optional] 
**Status** | Pointer to [**StatusTypes**](StatusTypes.md) |  | [optional] 

## Methods

### NewExchangeRateType

`func NewExchangeRateType() *ExchangeRateType`

NewExchangeRateType instantiates a new ExchangeRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExchangeRateTypeWithDefaults

`func NewExchangeRateTypeWithDefaults() *ExchangeRateType`

NewExchangeRateTypeWithDefaults instantiates a new ExchangeRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ExchangeRateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExchangeRateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExchangeRateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExchangeRateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExchangeType

`func (o *ExchangeRateType) GetExchangeType() []CurrencyExchangeType`

GetExchangeType returns the ExchangeType field if non-nil, zero value otherwise.

### GetExchangeTypeOk

`func (o *ExchangeRateType) GetExchangeTypeOk() (*[]CurrencyExchangeType, bool)`

GetExchangeTypeOk returns a tuple with the ExchangeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeType

`func (o *ExchangeRateType) SetExchangeType(v []CurrencyExchangeType)`

SetExchangeType sets ExchangeType field to given value.

### HasExchangeType

`func (o *ExchangeRateType) HasExchangeType() bool`

HasExchangeType returns a boolean if a field has been set.

### GetCurrency

`func (o *ExchangeRateType) GetCurrency() CodeDescriptionType`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ExchangeRateType) GetCurrencyOk() (*CodeDescriptionType, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ExchangeRateType) SetCurrency(v CodeDescriptionType)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *ExchangeRateType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetBaseCurrency

`func (o *ExchangeRateType) GetBaseCurrency() CodeDescriptionType`

GetBaseCurrency returns the BaseCurrency field if non-nil, zero value otherwise.

### GetBaseCurrencyOk

`func (o *ExchangeRateType) GetBaseCurrencyOk() (*CodeDescriptionType, bool)`

GetBaseCurrencyOk returns a tuple with the BaseCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseCurrency

`func (o *ExchangeRateType) SetBaseCurrency(v CodeDescriptionType)`

SetBaseCurrency sets BaseCurrency field to given value.

### HasBaseCurrency

`func (o *ExchangeRateType) HasBaseCurrency() bool`

HasBaseCurrency returns a boolean if a field has been set.

### GetBeginDate

`func (o *ExchangeRateType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ExchangeRateType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ExchangeRateType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ExchangeRateType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetBuyRate

`func (o *ExchangeRateType) GetBuyRate() float32`

GetBuyRate returns the BuyRate field if non-nil, zero value otherwise.

### GetBuyRateOk

`func (o *ExchangeRateType) GetBuyRateOk() (*float32, bool)`

GetBuyRateOk returns a tuple with the BuyRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuyRate

`func (o *ExchangeRateType) SetBuyRate(v float32)`

SetBuyRate sets BuyRate field to given value.

### HasBuyRate

`func (o *ExchangeRateType) HasBuyRate() bool`

HasBuyRate returns a boolean if a field has been set.

### GetBuyCommission

`func (o *ExchangeRateType) GetBuyCommission() float32`

GetBuyCommission returns the BuyCommission field if non-nil, zero value otherwise.

### GetBuyCommissionOk

`func (o *ExchangeRateType) GetBuyCommissionOk() (*float32, bool)`

GetBuyCommissionOk returns a tuple with the BuyCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuyCommission

`func (o *ExchangeRateType) SetBuyCommission(v float32)`

SetBuyCommission sets BuyCommission field to given value.

### HasBuyCommission

`func (o *ExchangeRateType) HasBuyCommission() bool`

HasBuyCommission returns a boolean if a field has been set.

### GetSellRate

`func (o *ExchangeRateType) GetSellRate() float32`

GetSellRate returns the SellRate field if non-nil, zero value otherwise.

### GetSellRateOk

`func (o *ExchangeRateType) GetSellRateOk() (*float32, bool)`

GetSellRateOk returns a tuple with the SellRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellRate

`func (o *ExchangeRateType) SetSellRate(v float32)`

SetSellRate sets SellRate field to given value.

### HasSellRate

`func (o *ExchangeRateType) HasSellRate() bool`

HasSellRate returns a boolean if a field has been set.

### GetSellCommission

`func (o *ExchangeRateType) GetSellCommission() float32`

GetSellCommission returns the SellCommission field if non-nil, zero value otherwise.

### GetSellCommissionOk

`func (o *ExchangeRateType) GetSellCommissionOk() (*float32, bool)`

GetSellCommissionOk returns a tuple with the SellCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellCommission

`func (o *ExchangeRateType) SetSellCommission(v float32)`

SetSellCommission sets SellCommission field to given value.

### HasSellCommission

`func (o *ExchangeRateType) HasSellCommission() bool`

HasSellCommission returns a boolean if a field has been set.

### GetComment

`func (o *ExchangeRateType) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ExchangeRateType) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ExchangeRateType) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ExchangeRateType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetStatus

`func (o *ExchangeRateType) GetStatus() StatusTypes`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ExchangeRateType) GetStatusOk() (*StatusTypes, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ExchangeRateType) SetStatus(v StatusTypes)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ExchangeRateType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


