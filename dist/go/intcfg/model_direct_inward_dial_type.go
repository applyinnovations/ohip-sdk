/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
	"fmt"
)

// DirectInwardDialType Direct Inward Dial is set to available and freely switchable.
type DirectInwardDialType string

// List of directInwardDialType
const (
	DIRECTINWARDDIALTYPE_NOT_AVAILABLE DirectInwardDialType = "NotAvailable"
	DIRECTINWARDDIALTYPE_ALWAYS_ON DirectInwardDialType = "AlwaysOn"
	DIRECTINWARDDIALTYPE_ALWAYS_OFF DirectInwardDialType = "AlwaysOff"
	DIRECTINWARDDIALTYPE_FREELY_SWITCHABLE DirectInwardDialType = "FreelySwitchable"
)

// All allowed values of DirectInwardDialType enum
var AllowedDirectInwardDialTypeEnumValues = []DirectInwardDialType{
	"NotAvailable",
	"AlwaysOn",
	"AlwaysOff",
	"FreelySwitchable",
}

func (v *DirectInwardDialType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := DirectInwardDialType(value)
	for _, existing := range AllowedDirectInwardDialTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid DirectInwardDialType", value)
}

// NewDirectInwardDialTypeFromValue returns a pointer to a valid DirectInwardDialType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewDirectInwardDialTypeFromValue(v string) (*DirectInwardDialType, error) {
	ev := DirectInwardDialType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for DirectInwardDialType: valid values are %v", v, AllowedDirectInwardDialTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v DirectInwardDialType) IsValid() bool {
	for _, existing := range AllowedDirectInwardDialTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to directInwardDialType value
func (v DirectInwardDialType) Ptr() *DirectInwardDialType {
	return &v
}

type NullableDirectInwardDialType struct {
	value *DirectInwardDialType
	isSet bool
}

func (v NullableDirectInwardDialType) Get() *DirectInwardDialType {
	return v.value
}

func (v *NullableDirectInwardDialType) Set(val *DirectInwardDialType) {
	v.value = val
	v.isSet = true
}

func (v NullableDirectInwardDialType) IsSet() bool {
	return v.isSet
}

func (v *NullableDirectInwardDialType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDirectInwardDialType(val *DirectInwardDialType) *NullableDirectInwardDialType {
	return &NullableDirectInwardDialType{value: val, isSet: true}
}

func (v NullableDirectInwardDialType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDirectInwardDialType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
