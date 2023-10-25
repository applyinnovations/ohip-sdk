/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the ChangeBuildingGroupsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeBuildingGroupsRequest{}

// ChangeBuildingGroupsRequest struct for ChangeBuildingGroupsRequest
type ChangeBuildingGroupsRequest struct {
	// Collection of Building Group details.
	BuildingGroups []BuildingGroupType `json:"buildingGroups,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeBuildingGroupsRequest instantiates a new ChangeBuildingGroupsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeBuildingGroupsRequest() *ChangeBuildingGroupsRequest {
	this := ChangeBuildingGroupsRequest{}
	return &this
}

// NewChangeBuildingGroupsRequestWithDefaults instantiates a new ChangeBuildingGroupsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeBuildingGroupsRequestWithDefaults() *ChangeBuildingGroupsRequest {
	this := ChangeBuildingGroupsRequest{}
	return &this
}

// GetBuildingGroups returns the BuildingGroups field value if set, zero value otherwise.
func (o *ChangeBuildingGroupsRequest) GetBuildingGroups() []BuildingGroupType {
	if o == nil || IsNil(o.BuildingGroups) {
		var ret []BuildingGroupType
		return ret
	}
	return o.BuildingGroups
}

// GetBuildingGroupsOk returns a tuple with the BuildingGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeBuildingGroupsRequest) GetBuildingGroupsOk() ([]BuildingGroupType, bool) {
	if o == nil || IsNil(o.BuildingGroups) {
		return nil, false
	}
	return o.BuildingGroups, true
}

// HasBuildingGroups returns a boolean if a field has been set.
func (o *ChangeBuildingGroupsRequest) HasBuildingGroups() bool {
	if o != nil && !IsNil(o.BuildingGroups) {
		return true
	}

	return false
}

// SetBuildingGroups gets a reference to the given []BuildingGroupType and assigns it to the BuildingGroups field.
func (o *ChangeBuildingGroupsRequest) SetBuildingGroups(v []BuildingGroupType) {
	o.BuildingGroups = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeBuildingGroupsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeBuildingGroupsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeBuildingGroupsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeBuildingGroupsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeBuildingGroupsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeBuildingGroupsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeBuildingGroupsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeBuildingGroupsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeBuildingGroupsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeBuildingGroupsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BuildingGroups) {
		toSerialize["buildingGroups"] = o.BuildingGroups
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeBuildingGroupsRequest struct {
	value *ChangeBuildingGroupsRequest
	isSet bool
}

func (v NullableChangeBuildingGroupsRequest) Get() *ChangeBuildingGroupsRequest {
	return v.value
}

func (v *NullableChangeBuildingGroupsRequest) Set(val *ChangeBuildingGroupsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeBuildingGroupsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeBuildingGroupsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeBuildingGroupsRequest(val *ChangeBuildingGroupsRequest) *NullableChangeBuildingGroupsRequest {
	return &NullableChangeBuildingGroupsRequest{value: val, isSet: true}
}

func (v NullableChangeBuildingGroupsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeBuildingGroupsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


