/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// CustomChargeRuleTypeOption The Custom Charge is only posted for the maximum number of nights of the stay.
type CustomChargeRuleTypeOption string

// List of customChargeRuleTypeOption
const (
	CUSTOMCHARGERULETYPEOPTION_MAX_NO_NIGHTS CustomChargeRuleTypeOption = "MaxNoNights"
)

// All allowed values of CustomChargeRuleTypeOption enum
var AllowedCustomChargeRuleTypeOptionEnumValues = []CustomChargeRuleTypeOption{
	"MaxNoNights",
}

func (v *CustomChargeRuleTypeOption) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CustomChargeRuleTypeOption(value)
	for _, existing := range AllowedCustomChargeRuleTypeOptionEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CustomChargeRuleTypeOption", value)
}

// NewCustomChargeRuleTypeOptionFromValue returns a pointer to a valid CustomChargeRuleTypeOption
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCustomChargeRuleTypeOptionFromValue(v string) (*CustomChargeRuleTypeOption, error) {
	ev := CustomChargeRuleTypeOption(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CustomChargeRuleTypeOption: valid values are %v", v, AllowedCustomChargeRuleTypeOptionEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CustomChargeRuleTypeOption) IsValid() bool {
	for _, existing := range AllowedCustomChargeRuleTypeOptionEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to customChargeRuleTypeOption value
func (v CustomChargeRuleTypeOption) Ptr() *CustomChargeRuleTypeOption {
	return &v
}

type NullableCustomChargeRuleTypeOption struct {
	value *CustomChargeRuleTypeOption
	isSet bool
}

func (v NullableCustomChargeRuleTypeOption) Get() *CustomChargeRuleTypeOption {
	return v.value
}

func (v *NullableCustomChargeRuleTypeOption) Set(val *CustomChargeRuleTypeOption) {
	v.value = val
	v.isSet = true
}

func (v NullableCustomChargeRuleTypeOption) IsSet() bool {
	return v.isSet
}

func (v *NullableCustomChargeRuleTypeOption) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCustomChargeRuleTypeOption(val *CustomChargeRuleTypeOption) *NullableCustomChargeRuleTypeOption {
	return &NullableCustomChargeRuleTypeOption{value: val, isSet: true}
}

func (v NullableCustomChargeRuleTypeOption) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCustomChargeRuleTypeOption) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

