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

// checks if the ChangeCommunicationTypeRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeCommunicationTypeRequest{}

// ChangeCommunicationTypeRequest struct for ChangeCommunicationTypeRequest
type ChangeCommunicationTypeRequest struct {
	CommunicationType *CommunicationTypeType `json:"communicationType,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeCommunicationTypeRequest instantiates a new ChangeCommunicationTypeRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeCommunicationTypeRequest() *ChangeCommunicationTypeRequest {
	this := ChangeCommunicationTypeRequest{}
	return &this
}

// NewChangeCommunicationTypeRequestWithDefaults instantiates a new ChangeCommunicationTypeRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeCommunicationTypeRequestWithDefaults() *ChangeCommunicationTypeRequest {
	this := ChangeCommunicationTypeRequest{}
	return &this
}

// GetCommunicationType returns the CommunicationType field value if set, zero value otherwise.
func (o *ChangeCommunicationTypeRequest) GetCommunicationType() CommunicationTypeType {
	if o == nil || IsNil(o.CommunicationType) {
		var ret CommunicationTypeType
		return ret
	}
	return *o.CommunicationType
}

// GetCommunicationTypeOk returns a tuple with the CommunicationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCommunicationTypeRequest) GetCommunicationTypeOk() (*CommunicationTypeType, bool) {
	if o == nil || IsNil(o.CommunicationType) {
		return nil, false
	}
	return o.CommunicationType, true
}

// HasCommunicationType returns a boolean if a field has been set.
func (o *ChangeCommunicationTypeRequest) HasCommunicationType() bool {
	if o != nil && !IsNil(o.CommunicationType) {
		return true
	}

	return false
}

// SetCommunicationType gets a reference to the given CommunicationTypeType and assigns it to the CommunicationType field.
func (o *ChangeCommunicationTypeRequest) SetCommunicationType(v CommunicationTypeType) {
	o.CommunicationType = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeCommunicationTypeRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCommunicationTypeRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeCommunicationTypeRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeCommunicationTypeRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeCommunicationTypeRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeCommunicationTypeRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeCommunicationTypeRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeCommunicationTypeRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeCommunicationTypeRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeCommunicationTypeRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CommunicationType) {
		toSerialize["communicationType"] = o.CommunicationType
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeCommunicationTypeRequest struct {
	value *ChangeCommunicationTypeRequest
	isSet bool
}

func (v NullableChangeCommunicationTypeRequest) Get() *ChangeCommunicationTypeRequest {
	return v.value
}

func (v *NullableChangeCommunicationTypeRequest) Set(val *ChangeCommunicationTypeRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeCommunicationTypeRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeCommunicationTypeRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeCommunicationTypeRequest(val *ChangeCommunicationTypeRequest) *NullableChangeCommunicationTypeRequest {
	return &NullableChangeCommunicationTypeRequest{value: val, isSet: true}
}

func (v NullableChangeCommunicationTypeRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeCommunicationTypeRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


