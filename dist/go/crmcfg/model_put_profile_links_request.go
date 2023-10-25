/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the PutProfileLinksRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutProfileLinksRequest{}

// PutProfileLinksRequest struct for PutProfileLinksRequest
type PutProfileLinksRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Holds the collection of profile link objects
	ProfileLinks []ProfileLinkType `json:"profileLinks,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutProfileLinksRequest instantiates a new PutProfileLinksRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutProfileLinksRequest() *PutProfileLinksRequest {
	this := PutProfileLinksRequest{}
	return &this
}

// NewPutProfileLinksRequestWithDefaults instantiates a new PutProfileLinksRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutProfileLinksRequestWithDefaults() *PutProfileLinksRequest {
	this := PutProfileLinksRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutProfileLinksRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileLinksRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutProfileLinksRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutProfileLinksRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProfileLinks returns the ProfileLinks field value if set, zero value otherwise.
func (o *PutProfileLinksRequest) GetProfileLinks() []ProfileLinkType {
	if o == nil || IsNil(o.ProfileLinks) {
		var ret []ProfileLinkType
		return ret
	}
	return o.ProfileLinks
}

// GetProfileLinksOk returns a tuple with the ProfileLinks field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileLinksRequest) GetProfileLinksOk() ([]ProfileLinkType, bool) {
	if o == nil || IsNil(o.ProfileLinks) {
		return nil, false
	}
	return o.ProfileLinks, true
}

// HasProfileLinks returns a boolean if a field has been set.
func (o *PutProfileLinksRequest) HasProfileLinks() bool {
	if o != nil && !IsNil(o.ProfileLinks) {
		return true
	}

	return false
}

// SetProfileLinks gets a reference to the given []ProfileLinkType and assigns it to the ProfileLinks field.
func (o *PutProfileLinksRequest) SetProfileLinks(v []ProfileLinkType) {
	o.ProfileLinks = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutProfileLinksRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileLinksRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutProfileLinksRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutProfileLinksRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutProfileLinksRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutProfileLinksRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProfileLinks) {
		toSerialize["profileLinks"] = o.ProfileLinks
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutProfileLinksRequest struct {
	value *PutProfileLinksRequest
	isSet bool
}

func (v NullablePutProfileLinksRequest) Get() *PutProfileLinksRequest {
	return v.value
}

func (v *NullablePutProfileLinksRequest) Set(val *PutProfileLinksRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutProfileLinksRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutProfileLinksRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutProfileLinksRequest(val *PutProfileLinksRequest) *NullablePutProfileLinksRequest {
	return &NullablePutProfileLinksRequest{value: val, isSet: true}
}

func (v NullablePutProfileLinksRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutProfileLinksRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


