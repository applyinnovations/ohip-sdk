# PreCheckInRulesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreCheckInRules** | Pointer to [**[]PreCheckInRuleType**](PreCheckInRuleType.md) | Collection of Pre Check-In Rules List | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreCheckInRulesDetails

`func NewPreCheckInRulesDetails() *PreCheckInRulesDetails`

NewPreCheckInRulesDetails instantiates a new PreCheckInRulesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInRulesDetailsWithDefaults

`func NewPreCheckInRulesDetailsWithDefaults() *PreCheckInRulesDetails`

NewPreCheckInRulesDetailsWithDefaults instantiates a new PreCheckInRulesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreCheckInRules

`func (o *PreCheckInRulesDetails) GetPreCheckInRules() []PreCheckInRuleType`

GetPreCheckInRules returns the PreCheckInRules field if non-nil, zero value otherwise.

### GetPreCheckInRulesOk

`func (o *PreCheckInRulesDetails) GetPreCheckInRulesOk() (*[]PreCheckInRuleType, bool)`

GetPreCheckInRulesOk returns a tuple with the PreCheckInRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreCheckInRules

`func (o *PreCheckInRulesDetails) SetPreCheckInRules(v []PreCheckInRuleType)`

SetPreCheckInRules sets PreCheckInRules field to given value.

### HasPreCheckInRules

`func (o *PreCheckInRulesDetails) HasPreCheckInRules() bool`

HasPreCheckInRules returns a boolean if a field has been set.

### GetLinks

`func (o *PreCheckInRulesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreCheckInRulesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreCheckInRulesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreCheckInRulesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PreCheckInRulesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreCheckInRulesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreCheckInRulesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreCheckInRulesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


