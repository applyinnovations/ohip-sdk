# UpsellRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UpsellRules** | Pointer to [**[]ConfigUpsellRuleType**](ConfigUpsellRuleType.md) | This type holds a collection of upsell rules. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUpsellRules

`func NewUpsellRules() *UpsellRules`

NewUpsellRules instantiates a new UpsellRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellRulesWithDefaults

`func NewUpsellRulesWithDefaults() *UpsellRules`

NewUpsellRulesWithDefaults instantiates a new UpsellRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUpsellRules

`func (o *UpsellRules) GetUpsellRules() []ConfigUpsellRuleType`

GetUpsellRules returns the UpsellRules field if non-nil, zero value otherwise.

### GetUpsellRulesOk

`func (o *UpsellRules) GetUpsellRulesOk() (*[]ConfigUpsellRuleType, bool)`

GetUpsellRulesOk returns a tuple with the UpsellRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRules

`func (o *UpsellRules) SetUpsellRules(v []ConfigUpsellRuleType)`

SetUpsellRules sets UpsellRules field to given value.

### HasUpsellRules

`func (o *UpsellRules) HasUpsellRules() bool`

HasUpsellRules returns a boolean if a field has been set.

### GetLinks

`func (o *UpsellRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UpsellRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UpsellRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UpsellRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UpsellRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UpsellRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UpsellRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UpsellRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


