# IntegrationOutboundMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MessageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EnqueueTime** | Pointer to **time.Time** | TimeStamp of enqueue of message in OXI Monitoring tables (Inbound/Outbound). | [optional] 
**DequeueTime** | Pointer to **time.Time** | TimeStamp of dequeue of message from OXI Monitoring tables (Inbound/Outbound). | [optional] 
**Interface** | Pointer to **string** | The interface this message was created for | [optional] 
**MessageType** | Pointer to **string** | This identifies the kind of message sent (e.g., reservation, profile, rate, block, rate restriction, inventory, and result) | [optional] 
**HotelId** | Pointer to **string** | Property this message was sent from. | [optional] 
**MessageStatus** | Pointer to **string** | Status of the transmitted message. | [optional] 
**Reviewed** | Pointer to **bool** | Flag that tells whether the message is marked as reviewed or not | [optional] 
**MessageReference** | Pointer to **string** | Integration message reference | [optional] 
**MessagePrimayInfo** | Pointer to **string** | Information that was obtained in a message such as guest last/first name from a reservation message or block code from a block message. | [optional] 
**Notices** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**AttachmentExists** | Pointer to **bool** | Flag that tells whether the message has attachments or not | [optional] 
**BusinessEventQueue** | Pointer to [**PendingBusinessEventType**](PendingBusinessEventType.md) |  | [optional] 
**UpdateTime** | Pointer to **time.Time** | TimeStamp of change in message processing status (PROCESSED/FAILED/RESEND_SUCCESS/REJECT). | [optional] 
**ResultTime** | Pointer to **time.Time** | TimeStamp of receival of acknowledgement from external system (RESULT_SUCCESS/RESULT_FAILED). | [optional] 
**DeliveryTime** | Pointer to **time.Time** | TimeStamp of receival of http call status intiated by the OXI processor to deliver message to the external system. | [optional] 

## Methods

### NewIntegrationOutboundMessageType

`func NewIntegrationOutboundMessageType() *IntegrationOutboundMessageType`

NewIntegrationOutboundMessageType instantiates a new IntegrationOutboundMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntegrationOutboundMessageTypeWithDefaults

`func NewIntegrationOutboundMessageTypeWithDefaults() *IntegrationOutboundMessageType`

NewIntegrationOutboundMessageTypeWithDefaults instantiates a new IntegrationOutboundMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageId

`func (o *IntegrationOutboundMessageType) GetMessageId() UniqueIDType`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *IntegrationOutboundMessageType) GetMessageIdOk() (*UniqueIDType, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *IntegrationOutboundMessageType) SetMessageId(v UniqueIDType)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *IntegrationOutboundMessageType) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetEnqueueTime

`func (o *IntegrationOutboundMessageType) GetEnqueueTime() time.Time`

GetEnqueueTime returns the EnqueueTime field if non-nil, zero value otherwise.

### GetEnqueueTimeOk

`func (o *IntegrationOutboundMessageType) GetEnqueueTimeOk() (*time.Time, bool)`

GetEnqueueTimeOk returns a tuple with the EnqueueTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnqueueTime

`func (o *IntegrationOutboundMessageType) SetEnqueueTime(v time.Time)`

SetEnqueueTime sets EnqueueTime field to given value.

### HasEnqueueTime

`func (o *IntegrationOutboundMessageType) HasEnqueueTime() bool`

HasEnqueueTime returns a boolean if a field has been set.

### GetDequeueTime

`func (o *IntegrationOutboundMessageType) GetDequeueTime() time.Time`

GetDequeueTime returns the DequeueTime field if non-nil, zero value otherwise.

### GetDequeueTimeOk

`func (o *IntegrationOutboundMessageType) GetDequeueTimeOk() (*time.Time, bool)`

GetDequeueTimeOk returns a tuple with the DequeueTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDequeueTime

`func (o *IntegrationOutboundMessageType) SetDequeueTime(v time.Time)`

SetDequeueTime sets DequeueTime field to given value.

### HasDequeueTime

`func (o *IntegrationOutboundMessageType) HasDequeueTime() bool`

HasDequeueTime returns a boolean if a field has been set.

### GetInterface

`func (o *IntegrationOutboundMessageType) GetInterface() string`

GetInterface returns the Interface field if non-nil, zero value otherwise.

### GetInterfaceOk

`func (o *IntegrationOutboundMessageType) GetInterfaceOk() (*string, bool)`

GetInterfaceOk returns a tuple with the Interface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterface

`func (o *IntegrationOutboundMessageType) SetInterface(v string)`

SetInterface sets Interface field to given value.

### HasInterface

`func (o *IntegrationOutboundMessageType) HasInterface() bool`

HasInterface returns a boolean if a field has been set.

### GetMessageType

`func (o *IntegrationOutboundMessageType) GetMessageType() string`

GetMessageType returns the MessageType field if non-nil, zero value otherwise.

### GetMessageTypeOk

`func (o *IntegrationOutboundMessageType) GetMessageTypeOk() (*string, bool)`

GetMessageTypeOk returns a tuple with the MessageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageType

`func (o *IntegrationOutboundMessageType) SetMessageType(v string)`

SetMessageType sets MessageType field to given value.

### HasMessageType

`func (o *IntegrationOutboundMessageType) HasMessageType() bool`

HasMessageType returns a boolean if a field has been set.

### GetHotelId

`func (o *IntegrationOutboundMessageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *IntegrationOutboundMessageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *IntegrationOutboundMessageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *IntegrationOutboundMessageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMessageStatus

`func (o *IntegrationOutboundMessageType) GetMessageStatus() string`

GetMessageStatus returns the MessageStatus field if non-nil, zero value otherwise.

### GetMessageStatusOk

`func (o *IntegrationOutboundMessageType) GetMessageStatusOk() (*string, bool)`

GetMessageStatusOk returns a tuple with the MessageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageStatus

`func (o *IntegrationOutboundMessageType) SetMessageStatus(v string)`

SetMessageStatus sets MessageStatus field to given value.

### HasMessageStatus

`func (o *IntegrationOutboundMessageType) HasMessageStatus() bool`

HasMessageStatus returns a boolean if a field has been set.

### GetReviewed

`func (o *IntegrationOutboundMessageType) GetReviewed() bool`

GetReviewed returns the Reviewed field if non-nil, zero value otherwise.

### GetReviewedOk

`func (o *IntegrationOutboundMessageType) GetReviewedOk() (*bool, bool)`

GetReviewedOk returns a tuple with the Reviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewed

`func (o *IntegrationOutboundMessageType) SetReviewed(v bool)`

SetReviewed sets Reviewed field to given value.

### HasReviewed

`func (o *IntegrationOutboundMessageType) HasReviewed() bool`

HasReviewed returns a boolean if a field has been set.

### GetMessageReference

`func (o *IntegrationOutboundMessageType) GetMessageReference() string`

GetMessageReference returns the MessageReference field if non-nil, zero value otherwise.

### GetMessageReferenceOk

`func (o *IntegrationOutboundMessageType) GetMessageReferenceOk() (*string, bool)`

GetMessageReferenceOk returns a tuple with the MessageReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageReference

`func (o *IntegrationOutboundMessageType) SetMessageReference(v string)`

SetMessageReference sets MessageReference field to given value.

### HasMessageReference

`func (o *IntegrationOutboundMessageType) HasMessageReference() bool`

HasMessageReference returns a boolean if a field has been set.

### GetMessagePrimayInfo

`func (o *IntegrationOutboundMessageType) GetMessagePrimayInfo() string`

GetMessagePrimayInfo returns the MessagePrimayInfo field if non-nil, zero value otherwise.

### GetMessagePrimayInfoOk

`func (o *IntegrationOutboundMessageType) GetMessagePrimayInfoOk() (*string, bool)`

GetMessagePrimayInfoOk returns a tuple with the MessagePrimayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessagePrimayInfo

`func (o *IntegrationOutboundMessageType) SetMessagePrimayInfo(v string)`

SetMessagePrimayInfo sets MessagePrimayInfo field to given value.

### HasMessagePrimayInfo

`func (o *IntegrationOutboundMessageType) HasMessagePrimayInfo() bool`

HasMessagePrimayInfo returns a boolean if a field has been set.

### GetNotices

`func (o *IntegrationOutboundMessageType) GetNotices() []WarningType`

GetNotices returns the Notices field if non-nil, zero value otherwise.

### GetNoticesOk

`func (o *IntegrationOutboundMessageType) GetNoticesOk() (*[]WarningType, bool)`

GetNoticesOk returns a tuple with the Notices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotices

`func (o *IntegrationOutboundMessageType) SetNotices(v []WarningType)`

SetNotices sets Notices field to given value.

### HasNotices

`func (o *IntegrationOutboundMessageType) HasNotices() bool`

HasNotices returns a boolean if a field has been set.

### GetAttachmentExists

`func (o *IntegrationOutboundMessageType) GetAttachmentExists() bool`

GetAttachmentExists returns the AttachmentExists field if non-nil, zero value otherwise.

### GetAttachmentExistsOk

`func (o *IntegrationOutboundMessageType) GetAttachmentExistsOk() (*bool, bool)`

GetAttachmentExistsOk returns a tuple with the AttachmentExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentExists

`func (o *IntegrationOutboundMessageType) SetAttachmentExists(v bool)`

SetAttachmentExists sets AttachmentExists field to given value.

### HasAttachmentExists

`func (o *IntegrationOutboundMessageType) HasAttachmentExists() bool`

HasAttachmentExists returns a boolean if a field has been set.

### GetBusinessEventQueue

`func (o *IntegrationOutboundMessageType) GetBusinessEventQueue() PendingBusinessEventType`

GetBusinessEventQueue returns the BusinessEventQueue field if non-nil, zero value otherwise.

### GetBusinessEventQueueOk

`func (o *IntegrationOutboundMessageType) GetBusinessEventQueueOk() (*PendingBusinessEventType, bool)`

GetBusinessEventQueueOk returns a tuple with the BusinessEventQueue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessEventQueue

`func (o *IntegrationOutboundMessageType) SetBusinessEventQueue(v PendingBusinessEventType)`

SetBusinessEventQueue sets BusinessEventQueue field to given value.

### HasBusinessEventQueue

`func (o *IntegrationOutboundMessageType) HasBusinessEventQueue() bool`

HasBusinessEventQueue returns a boolean if a field has been set.

### GetUpdateTime

`func (o *IntegrationOutboundMessageType) GetUpdateTime() time.Time`

GetUpdateTime returns the UpdateTime field if non-nil, zero value otherwise.

### GetUpdateTimeOk

`func (o *IntegrationOutboundMessageType) GetUpdateTimeOk() (*time.Time, bool)`

GetUpdateTimeOk returns a tuple with the UpdateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateTime

`func (o *IntegrationOutboundMessageType) SetUpdateTime(v time.Time)`

SetUpdateTime sets UpdateTime field to given value.

### HasUpdateTime

`func (o *IntegrationOutboundMessageType) HasUpdateTime() bool`

HasUpdateTime returns a boolean if a field has been set.

### GetResultTime

`func (o *IntegrationOutboundMessageType) GetResultTime() time.Time`

GetResultTime returns the ResultTime field if non-nil, zero value otherwise.

### GetResultTimeOk

`func (o *IntegrationOutboundMessageType) GetResultTimeOk() (*time.Time, bool)`

GetResultTimeOk returns a tuple with the ResultTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResultTime

`func (o *IntegrationOutboundMessageType) SetResultTime(v time.Time)`

SetResultTime sets ResultTime field to given value.

### HasResultTime

`func (o *IntegrationOutboundMessageType) HasResultTime() bool`

HasResultTime returns a boolean if a field has been set.

### GetDeliveryTime

`func (o *IntegrationOutboundMessageType) GetDeliveryTime() time.Time`

GetDeliveryTime returns the DeliveryTime field if non-nil, zero value otherwise.

### GetDeliveryTimeOk

`func (o *IntegrationOutboundMessageType) GetDeliveryTimeOk() (*time.Time, bool)`

GetDeliveryTimeOk returns a tuple with the DeliveryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryTime

`func (o *IntegrationOutboundMessageType) SetDeliveryTime(v time.Time)`

SetDeliveryTime sets DeliveryTime field to given value.

### HasDeliveryTime

`func (o *IntegrationOutboundMessageType) HasDeliveryTime() bool`

HasDeliveryTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


