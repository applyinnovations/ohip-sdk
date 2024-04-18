/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the CopyPromotionGroupsCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyPromotionGroupsCriteriaType{}

// CopyPromotionGroupsCriteriaType Copy Promotion Groups criteria type to copy multiple Promotion Groups from one Hotel to another Hotel.
type CopyPromotionGroupsCriteriaType struct {
	CopyPromotionGroups *CopyPromotionGroupsCriteriaTypeCopyPromotionGroups `json:"copyPromotionGroups,omitempty"`
}

// NewCopyPromotionGroupsCriteriaType instantiates a new CopyPromotionGroupsCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyPromotionGroupsCriteriaType() *CopyPromotionGroupsCriteriaType {
	this := CopyPromotionGroupsCriteriaType{}
	return &this
}

// NewCopyPromotionGroupsCriteriaTypeWithDefaults instantiates a new CopyPromotionGroupsCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyPromotionGroupsCriteriaTypeWithDefaults() *CopyPromotionGroupsCriteriaType {
	this := CopyPromotionGroupsCriteriaType{}
	return &this
}

// GetCopyPromotionGroups returns the CopyPromotionGroups field value if set, zero value otherwise.
func (o *CopyPromotionGroupsCriteriaType) GetCopyPromotionGroups() CopyPromotionGroupsCriteriaTypeCopyPromotionGroups {
	if o == nil || IsNil(o.CopyPromotionGroups) {
		var ret CopyPromotionGroupsCriteriaTypeCopyPromotionGroups
		return ret
	}
	return *o.CopyPromotionGroups
}

// GetCopyPromotionGroupsOk returns a tuple with the CopyPromotionGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyPromotionGroupsCriteriaType) GetCopyPromotionGroupsOk() (*CopyPromotionGroupsCriteriaTypeCopyPromotionGroups, bool) {
	if o == nil || IsNil(o.CopyPromotionGroups) {
		return nil, false
	}
	return o.CopyPromotionGroups, true
}

// HasCopyPromotionGroups returns a boolean if a field has been set.
func (o *CopyPromotionGroupsCriteriaType) HasCopyPromotionGroups() bool {
	if o != nil && !IsNil(o.CopyPromotionGroups) {
		return true
	}

	return false
}

// SetCopyPromotionGroups gets a reference to the given CopyPromotionGroupsCriteriaTypeCopyPromotionGroups and assigns it to the CopyPromotionGroups field.
func (o *CopyPromotionGroupsCriteriaType) SetCopyPromotionGroups(v CopyPromotionGroupsCriteriaTypeCopyPromotionGroups) {
	o.CopyPromotionGroups = &v
}

func (o CopyPromotionGroupsCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyPromotionGroupsCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyPromotionGroups) {
		toSerialize["copyPromotionGroups"] = o.CopyPromotionGroups
	}
	return toSerialize, nil
}

type NullableCopyPromotionGroupsCriteriaType struct {
	value *CopyPromotionGroupsCriteriaType
	isSet bool
}

func (v NullableCopyPromotionGroupsCriteriaType) Get() *CopyPromotionGroupsCriteriaType {
	return v.value
}

func (v *NullableCopyPromotionGroupsCriteriaType) Set(val *CopyPromotionGroupsCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyPromotionGroupsCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyPromotionGroupsCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyPromotionGroupsCriteriaType(val *CopyPromotionGroupsCriteriaType) *NullableCopyPromotionGroupsCriteriaType {
	return &NullableCopyPromotionGroupsCriteriaType{value: val, isSet: true}
}

func (v NullableCopyPromotionGroupsCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyPromotionGroupsCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

