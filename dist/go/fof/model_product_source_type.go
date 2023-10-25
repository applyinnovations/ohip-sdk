/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
	"fmt"
)

// ProductSourceType Sources of Products
type ProductSourceType string

// List of productSourceType
const (
	PRODUCTSOURCETYPE_RESERVATION ProductSourceType = "Reservation"
	PRODUCTSOURCETYPE_RATE_HEADER ProductSourceType = "RateHeader"
	PRODUCTSOURCETYPE_RATE_DETAIL ProductSourceType = "RateDetail"
)

// All allowed values of ProductSourceType enum
var AllowedProductSourceTypeEnumValues = []ProductSourceType{
	"Reservation",
	"RateHeader",
	"RateDetail",
}

func (v *ProductSourceType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ProductSourceType(value)
	for _, existing := range AllowedProductSourceTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ProductSourceType", value)
}

// NewProductSourceTypeFromValue returns a pointer to a valid ProductSourceType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewProductSourceTypeFromValue(v string) (*ProductSourceType, error) {
	ev := ProductSourceType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ProductSourceType: valid values are %v", v, AllowedProductSourceTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ProductSourceType) IsValid() bool {
	for _, existing := range AllowedProductSourceTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to productSourceType value
func (v ProductSourceType) Ptr() *ProductSourceType {
	return &v
}

type NullableProductSourceType struct {
	value *ProductSourceType
	isSet bool
}

func (v NullableProductSourceType) Get() *ProductSourceType {
	return v.value
}

func (v *NullableProductSourceType) Set(val *ProductSourceType) {
	v.value = val
	v.isSet = true
}

func (v NullableProductSourceType) IsSet() bool {
	return v.isSet
}

func (v *NullableProductSourceType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableProductSourceType(val *ProductSourceType) *NullableProductSourceType {
	return &NullableProductSourceType{value: val, isSet: true}
}

func (v NullableProductSourceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableProductSourceType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

