/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ConfirmationType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ConfirmationType{}

// ConfirmationType struct for ConfirmationType
type ConfirmationType struct {
	ConfirmationStyleInfo *ConfirmationStyle `json:"confirmationStyleInfo,omitempty"`
	// List of confirmation letter delivery methods and their status
	DeliveryInfo []ConfDeliveryInfoType `json:"deliveryInfo,omitempty"`
	// Senders Email address.
	FromEmail *string `json:"fromEmail,omitempty"`
	// A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
	Id *string `json:"id,omitempty"`
	// Used to identify the source of the identifier (e.g., IATA, ABTA).
	IdContext *string `json:"idContext,omitempty"`
	// The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated.
	Instance *string `json:"instance,omitempty"`
	RecipientInfo *ConfRecipientInfoType `json:"recipientInfo,omitempty"`
	// Flag to indicate sending confirmation letter as text message.
	SendTextMessage *bool `json:"sendTextMessage,omitempty"`
	// A reference to the type of object defined by the UniqueID element.
	Type *string `json:"type,omitempty"`
	// URL that identifies the location associated with the record identified by the UniqueID.
	Url *string `json:"url,omitempty"`
}

// NewConfirmationType instantiates a new ConfirmationType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewConfirmationType() *ConfirmationType {
	this := ConfirmationType{}
	return &this
}

// NewConfirmationTypeWithDefaults instantiates a new ConfirmationType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewConfirmationTypeWithDefaults() *ConfirmationType {
	this := ConfirmationType{}
	return &this
}

// GetConfirmationStyleInfo returns the ConfirmationStyleInfo field value if set, zero value otherwise.
func (o *ConfirmationType) GetConfirmationStyleInfo() ConfirmationStyle {
	if o == nil || IsNil(o.ConfirmationStyleInfo) {
		var ret ConfirmationStyle
		return ret
	}
	return *o.ConfirmationStyleInfo
}

// GetConfirmationStyleInfoOk returns a tuple with the ConfirmationStyleInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetConfirmationStyleInfoOk() (*ConfirmationStyle, bool) {
	if o == nil || IsNil(o.ConfirmationStyleInfo) {
		return nil, false
	}
	return o.ConfirmationStyleInfo, true
}

// HasConfirmationStyleInfo returns a boolean if a field has been set.
func (o *ConfirmationType) HasConfirmationStyleInfo() bool {
	if o != nil && !IsNil(o.ConfirmationStyleInfo) {
		return true
	}

	return false
}

// SetConfirmationStyleInfo gets a reference to the given ConfirmationStyle and assigns it to the ConfirmationStyleInfo field.
func (o *ConfirmationType) SetConfirmationStyleInfo(v ConfirmationStyle) {
	o.ConfirmationStyleInfo = &v
}

// GetDeliveryInfo returns the DeliveryInfo field value if set, zero value otherwise.
func (o *ConfirmationType) GetDeliveryInfo() []ConfDeliveryInfoType {
	if o == nil || IsNil(o.DeliveryInfo) {
		var ret []ConfDeliveryInfoType
		return ret
	}
	return o.DeliveryInfo
}

// GetDeliveryInfoOk returns a tuple with the DeliveryInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetDeliveryInfoOk() ([]ConfDeliveryInfoType, bool) {
	if o == nil || IsNil(o.DeliveryInfo) {
		return nil, false
	}
	return o.DeliveryInfo, true
}

// HasDeliveryInfo returns a boolean if a field has been set.
func (o *ConfirmationType) HasDeliveryInfo() bool {
	if o != nil && !IsNil(o.DeliveryInfo) {
		return true
	}

	return false
}

// SetDeliveryInfo gets a reference to the given []ConfDeliveryInfoType and assigns it to the DeliveryInfo field.
func (o *ConfirmationType) SetDeliveryInfo(v []ConfDeliveryInfoType) {
	o.DeliveryInfo = v
}

// GetFromEmail returns the FromEmail field value if set, zero value otherwise.
func (o *ConfirmationType) GetFromEmail() string {
	if o == nil || IsNil(o.FromEmail) {
		var ret string
		return ret
	}
	return *o.FromEmail
}

// GetFromEmailOk returns a tuple with the FromEmail field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetFromEmailOk() (*string, bool) {
	if o == nil || IsNil(o.FromEmail) {
		return nil, false
	}
	return o.FromEmail, true
}

// HasFromEmail returns a boolean if a field has been set.
func (o *ConfirmationType) HasFromEmail() bool {
	if o != nil && !IsNil(o.FromEmail) {
		return true
	}

	return false
}

// SetFromEmail gets a reference to the given string and assigns it to the FromEmail field.
func (o *ConfirmationType) SetFromEmail(v string) {
	o.FromEmail = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *ConfirmationType) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *ConfirmationType) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *ConfirmationType) SetId(v string) {
	o.Id = &v
}

// GetIdContext returns the IdContext field value if set, zero value otherwise.
func (o *ConfirmationType) GetIdContext() string {
	if o == nil || IsNil(o.IdContext) {
		var ret string
		return ret
	}
	return *o.IdContext
}

// GetIdContextOk returns a tuple with the IdContext field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetIdContextOk() (*string, bool) {
	if o == nil || IsNil(o.IdContext) {
		return nil, false
	}
	return o.IdContext, true
}

// HasIdContext returns a boolean if a field has been set.
func (o *ConfirmationType) HasIdContext() bool {
	if o != nil && !IsNil(o.IdContext) {
		return true
	}

	return false
}

// SetIdContext gets a reference to the given string and assigns it to the IdContext field.
func (o *ConfirmationType) SetIdContext(v string) {
	o.IdContext = &v
}

// GetInstance returns the Instance field value if set, zero value otherwise.
func (o *ConfirmationType) GetInstance() string {
	if o == nil || IsNil(o.Instance) {
		var ret string
		return ret
	}
	return *o.Instance
}

// GetInstanceOk returns a tuple with the Instance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetInstanceOk() (*string, bool) {
	if o == nil || IsNil(o.Instance) {
		return nil, false
	}
	return o.Instance, true
}

// HasInstance returns a boolean if a field has been set.
func (o *ConfirmationType) HasInstance() bool {
	if o != nil && !IsNil(o.Instance) {
		return true
	}

	return false
}

// SetInstance gets a reference to the given string and assigns it to the Instance field.
func (o *ConfirmationType) SetInstance(v string) {
	o.Instance = &v
}

// GetRecipientInfo returns the RecipientInfo field value if set, zero value otherwise.
func (o *ConfirmationType) GetRecipientInfo() ConfRecipientInfoType {
	if o == nil || IsNil(o.RecipientInfo) {
		var ret ConfRecipientInfoType
		return ret
	}
	return *o.RecipientInfo
}

// GetRecipientInfoOk returns a tuple with the RecipientInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetRecipientInfoOk() (*ConfRecipientInfoType, bool) {
	if o == nil || IsNil(o.RecipientInfo) {
		return nil, false
	}
	return o.RecipientInfo, true
}

// HasRecipientInfo returns a boolean if a field has been set.
func (o *ConfirmationType) HasRecipientInfo() bool {
	if o != nil && !IsNil(o.RecipientInfo) {
		return true
	}

	return false
}

// SetRecipientInfo gets a reference to the given ConfRecipientInfoType and assigns it to the RecipientInfo field.
func (o *ConfirmationType) SetRecipientInfo(v ConfRecipientInfoType) {
	o.RecipientInfo = &v
}

// GetSendTextMessage returns the SendTextMessage field value if set, zero value otherwise.
func (o *ConfirmationType) GetSendTextMessage() bool {
	if o == nil || IsNil(o.SendTextMessage) {
		var ret bool
		return ret
	}
	return *o.SendTextMessage
}

// GetSendTextMessageOk returns a tuple with the SendTextMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetSendTextMessageOk() (*bool, bool) {
	if o == nil || IsNil(o.SendTextMessage) {
		return nil, false
	}
	return o.SendTextMessage, true
}

// HasSendTextMessage returns a boolean if a field has been set.
func (o *ConfirmationType) HasSendTextMessage() bool {
	if o != nil && !IsNil(o.SendTextMessage) {
		return true
	}

	return false
}

// SetSendTextMessage gets a reference to the given bool and assigns it to the SendTextMessage field.
func (o *ConfirmationType) SetSendTextMessage(v bool) {
	o.SendTextMessage = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ConfirmationType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ConfirmationType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ConfirmationType) SetType(v string) {
	o.Type = &v
}

// GetUrl returns the Url field value if set, zero value otherwise.
func (o *ConfirmationType) GetUrl() string {
	if o == nil || IsNil(o.Url) {
		var ret string
		return ret
	}
	return *o.Url
}

// GetUrlOk returns a tuple with the Url field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ConfirmationType) GetUrlOk() (*string, bool) {
	if o == nil || IsNil(o.Url) {
		return nil, false
	}
	return o.Url, true
}

// HasUrl returns a boolean if a field has been set.
func (o *ConfirmationType) HasUrl() bool {
	if o != nil && !IsNil(o.Url) {
		return true
	}

	return false
}

// SetUrl gets a reference to the given string and assigns it to the Url field.
func (o *ConfirmationType) SetUrl(v string) {
	o.Url = &v
}

func (o ConfirmationType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ConfirmationType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConfirmationStyleInfo) {
		toSerialize["confirmationStyleInfo"] = o.ConfirmationStyleInfo
	}
	if !IsNil(o.DeliveryInfo) {
		toSerialize["deliveryInfo"] = o.DeliveryInfo
	}
	if !IsNil(o.FromEmail) {
		toSerialize["fromEmail"] = o.FromEmail
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.IdContext) {
		toSerialize["idContext"] = o.IdContext
	}
	if !IsNil(o.Instance) {
		toSerialize["instance"] = o.Instance
	}
	if !IsNil(o.RecipientInfo) {
		toSerialize["recipientInfo"] = o.RecipientInfo
	}
	if !IsNil(o.SendTextMessage) {
		toSerialize["sendTextMessage"] = o.SendTextMessage
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Url) {
		toSerialize["url"] = o.Url
	}
	return toSerialize, nil
}

type NullableConfirmationType struct {
	value *ConfirmationType
	isSet bool
}

func (v NullableConfirmationType) Get() *ConfirmationType {
	return v.value
}

func (v *NullableConfirmationType) Set(val *ConfirmationType) {
	v.value = val
	v.isSet = true
}

func (v NullableConfirmationType) IsSet() bool {
	return v.isSet
}

func (v *NullableConfirmationType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableConfirmationType(val *ConfirmationType) *NullableConfirmationType {
	return &NullableConfirmationType{value: val, isSet: true}
}

func (v NullableConfirmationType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableConfirmationType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

