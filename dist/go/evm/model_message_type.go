/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the MessageType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MessageType{}

// MessageType Holds the Message Information
type MessageType struct {
	// Date the message was created
	MessageDate *string `json:"messageDate,omitempty"`
	// Message Content
	MessageText *string `json:"messageText,omitempty"`
	// User who created the Message
	Operator *string `json:"operator,omitempty"`
	// Recipient of the Message
	Recipient *string `json:"recipient,omitempty"`
	TypeOfMessage *TypeOfMessageType `json:"typeOfMessage,omitempty"`
}

// NewMessageType instantiates a new MessageType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMessageType() *MessageType {
	this := MessageType{}
	return &this
}

// NewMessageTypeWithDefaults instantiates a new MessageType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMessageTypeWithDefaults() *MessageType {
	this := MessageType{}
	return &this
}

// GetMessageDate returns the MessageDate field value if set, zero value otherwise.
func (o *MessageType) GetMessageDate() string {
	if o == nil || IsNil(o.MessageDate) {
		var ret string
		return ret
	}
	return *o.MessageDate
}

// GetMessageDateOk returns a tuple with the MessageDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MessageType) GetMessageDateOk() (*string, bool) {
	if o == nil || IsNil(o.MessageDate) {
		return nil, false
	}
	return o.MessageDate, true
}

// HasMessageDate returns a boolean if a field has been set.
func (o *MessageType) HasMessageDate() bool {
	if o != nil && !IsNil(o.MessageDate) {
		return true
	}

	return false
}

// SetMessageDate gets a reference to the given string and assigns it to the MessageDate field.
func (o *MessageType) SetMessageDate(v string) {
	o.MessageDate = &v
}

// GetMessageText returns the MessageText field value if set, zero value otherwise.
func (o *MessageType) GetMessageText() string {
	if o == nil || IsNil(o.MessageText) {
		var ret string
		return ret
	}
	return *o.MessageText
}

// GetMessageTextOk returns a tuple with the MessageText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MessageType) GetMessageTextOk() (*string, bool) {
	if o == nil || IsNil(o.MessageText) {
		return nil, false
	}
	return o.MessageText, true
}

// HasMessageText returns a boolean if a field has been set.
func (o *MessageType) HasMessageText() bool {
	if o != nil && !IsNil(o.MessageText) {
		return true
	}

	return false
}

// SetMessageText gets a reference to the given string and assigns it to the MessageText field.
func (o *MessageType) SetMessageText(v string) {
	o.MessageText = &v
}

// GetOperator returns the Operator field value if set, zero value otherwise.
func (o *MessageType) GetOperator() string {
	if o == nil || IsNil(o.Operator) {
		var ret string
		return ret
	}
	return *o.Operator
}

// GetOperatorOk returns a tuple with the Operator field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MessageType) GetOperatorOk() (*string, bool) {
	if o == nil || IsNil(o.Operator) {
		return nil, false
	}
	return o.Operator, true
}

// HasOperator returns a boolean if a field has been set.
func (o *MessageType) HasOperator() bool {
	if o != nil && !IsNil(o.Operator) {
		return true
	}

	return false
}

// SetOperator gets a reference to the given string and assigns it to the Operator field.
func (o *MessageType) SetOperator(v string) {
	o.Operator = &v
}

// GetRecipient returns the Recipient field value if set, zero value otherwise.
func (o *MessageType) GetRecipient() string {
	if o == nil || IsNil(o.Recipient) {
		var ret string
		return ret
	}
	return *o.Recipient
}

// GetRecipientOk returns a tuple with the Recipient field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MessageType) GetRecipientOk() (*string, bool) {
	if o == nil || IsNil(o.Recipient) {
		return nil, false
	}
	return o.Recipient, true
}

// HasRecipient returns a boolean if a field has been set.
func (o *MessageType) HasRecipient() bool {
	if o != nil && !IsNil(o.Recipient) {
		return true
	}

	return false
}

// SetRecipient gets a reference to the given string and assigns it to the Recipient field.
func (o *MessageType) SetRecipient(v string) {
	o.Recipient = &v
}

// GetTypeOfMessage returns the TypeOfMessage field value if set, zero value otherwise.
func (o *MessageType) GetTypeOfMessage() TypeOfMessageType {
	if o == nil || IsNil(o.TypeOfMessage) {
		var ret TypeOfMessageType
		return ret
	}
	return *o.TypeOfMessage
}

// GetTypeOfMessageOk returns a tuple with the TypeOfMessage field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MessageType) GetTypeOfMessageOk() (*TypeOfMessageType, bool) {
	if o == nil || IsNil(o.TypeOfMessage) {
		return nil, false
	}
	return o.TypeOfMessage, true
}

// HasTypeOfMessage returns a boolean if a field has been set.
func (o *MessageType) HasTypeOfMessage() bool {
	if o != nil && !IsNil(o.TypeOfMessage) {
		return true
	}

	return false
}

// SetTypeOfMessage gets a reference to the given TypeOfMessageType and assigns it to the TypeOfMessage field.
func (o *MessageType) SetTypeOfMessage(v TypeOfMessageType) {
	o.TypeOfMessage = &v
}

func (o MessageType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MessageType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.MessageDate) {
		toSerialize["messageDate"] = o.MessageDate
	}
	if !IsNil(o.MessageText) {
		toSerialize["messageText"] = o.MessageText
	}
	if !IsNil(o.Operator) {
		toSerialize["operator"] = o.Operator
	}
	if !IsNil(o.Recipient) {
		toSerialize["recipient"] = o.Recipient
	}
	if !IsNil(o.TypeOfMessage) {
		toSerialize["typeOfMessage"] = o.TypeOfMessage
	}
	return toSerialize, nil
}

type NullableMessageType struct {
	value *MessageType
	isSet bool
}

func (v NullableMessageType) Get() *MessageType {
	return v.value
}

func (v *NullableMessageType) Set(val *MessageType) {
	v.value = val
	v.isSet = true
}

func (v NullableMessageType) IsSet() bool {
	return v.isSet
}

func (v *NullableMessageType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMessageType(val *MessageType) *NullableMessageType {
	return &NullableMessageType{value: val, isSet: true}
}

func (v NullableMessageType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMessageType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


