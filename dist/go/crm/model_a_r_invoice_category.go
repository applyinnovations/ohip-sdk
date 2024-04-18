/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
	"fmt"
)

// ARInvoiceCategory the model 'ARInvoiceCategory'
type ARInvoiceCategory string

// List of aRInvoiceCategory
const (
	ARINVOICECATEGORY_NORMAL ARInvoiceCategory = "Normal"
	ARINVOICECATEGORY_CREDIT ARInvoiceCategory = "Credit"
	ARINVOICECATEGORY_OLD_BALANCE ARInvoiceCategory = "OldBalance"
	ARINVOICECATEGORY_PASSER_BY ARInvoiceCategory = "PasserBy"
)

// All allowed values of ARInvoiceCategory enum
var AllowedARInvoiceCategoryEnumValues = []ARInvoiceCategory{
	"Normal",
	"Credit",
	"OldBalance",
	"PasserBy",
}

func (v *ARInvoiceCategory) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ARInvoiceCategory(value)
	for _, existing := range AllowedARInvoiceCategoryEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ARInvoiceCategory", value)
}

// NewARInvoiceCategoryFromValue returns a pointer to a valid ARInvoiceCategory
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewARInvoiceCategoryFromValue(v string) (*ARInvoiceCategory, error) {
	ev := ARInvoiceCategory(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ARInvoiceCategory: valid values are %v", v, AllowedARInvoiceCategoryEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ARInvoiceCategory) IsValid() bool {
	for _, existing := range AllowedARInvoiceCategoryEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to aRInvoiceCategory value
func (v ARInvoiceCategory) Ptr() *ARInvoiceCategory {
	return &v
}

type NullableARInvoiceCategory struct {
	value *ARInvoiceCategory
	isSet bool
}

func (v NullableARInvoiceCategory) Get() *ARInvoiceCategory {
	return v.value
}

func (v *NullableARInvoiceCategory) Set(val *ARInvoiceCategory) {
	v.value = val
	v.isSet = true
}

func (v NullableARInvoiceCategory) IsSet() bool {
	return v.isSet
}

func (v *NullableARInvoiceCategory) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableARInvoiceCategory(val *ARInvoiceCategory) *NullableARInvoiceCategory {
	return &NullableARInvoiceCategory{value: val, isSet: true}
}

func (v NullableARInvoiceCategory) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableARInvoiceCategory) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
