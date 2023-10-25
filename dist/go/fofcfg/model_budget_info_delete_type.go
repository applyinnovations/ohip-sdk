/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// BudgetInfoDeleteType Daily information.
type BudgetInfoDeleteType string

// List of budgetInfoDeleteType
const (
	BUDGETINFODELETETYPE_MONTHLY BudgetInfoDeleteType = "Monthly"
	BUDGETINFODELETETYPE_DAILY BudgetInfoDeleteType = "Daily"
)

// All allowed values of BudgetInfoDeleteType enum
var AllowedBudgetInfoDeleteTypeEnumValues = []BudgetInfoDeleteType{
	"Monthly",
	"Daily",
}

func (v *BudgetInfoDeleteType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := BudgetInfoDeleteType(value)
	for _, existing := range AllowedBudgetInfoDeleteTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid BudgetInfoDeleteType", value)
}

// NewBudgetInfoDeleteTypeFromValue returns a pointer to a valid BudgetInfoDeleteType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewBudgetInfoDeleteTypeFromValue(v string) (*BudgetInfoDeleteType, error) {
	ev := BudgetInfoDeleteType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for BudgetInfoDeleteType: valid values are %v", v, AllowedBudgetInfoDeleteTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v BudgetInfoDeleteType) IsValid() bool {
	for _, existing := range AllowedBudgetInfoDeleteTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to budgetInfoDeleteType value
func (v BudgetInfoDeleteType) Ptr() *BudgetInfoDeleteType {
	return &v
}

type NullableBudgetInfoDeleteType struct {
	value *BudgetInfoDeleteType
	isSet bool
}

func (v NullableBudgetInfoDeleteType) Get() *BudgetInfoDeleteType {
	return v.value
}

func (v *NullableBudgetInfoDeleteType) Set(val *BudgetInfoDeleteType) {
	v.value = val
	v.isSet = true
}

func (v NullableBudgetInfoDeleteType) IsSet() bool {
	return v.isSet
}

func (v *NullableBudgetInfoDeleteType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBudgetInfoDeleteType(val *BudgetInfoDeleteType) *NullableBudgetInfoDeleteType {
	return &NullableBudgetInfoDeleteType{value: val, isSet: true}
}

func (v NullableBudgetInfoDeleteType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBudgetInfoDeleteType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

