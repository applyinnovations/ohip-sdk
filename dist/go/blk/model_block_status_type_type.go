/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
	"fmt"
)

// BlockStatusTypeType Simple type for specifying the block status type.
type BlockStatusTypeType string

// List of blockStatusTypeType
const (
	BLOCKSTATUSTYPETYPE_INQUIRY BlockStatusTypeType = "Inquiry"
	BLOCKSTATUSTYPETYPE_ACTUAL BlockStatusTypeType = "Actual"
	BLOCKSTATUSTYPETYPE_WAITLIST BlockStatusTypeType = "Waitlist"
	BLOCKSTATUSTYPETYPE_CANCEL BlockStatusTypeType = "Cancel"
	BLOCKSTATUSTYPETYPE_REFERRAL BlockStatusTypeType = "Referral"
)

// All allowed values of BlockStatusTypeType enum
var AllowedBlockStatusTypeTypeEnumValues = []BlockStatusTypeType{
	"Inquiry",
	"Actual",
	"Waitlist",
	"Cancel",
	"Referral",
}

func (v *BlockStatusTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := BlockStatusTypeType(value)
	for _, existing := range AllowedBlockStatusTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid BlockStatusTypeType", value)
}

// NewBlockStatusTypeTypeFromValue returns a pointer to a valid BlockStatusTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewBlockStatusTypeTypeFromValue(v string) (*BlockStatusTypeType, error) {
	ev := BlockStatusTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for BlockStatusTypeType: valid values are %v", v, AllowedBlockStatusTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v BlockStatusTypeType) IsValid() bool {
	for _, existing := range AllowedBlockStatusTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to blockStatusTypeType value
func (v BlockStatusTypeType) Ptr() *BlockStatusTypeType {
	return &v
}

type NullableBlockStatusTypeType struct {
	value *BlockStatusTypeType
	isSet bool
}

func (v NullableBlockStatusTypeType) Get() *BlockStatusTypeType {
	return v.value
}

func (v *NullableBlockStatusTypeType) Set(val *BlockStatusTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockStatusTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockStatusTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockStatusTypeType(val *BlockStatusTypeType) *NullableBlockStatusTypeType {
	return &NullableBlockStatusTypeType{value: val, isSet: true}
}

func (v NullableBlockStatusTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockStatusTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

