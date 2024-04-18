/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
	"fmt"
)

// LinkedProfileTypeType Simple type for profile types linked to activity.
type LinkedProfileTypeType string

// List of linkedProfileTypeType
const (
	LINKEDPROFILETYPETYPE_COMPANY LinkedProfileTypeType = "Company"
	LINKEDPROFILETYPETYPE_AGENT LinkedProfileTypeType = "Agent"
	LINKEDPROFILETYPETYPE_SOURCE LinkedProfileTypeType = "Source"
	LINKEDPROFILETYPETYPE_COMPANY_CONTACT LinkedProfileTypeType = "CompanyContact"
	LINKEDPROFILETYPETYPE_AGENT_CONTACT LinkedProfileTypeType = "AgentContact"
	LINKEDPROFILETYPETYPE_SOURCE_CONTACT LinkedProfileTypeType = "SourceContact"
)

// All allowed values of LinkedProfileTypeType enum
var AllowedLinkedProfileTypeTypeEnumValues = []LinkedProfileTypeType{
	"Company",
	"Agent",
	"Source",
	"CompanyContact",
	"AgentContact",
	"SourceContact",
}

func (v *LinkedProfileTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := LinkedProfileTypeType(value)
	for _, existing := range AllowedLinkedProfileTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid LinkedProfileTypeType", value)
}

// NewLinkedProfileTypeTypeFromValue returns a pointer to a valid LinkedProfileTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewLinkedProfileTypeTypeFromValue(v string) (*LinkedProfileTypeType, error) {
	ev := LinkedProfileTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for LinkedProfileTypeType: valid values are %v", v, AllowedLinkedProfileTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v LinkedProfileTypeType) IsValid() bool {
	for _, existing := range AllowedLinkedProfileTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to linkedProfileTypeType value
func (v LinkedProfileTypeType) Ptr() *LinkedProfileTypeType {
	return &v
}

type NullableLinkedProfileTypeType struct {
	value *LinkedProfileTypeType
	isSet bool
}

func (v NullableLinkedProfileTypeType) Get() *LinkedProfileTypeType {
	return v.value
}

func (v *NullableLinkedProfileTypeType) Set(val *LinkedProfileTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableLinkedProfileTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableLinkedProfileTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableLinkedProfileTypeType(val *LinkedProfileTypeType) *NullableLinkedProfileTypeType {
	return &NullableLinkedProfileTypeType{value: val, isSet: true}
}

func (v NullableLinkedProfileTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableLinkedProfileTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
