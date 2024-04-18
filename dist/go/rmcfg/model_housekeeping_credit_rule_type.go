/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingCreditRuleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingCreditRuleType{}

// HousekeepingCreditRuleType The information of housekeeping credit rule for configuration.
type HousekeepingCreditRuleType struct {
	Buildings []string `json:"buildings,omitempty"`
	// The additional credits which are applied to the task assignment sheet when the rule criteria has been met.
	CreditValue *float32 `json:"creditValue,omitempty"`
	DaysOfWeek *TimeSpanDaysOfWeekType `json:"daysOfWeek,omitempty"`
	// Description of housekeeping credit rule.
	Description *string `json:"description,omitempty"`
	FacilityTaskRule *HousekeepingCreditRuleTypeFacilityTaskRule `json:"facilityTaskRule,omitempty"`
	// Hotel Code where housekeeping credit rule belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Indicates if the Housekeeping Credit Rule is inactive.
	Inactive *bool `json:"inactive,omitempty"`
	// Rule Code of housekeeping credit rule.
	RuleCode *string `json:"ruleCode,omitempty"`
	RuleType *HousekeepingCreditRuleTypeType `json:"ruleType,omitempty"`
	// When RuleType is set to Special, specifies which special makes this credit rule applicable. For example, the credit value will be added to the task assignment sheet when the assigned room has this specific special applied to the reservation.
	Special *string `json:"special,omitempty"`
	TravelType *HousekeepingCreditRuleTravelTypeType `json:"travelType,omitempty"`
}

// NewHousekeepingCreditRuleType instantiates a new HousekeepingCreditRuleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingCreditRuleType() *HousekeepingCreditRuleType {
	this := HousekeepingCreditRuleType{}
	return &this
}

// NewHousekeepingCreditRuleTypeWithDefaults instantiates a new HousekeepingCreditRuleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingCreditRuleTypeWithDefaults() *HousekeepingCreditRuleType {
	this := HousekeepingCreditRuleType{}
	return &this
}

// GetBuildings returns the Buildings field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetBuildings() []string {
	if o == nil || IsNil(o.Buildings) {
		var ret []string
		return ret
	}
	return o.Buildings
}

// GetBuildingsOk returns a tuple with the Buildings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetBuildingsOk() ([]string, bool) {
	if o == nil || IsNil(o.Buildings) {
		return nil, false
	}
	return o.Buildings, true
}

// HasBuildings returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasBuildings() bool {
	if o != nil && !IsNil(o.Buildings) {
		return true
	}

	return false
}

// SetBuildings gets a reference to the given []string and assigns it to the Buildings field.
func (o *HousekeepingCreditRuleType) SetBuildings(v []string) {
	o.Buildings = v
}

// GetCreditValue returns the CreditValue field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetCreditValue() float32 {
	if o == nil || IsNil(o.CreditValue) {
		var ret float32
		return ret
	}
	return *o.CreditValue
}

// GetCreditValueOk returns a tuple with the CreditValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetCreditValueOk() (*float32, bool) {
	if o == nil || IsNil(o.CreditValue) {
		return nil, false
	}
	return o.CreditValue, true
}

// HasCreditValue returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasCreditValue() bool {
	if o != nil && !IsNil(o.CreditValue) {
		return true
	}

	return false
}

// SetCreditValue gets a reference to the given float32 and assigns it to the CreditValue field.
func (o *HousekeepingCreditRuleType) SetCreditValue(v float32) {
	o.CreditValue = &v
}

// GetDaysOfWeek returns the DaysOfWeek field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetDaysOfWeek() TimeSpanDaysOfWeekType {
	if o == nil || IsNil(o.DaysOfWeek) {
		var ret TimeSpanDaysOfWeekType
		return ret
	}
	return *o.DaysOfWeek
}

// GetDaysOfWeekOk returns a tuple with the DaysOfWeek field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetDaysOfWeekOk() (*TimeSpanDaysOfWeekType, bool) {
	if o == nil || IsNil(o.DaysOfWeek) {
		return nil, false
	}
	return o.DaysOfWeek, true
}

// HasDaysOfWeek returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasDaysOfWeek() bool {
	if o != nil && !IsNil(o.DaysOfWeek) {
		return true
	}

	return false
}

// SetDaysOfWeek gets a reference to the given TimeSpanDaysOfWeekType and assigns it to the DaysOfWeek field.
func (o *HousekeepingCreditRuleType) SetDaysOfWeek(v TimeSpanDaysOfWeekType) {
	o.DaysOfWeek = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *HousekeepingCreditRuleType) SetDescription(v string) {
	o.Description = &v
}

// GetFacilityTaskRule returns the FacilityTaskRule field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetFacilityTaskRule() HousekeepingCreditRuleTypeFacilityTaskRule {
	if o == nil || IsNil(o.FacilityTaskRule) {
		var ret HousekeepingCreditRuleTypeFacilityTaskRule
		return ret
	}
	return *o.FacilityTaskRule
}

// GetFacilityTaskRuleOk returns a tuple with the FacilityTaskRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetFacilityTaskRuleOk() (*HousekeepingCreditRuleTypeFacilityTaskRule, bool) {
	if o == nil || IsNil(o.FacilityTaskRule) {
		return nil, false
	}
	return o.FacilityTaskRule, true
}

// HasFacilityTaskRule returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasFacilityTaskRule() bool {
	if o != nil && !IsNil(o.FacilityTaskRule) {
		return true
	}

	return false
}

// SetFacilityTaskRule gets a reference to the given HousekeepingCreditRuleTypeFacilityTaskRule and assigns it to the FacilityTaskRule field.
func (o *HousekeepingCreditRuleType) SetFacilityTaskRule(v HousekeepingCreditRuleTypeFacilityTaskRule) {
	o.FacilityTaskRule = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *HousekeepingCreditRuleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *HousekeepingCreditRuleType) SetInactive(v bool) {
	o.Inactive = &v
}

// GetRuleCode returns the RuleCode field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetRuleCode() string {
	if o == nil || IsNil(o.RuleCode) {
		var ret string
		return ret
	}
	return *o.RuleCode
}

// GetRuleCodeOk returns a tuple with the RuleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetRuleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RuleCode) {
		return nil, false
	}
	return o.RuleCode, true
}

// HasRuleCode returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasRuleCode() bool {
	if o != nil && !IsNil(o.RuleCode) {
		return true
	}

	return false
}

// SetRuleCode gets a reference to the given string and assigns it to the RuleCode field.
func (o *HousekeepingCreditRuleType) SetRuleCode(v string) {
	o.RuleCode = &v
}

// GetRuleType returns the RuleType field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetRuleType() HousekeepingCreditRuleTypeType {
	if o == nil || IsNil(o.RuleType) {
		var ret HousekeepingCreditRuleTypeType
		return ret
	}
	return *o.RuleType
}

// GetRuleTypeOk returns a tuple with the RuleType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetRuleTypeOk() (*HousekeepingCreditRuleTypeType, bool) {
	if o == nil || IsNil(o.RuleType) {
		return nil, false
	}
	return o.RuleType, true
}

// HasRuleType returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasRuleType() bool {
	if o != nil && !IsNil(o.RuleType) {
		return true
	}

	return false
}

// SetRuleType gets a reference to the given HousekeepingCreditRuleTypeType and assigns it to the RuleType field.
func (o *HousekeepingCreditRuleType) SetRuleType(v HousekeepingCreditRuleTypeType) {
	o.RuleType = &v
}

// GetSpecial returns the Special field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetSpecial() string {
	if o == nil || IsNil(o.Special) {
		var ret string
		return ret
	}
	return *o.Special
}

// GetSpecialOk returns a tuple with the Special field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetSpecialOk() (*string, bool) {
	if o == nil || IsNil(o.Special) {
		return nil, false
	}
	return o.Special, true
}

// HasSpecial returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasSpecial() bool {
	if o != nil && !IsNil(o.Special) {
		return true
	}

	return false
}

// SetSpecial gets a reference to the given string and assigns it to the Special field.
func (o *HousekeepingCreditRuleType) SetSpecial(v string) {
	o.Special = &v
}

// GetTravelType returns the TravelType field value if set, zero value otherwise.
func (o *HousekeepingCreditRuleType) GetTravelType() HousekeepingCreditRuleTravelTypeType {
	if o == nil || IsNil(o.TravelType) {
		var ret HousekeepingCreditRuleTravelTypeType
		return ret
	}
	return *o.TravelType
}

// GetTravelTypeOk returns a tuple with the TravelType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRuleType) GetTravelTypeOk() (*HousekeepingCreditRuleTravelTypeType, bool) {
	if o == nil || IsNil(o.TravelType) {
		return nil, false
	}
	return o.TravelType, true
}

// HasTravelType returns a boolean if a field has been set.
func (o *HousekeepingCreditRuleType) HasTravelType() bool {
	if o != nil && !IsNil(o.TravelType) {
		return true
	}

	return false
}

// SetTravelType gets a reference to the given HousekeepingCreditRuleTravelTypeType and assigns it to the TravelType field.
func (o *HousekeepingCreditRuleType) SetTravelType(v HousekeepingCreditRuleTravelTypeType) {
	o.TravelType = &v
}

func (o HousekeepingCreditRuleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingCreditRuleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Buildings) {
		toSerialize["buildings"] = o.Buildings
	}
	if !IsNil(o.CreditValue) {
		toSerialize["creditValue"] = o.CreditValue
	}
	if !IsNil(o.DaysOfWeek) {
		toSerialize["daysOfWeek"] = o.DaysOfWeek
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.FacilityTaskRule) {
		toSerialize["facilityTaskRule"] = o.FacilityTaskRule
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	if !IsNil(o.RuleCode) {
		toSerialize["ruleCode"] = o.RuleCode
	}
	if !IsNil(o.RuleType) {
		toSerialize["ruleType"] = o.RuleType
	}
	if !IsNil(o.Special) {
		toSerialize["special"] = o.Special
	}
	if !IsNil(o.TravelType) {
		toSerialize["travelType"] = o.TravelType
	}
	return toSerialize, nil
}

type NullableHousekeepingCreditRuleType struct {
	value *HousekeepingCreditRuleType
	isSet bool
}

func (v NullableHousekeepingCreditRuleType) Get() *HousekeepingCreditRuleType {
	return v.value
}

func (v *NullableHousekeepingCreditRuleType) Set(val *HousekeepingCreditRuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingCreditRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingCreditRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingCreditRuleType(val *HousekeepingCreditRuleType) *NullableHousekeepingCreditRuleType {
	return &NullableHousekeepingCreditRuleType{value: val, isSet: true}
}

func (v NullableHousekeepingCreditRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingCreditRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

