/*
OPERA Cloud Leisure Management API

APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package lms

import (
	"encoding/json"
)

// checks if the ActivityBookingsDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivityBookingsDetails{}

// ActivityBookingsDetails struct for ActivityBookingsDetails
type ActivityBookingsDetails struct {
	// Criteria for fetching Activity Bookings.
	ActivityLookUpList []FetchActivityBookingsType `json:"activityLookUpList,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewActivityBookingsDetails instantiates a new ActivityBookingsDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivityBookingsDetails() *ActivityBookingsDetails {
	this := ActivityBookingsDetails{}
	return &this
}

// NewActivityBookingsDetailsWithDefaults instantiates a new ActivityBookingsDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivityBookingsDetailsWithDefaults() *ActivityBookingsDetails {
	this := ActivityBookingsDetails{}
	return &this
}

// GetActivityLookUpList returns the ActivityLookUpList field value if set, zero value otherwise.
func (o *ActivityBookingsDetails) GetActivityLookUpList() []FetchActivityBookingsType {
	if o == nil || IsNil(o.ActivityLookUpList) {
		var ret []FetchActivityBookingsType
		return ret
	}
	return o.ActivityLookUpList
}

// GetActivityLookUpListOk returns a tuple with the ActivityLookUpList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityBookingsDetails) GetActivityLookUpListOk() ([]FetchActivityBookingsType, bool) {
	if o == nil || IsNil(o.ActivityLookUpList) {
		return nil, false
	}
	return o.ActivityLookUpList, true
}

// HasActivityLookUpList returns a boolean if a field has been set.
func (o *ActivityBookingsDetails) HasActivityLookUpList() bool {
	if o != nil && !IsNil(o.ActivityLookUpList) {
		return true
	}

	return false
}

// SetActivityLookUpList gets a reference to the given []FetchActivityBookingsType and assigns it to the ActivityLookUpList field.
func (o *ActivityBookingsDetails) SetActivityLookUpList(v []FetchActivityBookingsType) {
	o.ActivityLookUpList = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ActivityBookingsDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityBookingsDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ActivityBookingsDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ActivityBookingsDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ActivityBookingsDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivityBookingsDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ActivityBookingsDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ActivityBookingsDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ActivityBookingsDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivityBookingsDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivityLookUpList) {
		toSerialize["activityLookUpList"] = o.ActivityLookUpList
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableActivityBookingsDetails struct {
	value *ActivityBookingsDetails
	isSet bool
}

func (v NullableActivityBookingsDetails) Get() *ActivityBookingsDetails {
	return v.value
}

func (v *NullableActivityBookingsDetails) Set(val *ActivityBookingsDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableActivityBookingsDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableActivityBookingsDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivityBookingsDetails(val *ActivityBookingsDetails) *NullableActivityBookingsDetails {
	return &NullableActivityBookingsDetails{value: val, isSet: true}
}

func (v NullableActivityBookingsDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivityBookingsDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

