/*
Opera Cloud Rate Plan Asynchronous Service API

APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtpasync

import (
	"encoding/json"
)

// checks if the RatePlans type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlans{}

// RatePlans Request object to create rate plan.
type RatePlans struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Rate plan code details to be created.
	RatePlans []RatePlanType `json:"ratePlans,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRatePlans instantiates a new RatePlans object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlans() *RatePlans {
	this := RatePlans{}
	return &this
}

// NewRatePlansWithDefaults instantiates a new RatePlans object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlansWithDefaults() *RatePlans {
	this := RatePlans{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *RatePlans) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlans) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *RatePlans) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *RatePlans) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRatePlans returns the RatePlans field value if set, zero value otherwise.
func (o *RatePlans) GetRatePlans() []RatePlanType {
	if o == nil || IsNil(o.RatePlans) {
		var ret []RatePlanType
		return ret
	}
	return o.RatePlans
}

// GetRatePlansOk returns a tuple with the RatePlans field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlans) GetRatePlansOk() ([]RatePlanType, bool) {
	if o == nil || IsNil(o.RatePlans) {
		return nil, false
	}
	return o.RatePlans, true
}

// HasRatePlans returns a boolean if a field has been set.
func (o *RatePlans) HasRatePlans() bool {
	if o != nil && !IsNil(o.RatePlans) {
		return true
	}

	return false
}

// SetRatePlans gets a reference to the given []RatePlanType and assigns it to the RatePlans field.
func (o *RatePlans) SetRatePlans(v []RatePlanType) {
	o.RatePlans = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *RatePlans) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlans) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *RatePlans) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *RatePlans) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o RatePlans) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlans) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RatePlans) {
		toSerialize["ratePlans"] = o.RatePlans
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRatePlans struct {
	value *RatePlans
	isSet bool
}

func (v NullableRatePlans) Get() *RatePlans {
	return v.value
}

func (v *NullableRatePlans) Set(val *RatePlans) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlans) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlans) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlans(val *RatePlans) *NullableRatePlans {
	return &NullableRatePlans{value: val, isSet: true}
}

func (v NullableRatePlans) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlans) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


