/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the PostSingleActivityCompletionRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostSingleActivityCompletionRequest{}

// PostSingleActivityCompletionRequest struct for PostSingleActivityCompletionRequest
type PostSingleActivityCompletionRequest struct {
	// Activity information in detail.
	ActivitiesInformation []ActivityDetailsType `json:"activitiesInformation,omitempty"`
	// Signifies whether only activity details are being modified.
	ActivityDetailsEditFlag *bool `json:"activityDetailsEditFlag,omitempty"`
	// Signifies whether complete details of activity should alone be modified.
	CompleteMode *bool `json:"completeMode,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Signifies whether the linked activity details should be modified or not.
	UpdateLinkedActivities *bool `json:"updateLinkedActivities,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostSingleActivityCompletionRequest instantiates a new PostSingleActivityCompletionRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostSingleActivityCompletionRequest() *PostSingleActivityCompletionRequest {
	this := PostSingleActivityCompletionRequest{}
	return &this
}

// NewPostSingleActivityCompletionRequestWithDefaults instantiates a new PostSingleActivityCompletionRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostSingleActivityCompletionRequestWithDefaults() *PostSingleActivityCompletionRequest {
	this := PostSingleActivityCompletionRequest{}
	return &this
}

// GetActivitiesInformation returns the ActivitiesInformation field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetActivitiesInformation() []ActivityDetailsType {
	if o == nil || IsNil(o.ActivitiesInformation) {
		var ret []ActivityDetailsType
		return ret
	}
	return o.ActivitiesInformation
}

// GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetActivitiesInformationOk() ([]ActivityDetailsType, bool) {
	if o == nil || IsNil(o.ActivitiesInformation) {
		return nil, false
	}
	return o.ActivitiesInformation, true
}

// HasActivitiesInformation returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasActivitiesInformation() bool {
	if o != nil && !IsNil(o.ActivitiesInformation) {
		return true
	}

	return false
}

// SetActivitiesInformation gets a reference to the given []ActivityDetailsType and assigns it to the ActivitiesInformation field.
func (o *PostSingleActivityCompletionRequest) SetActivitiesInformation(v []ActivityDetailsType) {
	o.ActivitiesInformation = v
}

// GetActivityDetailsEditFlag returns the ActivityDetailsEditFlag field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetActivityDetailsEditFlag() bool {
	if o == nil || IsNil(o.ActivityDetailsEditFlag) {
		var ret bool
		return ret
	}
	return *o.ActivityDetailsEditFlag
}

// GetActivityDetailsEditFlagOk returns a tuple with the ActivityDetailsEditFlag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetActivityDetailsEditFlagOk() (*bool, bool) {
	if o == nil || IsNil(o.ActivityDetailsEditFlag) {
		return nil, false
	}
	return o.ActivityDetailsEditFlag, true
}

// HasActivityDetailsEditFlag returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasActivityDetailsEditFlag() bool {
	if o != nil && !IsNil(o.ActivityDetailsEditFlag) {
		return true
	}

	return false
}

// SetActivityDetailsEditFlag gets a reference to the given bool and assigns it to the ActivityDetailsEditFlag field.
func (o *PostSingleActivityCompletionRequest) SetActivityDetailsEditFlag(v bool) {
	o.ActivityDetailsEditFlag = &v
}

// GetCompleteMode returns the CompleteMode field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetCompleteMode() bool {
	if o == nil || IsNil(o.CompleteMode) {
		var ret bool
		return ret
	}
	return *o.CompleteMode
}

// GetCompleteModeOk returns a tuple with the CompleteMode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetCompleteModeOk() (*bool, bool) {
	if o == nil || IsNil(o.CompleteMode) {
		return nil, false
	}
	return o.CompleteMode, true
}

// HasCompleteMode returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasCompleteMode() bool {
	if o != nil && !IsNil(o.CompleteMode) {
		return true
	}

	return false
}

// SetCompleteMode gets a reference to the given bool and assigns it to the CompleteMode field.
func (o *PostSingleActivityCompletionRequest) SetCompleteMode(v bool) {
	o.CompleteMode = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostSingleActivityCompletionRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetUpdateLinkedActivities returns the UpdateLinkedActivities field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetUpdateLinkedActivities() bool {
	if o == nil || IsNil(o.UpdateLinkedActivities) {
		var ret bool
		return ret
	}
	return *o.UpdateLinkedActivities
}

// GetUpdateLinkedActivitiesOk returns a tuple with the UpdateLinkedActivities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetUpdateLinkedActivitiesOk() (*bool, bool) {
	if o == nil || IsNil(o.UpdateLinkedActivities) {
		return nil, false
	}
	return o.UpdateLinkedActivities, true
}

// HasUpdateLinkedActivities returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasUpdateLinkedActivities() bool {
	if o != nil && !IsNil(o.UpdateLinkedActivities) {
		return true
	}

	return false
}

// SetUpdateLinkedActivities gets a reference to the given bool and assigns it to the UpdateLinkedActivities field.
func (o *PostSingleActivityCompletionRequest) SetUpdateLinkedActivities(v bool) {
	o.UpdateLinkedActivities = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostSingleActivityCompletionRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostSingleActivityCompletionRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostSingleActivityCompletionRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostSingleActivityCompletionRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostSingleActivityCompletionRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostSingleActivityCompletionRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivitiesInformation) {
		toSerialize["activitiesInformation"] = o.ActivitiesInformation
	}
	if !IsNil(o.ActivityDetailsEditFlag) {
		toSerialize["activityDetailsEditFlag"] = o.ActivityDetailsEditFlag
	}
	if !IsNil(o.CompleteMode) {
		toSerialize["completeMode"] = o.CompleteMode
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.UpdateLinkedActivities) {
		toSerialize["updateLinkedActivities"] = o.UpdateLinkedActivities
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostSingleActivityCompletionRequest struct {
	value *PostSingleActivityCompletionRequest
	isSet bool
}

func (v NullablePostSingleActivityCompletionRequest) Get() *PostSingleActivityCompletionRequest {
	return v.value
}

func (v *NullablePostSingleActivityCompletionRequest) Set(val *PostSingleActivityCompletionRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostSingleActivityCompletionRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostSingleActivityCompletionRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostSingleActivityCompletionRequest(val *PostSingleActivityCompletionRequest) *NullablePostSingleActivityCompletionRequest {
	return &NullablePostSingleActivityCompletionRequest{value: val, isSet: true}
}

func (v NullablePostSingleActivityCompletionRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostSingleActivityCompletionRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


