/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the PutProfileRelationshipRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PutProfileRelationshipRequest{}

// PutProfileRelationshipRequest struct for PutProfileRelationshipRequest
type PutProfileRelationshipRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	Relationship *ChangeRelationshipCriteriaType `json:"relationship,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPutProfileRelationshipRequest instantiates a new PutProfileRelationshipRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPutProfileRelationshipRequest() *PutProfileRelationshipRequest {
	this := PutProfileRelationshipRequest{}
	return &this
}

// NewPutProfileRelationshipRequestWithDefaults instantiates a new PutProfileRelationshipRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPutProfileRelationshipRequestWithDefaults() *PutProfileRelationshipRequest {
	this := PutProfileRelationshipRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PutProfileRelationshipRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileRelationshipRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PutProfileRelationshipRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PutProfileRelationshipRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRelationship returns the Relationship field value if set, zero value otherwise.
func (o *PutProfileRelationshipRequest) GetRelationship() ChangeRelationshipCriteriaType {
	if o == nil || IsNil(o.Relationship) {
		var ret ChangeRelationshipCriteriaType
		return ret
	}
	return *o.Relationship
}

// GetRelationshipOk returns a tuple with the Relationship field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileRelationshipRequest) GetRelationshipOk() (*ChangeRelationshipCriteriaType, bool) {
	if o == nil || IsNil(o.Relationship) {
		return nil, false
	}
	return o.Relationship, true
}

// HasRelationship returns a boolean if a field has been set.
func (o *PutProfileRelationshipRequest) HasRelationship() bool {
	if o != nil && !IsNil(o.Relationship) {
		return true
	}

	return false
}

// SetRelationship gets a reference to the given ChangeRelationshipCriteriaType and assigns it to the Relationship field.
func (o *PutProfileRelationshipRequest) SetRelationship(v ChangeRelationshipCriteriaType) {
	o.Relationship = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PutProfileRelationshipRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PutProfileRelationshipRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PutProfileRelationshipRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PutProfileRelationshipRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PutProfileRelationshipRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PutProfileRelationshipRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Relationship) {
		toSerialize["relationship"] = o.Relationship
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePutProfileRelationshipRequest struct {
	value *PutProfileRelationshipRequest
	isSet bool
}

func (v NullablePutProfileRelationshipRequest) Get() *PutProfileRelationshipRequest {
	return v.value
}

func (v *NullablePutProfileRelationshipRequest) Set(val *PutProfileRelationshipRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePutProfileRelationshipRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePutProfileRelationshipRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePutProfileRelationshipRequest(val *PutProfileRelationshipRequest) *NullablePutProfileRelationshipRequest {
	return &NullablePutProfileRelationshipRequest{value: val, isSet: true}
}

func (v NullablePutProfileRelationshipRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePutProfileRelationshipRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


