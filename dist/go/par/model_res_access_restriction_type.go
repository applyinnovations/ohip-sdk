/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
	"fmt"
)

// ResAccessRestrictionType Indicates any Updates/Changes on the reservation as well as Reservation Cancellation are not allowed.
type ResAccessRestrictionType string

// List of resAccessRestrictionType
const (
	RESACCESSRESTRICTIONTYPE_CHANGE ResAccessRestrictionType = "Change"
	RESACCESSRESTRICTIONTYPE_CANCEL ResAccessRestrictionType = "Cancel"
	RESACCESSRESTRICTIONTYPE_CHANGE_OR_CANCEL ResAccessRestrictionType = "ChangeOrCancel"
)

// All allowed values of ResAccessRestrictionType enum
var AllowedResAccessRestrictionTypeEnumValues = []ResAccessRestrictionType{
	"Change",
	"Cancel",
	"ChangeOrCancel",
}

func (v *ResAccessRestrictionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ResAccessRestrictionType(value)
	for _, existing := range AllowedResAccessRestrictionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ResAccessRestrictionType", value)
}

// NewResAccessRestrictionTypeFromValue returns a pointer to a valid ResAccessRestrictionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewResAccessRestrictionTypeFromValue(v string) (*ResAccessRestrictionType, error) {
	ev := ResAccessRestrictionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ResAccessRestrictionType: valid values are %v", v, AllowedResAccessRestrictionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ResAccessRestrictionType) IsValid() bool {
	for _, existing := range AllowedResAccessRestrictionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to resAccessRestrictionType value
func (v ResAccessRestrictionType) Ptr() *ResAccessRestrictionType {
	return &v
}

type NullableResAccessRestrictionType struct {
	value *ResAccessRestrictionType
	isSet bool
}

func (v NullableResAccessRestrictionType) Get() *ResAccessRestrictionType {
	return v.value
}

func (v *NullableResAccessRestrictionType) Set(val *ResAccessRestrictionType) {
	v.value = val
	v.isSet = true
}

func (v NullableResAccessRestrictionType) IsSet() bool {
	return v.isSet
}

func (v *NullableResAccessRestrictionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResAccessRestrictionType(val *ResAccessRestrictionType) *NullableResAccessRestrictionType {
	return &NullableResAccessRestrictionType{value: val, isSet: true}
}

func (v NullableResAccessRestrictionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResAccessRestrictionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

