/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ReservationQueueStatistics type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ReservationQueueStatistics{}

// ReservationQueueStatistics Response for the fetch of current Reservations In Queue statistics. Contains the statistic information.
type ReservationQueueStatistics struct {
	Links []InstanceLink `json:"links,omitempty"`
	Statistics *ReservationQueueStatisticsType `json:"statistics,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewReservationQueueStatistics instantiates a new ReservationQueueStatistics object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewReservationQueueStatistics() *ReservationQueueStatistics {
	this := ReservationQueueStatistics{}
	return &this
}

// NewReservationQueueStatisticsWithDefaults instantiates a new ReservationQueueStatistics object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewReservationQueueStatisticsWithDefaults() *ReservationQueueStatistics {
	this := ReservationQueueStatistics{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ReservationQueueStatistics) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueStatistics) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ReservationQueueStatistics) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ReservationQueueStatistics) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetStatistics returns the Statistics field value if set, zero value otherwise.
func (o *ReservationQueueStatistics) GetStatistics() ReservationQueueStatisticsType {
	if o == nil || IsNil(o.Statistics) {
		var ret ReservationQueueStatisticsType
		return ret
	}
	return *o.Statistics
}

// GetStatisticsOk returns a tuple with the Statistics field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueStatistics) GetStatisticsOk() (*ReservationQueueStatisticsType, bool) {
	if o == nil || IsNil(o.Statistics) {
		return nil, false
	}
	return o.Statistics, true
}

// HasStatistics returns a boolean if a field has been set.
func (o *ReservationQueueStatistics) HasStatistics() bool {
	if o != nil && !IsNil(o.Statistics) {
		return true
	}

	return false
}

// SetStatistics gets a reference to the given ReservationQueueStatisticsType and assigns it to the Statistics field.
func (o *ReservationQueueStatistics) SetStatistics(v ReservationQueueStatisticsType) {
	o.Statistics = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ReservationQueueStatistics) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ReservationQueueStatistics) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ReservationQueueStatistics) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ReservationQueueStatistics) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ReservationQueueStatistics) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ReservationQueueStatistics) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Statistics) {
		toSerialize["statistics"] = o.Statistics
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableReservationQueueStatistics struct {
	value *ReservationQueueStatistics
	isSet bool
}

func (v NullableReservationQueueStatistics) Get() *ReservationQueueStatistics {
	return v.value
}

func (v *NullableReservationQueueStatistics) Set(val *ReservationQueueStatistics) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationQueueStatistics) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationQueueStatistics) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationQueueStatistics(val *ReservationQueueStatistics) *NullableReservationQueueStatistics {
	return &NullableReservationQueueStatistics{value: val, isSet: true}
}

func (v NullableReservationQueueStatistics) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationQueueStatistics) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


