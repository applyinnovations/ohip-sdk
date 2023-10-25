/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
	"fmt"
)

// DepositCancelRevenueType The type to indicate what revenue is to be used for calculating deposit/cancellation amounts.
type DepositCancelRevenueType string

// List of depositCancelRevenueType
const (
	DEPOSITCANCELREVENUETYPE_ROOMS DepositCancelRevenueType = "Rooms"
	DEPOSITCANCELREVENUETYPE_CATERING DepositCancelRevenueType = "Catering"
	DEPOSITCANCELREVENUETYPE_ALL DepositCancelRevenueType = "All"
)

// All allowed values of DepositCancelRevenueType enum
var AllowedDepositCancelRevenueTypeEnumValues = []DepositCancelRevenueType{
	"Rooms",
	"Catering",
	"All",
}

func (v *DepositCancelRevenueType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DepositCancelRevenueType(value)
	for _, existing := range AllowedDepositCancelRevenueTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DepositCancelRevenueType", value)
}

// NewDepositCancelRevenueTypeFromValue returns a pointer to a valid DepositCancelRevenueType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDepositCancelRevenueTypeFromValue(v string) (*DepositCancelRevenueType, error) {
	ev := DepositCancelRevenueType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DepositCancelRevenueType: valid values are %v", v, AllowedDepositCancelRevenueTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DepositCancelRevenueType) IsValid() bool {
	for _, existing := range AllowedDepositCancelRevenueTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to depositCancelRevenueType value
func (v DepositCancelRevenueType) Ptr() *DepositCancelRevenueType {
	return &v
}

type NullableDepositCancelRevenueType struct {
	value *DepositCancelRevenueType
	isSet bool
}

func (v NullableDepositCancelRevenueType) Get() *DepositCancelRevenueType {
	return v.value
}

func (v *NullableDepositCancelRevenueType) Set(val *DepositCancelRevenueType) {
	v.value = val
	v.isSet = true
}

func (v NullableDepositCancelRevenueType) IsSet() bool {
	return v.isSet
}

func (v *NullableDepositCancelRevenueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepositCancelRevenueType(val *DepositCancelRevenueType) *NullableDepositCancelRevenueType {
	return &NullableDepositCancelRevenueType{value: val, isSet: true}
}

func (v NullableDepositCancelRevenueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepositCancelRevenueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

