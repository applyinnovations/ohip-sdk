# CateringMenuRevType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueType** | Pointer to **string** | This supports all Revenue Types | [optional] 
**Type** | Pointer to [**MenuTypeType**](MenuTypeType.md) |  | [optional] 
**Cost** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**InternalQuote** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CostMargin** | Pointer to **float32** | This type holds cost of the Menu. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PriceMargin** | Pointer to **float32** | This type holds price margin for the given Menu. | [optional] 

## Methods

### NewCateringMenuRevType

`func NewCateringMenuRevType() *CateringMenuRevType`

NewCateringMenuRevType instantiates a new CateringMenuRevType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuRevTypeWithDefaults

`func NewCateringMenuRevTypeWithDefaults() *CateringMenuRevType`

NewCateringMenuRevTypeWithDefaults instantiates a new CateringMenuRevType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *CateringMenuRevType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *CateringMenuRevType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *CateringMenuRevType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *CateringMenuRevType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetType

`func (o *CateringMenuRevType) GetType() MenuTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CateringMenuRevType) GetTypeOk() (*MenuTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CateringMenuRevType) SetType(v MenuTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *CateringMenuRevType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCost

`func (o *CateringMenuRevType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *CateringMenuRevType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *CateringMenuRevType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *CateringMenuRevType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetInternalQuote

`func (o *CateringMenuRevType) GetInternalQuote() CurrencyAmountType`

GetInternalQuote returns the InternalQuote field if non-nil, zero value otherwise.

### GetInternalQuoteOk

`func (o *CateringMenuRevType) GetInternalQuoteOk() (*CurrencyAmountType, bool)`

GetInternalQuoteOk returns a tuple with the InternalQuote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalQuote

`func (o *CateringMenuRevType) SetInternalQuote(v CurrencyAmountType)`

SetInternalQuote sets InternalQuote field to given value.

### HasInternalQuote

`func (o *CateringMenuRevType) HasInternalQuote() bool`

HasInternalQuote returns a boolean if a field has been set.

### GetCostMargin

`func (o *CateringMenuRevType) GetCostMargin() float32`

GetCostMargin returns the CostMargin field if non-nil, zero value otherwise.

### GetCostMarginOk

`func (o *CateringMenuRevType) GetCostMarginOk() (*float32, bool)`

GetCostMarginOk returns a tuple with the CostMargin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostMargin

`func (o *CateringMenuRevType) SetCostMargin(v float32)`

SetCostMargin sets CostMargin field to given value.

### HasCostMargin

`func (o *CateringMenuRevType) HasCostMargin() bool`

HasCostMargin returns a boolean if a field has been set.

### GetPrice

`func (o *CateringMenuRevType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *CateringMenuRevType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *CateringMenuRevType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *CateringMenuRevType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPriceMargin

`func (o *CateringMenuRevType) GetPriceMargin() float32`

GetPriceMargin returns the PriceMargin field if non-nil, zero value otherwise.

### GetPriceMarginOk

`func (o *CateringMenuRevType) GetPriceMarginOk() (*float32, bool)`

GetPriceMarginOk returns a tuple with the PriceMargin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceMargin

`func (o *CateringMenuRevType) SetPriceMargin(v float32)`

SetPriceMargin sets PriceMargin field to given value.

### HasPriceMargin

`func (o *CateringMenuRevType) HasPriceMargin() bool`

HasPriceMargin returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


