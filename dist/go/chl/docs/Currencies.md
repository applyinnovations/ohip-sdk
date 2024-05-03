# Currencies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Currencies** | Pointer to [**[]CurrencyMappingType**](CurrencyMappingType.md) | Information about an external currency mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCurrencies

`func NewCurrencies() *Currencies`

NewCurrencies instantiates a new Currencies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCurrenciesWithDefaults

`func NewCurrenciesWithDefaults() *Currencies`

NewCurrenciesWithDefaults instantiates a new Currencies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencies

`func (o *Currencies) GetCurrencies() []CurrencyMappingType`

GetCurrencies returns the Currencies field if non-nil, zero value otherwise.

### GetCurrenciesOk

`func (o *Currencies) GetCurrenciesOk() (*[]CurrencyMappingType, bool)`

GetCurrenciesOk returns a tuple with the Currencies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencies

`func (o *Currencies) SetCurrencies(v []CurrencyMappingType)`

SetCurrencies sets Currencies field to given value.

### HasCurrencies

`func (o *Currencies) HasCurrencies() bool`

HasCurrencies returns a boolean if a field has been set.

### GetLinks

`func (o *Currencies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Currencies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Currencies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Currencies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Currencies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Currencies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Currencies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Currencies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


