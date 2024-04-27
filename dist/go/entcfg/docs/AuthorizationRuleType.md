# AuthorizationRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **int32** | The authorization rule code. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Percent** | Pointer to **float32** | A percentage value if the authorization rule is percentage based. | [optional] 

## Methods

### NewAuthorizationRuleType

`func NewAuthorizationRuleType() *AuthorizationRuleType`

NewAuthorizationRuleType instantiates a new AuthorizationRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizationRuleTypeWithDefaults

`func NewAuthorizationRuleTypeWithDefaults() *AuthorizationRuleType`

NewAuthorizationRuleTypeWithDefaults instantiates a new AuthorizationRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *AuthorizationRuleType) GetCode() int32`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AuthorizationRuleType) GetCodeOk() (*int32, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AuthorizationRuleType) SetCode(v int32)`

SetCode sets Code field to given value.

### HasCode

`func (o *AuthorizationRuleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetAmount

`func (o *AuthorizationRuleType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AuthorizationRuleType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AuthorizationRuleType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AuthorizationRuleType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPercent

`func (o *AuthorizationRuleType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *AuthorizationRuleType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *AuthorizationRuleType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *AuthorizationRuleType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


