/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the WaitlistResType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &WaitlistResType{}

// WaitlistResType Information regarding why reservation is being /has been waitlisted.
type WaitlistResType struct {
	// Description why the reservation is being /has been waitlisted.
	Description *string `json:"description,omitempty"`
	// Waitlist Priority Code.
	PriorityCode *string `json:"priorityCode,omitempty"`
	// Waitlist priority Description.
	PriorityDescription *string `json:"priorityDescription,omitempty"`
	// Waitlist Reason Code.
	ReasonCode *string `json:"reasonCode,omitempty"`
	// Waitlist Reason Description.
	ReasonDescription *string `json:"reasonDescription,omitempty"`
	// Guest telephone number.
	Telephone *string `json:"telephone,omitempty"`
}

// NewWaitlistResType instantiates a new WaitlistResType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewWaitlistResType() *WaitlistResType {
	this := WaitlistResType{}
	return &this
}

// NewWaitlistResTypeWithDefaults instantiates a new WaitlistResType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewWaitlistResTypeWithDefaults() *WaitlistResType {
	this := WaitlistResType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *WaitlistResType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *WaitlistResType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *WaitlistResType) SetDescription(v string) {
	o.Description = &v
}

// GetPriorityCode returns the PriorityCode field value if set, zero value otherwise.
func (o *WaitlistResType) GetPriorityCode() string {
	if o == nil || IsNil(o.PriorityCode) {
		var ret string
		return ret
	}
	return *o.PriorityCode
}

// GetPriorityCodeOk returns a tuple with the PriorityCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetPriorityCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PriorityCode) {
		return nil, false
	}
	return o.PriorityCode, true
}

// HasPriorityCode returns a boolean if a field has been set.
func (o *WaitlistResType) HasPriorityCode() bool {
	if o != nil && !IsNil(o.PriorityCode) {
		return true
	}

	return false
}

// SetPriorityCode gets a reference to the given string and assigns it to the PriorityCode field.
func (o *WaitlistResType) SetPriorityCode(v string) {
	o.PriorityCode = &v
}

// GetPriorityDescription returns the PriorityDescription field value if set, zero value otherwise.
func (o *WaitlistResType) GetPriorityDescription() string {
	if o == nil || IsNil(o.PriorityDescription) {
		var ret string
		return ret
	}
	return *o.PriorityDescription
}

// GetPriorityDescriptionOk returns a tuple with the PriorityDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetPriorityDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PriorityDescription) {
		return nil, false
	}
	return o.PriorityDescription, true
}

// HasPriorityDescription returns a boolean if a field has been set.
func (o *WaitlistResType) HasPriorityDescription() bool {
	if o != nil && !IsNil(o.PriorityDescription) {
		return true
	}

	return false
}

// SetPriorityDescription gets a reference to the given string and assigns it to the PriorityDescription field.
func (o *WaitlistResType) SetPriorityDescription(v string) {
	o.PriorityDescription = &v
}

// GetReasonCode returns the ReasonCode field value if set, zero value otherwise.
func (o *WaitlistResType) GetReasonCode() string {
	if o == nil || IsNil(o.ReasonCode) {
		var ret string
		return ret
	}
	return *o.ReasonCode
}

// GetReasonCodeOk returns a tuple with the ReasonCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetReasonCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ReasonCode) {
		return nil, false
	}
	return o.ReasonCode, true
}

// HasReasonCode returns a boolean if a field has been set.
func (o *WaitlistResType) HasReasonCode() bool {
	if o != nil && !IsNil(o.ReasonCode) {
		return true
	}

	return false
}

// SetReasonCode gets a reference to the given string and assigns it to the ReasonCode field.
func (o *WaitlistResType) SetReasonCode(v string) {
	o.ReasonCode = &v
}

// GetReasonDescription returns the ReasonDescription field value if set, zero value otherwise.
func (o *WaitlistResType) GetReasonDescription() string {
	if o == nil || IsNil(o.ReasonDescription) {
		var ret string
		return ret
	}
	return *o.ReasonDescription
}

// GetReasonDescriptionOk returns a tuple with the ReasonDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetReasonDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ReasonDescription) {
		return nil, false
	}
	return o.ReasonDescription, true
}

// HasReasonDescription returns a boolean if a field has been set.
func (o *WaitlistResType) HasReasonDescription() bool {
	if o != nil && !IsNil(o.ReasonDescription) {
		return true
	}

	return false
}

// SetReasonDescription gets a reference to the given string and assigns it to the ReasonDescription field.
func (o *WaitlistResType) SetReasonDescription(v string) {
	o.ReasonDescription = &v
}

// GetTelephone returns the Telephone field value if set, zero value otherwise.
func (o *WaitlistResType) GetTelephone() string {
	if o == nil || IsNil(o.Telephone) {
		var ret string
		return ret
	}
	return *o.Telephone
}

// GetTelephoneOk returns a tuple with the Telephone field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *WaitlistResType) GetTelephoneOk() (*string, bool) {
	if o == nil || IsNil(o.Telephone) {
		return nil, false
	}
	return o.Telephone, true
}

// HasTelephone returns a boolean if a field has been set.
func (o *WaitlistResType) HasTelephone() bool {
	if o != nil && !IsNil(o.Telephone) {
		return true
	}

	return false
}

// SetTelephone gets a reference to the given string and assigns it to the Telephone field.
func (o *WaitlistResType) SetTelephone(v string) {
	o.Telephone = &v
}

func (o WaitlistResType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o WaitlistResType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.PriorityCode) {
		toSerialize["priorityCode"] = o.PriorityCode
	}
	if !IsNil(o.PriorityDescription) {
		toSerialize["priorityDescription"] = o.PriorityDescription
	}
	if !IsNil(o.ReasonCode) {
		toSerialize["reasonCode"] = o.ReasonCode
	}
	if !IsNil(o.ReasonDescription) {
		toSerialize["reasonDescription"] = o.ReasonDescription
	}
	if !IsNil(o.Telephone) {
		toSerialize["telephone"] = o.Telephone
	}
	return toSerialize, nil
}

type NullableWaitlistResType struct {
	value *WaitlistResType
	isSet bool
}

func (v NullableWaitlistResType) Get() *WaitlistResType {
	return v.value
}

func (v *NullableWaitlistResType) Set(val *WaitlistResType) {
	v.value = val
	v.isSet = true
}

func (v NullableWaitlistResType) IsSet() bool {
	return v.isSet
}

func (v *NullableWaitlistResType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWaitlistResType(val *WaitlistResType) *NullableWaitlistResType {
	return &NullableWaitlistResType{value: val, isSet: true}
}

func (v NullableWaitlistResType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWaitlistResType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


