/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
	"fmt"
)

// MasterRestrictionStatusesType the model 'MasterRestrictionStatusesType'
type MasterRestrictionStatusesType string

// List of masterRestrictionStatusesType
const (
	MASTERRESTRICTIONSTATUSESTYPE_CLOSED MasterRestrictionStatusesType = "Closed"
	MASTERRESTRICTIONSTATUSESTYPE_CLOSED_FOR_ARRIVAL MasterRestrictionStatusesType = "ClosedForArrival"
	MASTERRESTRICTIONSTATUSESTYPE_CLOSED_FOR_DEPARTURE MasterRestrictionStatusesType = "ClosedForDeparture"
	MASTERRESTRICTIONSTATUSESTYPE_MINIMUM_STAY_THROUGH MasterRestrictionStatusesType = "MinimumStayThrough"
	MASTERRESTRICTIONSTATUSESTYPE_MAXIMUM_STAY_THROUGH MasterRestrictionStatusesType = "MaximumStayThrough"
	MASTERRESTRICTIONSTATUSESTYPE_MINIMUM_LENGTH_OF_STAY MasterRestrictionStatusesType = "MinimumLengthOfStay"
	MASTERRESTRICTIONSTATUSESTYPE_MAXIMUM_LENGTH_OF_STAY MasterRestrictionStatusesType = "MaximumLengthOfStay"
	MASTERRESTRICTIONSTATUSESTYPE_LOS_NOT_AVAILABLE MasterRestrictionStatusesType = "LOSNotAvailable"
	MASTERRESTRICTIONSTATUSESTYPE_MINIMUM_ADVANCE_BOOKING MasterRestrictionStatusesType = "MinimumAdvanceBooking"
	MASTERRESTRICTIONSTATUSESTYPE_MAXIMUM_ADVANCE_BOOKING MasterRestrictionStatusesType = "MaximumAdvanceBooking"
	MASTERRESTRICTIONSTATUSESTYPE_OPEN MasterRestrictionStatusesType = "Open"
	MASTERRESTRICTIONSTATUSESTYPE_OPEN_FOR_ARRIVAL MasterRestrictionStatusesType = "OpenForArrival"
	MASTERRESTRICTIONSTATUSESTYPE_OPEN_FOR_DEPARTURE MasterRestrictionStatusesType = "OpenForDeparture"
	MASTERRESTRICTIONSTATUSESTYPE_HURDLE MasterRestrictionStatusesType = "Hurdle"
	MASTERRESTRICTIONSTATUSESTYPE_MINIMUM_OCCUPANCY MasterRestrictionStatusesType = "MinimumOccupancy"
	MASTERRESTRICTIONSTATUSESTYPE_MAXIMUM_OCCUPANCY MasterRestrictionStatusesType = "MaximumOccupancy"
	MASTERRESTRICTIONSTATUSESTYPE_RATE_STRATEGY MasterRestrictionStatusesType = "RateStrategy"
	MASTERRESTRICTIONSTATUSESTYPE_RATE_DETAILS_NOT_SET MasterRestrictionStatusesType = "RateDetailsNotSet"
	MASTERRESTRICTIONSTATUSESTYPE_INVENTORY_ITEM_NOT_AVAILABLE MasterRestrictionStatusesType = "InventoryItemNotAvailable"
	MASTERRESTRICTIONSTATUSESTYPE_RANK_RESTRICTION MasterRestrictionStatusesType = "RankRestriction"
	MASTERRESTRICTIONSTATUSESTYPE_MAXIMUM_AUTH MasterRestrictionStatusesType = "MaximumAuth"
	MASTERRESTRICTIONSTATUSESTYPE_INVENTORY_NOT_AVAILABLE MasterRestrictionStatusesType = "InventoryNotAvailable"
	MASTERRESTRICTIONSTATUSESTYPE_ROOM_CLASS_NOT_AVAILABLE MasterRestrictionStatusesType = "RoomClassNotAvailable"
	MASTERRESTRICTIONSTATUSESTYPE_ROOM_TYPE_NOT_AVAILABLE MasterRestrictionStatusesType = "RoomTypeNotAvailable"
	MASTERRESTRICTIONSTATUSESTYPE_BLOCK_SELL_LIMIT MasterRestrictionStatusesType = "BlockSellLimit"
	MASTERRESTRICTIONSTATUSESTYPE_ON_REQUEST MasterRestrictionStatusesType = "OnRequest"
)

// All allowed values of MasterRestrictionStatusesType enum
var AllowedMasterRestrictionStatusesTypeEnumValues = []MasterRestrictionStatusesType{
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
	"OnRequest",
}

func (v *MasterRestrictionStatusesType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := MasterRestrictionStatusesType(value)
	for _, existing := range AllowedMasterRestrictionStatusesTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid MasterRestrictionStatusesType", value)
}

// NewMasterRestrictionStatusesTypeFromValue returns a pointer to a valid MasterRestrictionStatusesType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewMasterRestrictionStatusesTypeFromValue(v string) (*MasterRestrictionStatusesType, error) {
	ev := MasterRestrictionStatusesType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for MasterRestrictionStatusesType: valid values are %v", v, AllowedMasterRestrictionStatusesTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v MasterRestrictionStatusesType) IsValid() bool {
	for _, existing := range AllowedMasterRestrictionStatusesTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to masterRestrictionStatusesType value
func (v MasterRestrictionStatusesType) Ptr() *MasterRestrictionStatusesType {
	return &v
}

type NullableMasterRestrictionStatusesType struct {
	value *MasterRestrictionStatusesType
	isSet bool
}

func (v NullableMasterRestrictionStatusesType) Get() *MasterRestrictionStatusesType {
	return v.value
}

func (v *NullableMasterRestrictionStatusesType) Set(val *MasterRestrictionStatusesType) {
	v.value = val
	v.isSet = true
}

func (v NullableMasterRestrictionStatusesType) IsSet() bool {
	return v.isSet
}

func (v *NullableMasterRestrictionStatusesType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMasterRestrictionStatusesType(val *MasterRestrictionStatusesType) *NullableMasterRestrictionStatusesType {
	return &NullableMasterRestrictionStatusesType{value: val, isSet: true}
}

func (v NullableMasterRestrictionStatusesType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMasterRestrictionStatusesType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

