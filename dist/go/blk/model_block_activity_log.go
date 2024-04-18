/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the BlockActivityLog type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BlockActivityLog{}

// BlockActivityLog Response object for fetching block activity log. This object contains collection of user activity log for the block, Success, Warnings and Errors related to this operation
type BlockActivityLog struct {
	ActivityLog *ActivityLogListType `json:"activityLog,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBlockActivityLog instantiates a new BlockActivityLog object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBlockActivityLog() *BlockActivityLog {
	this := BlockActivityLog{}
	return &this
}

// NewBlockActivityLogWithDefaults instantiates a new BlockActivityLog object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBlockActivityLogWithDefaults() *BlockActivityLog {
	this := BlockActivityLog{}
	return &this
}

// GetActivityLog returns the ActivityLog field value if set, zero value otherwise.
func (o *BlockActivityLog) GetActivityLog() ActivityLogListType {
	if o == nil || IsNil(o.ActivityLog) {
		var ret ActivityLogListType
		return ret
	}
	return *o.ActivityLog
}

// GetActivityLogOk returns a tuple with the ActivityLog field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockActivityLog) GetActivityLogOk() (*ActivityLogListType, bool) {
	if o == nil || IsNil(o.ActivityLog) {
		return nil, false
	}
	return o.ActivityLog, true
}

// HasActivityLog returns a boolean if a field has been set.
func (o *BlockActivityLog) HasActivityLog() bool {
	if o != nil && !IsNil(o.ActivityLog) {
		return true
	}

	return false
}

// SetActivityLog gets a reference to the given ActivityLogListType and assigns it to the ActivityLog field.
func (o *BlockActivityLog) SetActivityLog(v ActivityLogListType) {
	o.ActivityLog = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BlockActivityLog) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockActivityLog) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BlockActivityLog) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BlockActivityLog) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BlockActivityLog) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BlockActivityLog) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BlockActivityLog) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BlockActivityLog) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BlockActivityLog) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BlockActivityLog) ToMap() (map[string]interface{}, error) {
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

type NullableBlockActivityLog struct {
	value *BlockActivityLog
	isSet bool
}

func (v NullableBlockActivityLog) Get() *BlockActivityLog {
	return v.value
}

func (v *NullableBlockActivityLog) Set(val *BlockActivityLog) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockActivityLog) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockActivityLog) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockActivityLog(val *BlockActivityLog) *NullableBlockActivityLog {
	return &NullableBlockActivityLog{value: val, isSet: true}
}

func (v NullableBlockActivityLog) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockActivityLog) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

