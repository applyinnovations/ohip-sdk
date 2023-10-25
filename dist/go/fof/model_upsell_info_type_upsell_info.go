/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the UpsellInfoTypeUpsellInfo type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpsellInfoTypeUpsellInfo{}

// UpsellInfoTypeUpsellInfo Information of a reservation during the process of upgrade.
type UpsellInfoTypeUpsellInfo struct {
	FirstNightUpsellAmount *CurrencyAmountType `json:"firstNightUpsellAmount,omitempty"`
	FirstNightUpsellCharge *CurrencyAmountType `json:"firstNightUpsellCharge,omitempty"`
	// Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered)
	PercentageSavings *float32 `json:"percentageSavings,omitempty"`
	// Detail description of the Room Type.
	RoomLongDescription *string `json:"roomLongDescription,omitempty"`
	RoomType *CodeDescriptionType `json:"roomType,omitempty"`
	// Upsell rule code
	RuleCode *string `json:"ruleCode,omitempty"`
	// Upsell rule description
	RuleDescription *string `json:"ruleDescription,omitempty"`
	// Upsell Rule Id.
	RuleId *int32 `json:"ruleId,omitempty"`
	TotalActualRateAmount *CurrencyAmountType `json:"totalActualRateAmount,omitempty"`
	TotalUpsellCharge *CurrencyAmountType `json:"totalUpsellCharge,omitempty"`
	TotalUpsellMoneyAmount *CurrencyAmountType `json:"totalUpsellMoneyAmount,omitempty"`
	// Total Upsell Points.
	TotalUpsellPoints *int32 `json:"totalUpsellPoints,omitempty"`
	// The date on which reservation is upgraded.
	UpsellDate *string `json:"upsellDate,omitempty"`
	// User who upgraded the reservation.
	UpsellUser *string `json:"upsellUser,omitempty"`
}

// NewUpsellInfoTypeUpsellInfo instantiates a new UpsellInfoTypeUpsellInfo object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpsellInfoTypeUpsellInfo() *UpsellInfoTypeUpsellInfo {
	this := UpsellInfoTypeUpsellInfo{}
	return &this
}

// NewUpsellInfoTypeUpsellInfoWithDefaults instantiates a new UpsellInfoTypeUpsellInfo object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpsellInfoTypeUpsellInfoWithDefaults() *UpsellInfoTypeUpsellInfo {
	this := UpsellInfoTypeUpsellInfo{}
	return &this
}

// GetFirstNightUpsellAmount returns the FirstNightUpsellAmount field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellAmount() CurrencyAmountType {
	if o == nil || IsNil(o.FirstNightUpsellAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.FirstNightUpsellAmount
}

// GetFirstNightUpsellAmountOk returns a tuple with the FirstNightUpsellAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.FirstNightUpsellAmount) {
		return nil, false
	}
	return o.FirstNightUpsellAmount, true
}

// HasFirstNightUpsellAmount returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasFirstNightUpsellAmount() bool {
	if o != nil && !IsNil(o.FirstNightUpsellAmount) {
		return true
	}

	return false
}

// SetFirstNightUpsellAmount gets a reference to the given CurrencyAmountType and assigns it to the FirstNightUpsellAmount field.
func (o *UpsellInfoTypeUpsellInfo) SetFirstNightUpsellAmount(v CurrencyAmountType) {
	o.FirstNightUpsellAmount = &v
}

// GetFirstNightUpsellCharge returns the FirstNightUpsellCharge field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellCharge() CurrencyAmountType {
	if o == nil || IsNil(o.FirstNightUpsellCharge) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.FirstNightUpsellCharge
}

// GetFirstNightUpsellChargeOk returns a tuple with the FirstNightUpsellCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetFirstNightUpsellChargeOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.FirstNightUpsellCharge) {
		return nil, false
	}
	return o.FirstNightUpsellCharge, true
}

// HasFirstNightUpsellCharge returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasFirstNightUpsellCharge() bool {
	if o != nil && !IsNil(o.FirstNightUpsellCharge) {
		return true
	}

	return false
}

// SetFirstNightUpsellCharge gets a reference to the given CurrencyAmountType and assigns it to the FirstNightUpsellCharge field.
func (o *UpsellInfoTypeUpsellInfo) SetFirstNightUpsellCharge(v CurrencyAmountType) {
	o.FirstNightUpsellCharge = &v
}

// GetPercentageSavings returns the PercentageSavings field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetPercentageSavings() float32 {
	if o == nil || IsNil(o.PercentageSavings) {
		var ret float32
		return ret
	}
	return *o.PercentageSavings
}

// GetPercentageSavingsOk returns a tuple with the PercentageSavings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetPercentageSavingsOk() (*float32, bool) {
	if o == nil || IsNil(o.PercentageSavings) {
		return nil, false
	}
	return o.PercentageSavings, true
}

// HasPercentageSavings returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasPercentageSavings() bool {
	if o != nil && !IsNil(o.PercentageSavings) {
		return true
	}

	return false
}

// SetPercentageSavings gets a reference to the given float32 and assigns it to the PercentageSavings field.
func (o *UpsellInfoTypeUpsellInfo) SetPercentageSavings(v float32) {
	o.PercentageSavings = &v
}

// GetRoomLongDescription returns the RoomLongDescription field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetRoomLongDescription() string {
	if o == nil || IsNil(o.RoomLongDescription) {
		var ret string
		return ret
	}
	return *o.RoomLongDescription
}

// GetRoomLongDescriptionOk returns a tuple with the RoomLongDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetRoomLongDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RoomLongDescription) {
		return nil, false
	}
	return o.RoomLongDescription, true
}

// HasRoomLongDescription returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasRoomLongDescription() bool {
	if o != nil && !IsNil(o.RoomLongDescription) {
		return true
	}

	return false
}

// SetRoomLongDescription gets a reference to the given string and assigns it to the RoomLongDescription field.
func (o *UpsellInfoTypeUpsellInfo) SetRoomLongDescription(v string) {
	o.RoomLongDescription = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetRoomType() CodeDescriptionType {
	if o == nil || IsNil(o.RoomType) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetRoomTypeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given CodeDescriptionType and assigns it to the RoomType field.
func (o *UpsellInfoTypeUpsellInfo) SetRoomType(v CodeDescriptionType) {
	o.RoomType = &v
}

// GetRuleCode returns the RuleCode field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetRuleCode() string {
	if o == nil || IsNil(o.RuleCode) {
		var ret string
		return ret
	}
	return *o.RuleCode
}

// GetRuleCodeOk returns a tuple with the RuleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetRuleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RuleCode) {
		return nil, false
	}
	return o.RuleCode, true
}

// HasRuleCode returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasRuleCode() bool {
	if o != nil && !IsNil(o.RuleCode) {
		return true
	}

	return false
}

// SetRuleCode gets a reference to the given string and assigns it to the RuleCode field.
func (o *UpsellInfoTypeUpsellInfo) SetRuleCode(v string) {
	o.RuleCode = &v
}

// GetRuleDescription returns the RuleDescription field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetRuleDescription() string {
	if o == nil || IsNil(o.RuleDescription) {
		var ret string
		return ret
	}
	return *o.RuleDescription
}

// GetRuleDescriptionOk returns a tuple with the RuleDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetRuleDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RuleDescription) {
		return nil, false
	}
	return o.RuleDescription, true
}

// HasRuleDescription returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasRuleDescription() bool {
	if o != nil && !IsNil(o.RuleDescription) {
		return true
	}

	return false
}

// SetRuleDescription gets a reference to the given string and assigns it to the RuleDescription field.
func (o *UpsellInfoTypeUpsellInfo) SetRuleDescription(v string) {
	o.RuleDescription = &v
}

// GetRuleId returns the RuleId field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetRuleId() int32 {
	if o == nil || IsNil(o.RuleId) {
		var ret int32
		return ret
	}
	return *o.RuleId
}

// GetRuleIdOk returns a tuple with the RuleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetRuleIdOk() (*int32, bool) {
	if o == nil || IsNil(o.RuleId) {
		return nil, false
	}
	return o.RuleId, true
}

// HasRuleId returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasRuleId() bool {
	if o != nil && !IsNil(o.RuleId) {
		return true
	}

	return false
}

// SetRuleId gets a reference to the given int32 and assigns it to the RuleId field.
func (o *UpsellInfoTypeUpsellInfo) SetRuleId(v int32) {
	o.RuleId = &v
}

// GetTotalActualRateAmount returns the TotalActualRateAmount field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetTotalActualRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TotalActualRateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalActualRateAmount
}

// GetTotalActualRateAmountOk returns a tuple with the TotalActualRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetTotalActualRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalActualRateAmount) {
		return nil, false
	}
	return o.TotalActualRateAmount, true
}

// HasTotalActualRateAmount returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasTotalActualRateAmount() bool {
	if o != nil && !IsNil(o.TotalActualRateAmount) {
		return true
	}

	return false
}

// SetTotalActualRateAmount gets a reference to the given CurrencyAmountType and assigns it to the TotalActualRateAmount field.
func (o *UpsellInfoTypeUpsellInfo) SetTotalActualRateAmount(v CurrencyAmountType) {
	o.TotalActualRateAmount = &v
}

// GetTotalUpsellCharge returns the TotalUpsellCharge field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellCharge() CurrencyAmountType {
	if o == nil || IsNil(o.TotalUpsellCharge) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalUpsellCharge
}

// GetTotalUpsellChargeOk returns a tuple with the TotalUpsellCharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellChargeOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalUpsellCharge) {
		return nil, false
	}
	return o.TotalUpsellCharge, true
}

// HasTotalUpsellCharge returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellCharge() bool {
	if o != nil && !IsNil(o.TotalUpsellCharge) {
		return true
	}

	return false
}

// SetTotalUpsellCharge gets a reference to the given CurrencyAmountType and assigns it to the TotalUpsellCharge field.
func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellCharge(v CurrencyAmountType) {
	o.TotalUpsellCharge = &v
}

// GetTotalUpsellMoneyAmount returns the TotalUpsellMoneyAmount field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellMoneyAmount() CurrencyAmountType {
	if o == nil || IsNil(o.TotalUpsellMoneyAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.TotalUpsellMoneyAmount
}

// GetTotalUpsellMoneyAmountOk returns a tuple with the TotalUpsellMoneyAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellMoneyAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.TotalUpsellMoneyAmount) {
		return nil, false
	}
	return o.TotalUpsellMoneyAmount, true
}

// HasTotalUpsellMoneyAmount returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellMoneyAmount() bool {
	if o != nil && !IsNil(o.TotalUpsellMoneyAmount) {
		return true
	}

	return false
}

// SetTotalUpsellMoneyAmount gets a reference to the given CurrencyAmountType and assigns it to the TotalUpsellMoneyAmount field.
func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellMoneyAmount(v CurrencyAmountType) {
	o.TotalUpsellMoneyAmount = &v
}

// GetTotalUpsellPoints returns the TotalUpsellPoints field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellPoints() int32 {
	if o == nil || IsNil(o.TotalUpsellPoints) {
		var ret int32
		return ret
	}
	return *o.TotalUpsellPoints
}

// GetTotalUpsellPointsOk returns a tuple with the TotalUpsellPoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetTotalUpsellPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.TotalUpsellPoints) {
		return nil, false
	}
	return o.TotalUpsellPoints, true
}

// HasTotalUpsellPoints returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasTotalUpsellPoints() bool {
	if o != nil && !IsNil(o.TotalUpsellPoints) {
		return true
	}

	return false
}

// SetTotalUpsellPoints gets a reference to the given int32 and assigns it to the TotalUpsellPoints field.
func (o *UpsellInfoTypeUpsellInfo) SetTotalUpsellPoints(v int32) {
	o.TotalUpsellPoints = &v
}

// GetUpsellDate returns the UpsellDate field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetUpsellDate() string {
	if o == nil || IsNil(o.UpsellDate) {
		var ret string
		return ret
	}
	return *o.UpsellDate
}

// GetUpsellDateOk returns a tuple with the UpsellDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetUpsellDateOk() (*string, bool) {
	if o == nil || IsNil(o.UpsellDate) {
		return nil, false
	}
	return o.UpsellDate, true
}

// HasUpsellDate returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasUpsellDate() bool {
	if o != nil && !IsNil(o.UpsellDate) {
		return true
	}

	return false
}

// SetUpsellDate gets a reference to the given string and assigns it to the UpsellDate field.
func (o *UpsellInfoTypeUpsellInfo) SetUpsellDate(v string) {
	o.UpsellDate = &v
}

// GetUpsellUser returns the UpsellUser field value if set, zero value otherwise.
func (o *UpsellInfoTypeUpsellInfo) GetUpsellUser() string {
	if o == nil || IsNil(o.UpsellUser) {
		var ret string
		return ret
	}
	return *o.UpsellUser
}

// GetUpsellUserOk returns a tuple with the UpsellUser field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellInfoTypeUpsellInfo) GetUpsellUserOk() (*string, bool) {
	if o == nil || IsNil(o.UpsellUser) {
		return nil, false
	}
	return o.UpsellUser, true
}

// HasUpsellUser returns a boolean if a field has been set.
func (o *UpsellInfoTypeUpsellInfo) HasUpsellUser() bool {
	if o != nil && !IsNil(o.UpsellUser) {
		return true
	}

	return false
}

// SetUpsellUser gets a reference to the given string and assigns it to the UpsellUser field.
func (o *UpsellInfoTypeUpsellInfo) SetUpsellUser(v string) {
	o.UpsellUser = &v
}

func (o UpsellInfoTypeUpsellInfo) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpsellInfoTypeUpsellInfo) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FirstNightUpsellAmount) {
		toSerialize["firstNightUpsellAmount"] = o.FirstNightUpsellAmount
	}
	if !IsNil(o.FirstNightUpsellCharge) {
		toSerialize["firstNightUpsellCharge"] = o.FirstNightUpsellCharge
	}
	if !IsNil(o.PercentageSavings) {
		toSerialize["percentageSavings"] = o.PercentageSavings
	}
	if !IsNil(o.RoomLongDescription) {
		toSerialize["roomLongDescription"] = o.RoomLongDescription
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.RuleCode) {
		toSerialize["ruleCode"] = o.RuleCode
	}
	if !IsNil(o.RuleDescription) {
		toSerialize["ruleDescription"] = o.RuleDescription
	}
	if !IsNil(o.RuleId) {
		toSerialize["ruleId"] = o.RuleId
	}
	if !IsNil(o.TotalActualRateAmount) {
		toSerialize["totalActualRateAmount"] = o.TotalActualRateAmount
	}
	if !IsNil(o.TotalUpsellCharge) {
		toSerialize["totalUpsellCharge"] = o.TotalUpsellCharge
	}
	if !IsNil(o.TotalUpsellMoneyAmount) {
		toSerialize["totalUpsellMoneyAmount"] = o.TotalUpsellMoneyAmount
	}
	if !IsNil(o.TotalUpsellPoints) {
		toSerialize["totalUpsellPoints"] = o.TotalUpsellPoints
	}
	if !IsNil(o.UpsellDate) {
		toSerialize["upsellDate"] = o.UpsellDate
	}
	if !IsNil(o.UpsellUser) {
		toSerialize["upsellUser"] = o.UpsellUser
	}
	return toSerialize, nil
}

type NullableUpsellInfoTypeUpsellInfo struct {
	value *UpsellInfoTypeUpsellInfo
	isSet bool
}

func (v NullableUpsellInfoTypeUpsellInfo) Get() *UpsellInfoTypeUpsellInfo {
	return v.value
}

func (v *NullableUpsellInfoTypeUpsellInfo) Set(val *UpsellInfoTypeUpsellInfo) {
	v.value = val
	v.isSet = true
}

func (v NullableUpsellInfoTypeUpsellInfo) IsSet() bool {
	return v.isSet
}

func (v *NullableUpsellInfoTypeUpsellInfo) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpsellInfoTypeUpsellInfo(val *UpsellInfoTypeUpsellInfo) *NullableUpsellInfoTypeUpsellInfo {
	return &NullableUpsellInfoTypeUpsellInfo{value: val, isSet: true}
}

func (v NullableUpsellInfoTypeUpsellInfo) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpsellInfoTypeUpsellInfo) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


