/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// FolioStatusType The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status.
type FolioStatusType string

// List of folioStatusType
const (
	FOLIOSTATUSTYPE_DEPOSIT FolioStatusType = "Deposit"
	FOLIOSTATUSTYPE_VOID FolioStatusType = "Void"
	FOLIOSTATUSTYPE_OK FolioStatusType = "Ok"
	FOLIOSTATUSTYPE_ZERO FolioStatusType = "Zero"
	FOLIOSTATUSTYPE_COMPRESS FolioStatusType = "Compress"
	FOLIOSTATUSTYPE_CONVERTED FolioStatusType = "Converted"
	FOLIOSTATUSTYPE_INTERNAL FolioStatusType = "Internal"
)

// All allowed values of FolioStatusType enum
var AllowedFolioStatusTypeEnumValues = []FolioStatusType{
	"Deposit",
	"Void",
	"Ok",
	"Zero",
	"Compress",
	"Converted",
	"Internal",
}

func (v *FolioStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FolioStatusType(value)
	for _, existing := range AllowedFolioStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FolioStatusType", value)
}

// NewFolioStatusTypeFromValue returns a pointer to a valid FolioStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFolioStatusTypeFromValue(v string) (*FolioStatusType, error) {
	ev := FolioStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FolioStatusType: valid values are %v", v, AllowedFolioStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FolioStatusType) IsValid() bool {
	for _, existing := range AllowedFolioStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to folioStatusType value
func (v FolioStatusType) Ptr() *FolioStatusType {
	return &v
}

type NullableFolioStatusType struct {
	value *FolioStatusType
	isSet bool
}

func (v NullableFolioStatusType) Get() *FolioStatusType {
	return v.value
}

func (v *NullableFolioStatusType) Set(val *FolioStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioStatusType(val *FolioStatusType) *NullableFolioStatusType {
	return &NullableFolioStatusType{value: val, isSet: true}
}

func (v NullableFolioStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

