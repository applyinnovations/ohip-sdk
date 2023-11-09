# DeleteExchangeRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Rates** | Pointer to [**[]ExchangeRateType**](ExchangeRateType.md) | Exchange Rates to be Set. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeleteExchangeRatesRequest

`func NewDeleteExchangeRatesRequest() *DeleteExchangeRatesRequest`

NewDeleteExchangeRatesRequest instantiates a new DeleteExchangeRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteExchangeRatesRequestWithDefaults

`func NewDeleteExchangeRatesRequestWithDefaults() *DeleteExchangeRatesRequest`

NewDeleteExchangeRatesRequestWithDefaults instantiates a new DeleteExchangeRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DeleteExchangeRatesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeleteExchangeRatesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeleteExchangeRatesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeleteExchangeRatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRates

`func (o *DeleteExchangeRatesRequest) GetRates() []ExchangeRateType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *DeleteExchangeRatesRequest) GetRatesOk() (*[]ExchangeRateType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *DeleteExchangeRatesRequest) SetRates(v []ExchangeRateType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *DeleteExchangeRatesRequest) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetWarnings

`func (o *DeleteExchangeRatesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeleteExchangeRatesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeleteExchangeRatesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeleteExchangeRatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


