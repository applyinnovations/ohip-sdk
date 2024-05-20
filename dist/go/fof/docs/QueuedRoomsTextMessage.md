# QueuedRoomsTextMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MessageText** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewQueuedRoomsTextMessage

`func NewQueuedRoomsTextMessage() *QueuedRoomsTextMessage`

NewQueuedRoomsTextMessage instantiates a new QueuedRoomsTextMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueuedRoomsTextMessageWithDefaults

`func NewQueuedRoomsTextMessageWithDefaults() *QueuedRoomsTextMessage`

NewQueuedRoomsTextMessageWithDefaults instantiates a new QueuedRoomsTextMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *QueuedRoomsTextMessage) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *QueuedRoomsTextMessage) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *QueuedRoomsTextMessage) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *QueuedRoomsTextMessage) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMessageText

`func (o *QueuedRoomsTextMessage) GetMessageText() string`

GetMessageText returns the MessageText field if non-nil, zero value otherwise.

### GetMessageTextOk

`func (o *QueuedRoomsTextMessage) GetMessageTextOk() (*string, bool)`

GetMessageTextOk returns a tuple with the MessageText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageText

`func (o *QueuedRoomsTextMessage) SetMessageText(v string)`

SetMessageText sets MessageText field to given value.

### HasMessageText

`func (o *QueuedRoomsTextMessage) HasMessageText() bool`

HasMessageText returns a boolean if a field has been set.

### GetWarnings

`func (o *QueuedRoomsTextMessage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *QueuedRoomsTextMessage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *QueuedRoomsTextMessage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *QueuedRoomsTextMessage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


