/*
OPERA Cloud Report Master Data Management API

APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package repcfg

import (
	"encoding/json"
	"fmt"
)

// ParamDataType Identifies the data type of the report parameter.
type ParamDataType string

// List of paramDataType
const (
	PARAMDATATYPE_DATE_AS_CHAR ParamDataType = "DateAsChar"
	PARAMDATATYPE_DATE ParamDataType = "Date"
	PARAMDATATYPE_NUMBER ParamDataType = "Number"
	PARAMDATATYPE_CHECK_BOX ParamDataType = "CheckBox"
	PARAMDATATYPE_DATE_TIME ParamDataType = "DateTime"
	PARAMDATATYPE_CHAR ParamDataType = "Char"
	PARAMDATATYPE_MONEY ParamDataType = "Money"
	PARAMDATATYPE_INTEGER ParamDataType = "Integer"
)

// All allowed values of ParamDataType enum
var AllowedParamDataTypeEnumValues = []ParamDataType{
	"DateAsChar",
	"Date",
	"Number",
	"CheckBox",
	"DateTime",
	"Char",
	"Money",
	"Integer",
}

func (v *ParamDataType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ParamDataType(value)
	for _, existing := range AllowedParamDataTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ParamDataType", value)
}

// NewParamDataTypeFromValue returns a pointer to a valid ParamDataType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewParamDataTypeFromValue(v string) (*ParamDataType, error) {
	ev := ParamDataType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ParamDataType: valid values are %v", v, AllowedParamDataTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ParamDataType) IsValid() bool {
	for _, existing := range AllowedParamDataTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to paramDataType value
func (v ParamDataType) Ptr() *ParamDataType {
	return &v
}

type NullableParamDataType struct {
	value *ParamDataType
	isSet bool
}

func (v NullableParamDataType) Get() *ParamDataType {
	return v.value
}

func (v *NullableParamDataType) Set(val *ParamDataType) {
	v.value = val
	v.isSet = true
}

func (v NullableParamDataType) IsSet() bool {
	return v.isSet
}

func (v *NullableParamDataType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableParamDataType(val *ParamDataType) *NullableParamDataType {
	return &NullableParamDataType{value: val, isSet: true}
}

func (v NullableParamDataType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableParamDataType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

