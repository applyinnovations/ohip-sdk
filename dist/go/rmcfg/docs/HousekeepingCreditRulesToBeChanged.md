# HousekeepingCreditRulesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditRules** | Pointer to [**[]HousekeepingCreditRuleType**](HousekeepingCreditRuleType.md) | The information of housekeeping credit rule for configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingCreditRulesToBeChanged

`func NewHousekeepingCreditRulesToBeChanged() *HousekeepingCreditRulesToBeChanged`

NewHousekeepingCreditRulesToBeChanged instantiates a new HousekeepingCreditRulesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCreditRulesToBeChangedWithDefaults

`func NewHousekeepingCreditRulesToBeChangedWithDefaults() *HousekeepingCreditRulesToBeChanged`

NewHousekeepingCreditRulesToBeChangedWithDefaults instantiates a new HousekeepingCreditRulesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditRules

`func (o *HousekeepingCreditRulesToBeChanged) GetCreditRules() []HousekeepingCreditRuleType`

GetCreditRules returns the CreditRules field if non-nil, zero value otherwise.

### GetCreditRulesOk

`func (o *HousekeepingCreditRulesToBeChanged) GetCreditRulesOk() (*[]HousekeepingCreditRuleType, bool)`

GetCreditRulesOk returns a tuple with the CreditRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRules

`func (o *HousekeepingCreditRulesToBeChanged) SetCreditRules(v []HousekeepingCreditRuleType)`

SetCreditRules sets CreditRules field to given value.

### HasCreditRules

`func (o *HousekeepingCreditRulesToBeChanged) HasCreditRules() bool`

HasCreditRules returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingCreditRulesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingCreditRulesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingCreditRulesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingCreditRulesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingCreditRulesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingCreditRulesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingCreditRulesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingCreditRulesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


