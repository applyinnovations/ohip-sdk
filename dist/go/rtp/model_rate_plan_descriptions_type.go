/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the RatePlanDescriptionsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RatePlanDescriptionsType{}

// RatePlanDescriptionsType Info URL, Short and Long Info details of the rate plan.
type RatePlanDescriptionsType struct {
	// Info URL is the location associated for more information about the rate plan.
	InfoURL *string `json:"infoURL,omitempty"`
	LongInfo *TranslationTextType2000 `json:"longInfo,omitempty"`
	// Rate information template which is configured for the hotel. This value can be used to populate the LongInfo of this rate plan, if desired.
	RateInfoTemplate *string `json:"rateInfoTemplate,omitempty"`
	ShortInfo *TranslationTextType2000 `json:"shortInfo,omitempty"`
}

// NewRatePlanDescriptionsType instantiates a new RatePlanDescriptionsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRatePlanDescriptionsType() *RatePlanDescriptionsType {
	this := RatePlanDescriptionsType{}
	return &this
}

// NewRatePlanDescriptionsTypeWithDefaults instantiates a new RatePlanDescriptionsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatePlanDescriptionsTypeWithDefaults() *RatePlanDescriptionsType {
	this := RatePlanDescriptionsType{}
	return &this
}

// GetInfoURL returns the InfoURL field value if set, zero value otherwise.
func (o *RatePlanDescriptionsType) GetInfoURL() string {
	if o == nil || IsNil(o.InfoURL) {
		var ret string
		return ret
	}
	return *o.InfoURL
}

// GetInfoURLOk returns a tuple with the InfoURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanDescriptionsType) GetInfoURLOk() (*string, bool) {
	if o == nil || IsNil(o.InfoURL) {
		return nil, false
	}
	return o.InfoURL, true
}

// HasInfoURL returns a boolean if a field has been set.
func (o *RatePlanDescriptionsType) HasInfoURL() bool {
	if o != nil && !IsNil(o.InfoURL) {
		return true
	}

	return false
}

// SetInfoURL gets a reference to the given string and assigns it to the InfoURL field.
func (o *RatePlanDescriptionsType) SetInfoURL(v string) {
	o.InfoURL = &v
}

// GetLongInfo returns the LongInfo field value if set, zero value otherwise.
func (o *RatePlanDescriptionsType) GetLongInfo() TranslationTextType2000 {
	if o == nil || IsNil(o.LongInfo) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.LongInfo
}

// GetLongInfoOk returns a tuple with the LongInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanDescriptionsType) GetLongInfoOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.LongInfo) {
		return nil, false
	}
	return o.LongInfo, true
}

// HasLongInfo returns a boolean if a field has been set.
func (o *RatePlanDescriptionsType) HasLongInfo() bool {
	if o != nil && !IsNil(o.LongInfo) {
		return true
	}

	return false
}

// SetLongInfo gets a reference to the given TranslationTextType2000 and assigns it to the LongInfo field.
func (o *RatePlanDescriptionsType) SetLongInfo(v TranslationTextType2000) {
	o.LongInfo = &v
}

// GetRateInfoTemplate returns the RateInfoTemplate field value if set, zero value otherwise.
func (o *RatePlanDescriptionsType) GetRateInfoTemplate() string {
	if o == nil || IsNil(o.RateInfoTemplate) {
		var ret string
		return ret
	}
	return *o.RateInfoTemplate
}

// GetRateInfoTemplateOk returns a tuple with the RateInfoTemplate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanDescriptionsType) GetRateInfoTemplateOk() (*string, bool) {
	if o == nil || IsNil(o.RateInfoTemplate) {
		return nil, false
	}
	return o.RateInfoTemplate, true
}

// HasRateInfoTemplate returns a boolean if a field has been set.
func (o *RatePlanDescriptionsType) HasRateInfoTemplate() bool {
	if o != nil && !IsNil(o.RateInfoTemplate) {
		return true
	}

	return false
}

// SetRateInfoTemplate gets a reference to the given string and assigns it to the RateInfoTemplate field.
func (o *RatePlanDescriptionsType) SetRateInfoTemplate(v string) {
	o.RateInfoTemplate = &v
}

// GetShortInfo returns the ShortInfo field value if set, zero value otherwise.
func (o *RatePlanDescriptionsType) GetShortInfo() TranslationTextType2000 {
	if o == nil || IsNil(o.ShortInfo) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.ShortInfo
}

// GetShortInfoOk returns a tuple with the ShortInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RatePlanDescriptionsType) GetShortInfoOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.ShortInfo) {
		return nil, false
	}
	return o.ShortInfo, true
}

// HasShortInfo returns a boolean if a field has been set.
func (o *RatePlanDescriptionsType) HasShortInfo() bool {
	if o != nil && !IsNil(o.ShortInfo) {
		return true
	}

	return false
}

// SetShortInfo gets a reference to the given TranslationTextType2000 and assigns it to the ShortInfo field.
func (o *RatePlanDescriptionsType) SetShortInfo(v TranslationTextType2000) {
	o.ShortInfo = &v
}

func (o RatePlanDescriptionsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RatePlanDescriptionsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.InfoURL) {
		toSerialize["infoURL"] = o.InfoURL
	}
	if !IsNil(o.LongInfo) {
		toSerialize["longInfo"] = o.LongInfo
	}
	if !IsNil(o.RateInfoTemplate) {
		toSerialize["rateInfoTemplate"] = o.RateInfoTemplate
	}
	if !IsNil(o.ShortInfo) {
		toSerialize["shortInfo"] = o.ShortInfo
	}
	return toSerialize, nil
}

type NullableRatePlanDescriptionsType struct {
	value *RatePlanDescriptionsType
	isSet bool
}

func (v NullableRatePlanDescriptionsType) Get() *RatePlanDescriptionsType {
	return v.value
}

func (v *NullableRatePlanDescriptionsType) Set(val *RatePlanDescriptionsType) {
	v.value = val
	v.isSet = true
}

func (v NullableRatePlanDescriptionsType) IsSet() bool {
	return v.isSet
}

func (v *NullableRatePlanDescriptionsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRatePlanDescriptionsType(val *RatePlanDescriptionsType) *NullableRatePlanDescriptionsType {
	return &NullableRatePlanDescriptionsType{value: val, isSet: true}
}

func (v NullableRatePlanDescriptionsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRatePlanDescriptionsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


