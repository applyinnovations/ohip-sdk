/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the MailingActionCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MailingActionCodesCriteria{}

// MailingActionCodesCriteria Request object for creating Mailing Action Codes.
type MailingActionCodesCriteria struct {
	// List of Mailing Action Codes.
	MailingActionCodes []MailingActionCodeType `json:"mailingActionCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMailingActionCodesCriteria instantiates a new MailingActionCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMailingActionCodesCriteria() *MailingActionCodesCriteria {
	this := MailingActionCodesCriteria{}
	return &this
}

// NewMailingActionCodesCriteriaWithDefaults instantiates a new MailingActionCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMailingActionCodesCriteriaWithDefaults() *MailingActionCodesCriteria {
	this := MailingActionCodesCriteria{}
	return &this
}

// GetMailingActionCodes returns the MailingActionCodes field value if set, zero value otherwise.
func (o *MailingActionCodesCriteria) GetMailingActionCodes() []MailingActionCodeType {
	if o == nil || IsNil(o.MailingActionCodes) {
		var ret []MailingActionCodeType
		return ret
	}
	return o.MailingActionCodes
}

// GetMailingActionCodesOk returns a tuple with the MailingActionCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MailingActionCodesCriteria) GetMailingActionCodesOk() ([]MailingActionCodeType, bool) {
	if o == nil || IsNil(o.MailingActionCodes) {
		return nil, false
	}
	return o.MailingActionCodes, true
}

// HasMailingActionCodes returns a boolean if a field has been set.
func (o *MailingActionCodesCriteria) HasMailingActionCodes() bool {
	if o != nil && !IsNil(o.MailingActionCodes) {
		return true
	}

	return false
}

// SetMailingActionCodes gets a reference to the given []MailingActionCodeType and assigns it to the MailingActionCodes field.
func (o *MailingActionCodesCriteria) SetMailingActionCodes(v []MailingActionCodeType) {
	o.MailingActionCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MailingActionCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MailingActionCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MailingActionCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MailingActionCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MailingActionCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MailingActionCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MailingActionCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MailingActionCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MailingActionCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MailingActionCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MailingActionCodes) {
		toSerialize["mailingActionCodes"] = o.MailingActionCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMailingActionCodesCriteria struct {
	value *MailingActionCodesCriteria
	isSet bool
}

func (v NullableMailingActionCodesCriteria) Get() *MailingActionCodesCriteria {
	return v.value
}

func (v *NullableMailingActionCodesCriteria) Set(val *MailingActionCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableMailingActionCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableMailingActionCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMailingActionCodesCriteria(val *MailingActionCodesCriteria) *NullableMailingActionCodesCriteria {
	return &NullableMailingActionCodesCriteria{value: val, isSet: true}
}

func (v NullableMailingActionCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMailingActionCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

