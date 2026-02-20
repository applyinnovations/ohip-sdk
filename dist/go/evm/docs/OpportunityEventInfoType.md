# OpportunityEventInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OpportunityEventDetail** | Pointer to [**OpportunityEventDetailType**](OpportunityEventDetailType.md) |  | [optional] 
**EventNotes** | Pointer to [**[]EventNoteType**](EventNoteType.md) | Pertain event information. | [optional] 

## Methods

### NewOpportunityEventInfoType

`func NewOpportunityEventInfoType() *OpportunityEventInfoType`

NewOpportunityEventInfoType instantiates a new OpportunityEventInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOpportunityEventInfoTypeWithDefaults

`func NewOpportunityEventInfoTypeWithDefaults() *OpportunityEventInfoType`

NewOpportunityEventInfoTypeWithDefaults instantiates a new OpportunityEventInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOpportunityEventDetail

`func (o *OpportunityEventInfoType) GetOpportunityEventDetail() OpportunityEventDetailType`

GetOpportunityEventDetail returns the OpportunityEventDetail field if non-nil, zero value otherwise.

### GetOpportunityEventDetailOk

`func (o *OpportunityEventInfoType) GetOpportunityEventDetailOk() (*OpportunityEventDetailType, bool)`

GetOpportunityEventDetailOk returns a tuple with the OpportunityEventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpportunityEventDetail

`func (o *OpportunityEventInfoType) SetOpportunityEventDetail(v OpportunityEventDetailType)`

SetOpportunityEventDetail sets OpportunityEventDetail field to given value.

### HasOpportunityEventDetail

`func (o *OpportunityEventInfoType) HasOpportunityEventDetail() bool`

HasOpportunityEventDetail returns a boolean if a field has been set.

### GetEventNotes

`func (o *OpportunityEventInfoType) GetEventNotes() []EventNoteType`

GetEventNotes returns the EventNotes field if non-nil, zero value otherwise.

### GetEventNotesOk

`func (o *OpportunityEventInfoType) GetEventNotesOk() (*[]EventNoteType, bool)`

GetEventNotesOk returns a tuple with the EventNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventNotes

`func (o *OpportunityEventInfoType) SetEventNotes(v []EventNoteType)`

SetEventNotes sets EventNotes field to given value.

### HasEventNotes

`func (o *OpportunityEventInfoType) HasEventNotes() bool`

HasEventNotes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


