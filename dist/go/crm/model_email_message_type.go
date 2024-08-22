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

// checks if the EmailMessageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EmailMessageType{}

// EmailMessageType Request object for storing an email.
type EmailMessageType struct {
	// Used for Character Strings, length 0 to 80.
	BlockId *string `json:"blockId,omitempty"`
	// Email in base64 binary format.
	EmailBody *string `json:"emailBody,omitempty"`
	// The date the email was received.
	EmailReceiveDate *string `json:"emailReceiveDate,omitempty"`
	// Email address
	FromAddress *string `json:"fromAddress,omitempty"`
	// Indicates whether the email was sent with an attachment (true) or not (false).
	HasAttachment *bool `json:"hasAttachment,omitempty"`
	// Used for Character Strings, length 0 to 100.
	MessageId *string `json:"messageId,omitempty"`
	// Used for Character Strings, length 0 to 200.
	Subject *string `json:"subject,omitempty"`
	ToAddress []string `json:"toAddress,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEmailMessageType instantiates a new EmailMessageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEmailMessageType() *EmailMessageType {
	this := EmailMessageType{}
	return &this
}

// NewEmailMessageTypeWithDefaults instantiates a new EmailMessageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEmailMessageTypeWithDefaults() *EmailMessageType {
	this := EmailMessageType{}
	return &this
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *EmailMessageType) GetBlockId() string {
	if o == nil || IsNil(o.BlockId) {
		var ret string
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetBlockIdOk() (*string, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *EmailMessageType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given string and assigns it to the BlockId field.
func (o *EmailMessageType) SetBlockId(v string) {
	o.BlockId = &v
}

// GetEmailBody returns the EmailBody field value if set, zero value otherwise.
func (o *EmailMessageType) GetEmailBody() string {
	if o == nil || IsNil(o.EmailBody) {
		var ret string
		return ret
	}
	return *o.EmailBody
}

// GetEmailBodyOk returns a tuple with the EmailBody field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetEmailBodyOk() (*string, bool) {
	if o == nil || IsNil(o.EmailBody) {
		return nil, false
	}
	return o.EmailBody, true
}

// HasEmailBody returns a boolean if a field has been set.
func (o *EmailMessageType) HasEmailBody() bool {
	if o != nil && !IsNil(o.EmailBody) {
		return true
	}

	return false
}

// SetEmailBody gets a reference to the given string and assigns it to the EmailBody field.
func (o *EmailMessageType) SetEmailBody(v string) {
	o.EmailBody = &v
}

// GetEmailReceiveDate returns the EmailReceiveDate field value if set, zero value otherwise.
func (o *EmailMessageType) GetEmailReceiveDate() string {
	if o == nil || IsNil(o.EmailReceiveDate) {
		var ret string
		return ret
	}
	return *o.EmailReceiveDate
}

// GetEmailReceiveDateOk returns a tuple with the EmailReceiveDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetEmailReceiveDateOk() (*string, bool) {
	if o == nil || IsNil(o.EmailReceiveDate) {
		return nil, false
	}
	return o.EmailReceiveDate, true
}

// HasEmailReceiveDate returns a boolean if a field has been set.
func (o *EmailMessageType) HasEmailReceiveDate() bool {
	if o != nil && !IsNil(o.EmailReceiveDate) {
		return true
	}

	return false
}

// SetEmailReceiveDate gets a reference to the given string and assigns it to the EmailReceiveDate field.
func (o *EmailMessageType) SetEmailReceiveDate(v string) {
	o.EmailReceiveDate = &v
}

// GetFromAddress returns the FromAddress field value if set, zero value otherwise.
func (o *EmailMessageType) GetFromAddress() string {
	if o == nil || IsNil(o.FromAddress) {
		var ret string
		return ret
	}
	return *o.FromAddress
}

// GetFromAddressOk returns a tuple with the FromAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetFromAddressOk() (*string, bool) {
	if o == nil || IsNil(o.FromAddress) {
		return nil, false
	}
	return o.FromAddress, true
}

// HasFromAddress returns a boolean if a field has been set.
func (o *EmailMessageType) HasFromAddress() bool {
	if o != nil && !IsNil(o.FromAddress) {
		return true
	}

	return false
}

// SetFromAddress gets a reference to the given string and assigns it to the FromAddress field.
func (o *EmailMessageType) SetFromAddress(v string) {
	o.FromAddress = &v
}

// GetHasAttachment returns the HasAttachment field value if set, zero value otherwise.
func (o *EmailMessageType) GetHasAttachment() bool {
	if o == nil || IsNil(o.HasAttachment) {
		var ret bool
		return ret
	}
	return *o.HasAttachment
}

// GetHasAttachmentOk returns a tuple with the HasAttachment field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetHasAttachmentOk() (*bool, bool) {
	if o == nil || IsNil(o.HasAttachment) {
		return nil, false
	}
	return o.HasAttachment, true
}

// HasHasAttachment returns a boolean if a field has been set.
func (o *EmailMessageType) HasHasAttachment() bool {
	if o != nil && !IsNil(o.HasAttachment) {
		return true
	}

	return false
}

// SetHasAttachment gets a reference to the given bool and assigns it to the HasAttachment field.
func (o *EmailMessageType) SetHasAttachment(v bool) {
	o.HasAttachment = &v
}

// GetMessageId returns the MessageId field value if set, zero value otherwise.
func (o *EmailMessageType) GetMessageId() string {
	if o == nil || IsNil(o.MessageId) {
		var ret string
		return ret
	}
	return *o.MessageId
}

// GetMessageIdOk returns a tuple with the MessageId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetMessageIdOk() (*string, bool) {
	if o == nil || IsNil(o.MessageId) {
		return nil, false
	}
	return o.MessageId, true
}

// HasMessageId returns a boolean if a field has been set.
func (o *EmailMessageType) HasMessageId() bool {
	if o != nil && !IsNil(o.MessageId) {
		return true
	}

	return false
}

// SetMessageId gets a reference to the given string and assigns it to the MessageId field.
func (o *EmailMessageType) SetMessageId(v string) {
	o.MessageId = &v
}

// GetSubject returns the Subject field value if set, zero value otherwise.
func (o *EmailMessageType) GetSubject() string {
	if o == nil || IsNil(o.Subject) {
		var ret string
		return ret
	}
	return *o.Subject
}

// GetSubjectOk returns a tuple with the Subject field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetSubjectOk() (*string, bool) {
	if o == nil || IsNil(o.Subject) {
		return nil, false
	}
	return o.Subject, true
}

// HasSubject returns a boolean if a field has been set.
func (o *EmailMessageType) HasSubject() bool {
	if o != nil && !IsNil(o.Subject) {
		return true
	}

	return false
}

// SetSubject gets a reference to the given string and assigns it to the Subject field.
func (o *EmailMessageType) SetSubject(v string) {
	o.Subject = &v
}

// GetToAddress returns the ToAddress field value if set, zero value otherwise.
func (o *EmailMessageType) GetToAddress() []string {
	if o == nil || IsNil(o.ToAddress) {
		var ret []string
		return ret
	}
	return o.ToAddress
}

// GetToAddressOk returns a tuple with the ToAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetToAddressOk() ([]string, bool) {
	if o == nil || IsNil(o.ToAddress) {
		return nil, false
	}
	return o.ToAddress, true
}

// HasToAddress returns a boolean if a field has been set.
func (o *EmailMessageType) HasToAddress() bool {
	if o != nil && !IsNil(o.ToAddress) {
		return true
	}

	return false
}

// SetToAddress gets a reference to the given []string and assigns it to the ToAddress field.
func (o *EmailMessageType) SetToAddress(v []string) {
	o.ToAddress = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *EmailMessageType) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailMessageType) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *EmailMessageType) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *EmailMessageType) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o EmailMessageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EmailMessageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.EmailBody) {
		toSerialize["emailBody"] = o.EmailBody
	}
	if !IsNil(o.EmailReceiveDate) {
		toSerialize["emailReceiveDate"] = o.EmailReceiveDate
	}
	if !IsNil(o.FromAddress) {
		toSerialize["fromAddress"] = o.FromAddress
	}
	if !IsNil(o.HasAttachment) {
		toSerialize["hasAttachment"] = o.HasAttachment
	}
	if !IsNil(o.MessageId) {
		toSerialize["messageId"] = o.MessageId
	}
	if !IsNil(o.Subject) {
		toSerialize["subject"] = o.Subject
	}
	if !IsNil(o.ToAddress) {
		toSerialize["toAddress"] = o.ToAddress
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEmailMessageType struct {
	value *EmailMessageType
	isSet bool
}

func (v NullableEmailMessageType) Get() *EmailMessageType {
	return v.value
}

func (v *NullableEmailMessageType) Set(val *EmailMessageType) {
	v.value = val
	v.isSet = true
}

func (v NullableEmailMessageType) IsSet() bool {
	return v.isSet
}

func (v *NullableEmailMessageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEmailMessageType(val *EmailMessageType) *NullableEmailMessageType {
	return &NullableEmailMessageType{value: val, isSet: true}
}

func (v NullableEmailMessageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEmailMessageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


