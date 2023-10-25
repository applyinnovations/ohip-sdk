/*
OPERA Cloud Inventory API

APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package inv

import (
	"encoding/json"
)

// checks if the SellLimitDateRangeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SellLimitDateRangeType{}

// SellLimitDateRangeType struct for SellLimitDateRangeType
type SellLimitDateRangeType struct {
	// It indicates the call is to update Available Rooms, Sell Limit or Sell Control Rooms.
	ActionType *string `json:"actionType,omitempty"`
	Amount *float32 `json:"amount,omitempty"`
	// The ending value of the date range.
	EndDate *string `json:"endDate,omitempty"`
	FlatOrPercentage *string `json:"flatOrPercentage,omitempty"`
	Friday *bool `json:"friday,omitempty"`
	Monday *bool `json:"monday,omitempty"`
	Saturday *bool `json:"saturday,omitempty"`
	// The starting value of the date range.
	StartDate *string `json:"startDate,omitempty"`
	Sunday *bool `json:"sunday,omitempty"`
	Thursday *bool `json:"thursday,omitempty"`
	Tuesday *bool `json:"tuesday,omitempty"`
	Wednesday *bool `json:"wednesday,omitempty"`
}

// NewSellLimitDateRangeType instantiates a new SellLimitDateRangeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSellLimitDateRangeType() *SellLimitDateRangeType {
	this := SellLimitDateRangeType{}
	return &this
}

// NewSellLimitDateRangeTypeWithDefaults instantiates a new SellLimitDateRangeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSellLimitDateRangeTypeWithDefaults() *SellLimitDateRangeType {
	this := SellLimitDateRangeType{}
	return &this
}

// GetActionType returns the ActionType field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetActionType() string {
	if o == nil || IsNil(o.ActionType) {
		var ret string
		return ret
	}
	return *o.ActionType
}

// GetActionTypeOk returns a tuple with the ActionType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetActionTypeOk() (*string, bool) {
	if o == nil || IsNil(o.ActionType) {
		return nil, false
	}
	return o.ActionType, true
}

// HasActionType returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasActionType() bool {
	if o != nil && !IsNil(o.ActionType) {
		return true
	}

	return false
}

// SetActionType gets a reference to the given string and assigns it to the ActionType field.
func (o *SellLimitDateRangeType) SetActionType(v string) {
	o.ActionType = &v
}

// GetAmount returns the Amount field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetAmount() float32 {
	if o == nil || IsNil(o.Amount) {
		var ret float32
		return ret
	}
	return *o.Amount
}

// GetAmountOk returns a tuple with the Amount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetAmountOk() (*float32, bool) {
	if o == nil || IsNil(o.Amount) {
		return nil, false
	}
	return o.Amount, true
}

// HasAmount returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasAmount() bool {
	if o != nil && !IsNil(o.Amount) {
		return true
	}

	return false
}

// SetAmount gets a reference to the given float32 and assigns it to the Amount field.
func (o *SellLimitDateRangeType) SetAmount(v float32) {
	o.Amount = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *SellLimitDateRangeType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetFlatOrPercentage returns the FlatOrPercentage field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetFlatOrPercentage() string {
	if o == nil || IsNil(o.FlatOrPercentage) {
		var ret string
		return ret
	}
	return *o.FlatOrPercentage
}

// GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetFlatOrPercentageOk() (*string, bool) {
	if o == nil || IsNil(o.FlatOrPercentage) {
		return nil, false
	}
	return o.FlatOrPercentage, true
}

// HasFlatOrPercentage returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasFlatOrPercentage() bool {
	if o != nil && !IsNil(o.FlatOrPercentage) {
		return true
	}

	return false
}

// SetFlatOrPercentage gets a reference to the given string and assigns it to the FlatOrPercentage field.
func (o *SellLimitDateRangeType) SetFlatOrPercentage(v string) {
	o.FlatOrPercentage = &v
}

// GetFriday returns the Friday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetFriday() bool {
	if o == nil || IsNil(o.Friday) {
		var ret bool
		return ret
	}
	return *o.Friday
}

// GetFridayOk returns a tuple with the Friday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetFridayOk() (*bool, bool) {
	if o == nil || IsNil(o.Friday) {
		return nil, false
	}
	return o.Friday, true
}

// HasFriday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasFriday() bool {
	if o != nil && !IsNil(o.Friday) {
		return true
	}

	return false
}

// SetFriday gets a reference to the given bool and assigns it to the Friday field.
func (o *SellLimitDateRangeType) SetFriday(v bool) {
	o.Friday = &v
}

// GetMonday returns the Monday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetMonday() bool {
	if o == nil || IsNil(o.Monday) {
		var ret bool
		return ret
	}
	return *o.Monday
}

// GetMondayOk returns a tuple with the Monday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetMondayOk() (*bool, bool) {
	if o == nil || IsNil(o.Monday) {
		return nil, false
	}
	return o.Monday, true
}

// HasMonday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasMonday() bool {
	if o != nil && !IsNil(o.Monday) {
		return true
	}

	return false
}

// SetMonday gets a reference to the given bool and assigns it to the Monday field.
func (o *SellLimitDateRangeType) SetMonday(v bool) {
	o.Monday = &v
}

// GetSaturday returns the Saturday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetSaturday() bool {
	if o == nil || IsNil(o.Saturday) {
		var ret bool
		return ret
	}
	return *o.Saturday
}

// GetSaturdayOk returns a tuple with the Saturday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetSaturdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Saturday) {
		return nil, false
	}
	return o.Saturday, true
}

// HasSaturday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasSaturday() bool {
	if o != nil && !IsNil(o.Saturday) {
		return true
	}

	return false
}

// SetSaturday gets a reference to the given bool and assigns it to the Saturday field.
func (o *SellLimitDateRangeType) SetSaturday(v bool) {
	o.Saturday = &v
}

// GetStartDate returns the StartDate field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetStartDate() string {
	if o == nil || IsNil(o.StartDate) {
		var ret string
		return ret
	}
	return *o.StartDate
}

// GetStartDateOk returns a tuple with the StartDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetStartDateOk() (*string, bool) {
	if o == nil || IsNil(o.StartDate) {
		return nil, false
	}
	return o.StartDate, true
}

// HasStartDate returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasStartDate() bool {
	if o != nil && !IsNil(o.StartDate) {
		return true
	}

	return false
}

// SetStartDate gets a reference to the given string and assigns it to the StartDate field.
func (o *SellLimitDateRangeType) SetStartDate(v string) {
	o.StartDate = &v
}

// GetSunday returns the Sunday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetSunday() bool {
	if o == nil || IsNil(o.Sunday) {
		var ret bool
		return ret
	}
	return *o.Sunday
}

// GetSundayOk returns a tuple with the Sunday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetSundayOk() (*bool, bool) {
	if o == nil || IsNil(o.Sunday) {
		return nil, false
	}
	return o.Sunday, true
}

// HasSunday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasSunday() bool {
	if o != nil && !IsNil(o.Sunday) {
		return true
	}

	return false
}

// SetSunday gets a reference to the given bool and assigns it to the Sunday field.
func (o *SellLimitDateRangeType) SetSunday(v bool) {
	o.Sunday = &v
}

// GetThursday returns the Thursday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetThursday() bool {
	if o == nil || IsNil(o.Thursday) {
		var ret bool
		return ret
	}
	return *o.Thursday
}

// GetThursdayOk returns a tuple with the Thursday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetThursdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Thursday) {
		return nil, false
	}
	return o.Thursday, true
}

// HasThursday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasThursday() bool {
	if o != nil && !IsNil(o.Thursday) {
		return true
	}

	return false
}

// SetThursday gets a reference to the given bool and assigns it to the Thursday field.
func (o *SellLimitDateRangeType) SetThursday(v bool) {
	o.Thursday = &v
}

// GetTuesday returns the Tuesday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetTuesday() bool {
	if o == nil || IsNil(o.Tuesday) {
		var ret bool
		return ret
	}
	return *o.Tuesday
}

// GetTuesdayOk returns a tuple with the Tuesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetTuesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Tuesday) {
		return nil, false
	}
	return o.Tuesday, true
}

// HasTuesday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasTuesday() bool {
	if o != nil && !IsNil(o.Tuesday) {
		return true
	}

	return false
}

// SetTuesday gets a reference to the given bool and assigns it to the Tuesday field.
func (o *SellLimitDateRangeType) SetTuesday(v bool) {
	o.Tuesday = &v
}

// GetWednesday returns the Wednesday field value if set, zero value otherwise.
func (o *SellLimitDateRangeType) GetWednesday() bool {
	if o == nil || IsNil(o.Wednesday) {
		var ret bool
		return ret
	}
	return *o.Wednesday
}

// GetWednesdayOk returns a tuple with the Wednesday field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SellLimitDateRangeType) GetWednesdayOk() (*bool, bool) {
	if o == nil || IsNil(o.Wednesday) {
		return nil, false
	}
	return o.Wednesday, true
}

// HasWednesday returns a boolean if a field has been set.
func (o *SellLimitDateRangeType) HasWednesday() bool {
	if o != nil && !IsNil(o.Wednesday) {
		return true
	}

	return false
}

// SetWednesday gets a reference to the given bool and assigns it to the Wednesday field.
func (o *SellLimitDateRangeType) SetWednesday(v bool) {
	o.Wednesday = &v
}

func (o SellLimitDateRangeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SellLimitDateRangeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActionType) {
		toSerialize["actionType"] = o.ActionType
	}
	if !IsNil(o.Amount) {
		toSerialize["amount"] = o.Amount
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.FlatOrPercentage) {
		toSerialize["flatOrPercentage"] = o.FlatOrPercentage
	}
	if !IsNil(o.Friday) {
		toSerialize["friday"] = o.Friday
	}
	if !IsNil(o.Monday) {
		toSerialize["monday"] = o.Monday
	}
	if !IsNil(o.Saturday) {
		toSerialize["saturday"] = o.Saturday
	}
	if !IsNil(o.StartDate) {
		toSerialize["startDate"] = o.StartDate
	}
	if !IsNil(o.Sunday) {
		toSerialize["sunday"] = o.Sunday
	}
	if !IsNil(o.Thursday) {
		toSerialize["thursday"] = o.Thursday
	}
	if !IsNil(o.Tuesday) {
		toSerialize["tuesday"] = o.Tuesday
	}
	if !IsNil(o.Wednesday) {
		toSerialize["wednesday"] = o.Wednesday
	}
	return toSerialize, nil
}

type NullableSellLimitDateRangeType struct {
	value *SellLimitDateRangeType
	isSet bool
}

func (v NullableSellLimitDateRangeType) Get() *SellLimitDateRangeType {
	return v.value
}

func (v *NullableSellLimitDateRangeType) Set(val *SellLimitDateRangeType) {
	v.value = val
	v.isSet = true
}

func (v NullableSellLimitDateRangeType) IsSet() bool {
	return v.isSet
}

func (v *NullableSellLimitDateRangeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSellLimitDateRangeType(val *SellLimitDateRangeType) *NullableSellLimitDateRangeType {
	return &NullableSellLimitDateRangeType{value: val, isSet: true}
}

func (v NullableSellLimitDateRangeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSellLimitDateRangeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


