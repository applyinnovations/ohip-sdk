# CateringPackageEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alternate** | Pointer to **bool** | Indicates if the function space requires an alternate space. | [optional] 
**DayOrder** | Pointer to **int32** | Event Day for the Catering Package Event. | [optional] 
**EventName** | Pointer to **string** | Event Name for the Catering Package Event. | [optional] 
**EventTime** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**EventType** | Pointer to **string** | Event Type associated with the Catering Package Event. | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**IsMaster** | Pointer to **bool** | Indiciates if this package event has sub-events. | [optional] 
**IsShareable** | Pointer to **bool** | Indicates if the function space should be booked as sharable. | [optional] 
**MasterEventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Notes** | Pointer to [**[]CateringPackageEventNoteType**](CateringPackageEventNoteType.md) | Collection of multiple Event Notes associated with a particular Catering Package Event. | [optional] 
**Resources** | Pointer to [**[]CateringPackageEventResourceType**](CateringPackageEventResourceType.md) | Collection of multiple Resources associated with a particular Catering Package Event. | [optional] 
**Room** | Pointer to **string** | Room details for the Catering Package Event. | [optional] 
**RoomRateCode** | Pointer to **string** | Stores the selected rate code for the meeting room. | [optional] 
**RoomSetup** | Pointer to **string** | Room Setup details for the Catering Package Event. | [optional] 
**Sub** | Pointer to **bool** | Indicates if the package event is a sub-event or not. | [optional] 

## Methods

### NewCateringPackageEventType

`func NewCateringPackageEventType() *CateringPackageEventType`

NewCateringPackageEventType instantiates a new CateringPackageEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageEventTypeWithDefaults

`func NewCateringPackageEventTypeWithDefaults() *CateringPackageEventType`

NewCateringPackageEventTypeWithDefaults instantiates a new CateringPackageEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternate

`func (o *CateringPackageEventType) GetAlternate() bool`

GetAlternate returns the Alternate field if non-nil, zero value otherwise.

### GetAlternateOk

`func (o *CateringPackageEventType) GetAlternateOk() (*bool, bool)`

GetAlternateOk returns a tuple with the Alternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternate

`func (o *CateringPackageEventType) SetAlternate(v bool)`

SetAlternate sets Alternate field to given value.

### HasAlternate

`func (o *CateringPackageEventType) HasAlternate() bool`

HasAlternate returns a boolean if a field has been set.

### GetDayOrder

`func (o *CateringPackageEventType) GetDayOrder() int32`

GetDayOrder returns the DayOrder field if non-nil, zero value otherwise.

### GetDayOrderOk

`func (o *CateringPackageEventType) GetDayOrderOk() (*int32, bool)`

GetDayOrderOk returns a tuple with the DayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayOrder

`func (o *CateringPackageEventType) SetDayOrder(v int32)`

SetDayOrder sets DayOrder field to given value.

### HasDayOrder

`func (o *CateringPackageEventType) HasDayOrder() bool`

HasDayOrder returns a boolean if a field has been set.

### GetEventName

`func (o *CateringPackageEventType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CateringPackageEventType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CateringPackageEventType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CateringPackageEventType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventTime

`func (o *CateringPackageEventType) GetEventTime() DateTimeSpanType`

GetEventTime returns the EventTime field if non-nil, zero value otherwise.

### GetEventTimeOk

`func (o *CateringPackageEventType) GetEventTimeOk() (*DateTimeSpanType, bool)`

GetEventTimeOk returns a tuple with the EventTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTime

`func (o *CateringPackageEventType) SetEventTime(v DateTimeSpanType)`

SetEventTime sets EventTime field to given value.

### HasEventTime

`func (o *CateringPackageEventType) HasEventTime() bool`

HasEventTime returns a boolean if a field has been set.

### GetEventType

`func (o *CateringPackageEventType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CateringPackageEventType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CateringPackageEventType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CateringPackageEventType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetId

`func (o *CateringPackageEventType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringPackageEventType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringPackageEventType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringPackageEventType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIsMaster

`func (o *CateringPackageEventType) GetIsMaster() bool`

GetIsMaster returns the IsMaster field if non-nil, zero value otherwise.

### GetIsMasterOk

`func (o *CateringPackageEventType) GetIsMasterOk() (*bool, bool)`

GetIsMasterOk returns a tuple with the IsMaster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMaster

`func (o *CateringPackageEventType) SetIsMaster(v bool)`

SetIsMaster sets IsMaster field to given value.

### HasIsMaster

`func (o *CateringPackageEventType) HasIsMaster() bool`

HasIsMaster returns a boolean if a field has been set.

### GetIsShareable

`func (o *CateringPackageEventType) GetIsShareable() bool`

GetIsShareable returns the IsShareable field if non-nil, zero value otherwise.

### GetIsShareableOk

`func (o *CateringPackageEventType) GetIsShareableOk() (*bool, bool)`

GetIsShareableOk returns a tuple with the IsShareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShareable

`func (o *CateringPackageEventType) SetIsShareable(v bool)`

SetIsShareable sets IsShareable field to given value.

### HasIsShareable

`func (o *CateringPackageEventType) HasIsShareable() bool`

HasIsShareable returns a boolean if a field has been set.

### GetMasterEventId

`func (o *CateringPackageEventType) GetMasterEventId() UniqueIDType`

GetMasterEventId returns the MasterEventId field if non-nil, zero value otherwise.

### GetMasterEventIdOk

`func (o *CateringPackageEventType) GetMasterEventIdOk() (*UniqueIDType, bool)`

GetMasterEventIdOk returns a tuple with the MasterEventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEventId

`func (o *CateringPackageEventType) SetMasterEventId(v UniqueIDType)`

SetMasterEventId sets MasterEventId field to given value.

### HasMasterEventId

`func (o *CateringPackageEventType) HasMasterEventId() bool`

HasMasterEventId returns a boolean if a field has been set.

### GetNotes

`func (o *CateringPackageEventType) GetNotes() []CateringPackageEventNoteType`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *CateringPackageEventType) GetNotesOk() (*[]CateringPackageEventNoteType, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *CateringPackageEventType) SetNotes(v []CateringPackageEventNoteType)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *CateringPackageEventType) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetResources

`func (o *CateringPackageEventType) GetResources() []CateringPackageEventResourceType`

GetResources returns the Resources field if non-nil, zero value otherwise.

### GetResourcesOk

`func (o *CateringPackageEventType) GetResourcesOk() (*[]CateringPackageEventResourceType, bool)`

GetResourcesOk returns a tuple with the Resources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResources

`func (o *CateringPackageEventType) SetResources(v []CateringPackageEventResourceType)`

SetResources sets Resources field to given value.

### HasResources

`func (o *CateringPackageEventType) HasResources() bool`

HasResources returns a boolean if a field has been set.

### GetRoom

`func (o *CateringPackageEventType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *CateringPackageEventType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *CateringPackageEventType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *CateringPackageEventType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetRoomRateCode

`func (o *CateringPackageEventType) GetRoomRateCode() string`

GetRoomRateCode returns the RoomRateCode field if non-nil, zero value otherwise.

### GetRoomRateCodeOk

`func (o *CateringPackageEventType) GetRoomRateCodeOk() (*string, bool)`

GetRoomRateCodeOk returns a tuple with the RoomRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRateCode

`func (o *CateringPackageEventType) SetRoomRateCode(v string)`

SetRoomRateCode sets RoomRateCode field to given value.

### HasRoomRateCode

`func (o *CateringPackageEventType) HasRoomRateCode() bool`

HasRoomRateCode returns a boolean if a field has been set.

### GetRoomSetup

`func (o *CateringPackageEventType) GetRoomSetup() string`

GetRoomSetup returns the RoomSetup field if non-nil, zero value otherwise.

### GetRoomSetupOk

`func (o *CateringPackageEventType) GetRoomSetupOk() (*string, bool)`

GetRoomSetupOk returns a tuple with the RoomSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSetup

`func (o *CateringPackageEventType) SetRoomSetup(v string)`

SetRoomSetup sets RoomSetup field to given value.

### HasRoomSetup

`func (o *CateringPackageEventType) HasRoomSetup() bool`

HasRoomSetup returns a boolean if a field has been set.

### GetSub

`func (o *CateringPackageEventType) GetSub() bool`

GetSub returns the Sub field if non-nil, zero value otherwise.

### GetSubOk

`func (o *CateringPackageEventType) GetSubOk() (*bool, bool)`

GetSubOk returns a tuple with the Sub field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSub

`func (o *CateringPackageEventType) SetSub(v bool)`

SetSub sets Sub field to given value.

### HasSub

`func (o *CateringPackageEventType) HasSub() bool`

HasSub returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


