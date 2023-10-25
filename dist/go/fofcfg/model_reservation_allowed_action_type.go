/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
	"fmt"
)

// ReservationAllowedActionType Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation.
type ReservationAllowedActionType string

// List of reservationAllowedActionType
const (
	RESERVATIONALLOWEDACTIONTYPE_CANCEL ReservationAllowedActionType = "Cancel"
	RESERVATIONALLOWEDACTIONTYPE_MOVE ReservationAllowedActionType = "Move"
	RESERVATIONALLOWEDACTIONTYPE_PRE_CHARGE ReservationAllowedActionType = "PreCharge"
	RESERVATIONALLOWEDACTIONTYPE_POST_CHARGE ReservationAllowedActionType = "PostCharge"
	RESERVATIONALLOWEDACTIONTYPE_FACILITY_SCHEDULE ReservationAllowedActionType = "FacilitySchedule"
	RESERVATIONALLOWEDACTIONTYPE_UPSELL ReservationAllowedActionType = "Upsell"
	RESERVATIONALLOWEDACTIONTYPE_PRE_CHECK_IN ReservationAllowedActionType = "PreCheckIn"
	RESERVATIONALLOWEDACTIONTYPE_POST_TO_NO_SHOW_CANCEL ReservationAllowedActionType = "PostToNoShowCancel"
	RESERVATIONALLOWEDACTIONTYPE_NO_SHOW ReservationAllowedActionType = "NoShow"
	RESERVATIONALLOWEDACTIONTYPE_NAME_CHANGE ReservationAllowedActionType = "NameChange"
	RESERVATIONALLOWEDACTIONTYPE_DISCOUNT ReservationAllowedActionType = "Discount"
	RESERVATIONALLOWEDACTIONTYPE_ENROLL_TO_PRIMARY_MEMBERSHIP ReservationAllowedActionType = "EnrollToPrimaryMembership"
	RESERVATIONALLOWEDACTIONTYPE_ENROLL_IN_PROGRESS ReservationAllowedActionType = "EnrollInProgress"
)

// All allowed values of ReservationAllowedActionType enum
var AllowedReservationAllowedActionTypeEnumValues = []ReservationAllowedActionType{
	"Cancel",
	"Move",
	"PreCharge",
	"PostCharge",
	"FacilitySchedule",
	"Upsell",
	"PreCheckIn",
	"PostToNoShowCancel",
	"NoShow",
	"NameChange",
	"Discount",
	"EnrollToPrimaryMembership",
	"EnrollInProgress",
}

func (v *ReservationAllowedActionType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ReservationAllowedActionType(value)
	for _, existing := range AllowedReservationAllowedActionTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ReservationAllowedActionType", value)
}

// NewReservationAllowedActionTypeFromValue returns a pointer to a valid ReservationAllowedActionType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewReservationAllowedActionTypeFromValue(v string) (*ReservationAllowedActionType, error) {
	ev := ReservationAllowedActionType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ReservationAllowedActionType: valid values are %v", v, AllowedReservationAllowedActionTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ReservationAllowedActionType) IsValid() bool {
	for _, existing := range AllowedReservationAllowedActionTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to reservationAllowedActionType value
func (v ReservationAllowedActionType) Ptr() *ReservationAllowedActionType {
	return &v
}

type NullableReservationAllowedActionType struct {
	value *ReservationAllowedActionType
	isSet bool
}

func (v NullableReservationAllowedActionType) Get() *ReservationAllowedActionType {
	return v.value
}

func (v *NullableReservationAllowedActionType) Set(val *ReservationAllowedActionType) {
	v.value = val
	v.isSet = true
}

func (v NullableReservationAllowedActionType) IsSet() bool {
	return v.isSet
}

func (v *NullableReservationAllowedActionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableReservationAllowedActionType(val *ReservationAllowedActionType) *NullableReservationAllowedActionType {
	return &NullableReservationAllowedActionType{value: val, isSet: true}
}

func (v NullableReservationAllowedActionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableReservationAllowedActionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

