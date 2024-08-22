/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
	"fmt"
)

// WelcomeOfferOptionsType None of the Welcome Offer option is selected.
type WelcomeOfferOptionsType string

// List of welcomeOfferOptionsType
const (
	WELCOMEOFFEROPTIONSTYPE_BONUS_POINTS WelcomeOfferOptionsType = "BonusPoints"
	WELCOMEOFFEROPTIONSTYPE_ECOUPONS WelcomeOfferOptionsType = "Ecoupons"
	WELCOMEOFFEROPTIONSTYPE_ITEMS WelcomeOfferOptionsType = "Items"
	WELCOMEOFFEROPTIONSTYPE_POST_IT WelcomeOfferOptionsType = "PostIt"
	WELCOMEOFFEROPTIONSTYPE_NOT_SELECTED WelcomeOfferOptionsType = "NotSelected"
)

// All allowed values of WelcomeOfferOptionsType enum
var AllowedWelcomeOfferOptionsTypeEnumValues = []WelcomeOfferOptionsType{
	"BonusPoints",
	"Ecoupons",
	"Items",
	"PostIt",
	"NotSelected",
}

func (v *WelcomeOfferOptionsType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := WelcomeOfferOptionsType(value)
	for _, existing := range AllowedWelcomeOfferOptionsTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid WelcomeOfferOptionsType", value)
}

// NewWelcomeOfferOptionsTypeFromValue returns a pointer to a valid WelcomeOfferOptionsType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewWelcomeOfferOptionsTypeFromValue(v string) (*WelcomeOfferOptionsType, error) {
	ev := WelcomeOfferOptionsType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for WelcomeOfferOptionsType: valid values are %v", v, AllowedWelcomeOfferOptionsTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v WelcomeOfferOptionsType) IsValid() bool {
	for _, existing := range AllowedWelcomeOfferOptionsTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to welcomeOfferOptionsType value
func (v WelcomeOfferOptionsType) Ptr() *WelcomeOfferOptionsType {
	return &v
}

type NullableWelcomeOfferOptionsType struct {
	value *WelcomeOfferOptionsType
	isSet bool
}

func (v NullableWelcomeOfferOptionsType) Get() *WelcomeOfferOptionsType {
	return v.value
}

func (v *NullableWelcomeOfferOptionsType) Set(val *WelcomeOfferOptionsType) {
	v.value = val
	v.isSet = true
}

func (v NullableWelcomeOfferOptionsType) IsSet() bool {
	return v.isSet
}

func (v *NullableWelcomeOfferOptionsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableWelcomeOfferOptionsType(val *WelcomeOfferOptionsType) *NullableWelcomeOfferOptionsType {
	return &NullableWelcomeOfferOptionsType{value: val, isSet: true}
}

func (v NullableWelcomeOfferOptionsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableWelcomeOfferOptionsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

