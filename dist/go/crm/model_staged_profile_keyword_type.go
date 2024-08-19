/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the StagedProfileKeywordType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StagedProfileKeywordType{}

// StagedProfileKeywordType struct for StagedProfileKeywordType
type StagedProfileKeywordType struct {
	// The error in keyword information in a staged profile with an invalid status
	ErrorDescription *string `json:"errorDescription,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// The keyword value.
	Keyword *string `json:"keyword,omitempty"`
	KeywordDetail *KeywordDetailType `json:"keywordDetail,omitempty"`
	// The type of keyword
	KeywordType *string `json:"keywordType,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
}

// NewStagedProfileKeywordType instantiates a new StagedProfileKeywordType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStagedProfileKeywordType() *StagedProfileKeywordType {
	this := StagedProfileKeywordType{}
	return &this
}

// NewStagedProfileKeywordTypeWithDefaults instantiates a new StagedProfileKeywordType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStagedProfileKeywordTypeWithDefaults() *StagedProfileKeywordType {
	this := StagedProfileKeywordType{}
	return &this
}

// GetErrorDescription returns the ErrorDescription field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetErrorDescription() string {
	if o == nil || IsNil(o.ErrorDescription) {
		var ret string
		return ret
	}
	return *o.ErrorDescription
}

// GetErrorDescriptionOk returns a tuple with the ErrorDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetErrorDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.ErrorDescription) {
		return nil, false
	}
	return o.ErrorDescription, true
}

// HasErrorDescription returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasErrorDescription() bool {
	if o != nil && !IsNil(o.ErrorDescription) {
		return true
	}

	return false
}

// SetErrorDescription gets a reference to the given string and assigns it to the ErrorDescription field.
func (o *StagedProfileKeywordType) SetErrorDescription(v string) {
	o.ErrorDescription = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *StagedProfileKeywordType) SetId(v string) {
	o.Id = &v
}

// GetKeyword returns the Keyword field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetKeyword() string {
	if o == nil || IsNil(o.Keyword) {
		var ret string
		return ret
	}
	return *o.Keyword
}

// GetKeywordOk returns a tuple with the Keyword field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetKeywordOk() (*string, bool) {
	if o == nil || IsNil(o.Keyword) {
		return nil, false
	}
	return o.Keyword, true
}

// HasKeyword returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasKeyword() bool {
	if o != nil && !IsNil(o.Keyword) {
		return true
	}

	return false
}

// SetKeyword gets a reference to the given string and assigns it to the Keyword field.
func (o *StagedProfileKeywordType) SetKeyword(v string) {
	o.Keyword = &v
}

// GetKeywordDetail returns the KeywordDetail field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetKeywordDetail() KeywordDetailType {
	if o == nil || IsNil(o.KeywordDetail) {
		var ret KeywordDetailType
		return ret
	}
	return *o.KeywordDetail
}

// GetKeywordDetailOk returns a tuple with the KeywordDetail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetKeywordDetailOk() (*KeywordDetailType, bool) {
	if o == nil || IsNil(o.KeywordDetail) {
		return nil, false
	}
	return o.KeywordDetail, true
}

// HasKeywordDetail returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasKeywordDetail() bool {
	if o != nil && !IsNil(o.KeywordDetail) {
		return true
	}

	return false
}

// SetKeywordDetail gets a reference to the given KeywordDetailType and assigns it to the KeywordDetail field.
func (o *StagedProfileKeywordType) SetKeywordDetail(v KeywordDetailType) {
	o.KeywordDetail = &v
}

// GetKeywordType returns the KeywordType field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetKeywordType() string {
	if o == nil || IsNil(o.KeywordType) {
		var ret string
		return ret
	}
	return *o.KeywordType
}

// GetKeywordTypeOk returns a tuple with the KeywordType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetKeywordTypeOk() (*string, bool) {
	if o == nil || IsNil(o.KeywordType) {
		return nil, false
	}
	return o.KeywordType, true
}

// HasKeywordType returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasKeywordType() bool {
	if o != nil && !IsNil(o.KeywordType) {
		return true
	}

	return false
}

// SetKeywordType gets a reference to the given string and assigns it to the KeywordType field.
func (o *StagedProfileKeywordType) SetKeywordType(v string) {
	o.KeywordType = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *StagedProfileKeywordType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileKeywordType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *StagedProfileKeywordType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *StagedProfileKeywordType) SetType(v string) {
	o.Type = &v
}

func (o StagedProfileKeywordType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StagedProfileKeywordType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ErrorDescription) {
		toSerialize["errorDescription"] = o.ErrorDescription
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Keyword) {
		toSerialize["keyword"] = o.Keyword
	}
	if !IsNil(o.KeywordDetail) {
		toSerialize["keywordDetail"] = o.KeywordDetail
	}
	if !IsNil(o.KeywordType) {
		toSerialize["keywordType"] = o.KeywordType
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	return toSerialize, nil
}

type NullableStagedProfileKeywordType struct {
	value *StagedProfileKeywordType
	isSet bool
}

func (v NullableStagedProfileKeywordType) Get() *StagedProfileKeywordType {
	return v.value
}

func (v *NullableStagedProfileKeywordType) Set(val *StagedProfileKeywordType) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileKeywordType) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileKeywordType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileKeywordType(val *StagedProfileKeywordType) *NullableStagedProfileKeywordType {
	return &NullableStagedProfileKeywordType{value: val, isSet: true}
}

func (v NullableStagedProfileKeywordType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileKeywordType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


