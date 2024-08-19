/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CopyHotelDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyHotelDetails{}

// CopyHotelDetails Request object for copying template hotel details to hotel(s).
type CopyHotelDetails struct {
	CopyInstructions *CopyHotelDetailsType `json:"copyInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyHotelDetails instantiates a new CopyHotelDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyHotelDetails() *CopyHotelDetails {
	this := CopyHotelDetails{}
	return &this
}

// NewCopyHotelDetailsWithDefaults instantiates a new CopyHotelDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyHotelDetailsWithDefaults() *CopyHotelDetails {
	this := CopyHotelDetails{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *CopyHotelDetails) GetCopyInstructions() CopyHotelDetailsType {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret CopyHotelDetailsType
		return ret
	}
	return *o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHotelDetails) GetCopyInstructionsOk() (*CopyHotelDetailsType, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *CopyHotelDetails) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given CopyHotelDetailsType and assigns it to the CopyInstructions field.
func (o *CopyHotelDetails) SetCopyInstructions(v CopyHotelDetailsType) {
	o.CopyInstructions = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyHotelDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHotelDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyHotelDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyHotelDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyHotelDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHotelDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyHotelDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyHotelDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyHotelDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyHotelDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyHotelDetails struct {
	value *CopyHotelDetails
	isSet bool
}

func (v NullableCopyHotelDetails) Get() *CopyHotelDetails {
	return v.value
}

func (v *NullableCopyHotelDetails) Set(val *CopyHotelDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyHotelDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyHotelDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyHotelDetails(val *CopyHotelDetails) *NullableCopyHotelDetails {
	return &NullableCopyHotelDetails{value: val, isSet: true}
}

func (v NullableCopyHotelDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyHotelDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


