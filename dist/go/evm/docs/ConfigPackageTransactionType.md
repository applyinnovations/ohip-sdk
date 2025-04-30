# ConfigPackageTransactionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Allowance** | Pointer to **bool** | Package is marked as an allowance, in case charge is expected back to the guest account from external interface eg. POS. which need to be offset against a consumption allowance. | [optional] 
**Currency** | Pointer to **string** | The currency code for this package. | [optional] 
**PostingType** | Pointer to **string** | The posting frequency for this package, e.g., daily, arrival, departure, etc. | [optional] 
**CalculationRule** | Pointer to **string** | The price calculation rule for this package. | [optional] 
**PackagePostingRules** | Pointer to [**PackagePostingRulesType**](PackagePostingRulesType.md) |  | [optional] 

## Methods

### NewConfigPackageTransactionType

`func NewConfigPackageTransactionType() *ConfigPackageTransactionType`

NewConfigPackageTransactionType instantiates a new ConfigPackageTransactionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigPackageTransactionTypeWithDefaults

`func NewConfigPackageTransactionTypeWithDefaults() *ConfigPackageTransactionType`

NewConfigPackageTransactionTypeWithDefaults instantiates a new ConfigPackageTransactionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowance

`func (o *ConfigPackageTransactionType) GetAllowance() bool`

GetAllowance returns the Allowance field if non-nil, zero value otherwise.

### GetAllowanceOk

`func (o *ConfigPackageTransactionType) GetAllowanceOk() (*bool, bool)`

GetAllowanceOk returns a tuple with the Allowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowance

`func (o *ConfigPackageTransactionType) SetAllowance(v bool)`

SetAllowance sets Allowance field to given value.

### HasAllowance

`func (o *ConfigPackageTransactionType) HasAllowance() bool`

HasAllowance returns a boolean if a field has been set.

### GetCurrency

`func (o *ConfigPackageTransactionType) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *ConfigPackageTransactionType) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *ConfigPackageTransactionType) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *ConfigPackageTransactionType) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetPostingType

`func (o *ConfigPackageTransactionType) GetPostingType() string`

GetPostingType returns the PostingType field if non-nil, zero value otherwise.

### GetPostingTypeOk

`func (o *ConfigPackageTransactionType) GetPostingTypeOk() (*string, bool)`

GetPostingTypeOk returns a tuple with the PostingType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingType

`func (o *ConfigPackageTransactionType) SetPostingType(v string)`

SetPostingType sets PostingType field to given value.

### HasPostingType

`func (o *ConfigPackageTransactionType) HasPostingType() bool`

HasPostingType returns a boolean if a field has been set.

### GetCalculationRule

`func (o *ConfigPackageTransactionType) GetCalculationRule() string`

GetCalculationRule returns the CalculationRule field if non-nil, zero value otherwise.

### GetCalculationRuleOk

`func (o *ConfigPackageTransactionType) GetCalculationRuleOk() (*string, bool)`

GetCalculationRuleOk returns a tuple with the CalculationRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalculationRule

`func (o *ConfigPackageTransactionType) SetCalculationRule(v string)`

SetCalculationRule sets CalculationRule field to given value.

### HasCalculationRule

`func (o *ConfigPackageTransactionType) HasCalculationRule() bool`

HasCalculationRule returns a boolean if a field has been set.

### GetPackagePostingRules

`func (o *ConfigPackageTransactionType) GetPackagePostingRules() PackagePostingRulesType`

GetPackagePostingRules returns the PackagePostingRules field if non-nil, zero value otherwise.

### GetPackagePostingRulesOk

`func (o *ConfigPackageTransactionType) GetPackagePostingRulesOk() (*PackagePostingRulesType, bool)`

GetPackagePostingRulesOk returns a tuple with the PackagePostingRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackagePostingRules

`func (o *ConfigPackageTransactionType) SetPackagePostingRules(v PackagePostingRulesType)`

SetPackagePostingRules sets PackagePostingRules field to given value.

### HasPackagePostingRules

`func (o *ConfigPackageTransactionType) HasPackagePostingRules() bool`

HasPackagePostingRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


