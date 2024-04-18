/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// AllocationType Simple type for block allocation used in room rate grid.
type AllocationType string

// List of allocationType
const (
	ALLOCATIONTYPE_INITIAL AllocationType = "Initial"
	ALLOCATIONTYPE_ACTUAL AllocationType = "Actual"
	ALLOCATIONTYPE_RATES AllocationType = "Rates"
	ALLOCATIONTYPE_PICKUP AllocationType = "Pickup"
	ALLOCATIONTYPE_CONTRACT AllocationType = "Contract"
	ALLOCATIONTYPE_AVAILABLE AllocationType = "Available"
	ALLOCATIONTYPE_PICKUPPERC AllocationType = "Pickupperc"
	ALLOCATIONTYPE_CHANGES AllocationType = "Changes"
	ALLOCATIONTYPE_RELEASED AllocationType = "Released"
	ALLOCATIONTYPE_HOUSEAVAILABILITY AllocationType = "Houseavailability"
	ALLOCATIONTYPE_SELL_LIMIT AllocationType = "SellLimit"
	ALLOCATIONTYPE_AVAILABLE_SELL_LIMIT AllocationType = "AvailableSellLimit"
	ALLOCATIONTYPE_MASTER_ALLOC_INITIAL AllocationType = "MasterAllocInitial"
	ALLOCATIONTYPE_ALLOCATED AllocationType = "Allocated"
	ALLOCATIONTYPE_SUB_ALLOC_RESV AllocationType = "SubAllocResv"
	ALLOCATIONTYPE_CUTOFF_DATE AllocationType = "CutoffDate"
)

// All allowed values of AllocationType enum
var AllowedAllocationTypeEnumValues = []AllocationType{
	"Initial",
	"Actual",
	"Rates",
	"Pickup",
	"Contract",
	"Available",
	"Pickupperc",
	"Changes",
	"Released",
	"Houseavailability",
	"SellLimit",
	"AvailableSellLimit",
	"MasterAllocInitial",
	"Allocated",
	"SubAllocResv",
	"CutoffDate",
}

func (v *AllocationType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := AllocationType(value)
	for _, existing := range AllowedAllocationTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid AllocationType", value)
}

// NewAllocationTypeFromValue returns a pointer to a valid AllocationType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewAllocationTypeFromValue(v string) (*AllocationType, error) {
	ev := AllocationType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for AllocationType: valid values are %v", v, AllowedAllocationTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v AllocationType) IsValid() bool {
	for _, existing := range AllowedAllocationTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to allocationType value
func (v AllocationType) Ptr() *AllocationType {
	return &v
}

type NullableAllocationType struct {
	value *AllocationType
	isSet bool
}

func (v NullableAllocationType) Get() *AllocationType {
	return v.value
}

func (v *NullableAllocationType) Set(val *AllocationType) {
	v.value = val
	v.isSet = true
}

func (v NullableAllocationType) IsSet() bool {
	return v.isSet
}

func (v *NullableAllocationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAllocationType(val *AllocationType) *NullableAllocationType {
	return &NullableAllocationType{value: val, isSet: true}
}

func (v NullableAllocationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAllocationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
