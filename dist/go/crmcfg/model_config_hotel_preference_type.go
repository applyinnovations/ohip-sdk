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

// checks if the ConfigHotelPreferenceType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigHotelPreferenceType{}

// ConfigHotelPreferenceType Base details common between both template and property level preferences.
type ConfigHotelPreferenceType struct {
	// The description about the preference.
	Description *string `json:"description,omitempty"`
	// Specifies the preference code.
	Code *string `json:"code,omitempty"`
	// Specifies the preference group the preference belongs to.
	PreferenceGroup *string `json:"preferenceGroup,omitempty"`
	// This is a placeholder element for future use. Functionality may not be available for the current implementation.
	PreferenceSubGroup *string `json:"preferenceSubGroup,omitempty"`
	// Flag to indicate if this preference should be available on the Task Sheet Workflow configuration. It is only applicable for preference types FLOOR and SPECIALS.
	Housekeeping *bool `json:"housekeeping,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// Specifies the hotel code for which the preference is specified.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewConfigHotelPreferenceType instantiates a new ConfigHotelPreferenceType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigHotelPreferenceType() *ConfigHotelPreferenceType {
	this := ConfigHotelPreferenceType{}
	return &this
}

// NewConfigHotelPreferenceTypeWithDefaults instantiates a new ConfigHotelPreferenceType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigHotelPreferenceTypeWithDefaults() *ConfigHotelPreferenceType {
	this := ConfigHotelPreferenceType{}
	return &this
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ConfigHotelPreferenceType) SetDescription(v string) {
	o.Description = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ConfigHotelPreferenceType) SetCode(v string) {
	o.Code = &v
}

// GetPreferenceGroup returns the PreferenceGroup field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetPreferenceGroup() string {
	if o == nil || IsNil(o.PreferenceGroup) {
		var ret string
		return ret
	}
	return *o.PreferenceGroup
}

// GetPreferenceGroupOk returns a tuple with the PreferenceGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetPreferenceGroupOk() (*string, bool) {
	if o == nil || IsNil(o.PreferenceGroup) {
		return nil, false
	}
	return o.PreferenceGroup, true
}

// HasPreferenceGroup returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasPreferenceGroup() bool {
	if o != nil && !IsNil(o.PreferenceGroup) {
		return true
	}

	return false
}

// SetPreferenceGroup gets a reference to the given string and assigns it to the PreferenceGroup field.
func (o *ConfigHotelPreferenceType) SetPreferenceGroup(v string) {
	o.PreferenceGroup = &v
}

// GetPreferenceSubGroup returns the PreferenceSubGroup field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetPreferenceSubGroup() string {
	if o == nil || IsNil(o.PreferenceSubGroup) {
		var ret string
		return ret
	}
	return *o.PreferenceSubGroup
}

// GetPreferenceSubGroupOk returns a tuple with the PreferenceSubGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetPreferenceSubGroupOk() (*string, bool) {
	if o == nil || IsNil(o.PreferenceSubGroup) {
		return nil, false
	}
	return o.PreferenceSubGroup, true
}

// HasPreferenceSubGroup returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasPreferenceSubGroup() bool {
	if o != nil && !IsNil(o.PreferenceSubGroup) {
		return true
	}

	return false
}

// SetPreferenceSubGroup gets a reference to the given string and assigns it to the PreferenceSubGroup field.
func (o *ConfigHotelPreferenceType) SetPreferenceSubGroup(v string) {
	o.PreferenceSubGroup = &v
}

// GetHousekeeping returns the Housekeeping field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetHousekeeping() bool {
	if o == nil || IsNil(o.Housekeeping) {
		var ret bool
		return ret
	}
	return *o.Housekeeping
}

// GetHousekeepingOk returns a tuple with the Housekeeping field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetHousekeepingOk() (*bool, bool) {
	if o == nil || IsNil(o.Housekeeping) {
		return nil, false
	}
	return o.Housekeeping, true
}

// HasHousekeeping returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasHousekeeping() bool {
	if o != nil && !IsNil(o.Housekeeping) {
		return true
	}

	return false
}

// SetHousekeeping gets a reference to the given bool and assigns it to the Housekeeping field.
func (o *ConfigHotelPreferenceType) SetHousekeeping(v bool) {
	o.Housekeeping = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *ConfigHotelPreferenceType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigHotelPreferenceType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigHotelPreferenceType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigHotelPreferenceType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigHotelPreferenceType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o ConfigHotelPreferenceType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigHotelPreferenceType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.PreferenceGroup) {
		toSerialize["preferenceGroup"] = o.PreferenceGroup
	}
	if !IsNil(o.PreferenceSubGroup) {
		toSerialize["preferenceSubGroup"] = o.PreferenceSubGroup
	}
	if !IsNil(o.Housekeeping) {
		toSerialize["housekeeping"] = o.Housekeeping
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableConfigHotelPreferenceType struct {
	value *ConfigHotelPreferenceType
	isSet bool
}

func (v NullableConfigHotelPreferenceType) Get() *ConfigHotelPreferenceType {
	return v.value
}

func (v *NullableConfigHotelPreferenceType) Set(val *ConfigHotelPreferenceType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigHotelPreferenceType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigHotelPreferenceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigHotelPreferenceType(val *ConfigHotelPreferenceType) *NullableConfigHotelPreferenceType {
	return &NullableConfigHotelPreferenceType{value: val, isSet: true}
}

func (v NullableConfigHotelPreferenceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigHotelPreferenceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

