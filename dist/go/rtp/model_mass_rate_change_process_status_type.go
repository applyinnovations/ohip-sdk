/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
	"fmt"
)

// MassRateChangeProcessStatusType Simple type for base type, flat or percentage.
type MassRateChangeProcessStatusType string

// List of massRateChangeProcessStatusType
const (
	MASSRATECHANGEPROCESSSTATUSTYPE_NOT_RUNNING MassRateChangeProcessStatusType = "NotRunning"
	MASSRATECHANGEPROCESSSTATUSTYPE_RUNNING MassRateChangeProcessStatusType = "Running"
	MASSRATECHANGEPROCESSSTATUSTYPE_COMPLETED MassRateChangeProcessStatusType = "Completed"
	MASSRATECHANGEPROCESSSTATUSTYPE_RUNNING_ON_LEGACY_SYSTEM MassRateChangeProcessStatusType = "RunningOnLegacySystem"
	MASSRATECHANGEPROCESSSTATUSTYPE_FINALIZING MassRateChangeProcessStatusType = "Finalizing"
)

// All allowed values of MassRateChangeProcessStatusType enum
var AllowedMassRateChangeProcessStatusTypeEnumValues = []MassRateChangeProcessStatusType{
	"NotRunning",
	"Running",
	"Completed",
	"RunningOnLegacySystem",
	"Finalizing",
}

func (v *MassRateChangeProcessStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MassRateChangeProcessStatusType(value)
	for _, existing := range AllowedMassRateChangeProcessStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MassRateChangeProcessStatusType", value)
}

// NewMassRateChangeProcessStatusTypeFromValue returns a pointer to a valid MassRateChangeProcessStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMassRateChangeProcessStatusTypeFromValue(v string) (*MassRateChangeProcessStatusType, error) {
	ev := MassRateChangeProcessStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MassRateChangeProcessStatusType: valid values are %v", v, AllowedMassRateChangeProcessStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MassRateChangeProcessStatusType) IsValid() bool {
	for _, existing := range AllowedMassRateChangeProcessStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to massRateChangeProcessStatusType value
func (v MassRateChangeProcessStatusType) Ptr() *MassRateChangeProcessStatusType {
	return &v
}

type NullableMassRateChangeProcessStatusType struct {
	value *MassRateChangeProcessStatusType
	isSet bool
}

func (v NullableMassRateChangeProcessStatusType) Get() *MassRateChangeProcessStatusType {
	return v.value
}

func (v *NullableMassRateChangeProcessStatusType) Set(val *MassRateChangeProcessStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableMassRateChangeProcessStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableMassRateChangeProcessStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMassRateChangeProcessStatusType(val *MassRateChangeProcessStatusType) *NullableMassRateChangeProcessStatusType {
	return &NullableMassRateChangeProcessStatusType{value: val, isSet: true}
}

func (v NullableMassRateChangeProcessStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMassRateChangeProcessStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

