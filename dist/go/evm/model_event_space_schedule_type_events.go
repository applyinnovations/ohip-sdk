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

// checks if the EventSpaceScheduleTypeEvents type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventSpaceScheduleTypeEvents{}

// EventSpaceScheduleTypeEvents Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period.
type EventSpaceScheduleTypeEvents struct {
	// Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period.
	Event []CalendarEventInfoType `json:"event,omitempty"`
	// Collection of the Refernced event ids for the Function Space
	RelatedEvents *string `json:"relatedEvents,omitempty"`
}

// NewEventSpaceScheduleTypeEvents instantiates a new EventSpaceScheduleTypeEvents object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventSpaceScheduleTypeEvents() *EventSpaceScheduleTypeEvents {
	this := EventSpaceScheduleTypeEvents{}
	return &this
}

// NewEventSpaceScheduleTypeEventsWithDefaults instantiates a new EventSpaceScheduleTypeEvents object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventSpaceScheduleTypeEventsWithDefaults() *EventSpaceScheduleTypeEvents {
	this := EventSpaceScheduleTypeEvents{}
	return &this
}

// GetEvent returns the Event field value if set, zero value otherwise.
func (o *EventSpaceScheduleTypeEvents) GetEvent() []CalendarEventInfoType {
	if o == nil || IsNil(o.Event) {
		var ret []CalendarEventInfoType
		return ret
	}
	return o.Event
}

// GetEventOk returns a tuple with the Event field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventSpaceScheduleTypeEvents) GetEventOk() ([]CalendarEventInfoType, bool) {
	if o == nil || IsNil(o.Event) {
		return nil, false
	}
	return o.Event, true
}

// HasEvent returns a boolean if a field has been set.
func (o *EventSpaceScheduleTypeEvents) HasEvent() bool {
	if o != nil && !IsNil(o.Event) {
		return true
	}

	return false
}

// SetEvent gets a reference to the given []CalendarEventInfoType and assigns it to the Event field.
func (o *EventSpaceScheduleTypeEvents) SetEvent(v []CalendarEventInfoType) {
	o.Event = v
}

// GetRelatedEvents returns the RelatedEvents field value if set, zero value otherwise.
func (o *EventSpaceScheduleTypeEvents) GetRelatedEvents() string {
	if o == nil || IsNil(o.RelatedEvents) {
		var ret string
		return ret
	}
	return *o.RelatedEvents
}

// GetRelatedEventsOk returns a tuple with the RelatedEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventSpaceScheduleTypeEvents) GetRelatedEventsOk() (*string, bool) {
	if o == nil || IsNil(o.RelatedEvents) {
		return nil, false
	}
	return o.RelatedEvents, true
}

// HasRelatedEvents returns a boolean if a field has been set.
func (o *EventSpaceScheduleTypeEvents) HasRelatedEvents() bool {
	if o != nil && !IsNil(o.RelatedEvents) {
		return true
	}

	return false
}

// SetRelatedEvents gets a reference to the given string and assigns it to the RelatedEvents field.
func (o *EventSpaceScheduleTypeEvents) SetRelatedEvents(v string) {
	o.RelatedEvents = &v
}

func (o EventSpaceScheduleTypeEvents) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventSpaceScheduleTypeEvents) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Event) {
		toSerialize["event"] = o.Event
	}
	if !IsNil(o.RelatedEvents) {
		toSerialize["relatedEvents"] = o.RelatedEvents
	}
	return toSerialize, nil
}

type NullableEventSpaceScheduleTypeEvents struct {
	value *EventSpaceScheduleTypeEvents
	isSet bool
}

func (v NullableEventSpaceScheduleTypeEvents) Get() *EventSpaceScheduleTypeEvents {
	return v.value
}

func (v *NullableEventSpaceScheduleTypeEvents) Set(val *EventSpaceScheduleTypeEvents) {
	v.value = val
	v.isSet = true
}

func (v NullableEventSpaceScheduleTypeEvents) IsSet() bool {
	return v.isSet
}

func (v *NullableEventSpaceScheduleTypeEvents) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventSpaceScheduleTypeEvents(val *EventSpaceScheduleTypeEvents) *NullableEventSpaceScheduleTypeEvents {
	return &NullableEventSpaceScheduleTypeEvents{value: val, isSet: true}
}

func (v NullableEventSpaceScheduleTypeEvents) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventSpaceScheduleTypeEvents) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

