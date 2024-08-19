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

// BlockClassificationType Simple type for block instructions to be used in requests for fetching blocks. Valid status values are MASTER_BLOCK, MASTER_TOUR, FIT_MASTER, MASTER_ALLOCATION, MASTER_ITINERARY, LEAD_MASTER, REGULAR_BOOKING, SUB_BLOCK, SUB_TOUR, FIT_CONTRACT, SUB_ALLOCATION, SUB_ITINERARY, LEAD.
type BlockClassificationType string

// List of blockClassificationType
const (
	BLOCKCLASSIFICATIONTYPE_MASTER_BLOCK BlockClassificationType = "MasterBlock"
	BLOCKCLASSIFICATIONTYPE_MASTER_TOUR BlockClassificationType = "MasterTour"
	BLOCKCLASSIFICATIONTYPE_MASTER_ALLOCATION BlockClassificationType = "MasterAllocation"
	BLOCKCLASSIFICATIONTYPE_MASTER_ITINERARY BlockClassificationType = "MasterItinerary"
	BLOCKCLASSIFICATIONTYPE_LEAD_MASTER BlockClassificationType = "LeadMaster"
	BLOCKCLASSIFICATIONTYPE_REGULAR_BOOKING BlockClassificationType = "RegularBooking"
	BLOCKCLASSIFICATIONTYPE_SUB_BLOCK BlockClassificationType = "SubBlock"
	BLOCKCLASSIFICATIONTYPE_SUB_TOUR BlockClassificationType = "SubTour"
	BLOCKCLASSIFICATIONTYPE_FIT_CONTRACT BlockClassificationType = "FitContract"
	BLOCKCLASSIFICATIONTYPE_SUB_ALLOCATION BlockClassificationType = "SubAllocation"
	BLOCKCLASSIFICATIONTYPE_SUB_ITINERARY BlockClassificationType = "SubItinerary"
	BLOCKCLASSIFICATIONTYPE_LEAD BlockClassificationType = "Lead"
	BLOCKCLASSIFICATIONTYPE_FIT_MASTER BlockClassificationType = "FitMaster"
	BLOCKCLASSIFICATIONTYPE_OPPORTUNITY BlockClassificationType = "Opportunity"
)

// All allowed values of BlockClassificationType enum
var AllowedBlockClassificationTypeEnumValues = []BlockClassificationType{
	"MasterBlock",
	"MasterTour",
	"MasterAllocation",
	"MasterItinerary",
	"LeadMaster",
	"RegularBooking",
	"SubBlock",
	"SubTour",
	"FitContract",
	"SubAllocation",
	"SubItinerary",
	"Lead",
	"FitMaster",
	"Opportunity",
}

func (v *BlockClassificationType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := BlockClassificationType(value)
	for _, existing := range AllowedBlockClassificationTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid BlockClassificationType", value)
}

// NewBlockClassificationTypeFromValue returns a pointer to a valid BlockClassificationType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewBlockClassificationTypeFromValue(v string) (*BlockClassificationType, error) {
	ev := BlockClassificationType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for BlockClassificationType: valid values are %v", v, AllowedBlockClassificationTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v BlockClassificationType) IsValid() bool {
	for _, existing := range AllowedBlockClassificationTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to blockClassificationType value
func (v BlockClassificationType) Ptr() *BlockClassificationType {
	return &v
}

type NullableBlockClassificationType struct {
	value *BlockClassificationType
	isSet bool
}

func (v NullableBlockClassificationType) Get() *BlockClassificationType {
	return v.value
}

func (v *NullableBlockClassificationType) Set(val *BlockClassificationType) {
	v.value = val
	v.isSet = true
}

func (v NullableBlockClassificationType) IsSet() bool {
	return v.isSet
}

func (v *NullableBlockClassificationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBlockClassificationType(val *BlockClassificationType) *NullableBlockClassificationType {
	return &NullableBlockClassificationType{value: val, isSet: true}
}

func (v NullableBlockClassificationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBlockClassificationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

