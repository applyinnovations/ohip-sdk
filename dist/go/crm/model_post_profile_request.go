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

// checks if the PostProfileRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostProfileRequest{}

// PostProfileRequest struct for PostProfileRequest
type PostProfileRequest struct {
	// This type contains unique information of external reference.
	ExternalReferences []ExternalReferenceType `json:"externalReferences,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Allowed actions for profile operations.
	ProfileAllowedActions []ProfileAllowedActionType `json:"profileAllowedActions,omitempty"`
	ProfileDetails *ProfileType `json:"profileDetails,omitempty"`
	// Unique Id that references an object uniquely in the system.
	ProfileIdList []UniqueIDType `json:"profileIdList,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostProfileRequest instantiates a new PostProfileRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostProfileRequest() *PostProfileRequest {
	this := PostProfileRequest{}
	return &this
}

// NewPostProfileRequestWithDefaults instantiates a new PostProfileRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostProfileRequestWithDefaults() *PostProfileRequest {
	this := PostProfileRequest{}
	return &this
}

// GetExternalReferences returns the ExternalReferences field value if set, zero value otherwise.
func (o *PostProfileRequest) GetExternalReferences() []ExternalReferenceType {
	if o == nil || IsNil(o.ExternalReferences) {
		var ret []ExternalReferenceType
		return ret
	}
	return o.ExternalReferences
}

// GetExternalReferencesOk returns a tuple with the ExternalReferences field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetExternalReferencesOk() ([]ExternalReferenceType, bool) {
	if o == nil || IsNil(o.ExternalReferences) {
		return nil, false
	}
	return o.ExternalReferences, true
}

// HasExternalReferences returns a boolean if a field has been set.
func (o *PostProfileRequest) HasExternalReferences() bool {
	if o != nil && !IsNil(o.ExternalReferences) {
		return true
	}

	return false
}

// SetExternalReferences gets a reference to the given []ExternalReferenceType and assigns it to the ExternalReferences field.
func (o *PostProfileRequest) SetExternalReferences(v []ExternalReferenceType) {
	o.ExternalReferences = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostProfileRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostProfileRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostProfileRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetProfileAllowedActions returns the ProfileAllowedActions field value if set, zero value otherwise.
func (o *PostProfileRequest) GetProfileAllowedActions() []ProfileAllowedActionType {
	if o == nil || IsNil(o.ProfileAllowedActions) {
		var ret []ProfileAllowedActionType
		return ret
	}
	return o.ProfileAllowedActions
}

// GetProfileAllowedActionsOk returns a tuple with the ProfileAllowedActions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetProfileAllowedActionsOk() ([]ProfileAllowedActionType, bool) {
	if o == nil || IsNil(o.ProfileAllowedActions) {
		return nil, false
	}
	return o.ProfileAllowedActions, true
}

// HasProfileAllowedActions returns a boolean if a field has been set.
func (o *PostProfileRequest) HasProfileAllowedActions() bool {
	if o != nil && !IsNil(o.ProfileAllowedActions) {
		return true
	}

	return false
}

// SetProfileAllowedActions gets a reference to the given []ProfileAllowedActionType and assigns it to the ProfileAllowedActions field.
func (o *PostProfileRequest) SetProfileAllowedActions(v []ProfileAllowedActionType) {
	o.ProfileAllowedActions = v
}

// GetProfileDetails returns the ProfileDetails field value if set, zero value otherwise.
func (o *PostProfileRequest) GetProfileDetails() ProfileType {
	if o == nil || IsNil(o.ProfileDetails) {
		var ret ProfileType
		return ret
	}
	return *o.ProfileDetails
}

// GetProfileDetailsOk returns a tuple with the ProfileDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetProfileDetailsOk() (*ProfileType, bool) {
	if o == nil || IsNil(o.ProfileDetails) {
		return nil, false
	}
	return o.ProfileDetails, true
}

// HasProfileDetails returns a boolean if a field has been set.
func (o *PostProfileRequest) HasProfileDetails() bool {
	if o != nil && !IsNil(o.ProfileDetails) {
		return true
	}

	return false
}

// SetProfileDetails gets a reference to the given ProfileType and assigns it to the ProfileDetails field.
func (o *PostProfileRequest) SetProfileDetails(v ProfileType) {
	o.ProfileDetails = &v
}

// GetProfileIdList returns the ProfileIdList field value if set, zero value otherwise.
func (o *PostProfileRequest) GetProfileIdList() []UniqueIDType {
	if o == nil || IsNil(o.ProfileIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.ProfileIdList
}

// GetProfileIdListOk returns a tuple with the ProfileIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetProfileIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.ProfileIdList) {
		return nil, false
	}
	return o.ProfileIdList, true
}

// HasProfileIdList returns a boolean if a field has been set.
func (o *PostProfileRequest) HasProfileIdList() bool {
	if o != nil && !IsNil(o.ProfileIdList) {
		return true
	}

	return false
}

// SetProfileIdList gets a reference to the given []UniqueIDType and assigns it to the ProfileIdList field.
func (o *PostProfileRequest) SetProfileIdList(v []UniqueIDType) {
	o.ProfileIdList = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostProfileRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostProfileRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostProfileRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostProfileRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostProfileRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostProfileRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ExternalReferences) {
		toSerialize["externalReferences"] = o.ExternalReferences
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ProfileAllowedActions) {
		toSerialize["profileAllowedActions"] = o.ProfileAllowedActions
	}
	if !IsNil(o.ProfileDetails) {
		toSerialize["profileDetails"] = o.ProfileDetails
	}
	if !IsNil(o.ProfileIdList) {
		toSerialize["profileIdList"] = o.ProfileIdList
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostProfileRequest struct {
	value *PostProfileRequest
	isSet bool
}

func (v NullablePostProfileRequest) Get() *PostProfileRequest {
	return v.value
}

func (v *NullablePostProfileRequest) Set(val *PostProfileRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostProfileRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostProfileRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostProfileRequest(val *PostProfileRequest) *NullablePostProfileRequest {
	return &NullablePostProfileRequest{value: val, isSet: true}
}

func (v NullablePostProfileRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostProfileRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


