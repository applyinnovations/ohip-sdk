# NoteTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code of the Note Types. | [optional] 
**DefaultNoteText** | Pointer to **string** | Default Note Text if Note Type has default note. | [optional] 
**DefaultNoteType** | Pointer to **bool** | Indicates if the Note Types Code is default. | [optional] 
**DefaultText** | Pointer to **bool** | Indicates if the Note Types Code has at least one default text defined. | [optional] 
**DepartmentNotes** | Pointer to **bool** | Indicates if the Note Types Code has department notes. | [optional] 
**Departments** | Pointer to [**GenericHotelCodeCodeListType**](GenericHotelCodeCodeListType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the Note Types Code. | [optional] 
**DisplaySequence** | Pointer to **float32** | Display Sequence. | [optional] 
**GlobalAllowed** | Pointer to **bool** | Indicates if the Note Types Code is globally allowed. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Note Types Code is inactive. | [optional] 
**Internal** | Pointer to **bool** | Indicates if the Note Types Code is internal. | [optional] 
**NoteGroup** | Pointer to **string** | Notes Group of the Note Types code. | [optional] 
**NotificationAreas** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**OverrideInternal** | Pointer to **bool** | Indicates if the Note Types Code is override internal. | [optional] 
**PropertyDefaultNoteTexts** | Pointer to [**DefaultNoteTextsDetailType**](DefaultNoteTextsDetailType.md) |  | [optional] 

## Methods

### NewNoteTypeType

`func NewNoteTypeType() *NoteTypeType`

NewNoteTypeType instantiates a new NoteTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNoteTypeTypeWithDefaults

`func NewNoteTypeTypeWithDefaults() *NoteTypeType`

NewNoteTypeTypeWithDefaults instantiates a new NoteTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *NoteTypeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *NoteTypeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *NoteTypeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *NoteTypeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDefaultNoteText

`func (o *NoteTypeType) GetDefaultNoteText() string`

GetDefaultNoteText returns the DefaultNoteText field if non-nil, zero value otherwise.

### GetDefaultNoteTextOk

`func (o *NoteTypeType) GetDefaultNoteTextOk() (*string, bool)`

GetDefaultNoteTextOk returns a tuple with the DefaultNoteText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultNoteText

`func (o *NoteTypeType) SetDefaultNoteText(v string)`

SetDefaultNoteText sets DefaultNoteText field to given value.

### HasDefaultNoteText

`func (o *NoteTypeType) HasDefaultNoteText() bool`

HasDefaultNoteText returns a boolean if a field has been set.

### GetDefaultNoteType

`func (o *NoteTypeType) GetDefaultNoteType() bool`

GetDefaultNoteType returns the DefaultNoteType field if non-nil, zero value otherwise.

### GetDefaultNoteTypeOk

`func (o *NoteTypeType) GetDefaultNoteTypeOk() (*bool, bool)`

GetDefaultNoteTypeOk returns a tuple with the DefaultNoteType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultNoteType

`func (o *NoteTypeType) SetDefaultNoteType(v bool)`

SetDefaultNoteType sets DefaultNoteType field to given value.

### HasDefaultNoteType

`func (o *NoteTypeType) HasDefaultNoteType() bool`

HasDefaultNoteType returns a boolean if a field has been set.

### GetDefaultText

`func (o *NoteTypeType) GetDefaultText() bool`

GetDefaultText returns the DefaultText field if non-nil, zero value otherwise.

### GetDefaultTextOk

`func (o *NoteTypeType) GetDefaultTextOk() (*bool, bool)`

GetDefaultTextOk returns a tuple with the DefaultText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultText

`func (o *NoteTypeType) SetDefaultText(v bool)`

SetDefaultText sets DefaultText field to given value.

### HasDefaultText

`func (o *NoteTypeType) HasDefaultText() bool`

HasDefaultText returns a boolean if a field has been set.

### GetDepartmentNotes

`func (o *NoteTypeType) GetDepartmentNotes() bool`

GetDepartmentNotes returns the DepartmentNotes field if non-nil, zero value otherwise.

### GetDepartmentNotesOk

`func (o *NoteTypeType) GetDepartmentNotesOk() (*bool, bool)`

GetDepartmentNotesOk returns a tuple with the DepartmentNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentNotes

`func (o *NoteTypeType) SetDepartmentNotes(v bool)`

SetDepartmentNotes sets DepartmentNotes field to given value.

### HasDepartmentNotes

`func (o *NoteTypeType) HasDepartmentNotes() bool`

HasDepartmentNotes returns a boolean if a field has been set.

### GetDepartments

`func (o *NoteTypeType) GetDepartments() GenericHotelCodeCodeListType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *NoteTypeType) GetDepartmentsOk() (*GenericHotelCodeCodeListType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *NoteTypeType) SetDepartments(v GenericHotelCodeCodeListType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *NoteTypeType) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetDescription

`func (o *NoteTypeType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NoteTypeType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NoteTypeType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *NoteTypeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *NoteTypeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *NoteTypeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *NoteTypeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *NoteTypeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetGlobalAllowed

`func (o *NoteTypeType) GetGlobalAllowed() bool`

GetGlobalAllowed returns the GlobalAllowed field if non-nil, zero value otherwise.

### GetGlobalAllowedOk

`func (o *NoteTypeType) GetGlobalAllowedOk() (*bool, bool)`

GetGlobalAllowedOk returns a tuple with the GlobalAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalAllowed

`func (o *NoteTypeType) SetGlobalAllowed(v bool)`

SetGlobalAllowed sets GlobalAllowed field to given value.

### HasGlobalAllowed

`func (o *NoteTypeType) HasGlobalAllowed() bool`

HasGlobalAllowed returns a boolean if a field has been set.

### GetInactive

`func (o *NoteTypeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *NoteTypeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *NoteTypeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *NoteTypeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInternal

`func (o *NoteTypeType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *NoteTypeType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *NoteTypeType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *NoteTypeType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetNoteGroup

`func (o *NoteTypeType) GetNoteGroup() string`

GetNoteGroup returns the NoteGroup field if non-nil, zero value otherwise.

### GetNoteGroupOk

`func (o *NoteTypeType) GetNoteGroupOk() (*string, bool)`

GetNoteGroupOk returns a tuple with the NoteGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteGroup

`func (o *NoteTypeType) SetNoteGroup(v string)`

SetNoteGroup sets NoteGroup field to given value.

### HasNoteGroup

`func (o *NoteTypeType) HasNoteGroup() bool`

HasNoteGroup returns a boolean if a field has been set.

### GetNotificationAreas

`func (o *NoteTypeType) GetNotificationAreas() CodeListType`

GetNotificationAreas returns the NotificationAreas field if non-nil, zero value otherwise.

### GetNotificationAreasOk

`func (o *NoteTypeType) GetNotificationAreasOk() (*CodeListType, bool)`

GetNotificationAreasOk returns a tuple with the NotificationAreas field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationAreas

`func (o *NoteTypeType) SetNotificationAreas(v CodeListType)`

SetNotificationAreas sets NotificationAreas field to given value.

### HasNotificationAreas

`func (o *NoteTypeType) HasNotificationAreas() bool`

HasNotificationAreas returns a boolean if a field has been set.

### GetOverrideInternal

`func (o *NoteTypeType) GetOverrideInternal() bool`

GetOverrideInternal returns the OverrideInternal field if non-nil, zero value otherwise.

### GetOverrideInternalOk

`func (o *NoteTypeType) GetOverrideInternalOk() (*bool, bool)`

GetOverrideInternalOk returns a tuple with the OverrideInternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInternal

`func (o *NoteTypeType) SetOverrideInternal(v bool)`

SetOverrideInternal sets OverrideInternal field to given value.

### HasOverrideInternal

`func (o *NoteTypeType) HasOverrideInternal() bool`

HasOverrideInternal returns a boolean if a field has been set.

### GetPropertyDefaultNoteTexts

`func (o *NoteTypeType) GetPropertyDefaultNoteTexts() DefaultNoteTextsDetailType`

GetPropertyDefaultNoteTexts returns the PropertyDefaultNoteTexts field if non-nil, zero value otherwise.

### GetPropertyDefaultNoteTextsOk

`func (o *NoteTypeType) GetPropertyDefaultNoteTextsOk() (*DefaultNoteTextsDetailType, bool)`

GetPropertyDefaultNoteTextsOk returns a tuple with the PropertyDefaultNoteTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyDefaultNoteTexts

`func (o *NoteTypeType) SetPropertyDefaultNoteTexts(v DefaultNoteTextsDetailType)`

SetPropertyDefaultNoteTexts sets PropertyDefaultNoteTexts field to given value.

### HasPropertyDefaultNoteTexts

`func (o *NoteTypeType) HasPropertyDefaultNoteTexts() bool`

HasPropertyDefaultNoteTexts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


