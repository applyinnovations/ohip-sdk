/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the UpgradeAvailabilityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpgradeAvailabilityType{}

// UpgradeAvailabilityType Member Award availability details based on chosen award types as Product,Rate,Upgrade,FT Payment and Other.
type UpgradeAvailabilityType struct {
	// An identifying number of the award, assigned by the system when the award was issued.
	AwardNumber *float32 `json:"awardNumber,omitempty"`
	// Unique code that identifies this award.
	AwardType *string `json:"awardType,omitempty"`
	// The cancel penalty charge.
	CancelPenaltyCharge *float32 `json:"cancelPenaltyCharge,omitempty"`
	// Number of days before arrival when a reservation may be cancelled without an award points penalty.
	CancelPenaltyDays *float32 `json:"cancelPenaltyDays,omitempty"`
	// The award points that will be forfeited if the cancel penalty charge is applied.
	CancelPenaltyPoints *float32 `json:"cancelPenaltyPoints,omitempty"`
	// The penalty charge is either a percentage or a flat number of points.
	CancelPenaltyType *string `json:"cancelPenaltyType,omitempty"`
	// Indicates room type code for the room prior to the upgrade.
	FromRoom *string `json:"fromRoom,omitempty"`
	// Indicates room type code for the room prior to the upgrade.
	FromRoomCategory *string `json:"fromRoomCategory,omitempty"`
	// Indicates room type Description for the room prior to the upgrade.
	FromRoomDescription *string `json:"fromRoomDescription,omitempty"`
	// HotelCode where the award will be consumed.
	HotelId *string `json:"hotelId,omitempty"`
	// The number of points that must be redeemed for this award.
	PointsRequired *float32 `json:"pointsRequired,omitempty"`
	// Issue key in format of Raw data.
	RawIssueKey *string `json:"rawIssueKey,omitempty"`
	// The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award.
	StayDate *string `json:"stayDate,omitempty"`
	// Indicates room type code of the upgrade room.
	ToRoom *string `json:"toRoom,omitempty"`
	// Indicates room type code of the upgrade room.
	ToRoomCategory *string `json:"toRoomCategory,omitempty"`
	// Indicates room type Description of the upgrade room.
	ToRoomDescription *string `json:"toRoomDescription,omitempty"`
	// Total award points available for redemption.
	TotalAvailablePoints *float32 `json:"totalAvailablePoints,omitempty"`
}

// NewUpgradeAvailabilityType instantiates a new UpgradeAvailabilityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpgradeAvailabilityType() *UpgradeAvailabilityType {
	this := UpgradeAvailabilityType{}
	return &this
}

// NewUpgradeAvailabilityTypeWithDefaults instantiates a new UpgradeAvailabilityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpgradeAvailabilityTypeWithDefaults() *UpgradeAvailabilityType {
	this := UpgradeAvailabilityType{}
	return &this
}

// GetAwardNumber returns the AwardNumber field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetAwardNumber() float32 {
	if o == nil || IsNil(o.AwardNumber) {
		var ret float32
		return ret
	}
	return *o.AwardNumber
}

// GetAwardNumberOk returns a tuple with the AwardNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetAwardNumberOk() (*float32, bool) {
	if o == nil || IsNil(o.AwardNumber) {
		return nil, false
	}
	return o.AwardNumber, true
}

// HasAwardNumber returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasAwardNumber() bool {
	if o != nil && !IsNil(o.AwardNumber) {
		return true
	}

	return false
}

// SetAwardNumber gets a reference to the given float32 and assigns it to the AwardNumber field.
func (o *UpgradeAvailabilityType) SetAwardNumber(v float32) {
	o.AwardNumber = &v
}

// GetAwardType returns the AwardType field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetAwardType() string {
	if o == nil || IsNil(o.AwardType) {
		var ret string
		return ret
	}
	return *o.AwardType
}

// GetAwardTypeOk returns a tuple with the AwardType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetAwardTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AwardType) {
		return nil, false
	}
	return o.AwardType, true
}

// HasAwardType returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasAwardType() bool {
	if o != nil && !IsNil(o.AwardType) {
		return true
	}

	return false
}

// SetAwardType gets a reference to the given string and assigns it to the AwardType field.
func (o *UpgradeAvailabilityType) SetAwardType(v string) {
	o.AwardType = &v
}

// GetCancelPenaltyCharge returns the CancelPenaltyCharge field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetCancelPenaltyCharge() float32 {
	if o == nil || IsNil(o.CancelPenaltyCharge) {
		var ret float32
		return ret
	}
	return *o.CancelPenaltyCharge
}

// GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetCancelPenaltyChargeOk() (*float32, bool) {
	if o == nil || IsNil(o.CancelPenaltyCharge) {
		return nil, false
	}
	return o.CancelPenaltyCharge, true
}

// HasCancelPenaltyCharge returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasCancelPenaltyCharge() bool {
	if o != nil && !IsNil(o.CancelPenaltyCharge) {
		return true
	}

	return false
}

// SetCancelPenaltyCharge gets a reference to the given float32 and assigns it to the CancelPenaltyCharge field.
func (o *UpgradeAvailabilityType) SetCancelPenaltyCharge(v float32) {
	o.CancelPenaltyCharge = &v
}

// GetCancelPenaltyDays returns the CancelPenaltyDays field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetCancelPenaltyDays() float32 {
	if o == nil || IsNil(o.CancelPenaltyDays) {
		var ret float32
		return ret
	}
	return *o.CancelPenaltyDays
}

// GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetCancelPenaltyDaysOk() (*float32, bool) {
	if o == nil || IsNil(o.CancelPenaltyDays) {
		return nil, false
	}
	return o.CancelPenaltyDays, true
}

// HasCancelPenaltyDays returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasCancelPenaltyDays() bool {
	if o != nil && !IsNil(o.CancelPenaltyDays) {
		return true
	}

	return false
}

// SetCancelPenaltyDays gets a reference to the given float32 and assigns it to the CancelPenaltyDays field.
func (o *UpgradeAvailabilityType) SetCancelPenaltyDays(v float32) {
	o.CancelPenaltyDays = &v
}

// GetCancelPenaltyPoints returns the CancelPenaltyPoints field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetCancelPenaltyPoints() float32 {
	if o == nil || IsNil(o.CancelPenaltyPoints) {
		var ret float32
		return ret
	}
	return *o.CancelPenaltyPoints
}

// GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetCancelPenaltyPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.CancelPenaltyPoints) {
		return nil, false
	}
	return o.CancelPenaltyPoints, true
}

// HasCancelPenaltyPoints returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasCancelPenaltyPoints() bool {
	if o != nil && !IsNil(o.CancelPenaltyPoints) {
		return true
	}

	return false
}

// SetCancelPenaltyPoints gets a reference to the given float32 and assigns it to the CancelPenaltyPoints field.
func (o *UpgradeAvailabilityType) SetCancelPenaltyPoints(v float32) {
	o.CancelPenaltyPoints = &v
}

// GetCancelPenaltyType returns the CancelPenaltyType field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetCancelPenaltyType() string {
	if o == nil || IsNil(o.CancelPenaltyType) {
		var ret string
		return ret
	}
	return *o.CancelPenaltyType
}

// GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetCancelPenaltyTypeOk() (*string, bool) {
	if o == nil || IsNil(o.CancelPenaltyType) {
		return nil, false
	}
	return o.CancelPenaltyType, true
}

// HasCancelPenaltyType returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasCancelPenaltyType() bool {
	if o != nil && !IsNil(o.CancelPenaltyType) {
		return true
	}

	return false
}

// SetCancelPenaltyType gets a reference to the given string and assigns it to the CancelPenaltyType field.
func (o *UpgradeAvailabilityType) SetCancelPenaltyType(v string) {
	o.CancelPenaltyType = &v
}

// GetFromRoom returns the FromRoom field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetFromRoom() string {
	if o == nil || IsNil(o.FromRoom) {
		var ret string
		return ret
	}
	return *o.FromRoom
}

// GetFromRoomOk returns a tuple with the FromRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetFromRoomOk() (*string, bool) {
	if o == nil || IsNil(o.FromRoom) {
		return nil, false
	}
	return o.FromRoom, true
}

// HasFromRoom returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasFromRoom() bool {
	if o != nil && !IsNil(o.FromRoom) {
		return true
	}

	return false
}

// SetFromRoom gets a reference to the given string and assigns it to the FromRoom field.
func (o *UpgradeAvailabilityType) SetFromRoom(v string) {
	o.FromRoom = &v
}

// GetFromRoomCategory returns the FromRoomCategory field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetFromRoomCategory() string {
	if o == nil || IsNil(o.FromRoomCategory) {
		var ret string
		return ret
	}
	return *o.FromRoomCategory
}

// GetFromRoomCategoryOk returns a tuple with the FromRoomCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetFromRoomCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.FromRoomCategory) {
		return nil, false
	}
	return o.FromRoomCategory, true
}

// HasFromRoomCategory returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasFromRoomCategory() bool {
	if o != nil && !IsNil(o.FromRoomCategory) {
		return true
	}

	return false
}

// SetFromRoomCategory gets a reference to the given string and assigns it to the FromRoomCategory field.
func (o *UpgradeAvailabilityType) SetFromRoomCategory(v string) {
	o.FromRoomCategory = &v
}

// GetFromRoomDescription returns the FromRoomDescription field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetFromRoomDescription() string {
	if o == nil || IsNil(o.FromRoomDescription) {
		var ret string
		return ret
	}
	return *o.FromRoomDescription
}

// GetFromRoomDescriptionOk returns a tuple with the FromRoomDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetFromRoomDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.FromRoomDescription) {
		return nil, false
	}
	return o.FromRoomDescription, true
}

// HasFromRoomDescription returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasFromRoomDescription() bool {
	if o != nil && !IsNil(o.FromRoomDescription) {
		return true
	}

	return false
}

// SetFromRoomDescription gets a reference to the given string and assigns it to the FromRoomDescription field.
func (o *UpgradeAvailabilityType) SetFromRoomDescription(v string) {
	o.FromRoomDescription = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *UpgradeAvailabilityType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetPointsRequired returns the PointsRequired field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetPointsRequired() float32 {
	if o == nil || IsNil(o.PointsRequired) {
		var ret float32
		return ret
	}
	return *o.PointsRequired
}

// GetPointsRequiredOk returns a tuple with the PointsRequired field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetPointsRequiredOk() (*float32, bool) {
	if o == nil || IsNil(o.PointsRequired) {
		return nil, false
	}
	return o.PointsRequired, true
}

// HasPointsRequired returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasPointsRequired() bool {
	if o != nil && !IsNil(o.PointsRequired) {
		return true
	}

	return false
}

// SetPointsRequired gets a reference to the given float32 and assigns it to the PointsRequired field.
func (o *UpgradeAvailabilityType) SetPointsRequired(v float32) {
	o.PointsRequired = &v
}

// GetRawIssueKey returns the RawIssueKey field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetRawIssueKey() string {
	if o == nil || IsNil(o.RawIssueKey) {
		var ret string
		return ret
	}
	return *o.RawIssueKey
}

// GetRawIssueKeyOk returns a tuple with the RawIssueKey field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetRawIssueKeyOk() (*string, bool) {
	if o == nil || IsNil(o.RawIssueKey) {
		return nil, false
	}
	return o.RawIssueKey, true
}

// HasRawIssueKey returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasRawIssueKey() bool {
	if o != nil && !IsNil(o.RawIssueKey) {
		return true
	}

	return false
}

// SetRawIssueKey gets a reference to the given string and assigns it to the RawIssueKey field.
func (o *UpgradeAvailabilityType) SetRawIssueKey(v string) {
	o.RawIssueKey = &v
}

// GetStayDate returns the StayDate field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetStayDate() string {
	if o == nil || IsNil(o.StayDate) {
		var ret string
		return ret
	}
	return *o.StayDate
}

// GetStayDateOk returns a tuple with the StayDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetStayDateOk() (*string, bool) {
	if o == nil || IsNil(o.StayDate) {
		return nil, false
	}
	return o.StayDate, true
}

// HasStayDate returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasStayDate() bool {
	if o != nil && !IsNil(o.StayDate) {
		return true
	}

	return false
}

// SetStayDate gets a reference to the given string and assigns it to the StayDate field.
func (o *UpgradeAvailabilityType) SetStayDate(v string) {
	o.StayDate = &v
}

// GetToRoom returns the ToRoom field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetToRoom() string {
	if o == nil || IsNil(o.ToRoom) {
		var ret string
		return ret
	}
	return *o.ToRoom
}

// GetToRoomOk returns a tuple with the ToRoom field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetToRoomOk() (*string, bool) {
	if o == nil || IsNil(o.ToRoom) {
		return nil, false
	}
	return o.ToRoom, true
}

// HasToRoom returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasToRoom() bool {
	if o != nil && !IsNil(o.ToRoom) {
		return true
	}

	return false
}

// SetToRoom gets a reference to the given string and assigns it to the ToRoom field.
func (o *UpgradeAvailabilityType) SetToRoom(v string) {
	o.ToRoom = &v
}

// GetToRoomCategory returns the ToRoomCategory field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetToRoomCategory() string {
	if o == nil || IsNil(o.ToRoomCategory) {
		var ret string
		return ret
	}
	return *o.ToRoomCategory
}

// GetToRoomCategoryOk returns a tuple with the ToRoomCategory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetToRoomCategoryOk() (*string, bool) {
	if o == nil || IsNil(o.ToRoomCategory) {
		return nil, false
	}
	return o.ToRoomCategory, true
}

// HasToRoomCategory returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasToRoomCategory() bool {
	if o != nil && !IsNil(o.ToRoomCategory) {
		return true
	}

	return false
}

// SetToRoomCategory gets a reference to the given string and assigns it to the ToRoomCategory field.
func (o *UpgradeAvailabilityType) SetToRoomCategory(v string) {
	o.ToRoomCategory = &v
}

// GetToRoomDescription returns the ToRoomDescription field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetToRoomDescription() string {
	if o == nil || IsNil(o.ToRoomDescription) {
		var ret string
		return ret
	}
	return *o.ToRoomDescription
}

// GetToRoomDescriptionOk returns a tuple with the ToRoomDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetToRoomDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ToRoomDescription) {
		return nil, false
	}
	return o.ToRoomDescription, true
}

// HasToRoomDescription returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasToRoomDescription() bool {
	if o != nil && !IsNil(o.ToRoomDescription) {
		return true
	}

	return false
}

// SetToRoomDescription gets a reference to the given string and assigns it to the ToRoomDescription field.
func (o *UpgradeAvailabilityType) SetToRoomDescription(v string) {
	o.ToRoomDescription = &v
}

// GetTotalAvailablePoints returns the TotalAvailablePoints field value if set, zero value otherwise.
func (o *UpgradeAvailabilityType) GetTotalAvailablePoints() float32 {
	if o == nil || IsNil(o.TotalAvailablePoints) {
		var ret float32
		return ret
	}
	return *o.TotalAvailablePoints
}

// GetTotalAvailablePointsOk returns a tuple with the TotalAvailablePoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpgradeAvailabilityType) GetTotalAvailablePointsOk() (*float32, bool) {
	if o == nil || IsNil(o.TotalAvailablePoints) {
		return nil, false
	}
	return o.TotalAvailablePoints, true
}

// HasTotalAvailablePoints returns a boolean if a field has been set.
func (o *UpgradeAvailabilityType) HasTotalAvailablePoints() bool {
	if o != nil && !IsNil(o.TotalAvailablePoints) {
		return true
	}

	return false
}

// SetTotalAvailablePoints gets a reference to the given float32 and assigns it to the TotalAvailablePoints field.
func (o *UpgradeAvailabilityType) SetTotalAvailablePoints(v float32) {
	o.TotalAvailablePoints = &v
}

func (o UpgradeAvailabilityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpgradeAvailabilityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardNumber) {
		toSerialize["awardNumber"] = o.AwardNumber
	}
	if !IsNil(o.AwardType) {
		toSerialize["awardType"] = o.AwardType
	}
	if !IsNil(o.CancelPenaltyCharge) {
		toSerialize["cancelPenaltyCharge"] = o.CancelPenaltyCharge
	}
	if !IsNil(o.CancelPenaltyDays) {
		toSerialize["cancelPenaltyDays"] = o.CancelPenaltyDays
	}
	if !IsNil(o.CancelPenaltyPoints) {
		toSerialize["cancelPenaltyPoints"] = o.CancelPenaltyPoints
	}
	if !IsNil(o.CancelPenaltyType) {
		toSerialize["cancelPenaltyType"] = o.CancelPenaltyType
	}
	if !IsNil(o.FromRoom) {
		toSerialize["fromRoom"] = o.FromRoom
	}
	if !IsNil(o.FromRoomCategory) {
		toSerialize["fromRoomCategory"] = o.FromRoomCategory
	}
	if !IsNil(o.FromRoomDescription) {
		toSerialize["fromRoomDescription"] = o.FromRoomDescription
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.PointsRequired) {
		toSerialize["pointsRequired"] = o.PointsRequired
	}
	if !IsNil(o.RawIssueKey) {
		toSerialize["rawIssueKey"] = o.RawIssueKey
	}
	if !IsNil(o.StayDate) {
		toSerialize["stayDate"] = o.StayDate
	}
	if !IsNil(o.ToRoom) {
		toSerialize["toRoom"] = o.ToRoom
	}
	if !IsNil(o.ToRoomCategory) {
		toSerialize["toRoomCategory"] = o.ToRoomCategory
	}
	if !IsNil(o.ToRoomDescription) {
		toSerialize["toRoomDescription"] = o.ToRoomDescription
	}
	if !IsNil(o.TotalAvailablePoints) {
		toSerialize["totalAvailablePoints"] = o.TotalAvailablePoints
	}
	return toSerialize, nil
}

type NullableUpgradeAvailabilityType struct {
	value *UpgradeAvailabilityType
	isSet bool
}

func (v NullableUpgradeAvailabilityType) Get() *UpgradeAvailabilityType {
	return v.value
}

func (v *NullableUpgradeAvailabilityType) Set(val *UpgradeAvailabilityType) {
	v.value = val
	v.isSet = true
}

func (v NullableUpgradeAvailabilityType) IsSet() bool {
	return v.isSet
}

func (v *NullableUpgradeAvailabilityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpgradeAvailabilityType(val *UpgradeAvailabilityType) *NullableUpgradeAvailabilityType {
	return &NullableUpgradeAvailabilityType{value: val, isSet: true}
}

func (v NullableUpgradeAvailabilityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpgradeAvailabilityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


