/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
	"fmt"
)

// PostingRhythmType Simple type for posting Rhythm types.
type PostingRhythmType string

// List of postingRhythmType
const (
	POSTINGRHYTHMTYPE_EVERY_NIGHT PostingRhythmType = "EveryNight"
	POSTINGRHYTHMTYPE_ARRIVAL_NIGHT PostingRhythmType = "ArrivalNight"
	POSTINGRHYTHMTYPE_EVERY_X_NIGHTS_STARTING_NIGHT_Y PostingRhythmType = "EveryXNightsStartingNightY"
	POSTINGRHYTHMTYPE_CERTAIN_NIGHTS_OF_THE_WEEK PostingRhythmType = "CertainNightsOfTheWeek"
	POSTINGRHYTHMTYPE_LAST_NIGHT PostingRhythmType = "LastNight"
	POSTINGRHYTHMTYPE_EVERY_NIGHT_EXCEPT_ARRIVAL_NIGHT PostingRhythmType = "EveryNightExceptArrivalNight"
	POSTINGRHYTHMTYPE_EVERY_NIGHT_EXCEPT_LAST PostingRhythmType = "EveryNightExceptLast"
	POSTINGRHYTHMTYPE_EVERY_NIGHT_EXCEPT_FIRST_AND_LAST PostingRhythmType = "EveryNightExceptFirstAndLast"
	POSTINGRHYTHMTYPE_CUSTOM_STAY_SCHEDULE PostingRhythmType = "CustomStaySchedule"
	POSTINGRHYTHMTYPE_CUSTOM_NIGHT_SCHEDULE PostingRhythmType = "CustomNightSchedule"
	POSTINGRHYTHMTYPE_FLOATING_ALLOWANCE_PER_STAY PostingRhythmType = "FloatingAllowancePerStay"
	POSTINGRHYTHMTYPE_TICKET_POSTING PostingRhythmType = "TicketPosting"
)

// All allowed values of PostingRhythmType enum
var AllowedPostingRhythmTypeEnumValues = []PostingRhythmType{
	"EveryNight",
	"ArrivalNight",
	"EveryXNightsStartingNightY",
	"CertainNightsOfTheWeek",
	"LastNight",
	"EveryNightExceptArrivalNight",
	"EveryNightExceptLast",
	"EveryNightExceptFirstAndLast",
	"CustomStaySchedule",
	"CustomNightSchedule",
	"FloatingAllowancePerStay",
	"TicketPosting",
}

func (v *PostingRhythmType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := PostingRhythmType(value)
	for _, existing := range AllowedPostingRhythmTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid PostingRhythmType", value)
}

// NewPostingRhythmTypeFromValue returns a pointer to a valid PostingRhythmType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewPostingRhythmTypeFromValue(v string) (*PostingRhythmType, error) {
	ev := PostingRhythmType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for PostingRhythmType: valid values are %v", v, AllowedPostingRhythmTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v PostingRhythmType) IsValid() bool {
	for _, existing := range AllowedPostingRhythmTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to postingRhythmType value
func (v PostingRhythmType) Ptr() *PostingRhythmType {
	return &v
}

type NullablePostingRhythmType struct {
	value *PostingRhythmType
	isSet bool
}

func (v NullablePostingRhythmType) Get() *PostingRhythmType {
	return v.value
}

func (v *NullablePostingRhythmType) Set(val *PostingRhythmType) {
	v.value = val
	v.isSet = true
}

func (v NullablePostingRhythmType) IsSet() bool {
	return v.isSet
}

func (v *NullablePostingRhythmType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostingRhythmType(val *PostingRhythmType) *NullablePostingRhythmType {
	return &NullablePostingRhythmType{value: val, isSet: true}
}

func (v NullablePostingRhythmType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostingRhythmType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

