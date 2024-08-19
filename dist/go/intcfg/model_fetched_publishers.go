/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the FetchedPublishers type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FetchedPublishers{}

// FetchedPublishers Response to request to fetch the external systems
type FetchedPublishers struct {
	// Information of all the publishers for a given subscriber.
	Publishers []ExternalSystemType `json:"publishers,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFetchedPublishers instantiates a new FetchedPublishers object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFetchedPublishers() *FetchedPublishers {
	this := FetchedPublishers{}
	return &this
}

// NewFetchedPublishersWithDefaults instantiates a new FetchedPublishers object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFetchedPublishersWithDefaults() *FetchedPublishers {
	this := FetchedPublishers{}
	return &this
}

// GetPublishers returns the Publishers field value if set, zero value otherwise.
func (o *FetchedPublishers) GetPublishers() []ExternalSystemType {
	if o == nil || IsNil(o.Publishers) {
		var ret []ExternalSystemType
		return ret
	}
	return o.Publishers
}

// GetPublishersOk returns a tuple with the Publishers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedPublishers) GetPublishersOk() ([]ExternalSystemType, bool) {
	if o == nil || IsNil(o.Publishers) {
		return nil, false
	}
	return o.Publishers, true
}

// HasPublishers returns a boolean if a field has been set.
func (o *FetchedPublishers) HasPublishers() bool {
	if o != nil && !IsNil(o.Publishers) {
		return true
	}

	return false
}

// SetPublishers gets a reference to the given []ExternalSystemType and assigns it to the Publishers field.
func (o *FetchedPublishers) SetPublishers(v []ExternalSystemType) {
	o.Publishers = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FetchedPublishers) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedPublishers) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FetchedPublishers) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FetchedPublishers) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FetchedPublishers) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FetchedPublishers) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FetchedPublishers) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FetchedPublishers) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FetchedPublishers) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FetchedPublishers) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Publishers) {
		toSerialize["publishers"] = o.Publishers
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFetchedPublishers struct {
	value *FetchedPublishers
	isSet bool
}

func (v NullableFetchedPublishers) Get() *FetchedPublishers {
	return v.value
}

func (v *NullableFetchedPublishers) Set(val *FetchedPublishers) {
	v.value = val
	v.isSet = true
}

func (v NullableFetchedPublishers) IsSet() bool {
	return v.isSet
}

func (v *NullableFetchedPublishers) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFetchedPublishers(val *FetchedPublishers) *NullableFetchedPublishers {
	return &NullableFetchedPublishers{value: val, isSet: true}
}

func (v NullableFetchedPublishers) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFetchedPublishers) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


