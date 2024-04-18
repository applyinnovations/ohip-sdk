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

// ClaimApprovalStatusType Claim approve or reject status.
type ClaimApprovalStatusType string

// List of claimApprovalStatusType
const (
	CLAIMAPPROVALSTATUSTYPE_APPROVED ClaimApprovalStatusType = "Approved"
	CLAIMAPPROVALSTATUSTYPE_REJECTED ClaimApprovalStatusType = "Rejected"
	CLAIMAPPROVALSTATUSTYPE_PENDING ClaimApprovalStatusType = "Pending"
)

// All allowed values of ClaimApprovalStatusType enum
var AllowedClaimApprovalStatusTypeEnumValues = []ClaimApprovalStatusType{
	"Approved",
	"Rejected",
	"Pending",
}

func (v *ClaimApprovalStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ClaimApprovalStatusType(value)
	for _, existing := range AllowedClaimApprovalStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ClaimApprovalStatusType", value)
}

// NewClaimApprovalStatusTypeFromValue returns a pointer to a valid ClaimApprovalStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewClaimApprovalStatusTypeFromValue(v string) (*ClaimApprovalStatusType, error) {
	ev := ClaimApprovalStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ClaimApprovalStatusType: valid values are %v", v, AllowedClaimApprovalStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ClaimApprovalStatusType) IsValid() bool {
	for _, existing := range AllowedClaimApprovalStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to claimApprovalStatusType value
func (v ClaimApprovalStatusType) Ptr() *ClaimApprovalStatusType {
	return &v
}

type NullableClaimApprovalStatusType struct {
	value *ClaimApprovalStatusType
	isSet bool
}

func (v NullableClaimApprovalStatusType) Get() *ClaimApprovalStatusType {
	return v.value
}

func (v *NullableClaimApprovalStatusType) Set(val *ClaimApprovalStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableClaimApprovalStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableClaimApprovalStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClaimApprovalStatusType(val *ClaimApprovalStatusType) *NullableClaimApprovalStatusType {
	return &NullableClaimApprovalStatusType{value: val, isSet: true}
}

func (v NullableClaimApprovalStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClaimApprovalStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
