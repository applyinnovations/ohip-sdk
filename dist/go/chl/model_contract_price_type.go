/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
	"fmt"
)

// ContractPriceType To specify price will be billed per reservation. This is allowed only if Fee type is Transaction or Fax.
type ContractPriceType string

// List of contractPriceType
const (
	CONTRACTPRICETYPE_FLAT_FEE ContractPriceType = "FlatFee"
	CONTRACTPRICETYPE_PROPERTY ContractPriceType = "Property"
	CONTRACTPRICETYPE_ROOM ContractPriceType = "Room"
	CONTRACTPRICETYPE_RESERVATION ContractPriceType = "Reservation"
)

// All allowed values of ContractPriceType enum
var AllowedContractPriceTypeEnumValues = []ContractPriceType{
	"FlatFee",
	"Property",
	"Room",
	"Reservation",
}

func (v *ContractPriceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ContractPriceType(value)
	for _, existing := range AllowedContractPriceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ContractPriceType", value)
}

// NewContractPriceTypeFromValue returns a pointer to a valid ContractPriceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewContractPriceTypeFromValue(v string) (*ContractPriceType, error) {
	ev := ContractPriceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ContractPriceType: valid values are %v", v, AllowedContractPriceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ContractPriceType) IsValid() bool {
	for _, existing := range AllowedContractPriceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to contractPriceType value
func (v ContractPriceType) Ptr() *ContractPriceType {
	return &v
}

type NullableContractPriceType struct {
	value *ContractPriceType
	isSet bool
}

func (v NullableContractPriceType) Get() *ContractPriceType {
	return v.value
}

func (v *NullableContractPriceType) Set(val *ContractPriceType) {
	v.value = val
	v.isSet = true
}

func (v NullableContractPriceType) IsSet() bool {
	return v.isSet
}

func (v *NullableContractPriceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableContractPriceType(val *ContractPriceType) *NullableContractPriceType {
	return &NullableContractPriceType{value: val, isSet: true}
}

func (v NullableContractPriceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableContractPriceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
