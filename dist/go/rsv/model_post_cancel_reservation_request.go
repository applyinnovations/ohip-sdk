/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the PostCancelReservationRequest type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostCancelReservationRequest{}

// PostCancelReservationRequest struct for PostCancelReservationRequest
type PostCancelReservationRequest struct {
	ChannelInformation *ChannelResvRQInfoType `json:"channelInformation,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	RateChangeInstruction *RateChangeInstructionType `json:"rateChangeInstruction,omitempty"`
	Reason *CancellationReasonType `json:"reason,omitempty"`
	// Information on the reservation that is to be canceled.
	Reservations []CancelReservationType `json:"reservations,omitempty"`
	// Indicator if the request is a verification on whether the reservation can be canceled.
	VerificationOnly *bool `json:"verificationOnly,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostCancelReservationRequest instantiates a new PostCancelReservationRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostCancelReservationRequest() *PostCancelReservationRequest {
	this := PostCancelReservationRequest{}
	return &this
}

// NewPostCancelReservationRequestWithDefaults instantiates a new PostCancelReservationRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostCancelReservationRequestWithDefaults() *PostCancelReservationRequest {
	this := PostCancelReservationRequest{}
	return &this
}

// GetChannelInformation returns the ChannelInformation field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetChannelInformation() ChannelResvRQInfoType {
	if o == nil || IsNil(o.ChannelInformation) {
		var ret ChannelResvRQInfoType
		return ret
	}
	return *o.ChannelInformation
}

// GetChannelInformationOk returns a tuple with the ChannelInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetChannelInformationOk() (*ChannelResvRQInfoType, bool) {
	if o == nil || IsNil(o.ChannelInformation) {
		return nil, false
	}
	return o.ChannelInformation, true
}

// HasChannelInformation returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasChannelInformation() bool {
	if o != nil && !IsNil(o.ChannelInformation) {
		return true
	}

	return false
}

// SetChannelInformation gets a reference to the given ChannelResvRQInfoType and assigns it to the ChannelInformation field.
func (o *PostCancelReservationRequest) SetChannelInformation(v ChannelResvRQInfoType) {
	o.ChannelInformation = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostCancelReservationRequest) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRateChangeInstruction returns the RateChangeInstruction field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetRateChangeInstruction() RateChangeInstructionType {
	if o == nil || IsNil(o.RateChangeInstruction) {
		var ret RateChangeInstructionType
		return ret
	}
	return *o.RateChangeInstruction
}

// GetRateChangeInstructionOk returns a tuple with the RateChangeInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetRateChangeInstructionOk() (*RateChangeInstructionType, bool) {
	if o == nil || IsNil(o.RateChangeInstruction) {
		return nil, false
	}
	return o.RateChangeInstruction, true
}

// HasRateChangeInstruction returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasRateChangeInstruction() bool {
	if o != nil && !IsNil(o.RateChangeInstruction) {
		return true
	}

	return false
}

// SetRateChangeInstruction gets a reference to the given RateChangeInstructionType and assigns it to the RateChangeInstruction field.
func (o *PostCancelReservationRequest) SetRateChangeInstruction(v RateChangeInstructionType) {
	o.RateChangeInstruction = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetReason() CancellationReasonType {
	if o == nil || IsNil(o.Reason) {
		var ret CancellationReasonType
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetReasonOk() (*CancellationReasonType, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given CancellationReasonType and assigns it to the Reason field.
func (o *PostCancelReservationRequest) SetReason(v CancellationReasonType) {
	o.Reason = &v
}

// GetReservations returns the Reservations field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetReservations() []CancelReservationType {
	if o == nil || IsNil(o.Reservations) {
		var ret []CancelReservationType
		return ret
	}
	return o.Reservations
}

// GetReservationsOk returns a tuple with the Reservations field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetReservationsOk() ([]CancelReservationType, bool) {
	if o == nil || IsNil(o.Reservations) {
		return nil, false
	}
	return o.Reservations, true
}

// HasReservations returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasReservations() bool {
	if o != nil && !IsNil(o.Reservations) {
		return true
	}

	return false
}

// SetReservations gets a reference to the given []CancelReservationType and assigns it to the Reservations field.
func (o *PostCancelReservationRequest) SetReservations(v []CancelReservationType) {
	o.Reservations = v
}

// GetVerificationOnly returns the VerificationOnly field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetVerificationOnly() bool {
	if o == nil || IsNil(o.VerificationOnly) {
		var ret bool
		return ret
	}
	return *o.VerificationOnly
}

// GetVerificationOnlyOk returns a tuple with the VerificationOnly field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetVerificationOnlyOk() (*bool, bool) {
	if o == nil || IsNil(o.VerificationOnly) {
		return nil, false
	}
	return o.VerificationOnly, true
}

// HasVerificationOnly returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasVerificationOnly() bool {
	if o != nil && !IsNil(o.VerificationOnly) {
		return true
	}

	return false
}

// SetVerificationOnly gets a reference to the given bool and assigns it to the VerificationOnly field.
func (o *PostCancelReservationRequest) SetVerificationOnly(v bool) {
	o.VerificationOnly = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostCancelReservationRequest) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostCancelReservationRequest) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostCancelReservationRequest) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostCancelReservationRequest) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostCancelReservationRequest) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostCancelReservationRequest) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ChannelInformation) {
		toSerialize["channelInformation"] = o.ChannelInformation
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RateChangeInstruction) {
		toSerialize["rateChangeInstruction"] = o.RateChangeInstruction
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.Reservations) {
		toSerialize["reservations"] = o.Reservations
	}
	if !IsNil(o.VerificationOnly) {
		toSerialize["verificationOnly"] = o.VerificationOnly
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostCancelReservationRequest struct {
	value *PostCancelReservationRequest
	isSet bool
}

func (v NullablePostCancelReservationRequest) Get() *PostCancelReservationRequest {
	return v.value
}

func (v *NullablePostCancelReservationRequest) Set(val *PostCancelReservationRequest) {
	v.value = val
	v.isSet = true
}

func (v NullablePostCancelReservationRequest) IsSet() bool {
	return v.isSet
}

func (v *NullablePostCancelReservationRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostCancelReservationRequest(val *PostCancelReservationRequest) *NullablePostCancelReservationRequest {
	return &NullablePostCancelReservationRequest{value: val, isSet: true}
}

func (v NullablePostCancelReservationRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostCancelReservationRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


