# UpsellRulesToTestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UpsellRules** | Pointer to [**[]ConfigTestUpsellRuleType**](ConfigTestUpsellRuleType.md) | This type holds a collection of upsell rules which are returned on testing a reservation. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUpsellRulesToTestDetails

`func NewUpsellRulesToTestDetails() *UpsellRulesToTestDetails`

NewUpsellRulesToTestDetails instantiates a new UpsellRulesToTestDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpsellRulesToTestDetailsWithDefaults

`func NewUpsellRulesToTestDetailsWithDefaults() *UpsellRulesToTestDetails`

NewUpsellRulesToTestDetailsWithDefaults instantiates a new UpsellRulesToTestDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *UpsellRulesToTestDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UpsellRulesToTestDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UpsellRulesToTestDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UpsellRulesToTestDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpsellRules

`func (o *UpsellRulesToTestDetails) GetUpsellRules() []ConfigTestUpsellRuleType`

GetUpsellRules returns the UpsellRules field if non-nil, zero value otherwise.

### GetUpsellRulesOk

`func (o *UpsellRulesToTestDetails) GetUpsellRulesOk() (*[]ConfigTestUpsellRuleType, bool)`

GetUpsellRulesOk returns a tuple with the UpsellRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpsellRules

`func (o *UpsellRulesToTestDetails) SetUpsellRules(v []ConfigTestUpsellRuleType)`

SetUpsellRules sets UpsellRules field to given value.

### HasUpsellRules

`func (o *UpsellRulesToTestDetails) HasUpsellRules() bool`

HasUpsellRules returns a boolean if a field has been set.

### GetWarnings

`func (o *UpsellRulesToTestDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UpsellRulesToTestDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UpsellRulesToTestDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UpsellRulesToTestDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


