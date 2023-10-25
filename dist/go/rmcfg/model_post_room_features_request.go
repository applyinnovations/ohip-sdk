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

// checks if the PostRoomFeaturesRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostRoomFeaturesRequest{}

// PostRoomFeaturesRequest struct for PostRoomFeaturesRequest
type PostRoomFeaturesRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Room feature details.
	RoomFeatures []RoomFeatureConfigType `json:"roomFeatures,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostRoomFeaturesRequest instantiates a new PostRoomFeaturesRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostRoomFeaturesRequest() *PostRoomFeaturesRequest {
	this := PostRoomFeaturesRequest{}
	return &this
}

// NewPostRoomFeaturesRequestWithDefaults instantiates a new PostRoomFeaturesRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostRoomFeaturesRequestWithDefaults() *PostRoomFeaturesRequest {
	this := PostRoomFeaturesRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostRoomFeaturesRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostRoomFeaturesRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostRoomFeaturesRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostRoomFeaturesRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRoomFeatures returns the RoomFeatures field value if set, zero value otherwise.
func (o *PostRoomFeaturesRequest) GetRoomFeatures() []RoomFeatureConfigType {
	if o == nil || IsNil(o.RoomFeatures) {
		var ret []RoomFeatureConfigType
		return ret
	}
	return o.RoomFeatures
}

// GetRoomFeaturesOk returns a tuple with the RoomFeatures field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostRoomFeaturesRequest) GetRoomFeaturesOk() ([]RoomFeatureConfigType, bool) {
	if o == nil || IsNil(o.RoomFeatures) {
		return nil, false
	}
	return o.RoomFeatures, true
}

// HasRoomFeatures returns a boolean if a field has been set.
func (o *PostRoomFeaturesRequest) HasRoomFeatures() bool {
	if o != nil && !IsNil(o.RoomFeatures) {
		return true
	}

	return false
}

// SetRoomFeatures gets a reference to the given []RoomFeatureConfigType and assigns it to the RoomFeatures field.
func (o *PostRoomFeaturesRequest) SetRoomFeatures(v []RoomFeatureConfigType) {
	o.RoomFeatures = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostRoomFeaturesRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostRoomFeaturesRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostRoomFeaturesRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostRoomFeaturesRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostRoomFeaturesRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostRoomFeaturesRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RoomFeatures) {
		toSerialize["roomFeatures"] = o.RoomFeatures
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostRoomFeaturesRequest struct {
	value *PostRoomFeaturesRequest
	isSet bool
}

func (v NullablePostRoomFeaturesRequest) Get() *PostRoomFeaturesRequest {
	return v.value
}

func (v *NullablePostRoomFeaturesRequest) Set(val *PostRoomFeaturesRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostRoomFeaturesRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostRoomFeaturesRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostRoomFeaturesRequest(val *PostRoomFeaturesRequest) *NullablePostRoomFeaturesRequest {
	return &NullablePostRoomFeaturesRequest{value: val, isSet: true}
}

func (v NullablePostRoomFeaturesRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostRoomFeaturesRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


