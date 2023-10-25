/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// RequestActionType the model 'RequestActionType'
type RequestActionType string

// List of requestActionType
const (
	REQUESTACTIONTYPE_CREATE RequestActionType = "Create"
	REQUESTACTIONTYPE_REMOVE RequestActionType = "Remove"
	REQUESTACTIONTYPE_QUERY RequestActionType = "Query"
)

// All allowed values of RequestActionType enum
var AllowedRequestActionTypeEnumValues = []RequestActionType{
	"Create",
	"Remove",
	"Query",
}

func (v *RequestActionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RequestActionType(value)
	for _, existing := range AllowedRequestActionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RequestActionType", value)
}

// NewRequestActionTypeFromValue returns a pointer to a valid RequestActionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRequestActionTypeFromValue(v string) (*RequestActionType, error) {
	ev := RequestActionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RequestActionType: valid values are %v", v, AllowedRequestActionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RequestActionType) IsValid() bool {
	for _, existing := range AllowedRequestActionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to requestActionType value
func (v RequestActionType) Ptr() *RequestActionType {
	return &v
}

type NullableRequestActionType struct {
	value *RequestActionType
	isSet bool
}

func (v NullableRequestActionType) Get() *RequestActionType {
	return v.value
}

func (v *NullableRequestActionType) Set(val *RequestActionType) {
	v.value = val
	v.isSet = true
}

func (v NullableRequestActionType) IsSet() bool {
	return v.isSet
}

func (v *NullableRequestActionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRequestActionType(val *RequestActionType) *NullableRequestActionType {
	return &NullableRequestActionType{value: val, isSet: true}
}

func (v NullableRequestActionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRequestActionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

