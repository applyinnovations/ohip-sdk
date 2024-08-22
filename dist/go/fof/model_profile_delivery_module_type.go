/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// ProfileDeliveryModuleType Module where this delivery type will be used. Example : EFolio Export, EInvoice , Fiscal, etc..
type ProfileDeliveryModuleType string

// List of profileDeliveryModuleType
const (
	PROFILEDELIVERYMODULETYPE_EFOLIO_EXPORT ProfileDeliveryModuleType = "EfolioExport"
)

// All allowed values of ProfileDeliveryModuleType enum
var AllowedProfileDeliveryModuleTypeEnumValues = []ProfileDeliveryModuleType{
	"EfolioExport",
}

func (v *ProfileDeliveryModuleType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ProfileDeliveryModuleType(value)
	for _, existing := range AllowedProfileDeliveryModuleTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ProfileDeliveryModuleType", value)
}

// NewProfileDeliveryModuleTypeFromValue returns a pointer to a valid ProfileDeliveryModuleType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewProfileDeliveryModuleTypeFromValue(v string) (*ProfileDeliveryModuleType, error) {
	ev := ProfileDeliveryModuleType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ProfileDeliveryModuleType: valid values are %v", v, AllowedProfileDeliveryModuleTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ProfileDeliveryModuleType) IsValid() bool {
	for _, existing := range AllowedProfileDeliveryModuleTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to profileDeliveryModuleType value
func (v ProfileDeliveryModuleType) Ptr() *ProfileDeliveryModuleType {
	return &v
}

type NullableProfileDeliveryModuleType struct {
	value *ProfileDeliveryModuleType
	isSet bool
}

func (v NullableProfileDeliveryModuleType) Get() *ProfileDeliveryModuleType {
	return v.value
}

func (v *NullableProfileDeliveryModuleType) Set(val *ProfileDeliveryModuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableProfileDeliveryModuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableProfileDeliveryModuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProfileDeliveryModuleType(val *ProfileDeliveryModuleType) *NullableProfileDeliveryModuleType {
	return &NullableProfileDeliveryModuleType{value: val, isSet: true}
}

func (v NullableProfileDeliveryModuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProfileDeliveryModuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

