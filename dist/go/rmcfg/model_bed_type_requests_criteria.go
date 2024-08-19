/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the BedTypeRequestsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BedTypeRequestsCriteria{}

// BedTypeRequestsCriteria Request object for creating Bed Type Requests.
type BedTypeRequestsCriteria struct {
	// List of Bed Type Requests.
	BedTypeRequests []BedTypeRequestType `json:"bedTypeRequests,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBedTypeRequestsCriteria instantiates a new BedTypeRequestsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBedTypeRequestsCriteria() *BedTypeRequestsCriteria {
	this := BedTypeRequestsCriteria{}
	return &this
}

// NewBedTypeRequestsCriteriaWithDefaults instantiates a new BedTypeRequestsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBedTypeRequestsCriteriaWithDefaults() *BedTypeRequestsCriteria {
	this := BedTypeRequestsCriteria{}
	return &this
}

// GetBedTypeRequests returns the BedTypeRequests field value if set, zero value otherwise.
func (o *BedTypeRequestsCriteria) GetBedTypeRequests() []BedTypeRequestType {
	if o == nil || IsNil(o.BedTypeRequests) {
		var ret []BedTypeRequestType
		return ret
	}
	return o.BedTypeRequests
}

// GetBedTypeRequestsOk returns a tuple with the BedTypeRequests field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypeRequestsCriteria) GetBedTypeRequestsOk() ([]BedTypeRequestType, bool) {
	if o == nil || IsNil(o.BedTypeRequests) {
		return nil, false
	}
	return o.BedTypeRequests, true
}

// HasBedTypeRequests returns a boolean if a field has been set.
func (o *BedTypeRequestsCriteria) HasBedTypeRequests() bool {
	if o != nil && !IsNil(o.BedTypeRequests) {
		return true
	}

	return false
}

// SetBedTypeRequests gets a reference to the given []BedTypeRequestType and assigns it to the BedTypeRequests field.
func (o *BedTypeRequestsCriteria) SetBedTypeRequests(v []BedTypeRequestType) {
	o.BedTypeRequests = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BedTypeRequestsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypeRequestsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BedTypeRequestsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BedTypeRequestsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BedTypeRequestsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypeRequestsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BedTypeRequestsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BedTypeRequestsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BedTypeRequestsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BedTypeRequestsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BedTypeRequests) {
		toSerialize["bedTypeRequests"] = o.BedTypeRequests
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBedTypeRequestsCriteria struct {
	value *BedTypeRequestsCriteria
	isSet bool
}

func (v NullableBedTypeRequestsCriteria) Get() *BedTypeRequestsCriteria {
	return v.value
}

func (v *NullableBedTypeRequestsCriteria) Set(val *BedTypeRequestsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableBedTypeRequestsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableBedTypeRequestsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBedTypeRequestsCriteria(val *BedTypeRequestsCriteria) *NullableBedTypeRequestsCriteria {
	return &NullableBedTypeRequestsCriteria{value: val, isSet: true}
}

func (v NullableBedTypeRequestsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBedTypeRequestsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


