# ChangePreCheckInRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PreCheckInRules** | Pointer to [**[]PreCheckInRuleType**](PreCheckInRuleType.md) | Collection of Pre Check-In Rules List | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangePreCheckInRulesRequest

`func NewChangePreCheckInRulesRequest() *ChangePreCheckInRulesRequest`

NewChangePreCheckInRulesRequest instantiates a new ChangePreCheckInRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangePreCheckInRulesRequestWithDefaults

`func NewChangePreCheckInRulesRequestWithDefaults() *ChangePreCheckInRulesRequest`

NewChangePreCheckInRulesRequestWithDefaults instantiates a new ChangePreCheckInRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangePreCheckInRulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangePreCheckInRulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangePreCheckInRulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangePreCheckInRulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPreCheckInRules

`func (o *ChangePreCheckInRulesRequest) GetPreCheckInRules() []PreCheckInRuleType`

GetPreCheckInRules returns the PreCheckInRules field if non-nil, zero value otherwise.

### GetPreCheckInRulesOk

`func (o *ChangePreCheckInRulesRequest) GetPreCheckInRulesOk() (*[]PreCheckInRuleType, bool)`

GetPreCheckInRulesOk returns a tuple with the PreCheckInRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreCheckInRules

`func (o *ChangePreCheckInRulesRequest) SetPreCheckInRules(v []PreCheckInRuleType)`

SetPreCheckInRules sets PreCheckInRules field to given value.

### HasPreCheckInRules

`func (o *ChangePreCheckInRulesRequest) HasPreCheckInRules() bool`

HasPreCheckInRules returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangePreCheckInRulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangePreCheckInRulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangePreCheckInRulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangePreCheckInRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


