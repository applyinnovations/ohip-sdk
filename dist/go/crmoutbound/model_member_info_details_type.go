/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the MemberInfoDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MemberInfoDetailsType{}

// MemberInfoDetailsType struct for MemberInfoDetailsType
type MemberInfoDetailsType struct {
	// Total nights of the guest.
	GuestTotalNights *int32 `json:"guestTotalNights,omitempty"`
	// STotal stays of the guest.
	GuestTotalStay *int32 `json:"guestTotalStay,omitempty"`
	// Tier Base Nights Points.
	TierBaseNights *int32 `json:"tierBaseNights,omitempty"`
	// Tier Base Revenue Points.
	TierBaseRevenue *float32 `json:"tierBaseRevenue,omitempty"`
	// Tier Base Stay Points.
	TierBaseStay *int32 `json:"tierBaseStay,omitempty"`
	// Tier Bonus Nights Points.
	TierBonusNights *int32 `json:"tierBonusNights,omitempty"`
	// Tier Bonus Revenue Points.
	TierBonusRevenue *float32 `json:"tierBonusRevenue,omitempty"`
	// Tier Bonus Stay Points.
	TierBonusStay *int32 `json:"tierBonusStay,omitempty"`
	// Total Nights of the membership.
	MembershipTotalNights *int32 `json:"membershipTotalNights,omitempty"`
	// Total Stay of the membership.
	MembershipTotalStay *int32 `json:"membershipTotalStay,omitempty"`
	// Total base points of the award.
	AwardBasePoints *int32 `json:"awardBasePoints,omitempty"`
	// Total bonus points of the award.
	AwardBonusPoints *int32 `json:"awardBonusPoints,omitempty"`
	// Total miscellaneous points of the award.
	AwardMiscPoints *int32 `json:"awardMiscPoints,omitempty"`
	// Total points of the award.
	TotalAwardPoints *int32 `json:"totalAwardPoints,omitempty"`
}

// NewMemberInfoDetailsType instantiates a new MemberInfoDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMemberInfoDetailsType() *MemberInfoDetailsType {
	this := MemberInfoDetailsType{}
	return &this
}

// NewMemberInfoDetailsTypeWithDefaults instantiates a new MemberInfoDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMemberInfoDetailsTypeWithDefaults() *MemberInfoDetailsType {
	this := MemberInfoDetailsType{}
	return &this
}

// GetGuestTotalNights returns the GuestTotalNights field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetGuestTotalNights() int32 {
	if o == nil || IsNil(o.GuestTotalNights) {
		var ret int32
		return ret
	}
	return *o.GuestTotalNights
}

// GetGuestTotalNightsOk returns a tuple with the GuestTotalNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetGuestTotalNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.GuestTotalNights) {
		return nil, false
	}
	return o.GuestTotalNights, true
}

// HasGuestTotalNights returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasGuestTotalNights() bool {
	if o != nil && !IsNil(o.GuestTotalNights) {
		return true
	}

	return false
}

// SetGuestTotalNights gets a reference to the given int32 and assigns it to the GuestTotalNights field.
func (o *MemberInfoDetailsType) SetGuestTotalNights(v int32) {
	o.GuestTotalNights = &v
}

// GetGuestTotalStay returns the GuestTotalStay field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetGuestTotalStay() int32 {
	if o == nil || IsNil(o.GuestTotalStay) {
		var ret int32
		return ret
	}
	return *o.GuestTotalStay
}

// GetGuestTotalStayOk returns a tuple with the GuestTotalStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetGuestTotalStayOk() (*int32, bool) {
	if o == nil || IsNil(o.GuestTotalStay) {
		return nil, false
	}
	return o.GuestTotalStay, true
}

// HasGuestTotalStay returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasGuestTotalStay() bool {
	if o != nil && !IsNil(o.GuestTotalStay) {
		return true
	}

	return false
}

// SetGuestTotalStay gets a reference to the given int32 and assigns it to the GuestTotalStay field.
func (o *MemberInfoDetailsType) SetGuestTotalStay(v int32) {
	o.GuestTotalStay = &v
}

// GetTierBaseNights returns the TierBaseNights field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBaseNights() int32 {
	if o == nil || IsNil(o.TierBaseNights) {
		var ret int32
		return ret
	}
	return *o.TierBaseNights
}

// GetTierBaseNightsOk returns a tuple with the TierBaseNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBaseNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.TierBaseNights) {
		return nil, false
	}
	return o.TierBaseNights, true
}

// HasTierBaseNights returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBaseNights() bool {
	if o != nil && !IsNil(o.TierBaseNights) {
		return true
	}

	return false
}

// SetTierBaseNights gets a reference to the given int32 and assigns it to the TierBaseNights field.
func (o *MemberInfoDetailsType) SetTierBaseNights(v int32) {
	o.TierBaseNights = &v
}

// GetTierBaseRevenue returns the TierBaseRevenue field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBaseRevenue() float32 {
	if o == nil || IsNil(o.TierBaseRevenue) {
		var ret float32
		return ret
	}
	return *o.TierBaseRevenue
}

// GetTierBaseRevenueOk returns a tuple with the TierBaseRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBaseRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TierBaseRevenue) {
		return nil, false
	}
	return o.TierBaseRevenue, true
}

// HasTierBaseRevenue returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBaseRevenue() bool {
	if o != nil && !IsNil(o.TierBaseRevenue) {
		return true
	}

	return false
}

// SetTierBaseRevenue gets a reference to the given float32 and assigns it to the TierBaseRevenue field.
func (o *MemberInfoDetailsType) SetTierBaseRevenue(v float32) {
	o.TierBaseRevenue = &v
}

// GetTierBaseStay returns the TierBaseStay field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBaseStay() int32 {
	if o == nil || IsNil(o.TierBaseStay) {
		var ret int32
		return ret
	}
	return *o.TierBaseStay
}

// GetTierBaseStayOk returns a tuple with the TierBaseStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBaseStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TierBaseStay) {
		return nil, false
	}
	return o.TierBaseStay, true
}

// HasTierBaseStay returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBaseStay() bool {
	if o != nil && !IsNil(o.TierBaseStay) {
		return true
	}

	return false
}

// SetTierBaseStay gets a reference to the given int32 and assigns it to the TierBaseStay field.
func (o *MemberInfoDetailsType) SetTierBaseStay(v int32) {
	o.TierBaseStay = &v
}

// GetTierBonusNights returns the TierBonusNights field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBonusNights() int32 {
	if o == nil || IsNil(o.TierBonusNights) {
		var ret int32
		return ret
	}
	return *o.TierBonusNights
}

// GetTierBonusNightsOk returns a tuple with the TierBonusNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBonusNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.TierBonusNights) {
		return nil, false
	}
	return o.TierBonusNights, true
}

// HasTierBonusNights returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBonusNights() bool {
	if o != nil && !IsNil(o.TierBonusNights) {
		return true
	}

	return false
}

// SetTierBonusNights gets a reference to the given int32 and assigns it to the TierBonusNights field.
func (o *MemberInfoDetailsType) SetTierBonusNights(v int32) {
	o.TierBonusNights = &v
}

// GetTierBonusRevenue returns the TierBonusRevenue field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBonusRevenue() float32 {
	if o == nil || IsNil(o.TierBonusRevenue) {
		var ret float32
		return ret
	}
	return *o.TierBonusRevenue
}

// GetTierBonusRevenueOk returns a tuple with the TierBonusRevenue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBonusRevenueOk() (*float32, bool) {
	if o == nil || IsNil(o.TierBonusRevenue) {
		return nil, false
	}
	return o.TierBonusRevenue, true
}

// HasTierBonusRevenue returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBonusRevenue() bool {
	if o != nil && !IsNil(o.TierBonusRevenue) {
		return true
	}

	return false
}

// SetTierBonusRevenue gets a reference to the given float32 and assigns it to the TierBonusRevenue field.
func (o *MemberInfoDetailsType) SetTierBonusRevenue(v float32) {
	o.TierBonusRevenue = &v
}

// GetTierBonusStay returns the TierBonusStay field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTierBonusStay() int32 {
	if o == nil || IsNil(o.TierBonusStay) {
		var ret int32
		return ret
	}
	return *o.TierBonusStay
}

// GetTierBonusStayOk returns a tuple with the TierBonusStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTierBonusStayOk() (*int32, bool) {
	if o == nil || IsNil(o.TierBonusStay) {
		return nil, false
	}
	return o.TierBonusStay, true
}

// HasTierBonusStay returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTierBonusStay() bool {
	if o != nil && !IsNil(o.TierBonusStay) {
		return true
	}

	return false
}

// SetTierBonusStay gets a reference to the given int32 and assigns it to the TierBonusStay field.
func (o *MemberInfoDetailsType) SetTierBonusStay(v int32) {
	o.TierBonusStay = &v
}

// GetMembershipTotalNights returns the MembershipTotalNights field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetMembershipTotalNights() int32 {
	if o == nil || IsNil(o.MembershipTotalNights) {
		var ret int32
		return ret
	}
	return *o.MembershipTotalNights
}

// GetMembershipTotalNightsOk returns a tuple with the MembershipTotalNights field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetMembershipTotalNightsOk() (*int32, bool) {
	if o == nil || IsNil(o.MembershipTotalNights) {
		return nil, false
	}
	return o.MembershipTotalNights, true
}

// HasMembershipTotalNights returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasMembershipTotalNights() bool {
	if o != nil && !IsNil(o.MembershipTotalNights) {
		return true
	}

	return false
}

// SetMembershipTotalNights gets a reference to the given int32 and assigns it to the MembershipTotalNights field.
func (o *MemberInfoDetailsType) SetMembershipTotalNights(v int32) {
	o.MembershipTotalNights = &v
}

// GetMembershipTotalStay returns the MembershipTotalStay field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetMembershipTotalStay() int32 {
	if o == nil || IsNil(o.MembershipTotalStay) {
		var ret int32
		return ret
	}
	return *o.MembershipTotalStay
}

// GetMembershipTotalStayOk returns a tuple with the MembershipTotalStay field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetMembershipTotalStayOk() (*int32, bool) {
	if o == nil || IsNil(o.MembershipTotalStay) {
		return nil, false
	}
	return o.MembershipTotalStay, true
}

// HasMembershipTotalStay returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasMembershipTotalStay() bool {
	if o != nil && !IsNil(o.MembershipTotalStay) {
		return true
	}

	return false
}

// SetMembershipTotalStay gets a reference to the given int32 and assigns it to the MembershipTotalStay field.
func (o *MemberInfoDetailsType) SetMembershipTotalStay(v int32) {
	o.MembershipTotalStay = &v
}

// GetAwardBasePoints returns the AwardBasePoints field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetAwardBasePoints() int32 {
	if o == nil || IsNil(o.AwardBasePoints) {
		var ret int32
		return ret
	}
	return *o.AwardBasePoints
}

// GetAwardBasePointsOk returns a tuple with the AwardBasePoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetAwardBasePointsOk() (*int32, bool) {
	if o == nil || IsNil(o.AwardBasePoints) {
		return nil, false
	}
	return o.AwardBasePoints, true
}

// HasAwardBasePoints returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasAwardBasePoints() bool {
	if o != nil && !IsNil(o.AwardBasePoints) {
		return true
	}

	return false
}

// SetAwardBasePoints gets a reference to the given int32 and assigns it to the AwardBasePoints field.
func (o *MemberInfoDetailsType) SetAwardBasePoints(v int32) {
	o.AwardBasePoints = &v
}

// GetAwardBonusPoints returns the AwardBonusPoints field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetAwardBonusPoints() int32 {
	if o == nil || IsNil(o.AwardBonusPoints) {
		var ret int32
		return ret
	}
	return *o.AwardBonusPoints
}

// GetAwardBonusPointsOk returns a tuple with the AwardBonusPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetAwardBonusPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.AwardBonusPoints) {
		return nil, false
	}
	return o.AwardBonusPoints, true
}

// HasAwardBonusPoints returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasAwardBonusPoints() bool {
	if o != nil && !IsNil(o.AwardBonusPoints) {
		return true
	}

	return false
}

// SetAwardBonusPoints gets a reference to the given int32 and assigns it to the AwardBonusPoints field.
func (o *MemberInfoDetailsType) SetAwardBonusPoints(v int32) {
	o.AwardBonusPoints = &v
}

// GetAwardMiscPoints returns the AwardMiscPoints field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetAwardMiscPoints() int32 {
	if o == nil || IsNil(o.AwardMiscPoints) {
		var ret int32
		return ret
	}
	return *o.AwardMiscPoints
}

// GetAwardMiscPointsOk returns a tuple with the AwardMiscPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetAwardMiscPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.AwardMiscPoints) {
		return nil, false
	}
	return o.AwardMiscPoints, true
}

// HasAwardMiscPoints returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasAwardMiscPoints() bool {
	if o != nil && !IsNil(o.AwardMiscPoints) {
		return true
	}

	return false
}

// SetAwardMiscPoints gets a reference to the given int32 and assigns it to the AwardMiscPoints field.
func (o *MemberInfoDetailsType) SetAwardMiscPoints(v int32) {
	o.AwardMiscPoints = &v
}

// GetTotalAwardPoints returns the TotalAwardPoints field value if set, zero value otherwise.
func (o *MemberInfoDetailsType) GetTotalAwardPoints() int32 {
	if o == nil || IsNil(o.TotalAwardPoints) {
		var ret int32
		return ret
	}
	return *o.TotalAwardPoints
}

// GetTotalAwardPointsOk returns a tuple with the TotalAwardPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MemberInfoDetailsType) GetTotalAwardPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalAwardPoints) {
		return nil, false
	}
	return o.TotalAwardPoints, true
}

// HasTotalAwardPoints returns a boolean if a field has been set.
func (o *MemberInfoDetailsType) HasTotalAwardPoints() bool {
	if o != nil && !IsNil(o.TotalAwardPoints) {
		return true
	}

	return false
}

// SetTotalAwardPoints gets a reference to the given int32 and assigns it to the TotalAwardPoints field.
func (o *MemberInfoDetailsType) SetTotalAwardPoints(v int32) {
	o.TotalAwardPoints = &v
}

func (o MemberInfoDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MemberInfoDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuestTotalNights) {
		toSerialize["guestTotalNights"] = o.GuestTotalNights
	}
	if !IsNil(o.GuestTotalStay) {
		toSerialize["guestTotalStay"] = o.GuestTotalStay
	}
	if !IsNil(o.TierBaseNights) {
		toSerialize["tierBaseNights"] = o.TierBaseNights
	}
	if !IsNil(o.TierBaseRevenue) {
		toSerialize["tierBaseRevenue"] = o.TierBaseRevenue
	}
	if !IsNil(o.TierBaseStay) {
		toSerialize["tierBaseStay"] = o.TierBaseStay
	}
	if !IsNil(o.TierBonusNights) {
		toSerialize["tierBonusNights"] = o.TierBonusNights
	}
	if !IsNil(o.TierBonusRevenue) {
		toSerialize["tierBonusRevenue"] = o.TierBonusRevenue
	}
	if !IsNil(o.TierBonusStay) {
		toSerialize["tierBonusStay"] = o.TierBonusStay
	}
	if !IsNil(o.MembershipTotalNights) {
		toSerialize["membershipTotalNights"] = o.MembershipTotalNights
	}
	if !IsNil(o.MembershipTotalStay) {
		toSerialize["membershipTotalStay"] = o.MembershipTotalStay
	}
	if !IsNil(o.AwardBasePoints) {
		toSerialize["awardBasePoints"] = o.AwardBasePoints
	}
	if !IsNil(o.AwardBonusPoints) {
		toSerialize["awardBonusPoints"] = o.AwardBonusPoints
	}
	if !IsNil(o.AwardMiscPoints) {
		toSerialize["awardMiscPoints"] = o.AwardMiscPoints
	}
	if !IsNil(o.TotalAwardPoints) {
		toSerialize["totalAwardPoints"] = o.TotalAwardPoints
	}
	return toSerialize, nil
}

type NullableMemberInfoDetailsType struct {
	value *MemberInfoDetailsType
	isSet bool
}

func (v NullableMemberInfoDetailsType) Get() *MemberInfoDetailsType {
	return v.value
}

func (v *NullableMemberInfoDetailsType) Set(val *MemberInfoDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableMemberInfoDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableMemberInfoDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMemberInfoDetailsType(val *MemberInfoDetailsType) *NullableMemberInfoDetailsType {
	return &NullableMemberInfoDetailsType{value: val, isSet: true}
}

func (v NullableMemberInfoDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMemberInfoDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


