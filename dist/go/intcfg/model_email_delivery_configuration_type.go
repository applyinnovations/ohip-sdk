/*
OPERA Cloud Integration Configuration API

APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package intcfg

import (
	"encoding/json"
)

// checks if the EmailDeliveryConfigurationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EmailDeliveryConfigurationType{}

// EmailDeliveryConfigurationType Email content configuration template
type EmailDeliveryConfigurationType struct {
	FromAddress *string `json:"fromAddress,omitempty"`
	UserId *string `json:"userId,omitempty"`
	UserPassword *string `json:"userPassword,omitempty"`
	ServerName *string `json:"serverName,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Body *string `json:"body,omitempty"`
	Format *EmailDeliveryFormatType `json:"format,omitempty"`
	Type *EmailDeliveryMethodType `json:"type,omitempty"`
	// Hotel code
	HotelId *string `json:"hotelId,omitempty"`
	// This option must be selected in order to activate emailing from an SMTP compliant email server
	ActivateDelivery *bool `json:"activateDelivery,omitempty"`
	// Available for Confirmation Letters only and when Activate Email Delivery is selected
	HTMLFormatDelivery *bool `json:"hTMLFormatDelivery,omitempty"`
	AttachICalender *bool `json:"attachICalender,omitempty"`
}

// NewEmailDeliveryConfigurationType instantiates a new EmailDeliveryConfigurationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEmailDeliveryConfigurationType() *EmailDeliveryConfigurationType {
	this := EmailDeliveryConfigurationType{}
	return &this
}

// NewEmailDeliveryConfigurationTypeWithDefaults instantiates a new EmailDeliveryConfigurationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEmailDeliveryConfigurationTypeWithDefaults() *EmailDeliveryConfigurationType {
	this := EmailDeliveryConfigurationType{}
	return &this
}

// GetFromAddress returns the FromAddress field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetFromAddress() string {
	if o == nil || IsNil(o.FromAddress) {
		var ret string
		return ret
	}
	return *o.FromAddress
}

// GetFromAddressOk returns a tuple with the FromAddress field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetFromAddressOk() (*string, bool) {
	if o == nil || IsNil(o.FromAddress) {
		return nil, false
	}
	return o.FromAddress, true
}

// HasFromAddress returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasFromAddress() bool {
	if o != nil && !IsNil(o.FromAddress) {
		return true
	}

	return false
}

// SetFromAddress gets a reference to the given string and assigns it to the FromAddress field.
func (o *EmailDeliveryConfigurationType) SetFromAddress(v string) {
	o.FromAddress = &v
}

// GetUserId returns the UserId field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetUserId() string {
	if o == nil || IsNil(o.UserId) {
		var ret string
		return ret
	}
	return *o.UserId
}

// GetUserIdOk returns a tuple with the UserId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetUserIdOk() (*string, bool) {
	if o == nil || IsNil(o.UserId) {
		return nil, false
	}
	return o.UserId, true
}

// HasUserId returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasUserId() bool {
	if o != nil && !IsNil(o.UserId) {
		return true
	}

	return false
}

// SetUserId gets a reference to the given string and assigns it to the UserId field.
func (o *EmailDeliveryConfigurationType) SetUserId(v string) {
	o.UserId = &v
}

// GetUserPassword returns the UserPassword field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetUserPassword() string {
	if o == nil || IsNil(o.UserPassword) {
		var ret string
		return ret
	}
	return *o.UserPassword
}

// GetUserPasswordOk returns a tuple with the UserPassword field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetUserPasswordOk() (*string, bool) {
	if o == nil || IsNil(o.UserPassword) {
		return nil, false
	}
	return o.UserPassword, true
}

// HasUserPassword returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasUserPassword() bool {
	if o != nil && !IsNil(o.UserPassword) {
		return true
	}

	return false
}

// SetUserPassword gets a reference to the given string and assigns it to the UserPassword field.
func (o *EmailDeliveryConfigurationType) SetUserPassword(v string) {
	o.UserPassword = &v
}

// GetServerName returns the ServerName field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetServerName() string {
	if o == nil || IsNil(o.ServerName) {
		var ret string
		return ret
	}
	return *o.ServerName
}

// GetServerNameOk returns a tuple with the ServerName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetServerNameOk() (*string, bool) {
	if o == nil || IsNil(o.ServerName) {
		return nil, false
	}
	return o.ServerName, true
}

// HasServerName returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasServerName() bool {
	if o != nil && !IsNil(o.ServerName) {
		return true
	}

	return false
}

// SetServerName gets a reference to the given string and assigns it to the ServerName field.
func (o *EmailDeliveryConfigurationType) SetServerName(v string) {
	o.ServerName = &v
}

// GetSubject returns the Subject field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetSubject() string {
	if o == nil || IsNil(o.Subject) {
		var ret string
		return ret
	}
	return *o.Subject
}

// GetSubjectOk returns a tuple with the Subject field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetSubjectOk() (*string, bool) {
	if o == nil || IsNil(o.Subject) {
		return nil, false
	}
	return o.Subject, true
}

// HasSubject returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasSubject() bool {
	if o != nil && !IsNil(o.Subject) {
		return true
	}

	return false
}

// SetSubject gets a reference to the given string and assigns it to the Subject field.
func (o *EmailDeliveryConfigurationType) SetSubject(v string) {
	o.Subject = &v
}

// GetBody returns the Body field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetBody() string {
	if o == nil || IsNil(o.Body) {
		var ret string
		return ret
	}
	return *o.Body
}

// GetBodyOk returns a tuple with the Body field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetBodyOk() (*string, bool) {
	if o == nil || IsNil(o.Body) {
		return nil, false
	}
	return o.Body, true
}

// HasBody returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasBody() bool {
	if o != nil && !IsNil(o.Body) {
		return true
	}

	return false
}

// SetBody gets a reference to the given string and assigns it to the Body field.
func (o *EmailDeliveryConfigurationType) SetBody(v string) {
	o.Body = &v
}

// GetFormat returns the Format field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetFormat() EmailDeliveryFormatType {
	if o == nil || IsNil(o.Format) {
		var ret EmailDeliveryFormatType
		return ret
	}
	return *o.Format
}

// GetFormatOk returns a tuple with the Format field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetFormatOk() (*EmailDeliveryFormatType, bool) {
	if o == nil || IsNil(o.Format) {
		return nil, false
	}
	return o.Format, true
}

// HasFormat returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasFormat() bool {
	if o != nil && !IsNil(o.Format) {
		return true
	}

	return false
}

// SetFormat gets a reference to the given EmailDeliveryFormatType and assigns it to the Format field.
func (o *EmailDeliveryConfigurationType) SetFormat(v EmailDeliveryFormatType) {
	o.Format = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetType() EmailDeliveryMethodType {
	if o == nil || IsNil(o.Type) {
		var ret EmailDeliveryMethodType
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetTypeOk() (*EmailDeliveryMethodType, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given EmailDeliveryMethodType and assigns it to the Type field.
func (o *EmailDeliveryConfigurationType) SetType(v EmailDeliveryMethodType) {
	o.Type = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *EmailDeliveryConfigurationType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetActivateDelivery returns the ActivateDelivery field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetActivateDelivery() bool {
	if o == nil || IsNil(o.ActivateDelivery) {
		var ret bool
		return ret
	}
	return *o.ActivateDelivery
}

// GetActivateDeliveryOk returns a tuple with the ActivateDelivery field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetActivateDeliveryOk() (*bool, bool) {
	if o == nil || IsNil(o.ActivateDelivery) {
		return nil, false
	}
	return o.ActivateDelivery, true
}

// HasActivateDelivery returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasActivateDelivery() bool {
	if o != nil && !IsNil(o.ActivateDelivery) {
		return true
	}

	return false
}

// SetActivateDelivery gets a reference to the given bool and assigns it to the ActivateDelivery field.
func (o *EmailDeliveryConfigurationType) SetActivateDelivery(v bool) {
	o.ActivateDelivery = &v
}

// GetHTMLFormatDelivery returns the HTMLFormatDelivery field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetHTMLFormatDelivery() bool {
	if o == nil || IsNil(o.HTMLFormatDelivery) {
		var ret bool
		return ret
	}
	return *o.HTMLFormatDelivery
}

// GetHTMLFormatDeliveryOk returns a tuple with the HTMLFormatDelivery field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetHTMLFormatDeliveryOk() (*bool, bool) {
	if o == nil || IsNil(o.HTMLFormatDelivery) {
		return nil, false
	}
	return o.HTMLFormatDelivery, true
}

// HasHTMLFormatDelivery returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasHTMLFormatDelivery() bool {
	if o != nil && !IsNil(o.HTMLFormatDelivery) {
		return true
	}

	return false
}

// SetHTMLFormatDelivery gets a reference to the given bool and assigns it to the HTMLFormatDelivery field.
func (o *EmailDeliveryConfigurationType) SetHTMLFormatDelivery(v bool) {
	o.HTMLFormatDelivery = &v
}

// GetAttachICalender returns the AttachICalender field value if set, zero value otherwise.
func (o *EmailDeliveryConfigurationType) GetAttachICalender() bool {
	if o == nil || IsNil(o.AttachICalender) {
		var ret bool
		return ret
	}
	return *o.AttachICalender
}

// GetAttachICalenderOk returns a tuple with the AttachICalender field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EmailDeliveryConfigurationType) GetAttachICalenderOk() (*bool, bool) {
	if o == nil || IsNil(o.AttachICalender) {
		return nil, false
	}
	return o.AttachICalender, true
}

// HasAttachICalender returns a boolean if a field has been set.
func (o *EmailDeliveryConfigurationType) HasAttachICalender() bool {
	if o != nil && !IsNil(o.AttachICalender) {
		return true
	}

	return false
}

// SetAttachICalender gets a reference to the given bool and assigns it to the AttachICalender field.
func (o *EmailDeliveryConfigurationType) SetAttachICalender(v bool) {
	o.AttachICalender = &v
}

func (o EmailDeliveryConfigurationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EmailDeliveryConfigurationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.FromAddress) {
		toSerialize["fromAddress"] = o.FromAddress
	}
	if !IsNil(o.UserId) {
		toSerialize["userId"] = o.UserId
	}
	if !IsNil(o.UserPassword) {
		toSerialize["userPassword"] = o.UserPassword
	}
	if !IsNil(o.ServerName) {
		toSerialize["serverName"] = o.ServerName
	}
	if !IsNil(o.Subject) {
		toSerialize["subject"] = o.Subject
	}
	if !IsNil(o.Body) {
		toSerialize["body"] = o.Body
	}
	if !IsNil(o.Format) {
		toSerialize["format"] = o.Format
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ActivateDelivery) {
		toSerialize["activateDelivery"] = o.ActivateDelivery
	}
	if !IsNil(o.HTMLFormatDelivery) {
		toSerialize["hTMLFormatDelivery"] = o.HTMLFormatDelivery
	}
	if !IsNil(o.AttachICalender) {
		toSerialize["attachICalender"] = o.AttachICalender
	}
	return toSerialize, nil
}

type NullableEmailDeliveryConfigurationType struct {
	value *EmailDeliveryConfigurationType
	isSet bool
}

func (v NullableEmailDeliveryConfigurationType) Get() *EmailDeliveryConfigurationType {
	return v.value
}

func (v *NullableEmailDeliveryConfigurationType) Set(val *EmailDeliveryConfigurationType) {
	v.value = val
	v.isSet = true
}

func (v NullableEmailDeliveryConfigurationType) IsSet() bool {
	return v.isSet
}

func (v *NullableEmailDeliveryConfigurationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEmailDeliveryConfigurationType(val *EmailDeliveryConfigurationType) *NullableEmailDeliveryConfigurationType {
	return &NullableEmailDeliveryConfigurationType{value: val, isSet: true}
}

func (v NullableEmailDeliveryConfigurationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEmailDeliveryConfigurationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

