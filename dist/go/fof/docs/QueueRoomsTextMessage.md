# QueueRoomsTextMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestTextInfo** | Pointer to [**QueueTextInfoType**](QueueTextInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewQueueRoomsTextMessage

`func NewQueueRoomsTextMessage() *QueueRoomsTextMessage`

NewQueueRoomsTextMessage instantiates a new QueueRoomsTextMessage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueueRoomsTextMessageWithDefaults

`func NewQueueRoomsTextMessageWithDefaults() *QueueRoomsTextMessage`

NewQueueRoomsTextMessageWithDefaults instantiates a new QueueRoomsTextMessage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestTextInfo

`func (o *QueueRoomsTextMessage) GetGuestTextInfo() QueueTextInfoType`

GetGuestTextInfo returns the GuestTextInfo field if non-nil, zero value otherwise.

### GetGuestTextInfoOk

`func (o *QueueRoomsTextMessage) GetGuestTextInfoOk() (*QueueTextInfoType, bool)`

GetGuestTextInfoOk returns a tuple with the GuestTextInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestTextInfo

`func (o *QueueRoomsTextMessage) SetGuestTextInfo(v QueueTextInfoType)`

SetGuestTextInfo sets GuestTextInfo field to given value.

### HasGuestTextInfo

`func (o *QueueRoomsTextMessage) HasGuestTextInfo() bool`

HasGuestTextInfo returns a boolean if a field has been set.

### GetLinks

`func (o *QueueRoomsTextMessage) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *QueueRoomsTextMessage) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *QueueRoomsTextMessage) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *QueueRoomsTextMessage) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *QueueRoomsTextMessage) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *QueueRoomsTextMessage) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *QueueRoomsTextMessage) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *QueueRoomsTextMessage) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


