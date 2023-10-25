/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
	"fmt"
)

// CardNumberGenerationModeType Card Number is generated using Enrollment Code.
type CardNumberGenerationModeType string

// List of cardNumberGenerationModeType
const (
	CARDNUMBERGENERATIONMODETYPE_DEFAULT_SEQUENCE CardNumberGenerationModeType = "DefaultSequence"
	CARDNUMBERGENERATIONMODETYPE_ENROLLMENT_CODE CardNumberGenerationModeType = "EnrollmentCode"
)

// All allowed values of CardNumberGenerationModeType enum
var AllowedCardNumberGenerationModeTypeEnumValues = []CardNumberGenerationModeType{
	"DefaultSequence",
	"EnrollmentCode",
}

func (v *CardNumberGenerationModeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CardNumberGenerationModeType(value)
	for _, existing := range AllowedCardNumberGenerationModeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CardNumberGenerationModeType", value)
}

// NewCardNumberGenerationModeTypeFromValue returns a pointer to a valid CardNumberGenerationModeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCardNumberGenerationModeTypeFromValue(v string) (*CardNumberGenerationModeType, error) {
	ev := CardNumberGenerationModeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CardNumberGenerationModeType: valid values are %v", v, AllowedCardNumberGenerationModeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CardNumberGenerationModeType) IsValid() bool {
	for _, existing := range AllowedCardNumberGenerationModeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cardNumberGenerationModeType value
func (v CardNumberGenerationModeType) Ptr() *CardNumberGenerationModeType {
	return &v
}

type NullableCardNumberGenerationModeType struct {
	value *CardNumberGenerationModeType
	isSet bool
}

func (v NullableCardNumberGenerationModeType) Get() *CardNumberGenerationModeType {
	return v.value
}

func (v *NullableCardNumberGenerationModeType) Set(val *CardNumberGenerationModeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardNumberGenerationModeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardNumberGenerationModeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardNumberGenerationModeType(val *CardNumberGenerationModeType) *NullableCardNumberGenerationModeType {
	return &NullableCardNumberGenerationModeType{value: val, isSet: true}
}

func (v NullableCardNumberGenerationModeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardNumberGenerationModeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

