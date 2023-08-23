# ProfileMatchRulesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExchangeProfileMatchRules** | Pointer to [**[]ExchangeProfileMatchRuleType**](ExchangeProfileMatchRuleType.md) | Type that holds collection of exchange profile match rules. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileMatchRulesToBeChanged

`func NewProfileMatchRulesToBeChanged() *ProfileMatchRulesToBeChanged`

NewProfileMatchRulesToBeChanged instantiates a new ProfileMatchRulesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileMatchRulesToBeChangedWithDefaults

`func NewProfileMatchRulesToBeChangedWithDefaults() *ProfileMatchRulesToBeChanged`

NewProfileMatchRulesToBeChangedWithDefaults instantiates a new ProfileMatchRulesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExchangeProfileMatchRules

`func (o *ProfileMatchRulesToBeChanged) GetExchangeProfileMatchRules() []ExchangeProfileMatchRuleType`

GetExchangeProfileMatchRules returns the ExchangeProfileMatchRules field if non-nil, zero value otherwise.

### GetExchangeProfileMatchRulesOk

`func (o *ProfileMatchRulesToBeChanged) GetExchangeProfileMatchRulesOk() (*[]ExchangeProfileMatchRuleType, bool)`

GetExchangeProfileMatchRulesOk returns a tuple with the ExchangeProfileMatchRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeProfileMatchRules

`func (o *ProfileMatchRulesToBeChanged) SetExchangeProfileMatchRules(v []ExchangeProfileMatchRuleType)`

SetExchangeProfileMatchRules sets ExchangeProfileMatchRules field to given value.

### HasExchangeProfileMatchRules

`func (o *ProfileMatchRulesToBeChanged) HasExchangeProfileMatchRules() bool`

HasExchangeProfileMatchRules returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileMatchRulesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileMatchRulesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileMatchRulesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileMatchRulesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileMatchRulesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileMatchRulesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileMatchRulesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileMatchRulesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


