# HousekeepingCreditRulesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditRules** | Pointer to [**[]HousekeepingCreditRuleType**](HousekeepingCreditRuleType.md) | The information of housekeeping credit rule for configuration. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingCreditRulesCriteria

`func NewHousekeepingCreditRulesCriteria() *HousekeepingCreditRulesCriteria`

NewHousekeepingCreditRulesCriteria instantiates a new HousekeepingCreditRulesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCreditRulesCriteriaWithDefaults

`func NewHousekeepingCreditRulesCriteriaWithDefaults() *HousekeepingCreditRulesCriteria`

NewHousekeepingCreditRulesCriteriaWithDefaults instantiates a new HousekeepingCreditRulesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditRules

`func (o *HousekeepingCreditRulesCriteria) GetCreditRules() []HousekeepingCreditRuleType`

GetCreditRules returns the CreditRules field if non-nil, zero value otherwise.

### GetCreditRulesOk

`func (o *HousekeepingCreditRulesCriteria) GetCreditRulesOk() (*[]HousekeepingCreditRuleType, bool)`

GetCreditRulesOk returns a tuple with the CreditRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRules

`func (o *HousekeepingCreditRulesCriteria) SetCreditRules(v []HousekeepingCreditRuleType)`

SetCreditRules sets CreditRules field to given value.

### HasCreditRules

`func (o *HousekeepingCreditRulesCriteria) HasCreditRules() bool`

HasCreditRules returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingCreditRulesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingCreditRulesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingCreditRulesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingCreditRulesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingCreditRulesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingCreditRulesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingCreditRulesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingCreditRulesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


