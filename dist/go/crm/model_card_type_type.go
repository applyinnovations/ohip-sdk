/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
	"fmt"
)

// CardTypeType This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method.
type CardTypeType string

// List of cardTypeType
const (
	CARDTYPETYPE_AB CardTypeType = "Ab"
	CARDTYPETYPE_AM CardTypeType = "Am"
	CARDTYPETYPE_AX CardTypeType = "Ax"
	CARDTYPETYPE_CB CardTypeType = "Cb"
	CARDTYPETYPE_DC CardTypeType = "Dc"
	CARDTYPETYPE_DS CardTypeType = "Ds"
	CARDTYPETYPE_DT CardTypeType = "Dt"
	CARDTYPETYPE_EC CardTypeType = "Ec"
	CARDTYPETYPE_ER CardTypeType = "Er"
	CARDTYPETYPE_JC CardTypeType = "Jc"
	CARDTYPETYPE_JL CardTypeType = "Jl"
	CARDTYPETYPE_MC CardTypeType = "Mc"
	CARDTYPETYPE_NB CardTypeType = "Nb"
	CARDTYPETYPE_SO CardTypeType = "So"
	CARDTYPETYPE_ST CardTypeType = "St"
	CARDTYPETYPE_SW CardTypeType = "Sw"
	CARDTYPETYPE_VA CardTypeType = "Va"
	CARDTYPETYPE_XY CardTypeType = "Xy"
	CARDTYPETYPE_ZZ CardTypeType = "Zz"
	CARDTYPETYPE_CP CardTypeType = "Cp"
	CARDTYPETYPE_CU CardTypeType = "Cu"
)

// All allowed values of CardTypeType enum
var AllowedCardTypeTypeEnumValues = []CardTypeType{
	"Ab",
	"Am",
	"Ax",
	"Cb",
	"Dc",
	"Ds",
	"Dt",
	"Ec",
	"Er",
	"Jc",
	"Jl",
	"Mc",
	"Nb",
	"So",
	"St",
	"Sw",
	"Va",
	"Xy",
	"Zz",
	"Cp",
	"Cu",
}

func (v *CardTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CardTypeType(value)
	for _, existing := range AllowedCardTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CardTypeType", value)
}

// NewCardTypeTypeFromValue returns a pointer to a valid CardTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCardTypeTypeFromValue(v string) (*CardTypeType, error) {
	ev := CardTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CardTypeType: valid values are %v", v, AllowedCardTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CardTypeType) IsValid() bool {
	for _, existing := range AllowedCardTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cardTypeType value
func (v CardTypeType) Ptr() *CardTypeType {
	return &v
}

type NullableCardTypeType struct {
	value *CardTypeType
	isSet bool
}

func (v NullableCardTypeType) Get() *CardTypeType {
	return v.value
}

func (v *NullableCardTypeType) Set(val *CardTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardTypeType(val *CardTypeType) *NullableCardTypeType {
	return &NullableCardTypeType{value: val, isSet: true}
}

func (v NullableCardTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

