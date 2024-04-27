# FetchRotationRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RotationRulesResult** | Pointer to [**RotationRulesResultType**](RotationRulesResultType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchRotationRules

`func NewFetchRotationRules() *FetchRotationRules`

NewFetchRotationRules instantiates a new FetchRotationRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchRotationRulesWithDefaults

`func NewFetchRotationRulesWithDefaults() *FetchRotationRules`

NewFetchRotationRulesWithDefaults instantiates a new FetchRotationRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *FetchRotationRules) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchRotationRules) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchRotationRules) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchRotationRules) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRotationRulesResult

`func (o *FetchRotationRules) GetRotationRulesResult() RotationRulesResultType`

GetRotationRulesResult returns the RotationRulesResult field if non-nil, zero value otherwise.

### GetRotationRulesResultOk

`func (o *FetchRotationRules) GetRotationRulesResultOk() (*RotationRulesResultType, bool)`

GetRotationRulesResultOk returns a tuple with the RotationRulesResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRulesResult

`func (o *FetchRotationRules) SetRotationRulesResult(v RotationRulesResultType)`

SetRotationRulesResult sets RotationRulesResult field to given value.

### HasRotationRulesResult

`func (o *FetchRotationRules) HasRotationRulesResult() bool`

HasRotationRulesResult returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchRotationRules) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchRotationRules) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchRotationRules) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchRotationRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


