# EventAttendeesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NoOfAttendees** | Pointer to **int32** | The maximum number of attendees for Catering events associated with the block. | [optional] 
**AttendeesGuaranteed** | Pointer to **bool** | This denotes that the number of Attendees are the minimum guaranteed by the customer. | [optional] 

## Methods

### NewEventAttendeesType

`func NewEventAttendeesType() *EventAttendeesType`

NewEventAttendeesType instantiates a new EventAttendeesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventAttendeesTypeWithDefaults

`func NewEventAttendeesTypeWithDefaults() *EventAttendeesType`

NewEventAttendeesTypeWithDefaults instantiates a new EventAttendeesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNoOfAttendees

`func (o *EventAttendeesType) GetNoOfAttendees() int32`

GetNoOfAttendees returns the NoOfAttendees field if non-nil, zero value otherwise.

### GetNoOfAttendeesOk

`func (o *EventAttendeesType) GetNoOfAttendeesOk() (*int32, bool)`

GetNoOfAttendeesOk returns a tuple with the NoOfAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfAttendees

`func (o *EventAttendeesType) SetNoOfAttendees(v int32)`

SetNoOfAttendees sets NoOfAttendees field to given value.

### HasNoOfAttendees

`func (o *EventAttendeesType) HasNoOfAttendees() bool`

HasNoOfAttendees returns a boolean if a field has been set.

### GetAttendeesGuaranteed

`func (o *EventAttendeesType) GetAttendeesGuaranteed() bool`

GetAttendeesGuaranteed returns the AttendeesGuaranteed field if non-nil, zero value otherwise.

### GetAttendeesGuaranteedOk

`func (o *EventAttendeesType) GetAttendeesGuaranteedOk() (*bool, bool)`

GetAttendeesGuaranteedOk returns a tuple with the AttendeesGuaranteed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendeesGuaranteed

`func (o *EventAttendeesType) SetAttendeesGuaranteed(v bool)`

SetAttendeesGuaranteed sets AttendeesGuaranteed field to given value.

### HasAttendeesGuaranteed

`func (o *EventAttendeesType) HasAttendeesGuaranteed() bool`

HasAttendeesGuaranteed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


