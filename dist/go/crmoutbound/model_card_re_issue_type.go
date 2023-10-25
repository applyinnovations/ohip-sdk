/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
	"fmt"
)

// CardReIssueType Request to re issue a new card.
type CardReIssueType string

// List of cardReIssueType
const (
	CARDREISSUETYPE_PENDING CardReIssueType = "Pending"
	CARDREISSUETYPE_NOT_APPLICABLE CardReIssueType = "NotApplicable"
	CARDREISSUETYPE_REQUESTED CardReIssueType = "Requested"
)

// All allowed values of CardReIssueType enum
var AllowedCardReIssueTypeEnumValues = []CardReIssueType{
	"Pending",
	"NotApplicable",
	"Requested",
}

func (v *CardReIssueType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CardReIssueType(value)
	for _, existing := range AllowedCardReIssueTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CardReIssueType", value)
}

// NewCardReIssueTypeFromValue returns a pointer to a valid CardReIssueType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCardReIssueTypeFromValue(v string) (*CardReIssueType, error) {
	ev := CardReIssueType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CardReIssueType: valid values are %v", v, AllowedCardReIssueTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CardReIssueType) IsValid() bool {
	for _, existing := range AllowedCardReIssueTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to cardReIssueType value
func (v CardReIssueType) Ptr() *CardReIssueType {
	return &v
}

type NullableCardReIssueType struct {
	value *CardReIssueType
	isSet bool
}

func (v NullableCardReIssueType) Get() *CardReIssueType {
	return v.value
}

func (v *NullableCardReIssueType) Set(val *CardReIssueType) {
	v.value = val
	v.isSet = true
}

func (v NullableCardReIssueType) IsSet() bool {
	return v.isSet
}

func (v *NullableCardReIssueType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCardReIssueType(val *CardReIssueType) *NullableCardReIssueType {
	return &NullableCardReIssueType{value: val, isSet: true}
}

func (v NullableCardReIssueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCardReIssueType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

