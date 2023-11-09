# PolicyAmountPercentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to **float32** | A monetary amount. | [optional] 
**BasisType** | Pointer to [**PolicyBasisTypeType**](PolicyBasisTypeType.md) |  | [optional] 
**CurrencyCode** | Pointer to **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | [optional] 
**Nights** | Pointer to **int32** | The number of nights of the hotel stay that are used to calculate the fee amount. | [optional] 
**Percent** | Pointer to **float32** | The percentage used to calculate the amount. | [optional] 

## Methods

### NewPolicyAmountPercentType

`func NewPolicyAmountPercentType() *PolicyAmountPercentType`

NewPolicyAmountPercentType instantiates a new PolicyAmountPercentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyAmountPercentTypeWithDefaults

`func NewPolicyAmountPercentTypeWithDefaults() *PolicyAmountPercentType`

NewPolicyAmountPercentTypeWithDefaults instantiates a new PolicyAmountPercentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *PolicyAmountPercentType) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PolicyAmountPercentType) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PolicyAmountPercentType) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *PolicyAmountPercentType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetBasisType

`func (o *PolicyAmountPercentType) GetBasisType() PolicyBasisTypeType`

GetBasisType returns the BasisType field if non-nil, zero value otherwise.

### GetBasisTypeOk

`func (o *PolicyAmountPercentType) GetBasisTypeOk() (*PolicyBasisTypeType, bool)`

GetBasisTypeOk returns a tuple with the BasisType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasisType

`func (o *PolicyAmountPercentType) SetBasisType(v PolicyBasisTypeType)`

SetBasisType sets BasisType field to given value.

### HasBasisType

`func (o *PolicyAmountPercentType) HasBasisType() bool`

HasBasisType returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *PolicyAmountPercentType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *PolicyAmountPercentType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *PolicyAmountPercentType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *PolicyAmountPercentType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetNights

`func (o *PolicyAmountPercentType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *PolicyAmountPercentType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *PolicyAmountPercentType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *PolicyAmountPercentType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetPercent

`func (o *PolicyAmountPercentType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *PolicyAmountPercentType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *PolicyAmountPercentType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *PolicyAmountPercentType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


