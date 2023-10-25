/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the DeliveryHistoryLog type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DeliveryHistoryLog{}

// DeliveryHistoryLog Response that contains fetched reservation's delivery history.
type DeliveryHistoryLog struct {
	// Delivery History Information.
	DeliveryHistoryLog []DeliveryHistoryType `json:"deliveryHistoryLog,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDeliveryHistoryLog instantiates a new DeliveryHistoryLog object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDeliveryHistoryLog() *DeliveryHistoryLog {
	this := DeliveryHistoryLog{}
	return &this
}

// NewDeliveryHistoryLogWithDefaults instantiates a new DeliveryHistoryLog object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDeliveryHistoryLogWithDefaults() *DeliveryHistoryLog {
	this := DeliveryHistoryLog{}
	return &this
}

// GetDeliveryHistoryLog returns the DeliveryHistoryLog field value if set, zero value otherwise.
func (o *DeliveryHistoryLog) GetDeliveryHistoryLog() []DeliveryHistoryType {
	if o == nil || IsNil(o.DeliveryHistoryLog) {
		var ret []DeliveryHistoryType
		return ret
	}
	return o.DeliveryHistoryLog
}

// GetDeliveryHistoryLogOk returns a tuple with the DeliveryHistoryLog field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeliveryHistoryLog) GetDeliveryHistoryLogOk() ([]DeliveryHistoryType, bool) {
	if o == nil || IsNil(o.DeliveryHistoryLog) {
		return nil, false
	}
	return o.DeliveryHistoryLog, true
}

// HasDeliveryHistoryLog returns a boolean if a field has been set.
func (o *DeliveryHistoryLog) HasDeliveryHistoryLog() bool {
	if o != nil && !IsNil(o.DeliveryHistoryLog) {
		return true
	}

	return false
}

// SetDeliveryHistoryLog gets a reference to the given []DeliveryHistoryType and assigns it to the DeliveryHistoryLog field.
func (o *DeliveryHistoryLog) SetDeliveryHistoryLog(v []DeliveryHistoryType) {
	o.DeliveryHistoryLog = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DeliveryHistoryLog) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeliveryHistoryLog) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DeliveryHistoryLog) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DeliveryHistoryLog) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DeliveryHistoryLog) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DeliveryHistoryLog) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DeliveryHistoryLog) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DeliveryHistoryLog) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DeliveryHistoryLog) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DeliveryHistoryLog) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DeliveryHistoryLog) {
		toSerialize["deliveryHistoryLog"] = o.DeliveryHistoryLog
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDeliveryHistoryLog struct {
	value *DeliveryHistoryLog
	isSet bool
}

func (v NullableDeliveryHistoryLog) Get() *DeliveryHistoryLog {
	return v.value
}

func (v *NullableDeliveryHistoryLog) Set(val *DeliveryHistoryLog) {
	v.value = val
	v.isSet = true
}

func (v NullableDeliveryHistoryLog) IsSet() bool {
	return v.isSet
}

func (v *NullableDeliveryHistoryLog) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDeliveryHistoryLog(val *DeliveryHistoryLog) *NullableDeliveryHistoryLog {
	return &NullableDeliveryHistoryLog{value: val, isSet: true}
}

func (v NullableDeliveryHistoryLog) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDeliveryHistoryLog) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


