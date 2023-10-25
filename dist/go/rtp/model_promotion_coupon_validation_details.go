/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the PromotionCouponValidationDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PromotionCouponValidationDetails{}

// PromotionCouponValidationDetails Response for validating a coupon.
type PromotionCouponValidationDetails struct {
	CouponInfo *CouponInfoType `json:"couponInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPromotionCouponValidationDetails instantiates a new PromotionCouponValidationDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPromotionCouponValidationDetails() *PromotionCouponValidationDetails {
	this := PromotionCouponValidationDetails{}
	return &this
}

// NewPromotionCouponValidationDetailsWithDefaults instantiates a new PromotionCouponValidationDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPromotionCouponValidationDetailsWithDefaults() *PromotionCouponValidationDetails {
	this := PromotionCouponValidationDetails{}
	return &this
}

// GetCouponInfo returns the CouponInfo field value if set, zero value otherwise.
func (o *PromotionCouponValidationDetails) GetCouponInfo() CouponInfoType {
	if o == nil || IsNil(o.CouponInfo) {
		var ret CouponInfoType
		return ret
	}
	return *o.CouponInfo
}

// GetCouponInfoOk returns a tuple with the CouponInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionCouponValidationDetails) GetCouponInfoOk() (*CouponInfoType, bool) {
	if o == nil || IsNil(o.CouponInfo) {
		return nil, false
	}
	return o.CouponInfo, true
}

// HasCouponInfo returns a boolean if a field has been set.
func (o *PromotionCouponValidationDetails) HasCouponInfo() bool {
	if o != nil && !IsNil(o.CouponInfo) {
		return true
	}

	return false
}

// SetCouponInfo gets a reference to the given CouponInfoType and assigns it to the CouponInfo field.
func (o *PromotionCouponValidationDetails) SetCouponInfo(v CouponInfoType) {
	o.CouponInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PromotionCouponValidationDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionCouponValidationDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PromotionCouponValidationDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PromotionCouponValidationDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PromotionCouponValidationDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PromotionCouponValidationDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PromotionCouponValidationDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PromotionCouponValidationDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PromotionCouponValidationDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PromotionCouponValidationDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CouponInfo) {
		toSerialize["couponInfo"] = o.CouponInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePromotionCouponValidationDetails struct {
	value *PromotionCouponValidationDetails
	isSet bool
}

func (v NullablePromotionCouponValidationDetails) Get() *PromotionCouponValidationDetails {
	return v.value
}

func (v *NullablePromotionCouponValidationDetails) Set(val *PromotionCouponValidationDetails) {
	v.value = val
	v.isSet = true
}

func (v NullablePromotionCouponValidationDetails) IsSet() bool {
	return v.isSet
}

func (v *NullablePromotionCouponValidationDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePromotionCouponValidationDetails(val *PromotionCouponValidationDetails) *NullablePromotionCouponValidationDetails {
	return &NullablePromotionCouponValidationDetails{value: val, isSet: true}
}

func (v NullablePromotionCouponValidationDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePromotionCouponValidationDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


