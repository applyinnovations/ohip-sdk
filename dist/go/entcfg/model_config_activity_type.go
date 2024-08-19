/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ConfigActivityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigActivityType{}

// ConfigActivityType Changes log record to import/Export/Delete customization operations.
type ConfigActivityType struct {
	// Action Type: MDS_IMP, MDS_EXP, MDS_DEL, MDS_EXP_UNENC, MDS_IMP_UNENC.
	ActionType *string `json:"actionType,omitempty"`
	// action, layer, org name, user name and screen name or file name or path.
	ActionDescription *string `json:"actionDescription,omitempty"`
	// Code that uniquely identifies the hotel belonging to the organization.
	HotelId *string `json:"hotelId,omitempty"`
}

// NewConfigActivityType instantiates a new ConfigActivityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigActivityType() *ConfigActivityType {
	this := ConfigActivityType{}
	return &this
}

// NewConfigActivityTypeWithDefaults instantiates a new ConfigActivityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigActivityTypeWithDefaults() *ConfigActivityType {
	this := ConfigActivityType{}
	return &this
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *ConfigActivityType) GetActionType() string {
	if o == nil || IsNil(o.ActionType) {
		var ret string
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigActivityType) GetActionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *ConfigActivityType) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given string and assigns it to the ActionType field.
func (o *ConfigActivityType) SetActionType(v string) {
	o.ActionType = &v
}

// GetActionDescription returns the ActionDescription field value if set, zero value otherwise.
func (o *ConfigActivityType) GetActionDescription() string {
	if o == nil || IsNil(o.ActionDescription) {
		var ret string
		return ret
	}
	return *o.ActionDescription
}

// GetActionDescriptionOk returns a tuple with the ActionDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigActivityType) GetActionDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ActionDescription) {
		return nil, false
	}
	return o.ActionDescription, true
}

// HasActionDescription returns a boolean if a field has been set.
func (o *ConfigActivityType) HasActionDescription() bool {
	if o != nil && !IsNil(o.ActionDescription) {
		return true
	}

	return false
}

// SetActionDescription gets a reference to the given string and assigns it to the ActionDescription field.
func (o *ConfigActivityType) SetActionDescription(v string) {
	o.ActionDescription = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ConfigActivityType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigActivityType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ConfigActivityType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ConfigActivityType) SetHotelId(v string) {
	o.HotelId = &v
}

func (o ConfigActivityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigActivityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.ActionDescription) {
		toSerialize["actionDescription"] = o.ActionDescription
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	return toSerialize, nil
}

type NullableConfigActivityType struct {
	value *ConfigActivityType
	isSet bool
}

func (v NullableConfigActivityType) Get() *ConfigActivityType {
	return v.value
}

func (v *NullableConfigActivityType) Set(val *ConfigActivityType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigActivityType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigActivityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigActivityType(val *ConfigActivityType) *NullableConfigActivityType {
	return &NullableConfigActivityType{value: val, isSet: true}
}

func (v NullableConfigActivityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigActivityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


