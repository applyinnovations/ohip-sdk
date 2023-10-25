/*
OPERA Cloud Availability Extension API

APIs to provide extended features for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br />Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p>This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2022 Oracle and/or its affiliates.</p><br /><br /> Compatible with OPERA Cloud release 23.2.0.0.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2.0.0
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package parext

import (
	"encoding/json"
)

// checks if the CorporateRatesSearchType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CorporateRatesSearchType{}

// CorporateRatesSearchType struct for CorporateRatesSearchType
type CorporateRatesSearchType struct {
	// Corporate Id
	CorporateId *string `json:"corporateId,omitempty"`
	// Rate Plan Set code to filter Rate Plans based on the predefined set.
	RatePlanSets []string `json:"ratePlanSets,omitempty"`
}

// NewCorporateRatesSearchType instantiates a new CorporateRatesSearchType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCorporateRatesSearchType() *CorporateRatesSearchType {
	this := CorporateRatesSearchType{}
	return &this
}

// NewCorporateRatesSearchTypeWithDefaults instantiates a new CorporateRatesSearchType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCorporateRatesSearchTypeWithDefaults() *CorporateRatesSearchType {
	this := CorporateRatesSearchType{}
	return &this
}

// GetCorporateId returns the CorporateId field value if set, zero value otherwise.
func (o *CorporateRatesSearchType) GetCorporateId() string {
	if o == nil || IsNil(o.CorporateId) {
		var ret string
		return ret
	}
	return *o.CorporateId
}

// GetCorporateIdOk returns a tuple with the CorporateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateRatesSearchType) GetCorporateIdOk() (*string, bool) {
	if o == nil || IsNil(o.CorporateId) {
		return nil, false
	}
	return o.CorporateId, true
}

// HasCorporateId returns a boolean if a field has been set.
func (o *CorporateRatesSearchType) HasCorporateId() bool {
	if o != nil && !IsNil(o.CorporateId) {
		return true
	}

	return false
}

// SetCorporateId gets a reference to the given string and assigns it to the CorporateId field.
func (o *CorporateRatesSearchType) SetCorporateId(v string) {
	o.CorporateId = &v
}

// GetRatePlanSets returns the RatePlanSets field value if set, zero value otherwise.
func (o *CorporateRatesSearchType) GetRatePlanSets() []string {
	if o == nil || IsNil(o.RatePlanSets) {
		var ret []string
		return ret
	}
	return o.RatePlanSets
}

// GetRatePlanSetsOk returns a tuple with the RatePlanSets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateRatesSearchType) GetRatePlanSetsOk() ([]string, bool) {
	if o == nil || IsNil(o.RatePlanSets) {
		return nil, false
	}
	return o.RatePlanSets, true
}

// HasRatePlanSets returns a boolean if a field has been set.
func (o *CorporateRatesSearchType) HasRatePlanSets() bool {
	if o != nil && !IsNil(o.RatePlanSets) {
		return true
	}

	return false
}

// SetRatePlanSets gets a reference to the given []string and assigns it to the RatePlanSets field.
func (o *CorporateRatesSearchType) SetRatePlanSets(v []string) {
	o.RatePlanSets = v
}

func (o CorporateRatesSearchType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CorporateRatesSearchType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CorporateId) {
		toSerialize["corporateId"] = o.CorporateId
	}
	if !IsNil(o.RatePlanSets) {
		toSerialize["ratePlanSets"] = o.RatePlanSets
	}
	return toSerialize, nil
}

type NullableCorporateRatesSearchType struct {
	value *CorporateRatesSearchType
	isSet bool
}

func (v NullableCorporateRatesSearchType) Get() *CorporateRatesSearchType {
	return v.value
}

func (v *NullableCorporateRatesSearchType) Set(val *CorporateRatesSearchType) {
	v.value = val
	v.isSet = true
}

func (v NullableCorporateRatesSearchType) IsSet() bool {
	return v.isSet
}

func (v *NullableCorporateRatesSearchType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCorporateRatesSearchType(val *CorporateRatesSearchType) *NullableCorporateRatesSearchType {
	return &NullableCorporateRatesSearchType{value: val, isSet: true}
}

func (v NullableCorporateRatesSearchType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCorporateRatesSearchType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


