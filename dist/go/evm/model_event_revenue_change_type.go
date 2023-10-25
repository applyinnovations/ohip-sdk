/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the EventRevenueChangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EventRevenueChangeType{}

// EventRevenueChangeType struct for EventRevenueChangeType
type EventRevenueChangeType struct {
	// Number of attendees for this event
	Attendees *int32 `json:"attendees,omitempty"`
	BlockId *UniqueIDType `json:"blockId,omitempty"`
	ChangeUserInfo *LogUserInfoType `json:"changeUserInfo,omitempty"`
	EventChangeId *UniqueIDType `json:"eventChangeId,omitempty"`
	// Date of this event
	EventDate *string `json:"eventDate,omitempty"`
	EventId *UniqueIDType `json:"eventId,omitempty"`
	// Status of this event
	EventStatus *string `json:"eventStatus,omitempty"`
	RevenueChange *EventRevenueType `json:"revenueChange,omitempty"`
}

// NewEventRevenueChangeType instantiates a new EventRevenueChangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEventRevenueChangeType() *EventRevenueChangeType {
	this := EventRevenueChangeType{}
	return &this
}

// NewEventRevenueChangeTypeWithDefaults instantiates a new EventRevenueChangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEventRevenueChangeTypeWithDefaults() *EventRevenueChangeType {
	this := EventRevenueChangeType{}
	return &this
}

// GetAttendees returns the Attendees field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetAttendees() int32 {
	if o == nil || IsNil(o.Attendees) {
		var ret int32
		return ret
	}
	return *o.Attendees
}

// GetAttendeesOk returns a tuple with the Attendees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetAttendeesOk() (*int32, bool) {
	if o == nil || IsNil(o.Attendees) {
		return nil, false
	}
	return o.Attendees, true
}

// HasAttendees returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasAttendees() bool {
	if o != nil && !IsNil(o.Attendees) {
		return true
	}

	return false
}

// SetAttendees gets a reference to the given int32 and assigns it to the Attendees field.
func (o *EventRevenueChangeType) SetAttendees(v int32) {
	o.Attendees = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetBlockId() UniqueIDType {
	if o == nil || IsNil(o.BlockId) {
		var ret UniqueIDType
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetBlockIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given UniqueIDType and assigns it to the BlockId field.
func (o *EventRevenueChangeType) SetBlockId(v UniqueIDType) {
	o.BlockId = &v
}

// GetChangeUserInfo returns the ChangeUserInfo field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetChangeUserInfo() LogUserInfoType {
	if o == nil || IsNil(o.ChangeUserInfo) {
		var ret LogUserInfoType
		return ret
	}
	return *o.ChangeUserInfo
}

// GetChangeUserInfoOk returns a tuple with the ChangeUserInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetChangeUserInfoOk() (*LogUserInfoType, bool) {
	if o == nil || IsNil(o.ChangeUserInfo) {
		return nil, false
	}
	return o.ChangeUserInfo, true
}

// HasChangeUserInfo returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasChangeUserInfo() bool {
	if o != nil && !IsNil(o.ChangeUserInfo) {
		return true
	}

	return false
}

// SetChangeUserInfo gets a reference to the given LogUserInfoType and assigns it to the ChangeUserInfo field.
func (o *EventRevenueChangeType) SetChangeUserInfo(v LogUserInfoType) {
	o.ChangeUserInfo = &v
}

// GetEventChangeId returns the EventChangeId field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetEventChangeId() UniqueIDType {
	if o == nil || IsNil(o.EventChangeId) {
		var ret UniqueIDType
		return ret
	}
	return *o.EventChangeId
}

// GetEventChangeIdOk returns a tuple with the EventChangeId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetEventChangeIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.EventChangeId) {
		return nil, false
	}
	return o.EventChangeId, true
}

// HasEventChangeId returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasEventChangeId() bool {
	if o != nil && !IsNil(o.EventChangeId) {
		return true
	}

	return false
}

// SetEventChangeId gets a reference to the given UniqueIDType and assigns it to the EventChangeId field.
func (o *EventRevenueChangeType) SetEventChangeId(v UniqueIDType) {
	o.EventChangeId = &v
}

// GetEventDate returns the EventDate field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetEventDate() string {
	if o == nil || IsNil(o.EventDate) {
		var ret string
		return ret
	}
	return *o.EventDate
}

// GetEventDateOk returns a tuple with the EventDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetEventDateOk() (*string, bool) {
	if o == nil || IsNil(o.EventDate) {
		return nil, false
	}
	return o.EventDate, true
}

// HasEventDate returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasEventDate() bool {
	if o != nil && !IsNil(o.EventDate) {
		return true
	}

	return false
}

// SetEventDate gets a reference to the given string and assigns it to the EventDate field.
func (o *EventRevenueChangeType) SetEventDate(v string) {
	o.EventDate = &v
}

// GetEventId returns the EventId field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetEventId() UniqueIDType {
	if o == nil || IsNil(o.EventId) {
		var ret UniqueIDType
		return ret
	}
	return *o.EventId
}

// GetEventIdOk returns a tuple with the EventId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetEventIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.EventId) {
		return nil, false
	}
	return o.EventId, true
}

// HasEventId returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasEventId() bool {
	if o != nil && !IsNil(o.EventId) {
		return true
	}

	return false
}

// SetEventId gets a reference to the given UniqueIDType and assigns it to the EventId field.
func (o *EventRevenueChangeType) SetEventId(v UniqueIDType) {
	o.EventId = &v
}

// GetEventStatus returns the EventStatus field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetEventStatus() string {
	if o == nil || IsNil(o.EventStatus) {
		var ret string
		return ret
	}
	return *o.EventStatus
}

// GetEventStatusOk returns a tuple with the EventStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetEventStatusOk() (*string, bool) {
	if o == nil || IsNil(o.EventStatus) {
		return nil, false
	}
	return o.EventStatus, true
}

// HasEventStatus returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasEventStatus() bool {
	if o != nil && !IsNil(o.EventStatus) {
		return true
	}

	return false
}

// SetEventStatus gets a reference to the given string and assigns it to the EventStatus field.
func (o *EventRevenueChangeType) SetEventStatus(v string) {
	o.EventStatus = &v
}

// GetRevenueChange returns the RevenueChange field value if set, zero value otherwise.
func (o *EventRevenueChangeType) GetRevenueChange() EventRevenueType {
	if o == nil || IsNil(o.RevenueChange) {
		var ret EventRevenueType
		return ret
	}
	return *o.RevenueChange
}

// GetRevenueChangeOk returns a tuple with the RevenueChange field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EventRevenueChangeType) GetRevenueChangeOk() (*EventRevenueType, bool) {
	if o == nil || IsNil(o.RevenueChange) {
		return nil, false
	}
	return o.RevenueChange, true
}

// HasRevenueChange returns a boolean if a field has been set.
func (o *EventRevenueChangeType) HasRevenueChange() bool {
	if o != nil && !IsNil(o.RevenueChange) {
		return true
	}

	return false
}

// SetRevenueChange gets a reference to the given EventRevenueType and assigns it to the RevenueChange field.
func (o *EventRevenueChangeType) SetRevenueChange(v EventRevenueType) {
	o.RevenueChange = &v
}

func (o EventRevenueChangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EventRevenueChangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Attendees) {
		toSerialize["attendees"] = o.Attendees
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.ChangeUserInfo) {
		toSerialize["changeUserInfo"] = o.ChangeUserInfo
	}
	if !IsNil(o.EventChangeId) {
		toSerialize["eventChangeId"] = o.EventChangeId
	}
	if !IsNil(o.EventDate) {
		toSerialize["eventDate"] = o.EventDate
	}
	if !IsNil(o.EventId) {
		toSerialize["eventId"] = o.EventId
	}
	if !IsNil(o.EventStatus) {
		toSerialize["eventStatus"] = o.EventStatus
	}
	if !IsNil(o.RevenueChange) {
		toSerialize["revenueChange"] = o.RevenueChange
	}
	return toSerialize, nil
}

type NullableEventRevenueChangeType struct {
	value *EventRevenueChangeType
	isSet bool
}

func (v NullableEventRevenueChangeType) Get() *EventRevenueChangeType {
	return v.value
}

func (v *NullableEventRevenueChangeType) Set(val *EventRevenueChangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableEventRevenueChangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableEventRevenueChangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEventRevenueChangeType(val *EventRevenueChangeType) *NullableEventRevenueChangeType {
	return &NullableEventRevenueChangeType{value: val, isSet: true}
}

func (v NullableEventRevenueChangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEventRevenueChangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


