/*
OPERA Cloud Customer Relationship Management Outbound API

APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 20.99.99.99
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmoutbound

import (
	"encoding/json"
)

// checks if the StagedProfileTrxInfoTypeArticles type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StagedProfileTrxInfoTypeArticles{}

// StagedProfileTrxInfoTypeArticles The List of Articles defined for this transaction code, when using the Articles functionality.
type StagedProfileTrxInfoTypeArticles struct {
	Article []ArticleInfoType `json:"article,omitempty"`
}

// NewStagedProfileTrxInfoTypeArticles instantiates a new StagedProfileTrxInfoTypeArticles object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStagedProfileTrxInfoTypeArticles() *StagedProfileTrxInfoTypeArticles {
	this := StagedProfileTrxInfoTypeArticles{}
	return &this
}

// NewStagedProfileTrxInfoTypeArticlesWithDefaults instantiates a new StagedProfileTrxInfoTypeArticles object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStagedProfileTrxInfoTypeArticlesWithDefaults() *StagedProfileTrxInfoTypeArticles {
	this := StagedProfileTrxInfoTypeArticles{}
	return &this
}

// GetArticle returns the Article field value if set, zero value otherwise.
func (o *StagedProfileTrxInfoTypeArticles) GetArticle() []ArticleInfoType {
	if o == nil || IsNil(o.Article) {
		var ret []ArticleInfoType
		return ret
	}
	return o.Article
}

// GetArticleOk returns a tuple with the Article field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StagedProfileTrxInfoTypeArticles) GetArticleOk() ([]ArticleInfoType, bool) {
	if o == nil || IsNil(o.Article) {
		return nil, false
	}
	return o.Article, true
}

// HasArticle returns a boolean if a field has been set.
func (o *StagedProfileTrxInfoTypeArticles) HasArticle() bool {
	if o != nil && !IsNil(o.Article) {
		return true
	}

	return false
}

// SetArticle gets a reference to the given []ArticleInfoType and assigns it to the Article field.
func (o *StagedProfileTrxInfoTypeArticles) SetArticle(v []ArticleInfoType) {
	o.Article = v
}

func (o StagedProfileTrxInfoTypeArticles) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StagedProfileTrxInfoTypeArticles) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Article) {
		toSerialize["article"] = o.Article
	}
	return toSerialize, nil
}

type NullableStagedProfileTrxInfoTypeArticles struct {
	value *StagedProfileTrxInfoTypeArticles
	isSet bool
}

func (v NullableStagedProfileTrxInfoTypeArticles) Get() *StagedProfileTrxInfoTypeArticles {
	return v.value
}

func (v *NullableStagedProfileTrxInfoTypeArticles) Set(val *StagedProfileTrxInfoTypeArticles) {
	v.value = val
	v.isSet = true
}

func (v NullableStagedProfileTrxInfoTypeArticles) IsSet() bool {
	return v.isSet
}

func (v *NullableStagedProfileTrxInfoTypeArticles) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStagedProfileTrxInfoTypeArticles(val *StagedProfileTrxInfoTypeArticles) *NullableStagedProfileTrxInfoTypeArticles {
	return &NullableStagedProfileTrxInfoTypeArticles{value: val, isSet: true}
}

func (v NullableStagedProfileTrxInfoTypeArticles) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStagedProfileTrxInfoTypeArticles) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


