/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the YieldMarketTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &YieldMarketTypesCriteria{}

// YieldMarketTypesCriteria Request object for creating new Yield Market Types.
type YieldMarketTypesCriteria struct {
	// Yield Market Code.
	Code *string `json:"code,omitempty"`
	// Hotel code for which the yield market type belong to.
	HotelId *string `json:"hotelId,omitempty"`
	// Description for the yield market code.
	Description *string `json:"description,omitempty"`
	// If the yield market code does not return a result, this alternative yield market code is used instead.
	AlternativeCode *string `json:"alternativeCode,omitempty"`
	// Indicates the default yield market type.
	Default *bool `json:"default,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewYieldMarketTypesCriteria instantiates a new YieldMarketTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewYieldMarketTypesCriteria() *YieldMarketTypesCriteria {
	this := YieldMarketTypesCriteria{}
	return &this
}

// NewYieldMarketTypesCriteriaWithDefaults instantiates a new YieldMarketTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewYieldMarketTypesCriteriaWithDefaults() *YieldMarketTypesCriteria {
	this := YieldMarketTypesCriteria{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *YieldMarketTypesCriteria) SetCode(v string) {
	o.Code = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *YieldMarketTypesCriteria) SetHotelId(v string) {
	o.HotelId = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *YieldMarketTypesCriteria) SetDescription(v string) {
	o.Description = &v
}

// GetAlternativeCode returns the AlternativeCode field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetAlternativeCode() string {
	if o == nil || IsNil(o.AlternativeCode) {
		var ret string
		return ret
	}
	return *o.AlternativeCode
}

// GetAlternativeCodeOk returns a tuple with the AlternativeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetAlternativeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.AlternativeCode) {
		return nil, false
	}
	return o.AlternativeCode, true
}

// HasAlternativeCode returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasAlternativeCode() bool {
	if o != nil && !IsNil(o.AlternativeCode) {
		return true
	}

	return false
}

// SetAlternativeCode gets a reference to the given string and assigns it to the AlternativeCode field.
func (o *YieldMarketTypesCriteria) SetAlternativeCode(v string) {
	o.AlternativeCode = &v
}

// GetDefault returns the Default field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetDefault() bool {
	if o == nil || IsNil(o.Default) {
		var ret bool
		return ret
	}
	return *o.Default
}

// GetDefaultOk returns a tuple with the Default field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetDefaultOk() (*bool, bool) {
	if o == nil || IsNil(o.Default) {
		return nil, false
	}
	return o.Default, true
}

// HasDefault returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasDefault() bool {
	if o != nil && !IsNil(o.Default) {
		return true
	}

	return false
}

// SetDefault gets a reference to the given bool and assigns it to the Default field.
func (o *YieldMarketTypesCriteria) SetDefault(v bool) {
	o.Default = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *YieldMarketTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *YieldMarketTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *YieldMarketTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *YieldMarketTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *YieldMarketTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o YieldMarketTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o YieldMarketTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.AlternativeCode) {
		toSerialize["alternativeCode"] = o.AlternativeCode
	}
	if !IsNil(o.Default) {
		toSerialize["default"] = o.Default
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableYieldMarketTypesCriteria struct {
	value *YieldMarketTypesCriteria
	isSet bool
}

func (v NullableYieldMarketTypesCriteria) Get() *YieldMarketTypesCriteria {
	return v.value
}

func (v *NullableYieldMarketTypesCriteria) Set(val *YieldMarketTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableYieldMarketTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableYieldMarketTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableYieldMarketTypesCriteria(val *YieldMarketTypesCriteria) *NullableYieldMarketTypesCriteria {
	return &NullableYieldMarketTypesCriteria{value: val, isSet: true}
}

func (v NullableYieldMarketTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableYieldMarketTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


