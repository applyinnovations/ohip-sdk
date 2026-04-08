# ResourceEventSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**EventName** | Pointer to [**TranslationTextType60**](TranslationTextType60.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**EventTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**PackageId** | Pointer to **float32** | Package Id of the Event. | [optional] 
**MasterEvent** | Pointer to **bool** | Indicates whether event is master event. | [optional] 
**SubEvent** | Pointer to **bool** | Flag to indicate if the event is a sub event. | [optional] 
**AlternateEvent** | Pointer to **bool** | Flag to indicate if the event is an alternate event. | [optional] 
**Room** | Pointer to **string** | Room code of the function space. | [optional] 

## Methods

### NewResourceEventSummaryInfoType

`func NewResourceEventSummaryInfoType() *ResourceEventSummaryInfoType`

NewResourceEventSummaryInfoType instantiates a new ResourceEventSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResourceEventSummaryInfoTypeWithDefaults

`func NewResourceEventSummaryInfoTypeWithDefaults() *ResourceEventSummaryInfoType`

NewResourceEventSummaryInfoTypeWithDefaults instantiates a new ResourceEventSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventId

`func (o *ResourceEventSummaryInfoType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *ResourceEventSummaryInfoType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *ResourceEventSummaryInfoType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *ResourceEventSummaryInfoType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetEventName

`func (o *ResourceEventSummaryInfoType) GetEventName() TranslationTextType60`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *ResourceEventSummaryInfoType) GetEventNameOk() (*TranslationTextType60, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *ResourceEventSummaryInfoType) SetEventName(v TranslationTextType60)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *ResourceEventSummaryInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventType

`func (o *ResourceEventSummaryInfoType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *ResourceEventSummaryInfoType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *ResourceEventSummaryInfoType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *ResourceEventSummaryInfoType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetEventTimeSpan

`func (o *ResourceEventSummaryInfoType) GetEventTimeSpan() DateTimeSpanType`

GetEventTimeSpan returns the EventTimeSpan field if non-nil, zero value otherwise.

### GetEventTimeSpanOk

`func (o *ResourceEventSummaryInfoType) GetEventTimeSpanOk() (*DateTimeSpanType, bool)`

GetEventTimeSpanOk returns a tuple with the EventTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTimeSpan

`func (o *ResourceEventSummaryInfoType) SetEventTimeSpan(v DateTimeSpanType)`

SetEventTimeSpan sets EventTimeSpan field to given value.

### HasEventTimeSpan

`func (o *ResourceEventSummaryInfoType) HasEventTimeSpan() bool`

HasEventTimeSpan returns a boolean if a field has been set.

### GetEventStatus

`func (o *ResourceEventSummaryInfoType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *ResourceEventSummaryInfoType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *ResourceEventSummaryInfoType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *ResourceEventSummaryInfoType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetPackageId

`func (o *ResourceEventSummaryInfoType) GetPackageId() float32`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *ResourceEventSummaryInfoType) GetPackageIdOk() (*float32, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *ResourceEventSummaryInfoType) SetPackageId(v float32)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *ResourceEventSummaryInfoType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetMasterEvent

`func (o *ResourceEventSummaryInfoType) GetMasterEvent() bool`

GetMasterEvent returns the MasterEvent field if non-nil, zero value otherwise.

### GetMasterEventOk

`func (o *ResourceEventSummaryInfoType) GetMasterEventOk() (*bool, bool)`

GetMasterEventOk returns a tuple with the MasterEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEvent

`func (o *ResourceEventSummaryInfoType) SetMasterEvent(v bool)`

SetMasterEvent sets MasterEvent field to given value.

### HasMasterEvent

`func (o *ResourceEventSummaryInfoType) HasMasterEvent() bool`

HasMasterEvent returns a boolean if a field has been set.

### GetSubEvent

`func (o *ResourceEventSummaryInfoType) GetSubEvent() bool`

GetSubEvent returns the SubEvent field if non-nil, zero value otherwise.

### GetSubEventOk

`func (o *ResourceEventSummaryInfoType) GetSubEventOk() (*bool, bool)`

GetSubEventOk returns a tuple with the SubEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubEvent

`func (o *ResourceEventSummaryInfoType) SetSubEvent(v bool)`

SetSubEvent sets SubEvent field to given value.

### HasSubEvent

`func (o *ResourceEventSummaryInfoType) HasSubEvent() bool`

HasSubEvent returns a boolean if a field has been set.

### GetAlternateEvent

`func (o *ResourceEventSummaryInfoType) GetAlternateEvent() bool`

GetAlternateEvent returns the AlternateEvent field if non-nil, zero value otherwise.

### GetAlternateEventOk

`func (o *ResourceEventSummaryInfoType) GetAlternateEventOk() (*bool, bool)`

GetAlternateEventOk returns a tuple with the AlternateEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateEvent

`func (o *ResourceEventSummaryInfoType) SetAlternateEvent(v bool)`

SetAlternateEvent sets AlternateEvent field to given value.

### HasAlternateEvent

`func (o *ResourceEventSummaryInfoType) HasAlternateEvent() bool`

HasAlternateEvent returns a boolean if a field has been set.

### GetRoom

`func (o *ResourceEventSummaryInfoType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ResourceEventSummaryInfoType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ResourceEventSummaryInfoType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ResourceEventSummaryInfoType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


