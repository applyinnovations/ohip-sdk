/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the ECouponType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECouponType{}

// ECouponType Reservation eCoupon Type Information.
type ECouponType struct {
	// Determines whether the eCoupon is attached through the Rate Code or not.
	AutoAttached *bool `json:"autoAttached,omitempty"`
	// Code to attach the eCoupon to Reservation.
	Code *string `json:"code,omitempty"`
	// Description of the eCoupon attached to the Reservation.
	Description *string `json:"description,omitempty"`
	ECouponId *UniqueIDType `json:"eCouponId,omitempty"`
	// Assigned Quantity for the eCoupon when attached to Reservation.
	IssuedQuantity *int32 `json:"issuedQuantity,omitempty"`
	// Rate plan of the attached eCoupon to Reservation.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Reason for attaching/modifing eCoupon.
	Reason *string `json:"reason,omitempty"`
	// Used Quantity of the eCoupon for the Reservation.
	UsedQuantity *int32 `json:"usedQuantity,omitempty"`
	// Determines whether this eCoupon is eligible for welcome offer or not.
	WelcomeOffer *bool `json:"welcomeOffer,omitempty"`
}

// NewECouponType instantiates a new ECouponType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECouponType() *ECouponType {
	this := ECouponType{}
	return &this
}

// NewECouponTypeWithDefaults instantiates a new ECouponType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECouponTypeWithDefaults() *ECouponType {
	this := ECouponType{}
	return &this
}

// GetAutoAttached returns the AutoAttached field value if set, zero value otherwise.
func (o *ECouponType) GetAutoAttached() bool {
	if o == nil || IsNil(o.AutoAttached) {
		var ret bool
		return ret
	}
	return *o.AutoAttached
}

// GetAutoAttachedOk returns a tuple with the AutoAttached field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetAutoAttachedOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoAttached) {
		return nil, false
	}
	return o.AutoAttached, true
}

// HasAutoAttached returns a boolean if a field has been set.
func (o *ECouponType) HasAutoAttached() bool {
	if o != nil && !IsNil(o.AutoAttached) {
		return true
	}

	return false
}

// SetAutoAttached gets a reference to the given bool and assigns it to the AutoAttached field.
func (o *ECouponType) SetAutoAttached(v bool) {
	o.AutoAttached = &v
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ECouponType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ECouponType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ECouponType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ECouponType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ECouponType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ECouponType) SetDescription(v string) {
	o.Description = &v
}

// GetECouponId returns the ECouponId field value if set, zero value otherwise.
func (o *ECouponType) GetECouponId() UniqueIDType {
	if o == nil || IsNil(o.ECouponId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ECouponId
}

// GetECouponIdOk returns a tuple with the ECouponId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetECouponIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ECouponId) {
		return nil, false
	}
	return o.ECouponId, true
}

// HasECouponId returns a boolean if a field has been set.
func (o *ECouponType) HasECouponId() bool {
	if o != nil && !IsNil(o.ECouponId) {
		return true
	}

	return false
}

// SetECouponId gets a reference to the given UniqueIDType and assigns it to the ECouponId field.
func (o *ECouponType) SetECouponId(v UniqueIDType) {
	o.ECouponId = &v
}

// GetIssuedQuantity returns the IssuedQuantity field value if set, zero value otherwise.
func (o *ECouponType) GetIssuedQuantity() int32 {
	if o == nil || IsNil(o.IssuedQuantity) {
		var ret int32
		return ret
	}
	return *o.IssuedQuantity
}

// GetIssuedQuantityOk returns a tuple with the IssuedQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetIssuedQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.IssuedQuantity) {
		return nil, false
	}
	return o.IssuedQuantity, true
}

// HasIssuedQuantity returns a boolean if a field has been set.
func (o *ECouponType) HasIssuedQuantity() bool {
	if o != nil && !IsNil(o.IssuedQuantity) {
		return true
	}

	return false
}

// SetIssuedQuantity gets a reference to the given int32 and assigns it to the IssuedQuantity field.
func (o *ECouponType) SetIssuedQuantity(v int32) {
	o.IssuedQuantity = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ECouponType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ECouponType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ECouponType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *ECouponType) GetReason() string {
	if o == nil || IsNil(o.Reason) {
		var ret string
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetReasonOk() (*string, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *ECouponType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given string and assigns it to the Reason field.
func (o *ECouponType) SetReason(v string) {
	o.Reason = &v
}

// GetUsedQuantity returns the UsedQuantity field value if set, zero value otherwise.
func (o *ECouponType) GetUsedQuantity() int32 {
	if o == nil || IsNil(o.UsedQuantity) {
		var ret int32
		return ret
	}
	return *o.UsedQuantity
}

// GetUsedQuantityOk returns a tuple with the UsedQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetUsedQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.UsedQuantity) {
		return nil, false
	}
	return o.UsedQuantity, true
}

// HasUsedQuantity returns a boolean if a field has been set.
func (o *ECouponType) HasUsedQuantity() bool {
	if o != nil && !IsNil(o.UsedQuantity) {
		return true
	}

	return false
}

// SetUsedQuantity gets a reference to the given int32 and assigns it to the UsedQuantity field.
func (o *ECouponType) SetUsedQuantity(v int32) {
	o.UsedQuantity = &v
}

// GetWelcomeOffer returns the WelcomeOffer field value if set, zero value otherwise.
func (o *ECouponType) GetWelcomeOffer() bool {
	if o == nil || IsNil(o.WelcomeOffer) {
		var ret bool
		return ret
	}
	return *o.WelcomeOffer
}

// GetWelcomeOfferOk returns a tuple with the WelcomeOffer field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECouponType) GetWelcomeOfferOk() (*bool, bool) {
	if o == nil || IsNil(o.WelcomeOffer) {
		return nil, false
	}
	return o.WelcomeOffer, true
}

// HasWelcomeOffer returns a boolean if a field has been set.
func (o *ECouponType) HasWelcomeOffer() bool {
	if o != nil && !IsNil(o.WelcomeOffer) {
		return true
	}

	return false
}

// SetWelcomeOffer gets a reference to the given bool and assigns it to the WelcomeOffer field.
func (o *ECouponType) SetWelcomeOffer(v bool) {
	o.WelcomeOffer = &v
}

func (o ECouponType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECouponType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AutoAttached) {
		toSerialize["autoAttached"] = o.AutoAttached
	}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.ECouponId) {
		toSerialize["eCouponId"] = o.ECouponId
	}
	if !IsNil(o.IssuedQuantity) {
		toSerialize["issuedQuantity"] = o.IssuedQuantity
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.UsedQuantity) {
		toSerialize["usedQuantity"] = o.UsedQuantity
	}
	if !IsNil(o.WelcomeOffer) {
		toSerialize["welcomeOffer"] = o.WelcomeOffer
	}
	return toSerialize, nil
}

type NullableECouponType struct {
	value *ECouponType
	isSet bool
}

func (v NullableECouponType) Get() *ECouponType {
	return v.value
}

func (v *NullableECouponType) Set(val *ECouponType) {
	v.value = val
	v.isSet = true
}

func (v NullableECouponType) IsSet() bool {
	return v.isSet
}

func (v *NullableECouponType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECouponType(val *ECouponType) *NullableECouponType {
	return &NullableECouponType{value: val, isSet: true}
}

func (v NullableECouponType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECouponType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


