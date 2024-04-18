/*
OPERA Cloud Room Rotation Configuration Service API

APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmrcfg

import (
	"encoding/json"
)

// checks if the RotationRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RotationRuleType{}

// RotationRuleType struct for RotationRuleType
type RotationRuleType struct {
	CalculationRule *RotationRuleCalculationRuleType `json:"calculationRule,omitempty"`
	DaysOfWeek *DaysOfWeekAttrType `json:"daysOfWeek,omitempty"`
	// Represents end date for Room Rotation Setup Rule.
	EndDate *string `json:"endDate,omitempty"`
	// Represents multiplier value to be used for an Owner Multiplier Rule or an Out of Order / Service Multiplier rule.
	Multiplier *float32 `json:"multiplier,omitempty"`
	// Represents total points for a Rotation Setup Rule. (To be used with Rotation Point Rules)
	Points *float32 `json:"points,omitempty"`
	RateCodes []string `json:"rateCodes,omitempty"`
	Reasons []string `json:"reasons,omitempty"`
	// Indicates that this Rotation Setup Rule is to be used for Owner Referral Reservations.
	Referral *bool `json:"referral,omitempty"`
	RoomTypes []string `json:"roomTypes,omitempty"`
	// Unique ID for Room Rotation Setup Rule.
	RuleId *float32 `json:"ruleId,omitempty"`
	SetupType *RotationRuleSetupType `json:"setupType,omitempty"`
	// Represents start date for Room Rotation Setup Rule.
	StartDate *string `json:"startDate,omitempty"`
	Status *RotationRuleStatusType `json:"status,omitempty"`
}

// NewRotationRuleType instantiates a new RotationRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRotationRuleType() *RotationRuleType {
	this := RotationRuleType{}
	return &this
}

// NewRotationRuleTypeWithDefaults instantiates a new RotationRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRotationRuleTypeWithDefaults() *RotationRuleType {
	this := RotationRuleType{}
	return &this
}

// GetCalculationRule returns the CalculationRule field value if set, zero value otherwise.
func (o *RotationRuleType) GetCalculationRule() RotationRuleCalculationRuleType {
	if o == nil || IsNil(o.CalculationRule) {
		var ret RotationRuleCalculationRuleType
		return ret
	}
	return *o.CalculationRule
}

// GetCalculationRuleOk returns a tuple with the CalculationRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetCalculationRuleOk() (*RotationRuleCalculationRuleType, bool) {
	if o == nil || IsNil(o.CalculationRule) {
		return nil, false
	}
	return o.CalculationRule, true
}

// HasCalculationRule returns a boolean if a field has been set.
func (o *RotationRuleType) HasCalculationRule() bool {
	if o != nil && !IsNil(o.CalculationRule) {
		return true
	}

	return false
}

// SetCalculationRule gets a reference to the given RotationRuleCalculationRuleType and assigns it to the CalculationRule field.
func (o *RotationRuleType) SetCalculationRule(v RotationRuleCalculationRuleType) {
	o.CalculationRule = &v
}

// GetDaysOfWeek returns the DaysOfWeek field value if set, zero value otherwise.
func (o *RotationRuleType) GetDaysOfWeek() DaysOfWeekAttrType {
	if o == nil || IsNil(o.DaysOfWeek) {
		var ret DaysOfWeekAttrType
		return ret
	}
	return *o.DaysOfWeek
}

// GetDaysOfWeekOk returns a tuple with the DaysOfWeek field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetDaysOfWeekOk() (*DaysOfWeekAttrType, bool) {
	if o == nil || IsNil(o.DaysOfWeek) {
		return nil, false
	}
	return o.DaysOfWeek, true
}

// HasDaysOfWeek returns a boolean if a field has been set.
func (o *RotationRuleType) HasDaysOfWeek() bool {
	if o != nil && !IsNil(o.DaysOfWeek) {
		return true
	}

	return false
}

// SetDaysOfWeek gets a reference to the given DaysOfWeekAttrType and assigns it to the DaysOfWeek field.
func (o *RotationRuleType) SetDaysOfWeek(v DaysOfWeekAttrType) {
	o.DaysOfWeek = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *RotationRuleType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *RotationRuleType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *RotationRuleType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetMultiplier returns the Multiplier field value if set, zero value otherwise.
func (o *RotationRuleType) GetMultiplier() float32 {
	if o == nil || IsNil(o.Multiplier) {
		var ret float32
		return ret
	}
	return *o.Multiplier
}

// GetMultiplierOk returns a tuple with the Multiplier field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetMultiplierOk() (*float32, bool) {
	if o == nil || IsNil(o.Multiplier) {
		return nil, false
	}
	return o.Multiplier, true
}

// HasMultiplier returns a boolean if a field has been set.
func (o *RotationRuleType) HasMultiplier() bool {
	if o != nil && !IsNil(o.Multiplier) {
		return true
	}

	return false
}

// SetMultiplier gets a reference to the given float32 and assigns it to the Multiplier field.
func (o *RotationRuleType) SetMultiplier(v float32) {
	o.Multiplier = &v
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *RotationRuleType) GetPoints() float32 {
	if o == nil || IsNil(o.Points) {
		var ret float32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetPointsOk() (*float32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *RotationRuleType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given float32 and assigns it to the Points field.
func (o *RotationRuleType) SetPoints(v float32) {
	o.Points = &v
}

// GetRateCodes returns the RateCodes field value if set, zero value otherwise.
func (o *RotationRuleType) GetRateCodes() []string {
	if o == nil || IsNil(o.RateCodes) {
		var ret []string
		return ret
	}
	return o.RateCodes
}

// GetRateCodesOk returns a tuple with the RateCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetRateCodesOk() ([]string, bool) {
	if o == nil || IsNil(o.RateCodes) {
		return nil, false
	}
	return o.RateCodes, true
}

// HasRateCodes returns a boolean if a field has been set.
func (o *RotationRuleType) HasRateCodes() bool {
	if o != nil && !IsNil(o.RateCodes) {
		return true
	}

	return false
}

// SetRateCodes gets a reference to the given []string and assigns it to the RateCodes field.
func (o *RotationRuleType) SetRateCodes(v []string) {
	o.RateCodes = v
}

// GetReasons returns the Reasons field value if set, zero value otherwise.
func (o *RotationRuleType) GetReasons() []string {
	if o == nil || IsNil(o.Reasons) {
		var ret []string
		return ret
	}
	return o.Reasons
}

// GetReasonsOk returns a tuple with the Reasons field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetReasonsOk() ([]string, bool) {
	if o == nil || IsNil(o.Reasons) {
		return nil, false
	}
	return o.Reasons, true
}

// HasReasons returns a boolean if a field has been set.
func (o *RotationRuleType) HasReasons() bool {
	if o != nil && !IsNil(o.Reasons) {
		return true
	}

	return false
}

// SetReasons gets a reference to the given []string and assigns it to the Reasons field.
func (o *RotationRuleType) SetReasons(v []string) {
	o.Reasons = v
}

// GetReferral returns the Referral field value if set, zero value otherwise.
func (o *RotationRuleType) GetReferral() bool {
	if o == nil || IsNil(o.Referral) {
		var ret bool
		return ret
	}
	return *o.Referral
}

// GetReferralOk returns a tuple with the Referral field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetReferralOk() (*bool, bool) {
	if o == nil || IsNil(o.Referral) {
		return nil, false
	}
	return o.Referral, true
}

// HasReferral returns a boolean if a field has been set.
func (o *RotationRuleType) HasReferral() bool {
	if o != nil && !IsNil(o.Referral) {
		return true
	}

	return false
}

// SetReferral gets a reference to the given bool and assigns it to the Referral field.
func (o *RotationRuleType) SetReferral(v bool) {
	o.Referral = &v
}

// GetRoomTypes returns the RoomTypes field value if set, zero value otherwise.
func (o *RotationRuleType) GetRoomTypes() []string {
	if o == nil || IsNil(o.RoomTypes) {
		var ret []string
		return ret
	}
	return o.RoomTypes
}

// GetRoomTypesOk returns a tuple with the RoomTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetRoomTypesOk() ([]string, bool) {
	if o == nil || IsNil(o.RoomTypes) {
		return nil, false
	}
	return o.RoomTypes, true
}

// HasRoomTypes returns a boolean if a field has been set.
func (o *RotationRuleType) HasRoomTypes() bool {
	if o != nil && !IsNil(o.RoomTypes) {
		return true
	}

	return false
}

// SetRoomTypes gets a reference to the given []string and assigns it to the RoomTypes field.
func (o *RotationRuleType) SetRoomTypes(v []string) {
	o.RoomTypes = v
}

// GetRuleId returns the RuleId field value if set, zero value otherwise.
func (o *RotationRuleType) GetRuleId() float32 {
	if o == nil || IsNil(o.RuleId) {
		var ret float32
		return ret
	}
	return *o.RuleId
}

// GetRuleIdOk returns a tuple with the RuleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetRuleIdOk() (*float32, bool) {
	if o == nil || IsNil(o.RuleId) {
		return nil, false
	}
	return o.RuleId, true
}

// HasRuleId returns a boolean if a field has been set.
func (o *RotationRuleType) HasRuleId() bool {
	if o != nil && !IsNil(o.RuleId) {
		return true
	}

	return false
}

// SetRuleId gets a reference to the given float32 and assigns it to the RuleId field.
func (o *RotationRuleType) SetRuleId(v float32) {
	o.RuleId = &v
}

// GetSetupType returns the SetupType field value if set, zero value otherwise.
func (o *RotationRuleType) GetSetupType() RotationRuleSetupType {
	if o == nil || IsNil(o.SetupType) {
		var ret RotationRuleSetupType
		return ret
	}
	return *o.SetupType
}

// GetSetupTypeOk returns a tuple with the SetupType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetSetupTypeOk() (*RotationRuleSetupType, bool) {
	if o == nil || IsNil(o.SetupType) {
		return nil, false
	}
	return o.SetupType, true
}

// HasSetupType returns a boolean if a field has been set.
func (o *RotationRuleType) HasSetupType() bool {
	if o != nil && !IsNil(o.SetupType) {
		return true
	}

	return false
}

// SetSetupType gets a reference to the given RotationRuleSetupType and assigns it to the SetupType field.
func (o *RotationRuleType) SetSetupType(v RotationRuleSetupType) {
	o.SetupType = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *RotationRuleType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *RotationRuleType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *RotationRuleType) SetStartDate(v string) {
	o.StartDate = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *RotationRuleType) GetStatus() RotationRuleStatusType {
	if o == nil || IsNil(o.Status) {
		var ret RotationRuleStatusType
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RotationRuleType) GetStatusOk() (*RotationRuleStatusType, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *RotationRuleType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given RotationRuleStatusType and assigns it to the Status field.
func (o *RotationRuleType) SetStatus(v RotationRuleStatusType) {
	o.Status = &v
}

func (o RotationRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RotationRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CalculationRule) {
		toSerialize["calculationRule"] = o.CalculationRule
	}
	if !IsNil(o.DaysOfWeek) {
		toSerialize["daysOfWeek"] = o.DaysOfWeek
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.Multiplier) {
		toSerialize["multiplier"] = o.Multiplier
	}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	if !IsNil(o.RateCodes) {
		toSerialize["rateCodes"] = o.RateCodes
	}
	if !IsNil(o.Reasons) {
		toSerialize["reasons"] = o.Reasons
	}
	if !IsNil(o.Referral) {
		toSerialize["referral"] = o.Referral
	}
	if !IsNil(o.RoomTypes) {
		toSerialize["roomTypes"] = o.RoomTypes
	}
	if !IsNil(o.RuleId) {
		toSerialize["ruleId"] = o.RuleId
	}
	if !IsNil(o.SetupType) {
		toSerialize["setupType"] = o.SetupType
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableRotationRuleType struct {
	value *RotationRuleType
	isSet bool
}

func (v NullableRotationRuleType) Get() *RotationRuleType {
	return v.value
}

func (v *NullableRotationRuleType) Set(val *RotationRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableRotationRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableRotationRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRotationRuleType(val *RotationRuleType) *NullableRotationRuleType {
	return &NullableRotationRuleType{value: val, isSet: true}
}

func (v NullableRotationRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRotationRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

