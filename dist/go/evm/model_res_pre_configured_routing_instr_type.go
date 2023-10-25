/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the ResPreConfiguredRoutingInstrType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResPreConfiguredRoutingInstrType{}

// ResPreConfiguredRoutingInstrType Instruction to attach Pre-Configured Routing Instructions to a Reservation.
type ResPreConfiguredRoutingInstrType struct {
	AuthorizerInfo *AuthorizerInfoType `json:"authorizerInfo,omitempty"`
	ProfileType *ResProfileTypeType `json:"profileType,omitempty"`
	// Promotion Code with attached Complimentary Routing.
	PromotionCode *string `json:"promotionCode,omitempty"`
	// Rate Code with attached Routing Instruction.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
}

// NewResPreConfiguredRoutingInstrType instantiates a new ResPreConfiguredRoutingInstrType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResPreConfiguredRoutingInstrType() *ResPreConfiguredRoutingInstrType {
	this := ResPreConfiguredRoutingInstrType{}
	return &this
}

// NewResPreConfiguredRoutingInstrTypeWithDefaults instantiates a new ResPreConfiguredRoutingInstrType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResPreConfiguredRoutingInstrTypeWithDefaults() *ResPreConfiguredRoutingInstrType {
	this := ResPreConfiguredRoutingInstrType{}
	return &this
}

// GetAuthorizerInfo returns the AuthorizerInfo field value if set, zero value otherwise.
func (o *ResPreConfiguredRoutingInstrType) GetAuthorizerInfo() AuthorizerInfoType {
	if o == nil || IsNil(o.AuthorizerInfo) {
		var ret AuthorizerInfoType
		return ret
	}
	return *o.AuthorizerInfo
}

// GetAuthorizerInfoOk returns a tuple with the AuthorizerInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPreConfiguredRoutingInstrType) GetAuthorizerInfoOk() (*AuthorizerInfoType, bool) {
	if o == nil || IsNil(o.AuthorizerInfo) {
		return nil, false
	}
	return o.AuthorizerInfo, true
}

// HasAuthorizerInfo returns a boolean if a field has been set.
func (o *ResPreConfiguredRoutingInstrType) HasAuthorizerInfo() bool {
	if o != nil && !IsNil(o.AuthorizerInfo) {
		return true
	}

	return false
}

// SetAuthorizerInfo gets a reference to the given AuthorizerInfoType and assigns it to the AuthorizerInfo field.
func (o *ResPreConfiguredRoutingInstrType) SetAuthorizerInfo(v AuthorizerInfoType) {
	o.AuthorizerInfo = &v
}

// GetProfileType returns the ProfileType field value if set, zero value otherwise.
func (o *ResPreConfiguredRoutingInstrType) GetProfileType() ResProfileTypeType {
	if o == nil || IsNil(o.ProfileType) {
		var ret ResProfileTypeType
		return ret
	}
	return *o.ProfileType
}

// GetProfileTypeOk returns a tuple with the ProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPreConfiguredRoutingInstrType) GetProfileTypeOk() (*ResProfileTypeType, bool) {
	if o == nil || IsNil(o.ProfileType) {
		return nil, false
	}
	return o.ProfileType, true
}

// HasProfileType returns a boolean if a field has been set.
func (o *ResPreConfiguredRoutingInstrType) HasProfileType() bool {
	if o != nil && !IsNil(o.ProfileType) {
		return true
	}

	return false
}

// SetProfileType gets a reference to the given ResProfileTypeType and assigns it to the ProfileType field.
func (o *ResPreConfiguredRoutingInstrType) SetProfileType(v ResProfileTypeType) {
	o.ProfileType = &v
}

// GetPromotionCode returns the PromotionCode field value if set, zero value otherwise.
func (o *ResPreConfiguredRoutingInstrType) GetPromotionCode() string {
	if o == nil || IsNil(o.PromotionCode) {
		var ret string
		return ret
	}
	return *o.PromotionCode
}

// GetPromotionCodeOk returns a tuple with the PromotionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPreConfiguredRoutingInstrType) GetPromotionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.PromotionCode) {
		return nil, false
	}
	return o.PromotionCode, true
}

// HasPromotionCode returns a boolean if a field has been set.
func (o *ResPreConfiguredRoutingInstrType) HasPromotionCode() bool {
	if o != nil && !IsNil(o.PromotionCode) {
		return true
	}

	return false
}

// SetPromotionCode gets a reference to the given string and assigns it to the PromotionCode field.
func (o *ResPreConfiguredRoutingInstrType) SetPromotionCode(v string) {
	o.PromotionCode = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ResPreConfiguredRoutingInstrType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResPreConfiguredRoutingInstrType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ResPreConfiguredRoutingInstrType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ResPreConfiguredRoutingInstrType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

func (o ResPreConfiguredRoutingInstrType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResPreConfiguredRoutingInstrType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AuthorizerInfo) {
		toSerialize["authorizerInfo"] = o.AuthorizerInfo
	}
	if !IsNil(o.ProfileType) {
		toSerialize["profileType"] = o.ProfileType
	}
	if !IsNil(o.PromotionCode) {
		toSerialize["promotionCode"] = o.PromotionCode
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	return toSerialize, nil
}

type NullableResPreConfiguredRoutingInstrType struct {
	value *ResPreConfiguredRoutingInstrType
	isSet bool
}

func (v NullableResPreConfiguredRoutingInstrType) Get() *ResPreConfiguredRoutingInstrType {
	return v.value
}

func (v *NullableResPreConfiguredRoutingInstrType) Set(val *ResPreConfiguredRoutingInstrType) {
	v.value = val
	v.isSet = true
}

func (v NullableResPreConfiguredRoutingInstrType) IsSet() bool {
	return v.isSet
}

func (v *NullableResPreConfiguredRoutingInstrType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResPreConfiguredRoutingInstrType(val *ResPreConfiguredRoutingInstrType) *NullableResPreConfiguredRoutingInstrType {
	return &NullableResPreConfiguredRoutingInstrType{value: val, isSet: true}
}

func (v NullableResPreConfiguredRoutingInstrType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResPreConfiguredRoutingInstrType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


