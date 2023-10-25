/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ChangeTemplateHotelDetailsRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeTemplateHotelDetailsRequest{}

// ChangeTemplateHotelDetailsRequest struct for ChangeTemplateHotelDetailsRequest
type ChangeTemplateHotelDetailsRequest struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of template level hotel details.
	TemplateHotelDetails []TemplateHotelDetailType `json:"templateHotelDetails,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewChangeTemplateHotelDetailsRequest instantiates a new ChangeTemplateHotelDetailsRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeTemplateHotelDetailsRequest() *ChangeTemplateHotelDetailsRequest {
	this := ChangeTemplateHotelDetailsRequest{}
	return &this
}

// NewChangeTemplateHotelDetailsRequestWithDefaults instantiates a new ChangeTemplateHotelDetailsRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeTemplateHotelDetailsRequestWithDefaults() *ChangeTemplateHotelDetailsRequest {
	this := ChangeTemplateHotelDetailsRequest{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ChangeTemplateHotelDetailsRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateHotelDetailsRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ChangeTemplateHotelDetailsRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ChangeTemplateHotelDetailsRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateHotelDetails returns the TemplateHotelDetails field value if set, zero value otherwise.
func (o *ChangeTemplateHotelDetailsRequest) GetTemplateHotelDetails() []TemplateHotelDetailType {
	if o == nil || IsNil(o.TemplateHotelDetails) {
		var ret []TemplateHotelDetailType
		return ret
	}
	return o.TemplateHotelDetails
}

// GetTemplateHotelDetailsOk returns a tuple with the TemplateHotelDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateHotelDetailsRequest) GetTemplateHotelDetailsOk() ([]TemplateHotelDetailType, bool) {
	if o == nil || IsNil(o.TemplateHotelDetails) {
		return nil, false
	}
	return o.TemplateHotelDetails, true
}

// HasTemplateHotelDetails returns a boolean if a field has been set.
func (o *ChangeTemplateHotelDetailsRequest) HasTemplateHotelDetails() bool {
	if o != nil && !IsNil(o.TemplateHotelDetails) {
		return true
	}

	return false
}

// SetTemplateHotelDetails gets a reference to the given []TemplateHotelDetailType and assigns it to the TemplateHotelDetails field.
func (o *ChangeTemplateHotelDetailsRequest) SetTemplateHotelDetails(v []TemplateHotelDetailType) {
	o.TemplateHotelDetails = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ChangeTemplateHotelDetailsRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeTemplateHotelDetailsRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ChangeTemplateHotelDetailsRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ChangeTemplateHotelDetailsRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ChangeTemplateHotelDetailsRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeTemplateHotelDetailsRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateHotelDetails) {
		toSerialize["templateHotelDetails"] = o.TemplateHotelDetails
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableChangeTemplateHotelDetailsRequest struct {
	value *ChangeTemplateHotelDetailsRequest
	isSet bool
}

func (v NullableChangeTemplateHotelDetailsRequest) Get() *ChangeTemplateHotelDetailsRequest {
	return v.value
}

func (v *NullableChangeTemplateHotelDetailsRequest) Set(val *ChangeTemplateHotelDetailsRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeTemplateHotelDetailsRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeTemplateHotelDetailsRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeTemplateHotelDetailsRequest(val *ChangeTemplateHotelDetailsRequest) *NullableChangeTemplateHotelDetailsRequest {
	return &NullableChangeTemplateHotelDetailsRequest{value: val, isSet: true}
}

func (v NullableChangeTemplateHotelDetailsRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeTemplateHotelDetailsRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


