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

// BlockCancellationTypeType Simple type for cancellation reasons which helps to decide type of cancellation.
type BlockCancellationTypeType string

// List of blockCancellationTypeType
const (
	BLOCKCANCELLATIONTYPETYPE_LOST BlockCancellationTypeType = "Lost"
	BLOCKCANCELLATIONTYPETYPE_CANCEL BlockCancellationTypeType = "Cancel"
	BLOCKCANCELLATIONTYPETYPE_REFUSED BlockCancellationTypeType = "Refused"
)

// All allowed values of BlockCancellationTypeType enum
var AllowedBlockCancellationTypeTypeEnumValues = []BlockCancellationTypeType{
	"Lost",
	"Cancel",
	"Refused",
}

func (v *BlockCancellationTypeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := BlockCancellationTypeType(value)
	for _, existing := range AllowedBlockCancellationTypeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid BlockCancellationTypeType", value)
}

// NewBlockCancellationTypeTypeFromValue returns a pointer to a valid BlockCancellationTypeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewBlockCancellationTypeTypeFromValue(v string) (*BlockCancellationTypeType, error) {
	ev := BlockCancellationTypeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for BlockCancellationTypeType: valid values are %v", v, AllowedBlockCancellationTypeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v BlockCancellationTypeType) IsValid() bool {
	for _, existing := range AllowedBlockCancellationTypeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to blockCancellationTypeType value
func (v BlockCancellationTypeType) Ptr() *BlockCancellationTypeType {
	return &v
}

type NullableBlockCancellationTypeType struct {
	value *BlockCancellationTypeType
	isSet bool
}

func (v NullableBlockCancellationTypeType) Get() *BlockCancellationTypeType {
	return v.value
}

func (v *NullableBlockCancellationTypeType) Set(val *BlockCancellationTypeType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockCancellationTypeType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockCancellationTypeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockCancellationTypeType(val *BlockCancellationTypeType) *NullableBlockCancellationTypeType {
	return &NullableBlockCancellationTypeType{value: val, isSet: true}
}

func (v NullableBlockCancellationTypeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockCancellationTypeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
