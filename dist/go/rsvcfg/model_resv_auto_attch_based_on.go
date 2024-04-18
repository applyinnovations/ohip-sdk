/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ResvAutoAttchBasedOn type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResvAutoAttchBasedOn{}

// ResvAutoAttchBasedOn The Based On information for the rule.
type ResvAutoAttchBasedOn struct {
	Condition *BasedOnCondition `json:"condition,omitempty"`
	// A positive numeric number, When the number of adults/children or a reservation equals or exceeds this value, then the items that were selected in the Associated Preferences will automatically be attached to the reservation.
	Count *int32 `json:"count,omitempty"`
	// description.
	Description *string `json:"description,omitempty"`
	// The Keyword attached in the profile,when a reservation is made by a profile that has the selected Keyword attached, then the items that were selected in the Associated Preferences will automatically be attached to the reservation.
	KeywordType *string `json:"keywordType,omitempty"`
	Membership *BasedOnMembershipType `json:"membership,omitempty"`
	Preference *AttachPreferenceType `json:"preference,omitempty"`
	// Rate Code.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Room type Code.
	RoomType *string `json:"roomType,omitempty"`
	Special *AttachPreferenceType `json:"special,omitempty"`
	Type *ResvAutoAttchBasedOnCode `json:"type,omitempty"`
	// The associated VIP Status.
	VipCode *string `json:"vipCode,omitempty"`
}

// NewResvAutoAttchBasedOn instantiates a new ResvAutoAttchBasedOn object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResvAutoAttchBasedOn() *ResvAutoAttchBasedOn {
	this := ResvAutoAttchBasedOn{}
	return &this
}

// NewResvAutoAttchBasedOnWithDefaults instantiates a new ResvAutoAttchBasedOn object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResvAutoAttchBasedOnWithDefaults() *ResvAutoAttchBasedOn {
	this := ResvAutoAttchBasedOn{}
	return &this
}

// GetCondition returns the Condition field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetCondition() BasedOnCondition {
	if o == nil || IsNil(o.Condition) {
		var ret BasedOnCondition
		return ret
	}
	return *o.Condition
}

// GetConditionOk returns a tuple with the Condition field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetConditionOk() (*BasedOnCondition, bool) {
	if o == nil || IsNil(o.Condition) {
		return nil, false
	}
	return o.Condition, true
}

// HasCondition returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasCondition() bool {
	if o != nil && !IsNil(o.Condition) {
		return true
	}

	return false
}

// SetCondition gets a reference to the given BasedOnCondition and assigns it to the Condition field.
func (o *ResvAutoAttchBasedOn) SetCondition(v BasedOnCondition) {
	o.Condition = &v
}

// GetCount returns the Count field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetCount() int32 {
	if o == nil || IsNil(o.Count) {
		var ret int32
		return ret
	}
	return *o.Count
}

// GetCountOk returns a tuple with the Count field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetCountOk() (*int32, bool) {
	if o == nil || IsNil(o.Count) {
		return nil, false
	}
	return o.Count, true
}

// HasCount returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasCount() bool {
	if o != nil && !IsNil(o.Count) {
		return true
	}

	return false
}

// SetCount gets a reference to the given int32 and assigns it to the Count field.
func (o *ResvAutoAttchBasedOn) SetCount(v int32) {
	o.Count = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ResvAutoAttchBasedOn) SetDescription(v string) {
	o.Description = &v
}

// GetKeywordType returns the KeywordType field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetKeywordType() string {
	if o == nil || IsNil(o.KeywordType) {
		var ret string
		return ret
	}
	return *o.KeywordType
}

// GetKeywordTypeOk returns a tuple with the KeywordType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetKeywordTypeOk() (*string, bool) {
	if o == nil || IsNil(o.KeywordType) {
		return nil, false
	}
	return o.KeywordType, true
}

// HasKeywordType returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasKeywordType() bool {
	if o != nil && !IsNil(o.KeywordType) {
		return true
	}

	return false
}

// SetKeywordType gets a reference to the given string and assigns it to the KeywordType field.
func (o *ResvAutoAttchBasedOn) SetKeywordType(v string) {
	o.KeywordType = &v
}

// GetMembership returns the Membership field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetMembership() BasedOnMembershipType {
	if o == nil || IsNil(o.Membership) {
		var ret BasedOnMembershipType
		return ret
	}
	return *o.Membership
}

// GetMembershipOk returns a tuple with the Membership field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetMembershipOk() (*BasedOnMembershipType, bool) {
	if o == nil || IsNil(o.Membership) {
		return nil, false
	}
	return o.Membership, true
}

// HasMembership returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasMembership() bool {
	if o != nil && !IsNil(o.Membership) {
		return true
	}

	return false
}

// SetMembership gets a reference to the given BasedOnMembershipType and assigns it to the Membership field.
func (o *ResvAutoAttchBasedOn) SetMembership(v BasedOnMembershipType) {
	o.Membership = &v
}

// GetPreference returns the Preference field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetPreference() AttachPreferenceType {
	if o == nil || IsNil(o.Preference) {
		var ret AttachPreferenceType
		return ret
	}
	return *o.Preference
}

// GetPreferenceOk returns a tuple with the Preference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetPreferenceOk() (*AttachPreferenceType, bool) {
	if o == nil || IsNil(o.Preference) {
		return nil, false
	}
	return o.Preference, true
}

// HasPreference returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasPreference() bool {
	if o != nil && !IsNil(o.Preference) {
		return true
	}

	return false
}

// SetPreference gets a reference to the given AttachPreferenceType and assigns it to the Preference field.
func (o *ResvAutoAttchBasedOn) SetPreference(v AttachPreferenceType) {
	o.Preference = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ResvAutoAttchBasedOn) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *ResvAutoAttchBasedOn) SetRoomType(v string) {
	o.RoomType = &v
}

// GetSpecial returns the Special field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetSpecial() AttachPreferenceType {
	if o == nil || IsNil(o.Special) {
		var ret AttachPreferenceType
		return ret
	}
	return *o.Special
}

// GetSpecialOk returns a tuple with the Special field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetSpecialOk() (*AttachPreferenceType, bool) {
	if o == nil || IsNil(o.Special) {
		return nil, false
	}
	return o.Special, true
}

// HasSpecial returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasSpecial() bool {
	if o != nil && !IsNil(o.Special) {
		return true
	}

	return false
}

// SetSpecial gets a reference to the given AttachPreferenceType and assigns it to the Special field.
func (o *ResvAutoAttchBasedOn) SetSpecial(v AttachPreferenceType) {
	o.Special = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetType() ResvAutoAttchBasedOnCode {
	if o == nil || IsNil(o.Type) {
		var ret ResvAutoAttchBasedOnCode
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetTypeOk() (*ResvAutoAttchBasedOnCode, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given ResvAutoAttchBasedOnCode and assigns it to the Type field.
func (o *ResvAutoAttchBasedOn) SetType(v ResvAutoAttchBasedOnCode) {
	o.Type = &v
}

// GetVipCode returns the VipCode field value if set, zero value otherwise.
func (o *ResvAutoAttchBasedOn) GetVipCode() string {
	if o == nil || IsNil(o.VipCode) {
		var ret string
		return ret
	}
	return *o.VipCode
}

// GetVipCodeOk returns a tuple with the VipCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResvAutoAttchBasedOn) GetVipCodeOk() (*string, bool) {
	if o == nil || IsNil(o.VipCode) {
		return nil, false
	}
	return o.VipCode, true
}

// HasVipCode returns a boolean if a field has been set.
func (o *ResvAutoAttchBasedOn) HasVipCode() bool {
	if o != nil && !IsNil(o.VipCode) {
		return true
	}

	return false
}

// SetVipCode gets a reference to the given string and assigns it to the VipCode field.
func (o *ResvAutoAttchBasedOn) SetVipCode(v string) {
	o.VipCode = &v
}

func (o ResvAutoAttchBasedOn) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResvAutoAttchBasedOn) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Condition) {
		toSerialize["condition"] = o.Condition
	}
	if !IsNil(o.Count) {
		toSerialize["count"] = o.Count
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.KeywordType) {
		toSerialize["keywordType"] = o.KeywordType
	}
	if !IsNil(o.Membership) {
		toSerialize["membership"] = o.Membership
	}
	if !IsNil(o.Preference) {
		toSerialize["preference"] = o.Preference
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Special) {
		toSerialize["special"] = o.Special
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.VipCode) {
		toSerialize["vipCode"] = o.VipCode
	}
	return toSerialize, nil
}

type NullableResvAutoAttchBasedOn struct {
	value *ResvAutoAttchBasedOn
	isSet bool
}

func (v NullableResvAutoAttchBasedOn) Get() *ResvAutoAttchBasedOn {
	return v.value
}

func (v *NullableResvAutoAttchBasedOn) Set(val *ResvAutoAttchBasedOn) {
	v.value = val
	v.isSet = true
}

func (v NullableResvAutoAttchBasedOn) IsSet() bool {
	return v.isSet
}

func (v *NullableResvAutoAttchBasedOn) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResvAutoAttchBasedOn(val *ResvAutoAttchBasedOn) *NullableResvAutoAttchBasedOn {
	return &NullableResvAutoAttchBasedOn{value: val, isSet: true}
}

func (v NullableResvAutoAttchBasedOn) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResvAutoAttchBasedOn) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

