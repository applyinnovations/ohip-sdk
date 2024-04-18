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

// checks if the OriginCodesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &OriginCodesDetails{}

// OriginCodesDetails Response object for fetching Origin Codes.
type OriginCodesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Origin Codes.
	OriginCodes []OriginCodeType `json:"originCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewOriginCodesDetails instantiates a new OriginCodesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOriginCodesDetails() *OriginCodesDetails {
	this := OriginCodesDetails{}
	return &this
}

// NewOriginCodesDetailsWithDefaults instantiates a new OriginCodesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOriginCodesDetailsWithDefaults() *OriginCodesDetails {
	this := OriginCodesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *OriginCodesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OriginCodesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *OriginCodesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *OriginCodesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOriginCodes returns the OriginCodes field value if set, zero value otherwise.
func (o *OriginCodesDetails) GetOriginCodes() []OriginCodeType {
	if o == nil || IsNil(o.OriginCodes) {
		var ret []OriginCodeType
		return ret
	}
	return o.OriginCodes
}

// GetOriginCodesOk returns a tuple with the OriginCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OriginCodesDetails) GetOriginCodesOk() ([]OriginCodeType, bool) {
	if o == nil || IsNil(o.OriginCodes) {
		return nil, false
	}
	return o.OriginCodes, true
}

// HasOriginCodes returns a boolean if a field has been set.
func (o *OriginCodesDetails) HasOriginCodes() bool {
	if o != nil && !IsNil(o.OriginCodes) {
		return true
	}

	return false
}

// SetOriginCodes gets a reference to the given []OriginCodeType and assigns it to the OriginCodes field.
func (o *OriginCodesDetails) SetOriginCodes(v []OriginCodeType) {
	o.OriginCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *OriginCodesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *OriginCodesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *OriginCodesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *OriginCodesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o OriginCodesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o OriginCodesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.OriginCodes) {
		toSerialize["originCodes"] = o.OriginCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableOriginCodesDetails struct {
	value *OriginCodesDetails
	isSet bool
}

func (v NullableOriginCodesDetails) Get() *OriginCodesDetails {
	return v.value
}

func (v *NullableOriginCodesDetails) Set(val *OriginCodesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableOriginCodesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableOriginCodesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOriginCodesDetails(val *OriginCodesDetails) *NullableOriginCodesDetails {
	return &NullableOriginCodesDetails{value: val, isSet: true}
}

func (v NullableOriginCodesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOriginCodesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

