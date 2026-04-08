# EventDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventName** | Pointer to [**TranslationTextType60**](TranslationTextType60.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**EventTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**WaitlistReturnStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CateringStatusType** | Pointer to [**CateringStatusTypeType**](CateringStatusTypeType.md) |  | [optional] 
**Attendees** | Pointer to [**CateringEventsAttendeesType**](CateringEventsAttendeesType.md) |  | [optional] 
**MasterEventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Doorcard** | Pointer to **string** | It is the group details to display on the outside of a meeting functionSpaceDetails. | [optional] 
**EventLink** | Pointer to [**CateringEventLinkType**](CateringEventLinkType.md) |  | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the event. | [optional] 
**PackageId** | Pointer to **int32** | Package Id of the Event. | [optional] 
**PackageCode** | Pointer to **string** | Package Code of the Event if it has a Package Enabled in it. | [optional] 
**PackageName** | Pointer to **string** | Package Name of the Event. | [optional] 
**MasterEvent** | Pointer to **bool** | Indicates whether event is master event. | [optional] 
**SubEvent** | Pointer to **bool** | Flag to indicate if the event is a sub event. | [optional] 
**PackageEvent** | Pointer to **bool** | Flag to indicate if the event is part of a package. | [optional] 
**AlternateEvent** | Pointer to **bool** | Flag to indicate if the event is booked as a backup for another event. | [optional] 
**Waitlisted** | Pointer to **bool** | Indicates whether event is wait listed. | [optional] 
**NotMoveable** | Pointer to **bool** | Indicates whether event dates and functionSpaceDetails are move able. | [optional] 
**LoudEvent** | Pointer to **bool** | Indicates whether the event is expected to be noisy and might possibly disturb other events. | [optional] 
**HasPostings** | Pointer to **bool** | Indicates whether the events has postings. | [optional] 
**DisplayDoorcard** | Pointer to **bool** | Indicates whether display the doorcard information on the Event Overview report. | [optional] 
**CateringDeductInventory** | Pointer to **bool** | Indicates if catering event&#39;s spaces are deducted from inventory | [optional] 
**EventShared** | Pointer to **bool** | Flag to indicate if the event is shareable with other events. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**IncludeSpaceInPackage** | Pointer to **bool** | Flag to indicate if the event space is associated from the Package | [optional] 
**EventLevelRevenueActualization** | Pointer to **bool** | Flag that indicates if actual revenue can be manually edited. | [optional] 
**ExternalURL** | Pointer to **string** | Field to save the external URL Enterted by the user in the event Overview Section. | [optional] 

## Methods

### NewEventDetailType

`func NewEventDetailType() *EventDetailType`

NewEventDetailType instantiates a new EventDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventDetailTypeWithDefaults

`func NewEventDetailTypeWithDefaults() *EventDetailType`

NewEventDetailTypeWithDefaults instantiates a new EventDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventName

`func (o *EventDetailType) GetEventName() TranslationTextType60`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *EventDetailType) GetEventNameOk() (*TranslationTextType60, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *EventDetailType) SetEventName(v TranslationTextType60)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *EventDetailType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventType

`func (o *EventDetailType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *EventDetailType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *EventDetailType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *EventDetailType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetEventTimeSpan

`func (o *EventDetailType) GetEventTimeSpan() DateTimeSpanType`

GetEventTimeSpan returns the EventTimeSpan field if non-nil, zero value otherwise.

### GetEventTimeSpanOk

`func (o *EventDetailType) GetEventTimeSpanOk() (*DateTimeSpanType, bool)`

GetEventTimeSpanOk returns a tuple with the EventTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTimeSpan

`func (o *EventDetailType) SetEventTimeSpan(v DateTimeSpanType)`

SetEventTimeSpan sets EventTimeSpan field to given value.

### HasEventTimeSpan

`func (o *EventDetailType) HasEventTimeSpan() bool`

HasEventTimeSpan returns a boolean if a field has been set.

### GetEventStatus

`func (o *EventDetailType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *EventDetailType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *EventDetailType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *EventDetailType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetWaitlistReturnStatus

`func (o *EventDetailType) GetWaitlistReturnStatus() BookingStatusType`

GetWaitlistReturnStatus returns the WaitlistReturnStatus field if non-nil, zero value otherwise.

### GetWaitlistReturnStatusOk

`func (o *EventDetailType) GetWaitlistReturnStatusOk() (*BookingStatusType, bool)`

GetWaitlistReturnStatusOk returns a tuple with the WaitlistReturnStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlistReturnStatus

`func (o *EventDetailType) SetWaitlistReturnStatus(v BookingStatusType)`

SetWaitlistReturnStatus sets WaitlistReturnStatus field to given value.

### HasWaitlistReturnStatus

`func (o *EventDetailType) HasWaitlistReturnStatus() bool`

HasWaitlistReturnStatus returns a boolean if a field has been set.

### GetCateringStatusType

`func (o *EventDetailType) GetCateringStatusType() CateringStatusTypeType`

GetCateringStatusType returns the CateringStatusType field if non-nil, zero value otherwise.

### GetCateringStatusTypeOk

`func (o *EventDetailType) GetCateringStatusTypeOk() (*CateringStatusTypeType, bool)`

GetCateringStatusTypeOk returns a tuple with the CateringStatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringStatusType

`func (o *EventDetailType) SetCateringStatusType(v CateringStatusTypeType)`

SetCateringStatusType sets CateringStatusType field to given value.

### HasCateringStatusType

`func (o *EventDetailType) HasCateringStatusType() bool`

HasCateringStatusType returns a boolean if a field has been set.

### GetAttendees

`func (o *EventDetailType) GetAttendees() CateringEventsAttendeesType`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *EventDetailType) GetAttendeesOk() (*CateringEventsAttendeesType, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *EventDetailType) SetAttendees(v CateringEventsAttendeesType)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *EventDetailType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetMasterEventId

`func (o *EventDetailType) GetMasterEventId() UniqueIDType`

GetMasterEventId returns the MasterEventId field if non-nil, zero value otherwise.

### GetMasterEventIdOk

`func (o *EventDetailType) GetMasterEventIdOk() (*UniqueIDType, bool)`

GetMasterEventIdOk returns a tuple with the MasterEventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEventId

`func (o *EventDetailType) SetMasterEventId(v UniqueIDType)`

SetMasterEventId sets MasterEventId field to given value.

### HasMasterEventId

`func (o *EventDetailType) HasMasterEventId() bool`

HasMasterEventId returns a boolean if a field has been set.

### GetDoorcard

`func (o *EventDetailType) GetDoorcard() string`

GetDoorcard returns the Doorcard field if non-nil, zero value otherwise.

### GetDoorcardOk

`func (o *EventDetailType) GetDoorcardOk() (*string, bool)`

GetDoorcardOk returns a tuple with the Doorcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoorcard

`func (o *EventDetailType) SetDoorcard(v string)`

SetDoorcard sets Doorcard field to given value.

### HasDoorcard

`func (o *EventDetailType) HasDoorcard() bool`

HasDoorcard returns a boolean if a field has been set.

### GetEventLink

`func (o *EventDetailType) GetEventLink() CateringEventLinkType`

GetEventLink returns the EventLink field if non-nil, zero value otherwise.

### GetEventLinkOk

`func (o *EventDetailType) GetEventLinkOk() (*CateringEventLinkType, bool)`

GetEventLinkOk returns a tuple with the EventLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventLink

`func (o *EventDetailType) SetEventLink(v CateringEventLinkType)`

SetEventLink sets EventLink field to given value.

### HasEventLink

`func (o *EventDetailType) HasEventLink() bool`

HasEventLink returns a boolean if a field has been set.

### GetInactiveDate

`func (o *EventDetailType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *EventDetailType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *EventDetailType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *EventDetailType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetPackageId

`func (o *EventDetailType) GetPackageId() int32`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *EventDetailType) GetPackageIdOk() (*int32, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *EventDetailType) SetPackageId(v int32)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *EventDetailType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetPackageCode

`func (o *EventDetailType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *EventDetailType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *EventDetailType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *EventDetailType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetPackageName

`func (o *EventDetailType) GetPackageName() string`

GetPackageName returns the PackageName field if non-nil, zero value otherwise.

### GetPackageNameOk

`func (o *EventDetailType) GetPackageNameOk() (*string, bool)`

GetPackageNameOk returns a tuple with the PackageName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageName

`func (o *EventDetailType) SetPackageName(v string)`

SetPackageName sets PackageName field to given value.

### HasPackageName

`func (o *EventDetailType) HasPackageName() bool`

HasPackageName returns a boolean if a field has been set.

### GetMasterEvent

`func (o *EventDetailType) GetMasterEvent() bool`

GetMasterEvent returns the MasterEvent field if non-nil, zero value otherwise.

### GetMasterEventOk

`func (o *EventDetailType) GetMasterEventOk() (*bool, bool)`

GetMasterEventOk returns a tuple with the MasterEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterEvent

`func (o *EventDetailType) SetMasterEvent(v bool)`

SetMasterEvent sets MasterEvent field to given value.

### HasMasterEvent

`func (o *EventDetailType) HasMasterEvent() bool`

HasMasterEvent returns a boolean if a field has been set.

### GetSubEvent

`func (o *EventDetailType) GetSubEvent() bool`

GetSubEvent returns the SubEvent field if non-nil, zero value otherwise.

### GetSubEventOk

`func (o *EventDetailType) GetSubEventOk() (*bool, bool)`

GetSubEventOk returns a tuple with the SubEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubEvent

`func (o *EventDetailType) SetSubEvent(v bool)`

SetSubEvent sets SubEvent field to given value.

### HasSubEvent

`func (o *EventDetailType) HasSubEvent() bool`

HasSubEvent returns a boolean if a field has been set.

### GetPackageEvent

`func (o *EventDetailType) GetPackageEvent() bool`

GetPackageEvent returns the PackageEvent field if non-nil, zero value otherwise.

### GetPackageEventOk

`func (o *EventDetailType) GetPackageEventOk() (*bool, bool)`

GetPackageEventOk returns a tuple with the PackageEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageEvent

`func (o *EventDetailType) SetPackageEvent(v bool)`

SetPackageEvent sets PackageEvent field to given value.

### HasPackageEvent

`func (o *EventDetailType) HasPackageEvent() bool`

HasPackageEvent returns a boolean if a field has been set.

### GetAlternateEvent

`func (o *EventDetailType) GetAlternateEvent() bool`

GetAlternateEvent returns the AlternateEvent field if non-nil, zero value otherwise.

### GetAlternateEventOk

`func (o *EventDetailType) GetAlternateEventOk() (*bool, bool)`

GetAlternateEventOk returns a tuple with the AlternateEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateEvent

`func (o *EventDetailType) SetAlternateEvent(v bool)`

SetAlternateEvent sets AlternateEvent field to given value.

### HasAlternateEvent

`func (o *EventDetailType) HasAlternateEvent() bool`

HasAlternateEvent returns a boolean if a field has been set.

### GetWaitlisted

`func (o *EventDetailType) GetWaitlisted() bool`

GetWaitlisted returns the Waitlisted field if non-nil, zero value otherwise.

### GetWaitlistedOk

`func (o *EventDetailType) GetWaitlistedOk() (*bool, bool)`

GetWaitlistedOk returns a tuple with the Waitlisted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWaitlisted

`func (o *EventDetailType) SetWaitlisted(v bool)`

SetWaitlisted sets Waitlisted field to given value.

### HasWaitlisted

`func (o *EventDetailType) HasWaitlisted() bool`

HasWaitlisted returns a boolean if a field has been set.

### GetNotMoveable

`func (o *EventDetailType) GetNotMoveable() bool`

GetNotMoveable returns the NotMoveable field if non-nil, zero value otherwise.

### GetNotMoveableOk

`func (o *EventDetailType) GetNotMoveableOk() (*bool, bool)`

GetNotMoveableOk returns a tuple with the NotMoveable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotMoveable

`func (o *EventDetailType) SetNotMoveable(v bool)`

SetNotMoveable sets NotMoveable field to given value.

### HasNotMoveable

`func (o *EventDetailType) HasNotMoveable() bool`

HasNotMoveable returns a boolean if a field has been set.

### GetLoudEvent

`func (o *EventDetailType) GetLoudEvent() bool`

GetLoudEvent returns the LoudEvent field if non-nil, zero value otherwise.

### GetLoudEventOk

`func (o *EventDetailType) GetLoudEventOk() (*bool, bool)`

GetLoudEventOk returns a tuple with the LoudEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoudEvent

`func (o *EventDetailType) SetLoudEvent(v bool)`

SetLoudEvent sets LoudEvent field to given value.

### HasLoudEvent

`func (o *EventDetailType) HasLoudEvent() bool`

HasLoudEvent returns a boolean if a field has been set.

### GetHasPostings

`func (o *EventDetailType) GetHasPostings() bool`

GetHasPostings returns the HasPostings field if non-nil, zero value otherwise.

### GetHasPostingsOk

`func (o *EventDetailType) GetHasPostingsOk() (*bool, bool)`

GetHasPostingsOk returns a tuple with the HasPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPostings

`func (o *EventDetailType) SetHasPostings(v bool)`

SetHasPostings sets HasPostings field to given value.

### HasHasPostings

`func (o *EventDetailType) HasHasPostings() bool`

HasHasPostings returns a boolean if a field has been set.

### GetDisplayDoorcard

`func (o *EventDetailType) GetDisplayDoorcard() bool`

GetDisplayDoorcard returns the DisplayDoorcard field if non-nil, zero value otherwise.

### GetDisplayDoorcardOk

`func (o *EventDetailType) GetDisplayDoorcardOk() (*bool, bool)`

GetDisplayDoorcardOk returns a tuple with the DisplayDoorcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayDoorcard

`func (o *EventDetailType) SetDisplayDoorcard(v bool)`

SetDisplayDoorcard sets DisplayDoorcard field to given value.

### HasDisplayDoorcard

`func (o *EventDetailType) HasDisplayDoorcard() bool`

HasDisplayDoorcard returns a boolean if a field has been set.

### GetCateringDeductInventory

`func (o *EventDetailType) GetCateringDeductInventory() bool`

GetCateringDeductInventory returns the CateringDeductInventory field if non-nil, zero value otherwise.

### GetCateringDeductInventoryOk

`func (o *EventDetailType) GetCateringDeductInventoryOk() (*bool, bool)`

GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringDeductInventory

`func (o *EventDetailType) SetCateringDeductInventory(v bool)`

SetCateringDeductInventory sets CateringDeductInventory field to given value.

### HasCateringDeductInventory

`func (o *EventDetailType) HasCateringDeductInventory() bool`

HasCateringDeductInventory returns a boolean if a field has been set.

### GetEventShared

`func (o *EventDetailType) GetEventShared() bool`

GetEventShared returns the EventShared field if non-nil, zero value otherwise.

### GetEventSharedOk

`func (o *EventDetailType) GetEventSharedOk() (*bool, bool)`

GetEventSharedOk returns a tuple with the EventShared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventShared

`func (o *EventDetailType) SetEventShared(v bool)`

SetEventShared sets EventShared field to given value.

### HasEventShared

`func (o *EventDetailType) HasEventShared() bool`

HasEventShared returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *EventDetailType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *EventDetailType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *EventDetailType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *EventDetailType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *EventDetailType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *EventDetailType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *EventDetailType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *EventDetailType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *EventDetailType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *EventDetailType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *EventDetailType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *EventDetailType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *EventDetailType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *EventDetailType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *EventDetailType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *EventDetailType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *EventDetailType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *EventDetailType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *EventDetailType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *EventDetailType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetIncludeSpaceInPackage

`func (o *EventDetailType) GetIncludeSpaceInPackage() bool`

GetIncludeSpaceInPackage returns the IncludeSpaceInPackage field if non-nil, zero value otherwise.

### GetIncludeSpaceInPackageOk

`func (o *EventDetailType) GetIncludeSpaceInPackageOk() (*bool, bool)`

GetIncludeSpaceInPackageOk returns a tuple with the IncludeSpaceInPackage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSpaceInPackage

`func (o *EventDetailType) SetIncludeSpaceInPackage(v bool)`

SetIncludeSpaceInPackage sets IncludeSpaceInPackage field to given value.

### HasIncludeSpaceInPackage

`func (o *EventDetailType) HasIncludeSpaceInPackage() bool`

HasIncludeSpaceInPackage returns a boolean if a field has been set.

### GetEventLevelRevenueActualization

`func (o *EventDetailType) GetEventLevelRevenueActualization() bool`

GetEventLevelRevenueActualization returns the EventLevelRevenueActualization field if non-nil, zero value otherwise.

### GetEventLevelRevenueActualizationOk

`func (o *EventDetailType) GetEventLevelRevenueActualizationOk() (*bool, bool)`

GetEventLevelRevenueActualizationOk returns a tuple with the EventLevelRevenueActualization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventLevelRevenueActualization

`func (o *EventDetailType) SetEventLevelRevenueActualization(v bool)`

SetEventLevelRevenueActualization sets EventLevelRevenueActualization field to given value.

### HasEventLevelRevenueActualization

`func (o *EventDetailType) HasEventLevelRevenueActualization() bool`

HasEventLevelRevenueActualization returns a boolean if a field has been set.

### GetExternalURL

`func (o *EventDetailType) GetExternalURL() string`

GetExternalURL returns the ExternalURL field if non-nil, zero value otherwise.

### GetExternalURLOk

`func (o *EventDetailType) GetExternalURLOk() (*string, bool)`

GetExternalURLOk returns a tuple with the ExternalURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalURL

`func (o *EventDetailType) SetExternalURL(v string)`

SetExternalURL sets ExternalURL field to given value.

### HasExternalURL

`func (o *EventDetailType) HasExternalURL() bool`

HasExternalURL returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


