/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the InterfaceControlArticleType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &InterfaceControlArticleType{}

// InterfaceControlArticleType struct for InterfaceControlArticleType
type InterfaceControlArticleType struct {
	// Article Number of a translation article setup.
	ArticleNo *string `json:"articleNo,omitempty"`
	// Description of a translation article setup.
	Description *string `json:"description,omitempty"`
	// Hotel Code of the hotel interface.
	HotelId *string `json:"hotelId,omitempty"`
	// Internal code of a translation article setup.
	InternalCode *int32 `json:"internalCode,omitempty"`
	// Logo of the hotel interface.
	Logo *string `json:"logo,omitempty"`
	// Selector of a translation article setup.
	Selector *string `json:"selector,omitempty"`
}

// NewInterfaceControlArticleType instantiates a new InterfaceControlArticleType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewInterfaceControlArticleType() *InterfaceControlArticleType {
	this := InterfaceControlArticleType{}
	return &this
}

// NewInterfaceControlArticleTypeWithDefaults instantiates a new InterfaceControlArticleType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewInterfaceControlArticleTypeWithDefaults() *InterfaceControlArticleType {
	this := InterfaceControlArticleType{}
	return &this
}

// GetArticleNo returns the ArticleNo field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetArticleNo() string {
	if o == nil || IsNil(o.ArticleNo) {
		var ret string
		return ret
	}
	return *o.ArticleNo
}

// GetArticleNoOk returns a tuple with the ArticleNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetArticleNoOk() (*string, bool) {
	if o == nil || IsNil(o.ArticleNo) {
		return nil, false
	}
	return o.ArticleNo, true
}

// HasArticleNo returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasArticleNo() bool {
	if o != nil && !IsNil(o.ArticleNo) {
		return true
	}

	return false
}

// SetArticleNo gets a reference to the given string and assigns it to the ArticleNo field.
func (o *InterfaceControlArticleType) SetArticleNo(v string) {
	o.ArticleNo = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *InterfaceControlArticleType) SetDescription(v string) {
	o.Description = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *InterfaceControlArticleType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInternalCode returns the InternalCode field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetInternalCode() int32 {
	if o == nil || IsNil(o.InternalCode) {
		var ret int32
		return ret
	}
	return *o.InternalCode
}

// GetInternalCodeOk returns a tuple with the InternalCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetInternalCodeOk() (*int32, bool) {
	if o == nil || IsNil(o.InternalCode) {
		return nil, false
	}
	return o.InternalCode, true
}

// HasInternalCode returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasInternalCode() bool {
	if o != nil && !IsNil(o.InternalCode) {
		return true
	}

	return false
}

// SetInternalCode gets a reference to the given int32 and assigns it to the InternalCode field.
func (o *InterfaceControlArticleType) SetInternalCode(v int32) {
	o.InternalCode = &v
}

// GetLogo returns the Logo field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetLogo() string {
	if o == nil || IsNil(o.Logo) {
		var ret string
		return ret
	}
	return *o.Logo
}

// GetLogoOk returns a tuple with the Logo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetLogoOk() (*string, bool) {
	if o == nil || IsNil(o.Logo) {
		return nil, false
	}
	return o.Logo, true
}

// HasLogo returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasLogo() bool {
	if o != nil && !IsNil(o.Logo) {
		return true
	}

	return false
}

// SetLogo gets a reference to the given string and assigns it to the Logo field.
func (o *InterfaceControlArticleType) SetLogo(v string) {
	o.Logo = &v
}

// GetSelector returns the Selector field value if set, zero value otherwise.
func (o *InterfaceControlArticleType) GetSelector() string {
	if o == nil || IsNil(o.Selector) {
		var ret string
		return ret
	}
	return *o.Selector
}

// GetSelectorOk returns a tuple with the Selector field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *InterfaceControlArticleType) GetSelectorOk() (*string, bool) {
	if o == nil || IsNil(o.Selector) {
		return nil, false
	}
	return o.Selector, true
}

// HasSelector returns a boolean if a field has been set.
func (o *InterfaceControlArticleType) HasSelector() bool {
	if o != nil && !IsNil(o.Selector) {
		return true
	}

	return false
}

// SetSelector gets a reference to the given string and assigns it to the Selector field.
func (o *InterfaceControlArticleType) SetSelector(v string) {
	o.Selector = &v
}

func (o InterfaceControlArticleType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o InterfaceControlArticleType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArticleNo) {
		toSerialize["articleNo"] = o.ArticleNo
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.InternalCode) {
		toSerialize["internalCode"] = o.InternalCode
	}
	if !IsNil(o.Logo) {
		toSerialize["logo"] = o.Logo
	}
	if !IsNil(o.Selector) {
		toSerialize["selector"] = o.Selector
	}
	return toSerialize, nil
}

type NullableInterfaceControlArticleType struct {
	value *InterfaceControlArticleType
	isSet bool
}

func (v NullableInterfaceControlArticleType) Get() *InterfaceControlArticleType {
	return v.value
}

func (v *NullableInterfaceControlArticleType) Set(val *InterfaceControlArticleType) {
	v.value = val
	v.isSet = true
}

func (v NullableInterfaceControlArticleType) IsSet() bool {
	return v.isSet
}

func (v *NullableInterfaceControlArticleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableInterfaceControlArticleType(val *InterfaceControlArticleType) *NullableInterfaceControlArticleType {
	return &NullableInterfaceControlArticleType{value: val, isSet: true}
}

func (v NullableInterfaceControlArticleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableInterfaceControlArticleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


