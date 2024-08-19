/*
OPERA Cloud Report Master Data Management API

APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package repcfg

import (
	"encoding/json"
	"fmt"
)

// PrintDestinationType Allowed values for Print Destination.
type PrintDestinationType string

// List of printDestinationType
const (
	PRINTDESTINATIONTYPE_PRINTER PrintDestinationType = "Printer"
	PRINTDESTINATIONTYPE_EMAIL PrintDestinationType = "Email"
	PRINTDESTINATIONTYPE_FAX PrintDestinationType = "Fax"
)

// All allowed values of PrintDestinationType enum
var AllowedPrintDestinationTypeEnumValues = []PrintDestinationType{
	"Printer",
	"Email",
	"Fax",
}

func (v *PrintDestinationType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PrintDestinationType(value)
	for _, existing := range AllowedPrintDestinationTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PrintDestinationType", value)
}

// NewPrintDestinationTypeFromValue returns a pointer to a valid PrintDestinationType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPrintDestinationTypeFromValue(v string) (*PrintDestinationType, error) {
	ev := PrintDestinationType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PrintDestinationType: valid values are %v", v, AllowedPrintDestinationTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PrintDestinationType) IsValid() bool {
	for _, existing := range AllowedPrintDestinationTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to printDestinationType value
func (v PrintDestinationType) Ptr() *PrintDestinationType {
	return &v
}

type NullablePrintDestinationType struct {
	value *PrintDestinationType
	isSet bool
}

func (v NullablePrintDestinationType) Get() *PrintDestinationType {
	return v.value
}

func (v *NullablePrintDestinationType) Set(val *PrintDestinationType) {
	v.value = val
	v.isSet = true
}

func (v NullablePrintDestinationType) IsSet() bool {
	return v.isSet
}

func (v *NullablePrintDestinationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePrintDestinationType(val *PrintDestinationType) *NullablePrintDestinationType {
	return &NullablePrintDestinationType{value: val, isSet: true}
}

func (v NullablePrintDestinationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePrintDestinationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

