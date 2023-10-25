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

// TurndownStatusType Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed.
type TurndownStatusType string

// List of turndownStatusType
const (
	TURNDOWNSTATUSTYPE_REQUIRED TurndownStatusType = "Required"
	TURNDOWNSTATUSTYPE_NOT_REQUIRED TurndownStatusType = "NotRequired"
	TURNDOWNSTATUSTYPE_COMPELETED TurndownStatusType = "Compeleted"
)

// All allowed values of TurndownStatusType enum
var AllowedTurndownStatusTypeEnumValues = []TurndownStatusType{
	"Required",
	"NotRequired",
	"Compeleted",
}

func (v *TurndownStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := TurndownStatusType(value)
	for _, existing := range AllowedTurndownStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid TurndownStatusType", value)
}

// NewTurndownStatusTypeFromValue returns a pointer to a valid TurndownStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewTurndownStatusTypeFromValue(v string) (*TurndownStatusType, error) {
	ev := TurndownStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for TurndownStatusType: valid values are %v", v, AllowedTurndownStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v TurndownStatusType) IsValid() bool {
	for _, existing := range AllowedTurndownStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to turndownStatusType value
func (v TurndownStatusType) Ptr() *TurndownStatusType {
	return &v
}

type NullableTurndownStatusType struct {
	value *TurndownStatusType
	isSet bool
}

func (v NullableTurndownStatusType) Get() *TurndownStatusType {
	return v.value
}

func (v *NullableTurndownStatusType) Set(val *TurndownStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableTurndownStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableTurndownStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTurndownStatusType(val *TurndownStatusType) *NullableTurndownStatusType {
	return &NullableTurndownStatusType{value: val, isSet: true}
}

func (v NullableTurndownStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTurndownStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

