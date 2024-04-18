/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RateActivityLog type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RateActivityLog{}

// RateActivityLog Response object to fetch rate activity log.
type RateActivityLog struct {
	ActivityLog *ActivityLogListType `json:"activityLog,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRateActivityLog instantiates a new RateActivityLog object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRateActivityLog() *RateActivityLog {
	this := RateActivityLog{}
	return &this
}

// NewRateActivityLogWithDefaults instantiates a new RateActivityLog object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRateActivityLogWithDefaults() *RateActivityLog {
	this := RateActivityLog{}
	return &this
}

// GetActivityLog returns the ActivityLog field value if set, zero value otherwise.
func (o *RateActivityLog) GetActivityLog() ActivityLogListType {
	if o == nil || IsNil(o.ActivityLog) {
		var ret ActivityLogListType
		return ret
	}
	return *o.ActivityLog
}

// GetActivityLogOk returns a tuple with the ActivityLog field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateActivityLog) GetActivityLogOk() (*ActivityLogListType, bool) {
	if o == nil || IsNil(o.ActivityLog) {
		return nil, false
	}
	return o.ActivityLog, true
}

// HasActivityLog returns a boolean if a field has been set.
func (o *RateActivityLog) HasActivityLog() bool {
	if o != nil && !IsNil(o.ActivityLog) {
		return true
	}

	return false
}

// SetActivityLog gets a reference to the given ActivityLogListType and assigns it to the ActivityLog field.
func (o *RateActivityLog) SetActivityLog(v ActivityLogListType) {
	o.ActivityLog = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RateActivityLog) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateActivityLog) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RateActivityLog) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RateActivityLog) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RateActivityLog) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RateActivityLog) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RateActivityLog) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RateActivityLog) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RateActivityLog) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RateActivityLog) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityLog) {
		toSerialize["activityLog"] = o.ActivityLog
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRateActivityLog struct {
	value *RateActivityLog
	isSet bool
}

func (v NullableRateActivityLog) Get() *RateActivityLog {
	return v.value
}

func (v *NullableRateActivityLog) Set(val *RateActivityLog) {
	v.value = val
	v.isSet = true
}

func (v NullableRateActivityLog) IsSet() bool {
	return v.isSet
}

func (v *NullableRateActivityLog) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateActivityLog(val *RateActivityLog) *NullableRateActivityLog {
	return &NullableRateActivityLog{value: val, isSet: true}
}

func (v NullableRateActivityLog) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateActivityLog) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

