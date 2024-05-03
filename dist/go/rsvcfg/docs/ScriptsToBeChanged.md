# ScriptsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Scripts** | Pointer to [**[]ScriptType**](ScriptType.md) | A Script associated to either Chain, CRO or Property and to a Language and/or Membership Type. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewScriptsToBeChanged

`func NewScriptsToBeChanged() *ScriptsToBeChanged`

NewScriptsToBeChanged instantiates a new ScriptsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScriptsToBeChangedWithDefaults

`func NewScriptsToBeChangedWithDefaults() *ScriptsToBeChanged`

NewScriptsToBeChangedWithDefaults instantiates a new ScriptsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ScriptsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ScriptsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ScriptsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ScriptsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetScripts

`func (o *ScriptsToBeChanged) GetScripts() []ScriptType`

GetScripts returns the Scripts field if non-nil, zero value otherwise.

### GetScriptsOk

`func (o *ScriptsToBeChanged) GetScriptsOk() (*[]ScriptType, bool)`

GetScriptsOk returns a tuple with the Scripts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScripts

`func (o *ScriptsToBeChanged) SetScripts(v []ScriptType)`

SetScripts sets Scripts field to given value.

### HasScripts

`func (o *ScriptsToBeChanged) HasScripts() bool`

HasScripts returns a boolean if a field has been set.

### GetWarnings

`func (o *ScriptsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ScriptsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ScriptsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ScriptsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


