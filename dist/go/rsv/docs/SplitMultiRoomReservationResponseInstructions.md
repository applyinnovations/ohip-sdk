# SplitMultiRoomReservationResponseInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FetchLinkedReservations** | Pointer to **bool** | If set to TRUE, response will have the list of linked reservations. | [optional] 
**FetchNewReservationIDs** | Pointer to **bool** | If set to TRUE, response will have the list of unique identifiers of the reservations that were created. | [optional] 

## Methods

### NewSplitMultiRoomReservationResponseInstructions

`func NewSplitMultiRoomReservationResponseInstructions() *SplitMultiRoomReservationResponseInstructions`

NewSplitMultiRoomReservationResponseInstructions instantiates a new SplitMultiRoomReservationResponseInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSplitMultiRoomReservationResponseInstructionsWithDefaults

`func NewSplitMultiRoomReservationResponseInstructionsWithDefaults() *SplitMultiRoomReservationResponseInstructions`

NewSplitMultiRoomReservationResponseInstructionsWithDefaults instantiates a new SplitMultiRoomReservationResponseInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFetchLinkedReservations

`func (o *SplitMultiRoomReservationResponseInstructions) GetFetchLinkedReservations() bool`

GetFetchLinkedReservations returns the FetchLinkedReservations field if non-nil, zero value otherwise.

### GetFetchLinkedReservationsOk

`func (o *SplitMultiRoomReservationResponseInstructions) GetFetchLinkedReservationsOk() (*bool, bool)`

GetFetchLinkedReservationsOk returns a tuple with the FetchLinkedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchLinkedReservations

`func (o *SplitMultiRoomReservationResponseInstructions) SetFetchLinkedReservations(v bool)`

SetFetchLinkedReservations sets FetchLinkedReservations field to given value.

### HasFetchLinkedReservations

`func (o *SplitMultiRoomReservationResponseInstructions) HasFetchLinkedReservations() bool`

HasFetchLinkedReservations returns a boolean if a field has been set.

### GetFetchNewReservationIDs

`func (o *SplitMultiRoomReservationResponseInstructions) GetFetchNewReservationIDs() bool`

GetFetchNewReservationIDs returns the FetchNewReservationIDs field if non-nil, zero value otherwise.

### GetFetchNewReservationIDsOk

`func (o *SplitMultiRoomReservationResponseInstructions) GetFetchNewReservationIDsOk() (*bool, bool)`

GetFetchNewReservationIDsOk returns a tuple with the FetchNewReservationIDs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchNewReservationIDs

`func (o *SplitMultiRoomReservationResponseInstructions) SetFetchNewReservationIDs(v bool)`

SetFetchNewReservationIDs sets FetchNewReservationIDs field to given value.

### HasFetchNewReservationIDs

`func (o *SplitMultiRoomReservationResponseInstructions) HasFetchNewReservationIDs() bool`

HasFetchNewReservationIDs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


