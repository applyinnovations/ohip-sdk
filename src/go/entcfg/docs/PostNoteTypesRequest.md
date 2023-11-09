# PostNoteTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**NoteTypes** | Pointer to [**NoteTypesType**](NoteTypesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostNoteTypesRequest

`func NewPostNoteTypesRequest() *PostNoteTypesRequest`

NewPostNoteTypesRequest instantiates a new PostNoteTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostNoteTypesRequestWithDefaults

`func NewPostNoteTypesRequestWithDefaults() *PostNoteTypesRequest`

NewPostNoteTypesRequestWithDefaults instantiates a new PostNoteTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostNoteTypesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostNoteTypesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostNoteTypesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostNoteTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNoteTypes

`func (o *PostNoteTypesRequest) GetNoteTypes() NoteTypesType`

GetNoteTypes returns the NoteTypes field if non-nil, zero value otherwise.

### GetNoteTypesOk

`func (o *PostNoteTypesRequest) GetNoteTypesOk() (*NoteTypesType, bool)`

GetNoteTypesOk returns a tuple with the NoteTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoteTypes

`func (o *PostNoteTypesRequest) SetNoteTypes(v NoteTypesType)`

SetNoteTypes sets NoteTypes field to given value.

### HasNoteTypes

`func (o *PostNoteTypesRequest) HasNoteTypes() bool`

HasNoteTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostNoteTypesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostNoteTypesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostNoteTypesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostNoteTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


