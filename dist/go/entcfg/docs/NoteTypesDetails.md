# NoteTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NoteTypes** | Pointer to [**[]NoteTypeType**](NoteTypeType.md) | Note Types Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewNoteTypesDetails

`func NewNoteTypesDetails() *NoteTypesDetails`

NewNoteTypesDetails instantiates a new NoteTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoteTypesDetailsWithDefaults

`func NewNoteTypesDetailsWithDefaults() *NoteTypesDetails`

NewNoteTypesDetailsWithDefaults instantiates a new NoteTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *NoteTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *NoteTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *NoteTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *NoteTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoteTypes

`func (o *NoteTypesDetails) GetNoteTypes() []NoteTypeType`

GetNoteTypes returns the NoteTypes field if non-nil, zero value otherwise.

### GetNoteTypesOk

`func (o *NoteTypesDetails) GetNoteTypesOk() (*[]NoteTypeType, bool)`

GetNoteTypesOk returns a tuple with the NoteTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTypes

`func (o *NoteTypesDetails) SetNoteTypes(v []NoteTypeType)`

SetNoteTypes sets NoteTypes field to given value.

### HasNoteTypes

`func (o *NoteTypesDetails) HasNoteTypes() bool`

HasNoteTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *NoteTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *NoteTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *NoteTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *NoteTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


