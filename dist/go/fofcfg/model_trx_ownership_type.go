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

// TrxOwnershipType Protected by the Property level
type TrxOwnershipType string

// List of trxOwnershipType
const (
	TRXOWNERSHIPTYPE_CORPORATE TrxOwnershipType = "Corporate"
	TRXOWNERSHIPTYPE_PROPERTY TrxOwnershipType = "Property"
)

// All allowed values of TrxOwnershipType enum
var AllowedTrxOwnershipTypeEnumValues = []TrxOwnershipType{
	"Corporate",
	"Property",
}

func (v *TrxOwnershipType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TrxOwnershipType(value)
	for _, existing := range AllowedTrxOwnershipTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TrxOwnershipType", value)
}

// NewTrxOwnershipTypeFromValue returns a pointer to a valid TrxOwnershipType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTrxOwnershipTypeFromValue(v string) (*TrxOwnershipType, error) {
	ev := TrxOwnershipType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TrxOwnershipType: valid values are %v", v, AllowedTrxOwnershipTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TrxOwnershipType) IsValid() bool {
	for _, existing := range AllowedTrxOwnershipTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to trxOwnershipType value
func (v TrxOwnershipType) Ptr() *TrxOwnershipType {
	return &v
}

type NullableTrxOwnershipType struct {
	value *TrxOwnershipType
	isSet bool
}

func (v NullableTrxOwnershipType) Get() *TrxOwnershipType {
	return v.value
}

func (v *NullableTrxOwnershipType) Set(val *TrxOwnershipType) {
	v.value = val
	v.isSet = true
}

func (v NullableTrxOwnershipType) IsSet() bool {
	return v.isSet
}

func (v *NullableTrxOwnershipType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTrxOwnershipType(val *TrxOwnershipType) *NullableTrxOwnershipType {
	return &NullableTrxOwnershipType{value: val, isSet: true}
}

func (v NullableTrxOwnershipType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTrxOwnershipType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
