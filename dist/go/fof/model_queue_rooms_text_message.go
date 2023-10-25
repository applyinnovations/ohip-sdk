/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the QueueRoomsTextMessage type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &QueueRoomsTextMessage{}

// QueueRoomsTextMessage Response for delivering a text message via Queue Reservations (to a guest) or Queue Rush (to housekeeping).
type QueueRoomsTextMessage struct {
	GuestTextInfo *QueueTextInfoType `json:"guestTextInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewQueueRoomsTextMessage instantiates a new QueueRoomsTextMessage object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewQueueRoomsTextMessage() *QueueRoomsTextMessage {
	this := QueueRoomsTextMessage{}
	return &this
}

// NewQueueRoomsTextMessageWithDefaults instantiates a new QueueRoomsTextMessage object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewQueueRoomsTextMessageWithDefaults() *QueueRoomsTextMessage {
	this := QueueRoomsTextMessage{}
	return &this
}

// GetGuestTextInfo returns the GuestTextInfo field value if set, zero value otherwise.
func (o *QueueRoomsTextMessage) GetGuestTextInfo() QueueTextInfoType {
	if o == nil || IsNil(o.GuestTextInfo) {
		var ret QueueTextInfoType
		return ret
	}
	return *o.GuestTextInfo
}

// GetGuestTextInfoOk returns a tuple with the GuestTextInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QueueRoomsTextMessage) GetGuestTextInfoOk() (*QueueTextInfoType, bool) {
	if o == nil || IsNil(o.GuestTextInfo) {
		return nil, false
	}
	return o.GuestTextInfo, true
}

// HasGuestTextInfo returns a boolean if a field has been set.
func (o *QueueRoomsTextMessage) HasGuestTextInfo() bool {
	if o != nil && !IsNil(o.GuestTextInfo) {
		return true
	}

	return false
}

// SetGuestTextInfo gets a reference to the given QueueTextInfoType and assigns it to the GuestTextInfo field.
func (o *QueueRoomsTextMessage) SetGuestTextInfo(v QueueTextInfoType) {
	o.GuestTextInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *QueueRoomsTextMessage) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QueueRoomsTextMessage) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *QueueRoomsTextMessage) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *QueueRoomsTextMessage) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *QueueRoomsTextMessage) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *QueueRoomsTextMessage) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *QueueRoomsTextMessage) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *QueueRoomsTextMessage) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o QueueRoomsTextMessage) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o QueueRoomsTextMessage) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestTextInfo) {
		toSerialize["guestTextInfo"] = o.GuestTextInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableQueueRoomsTextMessage struct {
	value *QueueRoomsTextMessage
	isSet bool
}

func (v NullableQueueRoomsTextMessage) Get() *QueueRoomsTextMessage {
	return v.value
}

func (v *NullableQueueRoomsTextMessage) Set(val *QueueRoomsTextMessage) {
	v.value = val
	v.isSet = true
}

func (v NullableQueueRoomsTextMessage) IsSet() bool {
	return v.isSet
}

func (v *NullableQueueRoomsTextMessage) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableQueueRoomsTextMessage(val *QueueRoomsTextMessage) *NullableQueueRoomsTextMessage {
	return &NullableQueueRoomsTextMessage{value: val, isSet: true}
}

func (v NullableQueueRoomsTextMessage) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableQueueRoomsTextMessage) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


