# EventNoteType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Pertain comment text. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Internal** | Pointer to **bool** | Indicates if comment are internal use only. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**NoteCode** | Pointer to **string** | Note code. | [optional] 
**NoteId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**NoteTitle** | Pointer to **string** | Pertain comment tile. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Sequence** | Pointer to **int32** | Pertain display sequence. | [optional] 

## Methods

### NewEventNoteType

`func NewEventNoteType() *EventNoteType`

NewEventNoteType instantiates a new EventNoteType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventNoteTypeWithDefaults

`func NewEventNoteTypeWithDefaults() *EventNoteType`

NewEventNoteTypeWithDefaults instantiates a new EventNoteType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *EventNoteType) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *EventNoteType) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *EventNoteType) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *EventNoteType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *EventNoteType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *EventNoteType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *EventNoteType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *EventNoteType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *EventNoteType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *EventNoteType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *EventNoteType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *EventNoteType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetInternal

`func (o *EventNoteType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *EventNoteType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *EventNoteType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *EventNoteType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetLastModifierId

`func (o *EventNoteType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *EventNoteType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *EventNoteType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *EventNoteType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *EventNoteType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *EventNoteType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *EventNoteType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *EventNoteType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetNoteCode

`func (o *EventNoteType) GetNoteCode() string`

GetNoteCode returns the NoteCode field if non-nil, zero value otherwise.

### GetNoteCodeOk

`func (o *EventNoteType) GetNoteCodeOk() (*string, bool)`

GetNoteCodeOk returns a tuple with the NoteCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteCode

`func (o *EventNoteType) SetNoteCode(v string)`

SetNoteCode sets NoteCode field to given value.

### HasNoteCode

`func (o *EventNoteType) HasNoteCode() bool`

HasNoteCode returns a boolean if a field has been set.

### GetNoteId

`func (o *EventNoteType) GetNoteId() UniqueIDType`

GetNoteId returns the NoteId field if non-nil, zero value otherwise.

### GetNoteIdOk

`func (o *EventNoteType) GetNoteIdOk() (*UniqueIDType, bool)`

GetNoteIdOk returns a tuple with the NoteId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteId

`func (o *EventNoteType) SetNoteId(v UniqueIDType)`

SetNoteId sets NoteId field to given value.

### HasNoteId

`func (o *EventNoteType) HasNoteId() bool`

HasNoteId returns a boolean if a field has been set.

### GetNoteTitle

`func (o *EventNoteType) GetNoteTitle() string`

GetNoteTitle returns the NoteTitle field if non-nil, zero value otherwise.

### GetNoteTitleOk

`func (o *EventNoteType) GetNoteTitleOk() (*string, bool)`

GetNoteTitleOk returns a tuple with the NoteTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTitle

`func (o *EventNoteType) SetNoteTitle(v string)`

SetNoteTitle sets NoteTitle field to given value.

### HasNoteTitle

`func (o *EventNoteType) HasNoteTitle() bool`

HasNoteTitle returns a boolean if a field has been set.

### GetPurgeDate

`func (o *EventNoteType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *EventNoteType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *EventNoteType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *EventNoteType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetSequence

`func (o *EventNoteType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *EventNoteType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *EventNoteType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *EventNoteType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


