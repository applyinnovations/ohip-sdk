/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ArticlesSale type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ArticlesSale{}

// ArticlesSale Details of the folio created.
type ArticlesSale struct {
	FolioWindowDetails []FolioWindowType `json:"folioWindowDetails,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewArticlesSale instantiates a new ArticlesSale object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewArticlesSale() *ArticlesSale {
	this := ArticlesSale{}
	return &this
}

// NewArticlesSaleWithDefaults instantiates a new ArticlesSale object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewArticlesSaleWithDefaults() *ArticlesSale {
	this := ArticlesSale{}
	return &this
}

// GetFolioWindowDetails returns the FolioWindowDetails field value if set, zero value otherwise.
func (o *ArticlesSale) GetFolioWindowDetails() []FolioWindowType {
	if o == nil || IsNil(o.FolioWindowDetails) {
		var ret []FolioWindowType
		return ret
	}
	return o.FolioWindowDetails
}

// GetFolioWindowDetailsOk returns a tuple with the FolioWindowDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesSale) GetFolioWindowDetailsOk() ([]FolioWindowType, bool) {
	if o == nil || IsNil(o.FolioWindowDetails) {
		return nil, false
	}
	return o.FolioWindowDetails, true
}

// HasFolioWindowDetails returns a boolean if a field has been set.
func (o *ArticlesSale) HasFolioWindowDetails() bool {
	if o != nil && !IsNil(o.FolioWindowDetails) {
		return true
	}

	return false
}

// SetFolioWindowDetails gets a reference to the given []FolioWindowType and assigns it to the FolioWindowDetails field.
func (o *ArticlesSale) SetFolioWindowDetails(v []FolioWindowType) {
	o.FolioWindowDetails = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ArticlesSale) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesSale) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ArticlesSale) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ArticlesSale) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ArticlesSale) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ArticlesSale) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ArticlesSale) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ArticlesSale) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ArticlesSale) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ArticlesSale) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FolioWindowDetails) {
		toSerialize["folioWindowDetails"] = o.FolioWindowDetails
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableArticlesSale struct {
	value *ArticlesSale
	isSet bool
}

func (v NullableArticlesSale) Get() *ArticlesSale {
	return v.value
}

func (v *NullableArticlesSale) Set(val *ArticlesSale) {
	v.value = val
	v.isSet = true
}

func (v NullableArticlesSale) IsSet() bool {
	return v.isSet
}

func (v *NullableArticlesSale) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableArticlesSale(val *ArticlesSale) *NullableArticlesSale {
	return &NullableArticlesSale{value: val, isSet: true}
}

func (v NullableArticlesSale) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableArticlesSale) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


