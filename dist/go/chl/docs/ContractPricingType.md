# ContractPricingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PricePer** | Pointer to [**ContractPriceType**](ContractPriceType.md) |  | [optional] 

## Methods

### NewContractPricingType

`func NewContractPricingType() *ContractPricingType`

NewContractPricingType instantiates a new ContractPricingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContractPricingTypeWithDefaults

`func NewContractPricingTypeWithDefaults() *ContractPricingType`

NewContractPricingTypeWithDefaults instantiates a new ContractPricingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrice

`func (o *ContractPricingType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ContractPricingType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ContractPricingType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ContractPricingType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPricePer

`func (o *ContractPricingType) GetPricePer() ContractPriceType`

GetPricePer returns the PricePer field if non-nil, zero value otherwise.

### GetPricePerOk

`func (o *ContractPricingType) GetPricePerOk() (*ContractPriceType, bool)`

GetPricePerOk returns a tuple with the PricePer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricePer

`func (o *ContractPricingType) SetPricePer(v ContractPriceType)`

SetPricePer sets PricePer field to given value.

### HasPricePer

`func (o *ContractPricingType) HasPricePer() bool`

HasPricePer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


