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

// checks if the PackageGroupType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageGroupType{}

// PackageGroupType Information about a package group common to all usages.
type PackageGroupType struct {
	// Package group Code.
	Code *string `json:"code,omitempty"`
	// Package group description.
	Description *string `json:"description,omitempty"`
	// Package Full Information
	MembersList []PackageCodeType `json:"membersList,omitempty"`
	// Can Package group be sold separately?
	SellSeparate *bool `json:"sellSeparate,omitempty"`
	// The short description of the package group.
	ShortDescription *string `json:"shortDescription,omitempty"`
	// Is Package group web bookable?
	WebBookable *bool `json:"webBookable,omitempty"`
}

// NewPackageGroupType instantiates a new PackageGroupType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageGroupType() *PackageGroupType {
	this := PackageGroupType{}
	return &this
}

// NewPackageGroupTypeWithDefaults instantiates a new PackageGroupType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageGroupTypeWithDefaults() *PackageGroupType {
	this := PackageGroupType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *PackageGroupType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *PackageGroupType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *PackageGroupType) SetCode(v string) {
	o.Code = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *PackageGroupType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *PackageGroupType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *PackageGroupType) SetDescription(v string) {
	o.Description = &v
}

// GetMembersList returns the MembersList field value if set, zero value otherwise.
func (o *PackageGroupType) GetMembersList() []PackageCodeType {
	if o == nil || IsNil(o.MembersList) {
		var ret []PackageCodeType
		return ret
	}
	return o.MembersList
}

// GetMembersListOk returns a tuple with the MembersList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetMembersListOk() ([]PackageCodeType, bool) {
	if o == nil || IsNil(o.MembersList) {
		return nil, false
	}
	return o.MembersList, true
}

// HasMembersList returns a boolean if a field has been set.
func (o *PackageGroupType) HasMembersList() bool {
	if o != nil && !IsNil(o.MembersList) {
		return true
	}

	return false
}

// SetMembersList gets a reference to the given []PackageCodeType and assigns it to the MembersList field.
func (o *PackageGroupType) SetMembersList(v []PackageCodeType) {
	o.MembersList = v
}

// GetSellSeparate returns the SellSeparate field value if set, zero value otherwise.
func (o *PackageGroupType) GetSellSeparate() bool {
	if o == nil || IsNil(o.SellSeparate) {
		var ret bool
		return ret
	}
	return *o.SellSeparate
}

// GetSellSeparateOk returns a tuple with the SellSeparate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetSellSeparateOk() (*bool, bool) {
	if o == nil || IsNil(o.SellSeparate) {
		return nil, false
	}
	return o.SellSeparate, true
}

// HasSellSeparate returns a boolean if a field has been set.
func (o *PackageGroupType) HasSellSeparate() bool {
	if o != nil && !IsNil(o.SellSeparate) {
		return true
	}

	return false
}

// SetSellSeparate gets a reference to the given bool and assigns it to the SellSeparate field.
func (o *PackageGroupType) SetSellSeparate(v bool) {
	o.SellSeparate = &v
}

// GetShortDescription returns the ShortDescription field value if set, zero value otherwise.
func (o *PackageGroupType) GetShortDescription() string {
	if o == nil || IsNil(o.ShortDescription) {
		var ret string
		return ret
	}
	return *o.ShortDescription
}

// GetShortDescriptionOk returns a tuple with the ShortDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetShortDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ShortDescription) {
		return nil, false
	}
	return o.ShortDescription, true
}

// HasShortDescription returns a boolean if a field has been set.
func (o *PackageGroupType) HasShortDescription() bool {
	if o != nil && !IsNil(o.ShortDescription) {
		return true
	}

	return false
}

// SetShortDescription gets a reference to the given string and assigns it to the ShortDescription field.
func (o *PackageGroupType) SetShortDescription(v string) {
	o.ShortDescription = &v
}

// GetWebBookable returns the WebBookable field value if set, zero value otherwise.
func (o *PackageGroupType) GetWebBookable() bool {
	if o == nil || IsNil(o.WebBookable) {
		var ret bool
		return ret
	}
	return *o.WebBookable
}

// GetWebBookableOk returns a tuple with the WebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageGroupType) GetWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebBookable) {
		return nil, false
	}
	return o.WebBookable, true
}

// HasWebBookable returns a boolean if a field has been set.
func (o *PackageGroupType) HasWebBookable() bool {
	if o != nil && !IsNil(o.WebBookable) {
		return true
	}

	return false
}

// SetWebBookable gets a reference to the given bool and assigns it to the WebBookable field.
func (o *PackageGroupType) SetWebBookable(v bool) {
	o.WebBookable = &v
}

func (o PackageGroupType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageGroupType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.MembersList) {
		toSerialize["membersList"] = o.MembersList
	}
	if !IsNil(o.SellSeparate) {
		toSerialize["sellSeparate"] = o.SellSeparate
	}
	if !IsNil(o.ShortDescription) {
		toSerialize["shortDescription"] = o.ShortDescription
	}
	if !IsNil(o.WebBookable) {
		toSerialize["webBookable"] = o.WebBookable
	}
	return toSerialize, nil
}

type NullablePackageGroupType struct {
	value *PackageGroupType
	isSet bool
}

func (v NullablePackageGroupType) Get() *PackageGroupType {
	return v.value
}

func (v *NullablePackageGroupType) Set(val *PackageGroupType) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageGroupType) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageGroupType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageGroupType(val *PackageGroupType) *NullablePackageGroupType {
	return &NullablePackageGroupType{value: val, isSet: true}
}

func (v NullablePackageGroupType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageGroupType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


