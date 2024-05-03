# ReservationQueuePriority

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**QueueInfo** | Pointer to [**ReservationQueueInformationType**](ReservationQueueInformationType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationQueuePriority

`func NewReservationQueuePriority() *ReservationQueuePriority`

NewReservationQueuePriority instantiates a new ReservationQueuePriority object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationQueuePriorityWithDefaults

`func NewReservationQueuePriorityWithDefaults() *ReservationQueuePriority`

NewReservationQueuePriorityWithDefaults instantiates a new ReservationQueuePriority object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationQueuePriority) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationQueuePriority) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationQueuePriority) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationQueuePriority) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetQueueInfo

`func (o *ReservationQueuePriority) GetQueueInfo() ReservationQueueInformationType`

GetQueueInfo returns the QueueInfo field if non-nil, zero value otherwise.

### GetQueueInfoOk

`func (o *ReservationQueuePriority) GetQueueInfoOk() (*ReservationQueueInformationType, bool)`

GetQueueInfoOk returns a tuple with the QueueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQueueInfo

`func (o *ReservationQueuePriority) SetQueueInfo(v ReservationQueueInformationType)`

SetQueueInfo sets QueueInfo field to given value.

### HasQueueInfo

`func (o *ReservationQueuePriority) HasQueueInfo() bool`

HasQueueInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationQueuePriority) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationQueuePriority) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationQueuePriority) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationQueuePriority) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


