/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
	"fmt"
)

// StagedProfileErrorField Simple type for stage profile error filed to specify which filed in the stage profile has error.
type StagedProfileErrorField string

// List of stagedProfileErrorField
const (
	STAGEDPROFILEERRORFIELD_PRIMARY_LANGUAGE StagedProfileErrorField = "PrimaryLanguage"
	STAGEDPROFILEERRORFIELD_ALTERNATE_LANGUAG StagedProfileErrorField = "AlternateLanguag"
	STAGEDPROFILEERRORFIELD_GENDER StagedProfileErrorField = "Gender"
	STAGEDPROFILEERRORFIELD_PROFILE_TYPE StagedProfileErrorField = "ProfileType"
	STAGEDPROFILEERRORFIELD_NATIONALITY StagedProfileErrorField = "Nationality"
	STAGEDPROFILEERRORFIELD_PREFIX StagedProfileErrorField = "Prefix"
	STAGEDPROFILEERRORFIELD_VIP_STATUS StagedProfileErrorField = "VIPStatus"
)

// All allowed values of StagedProfileErrorField enum
var AllowedStagedProfileErrorFieldEnumValues = []StagedProfileErrorField{
	"PrimaryLanguage",
	"AlternateLanguag",
	"Gender",
	"ProfileType",
	"Nationality",
	"Prefix",
	"VIPStatus",
}

func (v *StagedProfileErrorField) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StagedProfileErrorField(value)
	for _, existing := range AllowedStagedProfileErrorFieldEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StagedProfileErrorField", value)
}

// NewStagedProfileErrorFieldFromValue returns a pointer to a valid StagedProfileErrorField
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStagedProfileErrorFieldFromValue(v string) (*StagedProfileErrorField, error) {
	ev := StagedProfileErrorField(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StagedProfileErrorField: valid values are %v", v, AllowedStagedProfileErrorFieldEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StagedProfileErrorField) IsValid() bool {
	for _, existing := range AllowedStagedProfileErrorFieldEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to stagedProfileErrorField value
func (v StagedProfileErrorField) Ptr() *StagedProfileErrorField {
	return &v
}

type NullableStagedProfileErrorField struct {
	value *StagedProfileErrorField
	isSet bool
}

func (v NullableStagedProfileErrorField) Get() *StagedProfileErrorField {
	return v.value
}

func (v *NullableStagedProfileErrorField) Set(val *StagedProfileErrorField) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileErrorField) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileErrorField) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileErrorField(val *StagedProfileErrorField) *NullableStagedProfileErrorField {
	return &NullableStagedProfileErrorField{value: val, isSet: true}
}

func (v NullableStagedProfileErrorField) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileErrorField) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
