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

// IfcMenuTypeType Data Card System
type IfcMenuTypeType string

// List of ifcMenuTypeType
const (
	IFCMENUTYPETYPE_CAS IfcMenuTypeType = "Cas"
	IFCMENUTYPETYPE_KSS IfcMenuTypeType = "Kss"
	IFCMENUTYPETYPE_MBS IfcMenuTypeType = "Mbs"
	IFCMENUTYPETYPE_PBX IfcMenuTypeType = "Pbx"
	IFCMENUTYPETYPE_POS IfcMenuTypeType = "Pos"
	IFCMENUTYPETYPE_VSS IfcMenuTypeType = "Vss"
	IFCMENUTYPETYPE_DCS IfcMenuTypeType = "Dcs"
)

// All allowed values of IfcMenuTypeType enum
var AllowedIfcMenuTypeTypeEnumValues = []IfcMenuTypeType{
	"Cas",
	"Kss",
	"Mbs",
	"Pbx",
	"Pos",
	"Vss",
	"Dcs",
}

func (v *IfcMenuTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := IfcMenuTypeType(value)
	for _, existing := range AllowedIfcMenuTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid IfcMenuTypeType", value)
}

// NewIfcMenuTypeTypeFromValue returns a pointer to a valid IfcMenuTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewIfcMenuTypeTypeFromValue(v string) (*IfcMenuTypeType, error) {
	ev := IfcMenuTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for IfcMenuTypeType: valid values are %v", v, AllowedIfcMenuTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v IfcMenuTypeType) IsValid() bool {
	for _, existing := range AllowedIfcMenuTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to ifcMenuTypeType value
func (v IfcMenuTypeType) Ptr() *IfcMenuTypeType {
	return &v
}

type NullableIfcMenuTypeType struct {
	value *IfcMenuTypeType
	isSet bool
}

func (v NullableIfcMenuTypeType) Get() *IfcMenuTypeType {
	return v.value
}

func (v *NullableIfcMenuTypeType) Set(val *IfcMenuTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableIfcMenuTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableIfcMenuTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIfcMenuTypeType(val *IfcMenuTypeType) *NullableIfcMenuTypeType {
	return &NullableIfcMenuTypeType{value: val, isSet: true}
}

func (v NullableIfcMenuTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIfcMenuTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

