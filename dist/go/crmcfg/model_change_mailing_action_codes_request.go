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

// checks if the ChangeMailingActionCodesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeMailingActionCodesRequest{}

// ChangeMailingActionCodesRequest struct for ChangeMailingActionCodesRequest
type ChangeMailingActionCodesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Mailing Action Codes.
	MailingActionCodes []MailingActionCodeType `json:"mailingActionCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeMailingActionCodesRequest instantiates a new ChangeMailingActionCodesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeMailingActionCodesRequest() *ChangeMailingActionCodesRequest {
	this := ChangeMailingActionCodesRequest{}
	return &this
}

// NewChangeMailingActionCodesRequestWithDefaults instantiates a new ChangeMailingActionCodesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeMailingActionCodesRequestWithDefaults() *ChangeMailingActionCodesRequest {
	this := ChangeMailingActionCodesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeMailingActionCodesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMailingActionCodesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeMailingActionCodesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeMailingActionCodesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMailingActionCodes returns the MailingActionCodes field value if set, zero value otherwise.
func (o *ChangeMailingActionCodesRequest) GetMailingActionCodes() []MailingActionCodeType {
	if o == nil || IsNil(o.MailingActionCodes) {
		var ret []MailingActionCodeType
		return ret
	}
	return o.MailingActionCodes
}

// GetMailingActionCodesOk returns a tuple with the MailingActionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMailingActionCodesRequest) GetMailingActionCodesOk() ([]MailingActionCodeType, bool) {
	if o == nil || IsNil(o.MailingActionCodes) {
		return nil, false
	}
	return o.MailingActionCodes, true
}

// HasMailingActionCodes returns a boolean if a field has been set.
func (o *ChangeMailingActionCodesRequest) HasMailingActionCodes() bool {
	if o != nil && !IsNil(o.MailingActionCodes) {
		return true
	}

	return false
}

// SetMailingActionCodes gets a reference to the given []MailingActionCodeType and assigns it to the MailingActionCodes field.
func (o *ChangeMailingActionCodesRequest) SetMailingActionCodes(v []MailingActionCodeType) {
	o.MailingActionCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeMailingActionCodesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeMailingActionCodesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeMailingActionCodesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeMailingActionCodesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeMailingActionCodesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeMailingActionCodesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MailingActionCodes) {
		toSerialize["mailingActionCodes"] = o.MailingActionCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeMailingActionCodesRequest struct {
	value *ChangeMailingActionCodesRequest
	isSet bool
}

func (v NullableChangeMailingActionCodesRequest) Get() *ChangeMailingActionCodesRequest {
	return v.value
}

func (v *NullableChangeMailingActionCodesRequest) Set(val *ChangeMailingActionCodesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeMailingActionCodesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeMailingActionCodesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeMailingActionCodesRequest(val *ChangeMailingActionCodesRequest) *NullableChangeMailingActionCodesRequest {
	return &NullableChangeMailingActionCodesRequest{value: val, isSet: true}
}

func (v NullableChangeMailingActionCodesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeMailingActionCodesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


