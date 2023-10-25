/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ChangeRelationsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChangeRelationsType{}

// ChangeRelationsType Detailed information regarding the changes made to relationships for the profile.
type ChangeRelationsType struct {
	// Relationship identifier.
	Id *string `json:"id,omitempty"`
	// Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
	Relation *string `json:"relation,omitempty"`
	// Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).
	RelationDescription *string `json:"relationDescription,omitempty"`
	// Displays the type of relationship the Related profile(Target Profile) has with the current profile(Source Profile).
	TargetRelation *string `json:"targetRelation,omitempty"`
	// Displays the description of the target relation(Target Profile).
	TargetRelationDescription *string `json:"targetRelationDescription,omitempty"`
}

// NewChangeRelationsType instantiates a new ChangeRelationsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChangeRelationsType() *ChangeRelationsType {
	this := ChangeRelationsType{}
	return &this
}

// NewChangeRelationsTypeWithDefaults instantiates a new ChangeRelationsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChangeRelationsTypeWithDefaults() *ChangeRelationsType {
	this := ChangeRelationsType{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ChangeRelationsType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationsType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ChangeRelationsType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ChangeRelationsType) SetId(v string) {
	o.Id = &v
}

// GetRelation returns the Relation field value if set, zero value otherwise.
func (o *ChangeRelationsType) GetRelation() string {
	if o == nil || IsNil(o.Relation) {
		var ret string
		return ret
	}
	return *o.Relation
}

// GetRelationOk returns a tuple with the Relation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationsType) GetRelationOk() (*string, bool) {
	if o == nil || IsNil(o.Relation) {
		return nil, false
	}
	return o.Relation, true
}

// HasRelation returns a boolean if a field has been set.
func (o *ChangeRelationsType) HasRelation() bool {
	if o != nil && !IsNil(o.Relation) {
		return true
	}

	return false
}

// SetRelation gets a reference to the given string and assigns it to the Relation field.
func (o *ChangeRelationsType) SetRelation(v string) {
	o.Relation = &v
}

// GetRelationDescription returns the RelationDescription field value if set, zero value otherwise.
func (o *ChangeRelationsType) GetRelationDescription() string {
	if o == nil || IsNil(o.RelationDescription) {
		var ret string
		return ret
	}
	return *o.RelationDescription
}

// GetRelationDescriptionOk returns a tuple with the RelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationsType) GetRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.RelationDescription) {
		return nil, false
	}
	return o.RelationDescription, true
}

// HasRelationDescription returns a boolean if a field has been set.
func (o *ChangeRelationsType) HasRelationDescription() bool {
	if o != nil && !IsNil(o.RelationDescription) {
		return true
	}

	return false
}

// SetRelationDescription gets a reference to the given string and assigns it to the RelationDescription field.
func (o *ChangeRelationsType) SetRelationDescription(v string) {
	o.RelationDescription = &v
}

// GetTargetRelation returns the TargetRelation field value if set, zero value otherwise.
func (o *ChangeRelationsType) GetTargetRelation() string {
	if o == nil || IsNil(o.TargetRelation) {
		var ret string
		return ret
	}
	return *o.TargetRelation
}

// GetTargetRelationOk returns a tuple with the TargetRelation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationsType) GetTargetRelationOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelation) {
		return nil, false
	}
	return o.TargetRelation, true
}

// HasTargetRelation returns a boolean if a field has been set.
func (o *ChangeRelationsType) HasTargetRelation() bool {
	if o != nil && !IsNil(o.TargetRelation) {
		return true
	}

	return false
}

// SetTargetRelation gets a reference to the given string and assigns it to the TargetRelation field.
func (o *ChangeRelationsType) SetTargetRelation(v string) {
	o.TargetRelation = &v
}

// GetTargetRelationDescription returns the TargetRelationDescription field value if set, zero value otherwise.
func (o *ChangeRelationsType) GetTargetRelationDescription() string {
	if o == nil || IsNil(o.TargetRelationDescription) {
		var ret string
		return ret
	}
	return *o.TargetRelationDescription
}

// GetTargetRelationDescriptionOk returns a tuple with the TargetRelationDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChangeRelationsType) GetTargetRelationDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.TargetRelationDescription) {
		return nil, false
	}
	return o.TargetRelationDescription, true
}

// HasTargetRelationDescription returns a boolean if a field has been set.
func (o *ChangeRelationsType) HasTargetRelationDescription() bool {
	if o != nil && !IsNil(o.TargetRelationDescription) {
		return true
	}

	return false
}

// SetTargetRelationDescription gets a reference to the given string and assigns it to the TargetRelationDescription field.
func (o *ChangeRelationsType) SetTargetRelationDescription(v string) {
	o.TargetRelationDescription = &v
}

func (o ChangeRelationsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChangeRelationsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Relation) {
		toSerialize["relation"] = o.Relation
	}
	if !IsNil(o.RelationDescription) {
		toSerialize["relationDescription"] = o.RelationDescription
	}
	if !IsNil(o.TargetRelation) {
		toSerialize["targetRelation"] = o.TargetRelation
	}
	if !IsNil(o.TargetRelationDescription) {
		toSerialize["targetRelationDescription"] = o.TargetRelationDescription
	}
	return toSerialize, nil
}

type NullableChangeRelationsType struct {
	value *ChangeRelationsType
	isSet bool
}

func (v NullableChangeRelationsType) Get() *ChangeRelationsType {
	return v.value
}

func (v *NullableChangeRelationsType) Set(val *ChangeRelationsType) {
	v.value = val
	v.isSet = true
}

func (v NullableChangeRelationsType) IsSet() bool {
	return v.isSet
}

func (v *NullableChangeRelationsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChangeRelationsType(val *ChangeRelationsType) *NullableChangeRelationsType {
	return &NullableChangeRelationsType{value: val, isSet: true}
}

func (v NullableChangeRelationsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChangeRelationsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


