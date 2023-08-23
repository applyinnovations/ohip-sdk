# EventResourceNoteType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NoteId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**NoteCode** | Pointer to **string** | Note code. | [optional] 
**Internal** | Pointer to **bool** | Indicates if the comment is internal use only. | [optional] 
**NoteTitle** | Pointer to **string** | Contains comment title. | [optional] 
**Comment** | Pointer to **string** | Contains comment text. | [optional] 
**Sequence** | Pointer to **int32** | Contains display sequence. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewEventResourceNoteType

`func NewEventResourceNoteType() *EventResourceNoteType`

NewEventResourceNoteType instantiates a new EventResourceNoteType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventResourceNoteTypeWithDefaults

`func NewEventResourceNoteTypeWithDefaults() *EventResourceNoteType`

NewEventResourceNoteTypeWithDefaults instantiates a new EventResourceNoteType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNoteId

`func (o *EventResourceNoteType) GetNoteId() UniqueIDType`

GetNoteId returns the NoteId field if non-nil, zero value otherwise.

### GetNoteIdOk

`func (o *EventResourceNoteType) GetNoteIdOk() (*UniqueIDType, bool)`

GetNoteIdOk returns a tuple with the NoteId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteId

`func (o *EventResourceNoteType) SetNoteId(v UniqueIDType)`

SetNoteId sets NoteId field to given value.

### HasNoteId

`func (o *EventResourceNoteType) HasNoteId() bool`

HasNoteId returns a boolean if a field has been set.

### GetNoteCode

`func (o *EventResourceNoteType) GetNoteCode() string`

GetNoteCode returns the NoteCode field if non-nil, zero value otherwise.

### GetNoteCodeOk

`func (o *EventResourceNoteType) GetNoteCodeOk() (*string, bool)`

GetNoteCodeOk returns a tuple with the NoteCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteCode

`func (o *EventResourceNoteType) SetNoteCode(v string)`

SetNoteCode sets NoteCode field to given value.

### HasNoteCode

`func (o *EventResourceNoteType) HasNoteCode() bool`

HasNoteCode returns a boolean if a field has been set.

### GetInternal

`func (o *EventResourceNoteType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *EventResourceNoteType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *EventResourceNoteType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *EventResourceNoteType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetNoteTitle

`func (o *EventResourceNoteType) GetNoteTitle() string`

GetNoteTitle returns the NoteTitle field if non-nil, zero value otherwise.

### GetNoteTitleOk

`func (o *EventResourceNoteType) GetNoteTitleOk() (*string, bool)`

GetNoteTitleOk returns a tuple with the NoteTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTitle

`func (o *EventResourceNoteType) SetNoteTitle(v string)`

SetNoteTitle sets NoteTitle field to given value.

### HasNoteTitle

`func (o *EventResourceNoteType) HasNoteTitle() bool`

HasNoteTitle returns a boolean if a field has been set.

### GetComment

`func (o *EventResourceNoteType) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *EventResourceNoteType) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *EventResourceNoteType) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *EventResourceNoteType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetSequence

`func (o *EventResourceNoteType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *EventResourceNoteType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *EventResourceNoteType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *EventResourceNoteType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *EventResourceNoteType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *EventResourceNoteType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *EventResourceNoteType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *EventResourceNoteType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *EventResourceNoteType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *EventResourceNoteType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *EventResourceNoteType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *EventResourceNoteType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *EventResourceNoteType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *EventResourceNoteType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *EventResourceNoteType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *EventResourceNoteType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *EventResourceNoteType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *EventResourceNoteType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *EventResourceNoteType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *EventResourceNoteType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *EventResourceNoteType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *EventResourceNoteType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *EventResourceNoteType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *EventResourceNoteType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


