/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the FolioTypeLegendMappingConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTypeLegendMappingConfigType{}

// FolioTypeLegendMappingConfigType Folio type legened mapping information.
type FolioTypeLegendMappingConfigType struct {
	// Folio type attached to the legend.
	FolioType *string `json:"folioType,omitempty"`
	// Folio type description attached to the legend.
	FolioTypeDescription *string `json:"folioTypeDescription,omitempty"`
	// Property associated with folio type legend mapping
	HotelId *string `json:"hotelId,omitempty"`
	// Legend code to which folio types attached.
	LegendCode *string `json:"legendCode,omitempty"`
}

// NewFolioTypeLegendMappingConfigType instantiates a new FolioTypeLegendMappingConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTypeLegendMappingConfigType() *FolioTypeLegendMappingConfigType {
	this := FolioTypeLegendMappingConfigType{}
	return &this
}

// NewFolioTypeLegendMappingConfigTypeWithDefaults instantiates a new FolioTypeLegendMappingConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTypeLegendMappingConfigTypeWithDefaults() *FolioTypeLegendMappingConfigType {
	this := FolioTypeLegendMappingConfigType{}
	return &this
}

// GetFolioType returns the FolioType field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigType) GetFolioType() string {
	if o == nil || IsNil(o.FolioType) {
		var ret string
		return ret
	}
	return *o.FolioType
}

// GetFolioTypeOk returns a tuple with the FolioType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigType) GetFolioTypeOk() (*string, bool) {
	if o == nil || IsNil(o.FolioType) {
		return nil, false
	}
	return o.FolioType, true
}

// HasFolioType returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigType) HasFolioType() bool {
	if o != nil && !IsNil(o.FolioType) {
		return true
	}

	return false
}

// SetFolioType gets a reference to the given string and assigns it to the FolioType field.
func (o *FolioTypeLegendMappingConfigType) SetFolioType(v string) {
	o.FolioType = &v
}

// GetFolioTypeDescription returns the FolioTypeDescription field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigType) GetFolioTypeDescription() string {
	if o == nil || IsNil(o.FolioTypeDescription) {
		var ret string
		return ret
	}
	return *o.FolioTypeDescription
}

// GetFolioTypeDescriptionOk returns a tuple with the FolioTypeDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigType) GetFolioTypeDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.FolioTypeDescription) {
		return nil, false
	}
	return o.FolioTypeDescription, true
}

// HasFolioTypeDescription returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigType) HasFolioTypeDescription() bool {
	if o != nil && !IsNil(o.FolioTypeDescription) {
		return true
	}

	return false
}

// SetFolioTypeDescription gets a reference to the given string and assigns it to the FolioTypeDescription field.
func (o *FolioTypeLegendMappingConfigType) SetFolioTypeDescription(v string) {
	o.FolioTypeDescription = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *FolioTypeLegendMappingConfigType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLegendCode returns the LegendCode field value if set, zero value otherwise.
func (o *FolioTypeLegendMappingConfigType) GetLegendCode() string {
	if o == nil || IsNil(o.LegendCode) {
		var ret string
		return ret
	}
	return *o.LegendCode
}

// GetLegendCodeOk returns a tuple with the LegendCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTypeLegendMappingConfigType) GetLegendCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LegendCode) {
		return nil, false
	}
	return o.LegendCode, true
}

// HasLegendCode returns a boolean if a field has been set.
func (o *FolioTypeLegendMappingConfigType) HasLegendCode() bool {
	if o != nil && !IsNil(o.LegendCode) {
		return true
	}

	return false
}

// SetLegendCode gets a reference to the given string and assigns it to the LegendCode field.
func (o *FolioTypeLegendMappingConfigType) SetLegendCode(v string) {
	o.LegendCode = &v
}

func (o FolioTypeLegendMappingConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTypeLegendMappingConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioType) {
		toSerialize["folioType"] = o.FolioType
	}
	if !IsNil(o.FolioTypeDescription) {
		toSerialize["folioTypeDescription"] = o.FolioTypeDescription
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.LegendCode) {
		toSerialize["legendCode"] = o.LegendCode
	}
	return toSerialize, nil
}

type NullableFolioTypeLegendMappingConfigType struct {
	value *FolioTypeLegendMappingConfigType
	isSet bool
}

func (v NullableFolioTypeLegendMappingConfigType) Get() *FolioTypeLegendMappingConfigType {
	return v.value
}

func (v *NullableFolioTypeLegendMappingConfigType) Set(val *FolioTypeLegendMappingConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTypeLegendMappingConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTypeLegendMappingConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTypeLegendMappingConfigType(val *FolioTypeLegendMappingConfigType) *NullableFolioTypeLegendMappingConfigType {
	return &NullableFolioTypeLegendMappingConfigType{value: val, isSet: true}
}

func (v NullableFolioTypeLegendMappingConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTypeLegendMappingConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

