/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the GuaranteeCodeScheduleToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteeCodeScheduleToBeChanged{}

// GuaranteeCodeScheduleToBeChanged Changes the Guarantee Code schedule based on the details provided by the request.
type GuaranteeCodeScheduleToBeChanged struct {
	GuaranteeCodeSchedule *GuaranteeCodeScheduleType `json:"guaranteeCodeSchedule,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuaranteeCodeScheduleToBeChanged instantiates a new GuaranteeCodeScheduleToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteeCodeScheduleToBeChanged() *GuaranteeCodeScheduleToBeChanged {
	this := GuaranteeCodeScheduleToBeChanged{}
	return &this
}

// NewGuaranteeCodeScheduleToBeChangedWithDefaults instantiates a new GuaranteeCodeScheduleToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteeCodeScheduleToBeChangedWithDefaults() *GuaranteeCodeScheduleToBeChanged {
	this := GuaranteeCodeScheduleToBeChanged{}
	return &this
}

// GetGuaranteeCodeSchedule returns the GuaranteeCodeSchedule field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleToBeChanged) GetGuaranteeCodeSchedule() GuaranteeCodeScheduleType {
	if o == nil || IsNil(o.GuaranteeCodeSchedule) {
		var ret GuaranteeCodeScheduleType
		return ret
	}
	return *o.GuaranteeCodeSchedule
}

// GetGuaranteeCodeScheduleOk returns a tuple with the GuaranteeCodeSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleToBeChanged) GetGuaranteeCodeScheduleOk() (*GuaranteeCodeScheduleType, bool) {
	if o == nil || IsNil(o.GuaranteeCodeSchedule) {
		return nil, false
	}
	return o.GuaranteeCodeSchedule, true
}

// HasGuaranteeCodeSchedule returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleToBeChanged) HasGuaranteeCodeSchedule() bool {
	if o != nil && !IsNil(o.GuaranteeCodeSchedule) {
		return true
	}

	return false
}

// SetGuaranteeCodeSchedule gets a reference to the given GuaranteeCodeScheduleType and assigns it to the GuaranteeCodeSchedule field.
func (o *GuaranteeCodeScheduleToBeChanged) SetGuaranteeCodeSchedule(v GuaranteeCodeScheduleType) {
	o.GuaranteeCodeSchedule = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuaranteeCodeScheduleToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuaranteeCodeScheduleToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeScheduleToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuaranteeCodeScheduleToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuaranteeCodeScheduleToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuaranteeCodeScheduleToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteeCodeScheduleToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuaranteeCodeSchedule) {
		toSerialize["guaranteeCodeSchedule"] = o.GuaranteeCodeSchedule
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuaranteeCodeScheduleToBeChanged struct {
	value *GuaranteeCodeScheduleToBeChanged
	isSet bool
}

func (v NullableGuaranteeCodeScheduleToBeChanged) Get() *GuaranteeCodeScheduleToBeChanged {
	return v.value
}

func (v *NullableGuaranteeCodeScheduleToBeChanged) Set(val *GuaranteeCodeScheduleToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteeCodeScheduleToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteeCodeScheduleToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteeCodeScheduleToBeChanged(val *GuaranteeCodeScheduleToBeChanged) *NullableGuaranteeCodeScheduleToBeChanged {
	return &NullableGuaranteeCodeScheduleToBeChanged{value: val, isSet: true}
}

func (v NullableGuaranteeCodeScheduleToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteeCodeScheduleToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


