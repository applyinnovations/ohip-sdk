# IntegrationInboundMessageType

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
**ProcessStatus** | Pointer to **string** | Status of the transmitted message. | [optional] 
**RetryCount** | Pointer to **int32** | Shows whether the processing of this message was retried and how many times. | [optional] 
**ExternalMessageKey** | Pointer to **string** | Populated if external message key is available | [optional] 
**ExternalHotelCode** | Pointer to **string** | External system hotel code | [optional] 

## Methods

### NewIntegrationInboundMessageType

`func NewIntegrationInboundMessageType() *IntegrationInboundMessageType`

NewIntegrationInboundMessageType instantiates a new IntegrationInboundMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntegrationInboundMessageTypeWithDefaults

`func NewIntegrationInboundMessageTypeWithDefaults() *IntegrationInboundMessageType`

NewIntegrationInboundMessageTypeWithDefaults instantiates a new IntegrationInboundMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessageId

`func (o *IntegrationInboundMessageType) GetMessageId() UniqueIDType`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *IntegrationInboundMessageType) GetMessageIdOk() (*UniqueIDType, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *IntegrationInboundMessageType) SetMessageId(v UniqueIDType)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *IntegrationInboundMessageType) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetEnqueueTime

`func (o *IntegrationInboundMessageType) GetEnqueueTime() time.Time`

GetEnqueueTime returns the EnqueueTime field if non-nil, zero value otherwise.

### GetEnqueueTimeOk

`func (o *IntegrationInboundMessageType) GetEnqueueTimeOk() (*time.Time, bool)`

GetEnqueueTimeOk returns a tuple with the EnqueueTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnqueueTime

`func (o *IntegrationInboundMessageType) SetEnqueueTime(v time.Time)`

SetEnqueueTime sets EnqueueTime field to given value.

### HasEnqueueTime

`func (o *IntegrationInboundMessageType) HasEnqueueTime() bool`

HasEnqueueTime returns a boolean if a field has been set.

### GetDequeueTime

`func (o *IntegrationInboundMessageType) GetDequeueTime() time.Time`

GetDequeueTime returns the DequeueTime field if non-nil, zero value otherwise.

### GetDequeueTimeOk

`func (o *IntegrationInboundMessageType) GetDequeueTimeOk() (*time.Time, bool)`

GetDequeueTimeOk returns a tuple with the DequeueTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDequeueTime

`func (o *IntegrationInboundMessageType) SetDequeueTime(v time.Time)`

SetDequeueTime sets DequeueTime field to given value.

### HasDequeueTime

`func (o *IntegrationInboundMessageType) HasDequeueTime() bool`

HasDequeueTime returns a boolean if a field has been set.

### GetInterface

`func (o *IntegrationInboundMessageType) GetInterface() string`

GetInterface returns the Interface field if non-nil, zero value otherwise.

### GetInterfaceOk

`func (o *IntegrationInboundMessageType) GetInterfaceOk() (*string, bool)`

GetInterfaceOk returns a tuple with the Interface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterface

`func (o *IntegrationInboundMessageType) SetInterface(v string)`

SetInterface sets Interface field to given value.

### HasInterface

`func (o *IntegrationInboundMessageType) HasInterface() bool`

HasInterface returns a boolean if a field has been set.

### GetMessageType

`func (o *IntegrationInboundMessageType) GetMessageType() string`

GetMessageType returns the MessageType field if non-nil, zero value otherwise.

### GetMessageTypeOk

`func (o *IntegrationInboundMessageType) GetMessageTypeOk() (*string, bool)`

GetMessageTypeOk returns a tuple with the MessageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageType

`func (o *IntegrationInboundMessageType) SetMessageType(v string)`

SetMessageType sets MessageType field to given value.

### HasMessageType

`func (o *IntegrationInboundMessageType) HasMessageType() bool`

HasMessageType returns a boolean if a field has been set.

### GetHotelId

`func (o *IntegrationInboundMessageType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *IntegrationInboundMessageType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *IntegrationInboundMessageType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *IntegrationInboundMessageType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMessageStatus

`func (o *IntegrationInboundMessageType) GetMessageStatus() string`

GetMessageStatus returns the MessageStatus field if non-nil, zero value otherwise.

### GetMessageStatusOk

`func (o *IntegrationInboundMessageType) GetMessageStatusOk() (*string, bool)`

GetMessageStatusOk returns a tuple with the MessageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageStatus

`func (o *IntegrationInboundMessageType) SetMessageStatus(v string)`

SetMessageStatus sets MessageStatus field to given value.

### HasMessageStatus

`func (o *IntegrationInboundMessageType) HasMessageStatus() bool`

HasMessageStatus returns a boolean if a field has been set.

### GetReviewed

`func (o *IntegrationInboundMessageType) GetReviewed() bool`

GetReviewed returns the Reviewed field if non-nil, zero value otherwise.

### GetReviewedOk

`func (o *IntegrationInboundMessageType) GetReviewedOk() (*bool, bool)`

GetReviewedOk returns a tuple with the Reviewed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewed

`func (o *IntegrationInboundMessageType) SetReviewed(v bool)`

SetReviewed sets Reviewed field to given value.

### HasReviewed

`func (o *IntegrationInboundMessageType) HasReviewed() bool`

HasReviewed returns a boolean if a field has been set.

### GetMessageReference

`func (o *IntegrationInboundMessageType) GetMessageReference() string`

GetMessageReference returns the MessageReference field if non-nil, zero value otherwise.

### GetMessageReferenceOk

`func (o *IntegrationInboundMessageType) GetMessageReferenceOk() (*string, bool)`

GetMessageReferenceOk returns a tuple with the MessageReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageReference

`func (o *IntegrationInboundMessageType) SetMessageReference(v string)`

SetMessageReference sets MessageReference field to given value.

### HasMessageReference

`func (o *IntegrationInboundMessageType) HasMessageReference() bool`

HasMessageReference returns a boolean if a field has been set.

### GetMessagePrimayInfo

`func (o *IntegrationInboundMessageType) GetMessagePrimayInfo() string`

GetMessagePrimayInfo returns the MessagePrimayInfo field if non-nil, zero value otherwise.

### GetMessagePrimayInfoOk

`func (o *IntegrationInboundMessageType) GetMessagePrimayInfoOk() (*string, bool)`

GetMessagePrimayInfoOk returns a tuple with the MessagePrimayInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessagePrimayInfo

`func (o *IntegrationInboundMessageType) SetMessagePrimayInfo(v string)`

SetMessagePrimayInfo sets MessagePrimayInfo field to given value.

### HasMessagePrimayInfo

`func (o *IntegrationInboundMessageType) HasMessagePrimayInfo() bool`

HasMessagePrimayInfo returns a boolean if a field has been set.

### GetNotices

`func (o *IntegrationInboundMessageType) GetNotices() []WarningType`

GetNotices returns the Notices field if non-nil, zero value otherwise.

### GetNoticesOk

`func (o *IntegrationInboundMessageType) GetNoticesOk() (*[]WarningType, bool)`

GetNoticesOk returns a tuple with the Notices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotices

`func (o *IntegrationInboundMessageType) SetNotices(v []WarningType)`

SetNotices sets Notices field to given value.

### HasNotices

`func (o *IntegrationInboundMessageType) HasNotices() bool`

HasNotices returns a boolean if a field has been set.

### GetAttachmentExists

`func (o *IntegrationInboundMessageType) GetAttachmentExists() bool`

GetAttachmentExists returns the AttachmentExists field if non-nil, zero value otherwise.

### GetAttachmentExistsOk

`func (o *IntegrationInboundMessageType) GetAttachmentExistsOk() (*bool, bool)`

GetAttachmentExistsOk returns a tuple with the AttachmentExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentExists

`func (o *IntegrationInboundMessageType) SetAttachmentExists(v bool)`

SetAttachmentExists sets AttachmentExists field to given value.

### HasAttachmentExists

`func (o *IntegrationInboundMessageType) HasAttachmentExists() bool`

HasAttachmentExists returns a boolean if a field has been set.

### GetProcessStatus

`func (o *IntegrationInboundMessageType) GetProcessStatus() string`

GetProcessStatus returns the ProcessStatus field if non-nil, zero value otherwise.

### GetProcessStatusOk

`func (o *IntegrationInboundMessageType) GetProcessStatusOk() (*string, bool)`

GetProcessStatusOk returns a tuple with the ProcessStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessStatus

`func (o *IntegrationInboundMessageType) SetProcessStatus(v string)`

SetProcessStatus sets ProcessStatus field to given value.

### HasProcessStatus

`func (o *IntegrationInboundMessageType) HasProcessStatus() bool`

HasProcessStatus returns a boolean if a field has been set.

### GetRetryCount

`func (o *IntegrationInboundMessageType) GetRetryCount() int32`

GetRetryCount returns the RetryCount field if non-nil, zero value otherwise.

### GetRetryCountOk

`func (o *IntegrationInboundMessageType) GetRetryCountOk() (*int32, bool)`

GetRetryCountOk returns a tuple with the RetryCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetryCount

`func (o *IntegrationInboundMessageType) SetRetryCount(v int32)`

SetRetryCount sets RetryCount field to given value.

### HasRetryCount

`func (o *IntegrationInboundMessageType) HasRetryCount() bool`

HasRetryCount returns a boolean if a field has been set.

### GetExternalMessageKey

`func (o *IntegrationInboundMessageType) GetExternalMessageKey() string`

GetExternalMessageKey returns the ExternalMessageKey field if non-nil, zero value otherwise.

### GetExternalMessageKeyOk

`func (o *IntegrationInboundMessageType) GetExternalMessageKeyOk() (*string, bool)`

GetExternalMessageKeyOk returns a tuple with the ExternalMessageKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalMessageKey

`func (o *IntegrationInboundMessageType) SetExternalMessageKey(v string)`

SetExternalMessageKey sets ExternalMessageKey field to given value.

### HasExternalMessageKey

`func (o *IntegrationInboundMessageType) HasExternalMessageKey() bool`

HasExternalMessageKey returns a boolean if a field has been set.

### GetExternalHotelCode

`func (o *IntegrationInboundMessageType) GetExternalHotelCode() string`

GetExternalHotelCode returns the ExternalHotelCode field if non-nil, zero value otherwise.

### GetExternalHotelCodeOk

`func (o *IntegrationInboundMessageType) GetExternalHotelCodeOk() (*string, bool)`

GetExternalHotelCodeOk returns a tuple with the ExternalHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalHotelCode

`func (o *IntegrationInboundMessageType) SetExternalHotelCode(v string)`

SetExternalHotelCode sets ExternalHotelCode field to given value.

### HasExternalHotelCode

`func (o *IntegrationInboundMessageType) HasExternalHotelCode() bool`

HasExternalHotelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


