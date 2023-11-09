# ReservationQueuePriorityNumber

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Priority** | Pointer to **int32** | Priority which should be assigned to the reservation in Queue. If null, the topmost priority(1) will be assigned. All other reservations in the queue will be adjusted accordingly. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservationQueuePriorityNumber

`func NewReservationQueuePriorityNumber() *ReservationQueuePriorityNumber`

NewReservationQueuePriorityNumber instantiates a new ReservationQueuePriorityNumber object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueuePriorityNumberWithDefaults

`func NewReservationQueuePriorityNumberWithDefaults() *ReservationQueuePriorityNumber`

NewReservationQueuePriorityNumberWithDefaults instantiates a new ReservationQueuePriorityNumber object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationQueuePriorityNumber) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationQueuePriorityNumber) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationQueuePriorityNumber) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationQueuePriorityNumber) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPriority

`func (o *ReservationQueuePriorityNumber) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ReservationQueuePriorityNumber) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ReservationQueuePriorityNumber) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ReservationQueuePriorityNumber) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationQueuePriorityNumber) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationQueuePriorityNumber) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationQueuePriorityNumber) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationQueuePriorityNumber) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


