/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the RestrictionInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RestrictionInfoType{}

// RestrictionInfoType struct for RestrictionInfoType
type RestrictionInfoType struct {
	RestrictionStatus *RestrictionInfoStatusType `json:"restrictionStatus,omitempty"`
}

// NewRestrictionInfoType instantiates a new RestrictionInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRestrictionInfoType() *RestrictionInfoType {
	this := RestrictionInfoType{}
	return &this
}

// NewRestrictionInfoTypeWithDefaults instantiates a new RestrictionInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRestrictionInfoTypeWithDefaults() *RestrictionInfoType {
	this := RestrictionInfoType{}
	return &this
}

// GetRestrictionStatus returns the RestrictionStatus field value if set, zero value otherwise.
func (o *RestrictionInfoType) GetRestrictionStatus() RestrictionInfoStatusType {
	if o == nil || IsNil(o.RestrictionStatus) {
		var ret RestrictionInfoStatusType
		return ret
	}
	return *o.RestrictionStatus
}

// GetRestrictionStatusOk returns a tuple with the RestrictionStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RestrictionInfoType) GetRestrictionStatusOk() (*RestrictionInfoStatusType, bool) {
	if o == nil || IsNil(o.RestrictionStatus) {
		return nil, false
	}
	return o.RestrictionStatus, true
}

// HasRestrictionStatus returns a boolean if a field has been set.
func (o *RestrictionInfoType) HasRestrictionStatus() bool {
	if o != nil && !IsNil(o.RestrictionStatus) {
		return true
	}

	return false
}

// SetRestrictionStatus gets a reference to the given RestrictionInfoStatusType and assigns it to the RestrictionStatus field.
func (o *RestrictionInfoType) SetRestrictionStatus(v RestrictionInfoStatusType) {
	o.RestrictionStatus = &v
}

func (o RestrictionInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RestrictionInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.RestrictionStatus) {
		toSerialize["restrictionStatus"] = o.RestrictionStatus
	}
	return toSerialize, nil
}

type NullableRestrictionInfoType struct {
	value *RestrictionInfoType
	isSet bool
}

func (v NullableRestrictionInfoType) Get() *RestrictionInfoType {
	return v.value
}

func (v *NullableRestrictionInfoType) Set(val *RestrictionInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableRestrictionInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableRestrictionInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRestrictionInfoType(val *RestrictionInfoType) *NullableRestrictionInfoType {
	return &NullableRestrictionInfoType{value: val, isSet: true}
}

func (v NullableRestrictionInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRestrictionInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


