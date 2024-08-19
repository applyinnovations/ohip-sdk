# CalendarEventInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendees** | Pointer to **int32** | Number of event attendees. | [optional] 
**CreatedOn** | Pointer to **string** | Date the event was created. | [optional] 
**EventBookingInfo** | Pointer to [**EventBookingInfoType**](EventBookingInfoType.md) |  | [optional] 
**EventDisplay** | Pointer to [**EventDisplayType**](EventDisplayType.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of event. | [optional] 
**EventTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IsComboRoomEventRef** | Pointer to **bool** | Flag which is set to true when this Calendar Event Info is simply a copy of an event occurring in a Combo Element of this Room. | [optional] 
**MasterEventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**OverbookEventsCount** | Pointer to **int32** | Evaluates total overbook events count for this event. | [optional] 
**ProspectiveEventsCount** | Pointer to **int32** | Evaluates total prospective events count for this event. | [optional] 
**SetdownTime** | Pointer to **int32** | Setdown time in minutes. | [optional] 
**SetupCode** | Pointer to **string** | Setup Code. | [optional] 
**SetupDescription** | Pointer to **string** | Setup Description. | [optional] 
**SetupTime** | Pointer to **int32** | Setup time in minutes. | [optional] 
**Space** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**SpaceTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**WaitListEventsCount** | Pointer to **int32** | Evaluates total waitlist events count for this event. | [optional] 

## Methods

### NewCalendarEventInfoType

`func NewCalendarEventInfoType() *CalendarEventInfoType`

NewCalendarEventInfoType instantiates a new CalendarEventInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarEventInfoTypeWithDefaults

`func NewCalendarEventInfoTypeWithDefaults() *CalendarEventInfoType`

NewCalendarEventInfoTypeWithDefaults instantiates a new CalendarEventInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendees

`func (o *CalendarEventInfoType) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *CalendarEventInfoType) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *CalendarEventInfoType) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *CalendarEventInfoType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetCreatedOn

`func (o *CalendarEventInfoType) GetCreatedOn() string`

GetCreatedOn returns the CreatedOn field if non-nil, zero value otherwise.

### GetCreatedOnOk

`func (o *CalendarEventInfoType) GetCreatedOnOk() (*string, bool)`

GetCreatedOnOk returns a tuple with the CreatedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedOn

`func (o *CalendarEventInfoType) SetCreatedOn(v string)`

SetCreatedOn sets CreatedOn field to given value.

### HasCreatedOn

`func (o *CalendarEventInfoType) HasCreatedOn() bool`

HasCreatedOn returns a boolean if a field has been set.

### GetEventBookingInfo

`func (o *CalendarEventInfoType) GetEventBookingInfo() EventBookingInfoType`

GetEventBookingInfo returns the EventBookingInfo field if non-nil, zero value otherwise.

### GetEventBookingInfoOk

`func (o *CalendarEventInfoType) GetEventBookingInfoOk() (*EventBookingInfoType, bool)`

GetEventBookingInfoOk returns a tuple with the EventBookingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventBookingInfo

`func (o *CalendarEventInfoType) SetEventBookingInfo(v EventBookingInfoType)`

SetEventBookingInfo sets EventBookingInfo field to given value.

### HasEventBookingInfo

`func (o *CalendarEventInfoType) HasEventBookingInfo() bool`

HasEventBookingInfo returns a boolean if a field has been set.

### GetEventDisplay

`func (o *CalendarEventInfoType) GetEventDisplay() EventDisplayType`

GetEventDisplay returns the EventDisplay field if non-nil, zero value otherwise.

### GetEventDisplayOk

`func (o *CalendarEventInfoType) GetEventDisplayOk() (*EventDisplayType, bool)`

GetEventDisplayOk returns a tuple with the EventDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDisplay

`func (o *CalendarEventInfoType) SetEventDisplay(v EventDisplayType)`

SetEventDisplay sets EventDisplay field to given value.

### HasEventDisplay

`func (o *CalendarEventInfoType) HasEventDisplay() bool`

HasEventDisplay returns a boolean if a field has been set.

### GetEventName

`func (o *CalendarEventInfoType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CalendarEventInfoType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CalendarEventInfoType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CalendarEventInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventTimeSpan

`func (o *CalendarEventInfoType) GetEventTimeSpan() DateTimeSpanType`

GetEventTimeSpan returns the EventTimeSpan field if non-nil, zero value otherwise.

### GetEventTimeSpanOk

`func (o *CalendarEventInfoType) GetEventTimeSpanOk() (*DateTimeSpanType, bool)`

GetEventTimeSpanOk returns a tuple with the EventTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTimeSpan

`func (o *CalendarEventInfoType) SetEventTimeSpan(v DateTimeSpanType)`

SetEventTimeSpan sets EventTimeSpan field to given value.

### HasEventTimeSpan

`func (o *CalendarEventInfoType) HasEventTimeSpan() bool`

HasEventTimeSpan returns a boolean if a field has been set.

### GetEventType

`func (o *CalendarEventInfoType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CalendarEventInfoType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CalendarEventInfoType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CalendarEventInfoType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetId

`func (o *CalendarEventInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CalendarEventInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CalendarEventInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CalendarEventInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *CalendarEventInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CalendarEventInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CalendarEventInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CalendarEventInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetInstance

`func (o *CalendarEventInfoType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CalendarEventInfoType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CalendarEventInfoType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CalendarEventInfoType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIsComboRoomEventRef

`func (o *CalendarEventInfoType) GetIsComboRoomEventRef() bool`

GetIsComboRoomEventRef returns the IsComboRoomEventRef field if non-nil, zero value otherwise.

### GetIsComboRoomEventRefOk

`func (o *CalendarEventInfoType) GetIsComboRoomEventRefOk() (*bool, bool)`

GetIsComboRoomEventRefOk returns a tuple with the IsComboRoomEventRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsComboRoomEventRef

`func (o *CalendarEventInfoType) SetIsComboRoomEventRef(v bool)`

SetIsComboRoomEventRef sets IsComboRoomEventRef field to given value.

### HasIsComboRoomEventRef

`func (o *CalendarEventInfoType) HasIsComboRoomEventRef() bool`

HasIsComboRoomEventRef returns a boolean if a field has been set.

### GetMasterEventId

`func (o *CalendarEventInfoType) GetMasterEventId() UniqueIDType`

GetMasterEventId returns the MasterEventId field if non-nil, zero value otherwise.

### GetMasterEventIdOk

`func (o *CalendarEventInfoType) GetMasterEventIdOk() (*UniqueIDType, bool)`

GetMasterEventIdOk returns a tuple with the MasterEventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEventId

`func (o *CalendarEventInfoType) SetMasterEventId(v UniqueIDType)`

SetMasterEventId sets MasterEventId field to given value.

### HasMasterEventId

`func (o *CalendarEventInfoType) HasMasterEventId() bool`

HasMasterEventId returns a boolean if a field has been set.

### GetOverbookEventsCount

`func (o *CalendarEventInfoType) GetOverbookEventsCount() int32`

GetOverbookEventsCount returns the OverbookEventsCount field if non-nil, zero value otherwise.

### GetOverbookEventsCountOk

`func (o *CalendarEventInfoType) GetOverbookEventsCountOk() (*int32, bool)`

GetOverbookEventsCountOk returns a tuple with the OverbookEventsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverbookEventsCount

`func (o *CalendarEventInfoType) SetOverbookEventsCount(v int32)`

SetOverbookEventsCount sets OverbookEventsCount field to given value.

### HasOverbookEventsCount

`func (o *CalendarEventInfoType) HasOverbookEventsCount() bool`

HasOverbookEventsCount returns a boolean if a field has been set.

### GetProspectiveEventsCount

`func (o *CalendarEventInfoType) GetProspectiveEventsCount() int32`

GetProspectiveEventsCount returns the ProspectiveEventsCount field if non-nil, zero value otherwise.

### GetProspectiveEventsCountOk

`func (o *CalendarEventInfoType) GetProspectiveEventsCountOk() (*int32, bool)`

GetProspectiveEventsCountOk returns a tuple with the ProspectiveEventsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProspectiveEventsCount

`func (o *CalendarEventInfoType) SetProspectiveEventsCount(v int32)`

SetProspectiveEventsCount sets ProspectiveEventsCount field to given value.

### HasProspectiveEventsCount

`func (o *CalendarEventInfoType) HasProspectiveEventsCount() bool`

HasProspectiveEventsCount returns a boolean if a field has been set.

### GetSetdownTime

`func (o *CalendarEventInfoType) GetSetdownTime() int32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *CalendarEventInfoType) GetSetdownTimeOk() (*int32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *CalendarEventInfoType) SetSetdownTime(v int32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *CalendarEventInfoType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetSetupCode

`func (o *CalendarEventInfoType) GetSetupCode() string`

GetSetupCode returns the SetupCode field if non-nil, zero value otherwise.

### GetSetupCodeOk

`func (o *CalendarEventInfoType) GetSetupCodeOk() (*string, bool)`

GetSetupCodeOk returns a tuple with the SetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupCode

`func (o *CalendarEventInfoType) SetSetupCode(v string)`

SetSetupCode sets SetupCode field to given value.

### HasSetupCode

`func (o *CalendarEventInfoType) HasSetupCode() bool`

HasSetupCode returns a boolean if a field has been set.

### GetSetupDescription

`func (o *CalendarEventInfoType) GetSetupDescription() string`

GetSetupDescription returns the SetupDescription field if non-nil, zero value otherwise.

### GetSetupDescriptionOk

`func (o *CalendarEventInfoType) GetSetupDescriptionOk() (*string, bool)`

GetSetupDescriptionOk returns a tuple with the SetupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupDescription

`func (o *CalendarEventInfoType) SetSetupDescription(v string)`

SetSetupDescription sets SetupDescription field to given value.

### HasSetupDescription

`func (o *CalendarEventInfoType) HasSetupDescription() bool`

HasSetupDescription returns a boolean if a field has been set.

### GetSetupTime

`func (o *CalendarEventInfoType) GetSetupTime() int32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *CalendarEventInfoType) GetSetupTimeOk() (*int32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *CalendarEventInfoType) SetSetupTime(v int32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *CalendarEventInfoType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetSpace

`func (o *CalendarEventInfoType) GetSpace() CodeDescriptionType`

GetSpace returns the Space field if non-nil, zero value otherwise.

### GetSpaceOk

`func (o *CalendarEventInfoType) GetSpaceOk() (*CodeDescriptionType, bool)`

GetSpaceOk returns a tuple with the Space field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpace

`func (o *CalendarEventInfoType) SetSpace(v CodeDescriptionType)`

SetSpace sets Space field to given value.

### HasSpace

`func (o *CalendarEventInfoType) HasSpace() bool`

HasSpace returns a boolean if a field has been set.

### GetSpaceTimeSpan

`func (o *CalendarEventInfoType) GetSpaceTimeSpan() TimeSpanType`

GetSpaceTimeSpan returns the SpaceTimeSpan field if non-nil, zero value otherwise.

### GetSpaceTimeSpanOk

`func (o *CalendarEventInfoType) GetSpaceTimeSpanOk() (*TimeSpanType, bool)`

GetSpaceTimeSpanOk returns a tuple with the SpaceTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceTimeSpan

`func (o *CalendarEventInfoType) SetSpaceTimeSpan(v TimeSpanType)`

SetSpaceTimeSpan sets SpaceTimeSpan field to given value.

### HasSpaceTimeSpan

`func (o *CalendarEventInfoType) HasSpaceTimeSpan() bool`

HasSpaceTimeSpan returns a boolean if a field has been set.

### GetType

`func (o *CalendarEventInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CalendarEventInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CalendarEventInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CalendarEventInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *CalendarEventInfoType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CalendarEventInfoType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CalendarEventInfoType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CalendarEventInfoType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetWaitListEventsCount

`func (o *CalendarEventInfoType) GetWaitListEventsCount() int32`

GetWaitListEventsCount returns the WaitListEventsCount field if non-nil, zero value otherwise.

### GetWaitListEventsCountOk

`func (o *CalendarEventInfoType) GetWaitListEventsCountOk() (*int32, bool)`

GetWaitListEventsCountOk returns a tuple with the WaitListEventsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitListEventsCount

`func (o *CalendarEventInfoType) SetWaitListEventsCount(v int32)`

SetWaitListEventsCount sets WaitListEventsCount field to given value.

### HasWaitListEventsCount

`func (o *CalendarEventInfoType) HasWaitListEventsCount() bool`

HasWaitListEventsCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


