/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the HousekeepingCreditRulesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HousekeepingCreditRulesDetails{}

// HousekeepingCreditRulesDetails Response object for fetching housekeeping credit rules.
type HousekeepingCreditRulesDetails struct {
	// The information of housekeeping credit rule for configuration.
	CreditRules []HousekeepingCreditRuleType `json:"creditRules,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Refer to Generic common types document.
	MasterInfoList []MasterInfoType `json:"masterInfoList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHousekeepingCreditRulesDetails instantiates a new HousekeepingCreditRulesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHousekeepingCreditRulesDetails() *HousekeepingCreditRulesDetails {
	this := HousekeepingCreditRulesDetails{}
	return &this
}

// NewHousekeepingCreditRulesDetailsWithDefaults instantiates a new HousekeepingCreditRulesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHousekeepingCreditRulesDetailsWithDefaults() *HousekeepingCreditRulesDetails {
	this := HousekeepingCreditRulesDetails{}
	return &this
}

// GetCreditRules returns the CreditRules field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesDetails) GetCreditRules() []HousekeepingCreditRuleType {
	if o == nil || IsNil(o.CreditRules) {
		var ret []HousekeepingCreditRuleType
		return ret
	}
	return o.CreditRules
}

// GetCreditRulesOk returns a tuple with the CreditRules field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesDetails) GetCreditRulesOk() ([]HousekeepingCreditRuleType, bool) {
	if o == nil || IsNil(o.CreditRules) {
		return nil, false
	}
	return o.CreditRules, true
}

// HasCreditRules returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesDetails) HasCreditRules() bool {
	if o != nil && !IsNil(o.CreditRules) {
		return true
	}

	return false
}

// SetCreditRules gets a reference to the given []HousekeepingCreditRuleType and assigns it to the CreditRules field.
func (o *HousekeepingCreditRulesDetails) SetCreditRules(v []HousekeepingCreditRuleType) {
	o.CreditRules = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HousekeepingCreditRulesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMasterInfoList returns the MasterInfoList field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesDetails) GetMasterInfoList() []MasterInfoType {
	if o == nil || IsNil(o.MasterInfoList) {
		var ret []MasterInfoType
		return ret
	}
	return o.MasterInfoList
}

// GetMasterInfoListOk returns a tuple with the MasterInfoList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesDetails) GetMasterInfoListOk() ([]MasterInfoType, bool) {
	if o == nil || IsNil(o.MasterInfoList) {
		return nil, false
	}
	return o.MasterInfoList, true
}

// HasMasterInfoList returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesDetails) HasMasterInfoList() bool {
	if o != nil && !IsNil(o.MasterInfoList) {
		return true
	}

	return false
}

// SetMasterInfoList gets a reference to the given []MasterInfoType and assigns it to the MasterInfoList field.
func (o *HousekeepingCreditRulesDetails) SetMasterInfoList(v []MasterInfoType) {
	o.MasterInfoList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HousekeepingCreditRulesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HousekeepingCreditRulesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HousekeepingCreditRulesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HousekeepingCreditRulesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HousekeepingCreditRulesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HousekeepingCreditRulesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreditRules) {
		toSerialize["creditRules"] = o.CreditRules
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MasterInfoList) {
		toSerialize["masterInfoList"] = o.MasterInfoList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHousekeepingCreditRulesDetails struct {
	value *HousekeepingCreditRulesDetails
	isSet bool
}

func (v NullableHousekeepingCreditRulesDetails) Get() *HousekeepingCreditRulesDetails {
	return v.value
}

func (v *NullableHousekeepingCreditRulesDetails) Set(val *HousekeepingCreditRulesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableHousekeepingCreditRulesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableHousekeepingCreditRulesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHousekeepingCreditRulesDetails(val *HousekeepingCreditRulesDetails) *NullableHousekeepingCreditRulesDetails {
	return &NullableHousekeepingCreditRulesDetails{value: val, isSet: true}
}

func (v NullableHousekeepingCreditRulesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHousekeepingCreditRulesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

