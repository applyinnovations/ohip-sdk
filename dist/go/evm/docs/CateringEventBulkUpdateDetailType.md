# CateringEventBulkUpdateDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActualAttendees** | Pointer to **int32** | Number of actual attendees attending the event. | [optional] 
**DisplayDoorcard** | Pointer to **bool** | Indicates whether the doorcard information is displayed. | [optional] 
**Doorcard** | Pointer to **string** | Group details to display on the outside of a meeting functionSpaceDetails. | [optional] 
**EventEndDate** | Pointer to **string** | Event eventEndDate date. | [optional] 
**EventEndTime** | Pointer to **string** | Event eventEndDate time. | [optional] 
**EventName** | Pointer to [**TranslationTextType60**](TranslationTextType60.md) |  | [optional] 
**EventStartDate** | Pointer to **string** | Event eventStartDate date. | [optional] 
**EventStartTime** | Pointer to **string** | Event eventStartDate time. | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**Exclude** | Pointer to **bool** | Indicates whether the event is excluded from forecast reports. | [optional] 
**ExpectedAttendees** | Pointer to **int32** | Number of expected attendees for the event. | [optional] 
**GuaranteedAttendees** | Pointer to **int32** | Number of guaranteed attendees for the event. | [optional] 
**LoudEvent** | Pointer to **bool** | Indicates whether the event is expected to be noisy and might possibly disturb other events. | [optional] 
**NotMoveable** | Pointer to **bool** | Indicates whether event dates and functionSpaceDetails are move able. | [optional] 
**RevenueActualization** | Pointer to **bool** | Flag that indicates if actual revenue can be manually edited. | [optional] 
**UseForecast** | Pointer to **bool** | Indicates whether the event revenue has to be forecasted. | [optional] 

## Methods

### NewCateringEventBulkUpdateDetailType

`func NewCateringEventBulkUpdateDetailType() *CateringEventBulkUpdateDetailType`

NewCateringEventBulkUpdateDetailType instantiates a new CateringEventBulkUpdateDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventBulkUpdateDetailTypeWithDefaults

`func NewCateringEventBulkUpdateDetailTypeWithDefaults() *CateringEventBulkUpdateDetailType`

NewCateringEventBulkUpdateDetailTypeWithDefaults instantiates a new CateringEventBulkUpdateDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActualAttendees

`func (o *CateringEventBulkUpdateDetailType) GetActualAttendees() int32`

GetActualAttendees returns the ActualAttendees field if non-nil, zero value otherwise.

### GetActualAttendeesOk

`func (o *CateringEventBulkUpdateDetailType) GetActualAttendeesOk() (*int32, bool)`

GetActualAttendeesOk returns a tuple with the ActualAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualAttendees

`func (o *CateringEventBulkUpdateDetailType) SetActualAttendees(v int32)`

SetActualAttendees sets ActualAttendees field to given value.

### HasActualAttendees

`func (o *CateringEventBulkUpdateDetailType) HasActualAttendees() bool`

HasActualAttendees returns a boolean if a field has been set.

### GetDisplayDoorcard

`func (o *CateringEventBulkUpdateDetailType) GetDisplayDoorcard() bool`

GetDisplayDoorcard returns the DisplayDoorcard field if non-nil, zero value otherwise.

### GetDisplayDoorcardOk

`func (o *CateringEventBulkUpdateDetailType) GetDisplayDoorcardOk() (*bool, bool)`

GetDisplayDoorcardOk returns a tuple with the DisplayDoorcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayDoorcard

`func (o *CateringEventBulkUpdateDetailType) SetDisplayDoorcard(v bool)`

SetDisplayDoorcard sets DisplayDoorcard field to given value.

### HasDisplayDoorcard

`func (o *CateringEventBulkUpdateDetailType) HasDisplayDoorcard() bool`

HasDisplayDoorcard returns a boolean if a field has been set.

### GetDoorcard

`func (o *CateringEventBulkUpdateDetailType) GetDoorcard() string`

GetDoorcard returns the Doorcard field if non-nil, zero value otherwise.

### GetDoorcardOk

`func (o *CateringEventBulkUpdateDetailType) GetDoorcardOk() (*string, bool)`

GetDoorcardOk returns a tuple with the Doorcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoorcard

`func (o *CateringEventBulkUpdateDetailType) SetDoorcard(v string)`

SetDoorcard sets Doorcard field to given value.

### HasDoorcard

`func (o *CateringEventBulkUpdateDetailType) HasDoorcard() bool`

HasDoorcard returns a boolean if a field has been set.

### GetEventEndDate

`func (o *CateringEventBulkUpdateDetailType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *CateringEventBulkUpdateDetailType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *CateringEventBulkUpdateDetailType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *CateringEventBulkUpdateDetailType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.

### GetEventEndTime

`func (o *CateringEventBulkUpdateDetailType) GetEventEndTime() string`

GetEventEndTime returns the EventEndTime field if non-nil, zero value otherwise.

### GetEventEndTimeOk

`func (o *CateringEventBulkUpdateDetailType) GetEventEndTimeOk() (*string, bool)`

GetEventEndTimeOk returns a tuple with the EventEndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndTime

`func (o *CateringEventBulkUpdateDetailType) SetEventEndTime(v string)`

SetEventEndTime sets EventEndTime field to given value.

### HasEventEndTime

`func (o *CateringEventBulkUpdateDetailType) HasEventEndTime() bool`

HasEventEndTime returns a boolean if a field has been set.

### GetEventName

`func (o *CateringEventBulkUpdateDetailType) GetEventName() TranslationTextType60`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CateringEventBulkUpdateDetailType) GetEventNameOk() (*TranslationTextType60, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CateringEventBulkUpdateDetailType) SetEventName(v TranslationTextType60)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CateringEventBulkUpdateDetailType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventStartDate

`func (o *CateringEventBulkUpdateDetailType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *CateringEventBulkUpdateDetailType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *CateringEventBulkUpdateDetailType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *CateringEventBulkUpdateDetailType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetEventStartTime

`func (o *CateringEventBulkUpdateDetailType) GetEventStartTime() string`

GetEventStartTime returns the EventStartTime field if non-nil, zero value otherwise.

### GetEventStartTimeOk

`func (o *CateringEventBulkUpdateDetailType) GetEventStartTimeOk() (*string, bool)`

GetEventStartTimeOk returns a tuple with the EventStartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartTime

`func (o *CateringEventBulkUpdateDetailType) SetEventStartTime(v string)`

SetEventStartTime sets EventStartTime field to given value.

### HasEventStartTime

`func (o *CateringEventBulkUpdateDetailType) HasEventStartTime() bool`

HasEventStartTime returns a boolean if a field has been set.

### GetEventStatus

`func (o *CateringEventBulkUpdateDetailType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *CateringEventBulkUpdateDetailType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *CateringEventBulkUpdateDetailType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *CateringEventBulkUpdateDetailType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetEventType

`func (o *CateringEventBulkUpdateDetailType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CateringEventBulkUpdateDetailType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CateringEventBulkUpdateDetailType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CateringEventBulkUpdateDetailType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetExclude

`func (o *CateringEventBulkUpdateDetailType) GetExclude() bool`

GetExclude returns the Exclude field if non-nil, zero value otherwise.

### GetExcludeOk

`func (o *CateringEventBulkUpdateDetailType) GetExcludeOk() (*bool, bool)`

GetExcludeOk returns a tuple with the Exclude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExclude

`func (o *CateringEventBulkUpdateDetailType) SetExclude(v bool)`

SetExclude sets Exclude field to given value.

### HasExclude

`func (o *CateringEventBulkUpdateDetailType) HasExclude() bool`

HasExclude returns a boolean if a field has been set.

### GetExpectedAttendees

`func (o *CateringEventBulkUpdateDetailType) GetExpectedAttendees() int32`

GetExpectedAttendees returns the ExpectedAttendees field if non-nil, zero value otherwise.

### GetExpectedAttendeesOk

`func (o *CateringEventBulkUpdateDetailType) GetExpectedAttendeesOk() (*int32, bool)`

GetExpectedAttendeesOk returns a tuple with the ExpectedAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpectedAttendees

`func (o *CateringEventBulkUpdateDetailType) SetExpectedAttendees(v int32)`

SetExpectedAttendees sets ExpectedAttendees field to given value.

### HasExpectedAttendees

`func (o *CateringEventBulkUpdateDetailType) HasExpectedAttendees() bool`

HasExpectedAttendees returns a boolean if a field has been set.

### GetGuaranteedAttendees

`func (o *CateringEventBulkUpdateDetailType) GetGuaranteedAttendees() int32`

GetGuaranteedAttendees returns the GuaranteedAttendees field if non-nil, zero value otherwise.

### GetGuaranteedAttendeesOk

`func (o *CateringEventBulkUpdateDetailType) GetGuaranteedAttendeesOk() (*int32, bool)`

GetGuaranteedAttendeesOk returns a tuple with the GuaranteedAttendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteedAttendees

`func (o *CateringEventBulkUpdateDetailType) SetGuaranteedAttendees(v int32)`

SetGuaranteedAttendees sets GuaranteedAttendees field to given value.

### HasGuaranteedAttendees

`func (o *CateringEventBulkUpdateDetailType) HasGuaranteedAttendees() bool`

HasGuaranteedAttendees returns a boolean if a field has been set.

### GetLoudEvent

`func (o *CateringEventBulkUpdateDetailType) GetLoudEvent() bool`

GetLoudEvent returns the LoudEvent field if non-nil, zero value otherwise.

### GetLoudEventOk

`func (o *CateringEventBulkUpdateDetailType) GetLoudEventOk() (*bool, bool)`

GetLoudEventOk returns a tuple with the LoudEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLoudEvent

`func (o *CateringEventBulkUpdateDetailType) SetLoudEvent(v bool)`

SetLoudEvent sets LoudEvent field to given value.

### HasLoudEvent

`func (o *CateringEventBulkUpdateDetailType) HasLoudEvent() bool`

HasLoudEvent returns a boolean if a field has been set.

### GetNotMoveable

`func (o *CateringEventBulkUpdateDetailType) GetNotMoveable() bool`

GetNotMoveable returns the NotMoveable field if non-nil, zero value otherwise.

### GetNotMoveableOk

`func (o *CateringEventBulkUpdateDetailType) GetNotMoveableOk() (*bool, bool)`

GetNotMoveableOk returns a tuple with the NotMoveable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotMoveable

`func (o *CateringEventBulkUpdateDetailType) SetNotMoveable(v bool)`

SetNotMoveable sets NotMoveable field to given value.

### HasNotMoveable

`func (o *CateringEventBulkUpdateDetailType) HasNotMoveable() bool`

HasNotMoveable returns a boolean if a field has been set.

### GetRevenueActualization

`func (o *CateringEventBulkUpdateDetailType) GetRevenueActualization() bool`

GetRevenueActualization returns the RevenueActualization field if non-nil, zero value otherwise.

### GetRevenueActualizationOk

`func (o *CateringEventBulkUpdateDetailType) GetRevenueActualizationOk() (*bool, bool)`

GetRevenueActualizationOk returns a tuple with the RevenueActualization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueActualization

`func (o *CateringEventBulkUpdateDetailType) SetRevenueActualization(v bool)`

SetRevenueActualization sets RevenueActualization field to given value.

### HasRevenueActualization

`func (o *CateringEventBulkUpdateDetailType) HasRevenueActualization() bool`

HasRevenueActualization returns a boolean if a field has been set.

### GetUseForecast

`func (o *CateringEventBulkUpdateDetailType) GetUseForecast() bool`

GetUseForecast returns the UseForecast field if non-nil, zero value otherwise.

### GetUseForecastOk

`func (o *CateringEventBulkUpdateDetailType) GetUseForecastOk() (*bool, bool)`

GetUseForecastOk returns a tuple with the UseForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForecast

`func (o *CateringEventBulkUpdateDetailType) SetUseForecast(v bool)`

SetUseForecast sets UseForecast field to given value.

### HasUseForecast

`func (o *CateringEventBulkUpdateDetailType) HasUseForecast() bool`

HasUseForecast returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


