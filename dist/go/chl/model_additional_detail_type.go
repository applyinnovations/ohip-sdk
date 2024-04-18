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

// checks if the AdditionalDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AdditionalDetailType{}

// AdditionalDetailType struct for AdditionalDetailType
type AdditionalDetailType struct {
	Description *string `json:"description,omitempty"`
	DetailType *string `json:"detailType,omitempty"`
	OtherDetailType *string `json:"otherDetailType,omitempty"`
}

// NewAdditionalDetailType instantiates a new AdditionalDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAdditionalDetailType() *AdditionalDetailType {
	this := AdditionalDetailType{}
	return &this
}

// NewAdditionalDetailTypeWithDefaults instantiates a new AdditionalDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAdditionalDetailTypeWithDefaults() *AdditionalDetailType {
	this := AdditionalDetailType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *AdditionalDetailType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdditionalDetailType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *AdditionalDetailType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *AdditionalDetailType) SetDescription(v string) {
	o.Description = &v
}

// GetDetailType returns the DetailType field value if set, zero value otherwise.
func (o *AdditionalDetailType) GetDetailType() string {
	if o == nil || IsNil(o.DetailType) {
		var ret string
		return ret
	}
	return *o.DetailType
}

// GetDetailTypeOk returns a tuple with the DetailType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdditionalDetailType) GetDetailTypeOk() (*string, bool) {
	if o == nil || IsNil(o.DetailType) {
		return nil, false
	}
	return o.DetailType, true
}

// HasDetailType returns a boolean if a field has been set.
func (o *AdditionalDetailType) HasDetailType() bool {
	if o != nil && !IsNil(o.DetailType) {
		return true
	}

	return false
}

// SetDetailType gets a reference to the given string and assigns it to the DetailType field.
func (o *AdditionalDetailType) SetDetailType(v string) {
	o.DetailType = &v
}

// GetOtherDetailType returns the OtherDetailType field value if set, zero value otherwise.
func (o *AdditionalDetailType) GetOtherDetailType() string {
	if o == nil || IsNil(o.OtherDetailType) {
		var ret string
		return ret
	}
	return *o.OtherDetailType
}

// GetOtherDetailTypeOk returns a tuple with the OtherDetailType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AdditionalDetailType) GetOtherDetailTypeOk() (*string, bool) {
	if o == nil || IsNil(o.OtherDetailType) {
		return nil, false
	}
	return o.OtherDetailType, true
}

// HasOtherDetailType returns a boolean if a field has been set.
func (o *AdditionalDetailType) HasOtherDetailType() bool {
	if o != nil && !IsNil(o.OtherDetailType) {
		return true
	}

	return false
}

// SetOtherDetailType gets a reference to the given string and assigns it to the OtherDetailType field.
func (o *AdditionalDetailType) SetOtherDetailType(v string) {
	o.OtherDetailType = &v
}

func (o AdditionalDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AdditionalDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.DetailType) {
		toSerialize["detailType"] = o.DetailType
	}
	if !IsNil(o.OtherDetailType) {
		toSerialize["otherDetailType"] = o.OtherDetailType
	}
	return toSerialize, nil
}

type NullableAdditionalDetailType struct {
	value *AdditionalDetailType
	isSet bool
}

func (v NullableAdditionalDetailType) Get() *AdditionalDetailType {
	return v.value
}

func (v *NullableAdditionalDetailType) Set(val *AdditionalDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableAdditionalDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableAdditionalDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAdditionalDetailType(val *AdditionalDetailType) *NullableAdditionalDetailType {
	return &NullableAdditionalDetailType{value: val, isSet: true}
}

func (v NullableAdditionalDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAdditionalDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

