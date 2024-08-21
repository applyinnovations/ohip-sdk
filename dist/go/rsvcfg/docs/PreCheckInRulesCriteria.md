# PreCheckInRulesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PreCheckInRules** | Pointer to [**[]PreCheckInRuleType**](PreCheckInRuleType.md) | Collection of Pre Check-In Rules List | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreCheckInRulesCriteria

`func NewPreCheckInRulesCriteria() *PreCheckInRulesCriteria`

NewPreCheckInRulesCriteria instantiates a new PreCheckInRulesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInRulesCriteriaWithDefaults

`func NewPreCheckInRulesCriteriaWithDefaults() *PreCheckInRulesCriteria`

NewPreCheckInRulesCriteriaWithDefaults instantiates a new PreCheckInRulesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PreCheckInRulesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreCheckInRulesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreCheckInRulesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreCheckInRulesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPreCheckInRules

`func (o *PreCheckInRulesCriteria) GetPreCheckInRules() []PreCheckInRuleType`

GetPreCheckInRules returns the PreCheckInRules field if non-nil, zero value otherwise.

### GetPreCheckInRulesOk

`func (o *PreCheckInRulesCriteria) GetPreCheckInRulesOk() (*[]PreCheckInRuleType, bool)`

GetPreCheckInRulesOk returns a tuple with the PreCheckInRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreCheckInRules

`func (o *PreCheckInRulesCriteria) SetPreCheckInRules(v []PreCheckInRuleType)`

SetPreCheckInRules sets PreCheckInRules field to given value.

### HasPreCheckInRules

`func (o *PreCheckInRulesCriteria) HasPreCheckInRules() bool`

HasPreCheckInRules returns a boolean if a field has been set.

### GetWarnings

`func (o *PreCheckInRulesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreCheckInRulesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreCheckInRulesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreCheckInRulesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


