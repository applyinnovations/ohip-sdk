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

// checks if the ResCommunicationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResCommunicationType{}

// ResCommunicationType Communication details for a reservation.
type ResCommunicationType struct {
	Emails *ProfileEnrollmentTypeEmails `json:"emails,omitempty"`
	Telephones *ProfileEnrollmentTypeTelephones `json:"telephones,omitempty"`
}

// NewResCommunicationType instantiates a new ResCommunicationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResCommunicationType() *ResCommunicationType {
	this := ResCommunicationType{}
	return &this
}

// NewResCommunicationTypeWithDefaults instantiates a new ResCommunicationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResCommunicationTypeWithDefaults() *ResCommunicationType {
	this := ResCommunicationType{}
	return &this
}

// GetEmails returns the Emails field value if set, zero value otherwise.
func (o *ResCommunicationType) GetEmails() ProfileEnrollmentTypeEmails {
	if o == nil || IsNil(o.Emails) {
		var ret ProfileEnrollmentTypeEmails
		return ret
	}
	return *o.Emails
}

// GetEmailsOk returns a tuple with the Emails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCommunicationType) GetEmailsOk() (*ProfileEnrollmentTypeEmails, bool) {
	if o == nil || IsNil(o.Emails) {
		return nil, false
	}
	return o.Emails, true
}

// HasEmails returns a boolean if a field has been set.
func (o *ResCommunicationType) HasEmails() bool {
	if o != nil && !IsNil(o.Emails) {
		return true
	}

	return false
}

// SetEmails gets a reference to the given ProfileEnrollmentTypeEmails and assigns it to the Emails field.
func (o *ResCommunicationType) SetEmails(v ProfileEnrollmentTypeEmails) {
	o.Emails = &v
}

// GetTelephones returns the Telephones field value if set, zero value otherwise.
func (o *ResCommunicationType) GetTelephones() ProfileEnrollmentTypeTelephones {
	if o == nil || IsNil(o.Telephones) {
		var ret ProfileEnrollmentTypeTelephones
		return ret
	}
	return *o.Telephones
}

// GetTelephonesOk returns a tuple with the Telephones field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCommunicationType) GetTelephonesOk() (*ProfileEnrollmentTypeTelephones, bool) {
	if o == nil || IsNil(o.Telephones) {
		return nil, false
	}
	return o.Telephones, true
}

// HasTelephones returns a boolean if a field has been set.
func (o *ResCommunicationType) HasTelephones() bool {
	if o != nil && !IsNil(o.Telephones) {
		return true
	}

	return false
}

// SetTelephones gets a reference to the given ProfileEnrollmentTypeTelephones and assigns it to the Telephones field.
func (o *ResCommunicationType) SetTelephones(v ProfileEnrollmentTypeTelephones) {
	o.Telephones = &v
}

func (o ResCommunicationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResCommunicationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Emails) {
		toSerialize["emails"] = o.Emails
	}
	if !IsNil(o.Telephones) {
		toSerialize["telephones"] = o.Telephones
	}
	return toSerialize, nil
}

type NullableResCommunicationType struct {
	value *ResCommunicationType
	isSet bool
}

func (v NullableResCommunicationType) Get() *ResCommunicationType {
	return v.value
}

func (v *NullableResCommunicationType) Set(val *ResCommunicationType) {
	v.value = val
	v.isSet = true
}

func (v NullableResCommunicationType) IsSet() bool {
	return v.isSet
}

func (v *NullableResCommunicationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResCommunicationType(val *ResCommunicationType) *NullableResCommunicationType {
	return &NullableResCommunicationType{value: val, isSet: true}
}

func (v NullableResCommunicationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResCommunicationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

