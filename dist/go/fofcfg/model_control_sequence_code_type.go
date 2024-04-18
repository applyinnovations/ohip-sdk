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

// ControlSequenceCodeType Indicates control sequences used for bills. Eg. CREDIT_BILL, FATTURA etc.
type ControlSequenceCodeType string

// List of controlSequenceCodeType
const (
	CONTROLSEQUENCECODETYPE_ACKNOWLEDGE_RECEIPT ControlSequenceCodeType = "AcknowledgeReceipt"
	CONTROLSEQUENCECODETYPE_STATEMENT ControlSequenceCodeType = "Statement"
	CONTROLSEQUENCECODETYPE_FOLIO ControlSequenceCodeType = "Folio"
	CONTROLSEQUENCECODETYPE_OFFICIAL_RECEIPT ControlSequenceCodeType = "OfficialReceipt"
	CONTROLSEQUENCECODETYPE_BILL ControlSequenceCodeType = "Bill"
	CONTROLSEQUENCECODETYPE_AR_INVOICE ControlSequenceCodeType = "ArInvoice"
	CONTROLSEQUENCECODETYPE_SUPPORTING_DOCUMENT ControlSequenceCodeType = "SupportingDocument"
)

// All allowed values of ControlSequenceCodeType enum
var AllowedControlSequenceCodeTypeEnumValues = []ControlSequenceCodeType{
	"AcknowledgeReceipt",
	"Statement",
	"Folio",
	"OfficialReceipt",
	"Bill",
	"ArInvoice",
	"SupportingDocument",
}

func (v *ControlSequenceCodeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ControlSequenceCodeType(value)
	for _, existing := range AllowedControlSequenceCodeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ControlSequenceCodeType", value)
}

// NewControlSequenceCodeTypeFromValue returns a pointer to a valid ControlSequenceCodeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewControlSequenceCodeTypeFromValue(v string) (*ControlSequenceCodeType, error) {
	ev := ControlSequenceCodeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ControlSequenceCodeType: valid values are %v", v, AllowedControlSequenceCodeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ControlSequenceCodeType) IsValid() bool {
	for _, existing := range AllowedControlSequenceCodeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to controlSequenceCodeType value
func (v ControlSequenceCodeType) Ptr() *ControlSequenceCodeType {
	return &v
}

type NullableControlSequenceCodeType struct {
	value *ControlSequenceCodeType
	isSet bool
}

func (v NullableControlSequenceCodeType) Get() *ControlSequenceCodeType {
	return v.value
}

func (v *NullableControlSequenceCodeType) Set(val *ControlSequenceCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableControlSequenceCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableControlSequenceCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableControlSequenceCodeType(val *ControlSequenceCodeType) *NullableControlSequenceCodeType {
	return &NullableControlSequenceCodeType{value: val, isSet: true}
}

func (v NullableControlSequenceCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableControlSequenceCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
