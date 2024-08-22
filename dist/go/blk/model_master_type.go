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

// MasterType the model 'MasterType'
type MasterType string

// List of masterType
const (
	MASTERTYPE_COUNTRY MasterType = "Country"
	MASTERTYPE_STATE MasterType = "State"
	MASTERTYPE_ADDRESS_TYPE MasterType = "AddressType"
	MASTERTYPE_PHONE_TYPE MasterType = "PhoneType"
	MASTERTYPE_RATE_CATEGORY MasterType = "RateCategory"
	MASTERTYPE_CALCULATION_RULE MasterType = "CalculationRule"
	MASTERTYPE_POSTING_RYTHYM MasterType = "PostingRythym"
	MASTERTYPE_BILLING_INSTRUCTION MasterType = "BillingInstruction"
	MASTERTYPE_TRANSACTION_CODE MasterType = "TransactionCode"
	MASTERTYPE_DISPLAY_SET MasterType = "DisplaySet"
	MASTERTYPE_MAILING_ACTIONS MasterType = "MailingActions"
	MASTERTYPE_DISTANCE_TYPE MasterType = "DistanceType"
	MASTERTYPE_DISTRICT MasterType = "District"
	MASTERTYPE_TERRITORY MasterType = "Territory"
	MASTERTYPE_FISCAL_REGION MasterType = "FiscalRegion"
	MASTERTYPE_INVENTORY_ITEM MasterType = "InventoryItem"
	MASTERTYPE_PACKAGE MasterType = "Package"
	MASTERTYPE_ROOM_FEATURE_PREFERENCE MasterType = "RoomFeaturePreference"
	MASTERTYPE_SPECIAL_PREFERENCE MasterType = "SpecialPreference"
	MASTERTYPE_PROMOTION MasterType = "Promotion"
	MASTERTYPE_DEPARTMENT MasterType = "Department"
	MASTERTYPE_RESERVATION_PREFERENCE MasterType = "ReservationPreference"
	MASTERTYPE_FACILITY_TASK MasterType = "FacilityTask"
	MASTERTYPE_ROOM_TYPE MasterType = "RoomType"
	MASTERTYPE_RATE_CODE MasterType = "RateCode"
	MASTERTYPE_OUT_OF_ORDER_REASON MasterType = "OutOfOrderReason"
	MASTERTYPE_BLOCK MasterType = "Block"
)

// All allowed values of MasterType enum
var AllowedMasterTypeEnumValues = []MasterType{
	"Country",
	"State",
	"AddressType",
	"PhoneType",
	"RateCategory",
	"CalculationRule",
	"PostingRythym",
	"BillingInstruction",
	"TransactionCode",
	"DisplaySet",
	"MailingActions",
	"DistanceType",
	"District",
	"Territory",
	"FiscalRegion",
	"InventoryItem",
	"Package",
	"RoomFeaturePreference",
	"SpecialPreference",
	"Promotion",
	"Department",
	"ReservationPreference",
	"FacilityTask",
	"RoomType",
	"RateCode",
	"OutOfOrderReason",
	"Block",
}

func (v *MasterType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MasterType(value)
	for _, existing := range AllowedMasterTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MasterType", value)
}

// NewMasterTypeFromValue returns a pointer to a valid MasterType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMasterTypeFromValue(v string) (*MasterType, error) {
	ev := MasterType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MasterType: valid values are %v", v, AllowedMasterTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MasterType) IsValid() bool {
	for _, existing := range AllowedMasterTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to masterType value
func (v MasterType) Ptr() *MasterType {
	return &v
}

type NullableMasterType struct {
	value *MasterType
	isSet bool
}

func (v NullableMasterType) Get() *MasterType {
	return v.value
}

func (v *NullableMasterType) Set(val *MasterType) {
	v.value = val
	v.isSet = true
}

func (v NullableMasterType) IsSet() bool {
	return v.isSet
}

func (v *NullableMasterType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMasterType(val *MasterType) *NullableMasterType {
	return &NullableMasterType{value: val, isSet: true}
}

func (v NullableMasterType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMasterType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

