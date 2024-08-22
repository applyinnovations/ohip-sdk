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

// ClaimSourceType Source of the membership claim.
type ClaimSourceType string

// List of claimSourceType
const (
	CLAIMSOURCETYPE_OCIS ClaimSourceType = "Ocis"
	CLAIMSOURCETYPE_OPMS ClaimSourceType = "Opms"
	CLAIMSOURCETYPE_WEB ClaimSourceType = "Web"
)

// All allowed values of ClaimSourceType enum
var AllowedClaimSourceTypeEnumValues = []ClaimSourceType{
	"Ocis",
	"Opms",
	"Web",
}

func (v *ClaimSourceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ClaimSourceType(value)
	for _, existing := range AllowedClaimSourceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ClaimSourceType", value)
}

// NewClaimSourceTypeFromValue returns a pointer to a valid ClaimSourceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewClaimSourceTypeFromValue(v string) (*ClaimSourceType, error) {
	ev := ClaimSourceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ClaimSourceType: valid values are %v", v, AllowedClaimSourceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ClaimSourceType) IsValid() bool {
	for _, existing := range AllowedClaimSourceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to claimSourceType value
func (v ClaimSourceType) Ptr() *ClaimSourceType {
	return &v
}

type NullableClaimSourceType struct {
	value *ClaimSourceType
	isSet bool
}

func (v NullableClaimSourceType) Get() *ClaimSourceType {
	return v.value
}

func (v *NullableClaimSourceType) Set(val *ClaimSourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableClaimSourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableClaimSourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableClaimSourceType(val *ClaimSourceType) *NullableClaimSourceType {
	return &NullableClaimSourceType{value: val, isSet: true}
}

func (v NullableClaimSourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableClaimSourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

