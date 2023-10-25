/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the ConfigTemplateAmenityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfigTemplateAmenityType{}

// ConfigTemplateAmenityType Base details used for amenities.
type ConfigTemplateAmenityType struct {
	AmenityType *AmenityTypeType `json:"amenityType,omitempty"`
	// The date the amenity is scheduled to become active.
	BeginDate *string `json:"beginDate,omitempty"`
	// The comments about amenity of the hotel.
	Comments *string `json:"comments,omitempty"`
	// The description about amenity of the hotel.
	Description *string `json:"description,omitempty"`
	// The date the amenity is scheduled to become inactive.
	EndDate *string `json:"endDate,omitempty"`
	// Specifies the feature code (aka amenity code).
	FeatureCode *string `json:"featureCode,omitempty"`
	// The new chain code which is used in the change method.
	NewChainCode *string `json:"newChainCode,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
}

// NewConfigTemplateAmenityType instantiates a new ConfigTemplateAmenityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfigTemplateAmenityType() *ConfigTemplateAmenityType {
	this := ConfigTemplateAmenityType{}
	return &this
}

// NewConfigTemplateAmenityTypeWithDefaults instantiates a new ConfigTemplateAmenityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfigTemplateAmenityTypeWithDefaults() *ConfigTemplateAmenityType {
	this := ConfigTemplateAmenityType{}
	return &this
}

// GetAmenityType returns the AmenityType field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetAmenityType() AmenityTypeType {
	if o == nil || IsNil(o.AmenityType) {
		var ret AmenityTypeType
		return ret
	}
	return *o.AmenityType
}

// GetAmenityTypeOk returns a tuple with the AmenityType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetAmenityTypeOk() (*AmenityTypeType, bool) {
	if o == nil || IsNil(o.AmenityType) {
		return nil, false
	}
	return o.AmenityType, true
}

// HasAmenityType returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasAmenityType() bool {
	if o != nil && !IsNil(o.AmenityType) {
		return true
	}

	return false
}

// SetAmenityType gets a reference to the given AmenityTypeType and assigns it to the AmenityType field.
func (o *ConfigTemplateAmenityType) SetAmenityType(v AmenityTypeType) {
	o.AmenityType = &v
}

// GetBeginDate returns the BeginDate field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetBeginDate() string {
	if o == nil || IsNil(o.BeginDate) {
		var ret string
		return ret
	}
	return *o.BeginDate
}

// GetBeginDateOk returns a tuple with the BeginDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetBeginDateOk() (*string, bool) {
	if o == nil || IsNil(o.BeginDate) {
		return nil, false
	}
	return o.BeginDate, true
}

// HasBeginDate returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasBeginDate() bool {
	if o != nil && !IsNil(o.BeginDate) {
		return true
	}

	return false
}

// SetBeginDate gets a reference to the given string and assigns it to the BeginDate field.
func (o *ConfigTemplateAmenityType) SetBeginDate(v string) {
	o.BeginDate = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *ConfigTemplateAmenityType) SetComments(v string) {
	o.Comments = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ConfigTemplateAmenityType) SetDescription(v string) {
	o.Description = &v
}

// GetEndDate returns the EndDate field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetEndDate() string {
	if o == nil || IsNil(o.EndDate) {
		var ret string
		return ret
	}
	return *o.EndDate
}

// GetEndDateOk returns a tuple with the EndDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetEndDateOk() (*string, bool) {
	if o == nil || IsNil(o.EndDate) {
		return nil, false
	}
	return o.EndDate, true
}

// HasEndDate returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasEndDate() bool {
	if o != nil && !IsNil(o.EndDate) {
		return true
	}

	return false
}

// SetEndDate gets a reference to the given string and assigns it to the EndDate field.
func (o *ConfigTemplateAmenityType) SetEndDate(v string) {
	o.EndDate = &v
}

// GetFeatureCode returns the FeatureCode field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetFeatureCode() string {
	if o == nil || IsNil(o.FeatureCode) {
		var ret string
		return ret
	}
	return *o.FeatureCode
}

// GetFeatureCodeOk returns a tuple with the FeatureCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetFeatureCodeOk() (*string, bool) {
	if o == nil || IsNil(o.FeatureCode) {
		return nil, false
	}
	return o.FeatureCode, true
}

// HasFeatureCode returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasFeatureCode() bool {
	if o != nil && !IsNil(o.FeatureCode) {
		return true
	}

	return false
}

// SetFeatureCode gets a reference to the given string and assigns it to the FeatureCode field.
func (o *ConfigTemplateAmenityType) SetFeatureCode(v string) {
	o.FeatureCode = &v
}

// GetNewChainCode returns the NewChainCode field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetNewChainCode() string {
	if o == nil || IsNil(o.NewChainCode) {
		var ret string
		return ret
	}
	return *o.NewChainCode
}

// GetNewChainCodeOk returns a tuple with the NewChainCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetNewChainCodeOk() (*string, bool) {
	if o == nil || IsNil(o.NewChainCode) {
		return nil, false
	}
	return o.NewChainCode, true
}

// HasNewChainCode returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasNewChainCode() bool {
	if o != nil && !IsNil(o.NewChainCode) {
		return true
	}

	return false
}

// SetNewChainCode gets a reference to the given string and assigns it to the NewChainCode field.
func (o *ConfigTemplateAmenityType) SetNewChainCode(v string) {
	o.NewChainCode = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *ConfigTemplateAmenityType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfigTemplateAmenityType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *ConfigTemplateAmenityType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *ConfigTemplateAmenityType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

func (o ConfigTemplateAmenityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfigTemplateAmenityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AmenityType) {
		toSerialize["amenityType"] = o.AmenityType
	}
	if !IsNil(o.BeginDate) {
		toSerialize["beginDate"] = o.BeginDate
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.EndDate) {
		toSerialize["endDate"] = o.EndDate
	}
	if !IsNil(o.FeatureCode) {
		toSerialize["featureCode"] = o.FeatureCode
	}
	if !IsNil(o.NewChainCode) {
		toSerialize["newChainCode"] = o.NewChainCode
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	return toSerialize, nil
}

type NullableConfigTemplateAmenityType struct {
	value *ConfigTemplateAmenityType
	isSet bool
}

func (v NullableConfigTemplateAmenityType) Get() *ConfigTemplateAmenityType {
	return v.value
}

func (v *NullableConfigTemplateAmenityType) Set(val *ConfigTemplateAmenityType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfigTemplateAmenityType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfigTemplateAmenityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfigTemplateAmenityType(val *ConfigTemplateAmenityType) *NullableConfigTemplateAmenityType {
	return &NullableConfigTemplateAmenityType{value: val, isSet: true}
}

func (v NullableConfigTemplateAmenityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfigTemplateAmenityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


