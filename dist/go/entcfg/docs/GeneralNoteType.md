# GeneralNoteType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Note** | Pointer to **string** | The body of the note. | [optional] 
**Title** | Pointer to **string** | The note&#39;s title. | [optional] 

## Methods

### NewGeneralNoteType

`func NewGeneralNoteType() *GeneralNoteType`

NewGeneralNoteType instantiates a new GeneralNoteType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneralNoteTypeWithDefaults

`func NewGeneralNoteTypeWithDefaults() *GeneralNoteType`

NewGeneralNoteTypeWithDefaults instantiates a new GeneralNoteType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNote

`func (o *GeneralNoteType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *GeneralNoteType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *GeneralNoteType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *GeneralNoteType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetTitle

`func (o *GeneralNoteType) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *GeneralNoteType) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *GeneralNoteType) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *GeneralNoteType) HasTitle() bool`

HasTitle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


