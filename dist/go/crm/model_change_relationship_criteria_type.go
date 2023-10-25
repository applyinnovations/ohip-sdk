/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the ChangeRelationshipCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeRelationshipCriteriaType{}

// ChangeRelationshipCriteriaType Information about the changes in relationship for the profile
type ChangeRelationshipCriteriaType struct {
	ChangeRelationship *ChangeRelationsInfoType `json:"changeRelationship,omitempty"`
	// Relationship identifier.
	RelationshipID *string `json:"relationshipID,omitempty"`
	// Indicates the type of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
	SourceRelation *string `json:"sourceRelation,omitempty"`
	// Displays the description of existing relationship the current profile(Source Profile) has with the related profile(Target Profile).
	SourceRelationDescription *string `json:"sourceRelationDescription,omitempty"`
	// Indicates the type of existing relationship the Related profile(Target Profile) has with the current profile(Source Profile).
	TargetRelation *string `json:"targetRelation,omitempty"`
	// Displays the description of existing relationship the related profile(Target Profile) has with the current profile(Source Profile).
	TargetRelationDescription *string `json:"targetRelationDescription,omitempty"`
}

// NewChangeRelationshipCriteriaType instantiates a new ChangeRelationshipCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeRelationshipCriteriaType() *ChangeRelationshipCriteriaType {
	this := ChangeRelationshipCriteriaType{}
	return &this
}

// NewChangeRelationshipCriteriaTypeWithDefaults instantiates a new ChangeRelationshipCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeRelationshipCriteriaTypeWithDefaults() *ChangeRelationshipCriteriaType {
	this := ChangeRelationshipCriteriaType{}
	return &this
}

// GetChangeRelationship returns the ChangeRelationship field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetChangeRelationship() ChangeRelationsInfoType {
	if o == nil || IsNil(o.ChangeRelationship) {
		var ret ChangeRelationsInfoType
		return ret
	}
	return *o.ChangeRelationship
}

// GetChangeRelationshipOk returns a tuple with the ChangeRelationship field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetChangeRelationshipOk() (*ChangeRelationsInfoType, bool) {
	if o == nil || IsNil(o.ChangeRelationship) {
		return nil, false
	}
	return o.ChangeRelationship, true
}

// HasChangeRelationship returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasChangeRelationship() bool {
	if o != nil && !IsNil(o.ChangeRelationship) {
		return true
	}

	return false
}

// SetChangeRelationship gets a reference to the given ChangeRelationsInfoType and assigns it to the ChangeRelationship field.
func (o *ChangeRelationshipCriteriaType) SetChangeRelationship(v ChangeRelationsInfoType) {
	o.ChangeRelationship = &v
}

// GetRelationshipID returns the RelationshipID field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetRelationshipID() string {
	if o == nil || IsNil(o.RelationshipID) {
		var ret string
		return ret
	}
	return *o.RelationshipID
}

// GetRelationshipIDOk returns a tuple with the RelationshipID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetRelationshipIDOk() (*string, bool) {
	if o == nil || IsNil(o.RelationshipID) {
		return nil, false
	}
	return o.RelationshipID, true
}

// HasRelationshipID returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasRelationshipID() bool {
	if o != nil && !IsNil(o.RelationshipID) {
		return true
	}

	return false
}

// SetRelationshipID gets a reference to the given string and assigns it to the RelationshipID field.
func (o *ChangeRelationshipCriteriaType) SetRelationshipID(v string) {
	o.RelationshipID = &v
}

// GetSourceRelation returns the SourceRelation field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetSourceRelation() string {
	if o == nil || IsNil(o.SourceRelation) {
		var ret string
		return ret
	}
	return *o.SourceRelation
}

// GetSourceRelationOk returns a tuple with the SourceRelation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetSourceRelationOk() (*string, bool) {
	if o == nil || IsNil(o.SourceRelation) {
		return nil, false
	}
	return o.SourceRelation, true
}

// HasSourceRelation returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasSourceRelation() bool {
	if o != nil && !IsNil(o.SourceRelation) {
		return true
	}

	return false
}

// SetSourceRelation gets a reference to the given string and assigns it to the SourceRelation field.
func (o *ChangeRelationshipCriteriaType) SetSourceRelation(v string) {
	o.SourceRelation = &v
}

// GetSourceRelationDescription returns the SourceRelationDescription field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetSourceRelationDescription() string {
	if o == nil || IsNil(o.SourceRelationDescription) {
		var ret string
		return ret
	}
	return *o.SourceRelationDescription
}

// GetSourceRelationDescriptionOk returns a tuple with the SourceRelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetSourceRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.SourceRelationDescription) {
		return nil, false
	}
	return o.SourceRelationDescription, true
}

// HasSourceRelationDescription returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasSourceRelationDescription() bool {
	if o != nil && !IsNil(o.SourceRelationDescription) {
		return true
	}

	return false
}

// SetSourceRelationDescription gets a reference to the given string and assigns it to the SourceRelationDescription field.
func (o *ChangeRelationshipCriteriaType) SetSourceRelationDescription(v string) {
	o.SourceRelationDescription = &v
}

// GetTargetRelation returns the TargetRelation field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetTargetRelation() string {
	if o == nil || IsNil(o.TargetRelation) {
		var ret string
		return ret
	}
	return *o.TargetRelation
}

// GetTargetRelationOk returns a tuple with the TargetRelation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetTargetRelationOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelation) {
		return nil, false
	}
	return o.TargetRelation, true
}

// HasTargetRelation returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasTargetRelation() bool {
	if o != nil && !IsNil(o.TargetRelation) {
		return true
	}

	return false
}

// SetTargetRelation gets a reference to the given string and assigns it to the TargetRelation field.
func (o *ChangeRelationshipCriteriaType) SetTargetRelation(v string) {
	o.TargetRelation = &v
}

// GetTargetRelationDescription returns the TargetRelationDescription field value if set, zero value otherwise.
func (o *ChangeRelationshipCriteriaType) GetTargetRelationDescription() string {
	if o == nil || IsNil(o.TargetRelationDescription) {
		var ret string
		return ret
	}
	return *o.TargetRelationDescription
}

// GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationshipCriteriaType) GetTargetRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelationDescription) {
		return nil, false
	}
	return o.TargetRelationDescription, true
}

// HasTargetRelationDescription returns a boolean if a field has been set.
func (o *ChangeRelationshipCriteriaType) HasTargetRelationDescription() bool {
	if o != nil && !IsNil(o.TargetRelationDescription) {
		return true
	}

	return false
}

// SetTargetRelationDescription gets a reference to the given string and assigns it to the TargetRelationDescription field.
func (o *ChangeRelationshipCriteriaType) SetTargetRelationDescription(v string) {
	o.TargetRelationDescription = &v
}

func (o ChangeRelationshipCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeRelationshipCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChangeRelationship) {
		toSerialize["changeRelationship"] = o.ChangeRelationship
	}
	if !IsNil(o.RelationshipID) {
		toSerialize["relationshipID"] = o.RelationshipID
	}
	if !IsNil(o.SourceRelation) {
		toSerialize["sourceRelation"] = o.SourceRelation
	}
	if !IsNil(o.SourceRelationDescription) {
		toSerialize["sourceRelationDescription"] = o.SourceRelationDescription
	}
	if !IsNil(o.TargetRelation) {
		toSerialize["targetRelation"] = o.TargetRelation
	}
	if !IsNil(o.TargetRelationDescription) {
		toSerialize["targetRelationDescription"] = o.TargetRelationDescription
	}
	return toSerialize, nil
}

type NullableChangeRelationshipCriteriaType struct {
	value *ChangeRelationshipCriteriaType
	isSet bool
}

func (v NullableChangeRelationshipCriteriaType) Get() *ChangeRelationshipCriteriaType {
	return v.value
}

func (v *NullableChangeRelationshipCriteriaType) Set(val *ChangeRelationshipCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeRelationshipCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeRelationshipCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeRelationshipCriteriaType(val *ChangeRelationshipCriteriaType) *NullableChangeRelationshipCriteriaType {
	return &NullableChangeRelationshipCriteriaType{value: val, isSet: true}
}

func (v NullableChangeRelationshipCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeRelationshipCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


