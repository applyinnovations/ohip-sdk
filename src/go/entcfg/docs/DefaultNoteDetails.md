# DefaultNoteDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultNote** | Pointer to [**DefaultNoteTextDetailType**](DefaultNoteTextDetailType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDefaultNoteDetails

`func NewDefaultNoteDetails() *DefaultNoteDetails`

NewDefaultNoteDetails instantiates a new DefaultNoteDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefaultNoteDetailsWithDefaults

`func NewDefaultNoteDetailsWithDefaults() *DefaultNoteDetails`

NewDefaultNoteDetailsWithDefaults instantiates a new DefaultNoteDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultNote

`func (o *DefaultNoteDetails) GetDefaultNote() DefaultNoteTextDetailType`

GetDefaultNote returns the DefaultNote field if non-nil, zero value otherwise.

### GetDefaultNoteOk

`func (o *DefaultNoteDetails) GetDefaultNoteOk() (*DefaultNoteTextDetailType, bool)`

GetDefaultNoteOk returns a tuple with the DefaultNote field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultNote

`func (o *DefaultNoteDetails) SetDefaultNote(v DefaultNoteTextDetailType)`

SetDefaultNote sets DefaultNote field to given value.

### HasDefaultNote

`func (o *DefaultNoteDetails) HasDefaultNote() bool`

HasDefaultNote returns a boolean if a field has been set.

### GetLinks

`func (o *DefaultNoteDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DefaultNoteDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DefaultNoteDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DefaultNoteDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DefaultNoteDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DefaultNoteDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DefaultNoteDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DefaultNoteDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


