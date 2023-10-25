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

// ReservationCertificateType Certificate is incentive.
type ReservationCertificateType string

// List of reservationCertificateType
const (
	RESERVATIONCERTIFICATETYPE_REWARD ReservationCertificateType = "Reward"
	RESERVATIONCERTIFICATETYPE_INCENTIVE ReservationCertificateType = "Incentive"
)

// All allowed values of ReservationCertificateType enum
var AllowedReservationCertificateTypeEnumValues = []ReservationCertificateType{
	"Reward",
	"Incentive",
}

func (v *ReservationCertificateType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ReservationCertificateType(value)
	for _, existing := range AllowedReservationCertificateTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ReservationCertificateType", value)
}

// NewReservationCertificateTypeFromValue returns a pointer to a valid ReservationCertificateType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewReservationCertificateTypeFromValue(v string) (*ReservationCertificateType, error) {
	ev := ReservationCertificateType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ReservationCertificateType: valid values are %v", v, AllowedReservationCertificateTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ReservationCertificateType) IsValid() bool {
	for _, existing := range AllowedReservationCertificateTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to reservationCertificateType value
func (v ReservationCertificateType) Ptr() *ReservationCertificateType {
	return &v
}

type NullableReservationCertificateType struct {
	value *ReservationCertificateType
	isSet bool
}

func (v NullableReservationCertificateType) Get() *ReservationCertificateType {
	return v.value
}

func (v *NullableReservationCertificateType) Set(val *ReservationCertificateType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationCertificateType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationCertificateType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationCertificateType(val *ReservationCertificateType) *NullableReservationCertificateType {
	return &NullableReservationCertificateType{value: val, isSet: true}
}

func (v NullableReservationCertificateType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationCertificateType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

