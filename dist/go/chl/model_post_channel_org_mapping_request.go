/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the PostChannelOrgMappingRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostChannelOrgMappingRequest{}

// PostChannelOrgMappingRequest struct for PostChannelOrgMappingRequest
type PostChannelOrgMappingRequest struct {
	ChannelOrgMappingDetails *ChannelOrgMappingType `json:"channelOrgMappingDetails,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostChannelOrgMappingRequest instantiates a new PostChannelOrgMappingRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostChannelOrgMappingRequest() *PostChannelOrgMappingRequest {
	this := PostChannelOrgMappingRequest{}
	return &this
}

// NewPostChannelOrgMappingRequestWithDefaults instantiates a new PostChannelOrgMappingRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostChannelOrgMappingRequestWithDefaults() *PostChannelOrgMappingRequest {
	this := PostChannelOrgMappingRequest{}
	return &this
}

// GetChannelOrgMappingDetails returns the ChannelOrgMappingDetails field value if set, zero value otherwise.
func (o *PostChannelOrgMappingRequest) GetChannelOrgMappingDetails() ChannelOrgMappingType {
	if o == nil || IsNil(o.ChannelOrgMappingDetails) {
		var ret ChannelOrgMappingType
		return ret
	}
	return *o.ChannelOrgMappingDetails
}

// GetChannelOrgMappingDetailsOk returns a tuple with the ChannelOrgMappingDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostChannelOrgMappingRequest) GetChannelOrgMappingDetailsOk() (*ChannelOrgMappingType, bool) {
	if o == nil || IsNil(o.ChannelOrgMappingDetails) {
		return nil, false
	}
	return o.ChannelOrgMappingDetails, true
}

// HasChannelOrgMappingDetails returns a boolean if a field has been set.
func (o *PostChannelOrgMappingRequest) HasChannelOrgMappingDetails() bool {
	if o != nil && !IsNil(o.ChannelOrgMappingDetails) {
		return true
	}

	return false
}

// SetChannelOrgMappingDetails gets a reference to the given ChannelOrgMappingType and assigns it to the ChannelOrgMappingDetails field.
func (o *PostChannelOrgMappingRequest) SetChannelOrgMappingDetails(v ChannelOrgMappingType) {
	o.ChannelOrgMappingDetails = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostChannelOrgMappingRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostChannelOrgMappingRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostChannelOrgMappingRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostChannelOrgMappingRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostChannelOrgMappingRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostChannelOrgMappingRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostChannelOrgMappingRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostChannelOrgMappingRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostChannelOrgMappingRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostChannelOrgMappingRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelOrgMappingDetails) {
		toSerialize["channelOrgMappingDetails"] = o.ChannelOrgMappingDetails
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostChannelOrgMappingRequest struct {
	value *PostChannelOrgMappingRequest
	isSet bool
}

func (v NullablePostChannelOrgMappingRequest) Get() *PostChannelOrgMappingRequest {
	return v.value
}

func (v *NullablePostChannelOrgMappingRequest) Set(val *PostChannelOrgMappingRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostChannelOrgMappingRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostChannelOrgMappingRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostChannelOrgMappingRequest(val *PostChannelOrgMappingRequest) *NullablePostChannelOrgMappingRequest {
	return &NullablePostChannelOrgMappingRequest{value: val, isSet: true}
}

func (v NullablePostChannelOrgMappingRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostChannelOrgMappingRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


