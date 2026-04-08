# MessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageText** | Pointer to **string** | Message Content | [optional] 
**MessageDate** | Pointer to **string** | Date the message was created | [optional] 
**TypeOfMessage** | Pointer to [**TypeOfMessageType**](TypeOfMessageType.md) |  | [optional] 
**Recipient** | Pointer to **string** | Recipient of the Message | [optional] 
**Operator** | Pointer to **string** | User who created the Message | [optional] 

## Methods

### NewMessageType

`func NewMessageType() *MessageType`

NewMessageType instantiates a new MessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMessageTypeWithDefaults

`func NewMessageTypeWithDefaults() *MessageType`

NewMessageTypeWithDefaults instantiates a new MessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageText

`func (o *MessageType) GetMessageText() string`

GetMessageText returns the MessageText field if non-nil, zero value otherwise.

### GetMessageTextOk

`func (o *MessageType) GetMessageTextOk() (*string, bool)`

GetMessageTextOk returns a tuple with the MessageText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageText

`func (o *MessageType) SetMessageText(v string)`

SetMessageText sets MessageText field to given value.

### HasMessageText

`func (o *MessageType) HasMessageText() bool`

HasMessageText returns a boolean if a field has been set.

### GetMessageDate

`func (o *MessageType) GetMessageDate() string`

GetMessageDate returns the MessageDate field if non-nil, zero value otherwise.

### GetMessageDateOk

`func (o *MessageType) GetMessageDateOk() (*string, bool)`

GetMessageDateOk returns a tuple with the MessageDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageDate

`func (o *MessageType) SetMessageDate(v string)`

SetMessageDate sets MessageDate field to given value.

### HasMessageDate

`func (o *MessageType) HasMessageDate() bool`

HasMessageDate returns a boolean if a field has been set.

### GetTypeOfMessage

`func (o *MessageType) GetTypeOfMessage() TypeOfMessageType`

GetTypeOfMessage returns the TypeOfMessage field if non-nil, zero value otherwise.

### GetTypeOfMessageOk

`func (o *MessageType) GetTypeOfMessageOk() (*TypeOfMessageType, bool)`

GetTypeOfMessageOk returns a tuple with the TypeOfMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeOfMessage

`func (o *MessageType) SetTypeOfMessage(v TypeOfMessageType)`

SetTypeOfMessage sets TypeOfMessage field to given value.

### HasTypeOfMessage

`func (o *MessageType) HasTypeOfMessage() bool`

HasTypeOfMessage returns a boolean if a field has been set.

### GetRecipient

`func (o *MessageType) GetRecipient() string`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *MessageType) GetRecipientOk() (*string, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *MessageType) SetRecipient(v string)`

SetRecipient sets Recipient field to given value.

### HasRecipient

`func (o *MessageType) HasRecipient() bool`

HasRecipient returns a boolean if a field has been set.

### GetOperator

`func (o *MessageType) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *MessageType) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *MessageType) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *MessageType) HasOperator() bool`

HasOperator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


