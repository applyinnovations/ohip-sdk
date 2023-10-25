/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the TelephoneBookEntriesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TelephoneBookEntriesDetails{}

// TelephoneBookEntriesDetails Response object for fetch Telephone Book Entries.
type TelephoneBookEntriesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// This type holds collection of Telephone Book Entries with complete information.
	TelephoneBookEntries []TelephoneBookEntryType `json:"telephoneBookEntries,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTelephoneBookEntriesDetails instantiates a new TelephoneBookEntriesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTelephoneBookEntriesDetails() *TelephoneBookEntriesDetails {
	this := TelephoneBookEntriesDetails{}
	return &this
}

// NewTelephoneBookEntriesDetailsWithDefaults instantiates a new TelephoneBookEntriesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTelephoneBookEntriesDetailsWithDefaults() *TelephoneBookEntriesDetails {
	this := TelephoneBookEntriesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TelephoneBookEntriesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntriesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TelephoneBookEntriesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TelephoneBookEntriesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTelephoneBookEntries returns the TelephoneBookEntries field value if set, zero value otherwise.
func (o *TelephoneBookEntriesDetails) GetTelephoneBookEntries() []TelephoneBookEntryType {
	if o == nil || IsNil(o.TelephoneBookEntries) {
		var ret []TelephoneBookEntryType
		return ret
	}
	return o.TelephoneBookEntries
}

// GetTelephoneBookEntriesOk returns a tuple with the TelephoneBookEntries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntriesDetails) GetTelephoneBookEntriesOk() ([]TelephoneBookEntryType, bool) {
	if o == nil || IsNil(o.TelephoneBookEntries) {
		return nil, false
	}
	return o.TelephoneBookEntries, true
}

// HasTelephoneBookEntries returns a boolean if a field has been set.
func (o *TelephoneBookEntriesDetails) HasTelephoneBookEntries() bool {
	if o != nil && !IsNil(o.TelephoneBookEntries) {
		return true
	}

	return false
}

// SetTelephoneBookEntries gets a reference to the given []TelephoneBookEntryType and assigns it to the TelephoneBookEntries field.
func (o *TelephoneBookEntriesDetails) SetTelephoneBookEntries(v []TelephoneBookEntryType) {
	o.TelephoneBookEntries = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TelephoneBookEntriesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneBookEntriesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TelephoneBookEntriesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TelephoneBookEntriesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TelephoneBookEntriesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TelephoneBookEntriesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TelephoneBookEntries) {
		toSerialize["telephoneBookEntries"] = o.TelephoneBookEntries
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTelephoneBookEntriesDetails struct {
	value *TelephoneBookEntriesDetails
	isSet bool
}

func (v NullableTelephoneBookEntriesDetails) Get() *TelephoneBookEntriesDetails {
	return v.value
}

func (v *NullableTelephoneBookEntriesDetails) Set(val *TelephoneBookEntriesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTelephoneBookEntriesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTelephoneBookEntriesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTelephoneBookEntriesDetails(val *TelephoneBookEntriesDetails) *NullableTelephoneBookEntriesDetails {
	return &NullableTelephoneBookEntriesDetails{value: val, isSet: true}
}

func (v NullableTelephoneBookEntriesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTelephoneBookEntriesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


