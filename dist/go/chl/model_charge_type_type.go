/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
	"fmt"
)

// ChargeTypeType Total Pricing Element either Tax or Service Fee
type ChargeTypeType string

// List of chargeTypeType
const (
	CHARGETYPETYPE_TAX ChargeTypeType = "Tax"
	CHARGETYPETYPE_SERVICE_FEE ChargeTypeType = "ServiceFee"
)

// All allowed values of ChargeTypeType enum
var AllowedChargeTypeTypeEnumValues = []ChargeTypeType{
	"Tax",
	"ServiceFee",
}

func (v *ChargeTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ChargeTypeType(value)
	for _, existing := range AllowedChargeTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ChargeTypeType", value)
}

// NewChargeTypeTypeFromValue returns a pointer to a valid ChargeTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewChargeTypeTypeFromValue(v string) (*ChargeTypeType, error) {
	ev := ChargeTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ChargeTypeType: valid values are %v", v, AllowedChargeTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ChargeTypeType) IsValid() bool {
	for _, existing := range AllowedChargeTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to chargeTypeType value
func (v ChargeTypeType) Ptr() *ChargeTypeType {
	return &v
}

type NullableChargeTypeType struct {
	value *ChargeTypeType
	isSet bool
}

func (v NullableChargeTypeType) Get() *ChargeTypeType {
	return v.value
}

func (v *NullableChargeTypeType) Set(val *ChargeTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableChargeTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableChargeTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChargeTypeType(val *ChargeTypeType) *NullableChargeTypeType {
	return &NullableChargeTypeType{value: val, isSet: true}
}

func (v NullableChargeTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChargeTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

