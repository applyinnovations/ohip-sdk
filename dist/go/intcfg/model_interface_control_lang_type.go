/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the InterfaceControlLangType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceControlLangType{}

// InterfaceControlLangType struct for InterfaceControlLangType
type InterfaceControlLangType struct {
	// Hotel Code of the hotel interface.
	HotelId *string `json:"hotelId,omitempty"`
	// Logo of the hotel interface.
	Logo *string `json:"logo,omitempty"`
	// Internal code of a translation language setup.
	InternalCode *int32 `json:"internalCode,omitempty"`
	// Selector of a translation language setup.
	Selector *string `json:"selector,omitempty"`
	// Language code of a translation language setup.
	LanguageCode *string `json:"languageCode,omitempty"`
}

// NewInterfaceControlLangType instantiates a new InterfaceControlLangType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceControlLangType() *InterfaceControlLangType {
	this := InterfaceControlLangType{}
	return &this
}

// NewInterfaceControlLangTypeWithDefaults instantiates a new InterfaceControlLangType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceControlLangTypeWithDefaults() *InterfaceControlLangType {
	this := InterfaceControlLangType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *InterfaceControlLangType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlLangType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *InterfaceControlLangType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *InterfaceControlLangType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLogo returns the Logo field value if set, zero value otherwise.
func (o *InterfaceControlLangType) GetLogo() string {
	if o == nil || IsNil(o.Logo) {
		var ret string
		return ret
	}
	return *o.Logo
}

// GetLogoOk returns a tuple with the Logo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlLangType) GetLogoOk() (*string, bool) {
	if o == nil || IsNil(o.Logo) {
		return nil, false
	}
	return o.Logo, true
}

// HasLogo returns a boolean if a field has been set.
func (o *InterfaceControlLangType) HasLogo() bool {
	if o != nil && !IsNil(o.Logo) {
		return true
	}

	return false
}

// SetLogo gets a reference to the given string and assigns it to the Logo field.
func (o *InterfaceControlLangType) SetLogo(v string) {
	o.Logo = &v
}

// GetInternalCode returns the InternalCode field value if set, zero value otherwise.
func (o *InterfaceControlLangType) GetInternalCode() int32 {
	if o == nil || IsNil(o.InternalCode) {
		var ret int32
		return ret
	}
	return *o.InternalCode
}

// GetInternalCodeOk returns a tuple with the InternalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlLangType) GetInternalCodeOk() (*int32, bool) {
	if o == nil || IsNil(o.InternalCode) {
		return nil, false
	}
	return o.InternalCode, true
}

// HasInternalCode returns a boolean if a field has been set.
func (o *InterfaceControlLangType) HasInternalCode() bool {
	if o != nil && !IsNil(o.InternalCode) {
		return true
	}

	return false
}

// SetInternalCode gets a reference to the given int32 and assigns it to the InternalCode field.
func (o *InterfaceControlLangType) SetInternalCode(v int32) {
	o.InternalCode = &v
}

// GetSelector returns the Selector field value if set, zero value otherwise.
func (o *InterfaceControlLangType) GetSelector() string {
	if o == nil || IsNil(o.Selector) {
		var ret string
		return ret
	}
	return *o.Selector
}

// GetSelectorOk returns a tuple with the Selector field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlLangType) GetSelectorOk() (*string, bool) {
	if o == nil || IsNil(o.Selector) {
		return nil, false
	}
	return o.Selector, true
}

// HasSelector returns a boolean if a field has been set.
func (o *InterfaceControlLangType) HasSelector() bool {
	if o != nil && !IsNil(o.Selector) {
		return true
	}

	return false
}

// SetSelector gets a reference to the given string and assigns it to the Selector field.
func (o *InterfaceControlLangType) SetSelector(v string) {
	o.Selector = &v
}

// GetLanguageCode returns the LanguageCode field value if set, zero value otherwise.
func (o *InterfaceControlLangType) GetLanguageCode() string {
	if o == nil || IsNil(o.LanguageCode) {
		var ret string
		return ret
	}
	return *o.LanguageCode
}

// GetLanguageCodeOk returns a tuple with the LanguageCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlLangType) GetLanguageCodeOk() (*string, bool) {
	if o == nil || IsNil(o.LanguageCode) {
		return nil, false
	}
	return o.LanguageCode, true
}

// HasLanguageCode returns a boolean if a field has been set.
func (o *InterfaceControlLangType) HasLanguageCode() bool {
	if o != nil && !IsNil(o.LanguageCode) {
		return true
	}

	return false
}

// SetLanguageCode gets a reference to the given string and assigns it to the LanguageCode field.
func (o *InterfaceControlLangType) SetLanguageCode(v string) {
	o.LanguageCode = &v
}

func (o InterfaceControlLangType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceControlLangType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Logo) {
		toSerialize["logo"] = o.Logo
	}
	if !IsNil(o.InternalCode) {
		toSerialize["internalCode"] = o.InternalCode
	}
	if !IsNil(o.Selector) {
		toSerialize["selector"] = o.Selector
	}
	if !IsNil(o.LanguageCode) {
		toSerialize["languageCode"] = o.LanguageCode
	}
	return toSerialize, nil
}

type NullableInterfaceControlLangType struct {
	value *InterfaceControlLangType
	isSet bool
}

func (v NullableInterfaceControlLangType) Get() *InterfaceControlLangType {
	return v.value
}

func (v *NullableInterfaceControlLangType) Set(val *InterfaceControlLangType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceControlLangType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceControlLangType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceControlLangType(val *InterfaceControlLangType) *NullableInterfaceControlLangType {
	return &NullableInterfaceControlLangType{value: val, isSet: true}
}

func (v NullableInterfaceControlLangType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceControlLangType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

