/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
	"fmt"
)

// CommunicationRoleType Phone Number Communication Role.
type CommunicationRoleType string

// List of communicationRoleType
const (
	COMMUNICATIONROLETYPE_EMAIL CommunicationRoleType = "Email"
	COMMUNICATIONROLETYPE_FAX CommunicationRoleType = "Fax"
	COMMUNICATIONROLETYPE_EMAIL_FOR_REQUEST CommunicationRoleType = "EmailForRequest"
	COMMUNICATIONROLETYPE_WEBPAGE CommunicationRoleType = "Webpage"
	COMMUNICATIONROLETYPE_PHONE CommunicationRoleType = "Phone"
)

// All allowed values of CommunicationRoleType enum
var AllowedCommunicationRoleTypeEnumValues = []CommunicationRoleType{
	"Email",
	"Fax",
	"EmailForRequest",
	"Webpage",
	"Phone",
}

func (v *CommunicationRoleType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CommunicationRoleType(value)
	for _, existing := range AllowedCommunicationRoleTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CommunicationRoleType", value)
}

// NewCommunicationRoleTypeFromValue returns a pointer to a valid CommunicationRoleType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCommunicationRoleTypeFromValue(v string) (*CommunicationRoleType, error) {
	ev := CommunicationRoleType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CommunicationRoleType: valid values are %v", v, AllowedCommunicationRoleTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CommunicationRoleType) IsValid() bool {
	for _, existing := range AllowedCommunicationRoleTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to communicationRoleType value
func (v CommunicationRoleType) Ptr() *CommunicationRoleType {
	return &v
}

type NullableCommunicationRoleType struct {
	value *CommunicationRoleType
	isSet bool
}

func (v NullableCommunicationRoleType) Get() *CommunicationRoleType {
	return v.value
}

func (v *NullableCommunicationRoleType) Set(val *CommunicationRoleType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommunicationRoleType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommunicationRoleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommunicationRoleType(val *CommunicationRoleType) *NullableCommunicationRoleType {
	return &NullableCommunicationRoleType{value: val, isSet: true}
}

func (v NullableCommunicationRoleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommunicationRoleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
