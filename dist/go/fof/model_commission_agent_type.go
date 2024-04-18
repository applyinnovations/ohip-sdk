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

// checks if the CommissionAgentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CommissionAgentType{}

// CommissionAgentType Agent or source information along with their commission details.
type CommissionAgentType struct {
	AgentInfo *AgentInfoType `json:"agentInfo,omitempty"`
	// Commission details related to the stays for which the agent or source is eligible to receive commissions.
	CommissionDetails []CommissionDetailType `json:"commissionDetails,omitempty"`
}

// NewCommissionAgentType instantiates a new CommissionAgentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCommissionAgentType() *CommissionAgentType {
	this := CommissionAgentType{}
	return &this
}

// NewCommissionAgentTypeWithDefaults instantiates a new CommissionAgentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCommissionAgentTypeWithDefaults() *CommissionAgentType {
	this := CommissionAgentType{}
	return &this
}

// GetAgentInfo returns the AgentInfo field value if set, zero value otherwise.
func (o *CommissionAgentType) GetAgentInfo() AgentInfoType {
	if o == nil || IsNil(o.AgentInfo) {
		var ret AgentInfoType
		return ret
	}
	return *o.AgentInfo
}

// GetAgentInfoOk returns a tuple with the AgentInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionAgentType) GetAgentInfoOk() (*AgentInfoType, bool) {
	if o == nil || IsNil(o.AgentInfo) {
		return nil, false
	}
	return o.AgentInfo, true
}

// HasAgentInfo returns a boolean if a field has been set.
func (o *CommissionAgentType) HasAgentInfo() bool {
	if o != nil && !IsNil(o.AgentInfo) {
		return true
	}

	return false
}

// SetAgentInfo gets a reference to the given AgentInfoType and assigns it to the AgentInfo field.
func (o *CommissionAgentType) SetAgentInfo(v AgentInfoType) {
	o.AgentInfo = &v
}

// GetCommissionDetails returns the CommissionDetails field value if set, zero value otherwise.
func (o *CommissionAgentType) GetCommissionDetails() []CommissionDetailType {
	if o == nil || IsNil(o.CommissionDetails) {
		var ret []CommissionDetailType
		return ret
	}
	return o.CommissionDetails
}

// GetCommissionDetailsOk returns a tuple with the CommissionDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CommissionAgentType) GetCommissionDetailsOk() ([]CommissionDetailType, bool) {
	if o == nil || IsNil(o.CommissionDetails) {
		return nil, false
	}
	return o.CommissionDetails, true
}

// HasCommissionDetails returns a boolean if a field has been set.
func (o *CommissionAgentType) HasCommissionDetails() bool {
	if o != nil && !IsNil(o.CommissionDetails) {
		return true
	}

	return false
}

// SetCommissionDetails gets a reference to the given []CommissionDetailType and assigns it to the CommissionDetails field.
func (o *CommissionAgentType) SetCommissionDetails(v []CommissionDetailType) {
	o.CommissionDetails = v
}

func (o CommissionAgentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CommissionAgentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AgentInfo) {
		toSerialize["agentInfo"] = o.AgentInfo
	}
	if !IsNil(o.CommissionDetails) {
		toSerialize["commissionDetails"] = o.CommissionDetails
	}
	return toSerialize, nil
}

type NullableCommissionAgentType struct {
	value *CommissionAgentType
	isSet bool
}

func (v NullableCommissionAgentType) Get() *CommissionAgentType {
	return v.value
}

func (v *NullableCommissionAgentType) Set(val *CommissionAgentType) {
	v.value = val
	v.isSet = true
}

func (v NullableCommissionAgentType) IsSet() bool {
	return v.isSet
}

func (v *NullableCommissionAgentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCommissionAgentType(val *CommissionAgentType) *NullableCommissionAgentType {
	return &NullableCommissionAgentType{value: val, isSet: true}
}

func (v NullableCommissionAgentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCommissionAgentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

