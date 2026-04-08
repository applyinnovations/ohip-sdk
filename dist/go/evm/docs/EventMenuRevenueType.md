# EventMenuRevenueType

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
**ResourceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Custom** | Pointer to **bool** | Indicates that this resource item is a custom item added for this event. | [optional] 

## Methods

### NewEventMenuRevenueType

`func NewEventMenuRevenueType() *EventMenuRevenueType`

NewEventMenuRevenueType instantiates a new EventMenuRevenueType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenuRevenueTypeWithDefaults

`func NewEventMenuRevenueTypeWithDefaults() *EventMenuRevenueType`

NewEventMenuRevenueTypeWithDefaults instantiates a new EventMenuRevenueType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueType

`func (o *EventMenuRevenueType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *EventMenuRevenueType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *EventMenuRevenueType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *EventMenuRevenueType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetType

`func (o *EventMenuRevenueType) GetType() MenuTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EventMenuRevenueType) GetTypeOk() (*MenuTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EventMenuRevenueType) SetType(v MenuTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *EventMenuRevenueType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCost

`func (o *EventMenuRevenueType) GetCost() CurrencyAmountType`

GetCost returns the Cost field if non-nil, zero value otherwise.

### GetCostOk

`func (o *EventMenuRevenueType) GetCostOk() (*CurrencyAmountType, bool)`

GetCostOk returns a tuple with the Cost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCost

`func (o *EventMenuRevenueType) SetCost(v CurrencyAmountType)`

SetCost sets Cost field to given value.

### HasCost

`func (o *EventMenuRevenueType) HasCost() bool`

HasCost returns a boolean if a field has been set.

### GetInternalQuote

`func (o *EventMenuRevenueType) GetInternalQuote() CurrencyAmountType`

GetInternalQuote returns the InternalQuote field if non-nil, zero value otherwise.

### GetInternalQuoteOk

`func (o *EventMenuRevenueType) GetInternalQuoteOk() (*CurrencyAmountType, bool)`

GetInternalQuoteOk returns a tuple with the InternalQuote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalQuote

`func (o *EventMenuRevenueType) SetInternalQuote(v CurrencyAmountType)`

SetInternalQuote sets InternalQuote field to given value.

### HasInternalQuote

`func (o *EventMenuRevenueType) HasInternalQuote() bool`

HasInternalQuote returns a boolean if a field has been set.

### GetCostMargin

`func (o *EventMenuRevenueType) GetCostMargin() float32`

GetCostMargin returns the CostMargin field if non-nil, zero value otherwise.

### GetCostMarginOk

`func (o *EventMenuRevenueType) GetCostMarginOk() (*float32, bool)`

GetCostMarginOk returns a tuple with the CostMargin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostMargin

`func (o *EventMenuRevenueType) SetCostMargin(v float32)`

SetCostMargin sets CostMargin field to given value.

### HasCostMargin

`func (o *EventMenuRevenueType) HasCostMargin() bool`

HasCostMargin returns a boolean if a field has been set.

### GetPrice

`func (o *EventMenuRevenueType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *EventMenuRevenueType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *EventMenuRevenueType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *EventMenuRevenueType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPriceMargin

`func (o *EventMenuRevenueType) GetPriceMargin() float32`

GetPriceMargin returns the PriceMargin field if non-nil, zero value otherwise.

### GetPriceMarginOk

`func (o *EventMenuRevenueType) GetPriceMarginOk() (*float32, bool)`

GetPriceMarginOk returns a tuple with the PriceMargin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceMargin

`func (o *EventMenuRevenueType) SetPriceMargin(v float32)`

SetPriceMargin sets PriceMargin field to given value.

### HasPriceMargin

`func (o *EventMenuRevenueType) HasPriceMargin() bool`

HasPriceMargin returns a boolean if a field has been set.

### GetResourceId

`func (o *EventMenuRevenueType) GetResourceId() UniqueIDType`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *EventMenuRevenueType) GetResourceIdOk() (*UniqueIDType, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *EventMenuRevenueType) SetResourceId(v UniqueIDType)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *EventMenuRevenueType) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetCustom

`func (o *EventMenuRevenueType) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *EventMenuRevenueType) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *EventMenuRevenueType) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *EventMenuRevenueType) HasCustom() bool`

HasCustom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


