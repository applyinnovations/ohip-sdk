/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
	"fmt"
)

// NameValueDataTypeType the model 'NameValueDataTypeType'
type NameValueDataTypeType string

// List of nameValueDataTypeType
const (
	NAMEVALUEDATATYPETYPE_STRING NameValueDataTypeType = "String"
	NAMEVALUEDATATYPETYPE_NUMBER NameValueDataTypeType = "Number"
	NAMEVALUEDATATYPETYPE_DATE NameValueDataTypeType = "Date"
	NAMEVALUEDATATYPETYPE_DATETIME NameValueDataTypeType = "Datetime"
	NAMEVALUEDATATYPETYPE_TIME NameValueDataTypeType = "Time"
	NAMEVALUEDATATYPETYPE_INTEGER NameValueDataTypeType = "Integer"
)

// All allowed values of NameValueDataTypeType enum
var AllowedNameValueDataTypeTypeEnumValues = []NameValueDataTypeType{
	"String",
	"Number",
	"Date",
	"Datetime",
	"Time",
	"Integer",
}

func (v *NameValueDataTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := NameValueDataTypeType(value)
	for _, existing := range AllowedNameValueDataTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid NameValueDataTypeType", value)
}

// NewNameValueDataTypeTypeFromValue returns a pointer to a valid NameValueDataTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewNameValueDataTypeTypeFromValue(v string) (*NameValueDataTypeType, error) {
	ev := NameValueDataTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for NameValueDataTypeType: valid values are %v", v, AllowedNameValueDataTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v NameValueDataTypeType) IsValid() bool {
	for _, existing := range AllowedNameValueDataTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to nameValueDataTypeType value
func (v NameValueDataTypeType) Ptr() *NameValueDataTypeType {
	return &v
}

type NullableNameValueDataTypeType struct {
	value *NameValueDataTypeType
	isSet bool
}

func (v NullableNameValueDataTypeType) Get() *NameValueDataTypeType {
	return v.value
}

func (v *NullableNameValueDataTypeType) Set(val *NameValueDataTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableNameValueDataTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableNameValueDataTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableNameValueDataTypeType(val *NameValueDataTypeType) *NullableNameValueDataTypeType {
	return &NullableNameValueDataTypeType{value: val, isSet: true}
}

func (v NullableNameValueDataTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableNameValueDataTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

