# NoShowPostingRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NoShowPostingRules** | Pointer to [**[]HotelNoShowPostingRuleType**](HotelNoShowPostingRuleType.md) | Holds No Show Posting Rules Configuration details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNoShowPostingRules

`func NewNoShowPostingRules() *NoShowPostingRules`

NewNoShowPostingRules instantiates a new NoShowPostingRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoShowPostingRulesWithDefaults

`func NewNoShowPostingRulesWithDefaults() *NoShowPostingRules`

NewNoShowPostingRulesWithDefaults instantiates a new NoShowPostingRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNoShowPostingRules

`func (o *NoShowPostingRules) GetNoShowPostingRules() []HotelNoShowPostingRuleType`

GetNoShowPostingRules returns the NoShowPostingRules field if non-nil, zero value otherwise.

### GetNoShowPostingRulesOk

`func (o *NoShowPostingRules) GetNoShowPostingRulesOk() (*[]HotelNoShowPostingRuleType, bool)`

GetNoShowPostingRulesOk returns a tuple with the NoShowPostingRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoShowPostingRules

`func (o *NoShowPostingRules) SetNoShowPostingRules(v []HotelNoShowPostingRuleType)`

SetNoShowPostingRules sets NoShowPostingRules field to given value.

### HasNoShowPostingRules

`func (o *NoShowPostingRules) HasNoShowPostingRules() bool`

HasNoShowPostingRules returns a boolean if a field has been set.

### GetLinks

`func (o *NoShowPostingRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NoShowPostingRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NoShowPostingRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NoShowPostingRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NoShowPostingRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NoShowPostingRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NoShowPostingRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NoShowPostingRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


