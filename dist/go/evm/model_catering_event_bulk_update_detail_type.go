/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the CateringEventBulkUpdateDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringEventBulkUpdateDetailType{}

// CateringEventBulkUpdateDetailType Catering Event detail type.
type CateringEventBulkUpdateDetailType struct {
	// Number of actual attendees attending the event.
	ActualAttendees *int32 `json:"actualAttendees,omitempty"`
	// Indicates whether the doorcard information is displayed.
	DisplayDoorcard *bool `json:"displayDoorcard,omitempty"`
	// Group details to display on the outside of a meeting functionSpaceDetails.
	Doorcard *string `json:"doorcard,omitempty"`
	// Event eventEndDate date.
	EventEndDate *string `json:"eventEndDate,omitempty"`
	// Event eventEndDate time.
	EventEndTime *string `json:"eventEndTime,omitempty"`
	EventName *TranslationTextType60 `json:"eventName,omitempty"`
	// Event eventStartDate date.
	EventStartDate *string `json:"eventStartDate,omitempty"`
	// Event eventStartDate time.
	EventStartTime *string `json:"eventStartTime,omitempty"`
	EventStatus *BookingStatusType `json:"eventStatus,omitempty"`
	// Type of event.
	EventType *string `json:"eventType,omitempty"`
	// Indicates whether the event is excluded from forecast reports.
	Exclude *bool `json:"exclude,omitempty"`
	// Number of expected attendees for the event.
	ExpectedAttendees *int32 `json:"expectedAttendees,omitempty"`
	// Number of guaranteed attendees for the event.
	GuaranteedAttendees *int32 `json:"guaranteedAttendees,omitempty"`
	// Indicates whether the event is expected to be noisy and might possibly disturb other events.
	LoudEvent *bool `json:"loudEvent,omitempty"`
	// Indicates whether event dates and functionSpaceDetails are move able.
	NotMoveable *bool `json:"notMoveable,omitempty"`
	// Flag that indicates if actual revenue can be manually edited.
	RevenueActualization *bool `json:"revenueActualization,omitempty"`
	// Indicates whether the event revenue has to be forecasted.
	UseForecast *bool `json:"useForecast,omitempty"`
}

// NewCateringEventBulkUpdateDetailType instantiates a new CateringEventBulkUpdateDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringEventBulkUpdateDetailType() *CateringEventBulkUpdateDetailType {
	this := CateringEventBulkUpdateDetailType{}
	return &this
}

// NewCateringEventBulkUpdateDetailTypeWithDefaults instantiates a new CateringEventBulkUpdateDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringEventBulkUpdateDetailTypeWithDefaults() *CateringEventBulkUpdateDetailType {
	this := CateringEventBulkUpdateDetailType{}
	return &this
}

// GetActualAttendees returns the ActualAttendees field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetActualAttendees() int32 {
	if o == nil || IsNil(o.ActualAttendees) {
		var ret int32
		return ret
	}
	return *o.ActualAttendees
}

// GetActualAttendeesOk returns a tuple with the ActualAttendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetActualAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.ActualAttendees) {
		return nil, false
	}
	return o.ActualAttendees, true
}

// HasActualAttendees returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasActualAttendees() bool {
	if o != nil && !IsNil(o.ActualAttendees) {
		return true
	}

	return false
}

// SetActualAttendees gets a reference to the given int32 and assigns it to the ActualAttendees field.
func (o *CateringEventBulkUpdateDetailType) SetActualAttendees(v int32) {
	o.ActualAttendees = &v
}

// GetDisplayDoorcard returns the DisplayDoorcard field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetDisplayDoorcard() bool {
	if o == nil || IsNil(o.DisplayDoorcard) {
		var ret bool
		return ret
	}
	return *o.DisplayDoorcard
}

// GetDisplayDoorcardOk returns a tuple with the DisplayDoorcard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetDisplayDoorcardOk() (*bool, bool) {
	if o == nil || IsNil(o.DisplayDoorcard) {
		return nil, false
	}
	return o.DisplayDoorcard, true
}

// HasDisplayDoorcard returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasDisplayDoorcard() bool {
	if o != nil && !IsNil(o.DisplayDoorcard) {
		return true
	}

	return false
}

// SetDisplayDoorcard gets a reference to the given bool and assigns it to the DisplayDoorcard field.
func (o *CateringEventBulkUpdateDetailType) SetDisplayDoorcard(v bool) {
	o.DisplayDoorcard = &v
}

// GetDoorcard returns the Doorcard field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetDoorcard() string {
	if o == nil || IsNil(o.Doorcard) {
		var ret string
		return ret
	}
	return *o.Doorcard
}

// GetDoorcardOk returns a tuple with the Doorcard field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetDoorcardOk() (*string, bool) {
	if o == nil || IsNil(o.Doorcard) {
		return nil, false
	}
	return o.Doorcard, true
}

// HasDoorcard returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasDoorcard() bool {
	if o != nil && !IsNil(o.Doorcard) {
		return true
	}

	return false
}

// SetDoorcard gets a reference to the given string and assigns it to the Doorcard field.
func (o *CateringEventBulkUpdateDetailType) SetDoorcard(v string) {
	o.Doorcard = &v
}

// GetEventEndDate returns the EventEndDate field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventEndDate() string {
	if o == nil || IsNil(o.EventEndDate) {
		var ret string
		return ret
	}
	return *o.EventEndDate
}

// GetEventEndDateOk returns a tuple with the EventEndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EventEndDate) {
		return nil, false
	}
	return o.EventEndDate, true
}

// HasEventEndDate returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventEndDate() bool {
	if o != nil && !IsNil(o.EventEndDate) {
		return true
	}

	return false
}

// SetEventEndDate gets a reference to the given string and assigns it to the EventEndDate field.
func (o *CateringEventBulkUpdateDetailType) SetEventEndDate(v string) {
	o.EventEndDate = &v
}

// GetEventEndTime returns the EventEndTime field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventEndTime() string {
	if o == nil || IsNil(o.EventEndTime) {
		var ret string
		return ret
	}
	return *o.EventEndTime
}

// GetEventEndTimeOk returns a tuple with the EventEndTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventEndTimeOk() (*string, bool) {
	if o == nil || IsNil(o.EventEndTime) {
		return nil, false
	}
	return o.EventEndTime, true
}

// HasEventEndTime returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventEndTime() bool {
	if o != nil && !IsNil(o.EventEndTime) {
		return true
	}

	return false
}

// SetEventEndTime gets a reference to the given string and assigns it to the EventEndTime field.
func (o *CateringEventBulkUpdateDetailType) SetEventEndTime(v string) {
	o.EventEndTime = &v
}

// GetEventName returns the EventName field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventName() TranslationTextType60 {
	if o == nil || IsNil(o.EventName) {
		var ret TranslationTextType60
		return ret
	}
	return *o.EventName
}

// GetEventNameOk returns a tuple with the EventName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventNameOk() (*TranslationTextType60, bool) {
	if o == nil || IsNil(o.EventName) {
		return nil, false
	}
	return o.EventName, true
}

// HasEventName returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventName() bool {
	if o != nil && !IsNil(o.EventName) {
		return true
	}

	return false
}

// SetEventName gets a reference to the given TranslationTextType60 and assigns it to the EventName field.
func (o *CateringEventBulkUpdateDetailType) SetEventName(v TranslationTextType60) {
	o.EventName = &v
}

// GetEventStartDate returns the EventStartDate field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventStartDate() string {
	if o == nil || IsNil(o.EventStartDate) {
		var ret string
		return ret
	}
	return *o.EventStartDate
}

// GetEventStartDateOk returns a tuple with the EventStartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.EventStartDate) {
		return nil, false
	}
	return o.EventStartDate, true
}

// HasEventStartDate returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventStartDate() bool {
	if o != nil && !IsNil(o.EventStartDate) {
		return true
	}

	return false
}

// SetEventStartDate gets a reference to the given string and assigns it to the EventStartDate field.
func (o *CateringEventBulkUpdateDetailType) SetEventStartDate(v string) {
	o.EventStartDate = &v
}

// GetEventStartTime returns the EventStartTime field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventStartTime() string {
	if o == nil || IsNil(o.EventStartTime) {
		var ret string
		return ret
	}
	return *o.EventStartTime
}

// GetEventStartTimeOk returns a tuple with the EventStartTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventStartTimeOk() (*string, bool) {
	if o == nil || IsNil(o.EventStartTime) {
		return nil, false
	}
	return o.EventStartTime, true
}

// HasEventStartTime returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventStartTime() bool {
	if o != nil && !IsNil(o.EventStartTime) {
		return true
	}

	return false
}

// SetEventStartTime gets a reference to the given string and assigns it to the EventStartTime field.
func (o *CateringEventBulkUpdateDetailType) SetEventStartTime(v string) {
	o.EventStartTime = &v
}

// GetEventStatus returns the EventStatus field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventStatus() BookingStatusType {
	if o == nil || IsNil(o.EventStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.EventStatus
}

// GetEventStatusOk returns a tuple with the EventStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.EventStatus) {
		return nil, false
	}
	return o.EventStatus, true
}

// HasEventStatus returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventStatus() bool {
	if o != nil && !IsNil(o.EventStatus) {
		return true
	}

	return false
}

// SetEventStatus gets a reference to the given BookingStatusType and assigns it to the EventStatus field.
func (o *CateringEventBulkUpdateDetailType) SetEventStatus(v BookingStatusType) {
	o.EventStatus = &v
}

// GetEventType returns the EventType field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetEventType() string {
	if o == nil || IsNil(o.EventType) {
		var ret string
		return ret
	}
	return *o.EventType
}

// GetEventTypeOk returns a tuple with the EventType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetEventTypeOk() (*string, bool) {
	if o == nil || IsNil(o.EventType) {
		return nil, false
	}
	return o.EventType, true
}

// HasEventType returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasEventType() bool {
	if o != nil && !IsNil(o.EventType) {
		return true
	}

	return false
}

// SetEventType gets a reference to the given string and assigns it to the EventType field.
func (o *CateringEventBulkUpdateDetailType) SetEventType(v string) {
	o.EventType = &v
}

// GetExclude returns the Exclude field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetExclude() bool {
	if o == nil || IsNil(o.Exclude) {
		var ret bool
		return ret
	}
	return *o.Exclude
}

// GetExcludeOk returns a tuple with the Exclude field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetExcludeOk() (*bool, bool) {
	if o == nil || IsNil(o.Exclude) {
		return nil, false
	}
	return o.Exclude, true
}

// HasExclude returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasExclude() bool {
	if o != nil && !IsNil(o.Exclude) {
		return true
	}

	return false
}

// SetExclude gets a reference to the given bool and assigns it to the Exclude field.
func (o *CateringEventBulkUpdateDetailType) SetExclude(v bool) {
	o.Exclude = &v
}

// GetExpectedAttendees returns the ExpectedAttendees field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetExpectedAttendees() int32 {
	if o == nil || IsNil(o.ExpectedAttendees) {
		var ret int32
		return ret
	}
	return *o.ExpectedAttendees
}

// GetExpectedAttendeesOk returns a tuple with the ExpectedAttendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetExpectedAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.ExpectedAttendees) {
		return nil, false
	}
	return o.ExpectedAttendees, true
}

// HasExpectedAttendees returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasExpectedAttendees() bool {
	if o != nil && !IsNil(o.ExpectedAttendees) {
		return true
	}

	return false
}

// SetExpectedAttendees gets a reference to the given int32 and assigns it to the ExpectedAttendees field.
func (o *CateringEventBulkUpdateDetailType) SetExpectedAttendees(v int32) {
	o.ExpectedAttendees = &v
}

// GetGuaranteedAttendees returns the GuaranteedAttendees field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetGuaranteedAttendees() int32 {
	if o == nil || IsNil(o.GuaranteedAttendees) {
		var ret int32
		return ret
	}
	return *o.GuaranteedAttendees
}

// GetGuaranteedAttendeesOk returns a tuple with the GuaranteedAttendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetGuaranteedAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.GuaranteedAttendees) {
		return nil, false
	}
	return o.GuaranteedAttendees, true
}

// HasGuaranteedAttendees returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasGuaranteedAttendees() bool {
	if o != nil && !IsNil(o.GuaranteedAttendees) {
		return true
	}

	return false
}

// SetGuaranteedAttendees gets a reference to the given int32 and assigns it to the GuaranteedAttendees field.
func (o *CateringEventBulkUpdateDetailType) SetGuaranteedAttendees(v int32) {
	o.GuaranteedAttendees = &v
}

// GetLoudEvent returns the LoudEvent field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetLoudEvent() bool {
	if o == nil || IsNil(o.LoudEvent) {
		var ret bool
		return ret
	}
	return *o.LoudEvent
}

// GetLoudEventOk returns a tuple with the LoudEvent field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetLoudEventOk() (*bool, bool) {
	if o == nil || IsNil(o.LoudEvent) {
		return nil, false
	}
	return o.LoudEvent, true
}

// HasLoudEvent returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasLoudEvent() bool {
	if o != nil && !IsNil(o.LoudEvent) {
		return true
	}

	return false
}

// SetLoudEvent gets a reference to the given bool and assigns it to the LoudEvent field.
func (o *CateringEventBulkUpdateDetailType) SetLoudEvent(v bool) {
	o.LoudEvent = &v
}

// GetNotMoveable returns the NotMoveable field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetNotMoveable() bool {
	if o == nil || IsNil(o.NotMoveable) {
		var ret bool
		return ret
	}
	return *o.NotMoveable
}

// GetNotMoveableOk returns a tuple with the NotMoveable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetNotMoveableOk() (*bool, bool) {
	if o == nil || IsNil(o.NotMoveable) {
		return nil, false
	}
	return o.NotMoveable, true
}

// HasNotMoveable returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasNotMoveable() bool {
	if o != nil && !IsNil(o.NotMoveable) {
		return true
	}

	return false
}

// SetNotMoveable gets a reference to the given bool and assigns it to the NotMoveable field.
func (o *CateringEventBulkUpdateDetailType) SetNotMoveable(v bool) {
	o.NotMoveable = &v
}

// GetRevenueActualization returns the RevenueActualization field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetRevenueActualization() bool {
	if o == nil || IsNil(o.RevenueActualization) {
		var ret bool
		return ret
	}
	return *o.RevenueActualization
}

// GetRevenueActualizationOk returns a tuple with the RevenueActualization field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetRevenueActualizationOk() (*bool, bool) {
	if o == nil || IsNil(o.RevenueActualization) {
		return nil, false
	}
	return o.RevenueActualization, true
}

// HasRevenueActualization returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasRevenueActualization() bool {
	if o != nil && !IsNil(o.RevenueActualization) {
		return true
	}

	return false
}

// SetRevenueActualization gets a reference to the given bool and assigns it to the RevenueActualization field.
func (o *CateringEventBulkUpdateDetailType) SetRevenueActualization(v bool) {
	o.RevenueActualization = &v
}

// GetUseForecast returns the UseForecast field value if set, zero value otherwise.
func (o *CateringEventBulkUpdateDetailType) GetUseForecast() bool {
	if o == nil || IsNil(o.UseForecast) {
		var ret bool
		return ret
	}
	return *o.UseForecast
}

// GetUseForecastOk returns a tuple with the UseForecast field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringEventBulkUpdateDetailType) GetUseForecastOk() (*bool, bool) {
	if o == nil || IsNil(o.UseForecast) {
		return nil, false
	}
	return o.UseForecast, true
}

// HasUseForecast returns a boolean if a field has been set.
func (o *CateringEventBulkUpdateDetailType) HasUseForecast() bool {
	if o != nil && !IsNil(o.UseForecast) {
		return true
	}

	return false
}

// SetUseForecast gets a reference to the given bool and assigns it to the UseForecast field.
func (o *CateringEventBulkUpdateDetailType) SetUseForecast(v bool) {
	o.UseForecast = &v
}

func (o CateringEventBulkUpdateDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringEventBulkUpdateDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActualAttendees) {
		toSerialize["actualAttendees"] = o.ActualAttendees
	}
	if !IsNil(o.DisplayDoorcard) {
		toSerialize["displayDoorcard"] = o.DisplayDoorcard
	}
	if !IsNil(o.Doorcard) {
		toSerialize["doorcard"] = o.Doorcard
	}
	if !IsNil(o.EventEndDate) {
		toSerialize["eventEndDate"] = o.EventEndDate
	}
	if !IsNil(o.EventEndTime) {
		toSerialize["eventEndTime"] = o.EventEndTime
	}
	if !IsNil(o.EventName) {
		toSerialize["eventName"] = o.EventName
	}
	if !IsNil(o.EventStartDate) {
		toSerialize["eventStartDate"] = o.EventStartDate
	}
	if !IsNil(o.EventStartTime) {
		toSerialize["eventStartTime"] = o.EventStartTime
	}
	if !IsNil(o.EventStatus) {
		toSerialize["eventStatus"] = o.EventStatus
	}
	if !IsNil(o.EventType) {
		toSerialize["eventType"] = o.EventType
	}
	if !IsNil(o.Exclude) {
		toSerialize["exclude"] = o.Exclude
	}
	if !IsNil(o.ExpectedAttendees) {
		toSerialize["expectedAttendees"] = o.ExpectedAttendees
	}
	if !IsNil(o.GuaranteedAttendees) {
		toSerialize["guaranteedAttendees"] = o.GuaranteedAttendees
	}
	if !IsNil(o.LoudEvent) {
		toSerialize["loudEvent"] = o.LoudEvent
	}
	if !IsNil(o.NotMoveable) {
		toSerialize["notMoveable"] = o.NotMoveable
	}
	if !IsNil(o.RevenueActualization) {
		toSerialize["revenueActualization"] = o.RevenueActualization
	}
	if !IsNil(o.UseForecast) {
		toSerialize["useForecast"] = o.UseForecast
	}
	return toSerialize, nil
}

type NullableCateringEventBulkUpdateDetailType struct {
	value *CateringEventBulkUpdateDetailType
	isSet bool
}

func (v NullableCateringEventBulkUpdateDetailType) Get() *CateringEventBulkUpdateDetailType {
	return v.value
}

func (v *NullableCateringEventBulkUpdateDetailType) Set(val *CateringEventBulkUpdateDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringEventBulkUpdateDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringEventBulkUpdateDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringEventBulkUpdateDetailType(val *CateringEventBulkUpdateDetailType) *NullableCateringEventBulkUpdateDetailType {
	return &NullableCateringEventBulkUpdateDetailType{value: val, isSet: true}
}

func (v NullableCateringEventBulkUpdateDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringEventBulkUpdateDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


