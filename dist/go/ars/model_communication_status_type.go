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

// CommunicationStatusType Enum to denote the Status of Readiness messages sent to Guest Devices.
type CommunicationStatusType string

// List of communicationStatusType
const (
	COMMUNICATIONSTATUSTYPE_PENDING CommunicationStatusType = "Pending"
	COMMUNICATIONSTATUSTYPE_COMPLETED CommunicationStatusType = "Completed"
	COMMUNICATIONSTATUSTYPE_FAILED CommunicationStatusType = "Failed"
	COMMUNICATIONSTATUSTYPE_SENT CommunicationStatusType = "Sent"
	COMMUNICATIONSTATUSTYPE_RECEIVED CommunicationStatusType = "Received"
	COMMUNICATIONSTATUSTYPE_CANCELLED CommunicationStatusType = "Cancelled"
	COMMUNICATIONSTATUSTYPE_PENDING_AVAILABILITY CommunicationStatusType = "PendingAvailability"
)

// All allowed values of CommunicationStatusType enum
var AllowedCommunicationStatusTypeEnumValues = []CommunicationStatusType{
	"Pending",
	"Completed",
	"Failed",
	"Sent",
	"Received",
	"Cancelled",
	"PendingAvailability",
}

func (v *CommunicationStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CommunicationStatusType(value)
	for _, existing := range AllowedCommunicationStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CommunicationStatusType", value)
}

// NewCommunicationStatusTypeFromValue returns a pointer to a valid CommunicationStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCommunicationStatusTypeFromValue(v string) (*CommunicationStatusType, error) {
	ev := CommunicationStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CommunicationStatusType: valid values are %v", v, AllowedCommunicationStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CommunicationStatusType) IsValid() bool {
	for _, existing := range AllowedCommunicationStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to communicationStatusType value
func (v CommunicationStatusType) Ptr() *CommunicationStatusType {
	return &v
}

type NullableCommunicationStatusType struct {
	value *CommunicationStatusType
	isSet bool
}

func (v NullableCommunicationStatusType) Get() *CommunicationStatusType {
	return v.value
}

func (v *NullableCommunicationStatusType) Set(val *CommunicationStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommunicationStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommunicationStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommunicationStatusType(val *CommunicationStatusType) *NullableCommunicationStatusType {
	return &NullableCommunicationStatusType{value: val, isSet: true}
}

func (v NullableCommunicationStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommunicationStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

