/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
	"fmt"
)

// FolioSplitType Indicates the type of folio to be created on the window.
type FolioSplitType string

// List of folioSplitType
const (
	FOLIOSPLITTYPE_TAXTRX FolioSplitType = "TAXTRX"
	FOLIOSPLITTYPE_REVTRX FolioSplitType = "REVTRX"
)

// All allowed values of FolioSplitType enum
var AllowedFolioSplitTypeEnumValues = []FolioSplitType{
	"TAXTRX",
	"REVTRX",
}

func (v *FolioSplitType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := FolioSplitType(value)
	for _, existing := range AllowedFolioSplitTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid FolioSplitType", value)
}

// NewFolioSplitTypeFromValue returns a pointer to a valid FolioSplitType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewFolioSplitTypeFromValue(v string) (*FolioSplitType, error) {
	ev := FolioSplitType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for FolioSplitType: valid values are %v", v, AllowedFolioSplitTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v FolioSplitType) IsValid() bool {
	for _, existing := range AllowedFolioSplitTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to folioSplitType value
func (v FolioSplitType) Ptr() *FolioSplitType {
	return &v
}

type NullableFolioSplitType struct {
	value *FolioSplitType
	isSet bool
}

func (v NullableFolioSplitType) Get() *FolioSplitType {
	return v.value
}

func (v *NullableFolioSplitType) Set(val *FolioSplitType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioSplitType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioSplitType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioSplitType(val *FolioSplitType) *NullableFolioSplitType {
	return &NullableFolioSplitType{value: val, isSet: true}
}

func (v NullableFolioSplitType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioSplitType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

