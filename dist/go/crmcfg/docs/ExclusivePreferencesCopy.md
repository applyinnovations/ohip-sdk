# ExclusivePreferencesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInstructions** | Pointer to [**ConfigCopyExclusivePreferencesType**](ConfigCopyExclusivePreferencesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExclusivePreferencesCopy

`func NewExclusivePreferencesCopy() *ExclusivePreferencesCopy`

NewExclusivePreferencesCopy instantiates a new ExclusivePreferencesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExclusivePreferencesCopyWithDefaults

`func NewExclusivePreferencesCopyWithDefaults() *ExclusivePreferencesCopy`

NewExclusivePreferencesCopyWithDefaults instantiates a new ExclusivePreferencesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInstructions

`func (o *ExclusivePreferencesCopy) GetCopyInstructions() ConfigCopyExclusivePreferencesType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *ExclusivePreferencesCopy) GetCopyInstructionsOk() (*ConfigCopyExclusivePreferencesType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *ExclusivePreferencesCopy) SetCopyInstructions(v ConfigCopyExclusivePreferencesType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *ExclusivePreferencesCopy) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *ExclusivePreferencesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExclusivePreferencesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExclusivePreferencesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExclusivePreferencesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExclusivePreferencesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExclusivePreferencesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExclusivePreferencesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExclusivePreferencesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


