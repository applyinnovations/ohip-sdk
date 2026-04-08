# EventStatusChangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventChangeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PriorStatus** | Pointer to **string** | Prior Status of this event | [optional] 
**CurrentStatus** | Pointer to **string** | Current Status of this event | [optional] 
**ChangeUserInfo** | Pointer to [**LogUserInfoType**](LogUserInfoType.md) |  | [optional] 

## Methods

### NewEventStatusChangeType

`func NewEventStatusChangeType() *EventStatusChangeType`

NewEventStatusChangeType instantiates a new EventStatusChangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventStatusChangeTypeWithDefaults

`func NewEventStatusChangeTypeWithDefaults() *EventStatusChangeType`

NewEventStatusChangeTypeWithDefaults instantiates a new EventStatusChangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventChangeId

`func (o *EventStatusChangeType) GetEventChangeId() UniqueIDType`

GetEventChangeId returns the EventChangeId field if non-nil, zero value otherwise.

### GetEventChangeIdOk

`func (o *EventStatusChangeType) GetEventChangeIdOk() (*UniqueIDType, bool)`

GetEventChangeIdOk returns a tuple with the EventChangeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventChangeId

`func (o *EventStatusChangeType) SetEventChangeId(v UniqueIDType)`

SetEventChangeId sets EventChangeId field to given value.

### HasEventChangeId

`func (o *EventStatusChangeType) HasEventChangeId() bool`

HasEventChangeId returns a boolean if a field has been set.

### GetBlockId

`func (o *EventStatusChangeType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *EventStatusChangeType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *EventStatusChangeType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *EventStatusChangeType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventId

`func (o *EventStatusChangeType) GetEventId() UniqueIDType`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *EventStatusChangeType) GetEventIdOk() (*UniqueIDType, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *EventStatusChangeType) SetEventId(v UniqueIDType)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *EventStatusChangeType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetPriorStatus

`func (o *EventStatusChangeType) GetPriorStatus() string`

GetPriorStatus returns the PriorStatus field if non-nil, zero value otherwise.

### GetPriorStatusOk

`func (o *EventStatusChangeType) GetPriorStatusOk() (*string, bool)`

GetPriorStatusOk returns a tuple with the PriorStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriorStatus

`func (o *EventStatusChangeType) SetPriorStatus(v string)`

SetPriorStatus sets PriorStatus field to given value.

### HasPriorStatus

`func (o *EventStatusChangeType) HasPriorStatus() bool`

HasPriorStatus returns a boolean if a field has been set.

### GetCurrentStatus

`func (o *EventStatusChangeType) GetCurrentStatus() string`

GetCurrentStatus returns the CurrentStatus field if non-nil, zero value otherwise.

### GetCurrentStatusOk

`func (o *EventStatusChangeType) GetCurrentStatusOk() (*string, bool)`

GetCurrentStatusOk returns a tuple with the CurrentStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStatus

`func (o *EventStatusChangeType) SetCurrentStatus(v string)`

SetCurrentStatus sets CurrentStatus field to given value.

### HasCurrentStatus

`func (o *EventStatusChangeType) HasCurrentStatus() bool`

HasCurrentStatus returns a boolean if a field has been set.

### GetChangeUserInfo

`func (o *EventStatusChangeType) GetChangeUserInfo() LogUserInfoType`

GetChangeUserInfo returns the ChangeUserInfo field if non-nil, zero value otherwise.

### GetChangeUserInfoOk

`func (o *EventStatusChangeType) GetChangeUserInfoOk() (*LogUserInfoType, bool)`

GetChangeUserInfoOk returns a tuple with the ChangeUserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeUserInfo

`func (o *EventStatusChangeType) SetChangeUserInfo(v LogUserInfoType)`

SetChangeUserInfo sets ChangeUserInfo field to given value.

### HasChangeUserInfo

`func (o *EventStatusChangeType) HasChangeUserInfo() bool`

HasChangeUserInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


