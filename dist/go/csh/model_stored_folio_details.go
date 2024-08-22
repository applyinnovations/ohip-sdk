/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the StoredFolioDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StoredFolioDetails{}

// StoredFolioDetails Request object to update stored folio details.
type StoredFolioDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	StoredFolioDetails *StoredFolioDetailsType `json:"storedFolioDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewStoredFolioDetails instantiates a new StoredFolioDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStoredFolioDetails() *StoredFolioDetails {
	this := StoredFolioDetails{}
	return &this
}

// NewStoredFolioDetailsWithDefaults instantiates a new StoredFolioDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStoredFolioDetailsWithDefaults() *StoredFolioDetails {
	this := StoredFolioDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *StoredFolioDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *StoredFolioDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *StoredFolioDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetStoredFolioDetails returns the StoredFolioDetails field value if set, zero value otherwise.
func (o *StoredFolioDetails) GetStoredFolioDetails() StoredFolioDetailsType {
	if o == nil || IsNil(o.StoredFolioDetails) {
		var ret StoredFolioDetailsType
		return ret
	}
	return *o.StoredFolioDetails
}

// GetStoredFolioDetailsOk returns a tuple with the StoredFolioDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetails) GetStoredFolioDetailsOk() (*StoredFolioDetailsType, bool) {
	if o == nil || IsNil(o.StoredFolioDetails) {
		return nil, false
	}
	return o.StoredFolioDetails, true
}

// HasStoredFolioDetails returns a boolean if a field has been set.
func (o *StoredFolioDetails) HasStoredFolioDetails() bool {
	if o != nil && !IsNil(o.StoredFolioDetails) {
		return true
	}

	return false
}

// SetStoredFolioDetails gets a reference to the given StoredFolioDetailsType and assigns it to the StoredFolioDetails field.
func (o *StoredFolioDetails) SetStoredFolioDetails(v StoredFolioDetailsType) {
	o.StoredFolioDetails = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *StoredFolioDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StoredFolioDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *StoredFolioDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *StoredFolioDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o StoredFolioDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StoredFolioDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.StoredFolioDetails) {
		toSerialize["storedFolioDetails"] = o.StoredFolioDetails
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableStoredFolioDetails struct {
	value *StoredFolioDetails
	isSet bool
}

func (v NullableStoredFolioDetails) Get() *StoredFolioDetails {
	return v.value
}

func (v *NullableStoredFolioDetails) Set(val *StoredFolioDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableStoredFolioDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableStoredFolioDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStoredFolioDetails(val *StoredFolioDetails) *NullableStoredFolioDetails {
	return &NullableStoredFolioDetails{value: val, isSet: true}
}

func (v NullableStoredFolioDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStoredFolioDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


