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

// ConfDeliveryMethod the model 'ConfDeliveryMethod'
type ConfDeliveryMethod string

// List of confDeliveryMethod
const (
	CONFDELIVERYMETHOD_PRINT ConfDeliveryMethod = "Print"
	CONFDELIVERYMETHOD_EMAIL ConfDeliveryMethod = "Email"
	CONFDELIVERYMETHOD_FAX ConfDeliveryMethod = "Fax"
	CONFDELIVERYMETHOD_TEXT ConfDeliveryMethod = "Text"
	CONFDELIVERYMETHOD_NOT_CONFIGURED ConfDeliveryMethod = "NotConfigured"
)

// All allowed values of ConfDeliveryMethod enum
var AllowedConfDeliveryMethodEnumValues = []ConfDeliveryMethod{
	"Print",
	"Email",
	"Fax",
	"Text",
	"NotConfigured",
}

func (v *ConfDeliveryMethod) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ConfDeliveryMethod(value)
	for _, existing := range AllowedConfDeliveryMethodEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ConfDeliveryMethod", value)
}

// NewConfDeliveryMethodFromValue returns a pointer to a valid ConfDeliveryMethod
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewConfDeliveryMethodFromValue(v string) (*ConfDeliveryMethod, error) {
	ev := ConfDeliveryMethod(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ConfDeliveryMethod: valid values are %v", v, AllowedConfDeliveryMethodEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ConfDeliveryMethod) IsValid() bool {
	for _, existing := range AllowedConfDeliveryMethodEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to confDeliveryMethod value
func (v ConfDeliveryMethod) Ptr() *ConfDeliveryMethod {
	return &v
}

type NullableConfDeliveryMethod struct {
	value *ConfDeliveryMethod
	isSet bool
}

func (v NullableConfDeliveryMethod) Get() *ConfDeliveryMethod {
	return v.value
}

func (v *NullableConfDeliveryMethod) Set(val *ConfDeliveryMethod) {
	v.value = val
	v.isSet = true
}

func (v NullableConfDeliveryMethod) IsSet() bool {
	return v.isSet
}

func (v *NullableConfDeliveryMethod) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfDeliveryMethod(val *ConfDeliveryMethod) *NullableConfDeliveryMethod {
	return &NullableConfDeliveryMethod{value: val, isSet: true}
}

func (v NullableConfDeliveryMethod) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfDeliveryMethod) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

