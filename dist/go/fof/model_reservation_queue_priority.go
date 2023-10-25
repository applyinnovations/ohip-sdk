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

// checks if the ReservationQueuePriority type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueuePriority{}

// ReservationQueuePriority Response to the request to add a reservation to the Queue for Check-In.
type ReservationQueuePriority struct {
	Links []InstanceLink `json:"links,omitempty"`
	QueueInfo *ReservationQueueInformationType `json:"queueInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationQueuePriority instantiates a new ReservationQueuePriority object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueuePriority() *ReservationQueuePriority {
	this := ReservationQueuePriority{}
	return &this
}

// NewReservationQueuePriorityWithDefaults instantiates a new ReservationQueuePriority object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueuePriorityWithDefaults() *ReservationQueuePriority {
	this := ReservationQueuePriority{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationQueuePriority) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueuePriority) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationQueuePriority) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationQueuePriority) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetQueueInfo returns the QueueInfo field value if set, zero value otherwise.
func (o *ReservationQueuePriority) GetQueueInfo() ReservationQueueInformationType {
	if o == nil || IsNil(o.QueueInfo) {
		var ret ReservationQueueInformationType
		return ret
	}
	return *o.QueueInfo
}

// GetQueueInfoOk returns a tuple with the QueueInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueuePriority) GetQueueInfoOk() (*ReservationQueueInformationType, bool) {
	if o == nil || IsNil(o.QueueInfo) {
		return nil, false
	}
	return o.QueueInfo, true
}

// HasQueueInfo returns a boolean if a field has been set.
func (o *ReservationQueuePriority) HasQueueInfo() bool {
	if o != nil && !IsNil(o.QueueInfo) {
		return true
	}

	return false
}

// SetQueueInfo gets a reference to the given ReservationQueueInformationType and assigns it to the QueueInfo field.
func (o *ReservationQueuePriority) SetQueueInfo(v ReservationQueueInformationType) {
	o.QueueInfo = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationQueuePriority) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueuePriority) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationQueuePriority) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationQueuePriority) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationQueuePriority) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueuePriority) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.QueueInfo) {
		toSerialize["queueInfo"] = o.QueueInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationQueuePriority struct {
	value *ReservationQueuePriority
	isSet bool
}

func (v NullableReservationQueuePriority) Get() *ReservationQueuePriority {
	return v.value
}

func (v *NullableReservationQueuePriority) Set(val *ReservationQueuePriority) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueuePriority) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueuePriority) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueuePriority(val *ReservationQueuePriority) *NullableReservationQueuePriority {
	return &NullableReservationQueuePriority{value: val, isSet: true}
}

func (v NullableReservationQueuePriority) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueuePriority) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


