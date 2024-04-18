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

// checks if the RelationshipCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &RelationshipCriteriaType{}

// RelationshipCriteriaType Contains Criteria Information for a profile relationship.
type RelationshipCriteriaType struct {
	// Indicates if this relationship is the primary relationship.
	Primary *bool `json:"primary,omitempty"`
	SourceProfileType *ProfileTypeType `json:"sourceProfileType,omitempty"`
	// Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
	SourceRelation *string `json:"sourceRelation,omitempty"`
	// Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true.
	SourceRelationDescription *string `json:"sourceRelationDescription,omitempty"`
	TargetProfileType *ProfileTypeType `json:"targetProfileType,omitempty"`
	// Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile).
	TargetRelation *string `json:"targetRelation,omitempty"`
	// Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile).
	TargetRelationDescription *string `json:"targetRelationDescription,omitempty"`
}

// NewRelationshipCriteriaType instantiates a new RelationshipCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRelationshipCriteriaType() *RelationshipCriteriaType {
	this := RelationshipCriteriaType{}
	return &this
}

// NewRelationshipCriteriaTypeWithDefaults instantiates a new RelationshipCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRelationshipCriteriaTypeWithDefaults() *RelationshipCriteriaType {
	this := RelationshipCriteriaType{}
	return &this
}

// GetPrimary returns the Primary field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetPrimary() bool {
	if o == nil || IsNil(o.Primary) {
		var ret bool
		return ret
	}
	return *o.Primary
}

// GetPrimaryOk returns a tuple with the Primary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetPrimaryOk() (*bool, bool) {
	if o == nil || IsNil(o.Primary) {
		return nil, false
	}
	return o.Primary, true
}

// HasPrimary returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasPrimary() bool {
	if o != nil && !IsNil(o.Primary) {
		return true
	}

	return false
}

// SetPrimary gets a reference to the given bool and assigns it to the Primary field.
func (o *RelationshipCriteriaType) SetPrimary(v bool) {
	o.Primary = &v
}

// GetSourceProfileType returns the SourceProfileType field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetSourceProfileType() ProfileTypeType {
	if o == nil || IsNil(o.SourceProfileType) {
		var ret ProfileTypeType
		return ret
	}
	return *o.SourceProfileType
}

// GetSourceProfileTypeOk returns a tuple with the SourceProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetSourceProfileTypeOk() (*ProfileTypeType, bool) {
	if o == nil || IsNil(o.SourceProfileType) {
		return nil, false
	}
	return o.SourceProfileType, true
}

// HasSourceProfileType returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasSourceProfileType() bool {
	if o != nil && !IsNil(o.SourceProfileType) {
		return true
	}

	return false
}

// SetSourceProfileType gets a reference to the given ProfileTypeType and assigns it to the SourceProfileType field.
func (o *RelationshipCriteriaType) SetSourceProfileType(v ProfileTypeType) {
	o.SourceProfileType = &v
}

// GetSourceRelation returns the SourceRelation field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetSourceRelation() string {
	if o == nil || IsNil(o.SourceRelation) {
		var ret string
		return ret
	}
	return *o.SourceRelation
}

// GetSourceRelationOk returns a tuple with the SourceRelation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetSourceRelationOk() (*string, bool) {
	if o == nil || IsNil(o.SourceRelation) {
		return nil, false
	}
	return o.SourceRelation, true
}

// HasSourceRelation returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasSourceRelation() bool {
	if o != nil && !IsNil(o.SourceRelation) {
		return true
	}

	return false
}

// SetSourceRelation gets a reference to the given string and assigns it to the SourceRelation field.
func (o *RelationshipCriteriaType) SetSourceRelation(v string) {
	o.SourceRelation = &v
}

// GetSourceRelationDescription returns the SourceRelationDescription field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetSourceRelationDescription() string {
	if o == nil || IsNil(o.SourceRelationDescription) {
		var ret string
		return ret
	}
	return *o.SourceRelationDescription
}

// GetSourceRelationDescriptionOk returns a tuple with the SourceRelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetSourceRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.SourceRelationDescription) {
		return nil, false
	}
	return o.SourceRelationDescription, true
}

// HasSourceRelationDescription returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasSourceRelationDescription() bool {
	if o != nil && !IsNil(o.SourceRelationDescription) {
		return true
	}

	return false
}

// SetSourceRelationDescription gets a reference to the given string and assigns it to the SourceRelationDescription field.
func (o *RelationshipCriteriaType) SetSourceRelationDescription(v string) {
	o.SourceRelationDescription = &v
}

// GetTargetProfileType returns the TargetProfileType field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetTargetProfileType() ProfileTypeType {
	if o == nil || IsNil(o.TargetProfileType) {
		var ret ProfileTypeType
		return ret
	}
	return *o.TargetProfileType
}

// GetTargetProfileTypeOk returns a tuple with the TargetProfileType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetTargetProfileTypeOk() (*ProfileTypeType, bool) {
	if o == nil || IsNil(o.TargetProfileType) {
		return nil, false
	}
	return o.TargetProfileType, true
}

// HasTargetProfileType returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasTargetProfileType() bool {
	if o != nil && !IsNil(o.TargetProfileType) {
		return true
	}

	return false
}

// SetTargetProfileType gets a reference to the given ProfileTypeType and assigns it to the TargetProfileType field.
func (o *RelationshipCriteriaType) SetTargetProfileType(v ProfileTypeType) {
	o.TargetProfileType = &v
}

// GetTargetRelation returns the TargetRelation field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetTargetRelation() string {
	if o == nil || IsNil(o.TargetRelation) {
		var ret string
		return ret
	}
	return *o.TargetRelation
}

// GetTargetRelationOk returns a tuple with the TargetRelation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetTargetRelationOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelation) {
		return nil, false
	}
	return o.TargetRelation, true
}

// HasTargetRelation returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasTargetRelation() bool {
	if o != nil && !IsNil(o.TargetRelation) {
		return true
	}

	return false
}

// SetTargetRelation gets a reference to the given string and assigns it to the TargetRelation field.
func (o *RelationshipCriteriaType) SetTargetRelation(v string) {
	o.TargetRelation = &v
}

// GetTargetRelationDescription returns the TargetRelationDescription field value if set, zero value otherwise.
func (o *RelationshipCriteriaType) GetTargetRelationDescription() string {
	if o == nil || IsNil(o.TargetRelationDescription) {
		var ret string
		return ret
	}
	return *o.TargetRelationDescription
}

// GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *RelationshipCriteriaType) GetTargetRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelationDescription) {
		return nil, false
	}
	return o.TargetRelationDescription, true
}

// HasTargetRelationDescription returns a boolean if a field has been set.
func (o *RelationshipCriteriaType) HasTargetRelationDescription() bool {
	if o != nil && !IsNil(o.TargetRelationDescription) {
		return true
	}

	return false
}

// SetTargetRelationDescription gets a reference to the given string and assigns it to the TargetRelationDescription field.
func (o *RelationshipCriteriaType) SetTargetRelationDescription(v string) {
	o.TargetRelationDescription = &v
}

func (o RelationshipCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o RelationshipCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Primary) {
		toSerialize["primary"] = o.Primary
	}
	if !IsNil(o.SourceProfileType) {
		toSerialize["sourceProfileType"] = o.SourceProfileType
	}
	if !IsNil(o.SourceRelation) {
		toSerialize["sourceRelation"] = o.SourceRelation
	}
	if !IsNil(o.SourceRelationDescription) {
		toSerialize["sourceRelationDescription"] = o.SourceRelationDescription
	}
	if !IsNil(o.TargetProfileType) {
		toSerialize["targetProfileType"] = o.TargetProfileType
	}
	if !IsNil(o.TargetRelation) {
		toSerialize["targetRelation"] = o.TargetRelation
	}
	if !IsNil(o.TargetRelationDescription) {
		toSerialize["targetRelationDescription"] = o.TargetRelationDescription
	}
	return toSerialize, nil
}

type NullableRelationshipCriteriaType struct {
	value *RelationshipCriteriaType
	isSet bool
}

func (v NullableRelationshipCriteriaType) Get() *RelationshipCriteriaType {
	return v.value
}

func (v *NullableRelationshipCriteriaType) Set(val *RelationshipCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableRelationshipCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableRelationshipCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRelationshipCriteriaType(val *RelationshipCriteriaType) *NullableRelationshipCriteriaType {
	return &NullableRelationshipCriteriaType{value: val, isSet: true}
}

func (v NullableRelationshipCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRelationshipCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

