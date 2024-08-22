/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the UpsellType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &UpsellType{}

// UpsellType Holds upsell information
type UpsellType struct {
	FirstNightAmount *AmountPointsType `json:"firstNightAmount,omitempty"`
	// Percentage savings resulting from accepting upsell offer. This will be calculated as the ratio of the amount saved by accepting the upsell offer to the actual room rate (i.e. room rate when upsell is not offered)
	PercentageSavings *float32 `json:"percentageSavings,omitempty"`
	// Rate code
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	// Reservation date and its corresponding upsell rate amount
	Rates []UpsellDailyRateType `json:"rates,omitempty"`
	RoomType *RoomTypeInfoType `json:"roomType,omitempty"`
	// Upsell rule code
	RuleCode *string `json:"ruleCode,omitempty"`
	// Upsell rule description
	RuleDescription *string `json:"ruleDescription,omitempty"`
	RuleId *UniqueIDType `json:"ruleId,omitempty"`
	TotalStayAmount *AmountPointsType `json:"totalStayAmount,omitempty"`
	// Rate code redemption type.
	UpsellType *string `json:"upsellType,omitempty"`
}

// NewUpsellType instantiates a new UpsellType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewUpsellType() *UpsellType {
	this := UpsellType{}
	return &this
}

// NewUpsellTypeWithDefaults instantiates a new UpsellType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewUpsellTypeWithDefaults() *UpsellType {
	this := UpsellType{}
	return &this
}

// GetFirstNightAmount returns the FirstNightAmount field value if set, zero value otherwise.
func (o *UpsellType) GetFirstNightAmount() AmountPointsType {
	if o == nil || IsNil(o.FirstNightAmount) {
		var ret AmountPointsType
		return ret
	}
	return *o.FirstNightAmount
}

// GetFirstNightAmountOk returns a tuple with the FirstNightAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetFirstNightAmountOk() (*AmountPointsType, bool) {
	if o == nil || IsNil(o.FirstNightAmount) {
		return nil, false
	}
	return o.FirstNightAmount, true
}

// HasFirstNightAmount returns a boolean if a field has been set.
func (o *UpsellType) HasFirstNightAmount() bool {
	if o != nil && !IsNil(o.FirstNightAmount) {
		return true
	}

	return false
}

// SetFirstNightAmount gets a reference to the given AmountPointsType and assigns it to the FirstNightAmount field.
func (o *UpsellType) SetFirstNightAmount(v AmountPointsType) {
	o.FirstNightAmount = &v
}

// GetPercentageSavings returns the PercentageSavings field value if set, zero value otherwise.
func (o *UpsellType) GetPercentageSavings() float32 {
	if o == nil || IsNil(o.PercentageSavings) {
		var ret float32
		return ret
	}
	return *o.PercentageSavings
}

// GetPercentageSavingsOk returns a tuple with the PercentageSavings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetPercentageSavingsOk() (*float32, bool) {
	if o == nil || IsNil(o.PercentageSavings) {
		return nil, false
	}
	return o.PercentageSavings, true
}

// HasPercentageSavings returns a boolean if a field has been set.
func (o *UpsellType) HasPercentageSavings() bool {
	if o != nil && !IsNil(o.PercentageSavings) {
		return true
	}

	return false
}

// SetPercentageSavings gets a reference to the given float32 and assigns it to the PercentageSavings field.
func (o *UpsellType) SetPercentageSavings(v float32) {
	o.PercentageSavings = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *UpsellType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *UpsellType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *UpsellType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetRates returns the Rates field value if set, zero value otherwise.
func (o *UpsellType) GetRates() []UpsellDailyRateType {
	if o == nil || IsNil(o.Rates) {
		var ret []UpsellDailyRateType
		return ret
	}
	return o.Rates
}

// GetRatesOk returns a tuple with the Rates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRatesOk() ([]UpsellDailyRateType, bool) {
	if o == nil || IsNil(o.Rates) {
		return nil, false
	}
	return o.Rates, true
}

// HasRates returns a boolean if a field has been set.
func (o *UpsellType) HasRates() bool {
	if o != nil && !IsNil(o.Rates) {
		return true
	}

	return false
}

// SetRates gets a reference to the given []UpsellDailyRateType and assigns it to the Rates field.
func (o *UpsellType) SetRates(v []UpsellDailyRateType) {
	o.Rates = v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *UpsellType) GetRoomType() RoomTypeInfoType {
	if o == nil || IsNil(o.RoomType) {
		var ret RoomTypeInfoType
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRoomTypeOk() (*RoomTypeInfoType, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *UpsellType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given RoomTypeInfoType and assigns it to the RoomType field.
func (o *UpsellType) SetRoomType(v RoomTypeInfoType) {
	o.RoomType = &v
}

// GetRuleCode returns the RuleCode field value if set, zero value otherwise.
func (o *UpsellType) GetRuleCode() string {
	if o == nil || IsNil(o.RuleCode) {
		var ret string
		return ret
	}
	return *o.RuleCode
}

// GetRuleCodeOk returns a tuple with the RuleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRuleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RuleCode) {
		return nil, false
	}
	return o.RuleCode, true
}

// HasRuleCode returns a boolean if a field has been set.
func (o *UpsellType) HasRuleCode() bool {
	if o != nil && !IsNil(o.RuleCode) {
		return true
	}

	return false
}

// SetRuleCode gets a reference to the given string and assigns it to the RuleCode field.
func (o *UpsellType) SetRuleCode(v string) {
	o.RuleCode = &v
}

// GetRuleDescription returns the RuleDescription field value if set, zero value otherwise.
func (o *UpsellType) GetRuleDescription() string {
	if o == nil || IsNil(o.RuleDescription) {
		var ret string
		return ret
	}
	return *o.RuleDescription
}

// GetRuleDescriptionOk returns a tuple with the RuleDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRuleDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RuleDescription) {
		return nil, false
	}
	return o.RuleDescription, true
}

// HasRuleDescription returns a boolean if a field has been set.
func (o *UpsellType) HasRuleDescription() bool {
	if o != nil && !IsNil(o.RuleDescription) {
		return true
	}

	return false
}

// SetRuleDescription gets a reference to the given string and assigns it to the RuleDescription field.
func (o *UpsellType) SetRuleDescription(v string) {
	o.RuleDescription = &v
}

// GetRuleId returns the RuleId field value if set, zero value otherwise.
func (o *UpsellType) GetRuleId() UniqueIDType {
	if o == nil || IsNil(o.RuleId) {
		var ret UniqueIDType
		return ret
	}
	return *o.RuleId
}

// GetRuleIdOk returns a tuple with the RuleId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetRuleIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.RuleId) {
		return nil, false
	}
	return o.RuleId, true
}

// HasRuleId returns a boolean if a field has been set.
func (o *UpsellType) HasRuleId() bool {
	if o != nil && !IsNil(o.RuleId) {
		return true
	}

	return false
}

// SetRuleId gets a reference to the given UniqueIDType and assigns it to the RuleId field.
func (o *UpsellType) SetRuleId(v UniqueIDType) {
	o.RuleId = &v
}

// GetTotalStayAmount returns the TotalStayAmount field value if set, zero value otherwise.
func (o *UpsellType) GetTotalStayAmount() AmountPointsType {
	if o == nil || IsNil(o.TotalStayAmount) {
		var ret AmountPointsType
		return ret
	}
	return *o.TotalStayAmount
}

// GetTotalStayAmountOk returns a tuple with the TotalStayAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetTotalStayAmountOk() (*AmountPointsType, bool) {
	if o == nil || IsNil(o.TotalStayAmount) {
		return nil, false
	}
	return o.TotalStayAmount, true
}

// HasTotalStayAmount returns a boolean if a field has been set.
func (o *UpsellType) HasTotalStayAmount() bool {
	if o != nil && !IsNil(o.TotalStayAmount) {
		return true
	}

	return false
}

// SetTotalStayAmount gets a reference to the given AmountPointsType and assigns it to the TotalStayAmount field.
func (o *UpsellType) SetTotalStayAmount(v AmountPointsType) {
	o.TotalStayAmount = &v
}

// GetUpsellType returns the UpsellType field value if set, zero value otherwise.
func (o *UpsellType) GetUpsellType() string {
	if o == nil || IsNil(o.UpsellType) {
		var ret string
		return ret
	}
	return *o.UpsellType
}

// GetUpsellTypeOk returns a tuple with the UpsellType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *UpsellType) GetUpsellTypeOk() (*string, bool) {
	if o == nil || IsNil(o.UpsellType) {
		return nil, false
	}
	return o.UpsellType, true
}

// HasUpsellType returns a boolean if a field has been set.
func (o *UpsellType) HasUpsellType() bool {
	if o != nil && !IsNil(o.UpsellType) {
		return true
	}

	return false
}

// SetUpsellType gets a reference to the given string and assigns it to the UpsellType field.
func (o *UpsellType) SetUpsellType(v string) {
	o.UpsellType = &v
}

func (o UpsellType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o UpsellType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FirstNightAmount) {
		toSerialize["firstNightAmount"] = o.FirstNightAmount
	}
	if !IsNil(o.PercentageSavings) {
		toSerialize["percentageSavings"] = o.PercentageSavings
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.Rates) {
		toSerialize["rates"] = o.Rates
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
	if !IsNil(o.TotalStayAmount) {
		toSerialize["totalStayAmount"] = o.TotalStayAmount
	}
	if !IsNil(o.UpsellType) {
		toSerialize["upsellType"] = o.UpsellType
	}
	return toSerialize, nil
}

type NullableUpsellType struct {
	value *UpsellType
	isSet bool
}

func (v NullableUpsellType) Get() *UpsellType {
	return v.value
}

func (v *NullableUpsellType) Set(val *UpsellType) {
	v.value = val
	v.isSet = true
}

func (v NullableUpsellType) IsSet() bool {
	return v.isSet
}

func (v *NullableUpsellType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableUpsellType(val *UpsellType) *NullableUpsellType {
	return &NullableUpsellType{value: val, isSet: true}
}

func (v NullableUpsellType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableUpsellType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


