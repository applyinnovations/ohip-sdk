# NoteTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NoteTypes** | Pointer to [**[]NoteTypeType**](NoteTypeType.md) | Note Types Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNoteTypesToBeChanged

`func NewNoteTypesToBeChanged() *NoteTypesToBeChanged`

NewNoteTypesToBeChanged instantiates a new NoteTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoteTypesToBeChangedWithDefaults

`func NewNoteTypesToBeChangedWithDefaults() *NoteTypesToBeChanged`

NewNoteTypesToBeChangedWithDefaults instantiates a new NoteTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *NoteTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NoteTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NoteTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NoteTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoteTypes

`func (o *NoteTypesToBeChanged) GetNoteTypes() []NoteTypeType`

GetNoteTypes returns the NoteTypes field if non-nil, zero value otherwise.

### GetNoteTypesOk

`func (o *NoteTypesToBeChanged) GetNoteTypesOk() (*[]NoteTypeType, bool)`

GetNoteTypesOk returns a tuple with the NoteTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTypes

`func (o *NoteTypesToBeChanged) SetNoteTypes(v []NoteTypeType)`

SetNoteTypes sets NoteTypes field to given value.

### HasNoteTypes

`func (o *NoteTypesToBeChanged) HasNoteTypes() bool`

HasNoteTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *NoteTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NoteTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NoteTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NoteTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


