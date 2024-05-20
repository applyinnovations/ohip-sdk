# NoShowPostingRulesEdit

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NoShowPostingRules** | Pointer to [**[]NoShowPostingRuleEditType**](NoShowPostingRuleEditType.md) | Contains new rules along with associated old rules to edit. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNoShowPostingRulesEdit

`func NewNoShowPostingRulesEdit() *NoShowPostingRulesEdit`

NewNoShowPostingRulesEdit instantiates a new NoShowPostingRulesEdit object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoShowPostingRulesEditWithDefaults

`func NewNoShowPostingRulesEditWithDefaults() *NoShowPostingRulesEdit`

NewNoShowPostingRulesEditWithDefaults instantiates a new NoShowPostingRulesEdit object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *NoShowPostingRulesEdit) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NoShowPostingRulesEdit) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NoShowPostingRulesEdit) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NoShowPostingRulesEdit) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoShowPostingRules

`func (o *NoShowPostingRulesEdit) GetNoShowPostingRules() []NoShowPostingRuleEditType`

GetNoShowPostingRules returns the NoShowPostingRules field if non-nil, zero value otherwise.

### GetNoShowPostingRulesOk

`func (o *NoShowPostingRulesEdit) GetNoShowPostingRulesOk() (*[]NoShowPostingRuleEditType, bool)`

GetNoShowPostingRulesOk returns a tuple with the NoShowPostingRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoShowPostingRules

`func (o *NoShowPostingRulesEdit) SetNoShowPostingRules(v []NoShowPostingRuleEditType)`

SetNoShowPostingRules sets NoShowPostingRules field to given value.

### HasNoShowPostingRules

`func (o *NoShowPostingRulesEdit) HasNoShowPostingRules() bool`

HasNoShowPostingRules returns a boolean if a field has been set.

### GetWarnings

`func (o *NoShowPostingRulesEdit) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NoShowPostingRulesEdit) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NoShowPostingRulesEdit) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NoShowPostingRulesEdit) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


