# NoteTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NoteTypes** | Pointer to [**[]NoteTypeType**](NoteTypeType.md) | Note Types Collection element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNoteTypesCriteria

`func NewNoteTypesCriteria() *NoteTypesCriteria`

NewNoteTypesCriteria instantiates a new NoteTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoteTypesCriteriaWithDefaults

`func NewNoteTypesCriteriaWithDefaults() *NoteTypesCriteria`

NewNoteTypesCriteriaWithDefaults instantiates a new NoteTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNoteTypes

`func (o *NoteTypesCriteria) GetNoteTypes() []NoteTypeType`

GetNoteTypes returns the NoteTypes field if non-nil, zero value otherwise.

### GetNoteTypesOk

`func (o *NoteTypesCriteria) GetNoteTypesOk() (*[]NoteTypeType, bool)`

GetNoteTypesOk returns a tuple with the NoteTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTypes

`func (o *NoteTypesCriteria) SetNoteTypes(v []NoteTypeType)`

SetNoteTypes sets NoteTypes field to given value.

### HasNoteTypes

`func (o *NoteTypesCriteria) HasNoteTypes() bool`

HasNoteTypes returns a boolean if a field has been set.

### GetLinks

`func (o *NoteTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NoteTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NoteTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NoteTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *NoteTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NoteTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NoteTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NoteTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


