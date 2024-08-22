/*
OPERA Cloud API for Customer Management Service

This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cms

import (
	"encoding/json"
)

// checks if the AnonymizationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AnonymizationType{}

// AnonymizationType Provides information about guest's anonymization status.
type AnonymizationType struct {
	// Date and Time when the guest was anonymized.
	AnonymizationDate *string `json:"anonymizationDate,omitempty"`
	AnonymizationStatus *AnonymizationStatusType `json:"anonymizationStatus,omitempty"`
}

// NewAnonymizationType instantiates a new AnonymizationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAnonymizationType() *AnonymizationType {
	this := AnonymizationType{}
	return &this
}

// NewAnonymizationTypeWithDefaults instantiates a new AnonymizationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAnonymizationTypeWithDefaults() *AnonymizationType {
	this := AnonymizationType{}
	return &this
}

// GetAnonymizationDate returns the AnonymizationDate field value if set, zero value otherwise.
func (o *AnonymizationType) GetAnonymizationDate() string {
	if o == nil || IsNil(o.AnonymizationDate) {
		var ret string
		return ret
	}
	return *o.AnonymizationDate
}

// GetAnonymizationDateOk returns a tuple with the AnonymizationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AnonymizationType) GetAnonymizationDateOk() (*string, bool) {
	if o == nil || IsNil(o.AnonymizationDate) {
		return nil, false
	}
	return o.AnonymizationDate, true
}

// HasAnonymizationDate returns a boolean if a field has been set.
func (o *AnonymizationType) HasAnonymizationDate() bool {
	if o != nil && !IsNil(o.AnonymizationDate) {
		return true
	}

	return false
}

// SetAnonymizationDate gets a reference to the given string and assigns it to the AnonymizationDate field.
func (o *AnonymizationType) SetAnonymizationDate(v string) {
	o.AnonymizationDate = &v
}

// GetAnonymizationStatus returns the AnonymizationStatus field value if set, zero value otherwise.
func (o *AnonymizationType) GetAnonymizationStatus() AnonymizationStatusType {
	if o == nil || IsNil(o.AnonymizationStatus) {
		var ret AnonymizationStatusType
		return ret
	}
	return *o.AnonymizationStatus
}

// GetAnonymizationStatusOk returns a tuple with the AnonymizationStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AnonymizationType) GetAnonymizationStatusOk() (*AnonymizationStatusType, bool) {
	if o == nil || IsNil(o.AnonymizationStatus) {
		return nil, false
	}
	return o.AnonymizationStatus, true
}

// HasAnonymizationStatus returns a boolean if a field has been set.
func (o *AnonymizationType) HasAnonymizationStatus() bool {
	if o != nil && !IsNil(o.AnonymizationStatus) {
		return true
	}

	return false
}

// SetAnonymizationStatus gets a reference to the given AnonymizationStatusType and assigns it to the AnonymizationStatus field.
func (o *AnonymizationType) SetAnonymizationStatus(v AnonymizationStatusType) {
	o.AnonymizationStatus = &v
}

func (o AnonymizationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AnonymizationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AnonymizationDate) {
		toSerialize["anonymizationDate"] = o.AnonymizationDate
	}
	if !IsNil(o.AnonymizationStatus) {
		toSerialize["anonymizationStatus"] = o.AnonymizationStatus
	}
	return toSerialize, nil
}

type NullableAnonymizationType struct {
	value *AnonymizationType
	isSet bool
}

func (v NullableAnonymizationType) Get() *AnonymizationType {
	return v.value
}

func (v *NullableAnonymizationType) Set(val *AnonymizationType) {
	v.value = val
	v.isSet = true
}

func (v NullableAnonymizationType) IsSet() bool {
	return v.isSet
}

func (v *NullableAnonymizationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAnonymizationType(val *AnonymizationType) *NullableAnonymizationType {
	return &NullableAnonymizationType{value: val, isSet: true}
}

func (v NullableAnonymizationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAnonymizationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


