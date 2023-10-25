/*
OPERA Cloud Block Configuration API

APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blkcfg

import (
	"encoding/json"
)

// checks if the WashScheduleDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &WashScheduleDetails{}

// WashScheduleDetails Response object for FetchWashSchedule operation which will contain all the information of 'WashCodes' like Days prior to arrival, Occupancy detail, Sell limit and Wash by percent value if exists.
type WashScheduleDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
	// Wash Code, which will allow the user to define standard schedules that can be attached to blocks prior to the block's cutoff date to automate this process.
	WashCodes []WashCodeType `json:"washCodes,omitempty"`
}

// NewWashScheduleDetails instantiates a new WashScheduleDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWashScheduleDetails() *WashScheduleDetails {
	this := WashScheduleDetails{}
	return &this
}

// NewWashScheduleDetailsWithDefaults instantiates a new WashScheduleDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWashScheduleDetailsWithDefaults() *WashScheduleDetails {
	this := WashScheduleDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *WashScheduleDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WashScheduleDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *WashScheduleDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *WashScheduleDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *WashScheduleDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WashScheduleDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *WashScheduleDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *WashScheduleDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

// GetWashCodes returns the WashCodes field value if set, zero value otherwise.
func (o *WashScheduleDetails) GetWashCodes() []WashCodeType {
	if o == nil || IsNil(o.WashCodes) {
		var ret []WashCodeType
		return ret
	}
	return o.WashCodes
}

// GetWashCodesOk returns a tuple with the WashCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WashScheduleDetails) GetWashCodesOk() ([]WashCodeType, bool) {
	if o == nil || IsNil(o.WashCodes) {
		return nil, false
	}
	return o.WashCodes, true
}

// HasWashCodes returns a boolean if a field has been set.
func (o *WashScheduleDetails) HasWashCodes() bool {
	if o != nil && !IsNil(o.WashCodes) {
		return true
	}

	return false
}

// SetWashCodes gets a reference to the given []WashCodeType and assigns it to the WashCodes field.
func (o *WashScheduleDetails) SetWashCodes(v []WashCodeType) {
	o.WashCodes = v
}

func (o WashScheduleDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o WashScheduleDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	if !IsNil(o.WashCodes) {
		toSerialize["washCodes"] = o.WashCodes
	}
	return toSerialize, nil
}

type NullableWashScheduleDetails struct {
	value *WashScheduleDetails
	isSet bool
}

func (v NullableWashScheduleDetails) Get() *WashScheduleDetails {
	return v.value
}

func (v *NullableWashScheduleDetails) Set(val *WashScheduleDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableWashScheduleDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableWashScheduleDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWashScheduleDetails(val *WashScheduleDetails) *NullableWashScheduleDetails {
	return &NullableWashScheduleDetails{value: val, isSet: true}
}

func (v NullableWashScheduleDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWashScheduleDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


