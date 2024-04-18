/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the AwardUpgrades type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AwardUpgrades{}

// AwardUpgrades Response object for available award upgrades.
type AwardUpgrades struct {
	AwardUpgradeInfo *AwardUpgradeInfoType `json:"awardUpgradeInfo,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAwardUpgrades instantiates a new AwardUpgrades object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAwardUpgrades() *AwardUpgrades {
	this := AwardUpgrades{}
	return &this
}

// NewAwardUpgradesWithDefaults instantiates a new AwardUpgrades object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAwardUpgradesWithDefaults() *AwardUpgrades {
	this := AwardUpgrades{}
	return &this
}

// GetAwardUpgradeInfo returns the AwardUpgradeInfo field value if set, zero value otherwise.
func (o *AwardUpgrades) GetAwardUpgradeInfo() AwardUpgradeInfoType {
	if o == nil || IsNil(o.AwardUpgradeInfo) {
		var ret AwardUpgradeInfoType
		return ret
	}
	return *o.AwardUpgradeInfo
}

// GetAwardUpgradeInfoOk returns a tuple with the AwardUpgradeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgrades) GetAwardUpgradeInfoOk() (*AwardUpgradeInfoType, bool) {
	if o == nil || IsNil(o.AwardUpgradeInfo) {
		return nil, false
	}
	return o.AwardUpgradeInfo, true
}

// HasAwardUpgradeInfo returns a boolean if a field has been set.
func (o *AwardUpgrades) HasAwardUpgradeInfo() bool {
	if o != nil && !IsNil(o.AwardUpgradeInfo) {
		return true
	}

	return false
}

// SetAwardUpgradeInfo gets a reference to the given AwardUpgradeInfoType and assigns it to the AwardUpgradeInfo field.
func (o *AwardUpgrades) SetAwardUpgradeInfo(v AwardUpgradeInfoType) {
	o.AwardUpgradeInfo = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AwardUpgrades) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgrades) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AwardUpgrades) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AwardUpgrades) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AwardUpgrades) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AwardUpgrades) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AwardUpgrades) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AwardUpgrades) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AwardUpgrades) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AwardUpgrades) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AwardUpgradeInfo) {
		toSerialize["awardUpgradeInfo"] = o.AwardUpgradeInfo
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAwardUpgrades struct {
	value *AwardUpgrades
	isSet bool
}

func (v NullableAwardUpgrades) Get() *AwardUpgrades {
	return v.value
}

func (v *NullableAwardUpgrades) Set(val *AwardUpgrades) {
	v.value = val
	v.isSet = true
}

func (v NullableAwardUpgrades) IsSet() bool {
	return v.isSet
}

func (v *NullableAwardUpgrades) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAwardUpgrades(val *AwardUpgrades) *NullableAwardUpgrades {
	return &NullableAwardUpgrades{value: val, isSet: true}
}

func (v NullableAwardUpgrades) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAwardUpgrades) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

