/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the PostGuaranteeCodeScheduleRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostGuaranteeCodeScheduleRequest{}

// PostGuaranteeCodeScheduleRequest struct for PostGuaranteeCodeScheduleRequest
type PostGuaranteeCodeScheduleRequest struct {
	GuaranteeCodeSchedule *CreateGuaranteeCodeScheduleType `json:"guaranteeCodeSchedule,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostGuaranteeCodeScheduleRequest instantiates a new PostGuaranteeCodeScheduleRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostGuaranteeCodeScheduleRequest() *PostGuaranteeCodeScheduleRequest {
	this := PostGuaranteeCodeScheduleRequest{}
	return &this
}

// NewPostGuaranteeCodeScheduleRequestWithDefaults instantiates a new PostGuaranteeCodeScheduleRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostGuaranteeCodeScheduleRequestWithDefaults() *PostGuaranteeCodeScheduleRequest {
	this := PostGuaranteeCodeScheduleRequest{}
	return &this
}

// GetGuaranteeCodeSchedule returns the GuaranteeCodeSchedule field value if set, zero value otherwise.
func (o *PostGuaranteeCodeScheduleRequest) GetGuaranteeCodeSchedule() CreateGuaranteeCodeScheduleType {
	if o == nil || IsNil(o.GuaranteeCodeSchedule) {
		var ret CreateGuaranteeCodeScheduleType
		return ret
	}
	return *o.GuaranteeCodeSchedule
}

// GetGuaranteeCodeScheduleOk returns a tuple with the GuaranteeCodeSchedule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGuaranteeCodeScheduleRequest) GetGuaranteeCodeScheduleOk() (*CreateGuaranteeCodeScheduleType, bool) {
	if o == nil || IsNil(o.GuaranteeCodeSchedule) {
		return nil, false
	}
	return o.GuaranteeCodeSchedule, true
}

// HasGuaranteeCodeSchedule returns a boolean if a field has been set.
func (o *PostGuaranteeCodeScheduleRequest) HasGuaranteeCodeSchedule() bool {
	if o != nil && !IsNil(o.GuaranteeCodeSchedule) {
		return true
	}

	return false
}

// SetGuaranteeCodeSchedule gets a reference to the given CreateGuaranteeCodeScheduleType and assigns it to the GuaranteeCodeSchedule field.
func (o *PostGuaranteeCodeScheduleRequest) SetGuaranteeCodeSchedule(v CreateGuaranteeCodeScheduleType) {
	o.GuaranteeCodeSchedule = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostGuaranteeCodeScheduleRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGuaranteeCodeScheduleRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostGuaranteeCodeScheduleRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostGuaranteeCodeScheduleRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostGuaranteeCodeScheduleRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostGuaranteeCodeScheduleRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostGuaranteeCodeScheduleRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostGuaranteeCodeScheduleRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostGuaranteeCodeScheduleRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostGuaranteeCodeScheduleRequest) ToMap() (map[string]interface{}, error) {
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

type NullablePostGuaranteeCodeScheduleRequest struct {
	value *PostGuaranteeCodeScheduleRequest
	isSet bool
}

func (v NullablePostGuaranteeCodeScheduleRequest) Get() *PostGuaranteeCodeScheduleRequest {
	return v.value
}

func (v *NullablePostGuaranteeCodeScheduleRequest) Set(val *PostGuaranteeCodeScheduleRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostGuaranteeCodeScheduleRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostGuaranteeCodeScheduleRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostGuaranteeCodeScheduleRequest(val *PostGuaranteeCodeScheduleRequest) *NullablePostGuaranteeCodeScheduleRequest {
	return &NullablePostGuaranteeCodeScheduleRequest{value: val, isSet: true}
}

func (v NullablePostGuaranteeCodeScheduleRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostGuaranteeCodeScheduleRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


