/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ARAccountStatusType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ARAccountStatusType{}

// ARAccountStatusType Type for the Account Status. Status can be restricted and a message/description added to the Account.
type ARAccountStatusType struct {
	// User defined status message on the Account.
	Description *string `json:"description,omitempty"`
	// Flag to indicate if the Account is restricted.
	Restricted *bool `json:"restricted,omitempty"`
	// The Restriction Code added on the Account. This is available when the functionality for adding restriction codes is ON.
	Restriction *string `json:"restriction,omitempty"`
}

// NewARAccountStatusType instantiates a new ARAccountStatusType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewARAccountStatusType() *ARAccountStatusType {
	this := ARAccountStatusType{}
	return &this
}

// NewARAccountStatusTypeWithDefaults instantiates a new ARAccountStatusType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewARAccountStatusTypeWithDefaults() *ARAccountStatusType {
	this := ARAccountStatusType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ARAccountStatusType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountStatusType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ARAccountStatusType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ARAccountStatusType) SetDescription(v string) {
	o.Description = &v
}

// GetRestricted returns the Restricted field value if set, zero value otherwise.
func (o *ARAccountStatusType) GetRestricted() bool {
	if o == nil || IsNil(o.Restricted) {
		var ret bool
		return ret
	}
	return *o.Restricted
}

// GetRestrictedOk returns a tuple with the Restricted field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountStatusType) GetRestrictedOk() (*bool, bool) {
	if o == nil || IsNil(o.Restricted) {
		return nil, false
	}
	return o.Restricted, true
}

// HasRestricted returns a boolean if a field has been set.
func (o *ARAccountStatusType) HasRestricted() bool {
	if o != nil && !IsNil(o.Restricted) {
		return true
	}

	return false
}

// SetRestricted gets a reference to the given bool and assigns it to the Restricted field.
func (o *ARAccountStatusType) SetRestricted(v bool) {
	o.Restricted = &v
}

// GetRestriction returns the Restriction field value if set, zero value otherwise.
func (o *ARAccountStatusType) GetRestriction() string {
	if o == nil || IsNil(o.Restriction) {
		var ret string
		return ret
	}
	return *o.Restriction
}

// GetRestrictionOk returns a tuple with the Restriction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ARAccountStatusType) GetRestrictionOk() (*string, bool) {
	if o == nil || IsNil(o.Restriction) {
		return nil, false
	}
	return o.Restriction, true
}

// HasRestriction returns a boolean if a field has been set.
func (o *ARAccountStatusType) HasRestriction() bool {
	if o != nil && !IsNil(o.Restriction) {
		return true
	}

	return false
}

// SetRestriction gets a reference to the given string and assigns it to the Restriction field.
func (o *ARAccountStatusType) SetRestriction(v string) {
	o.Restriction = &v
}

func (o ARAccountStatusType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ARAccountStatusType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Restricted) {
		toSerialize["restricted"] = o.Restricted
	}
	if !IsNil(o.Restriction) {
		toSerialize["restriction"] = o.Restriction
	}
	return toSerialize, nil
}

type NullableARAccountStatusType struct {
	value *ARAccountStatusType
	isSet bool
}

func (v NullableARAccountStatusType) Get() *ARAccountStatusType {
	return v.value
}

func (v *NullableARAccountStatusType) Set(val *ARAccountStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableARAccountStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableARAccountStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARAccountStatusType(val *ARAccountStatusType) *NullableARAccountStatusType {
	return &NullableARAccountStatusType{value: val, isSet: true}
}

func (v NullableARAccountStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARAccountStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


