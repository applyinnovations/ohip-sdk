/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the MemberPointToExpireType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MemberPointToExpireType{}

// MemberPointToExpireType Information related to a member point to expire.
type MemberPointToExpireType struct {
	// The method of award generation.
	AwardGenerationMethod *string `json:"awardGenerationMethod,omitempty"`
	// Indicates if the points is extendable.
	Extend *bool `json:"extend,omitempty"`
	// The date when the member future award points will expire.
	PointsExpiryDate *string `json:"pointsExpiryDate,omitempty"`
	// Displays the total number of points that will expire on the expiration date.
	PointsToExpire *int32 `json:"pointsToExpire,omitempty"`
	// Displays the number of points that are relevant for extension. Points that were already extended from the previous year are not considered for extension.
	PreviousPointsToExpire *int32 `json:"previousPointsToExpire,omitempty"`
}

// NewMemberPointToExpireType instantiates a new MemberPointToExpireType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMemberPointToExpireType() *MemberPointToExpireType {
	this := MemberPointToExpireType{}
	return &this
}

// NewMemberPointToExpireTypeWithDefaults instantiates a new MemberPointToExpireType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMemberPointToExpireTypeWithDefaults() *MemberPointToExpireType {
	this := MemberPointToExpireType{}
	return &this
}

// GetAwardGenerationMethod returns the AwardGenerationMethod field value if set, zero value otherwise.
func (o *MemberPointToExpireType) GetAwardGenerationMethod() string {
	if o == nil || IsNil(o.AwardGenerationMethod) {
		var ret string
		return ret
	}
	return *o.AwardGenerationMethod
}

// GetAwardGenerationMethodOk returns a tuple with the AwardGenerationMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberPointToExpireType) GetAwardGenerationMethodOk() (*string, bool) {
	if o == nil || IsNil(o.AwardGenerationMethod) {
		return nil, false
	}
	return o.AwardGenerationMethod, true
}

// HasAwardGenerationMethod returns a boolean if a field has been set.
func (o *MemberPointToExpireType) HasAwardGenerationMethod() bool {
	if o != nil && !IsNil(o.AwardGenerationMethod) {
		return true
	}

	return false
}

// SetAwardGenerationMethod gets a reference to the given string and assigns it to the AwardGenerationMethod field.
func (o *MemberPointToExpireType) SetAwardGenerationMethod(v string) {
	o.AwardGenerationMethod = &v
}

// GetExtend returns the Extend field value if set, zero value otherwise.
func (o *MemberPointToExpireType) GetExtend() bool {
	if o == nil || IsNil(o.Extend) {
		var ret bool
		return ret
	}
	return *o.Extend
}

// GetExtendOk returns a tuple with the Extend field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberPointToExpireType) GetExtendOk() (*bool, bool) {
	if o == nil || IsNil(o.Extend) {
		return nil, false
	}
	return o.Extend, true
}

// HasExtend returns a boolean if a field has been set.
func (o *MemberPointToExpireType) HasExtend() bool {
	if o != nil && !IsNil(o.Extend) {
		return true
	}

	return false
}

// SetExtend gets a reference to the given bool and assigns it to the Extend field.
func (o *MemberPointToExpireType) SetExtend(v bool) {
	o.Extend = &v
}

// GetPointsExpiryDate returns the PointsExpiryDate field value if set, zero value otherwise.
func (o *MemberPointToExpireType) GetPointsExpiryDate() string {
	if o == nil || IsNil(o.PointsExpiryDate) {
		var ret string
		return ret
	}
	return *o.PointsExpiryDate
}

// GetPointsExpiryDateOk returns a tuple with the PointsExpiryDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberPointToExpireType) GetPointsExpiryDateOk() (*string, bool) {
	if o == nil || IsNil(o.PointsExpiryDate) {
		return nil, false
	}
	return o.PointsExpiryDate, true
}

// HasPointsExpiryDate returns a boolean if a field has been set.
func (o *MemberPointToExpireType) HasPointsExpiryDate() bool {
	if o != nil && !IsNil(o.PointsExpiryDate) {
		return true
	}

	return false
}

// SetPointsExpiryDate gets a reference to the given string and assigns it to the PointsExpiryDate field.
func (o *MemberPointToExpireType) SetPointsExpiryDate(v string) {
	o.PointsExpiryDate = &v
}

// GetPointsToExpire returns the PointsToExpire field value if set, zero value otherwise.
func (o *MemberPointToExpireType) GetPointsToExpire() int32 {
	if o == nil || IsNil(o.PointsToExpire) {
		var ret int32
		return ret
	}
	return *o.PointsToExpire
}

// GetPointsToExpireOk returns a tuple with the PointsToExpire field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberPointToExpireType) GetPointsToExpireOk() (*int32, bool) {
	if o == nil || IsNil(o.PointsToExpire) {
		return nil, false
	}
	return o.PointsToExpire, true
}

// HasPointsToExpire returns a boolean if a field has been set.
func (o *MemberPointToExpireType) HasPointsToExpire() bool {
	if o != nil && !IsNil(o.PointsToExpire) {
		return true
	}

	return false
}

// SetPointsToExpire gets a reference to the given int32 and assigns it to the PointsToExpire field.
func (o *MemberPointToExpireType) SetPointsToExpire(v int32) {
	o.PointsToExpire = &v
}

// GetPreviousPointsToExpire returns the PreviousPointsToExpire field value if set, zero value otherwise.
func (o *MemberPointToExpireType) GetPreviousPointsToExpire() int32 {
	if o == nil || IsNil(o.PreviousPointsToExpire) {
		var ret int32
		return ret
	}
	return *o.PreviousPointsToExpire
}

// GetPreviousPointsToExpireOk returns a tuple with the PreviousPointsToExpire field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberPointToExpireType) GetPreviousPointsToExpireOk() (*int32, bool) {
	if o == nil || IsNil(o.PreviousPointsToExpire) {
		return nil, false
	}
	return o.PreviousPointsToExpire, true
}

// HasPreviousPointsToExpire returns a boolean if a field has been set.
func (o *MemberPointToExpireType) HasPreviousPointsToExpire() bool {
	if o != nil && !IsNil(o.PreviousPointsToExpire) {
		return true
	}

	return false
}

// SetPreviousPointsToExpire gets a reference to the given int32 and assigns it to the PreviousPointsToExpire field.
func (o *MemberPointToExpireType) SetPreviousPointsToExpire(v int32) {
	o.PreviousPointsToExpire = &v
}

func (o MemberPointToExpireType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MemberPointToExpireType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardGenerationMethod) {
		toSerialize["awardGenerationMethod"] = o.AwardGenerationMethod
	}
	if !IsNil(o.Extend) {
		toSerialize["extend"] = o.Extend
	}
	if !IsNil(o.PointsExpiryDate) {
		toSerialize["pointsExpiryDate"] = o.PointsExpiryDate
	}
	if !IsNil(o.PointsToExpire) {
		toSerialize["pointsToExpire"] = o.PointsToExpire
	}
	if !IsNil(o.PreviousPointsToExpire) {
		toSerialize["previousPointsToExpire"] = o.PreviousPointsToExpire
	}
	return toSerialize, nil
}

type NullableMemberPointToExpireType struct {
	value *MemberPointToExpireType
	isSet bool
}

func (v NullableMemberPointToExpireType) Get() *MemberPointToExpireType {
	return v.value
}

func (v *NullableMemberPointToExpireType) Set(val *MemberPointToExpireType) {
	v.value = val
	v.isSet = true
}

func (v NullableMemberPointToExpireType) IsSet() bool {
	return v.isSet
}

func (v *NullableMemberPointToExpireType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMemberPointToExpireType(val *MemberPointToExpireType) *NullableMemberPointToExpireType {
	return &NullableMemberPointToExpireType{value: val, isSet: true}
}

func (v NullableMemberPointToExpireType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMemberPointToExpireType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

