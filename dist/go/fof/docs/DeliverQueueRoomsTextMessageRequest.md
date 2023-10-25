# DeliverQueueRoomsTextMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**QueueRoomsTextCriteriaType**](QueueRoomsTextCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDeliverQueueRoomsTextMessageRequest

`func NewDeliverQueueRoomsTextMessageRequest() *DeliverQueueRoomsTextMessageRequest`

NewDeliverQueueRoomsTextMessageRequest instantiates a new DeliverQueueRoomsTextMessageRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliverQueueRoomsTextMessageRequestWithDefaults

`func NewDeliverQueueRoomsTextMessageRequestWithDefaults() *DeliverQueueRoomsTextMessageRequest`

NewDeliverQueueRoomsTextMessageRequestWithDefaults instantiates a new DeliverQueueRoomsTextMessageRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *DeliverQueueRoomsTextMessageRequest) GetCriteria() QueueRoomsTextCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *DeliverQueueRoomsTextMessageRequest) GetCriteriaOk() (*QueueRoomsTextCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *DeliverQueueRoomsTextMessageRequest) SetCriteria(v QueueRoomsTextCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *DeliverQueueRoomsTextMessageRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *DeliverQueueRoomsTextMessageRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeliverQueueRoomsTextMessageRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeliverQueueRoomsTextMessageRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeliverQueueRoomsTextMessageRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DeliverQueueRoomsTextMessageRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeliverQueueRoomsTextMessageRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeliverQueueRoomsTextMessageRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeliverQueueRoomsTextMessageRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


