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

// checks if the TelephoneType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TelephoneType{}

// TelephoneType Information on a telephone number for the customer.
type TelephoneType struct {
	// Time stamp of the creation.
	CreateDateTime *string `json:"createDateTime,omitempty"`
	// ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
	CreatorId *string `json:"creatorId,omitempty"`
	// Extension to reach a specific party at the phone number.
	Extension *string `json:"extension,omitempty"`
	// Identifies the last software system or person to modify a record.
	LastModifierId *string `json:"lastModifierId,omitempty"`
	// Time stamp of last modification.
	LastModifyDateTime *string `json:"lastModifyDateTime,omitempty"`
	// Display Order sequence.
	OrderSequence *float32 `json:"orderSequence,omitempty"`
	// Telephone number assigned to a single location.
	PhoneNumber *string `json:"phoneNumber,omitempty"`
	// Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc.
	PhoneTechType *string `json:"phoneTechType,omitempty"`
	// Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening).
	PhoneUseType *string `json:"phoneUseType,omitempty"`
	// Description of the PhoneUseType code
	PhoneUseTypeDescription *string `json:"phoneUseTypeDescription,omitempty"`
	// When true, indicates a primary information.
	PrimaryInd *bool `json:"primaryInd,omitempty"`
}

// NewTelephoneType instantiates a new TelephoneType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTelephoneType() *TelephoneType {
	this := TelephoneType{}
	return &this
}

// NewTelephoneTypeWithDefaults instantiates a new TelephoneType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTelephoneTypeWithDefaults() *TelephoneType {
	this := TelephoneType{}
	return &this
}

// GetCreateDateTime returns the CreateDateTime field value if set, zero value otherwise.
func (o *TelephoneType) GetCreateDateTime() string {
	if o == nil || IsNil(o.CreateDateTime) {
		var ret string
		return ret
	}
	return *o.CreateDateTime
}

// GetCreateDateTimeOk returns a tuple with the CreateDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetCreateDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.CreateDateTime) {
		return nil, false
	}
	return o.CreateDateTime, true
}

// HasCreateDateTime returns a boolean if a field has been set.
func (o *TelephoneType) HasCreateDateTime() bool {
	if o != nil && !IsNil(o.CreateDateTime) {
		return true
	}

	return false
}

// SetCreateDateTime gets a reference to the given string and assigns it to the CreateDateTime field.
func (o *TelephoneType) SetCreateDateTime(v string) {
	o.CreateDateTime = &v
}

// GetCreatorId returns the CreatorId field value if set, zero value otherwise.
func (o *TelephoneType) GetCreatorId() string {
	if o == nil || IsNil(o.CreatorId) {
		var ret string
		return ret
	}
	return *o.CreatorId
}

// GetCreatorIdOk returns a tuple with the CreatorId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetCreatorIdOk() (*string, bool) {
	if o == nil || IsNil(o.CreatorId) {
		return nil, false
	}
	return o.CreatorId, true
}

// HasCreatorId returns a boolean if a field has been set.
func (o *TelephoneType) HasCreatorId() bool {
	if o != nil && !IsNil(o.CreatorId) {
		return true
	}

	return false
}

// SetCreatorId gets a reference to the given string and assigns it to the CreatorId field.
func (o *TelephoneType) SetCreatorId(v string) {
	o.CreatorId = &v
}

// GetExtension returns the Extension field value if set, zero value otherwise.
func (o *TelephoneType) GetExtension() string {
	if o == nil || IsNil(o.Extension) {
		var ret string
		return ret
	}
	return *o.Extension
}

// GetExtensionOk returns a tuple with the Extension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetExtensionOk() (*string, bool) {
	if o == nil || IsNil(o.Extension) {
		return nil, false
	}
	return o.Extension, true
}

// HasExtension returns a boolean if a field has been set.
func (o *TelephoneType) HasExtension() bool {
	if o != nil && !IsNil(o.Extension) {
		return true
	}

	return false
}

// SetExtension gets a reference to the given string and assigns it to the Extension field.
func (o *TelephoneType) SetExtension(v string) {
	o.Extension = &v
}

// GetLastModifierId returns the LastModifierId field value if set, zero value otherwise.
func (o *TelephoneType) GetLastModifierId() string {
	if o == nil || IsNil(o.LastModifierId) {
		var ret string
		return ret
	}
	return *o.LastModifierId
}

// GetLastModifierIdOk returns a tuple with the LastModifierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetLastModifierIdOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifierId) {
		return nil, false
	}
	return o.LastModifierId, true
}

// HasLastModifierId returns a boolean if a field has been set.
func (o *TelephoneType) HasLastModifierId() bool {
	if o != nil && !IsNil(o.LastModifierId) {
		return true
	}

	return false
}

// SetLastModifierId gets a reference to the given string and assigns it to the LastModifierId field.
func (o *TelephoneType) SetLastModifierId(v string) {
	o.LastModifierId = &v
}

// GetLastModifyDateTime returns the LastModifyDateTime field value if set, zero value otherwise.
func (o *TelephoneType) GetLastModifyDateTime() string {
	if o == nil || IsNil(o.LastModifyDateTime) {
		var ret string
		return ret
	}
	return *o.LastModifyDateTime
}

// GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetLastModifyDateTimeOk() (*string, bool) {
	if o == nil || IsNil(o.LastModifyDateTime) {
		return nil, false
	}
	return o.LastModifyDateTime, true
}

// HasLastModifyDateTime returns a boolean if a field has been set.
func (o *TelephoneType) HasLastModifyDateTime() bool {
	if o != nil && !IsNil(o.LastModifyDateTime) {
		return true
	}

	return false
}

// SetLastModifyDateTime gets a reference to the given string and assigns it to the LastModifyDateTime field.
func (o *TelephoneType) SetLastModifyDateTime(v string) {
	o.LastModifyDateTime = &v
}

// GetOrderSequence returns the OrderSequence field value if set, zero value otherwise.
func (o *TelephoneType) GetOrderSequence() float32 {
	if o == nil || IsNil(o.OrderSequence) {
		var ret float32
		return ret
	}
	return *o.OrderSequence
}

// GetOrderSequenceOk returns a tuple with the OrderSequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetOrderSequenceOk() (*float32, bool) {
	if o == nil || IsNil(o.OrderSequence) {
		return nil, false
	}
	return o.OrderSequence, true
}

// HasOrderSequence returns a boolean if a field has been set.
func (o *TelephoneType) HasOrderSequence() bool {
	if o != nil && !IsNil(o.OrderSequence) {
		return true
	}

	return false
}

// SetOrderSequence gets a reference to the given float32 and assigns it to the OrderSequence field.
func (o *TelephoneType) SetOrderSequence(v float32) {
	o.OrderSequence = &v
}

// GetPhoneNumber returns the PhoneNumber field value if set, zero value otherwise.
func (o *TelephoneType) GetPhoneNumber() string {
	if o == nil || IsNil(o.PhoneNumber) {
		var ret string
		return ret
	}
	return *o.PhoneNumber
}

// GetPhoneNumberOk returns a tuple with the PhoneNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetPhoneNumberOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneNumber) {
		return nil, false
	}
	return o.PhoneNumber, true
}

// HasPhoneNumber returns a boolean if a field has been set.
func (o *TelephoneType) HasPhoneNumber() bool {
	if o != nil && !IsNil(o.PhoneNumber) {
		return true
	}

	return false
}

// SetPhoneNumber gets a reference to the given string and assigns it to the PhoneNumber field.
func (o *TelephoneType) SetPhoneNumber(v string) {
	o.PhoneNumber = &v
}

// GetPhoneTechType returns the PhoneTechType field value if set, zero value otherwise.
func (o *TelephoneType) GetPhoneTechType() string {
	if o == nil || IsNil(o.PhoneTechType) {
		var ret string
		return ret
	}
	return *o.PhoneTechType
}

// GetPhoneTechTypeOk returns a tuple with the PhoneTechType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetPhoneTechTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneTechType) {
		return nil, false
	}
	return o.PhoneTechType, true
}

// HasPhoneTechType returns a boolean if a field has been set.
func (o *TelephoneType) HasPhoneTechType() bool {
	if o != nil && !IsNil(o.PhoneTechType) {
		return true
	}

	return false
}

// SetPhoneTechType gets a reference to the given string and assigns it to the PhoneTechType field.
func (o *TelephoneType) SetPhoneTechType(v string) {
	o.PhoneTechType = &v
}

// GetPhoneUseType returns the PhoneUseType field value if set, zero value otherwise.
func (o *TelephoneType) GetPhoneUseType() string {
	if o == nil || IsNil(o.PhoneUseType) {
		var ret string
		return ret
	}
	return *o.PhoneUseType
}

// GetPhoneUseTypeOk returns a tuple with the PhoneUseType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetPhoneUseTypeOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneUseType) {
		return nil, false
	}
	return o.PhoneUseType, true
}

// HasPhoneUseType returns a boolean if a field has been set.
func (o *TelephoneType) HasPhoneUseType() bool {
	if o != nil && !IsNil(o.PhoneUseType) {
		return true
	}

	return false
}

// SetPhoneUseType gets a reference to the given string and assigns it to the PhoneUseType field.
func (o *TelephoneType) SetPhoneUseType(v string) {
	o.PhoneUseType = &v
}

// GetPhoneUseTypeDescription returns the PhoneUseTypeDescription field value if set, zero value otherwise.
func (o *TelephoneType) GetPhoneUseTypeDescription() string {
	if o == nil || IsNil(o.PhoneUseTypeDescription) {
		var ret string
		return ret
	}
	return *o.PhoneUseTypeDescription
}

// GetPhoneUseTypeDescriptionOk returns a tuple with the PhoneUseTypeDescription field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetPhoneUseTypeDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.PhoneUseTypeDescription) {
		return nil, false
	}
	return o.PhoneUseTypeDescription, true
}

// HasPhoneUseTypeDescription returns a boolean if a field has been set.
func (o *TelephoneType) HasPhoneUseTypeDescription() bool {
	if o != nil && !IsNil(o.PhoneUseTypeDescription) {
		return true
	}

	return false
}

// SetPhoneUseTypeDescription gets a reference to the given string and assigns it to the PhoneUseTypeDescription field.
func (o *TelephoneType) SetPhoneUseTypeDescription(v string) {
	o.PhoneUseTypeDescription = &v
}

// GetPrimaryInd returns the PrimaryInd field value if set, zero value otherwise.
func (o *TelephoneType) GetPrimaryInd() bool {
	if o == nil || IsNil(o.PrimaryInd) {
		var ret bool
		return ret
	}
	return *o.PrimaryInd
}

// GetPrimaryIndOk returns a tuple with the PrimaryInd field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TelephoneType) GetPrimaryIndOk() (*bool, bool) {
	if o == nil || IsNil(o.PrimaryInd) {
		return nil, false
	}
	return o.PrimaryInd, true
}

// HasPrimaryInd returns a boolean if a field has been set.
func (o *TelephoneType) HasPrimaryInd() bool {
	if o != nil && !IsNil(o.PrimaryInd) {
		return true
	}

	return false
}

// SetPrimaryInd gets a reference to the given bool and assigns it to the PrimaryInd field.
func (o *TelephoneType) SetPrimaryInd(v bool) {
	o.PrimaryInd = &v
}

func (o TelephoneType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TelephoneType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CreateDateTime) {
		toSerialize["createDateTime"] = o.CreateDateTime
	}
	if !IsNil(o.CreatorId) {
		toSerialize["creatorId"] = o.CreatorId
	}
	if !IsNil(o.Extension) {
		toSerialize["extension"] = o.Extension
	}
	if !IsNil(o.LastModifierId) {
		toSerialize["lastModifierId"] = o.LastModifierId
	}
	if !IsNil(o.LastModifyDateTime) {
		toSerialize["lastModifyDateTime"] = o.LastModifyDateTime
	}
	if !IsNil(o.OrderSequence) {
		toSerialize["orderSequence"] = o.OrderSequence
	}
	if !IsNil(o.PhoneNumber) {
		toSerialize["phoneNumber"] = o.PhoneNumber
	}
	if !IsNil(o.PhoneTechType) {
		toSerialize["phoneTechType"] = o.PhoneTechType
	}
	if !IsNil(o.PhoneUseType) {
		toSerialize["phoneUseType"] = o.PhoneUseType
	}
	if !IsNil(o.PhoneUseTypeDescription) {
		toSerialize["phoneUseTypeDescription"] = o.PhoneUseTypeDescription
	}
	if !IsNil(o.PrimaryInd) {
		toSerialize["primaryInd"] = o.PrimaryInd
	}
	return toSerialize, nil
}

type NullableTelephoneType struct {
	value *TelephoneType
	isSet bool
}

func (v NullableTelephoneType) Get() *TelephoneType {
	return v.value
}

func (v *NullableTelephoneType) Set(val *TelephoneType) {
	v.value = val
	v.isSet = true
}

func (v NullableTelephoneType) IsSet() bool {
	return v.isSet
}

func (v *NullableTelephoneType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTelephoneType(val *TelephoneType) *NullableTelephoneType {
	return &NullableTelephoneType{value: val, isSet: true}
}

func (v NullableTelephoneType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTelephoneType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


