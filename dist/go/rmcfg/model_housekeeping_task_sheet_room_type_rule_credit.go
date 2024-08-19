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

// checks if the HousekeepingTaskSheetRoomTypeRuleCredit type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingTaskSheetRoomTypeRuleCredit{}

// HousekeepingTaskSheetRoomTypeRuleCredit This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM_TASK_RULE or FACILITY.
type HousekeepingTaskSheetRoomTypeRuleCredit struct {
	// Specifies the base credits defined for each housekeeping room. This element will be used only if the value of HOUSEKEEPING_CREDITS setting is set to ROOM_TASK_RULE.
	Credits *int32 `json:"credits,omitempty"`
	// Specifies the turndown credits for each housekeeping room. This element will be used only if the TURNDOWN parameter is active and HOUSEKEEPING_CREDITS setting is set to a value other than NONE.
	TurndownCredits *int32 `json:"turndownCredits,omitempty"`
}

// NewHousekeepingTaskSheetRoomTypeRuleCredit instantiates a new HousekeepingTaskSheetRoomTypeRuleCredit object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingTaskSheetRoomTypeRuleCredit() *HousekeepingTaskSheetRoomTypeRuleCredit {
	this := HousekeepingTaskSheetRoomTypeRuleCredit{}
	return &this
}

// NewHousekeepingTaskSheetRoomTypeRuleCreditWithDefaults instantiates a new HousekeepingTaskSheetRoomTypeRuleCredit object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingTaskSheetRoomTypeRuleCreditWithDefaults() *HousekeepingTaskSheetRoomTypeRuleCredit {
	this := HousekeepingTaskSheetRoomTypeRuleCredit{}
	return &this
}

// GetCredits returns the Credits field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetCredits() int32 {
	if o == nil || IsNil(o.Credits) {
		var ret int32
		return ret
	}
	return *o.Credits
}

// GetCreditsOk returns a tuple with the Credits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetCreditsOk() (*int32, bool) {
	if o == nil || IsNil(o.Credits) {
		return nil, false
	}
	return o.Credits, true
}

// HasCredits returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) HasCredits() bool {
	if o != nil && !IsNil(o.Credits) {
		return true
	}

	return false
}

// SetCredits gets a reference to the given int32 and assigns it to the Credits field.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) SetCredits(v int32) {
	o.Credits = &v
}

// GetTurndownCredits returns the TurndownCredits field value if set, zero value otherwise.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetTurndownCredits() int32 {
	if o == nil || IsNil(o.TurndownCredits) {
		var ret int32
		return ret
	}
	return *o.TurndownCredits
}

// GetTurndownCreditsOk returns a tuple with the TurndownCredits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) GetTurndownCreditsOk() (*int32, bool) {
	if o == nil || IsNil(o.TurndownCredits) {
		return nil, false
	}
	return o.TurndownCredits, true
}

// HasTurndownCredits returns a boolean if a field has been set.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) HasTurndownCredits() bool {
	if o != nil && !IsNil(o.TurndownCredits) {
		return true
	}

	return false
}

// SetTurndownCredits gets a reference to the given int32 and assigns it to the TurndownCredits field.
func (o *HousekeepingTaskSheetRoomTypeRuleCredit) SetTurndownCredits(v int32) {
	o.TurndownCredits = &v
}

func (o HousekeepingTaskSheetRoomTypeRuleCredit) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingTaskSheetRoomTypeRuleCredit) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Credits) {
		toSerialize["credits"] = o.Credits
	}
	if !IsNil(o.TurndownCredits) {
		toSerialize["turndownCredits"] = o.TurndownCredits
	}
	return toSerialize, nil
}

type NullableHousekeepingTaskSheetRoomTypeRuleCredit struct {
	value *HousekeepingTaskSheetRoomTypeRuleCredit
	isSet bool
}

func (v NullableHousekeepingTaskSheetRoomTypeRuleCredit) Get() *HousekeepingTaskSheetRoomTypeRuleCredit {
	return v.value
}

func (v *NullableHousekeepingTaskSheetRoomTypeRuleCredit) Set(val *HousekeepingTaskSheetRoomTypeRuleCredit) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingTaskSheetRoomTypeRuleCredit) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingTaskSheetRoomTypeRuleCredit) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingTaskSheetRoomTypeRuleCredit(val *HousekeepingTaskSheetRoomTypeRuleCredit) *NullableHousekeepingTaskSheetRoomTypeRuleCredit {
	return &NullableHousekeepingTaskSheetRoomTypeRuleCredit{value: val, isSet: true}
}

func (v NullableHousekeepingTaskSheetRoomTypeRuleCredit) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingTaskSheetRoomTypeRuleCredit) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


