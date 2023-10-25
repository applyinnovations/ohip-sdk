/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the ResAwardsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResAwardsType{}

// ResAwardsType Membership Awards code applied on the reservation.
type ResAwardsType struct {
	// This stores the Membership Awards code applied on the reservation.
	AwardVouchers []AwardVouchersTypeInner `json:"awardVouchers,omitempty"`
	MembershipNo *UniqueIDType `json:"membershipNo,omitempty"`
	// Room Type before the Upgrade Award.
	OriginalRoomType *string `json:"originalRoomType,omitempty"`
	// Room Type after the Upgrade Award.
	UpgradeRoomType *string `json:"upgradeRoomType,omitempty"`
}

// NewResAwardsType instantiates a new ResAwardsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResAwardsType() *ResAwardsType {
	this := ResAwardsType{}
	return &this
}

// NewResAwardsTypeWithDefaults instantiates a new ResAwardsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResAwardsTypeWithDefaults() *ResAwardsType {
	this := ResAwardsType{}
	return &this
}

// GetAwardVouchers returns the AwardVouchers field value if set, zero value otherwise.
func (o *ResAwardsType) GetAwardVouchers() []AwardVouchersTypeInner {
	if o == nil || IsNil(o.AwardVouchers) {
		var ret []AwardVouchersTypeInner
		return ret
	}
	return o.AwardVouchers
}

// GetAwardVouchersOk returns a tuple with the AwardVouchers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResAwardsType) GetAwardVouchersOk() ([]AwardVouchersTypeInner, bool) {
	if o == nil || IsNil(o.AwardVouchers) {
		return nil, false
	}
	return o.AwardVouchers, true
}

// HasAwardVouchers returns a boolean if a field has been set.
func (o *ResAwardsType) HasAwardVouchers() bool {
	if o != nil && !IsNil(o.AwardVouchers) {
		return true
	}

	return false
}

// SetAwardVouchers gets a reference to the given []AwardVouchersTypeInner and assigns it to the AwardVouchers field.
func (o *ResAwardsType) SetAwardVouchers(v []AwardVouchersTypeInner) {
	o.AwardVouchers = v
}

// GetMembershipNo returns the MembershipNo field value if set, zero value otherwise.
func (o *ResAwardsType) GetMembershipNo() UniqueIDType {
	if o == nil || IsNil(o.MembershipNo) {
		var ret UniqueIDType
		return ret
	}
	return *o.MembershipNo
}

// GetMembershipNoOk returns a tuple with the MembershipNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResAwardsType) GetMembershipNoOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.MembershipNo) {
		return nil, false
	}
	return o.MembershipNo, true
}

// HasMembershipNo returns a boolean if a field has been set.
func (o *ResAwardsType) HasMembershipNo() bool {
	if o != nil && !IsNil(o.MembershipNo) {
		return true
	}

	return false
}

// SetMembershipNo gets a reference to the given UniqueIDType and assigns it to the MembershipNo field.
func (o *ResAwardsType) SetMembershipNo(v UniqueIDType) {
	o.MembershipNo = &v
}

// GetOriginalRoomType returns the OriginalRoomType field value if set, zero value otherwise.
func (o *ResAwardsType) GetOriginalRoomType() string {
	if o == nil || IsNil(o.OriginalRoomType) {
		var ret string
		return ret
	}
	return *o.OriginalRoomType
}

// GetOriginalRoomTypeOk returns a tuple with the OriginalRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResAwardsType) GetOriginalRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.OriginalRoomType) {
		return nil, false
	}
	return o.OriginalRoomType, true
}

// HasOriginalRoomType returns a boolean if a field has been set.
func (o *ResAwardsType) HasOriginalRoomType() bool {
	if o != nil && !IsNil(o.OriginalRoomType) {
		return true
	}

	return false
}

// SetOriginalRoomType gets a reference to the given string and assigns it to the OriginalRoomType field.
func (o *ResAwardsType) SetOriginalRoomType(v string) {
	o.OriginalRoomType = &v
}

// GetUpgradeRoomType returns the UpgradeRoomType field value if set, zero value otherwise.
func (o *ResAwardsType) GetUpgradeRoomType() string {
	if o == nil || IsNil(o.UpgradeRoomType) {
		var ret string
		return ret
	}
	return *o.UpgradeRoomType
}

// GetUpgradeRoomTypeOk returns a tuple with the UpgradeRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResAwardsType) GetUpgradeRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.UpgradeRoomType) {
		return nil, false
	}
	return o.UpgradeRoomType, true
}

// HasUpgradeRoomType returns a boolean if a field has been set.
func (o *ResAwardsType) HasUpgradeRoomType() bool {
	if o != nil && !IsNil(o.UpgradeRoomType) {
		return true
	}

	return false
}

// SetUpgradeRoomType gets a reference to the given string and assigns it to the UpgradeRoomType field.
func (o *ResAwardsType) SetUpgradeRoomType(v string) {
	o.UpgradeRoomType = &v
}

func (o ResAwardsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResAwardsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardVouchers) {
		toSerialize["awardVouchers"] = o.AwardVouchers
	}
	if !IsNil(o.MembershipNo) {
		toSerialize["membershipNo"] = o.MembershipNo
	}
	if !IsNil(o.OriginalRoomType) {
		toSerialize["originalRoomType"] = o.OriginalRoomType
	}
	if !IsNil(o.UpgradeRoomType) {
		toSerialize["upgradeRoomType"] = o.UpgradeRoomType
	}
	return toSerialize, nil
}

type NullableResAwardsType struct {
	value *ResAwardsType
	isSet bool
}

func (v NullableResAwardsType) Get() *ResAwardsType {
	return v.value
}

func (v *NullableResAwardsType) Set(val *ResAwardsType) {
	v.value = val
	v.isSet = true
}

func (v NullableResAwardsType) IsSet() bool {
	return v.isSet
}

func (v *NullableResAwardsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResAwardsType(val *ResAwardsType) *NullableResAwardsType {
	return &NullableResAwardsType{value: val, isSet: true}
}

func (v NullableResAwardsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResAwardsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


