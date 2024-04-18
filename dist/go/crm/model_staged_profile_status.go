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

// StagedProfileStatus Simple type for status of the staged profiles.
type StagedProfileStatus string

// List of stagedProfileStatus
const (
	STAGEDPROFILESTATUS_VALID StagedProfileStatus = "Valid"
	STAGEDPROFILESTATUS_INVALID StagedProfileStatus = "Invalid"
	STAGEDPROFILESTATUS_MATCH_FOUND StagedProfileStatus = "MatchFound"
	STAGEDPROFILESTATUS_NEW StagedProfileStatus = "New"
)

// All allowed values of StagedProfileStatus enum
var AllowedStagedProfileStatusEnumValues = []StagedProfileStatus{
	"Valid",
	"Invalid",
	"MatchFound",
	"New",
}

func (v *StagedProfileStatus) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := StagedProfileStatus(value)
	for _, existing := range AllowedStagedProfileStatusEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid StagedProfileStatus", value)
}

// NewStagedProfileStatusFromValue returns a pointer to a valid StagedProfileStatus
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewStagedProfileStatusFromValue(v string) (*StagedProfileStatus, error) {
	ev := StagedProfileStatus(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for StagedProfileStatus: valid values are %v", v, AllowedStagedProfileStatusEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v StagedProfileStatus) IsValid() bool {
	for _, existing := range AllowedStagedProfileStatusEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to stagedProfileStatus value
func (v StagedProfileStatus) Ptr() *StagedProfileStatus {
	return &v
}

type NullableStagedProfileStatus struct {
	value *StagedProfileStatus
	isSet bool
}

func (v NullableStagedProfileStatus) Get() *StagedProfileStatus {
	return v.value
}

func (v *NullableStagedProfileStatus) Set(val *StagedProfileStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileStatus(val *StagedProfileStatus) *NullableStagedProfileStatus {
	return &NullableStagedProfileStatus{value: val, isSet: true}
}

func (v NullableStagedProfileStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
