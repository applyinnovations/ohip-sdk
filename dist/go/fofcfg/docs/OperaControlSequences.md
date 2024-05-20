# OperaControlSequences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ControlSequences** | Pointer to [**[]ControlSequenceType**](ControlSequenceType.md) | List of Control Sequence details | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOperaControlSequences

`func NewOperaControlSequences() *OperaControlSequences`

NewOperaControlSequences instantiates a new OperaControlSequences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaControlSequencesWithDefaults

`func NewOperaControlSequencesWithDefaults() *OperaControlSequences`

NewOperaControlSequencesWithDefaults instantiates a new OperaControlSequences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetControlSequences

`func (o *OperaControlSequences) GetControlSequences() []ControlSequenceType`

GetControlSequences returns the ControlSequences field if non-nil, zero value otherwise.

### GetControlSequencesOk

`func (o *OperaControlSequences) GetControlSequencesOk() (*[]ControlSequenceType, bool)`

GetControlSequencesOk returns a tuple with the ControlSequences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControlSequences

`func (o *OperaControlSequences) SetControlSequences(v []ControlSequenceType)`

SetControlSequences sets ControlSequences field to given value.

### HasControlSequences

`func (o *OperaControlSequences) HasControlSequences() bool`

HasControlSequences returns a boolean if a field has been set.

### GetLinks

`func (o *OperaControlSequences) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *OperaControlSequences) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *OperaControlSequences) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *OperaControlSequences) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *OperaControlSequences) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OperaControlSequences) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OperaControlSequences) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OperaControlSequences) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


