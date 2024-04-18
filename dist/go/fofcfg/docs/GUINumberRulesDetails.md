# GUINumberRulesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Rules** | Pointer to [**[]GUINumberRule**](GUINumberRule.md) | List of GUI number rules | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGUINumberRulesDetails

`func NewGUINumberRulesDetails() *GUINumberRulesDetails`

NewGUINumberRulesDetails instantiates a new GUINumberRulesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGUINumberRulesDetailsWithDefaults

`func NewGUINumberRulesDetailsWithDefaults() *GUINumberRulesDetails`

NewGUINumberRulesDetailsWithDefaults instantiates a new GUINumberRulesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *GUINumberRulesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GUINumberRulesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GUINumberRulesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GUINumberRulesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRules

`func (o *GUINumberRulesDetails) GetRules() []GUINumberRule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *GUINumberRulesDetails) GetRulesOk() (*[]GUINumberRule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *GUINumberRulesDetails) SetRules(v []GUINumberRule)`

SetRules sets Rules field to given value.

### HasRules

`func (o *GUINumberRulesDetails) HasRules() bool`

HasRules returns a boolean if a field has been set.

### GetWarnings

`func (o *GUINumberRulesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GUINumberRulesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GUINumberRulesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GUINumberRulesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

