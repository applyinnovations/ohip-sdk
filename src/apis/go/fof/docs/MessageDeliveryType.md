# MessageDeliveryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryStatus** | Pointer to [**MessageStatusType**](MessageStatusType.md) |  | [optional] 
**DeliveryDate** | Pointer to **time.Time** | Date the message has been delivered (marked as received) | [optional] 
**DeliveredBy** | Pointer to **string** | User who delivered the message (who marked message as received) | [optional] 
**PrintDate** | Pointer to **time.Time** | Date when message has been printed | [optional] 
**TextMessageSentDate** | Pointer to **time.Time** | Date when message has been sent via SMS | [optional] 
**TextMessageSentBy** | Pointer to **string** | User who sent the message | [optional] 
**TextMessageSentById** | Pointer to **int32** | User Id of who sent the message | [optional] 
**TextMessageRecipientNo** | Pointer to **string** | Number in which the message is to be sent. | [optional] 

## Methods

### NewMessageDeliveryType

`func NewMessageDeliveryType() *MessageDeliveryType`

NewMessageDeliveryType instantiates a new MessageDeliveryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMessageDeliveryTypeWithDefaults

`func NewMessageDeliveryTypeWithDefaults() *MessageDeliveryType`

NewMessageDeliveryTypeWithDefaults instantiates a new MessageDeliveryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryStatus

`func (o *MessageDeliveryType) GetDeliveryStatus() MessageStatusType`

GetDeliveryStatus returns the DeliveryStatus field if non-nil, zero value otherwise.

### GetDeliveryStatusOk

`func (o *MessageDeliveryType) GetDeliveryStatusOk() (*MessageStatusType, bool)`

GetDeliveryStatusOk returns a tuple with the DeliveryStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryStatus

`func (o *MessageDeliveryType) SetDeliveryStatus(v MessageStatusType)`

SetDeliveryStatus sets DeliveryStatus field to given value.

### HasDeliveryStatus

`func (o *MessageDeliveryType) HasDeliveryStatus() bool`

HasDeliveryStatus returns a boolean if a field has been set.

### GetDeliveryDate

`func (o *MessageDeliveryType) GetDeliveryDate() time.Time`

GetDeliveryDate returns the DeliveryDate field if non-nil, zero value otherwise.

### GetDeliveryDateOk

`func (o *MessageDeliveryType) GetDeliveryDateOk() (*time.Time, bool)`

GetDeliveryDateOk returns a tuple with the DeliveryDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryDate

`func (o *MessageDeliveryType) SetDeliveryDate(v time.Time)`

SetDeliveryDate sets DeliveryDate field to given value.

### HasDeliveryDate

`func (o *MessageDeliveryType) HasDeliveryDate() bool`

HasDeliveryDate returns a boolean if a field has been set.

### GetDeliveredBy

`func (o *MessageDeliveryType) GetDeliveredBy() string`

GetDeliveredBy returns the DeliveredBy field if non-nil, zero value otherwise.

### GetDeliveredByOk

`func (o *MessageDeliveryType) GetDeliveredByOk() (*string, bool)`

GetDeliveredByOk returns a tuple with the DeliveredBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveredBy

`func (o *MessageDeliveryType) SetDeliveredBy(v string)`

SetDeliveredBy sets DeliveredBy field to given value.

### HasDeliveredBy

`func (o *MessageDeliveryType) HasDeliveredBy() bool`

HasDeliveredBy returns a boolean if a field has been set.

### GetPrintDate

`func (o *MessageDeliveryType) GetPrintDate() time.Time`

GetPrintDate returns the PrintDate field if non-nil, zero value otherwise.

### GetPrintDateOk

`func (o *MessageDeliveryType) GetPrintDateOk() (*time.Time, bool)`

GetPrintDateOk returns a tuple with the PrintDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintDate

`func (o *MessageDeliveryType) SetPrintDate(v time.Time)`

SetPrintDate sets PrintDate field to given value.

### HasPrintDate

`func (o *MessageDeliveryType) HasPrintDate() bool`

HasPrintDate returns a boolean if a field has been set.

### GetTextMessageSentDate

`func (o *MessageDeliveryType) GetTextMessageSentDate() time.Time`

GetTextMessageSentDate returns the TextMessageSentDate field if non-nil, zero value otherwise.

### GetTextMessageSentDateOk

`func (o *MessageDeliveryType) GetTextMessageSentDateOk() (*time.Time, bool)`

GetTextMessageSentDateOk returns a tuple with the TextMessageSentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextMessageSentDate

`func (o *MessageDeliveryType) SetTextMessageSentDate(v time.Time)`

SetTextMessageSentDate sets TextMessageSentDate field to given value.

### HasTextMessageSentDate

`func (o *MessageDeliveryType) HasTextMessageSentDate() bool`

HasTextMessageSentDate returns a boolean if a field has been set.

### GetTextMessageSentBy

`func (o *MessageDeliveryType) GetTextMessageSentBy() string`

GetTextMessageSentBy returns the TextMessageSentBy field if non-nil, zero value otherwise.

### GetTextMessageSentByOk

`func (o *MessageDeliveryType) GetTextMessageSentByOk() (*string, bool)`

GetTextMessageSentByOk returns a tuple with the TextMessageSentBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextMessageSentBy

`func (o *MessageDeliveryType) SetTextMessageSentBy(v string)`

SetTextMessageSentBy sets TextMessageSentBy field to given value.

### HasTextMessageSentBy

`func (o *MessageDeliveryType) HasTextMessageSentBy() bool`

HasTextMessageSentBy returns a boolean if a field has been set.

### GetTextMessageSentById

`func (o *MessageDeliveryType) GetTextMessageSentById() int32`

GetTextMessageSentById returns the TextMessageSentById field if non-nil, zero value otherwise.

### GetTextMessageSentByIdOk

`func (o *MessageDeliveryType) GetTextMessageSentByIdOk() (*int32, bool)`

GetTextMessageSentByIdOk returns a tuple with the TextMessageSentById field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextMessageSentById

`func (o *MessageDeliveryType) SetTextMessageSentById(v int32)`

SetTextMessageSentById sets TextMessageSentById field to given value.

### HasTextMessageSentById

`func (o *MessageDeliveryType) HasTextMessageSentById() bool`

HasTextMessageSentById returns a boolean if a field has been set.

### GetTextMessageRecipientNo

`func (o *MessageDeliveryType) GetTextMessageRecipientNo() string`

GetTextMessageRecipientNo returns the TextMessageRecipientNo field if non-nil, zero value otherwise.

### GetTextMessageRecipientNoOk

`func (o *MessageDeliveryType) GetTextMessageRecipientNoOk() (*string, bool)`

GetTextMessageRecipientNoOk returns a tuple with the TextMessageRecipientNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTextMessageRecipientNo

`func (o *MessageDeliveryType) SetTextMessageRecipientNo(v string)`

SetTextMessageRecipientNo sets TextMessageRecipientNo field to given value.

### HasTextMessageRecipientNo

`func (o *MessageDeliveryType) HasTextMessageRecipientNo() bool`

HasTextMessageRecipientNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


