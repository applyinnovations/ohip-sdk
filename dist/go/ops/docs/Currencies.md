# Currencies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyList** | Pointer to **[]string** | List of currencies available in the environment. | [optional] 
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

### GetCurrencyList

`func (o *Currencies) GetCurrencyList() []string`

GetCurrencyList returns the CurrencyList field if non-nil, zero value otherwise.

### GetCurrencyListOk

`func (o *Currencies) GetCurrencyListOk() (*[]string, bool)`

GetCurrencyListOk returns a tuple with the CurrencyList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyList

`func (o *Currencies) SetCurrencyList(v []string)`

SetCurrencyList sets CurrencyList field to given value.

### HasCurrencyList

`func (o *Currencies) HasCurrencyList() bool`

HasCurrencyList returns a boolean if a field has been set.

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


