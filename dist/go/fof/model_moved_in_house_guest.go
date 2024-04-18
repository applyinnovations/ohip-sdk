/*
OPERA Cloud Front Desk Operations Service

APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fof

import (
	"encoding/json"
)

// checks if the MovedInHouseGuest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MovedInHouseGuest{}

// MovedInHouseGuest Potential errors which this operation might respond are the following: - Reservation is NOT In-House. - The room is NON-EXISTENT for the hotel. - The room is NOT valid for usage based on its current state. - The room's occupancy level has been compromised. - The room's pricing is NOT available.
type MovedInHouseGuest struct {
	// Collection of effective rate amount per guest on specific dates.
	EffectiveRates []EffectiveRateType `json:"effectiveRates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Defines room rate information on a daily basis.
	NewRates []DailyRateType `json:"newRates,omitempty"`
	// Defines room rate information on a daily basis.
	OldRates []DailyRateType `json:"oldRates,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMovedInHouseGuest instantiates a new MovedInHouseGuest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMovedInHouseGuest() *MovedInHouseGuest {
	this := MovedInHouseGuest{}
	return &this
}

// NewMovedInHouseGuestWithDefaults instantiates a new MovedInHouseGuest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMovedInHouseGuestWithDefaults() *MovedInHouseGuest {
	this := MovedInHouseGuest{}
	return &this
}

// GetEffectiveRates returns the EffectiveRates field value if set, zero value otherwise.
func (o *MovedInHouseGuest) GetEffectiveRates() []EffectiveRateType {
	if o == nil || IsNil(o.EffectiveRates) {
		var ret []EffectiveRateType
		return ret
	}
	return o.EffectiveRates
}

// GetEffectiveRatesOk returns a tuple with the EffectiveRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MovedInHouseGuest) GetEffectiveRatesOk() ([]EffectiveRateType, bool) {
	if o == nil || IsNil(o.EffectiveRates) {
		return nil, false
	}
	return o.EffectiveRates, true
}

// HasEffectiveRates returns a boolean if a field has been set.
func (o *MovedInHouseGuest) HasEffectiveRates() bool {
	if o != nil && !IsNil(o.EffectiveRates) {
		return true
	}

	return false
}

// SetEffectiveRates gets a reference to the given []EffectiveRateType and assigns it to the EffectiveRates field.
func (o *MovedInHouseGuest) SetEffectiveRates(v []EffectiveRateType) {
	o.EffectiveRates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MovedInHouseGuest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MovedInHouseGuest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MovedInHouseGuest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MovedInHouseGuest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetNewRates returns the NewRates field value if set, zero value otherwise.
func (o *MovedInHouseGuest) GetNewRates() []DailyRateType {
	if o == nil || IsNil(o.NewRates) {
		var ret []DailyRateType
		return ret
	}
	return o.NewRates
}

// GetNewRatesOk returns a tuple with the NewRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MovedInHouseGuest) GetNewRatesOk() ([]DailyRateType, bool) {
	if o == nil || IsNil(o.NewRates) {
		return nil, false
	}
	return o.NewRates, true
}

// HasNewRates returns a boolean if a field has been set.
func (o *MovedInHouseGuest) HasNewRates() bool {
	if o != nil && !IsNil(o.NewRates) {
		return true
	}

	return false
}

// SetNewRates gets a reference to the given []DailyRateType and assigns it to the NewRates field.
func (o *MovedInHouseGuest) SetNewRates(v []DailyRateType) {
	o.NewRates = v
}

// GetOldRates returns the OldRates field value if set, zero value otherwise.
func (o *MovedInHouseGuest) GetOldRates() []DailyRateType {
	if o == nil || IsNil(o.OldRates) {
		var ret []DailyRateType
		return ret
	}
	return o.OldRates
}

// GetOldRatesOk returns a tuple with the OldRates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MovedInHouseGuest) GetOldRatesOk() ([]DailyRateType, bool) {
	if o == nil || IsNil(o.OldRates) {
		return nil, false
	}
	return o.OldRates, true
}

// HasOldRates returns a boolean if a field has been set.
func (o *MovedInHouseGuest) HasOldRates() bool {
	if o != nil && !IsNil(o.OldRates) {
		return true
	}

	return false
}

// SetOldRates gets a reference to the given []DailyRateType and assigns it to the OldRates field.
func (o *MovedInHouseGuest) SetOldRates(v []DailyRateType) {
	o.OldRates = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MovedInHouseGuest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MovedInHouseGuest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MovedInHouseGuest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MovedInHouseGuest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MovedInHouseGuest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MovedInHouseGuest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EffectiveRates) {
		toSerialize["effectiveRates"] = o.EffectiveRates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.NewRates) {
		toSerialize["newRates"] = o.NewRates
	}
	if !IsNil(o.OldRates) {
		toSerialize["oldRates"] = o.OldRates
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMovedInHouseGuest struct {
	value *MovedInHouseGuest
	isSet bool
}

func (v NullableMovedInHouseGuest) Get() *MovedInHouseGuest {
	return v.value
}

func (v *NullableMovedInHouseGuest) Set(val *MovedInHouseGuest) {
	v.value = val
	v.isSet = true
}

func (v NullableMovedInHouseGuest) IsSet() bool {
	return v.isSet
}

func (v *NullableMovedInHouseGuest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMovedInHouseGuest(val *MovedInHouseGuest) *NullableMovedInHouseGuest {
	return &NullableMovedInHouseGuest{value: val, isSet: true}
}

func (v NullableMovedInHouseGuest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMovedInHouseGuest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

