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

// checks if the CancellationCodesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CancellationCodesToBeChanged{}

// CancellationCodesToBeChanged Request object for changing Cancellation Codes.
type CancellationCodesToBeChanged struct {
	// List of Cancellation Codes.
	CancellationCodes []CancellationCodeType `json:"cancellationCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCancellationCodesToBeChanged instantiates a new CancellationCodesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCancellationCodesToBeChanged() *CancellationCodesToBeChanged {
	this := CancellationCodesToBeChanged{}
	return &this
}

// NewCancellationCodesToBeChangedWithDefaults instantiates a new CancellationCodesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCancellationCodesToBeChangedWithDefaults() *CancellationCodesToBeChanged {
	this := CancellationCodesToBeChanged{}
	return &this
}

// GetCancellationCodes returns the CancellationCodes field value if set, zero value otherwise.
func (o *CancellationCodesToBeChanged) GetCancellationCodes() []CancellationCodeType {
	if o == nil || IsNil(o.CancellationCodes) {
		var ret []CancellationCodeType
		return ret
	}
	return o.CancellationCodes
}

// GetCancellationCodesOk returns a tuple with the CancellationCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationCodesToBeChanged) GetCancellationCodesOk() ([]CancellationCodeType, bool) {
	if o == nil || IsNil(o.CancellationCodes) {
		return nil, false
	}
	return o.CancellationCodes, true
}

// HasCancellationCodes returns a boolean if a field has been set.
func (o *CancellationCodesToBeChanged) HasCancellationCodes() bool {
	if o != nil && !IsNil(o.CancellationCodes) {
		return true
	}

	return false
}

// SetCancellationCodes gets a reference to the given []CancellationCodeType and assigns it to the CancellationCodes field.
func (o *CancellationCodesToBeChanged) SetCancellationCodes(v []CancellationCodeType) {
	o.CancellationCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CancellationCodesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationCodesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CancellationCodesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CancellationCodesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CancellationCodesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationCodesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CancellationCodesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CancellationCodesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CancellationCodesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CancellationCodesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancellationCodes) {
		toSerialize["cancellationCodes"] = o.CancellationCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCancellationCodesToBeChanged struct {
	value *CancellationCodesToBeChanged
	isSet bool
}

func (v NullableCancellationCodesToBeChanged) Get() *CancellationCodesToBeChanged {
	return v.value
}

func (v *NullableCancellationCodesToBeChanged) Set(val *CancellationCodesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableCancellationCodesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableCancellationCodesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCancellationCodesToBeChanged(val *CancellationCodesToBeChanged) *NullableCancellationCodesToBeChanged {
	return &NullableCancellationCodesToBeChanged{value: val, isSet: true}
}

func (v NullableCancellationCodesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCancellationCodesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


