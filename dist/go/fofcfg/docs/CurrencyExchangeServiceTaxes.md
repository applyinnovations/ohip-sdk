# CurrencyExchangeServiceTaxes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyExchangeServiceTaxes** | Pointer to [**[]CurrencyExchangeServiceTaxType**](CurrencyExchangeServiceTaxType.md) | List of currency exchange service taxes | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCurrencyExchangeServiceTaxes

`func NewCurrencyExchangeServiceTaxes() *CurrencyExchangeServiceTaxes`

NewCurrencyExchangeServiceTaxes instantiates a new CurrencyExchangeServiceTaxes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrencyExchangeServiceTaxesWithDefaults

`func NewCurrencyExchangeServiceTaxesWithDefaults() *CurrencyExchangeServiceTaxes`

NewCurrencyExchangeServiceTaxesWithDefaults instantiates a new CurrencyExchangeServiceTaxes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyExchangeServiceTaxes

`func (o *CurrencyExchangeServiceTaxes) GetCurrencyExchangeServiceTaxes() []CurrencyExchangeServiceTaxType`

GetCurrencyExchangeServiceTaxes returns the CurrencyExchangeServiceTaxes field if non-nil, zero value otherwise.

### GetCurrencyExchangeServiceTaxesOk

`func (o *CurrencyExchangeServiceTaxes) GetCurrencyExchangeServiceTaxesOk() (*[]CurrencyExchangeServiceTaxType, bool)`

GetCurrencyExchangeServiceTaxesOk returns a tuple with the CurrencyExchangeServiceTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyExchangeServiceTaxes

`func (o *CurrencyExchangeServiceTaxes) SetCurrencyExchangeServiceTaxes(v []CurrencyExchangeServiceTaxType)`

SetCurrencyExchangeServiceTaxes sets CurrencyExchangeServiceTaxes field to given value.

### HasCurrencyExchangeServiceTaxes

`func (o *CurrencyExchangeServiceTaxes) HasCurrencyExchangeServiceTaxes() bool`

HasCurrencyExchangeServiceTaxes returns a boolean if a field has been set.

### GetLinks

`func (o *CurrencyExchangeServiceTaxes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CurrencyExchangeServiceTaxes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CurrencyExchangeServiceTaxes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CurrencyExchangeServiceTaxes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CurrencyExchangeServiceTaxes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CurrencyExchangeServiceTaxes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CurrencyExchangeServiceTaxes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CurrencyExchangeServiceTaxes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


