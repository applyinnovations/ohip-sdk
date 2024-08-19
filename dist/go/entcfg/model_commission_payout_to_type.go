/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
	"fmt"
)

// CommissionPayoutToType the model 'CommissionPayoutToType'
type CommissionPayoutToType string

// List of commissionPayoutToType
const (
	COMMISSIONPAYOUTTOTYPE_TRAVEL_AGENT CommissionPayoutToType = "TravelAgent"
	COMMISSIONPAYOUTTOTYPE_SOURCE CommissionPayoutToType = "Source"
	COMMISSIONPAYOUTTOTYPE_TRAVEL_AGENT_SOURCE CommissionPayoutToType = "TravelAgentSource"
	COMMISSIONPAYOUTTOTYPE_NONE CommissionPayoutToType = "None"
)

// All allowed values of CommissionPayoutToType enum
var AllowedCommissionPayoutToTypeEnumValues = []CommissionPayoutToType{
	"TravelAgent",
	"Source",
	"TravelAgentSource",
	"None",
}

func (v *CommissionPayoutToType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CommissionPayoutToType(value)
	for _, existing := range AllowedCommissionPayoutToTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CommissionPayoutToType", value)
}

// NewCommissionPayoutToTypeFromValue returns a pointer to a valid CommissionPayoutToType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCommissionPayoutToTypeFromValue(v string) (*CommissionPayoutToType, error) {
	ev := CommissionPayoutToType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CommissionPayoutToType: valid values are %v", v, AllowedCommissionPayoutToTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CommissionPayoutToType) IsValid() bool {
	for _, existing := range AllowedCommissionPayoutToTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to commissionPayoutToType value
func (v CommissionPayoutToType) Ptr() *CommissionPayoutToType {
	return &v
}

type NullableCommissionPayoutToType struct {
	value *CommissionPayoutToType
	isSet bool
}

func (v NullableCommissionPayoutToType) Get() *CommissionPayoutToType {
	return v.value
}

func (v *NullableCommissionPayoutToType) Set(val *CommissionPayoutToType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionPayoutToType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionPayoutToType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionPayoutToType(val *CommissionPayoutToType) *NullableCommissionPayoutToType {
	return &NullableCommissionPayoutToType{value: val, isSet: true}
}

func (v NullableCommissionPayoutToType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionPayoutToType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

