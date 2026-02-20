# NotesMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**ReservationComment** | Pointer to [**ReservationCommentType**](ReservationCommentType.md) |  | [optional] 

## Methods

### NewNotesMassUpdateCriteria

`func NewNotesMassUpdateCriteria() *NotesMassUpdateCriteria`

NewNotesMassUpdateCriteria instantiates a new NotesMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNotesMassUpdateCriteriaWithDefaults

`func NewNotesMassUpdateCriteriaWithDefaults() *NotesMassUpdateCriteria`

NewNotesMassUpdateCriteriaWithDefaults instantiates a new NotesMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *NotesMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *NotesMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *NotesMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *NotesMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetReservationComment

`func (o *NotesMassUpdateCriteria) GetReservationComment() ReservationCommentType`

GetReservationComment returns the ReservationComment field if non-nil, zero value otherwise.

### GetReservationCommentOk

`func (o *NotesMassUpdateCriteria) GetReservationCommentOk() (*ReservationCommentType, bool)`

GetReservationCommentOk returns a tuple with the ReservationComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationComment

`func (o *NotesMassUpdateCriteria) SetReservationComment(v ReservationCommentType)`

SetReservationComment sets ReservationComment field to given value.

### HasReservationComment

`func (o *NotesMassUpdateCriteria) HasReservationComment() bool`

HasReservationComment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


