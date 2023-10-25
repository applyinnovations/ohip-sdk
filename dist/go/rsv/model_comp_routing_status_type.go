/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
	"fmt"
)

// CompRoutingStatusType Status which indicates that the Request of Comp Routing was declined
type CompRoutingStatusType string

// List of compRoutingStatusType
const (
	COMPROUTINGSTATUSTYPE_REQUEST CompRoutingStatusType = "Request"
	COMPROUTINGSTATUSTYPE_COMP CompRoutingStatusType = "Comp"
	COMPROUTINGSTATUSTYPE_DECLINED CompRoutingStatusType = "Declined"
)

// All allowed values of CompRoutingStatusType enum
var AllowedCompRoutingStatusTypeEnumValues = []CompRoutingStatusType{
	"Request",
	"Comp",
	"Declined",
}

func (v *CompRoutingStatusType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := CompRoutingStatusType(value)
	for _, existing := range AllowedCompRoutingStatusTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid CompRoutingStatusType", value)
}

// NewCompRoutingStatusTypeFromValue returns a pointer to a valid CompRoutingStatusType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewCompRoutingStatusTypeFromValue(v string) (*CompRoutingStatusType, error) {
	ev := CompRoutingStatusType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for CompRoutingStatusType: valid values are %v", v, AllowedCompRoutingStatusTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v CompRoutingStatusType) IsValid() bool {
	for _, existing := range AllowedCompRoutingStatusTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to compRoutingStatusType value
func (v CompRoutingStatusType) Ptr() *CompRoutingStatusType {
	return &v
}

type NullableCompRoutingStatusType struct {
	value *CompRoutingStatusType
	isSet bool
}

func (v NullableCompRoutingStatusType) Get() *CompRoutingStatusType {
	return v.value
}

func (v *NullableCompRoutingStatusType) Set(val *CompRoutingStatusType) {
	v.value = val
	v.isSet = true
}

func (v NullableCompRoutingStatusType) IsSet() bool {
	return v.isSet
}

func (v *NullableCompRoutingStatusType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompRoutingStatusType(val *CompRoutingStatusType) *NullableCompRoutingStatusType {
	return &NullableCompRoutingStatusType{value: val, isSet: true}
}

func (v NullableCompRoutingStatusType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompRoutingStatusType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

