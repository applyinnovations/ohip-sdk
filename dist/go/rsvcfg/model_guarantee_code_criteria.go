/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the GuaranteeCodeCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GuaranteeCodeCriteria{}

// GuaranteeCodeCriteria Request object that holds the details of Guarantee Code to be created.
type GuaranteeCodeCriteria struct {
	GuaranteeCode *GuaranteeConfigType `json:"guaranteeCode,omitempty"`
	// Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
	HotelId *string `json:"hotelId,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuaranteeCodeCriteria instantiates a new GuaranteeCodeCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuaranteeCodeCriteria() *GuaranteeCodeCriteria {
	this := GuaranteeCodeCriteria{}
	return &this
}

// NewGuaranteeCodeCriteriaWithDefaults instantiates a new GuaranteeCodeCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteeCodeCriteriaWithDefaults() *GuaranteeCodeCriteria {
	this := GuaranteeCodeCriteria{}
	return &this
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *GuaranteeCodeCriteria) GetGuaranteeCode() GuaranteeConfigType {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret GuaranteeConfigType
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeCriteria) GetGuaranteeCodeOk() (*GuaranteeConfigType, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *GuaranteeCodeCriteria) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given GuaranteeConfigType and assigns it to the GuaranteeCode field.
func (o *GuaranteeCodeCriteria) SetGuaranteeCode(v GuaranteeConfigType) {
	o.GuaranteeCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *GuaranteeCodeCriteria) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeCriteria) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *GuaranteeCodeCriteria) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *GuaranteeCodeCriteria) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *GuaranteeCodeCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *GuaranteeCodeCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *GuaranteeCodeCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *GuaranteeCodeCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GuaranteeCodeCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *GuaranteeCodeCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *GuaranteeCodeCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o GuaranteeCodeCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GuaranteeCodeCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuaranteeCodeCriteria struct {
	value *GuaranteeCodeCriteria
	isSet bool
}

func (v NullableGuaranteeCodeCriteria) Get() *GuaranteeCodeCriteria {
	return v.value
}

func (v *NullableGuaranteeCodeCriteria) Set(val *GuaranteeCodeCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableGuaranteeCodeCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableGuaranteeCodeCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuaranteeCodeCriteria(val *GuaranteeCodeCriteria) *NullableGuaranteeCodeCriteria {
	return &NullableGuaranteeCodeCriteria{value: val, isSet: true}
}

func (v NullableGuaranteeCodeCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuaranteeCodeCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

