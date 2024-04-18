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

// FiscalPayloadType the model 'FiscalPayloadType'
type FiscalPayloadType string

// List of fiscalPayloadType
const (
	FISCALPAYLOADTYPE_CHECK_OUT FiscalPayloadType = "CheckOut"
	FISCALPAYLOADTYPE_FOLIO_GENERATION FiscalPayloadType = "FolioGeneration"
)

// All allowed values of FiscalPayloadType enum
var AllowedFiscalPayloadTypeEnumValues = []FiscalPayloadType{
	"CheckOut",
	"FolioGeneration",
}

func (v *FiscalPayloadType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FiscalPayloadType(value)
	for _, existing := range AllowedFiscalPayloadTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FiscalPayloadType", value)
}

// NewFiscalPayloadTypeFromValue returns a pointer to a valid FiscalPayloadType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFiscalPayloadTypeFromValue(v string) (*FiscalPayloadType, error) {
	ev := FiscalPayloadType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FiscalPayloadType: valid values are %v", v, AllowedFiscalPayloadTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FiscalPayloadType) IsValid() bool {
	for _, existing := range AllowedFiscalPayloadTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to fiscalPayloadType value
func (v FiscalPayloadType) Ptr() *FiscalPayloadType {
	return &v
}

type NullableFiscalPayloadType struct {
	value *FiscalPayloadType
	isSet bool
}

func (v NullableFiscalPayloadType) Get() *FiscalPayloadType {
	return v.value
}

func (v *NullableFiscalPayloadType) Set(val *FiscalPayloadType) {
	v.value = val
	v.isSet = true
}

func (v NullableFiscalPayloadType) IsSet() bool {
	return v.isSet
}

func (v *NullableFiscalPayloadType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFiscalPayloadType(val *FiscalPayloadType) *NullableFiscalPayloadType {
	return &NullableFiscalPayloadType{value: val, isSet: true}
}

func (v NullableFiscalPayloadType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFiscalPayloadType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
