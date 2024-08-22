/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ResCommunicationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResCommunicationType{}

// ResCommunicationType Communication details for a reservation.
type ResCommunicationType struct {
	Emails *ProfileTypeEmails `json:"emails,omitempty"`
	Telephones *ProfileTypeTelephones `json:"telephones,omitempty"`
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
func (o *ResCommunicationType) GetEmails() ProfileTypeEmails {
	if o == nil || IsNil(o.Emails) {
		var ret ProfileTypeEmails
		return ret
	}
	return *o.Emails
}

// GetEmailsOk returns a tuple with the Emails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCommunicationType) GetEmailsOk() (*ProfileTypeEmails, bool) {
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

// SetEmails gets a reference to the given ProfileTypeEmails and assigns it to the Emails field.
func (o *ResCommunicationType) SetEmails(v ProfileTypeEmails) {
	o.Emails = &v
}

// GetTelephones returns the Telephones field value if set, zero value otherwise.
func (o *ResCommunicationType) GetTelephones() ProfileTypeTelephones {
	if o == nil || IsNil(o.Telephones) {
		var ret ProfileTypeTelephones
		return ret
	}
	return *o.Telephones
}

// GetTelephonesOk returns a tuple with the Telephones field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResCommunicationType) GetTelephonesOk() (*ProfileTypeTelephones, bool) {
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

// SetTelephones gets a reference to the given ProfileTypeTelephones and assigns it to the Telephones field.
func (o *ResCommunicationType) SetTelephones(v ProfileTypeTelephones) {
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


