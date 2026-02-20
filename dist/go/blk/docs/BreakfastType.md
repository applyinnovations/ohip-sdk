# BreakfastType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BreakfastIncluded** | Pointer to **bool** | Indicates if the room rate quoted includes the breakfast cost. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Description** | Pointer to **string** | The exact breakfast method for this business block that is included or offered as an extra. | [optional] 

## Methods

### NewBreakfastType

`func NewBreakfastType() *BreakfastType`

NewBreakfastType instantiates a new BreakfastType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBreakfastTypeWithDefaults

`func NewBreakfastTypeWithDefaults() *BreakfastType`

NewBreakfastTypeWithDefaults instantiates a new BreakfastType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBreakfastIncluded

`func (o *BreakfastType) GetBreakfastIncluded() bool`

GetBreakfastIncluded returns the BreakfastIncluded field if non-nil, zero value otherwise.

### GetBreakfastIncludedOk

`func (o *BreakfastType) GetBreakfastIncludedOk() (*bool, bool)`

GetBreakfastIncludedOk returns a tuple with the BreakfastIncluded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBreakfastIncluded

`func (o *BreakfastType) SetBreakfastIncluded(v bool)`

SetBreakfastIncluded sets BreakfastIncluded field to given value.

### HasBreakfastIncluded

`func (o *BreakfastType) HasBreakfastIncluded() bool`

HasBreakfastIncluded returns a boolean if a field has been set.

### GetPrice

`func (o *BreakfastType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BreakfastType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BreakfastType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *BreakfastType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetDescription

`func (o *BreakfastType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BreakfastType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BreakfastType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BreakfastType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


