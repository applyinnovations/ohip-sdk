/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the ArDeliveryMethodType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ArDeliveryMethodType{}

// ArDeliveryMethodType Delivery Method configuration for Email and Fax Delivery for Accounts Receivables.
type ArDeliveryMethodType struct {
	Email *EmailDeliveryConfigurationType `json:"email,omitempty"`
	Fax *FaxDeliveryConfigurationType `json:"fax,omitempty"`
}

// NewArDeliveryMethodType instantiates a new ArDeliveryMethodType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArDeliveryMethodType() *ArDeliveryMethodType {
	this := ArDeliveryMethodType{}
	return &this
}

// NewArDeliveryMethodTypeWithDefaults instantiates a new ArDeliveryMethodType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArDeliveryMethodTypeWithDefaults() *ArDeliveryMethodType {
	this := ArDeliveryMethodType{}
	return &this
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *ArDeliveryMethodType) GetEmail() EmailDeliveryConfigurationType {
	if o == nil || IsNil(o.Email) {
		var ret EmailDeliveryConfigurationType
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArDeliveryMethodType) GetEmailOk() (*EmailDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *ArDeliveryMethodType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given EmailDeliveryConfigurationType and assigns it to the Email field.
func (o *ArDeliveryMethodType) SetEmail(v EmailDeliveryConfigurationType) {
	o.Email = &v
}

// GetFax returns the Fax field value if set, zero value otherwise.
func (o *ArDeliveryMethodType) GetFax() FaxDeliveryConfigurationType {
	if o == nil || IsNil(o.Fax) {
		var ret FaxDeliveryConfigurationType
		return ret
	}
	return *o.Fax
}

// GetFaxOk returns a tuple with the Fax field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArDeliveryMethodType) GetFaxOk() (*FaxDeliveryConfigurationType, bool) {
	if o == nil || IsNil(o.Fax) {
		return nil, false
	}
	return o.Fax, true
}

// HasFax returns a boolean if a field has been set.
func (o *ArDeliveryMethodType) HasFax() bool {
	if o != nil && !IsNil(o.Fax) {
		return true
	}

	return false
}

// SetFax gets a reference to the given FaxDeliveryConfigurationType and assigns it to the Fax field.
func (o *ArDeliveryMethodType) SetFax(v FaxDeliveryConfigurationType) {
	o.Fax = &v
}

func (o ArDeliveryMethodType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ArDeliveryMethodType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	if !IsNil(o.Fax) {
		toSerialize["fax"] = o.Fax
	}
	return toSerialize, nil
}

type NullableArDeliveryMethodType struct {
	value *ArDeliveryMethodType
	isSet bool
}

func (v NullableArDeliveryMethodType) Get() *ArDeliveryMethodType {
	return v.value
}

func (v *NullableArDeliveryMethodType) Set(val *ArDeliveryMethodType) {
	v.value = val
	v.isSet = true
}

func (v NullableArDeliveryMethodType) IsSet() bool {
	return v.isSet
}

func (v *NullableArDeliveryMethodType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArDeliveryMethodType(val *ArDeliveryMethodType) *NullableArDeliveryMethodType {
	return &NullableArDeliveryMethodType{value: val, isSet: true}
}

func (v NullableArDeliveryMethodType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArDeliveryMethodType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


