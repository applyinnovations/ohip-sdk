/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the MembershipTypeRulePointsDefinitionType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MembershipTypeRulePointsDefinitionType{}

// MembershipTypeRulePointsDefinitionType Membership Program Rule points details.
type MembershipTypeRulePointsDefinitionType struct {
	// Specifies the ratio of the points accumulated per Stay or Night or Revenue. This ratio multiplied by the actual Stays or Nights or Revenue will give the Total points accumulated.
	Points *int32 `json:"points,omitempty"`
	// Indicates the cost per point for this membership program.
	CostPerPoint *int32 `json:"costPerPoint,omitempty"`
	// Specifies the minimum units needed.
	RevenueUnits *int32 `json:"revenueUnits,omitempty"`
	PointsRoundingFlag *PointsRoundingFlagType `json:"pointsRoundingFlag,omitempty"`
	// Points ratio is expressed in terms of %.
	PercentagePoints *bool `json:"percentagePoints,omitempty"`
	// Determines while calculating points projection should the rule be excluded or included. Default is included(N).
	ExcludePointProjection *bool `json:"excludePointProjection,omitempty"`
}

// NewMembershipTypeRulePointsDefinitionType instantiates a new MembershipTypeRulePointsDefinitionType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMembershipTypeRulePointsDefinitionType() *MembershipTypeRulePointsDefinitionType {
	this := MembershipTypeRulePointsDefinitionType{}
	return &this
}

// NewMembershipTypeRulePointsDefinitionTypeWithDefaults instantiates a new MembershipTypeRulePointsDefinitionType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMembershipTypeRulePointsDefinitionTypeWithDefaults() *MembershipTypeRulePointsDefinitionType {
	this := MembershipTypeRulePointsDefinitionType{}
	return &this
}

// GetPoints returns the Points field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetPoints() int32 {
	if o == nil || IsNil(o.Points) {
		var ret int32
		return ret
	}
	return *o.Points
}

// GetPointsOk returns a tuple with the Points field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetPointsOk() (*int32, bool) {
	if o == nil || IsNil(o.Points) {
		return nil, false
	}
	return o.Points, true
}

// HasPoints returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasPoints() bool {
	if o != nil && !IsNil(o.Points) {
		return true
	}

	return false
}

// SetPoints gets a reference to the given int32 and assigns it to the Points field.
func (o *MembershipTypeRulePointsDefinitionType) SetPoints(v int32) {
	o.Points = &v
}

// GetCostPerPoint returns the CostPerPoint field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetCostPerPoint() int32 {
	if o == nil || IsNil(o.CostPerPoint) {
		var ret int32
		return ret
	}
	return *o.CostPerPoint
}

// GetCostPerPointOk returns a tuple with the CostPerPoint field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetCostPerPointOk() (*int32, bool) {
	if o == nil || IsNil(o.CostPerPoint) {
		return nil, false
	}
	return o.CostPerPoint, true
}

// HasCostPerPoint returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasCostPerPoint() bool {
	if o != nil && !IsNil(o.CostPerPoint) {
		return true
	}

	return false
}

// SetCostPerPoint gets a reference to the given int32 and assigns it to the CostPerPoint field.
func (o *MembershipTypeRulePointsDefinitionType) SetCostPerPoint(v int32) {
	o.CostPerPoint = &v
}

// GetRevenueUnits returns the RevenueUnits field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetRevenueUnits() int32 {
	if o == nil || IsNil(o.RevenueUnits) {
		var ret int32
		return ret
	}
	return *o.RevenueUnits
}

// GetRevenueUnitsOk returns a tuple with the RevenueUnits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetRevenueUnitsOk() (*int32, bool) {
	if o == nil || IsNil(o.RevenueUnits) {
		return nil, false
	}
	return o.RevenueUnits, true
}

// HasRevenueUnits returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasRevenueUnits() bool {
	if o != nil && !IsNil(o.RevenueUnits) {
		return true
	}

	return false
}

// SetRevenueUnits gets a reference to the given int32 and assigns it to the RevenueUnits field.
func (o *MembershipTypeRulePointsDefinitionType) SetRevenueUnits(v int32) {
	o.RevenueUnits = &v
}

// GetPointsRoundingFlag returns the PointsRoundingFlag field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetPointsRoundingFlag() PointsRoundingFlagType {
	if o == nil || IsNil(o.PointsRoundingFlag) {
		var ret PointsRoundingFlagType
		return ret
	}
	return *o.PointsRoundingFlag
}

// GetPointsRoundingFlagOk returns a tuple with the PointsRoundingFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetPointsRoundingFlagOk() (*PointsRoundingFlagType, bool) {
	if o == nil || IsNil(o.PointsRoundingFlag) {
		return nil, false
	}
	return o.PointsRoundingFlag, true
}

// HasPointsRoundingFlag returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasPointsRoundingFlag() bool {
	if o != nil && !IsNil(o.PointsRoundingFlag) {
		return true
	}

	return false
}

// SetPointsRoundingFlag gets a reference to the given PointsRoundingFlagType and assigns it to the PointsRoundingFlag field.
func (o *MembershipTypeRulePointsDefinitionType) SetPointsRoundingFlag(v PointsRoundingFlagType) {
	o.PointsRoundingFlag = &v
}

// GetPercentagePoints returns the PercentagePoints field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetPercentagePoints() bool {
	if o == nil || IsNil(o.PercentagePoints) {
		var ret bool
		return ret
	}
	return *o.PercentagePoints
}

// GetPercentagePointsOk returns a tuple with the PercentagePoints field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetPercentagePointsOk() (*bool, bool) {
	if o == nil || IsNil(o.PercentagePoints) {
		return nil, false
	}
	return o.PercentagePoints, true
}

// HasPercentagePoints returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasPercentagePoints() bool {
	if o != nil && !IsNil(o.PercentagePoints) {
		return true
	}

	return false
}

// SetPercentagePoints gets a reference to the given bool and assigns it to the PercentagePoints field.
func (o *MembershipTypeRulePointsDefinitionType) SetPercentagePoints(v bool) {
	o.PercentagePoints = &v
}

// GetExcludePointProjection returns the ExcludePointProjection field value if set, zero value otherwise.
func (o *MembershipTypeRulePointsDefinitionType) GetExcludePointProjection() bool {
	if o == nil || IsNil(o.ExcludePointProjection) {
		var ret bool
		return ret
	}
	return *o.ExcludePointProjection
}

// GetExcludePointProjectionOk returns a tuple with the ExcludePointProjection field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MembershipTypeRulePointsDefinitionType) GetExcludePointProjectionOk() (*bool, bool) {
	if o == nil || IsNil(o.ExcludePointProjection) {
		return nil, false
	}
	return o.ExcludePointProjection, true
}

// HasExcludePointProjection returns a boolean if a field has been set.
func (o *MembershipTypeRulePointsDefinitionType) HasExcludePointProjection() bool {
	if o != nil && !IsNil(o.ExcludePointProjection) {
		return true
	}

	return false
}

// SetExcludePointProjection gets a reference to the given bool and assigns it to the ExcludePointProjection field.
func (o *MembershipTypeRulePointsDefinitionType) SetExcludePointProjection(v bool) {
	o.ExcludePointProjection = &v
}

func (o MembershipTypeRulePointsDefinitionType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MembershipTypeRulePointsDefinitionType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Points) {
		toSerialize["points"] = o.Points
	}
	if !IsNil(o.CostPerPoint) {
		toSerialize["costPerPoint"] = o.CostPerPoint
	}
	if !IsNil(o.RevenueUnits) {
		toSerialize["revenueUnits"] = o.RevenueUnits
	}
	if !IsNil(o.PointsRoundingFlag) {
		toSerialize["pointsRoundingFlag"] = o.PointsRoundingFlag
	}
	if !IsNil(o.PercentagePoints) {
		toSerialize["percentagePoints"] = o.PercentagePoints
	}
	if !IsNil(o.ExcludePointProjection) {
		toSerialize["excludePointProjection"] = o.ExcludePointProjection
	}
	return toSerialize, nil
}

type NullableMembershipTypeRulePointsDefinitionType struct {
	value *MembershipTypeRulePointsDefinitionType
	isSet bool
}

func (v NullableMembershipTypeRulePointsDefinitionType) Get() *MembershipTypeRulePointsDefinitionType {
	return v.value
}

func (v *NullableMembershipTypeRulePointsDefinitionType) Set(val *MembershipTypeRulePointsDefinitionType) {
	v.value = val
	v.isSet = true
}

func (v NullableMembershipTypeRulePointsDefinitionType) IsSet() bool {
	return v.isSet
}

func (v *NullableMembershipTypeRulePointsDefinitionType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMembershipTypeRulePointsDefinitionType(val *MembershipTypeRulePointsDefinitionType) *NullableMembershipTypeRulePointsDefinitionType {
	return &NullableMembershipTypeRulePointsDefinitionType{value: val, isSet: true}
}

func (v NullableMembershipTypeRulePointsDefinitionType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMembershipTypeRulePointsDefinitionType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

