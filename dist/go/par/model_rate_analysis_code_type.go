/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
	"fmt"
)

// RateAnalysisCodeType the model 'RateAnalysisCodeType'
type RateAnalysisCodeType string

// List of rateAnalysisCodeType
const (
	RATEANALYSISCODETYPE_CLOSED RateAnalysisCodeType = "Closed"
	RATEANALYSISCODETYPE_CLOSED_FOR_ARRIVAL RateAnalysisCodeType = "ClosedForArrival"
	RATEANALYSISCODETYPE_CLOSED_FOR_DEPARTURE RateAnalysisCodeType = "ClosedForDeparture"
	RATEANALYSISCODETYPE_MINIMUM_STAY_THROUGH RateAnalysisCodeType = "MinimumStayThrough"
	RATEANALYSISCODETYPE_MAXIMUM_STAY_THROUGH RateAnalysisCodeType = "MaximumStayThrough"
	RATEANALYSISCODETYPE_MINIMUM_LENGTH_OF_STAY RateAnalysisCodeType = "MinimumLengthOfStay"
	RATEANALYSISCODETYPE_MAXIMUM_LENGTH_OF_STAY RateAnalysisCodeType = "MaximumLengthOfStay"
	RATEANALYSISCODETYPE_LOS_NOT_AVAILABLE RateAnalysisCodeType = "LOSNotAvailable"
	RATEANALYSISCODETYPE_MINIMUM_ADVANCE_BOOKING RateAnalysisCodeType = "MinimumAdvanceBooking"
	RATEANALYSISCODETYPE_MAXIMUM_ADVANCE_BOOKING RateAnalysisCodeType = "MaximumAdvanceBooking"
	RATEANALYSISCODETYPE_OPEN RateAnalysisCodeType = "Open"
	RATEANALYSISCODETYPE_OPEN_FOR_ARRIVAL RateAnalysisCodeType = "OpenForArrival"
	RATEANALYSISCODETYPE_OPEN_FOR_DEPARTURE RateAnalysisCodeType = "OpenForDeparture"
	RATEANALYSISCODETYPE_HURDLE RateAnalysisCodeType = "Hurdle"
	RATEANALYSISCODETYPE_MINIMUM_OCCUPANCY RateAnalysisCodeType = "MinimumOccupancy"
	RATEANALYSISCODETYPE_MAXIMUM_OCCUPANCY RateAnalysisCodeType = "MaximumOccupancy"
	RATEANALYSISCODETYPE_RATE_STRATEGY RateAnalysisCodeType = "RateStrategy"
	RATEANALYSISCODETYPE_RATE_DETAILS_NOT_SET RateAnalysisCodeType = "RateDetailsNotSet"
	RATEANALYSISCODETYPE_INVENTORY_ITEM_NOT_AVAILABLE RateAnalysisCodeType = "InventoryItemNotAvailable"
	RATEANALYSISCODETYPE_RANK_RESTRICTION RateAnalysisCodeType = "RankRestriction"
	RATEANALYSISCODETYPE_MAXIMUM_AUTH RateAnalysisCodeType = "MaximumAuth"
	RATEANALYSISCODETYPE_INVENTORY_NOT_AVAILABLE RateAnalysisCodeType = "InventoryNotAvailable"
	RATEANALYSISCODETYPE_ROOM_CLASS_NOT_AVAILABLE RateAnalysisCodeType = "RoomClassNotAvailable"
	RATEANALYSISCODETYPE_ROOM_TYPE_NOT_AVAILABLE RateAnalysisCodeType = "RoomTypeNotAvailable"
	RATEANALYSISCODETYPE_BLOCK_SELL_LIMIT RateAnalysisCodeType = "BlockSellLimit"
)

// All allowed values of RateAnalysisCodeType enum
var AllowedRateAnalysisCodeTypeEnumValues = []RateAnalysisCodeType{
	"Closed",
	"ClosedForArrival",
	"ClosedForDeparture",
	"MinimumStayThrough",
	"MaximumStayThrough",
	"MinimumLengthOfStay",
	"MaximumLengthOfStay",
	"LOSNotAvailable",
	"MinimumAdvanceBooking",
	"MaximumAdvanceBooking",
	"Open",
	"OpenForArrival",
	"OpenForDeparture",
	"Hurdle",
	"MinimumOccupancy",
	"MaximumOccupancy",
	"RateStrategy",
	"RateDetailsNotSet",
	"InventoryItemNotAvailable",
	"RankRestriction",
	"MaximumAuth",
	"InventoryNotAvailable",
	"RoomClassNotAvailable",
	"RoomTypeNotAvailable",
	"BlockSellLimit",
}

func (v *RateAnalysisCodeType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RateAnalysisCodeType(value)
	for _, existing := range AllowedRateAnalysisCodeTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RateAnalysisCodeType", value)
}

// NewRateAnalysisCodeTypeFromValue returns a pointer to a valid RateAnalysisCodeType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRateAnalysisCodeTypeFromValue(v string) (*RateAnalysisCodeType, error) {
	ev := RateAnalysisCodeType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RateAnalysisCodeType: valid values are %v", v, AllowedRateAnalysisCodeTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RateAnalysisCodeType) IsValid() bool {
	for _, existing := range AllowedRateAnalysisCodeTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to rateAnalysisCodeType value
func (v RateAnalysisCodeType) Ptr() *RateAnalysisCodeType {
	return &v
}

type NullableRateAnalysisCodeType struct {
	value *RateAnalysisCodeType
	isSet bool
}

func (v NullableRateAnalysisCodeType) Get() *RateAnalysisCodeType {
	return v.value
}

func (v *NullableRateAnalysisCodeType) Set(val *RateAnalysisCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableRateAnalysisCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableRateAnalysisCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRateAnalysisCodeType(val *RateAnalysisCodeType) *NullableRateAnalysisCodeType {
	return &NullableRateAnalysisCodeType{value: val, isSet: true}
}

func (v NullableRateAnalysisCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRateAnalysisCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

