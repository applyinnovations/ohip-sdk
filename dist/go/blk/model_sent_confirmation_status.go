/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// SentConfirmationStatus the model 'SentConfirmationStatus'
type SentConfirmationStatus string

// List of sentConfirmationStatus
const (
	SENTCONFIRMATIONSTATUS_PENDING SentConfirmationStatus = "Pending"
	SENTCONFIRMATIONSTATUS_SUCCEEDED SentConfirmationStatus = "Succeeded"
	SENTCONFIRMATIONSTATUS_FAILED SentConfirmationStatus = "Failed"
)

// All allowed values of SentConfirmationStatus enum
var AllowedSentConfirmationStatusEnumValues = []SentConfirmationStatus{
	"Pending",
	"Succeeded",
	"Failed",
}

func (v *SentConfirmationStatus) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := SentConfirmationStatus(value)
	for _, existing := range AllowedSentConfirmationStatusEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid SentConfirmationStatus", value)
}

// NewSentConfirmationStatusFromValue returns a pointer to a valid SentConfirmationStatus
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewSentConfirmationStatusFromValue(v string) (*SentConfirmationStatus, error) {
	ev := SentConfirmationStatus(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for SentConfirmationStatus: valid values are %v", v, AllowedSentConfirmationStatusEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v SentConfirmationStatus) IsValid() bool {
	for _, existing := range AllowedSentConfirmationStatusEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to sentConfirmationStatus value
func (v SentConfirmationStatus) Ptr() *SentConfirmationStatus {
	return &v
}

type NullableSentConfirmationStatus struct {
	value *SentConfirmationStatus
	isSet bool
}

func (v NullableSentConfirmationStatus) Get() *SentConfirmationStatus {
	return v.value
}

func (v *NullableSentConfirmationStatus) Set(val *SentConfirmationStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableSentConfirmationStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableSentConfirmationStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSentConfirmationStatus(val *SentConfirmationStatus) *NullableSentConfirmationStatus {
	return &NullableSentConfirmationStatus{value: val, isSet: true}
}

func (v NullableSentConfirmationStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSentConfirmationStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

