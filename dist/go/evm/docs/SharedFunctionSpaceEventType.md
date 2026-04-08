# SharedFunctionSpaceEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockName** | Pointer to **string** | Block Name. | [optional] 
**BlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of event. | [optional] 
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**EventType** | Pointer to **string** | Type of event. | [optional] 
**EventStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CateringDeductInventory** | Pointer to **bool** | Indicates if catering event&#39;s spaces are deducted from inventory | [optional] 
**FunctionSpaceCode** | Pointer to **string** | Function space of event. | [optional] 
**Attendees** | Pointer to **int32** | Number of event attendees. | [optional] 
**IsShared** | Pointer to **bool** | Indicates if catering event is shared or not | [optional] 

## Methods

### NewSharedFunctionSpaceEventType

`func NewSharedFunctionSpaceEventType() *SharedFunctionSpaceEventType`

NewSharedFunctionSpaceEventType instantiates a new SharedFunctionSpaceEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSharedFunctionSpaceEventTypeWithDefaults

`func NewSharedFunctionSpaceEventTypeWithDefaults() *SharedFunctionSpaceEventType`

NewSharedFunctionSpaceEventTypeWithDefaults instantiates a new SharedFunctionSpaceEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockName

`func (o *SharedFunctionSpaceEventType) GetBlockName() string`

GetBlockName returns the BlockName field if non-nil, zero value otherwise.

### GetBlockNameOk

`func (o *SharedFunctionSpaceEventType) GetBlockNameOk() (*string, bool)`

GetBlockNameOk returns a tuple with the BlockName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockName

`func (o *SharedFunctionSpaceEventType) SetBlockName(v string)`

SetBlockName sets BlockName field to given value.

### HasBlockName

`func (o *SharedFunctionSpaceEventType) HasBlockName() bool`

HasBlockName returns a boolean if a field has been set.

### GetBlockId

`func (o *SharedFunctionSpaceEventType) GetBlockId() UniqueIDType`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *SharedFunctionSpaceEventType) GetBlockIdOk() (*UniqueIDType, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *SharedFunctionSpaceEventType) SetBlockId(v UniqueIDType)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *SharedFunctionSpaceEventType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEventName

`func (o *SharedFunctionSpaceEventType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *SharedFunctionSpaceEventType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *SharedFunctionSpaceEventType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *SharedFunctionSpaceEventType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetEventId

`func (o *SharedFunctionSpaceEventType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *SharedFunctionSpaceEventType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *SharedFunctionSpaceEventType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *SharedFunctionSpaceEventType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetEventType

`func (o *SharedFunctionSpaceEventType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *SharedFunctionSpaceEventType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *SharedFunctionSpaceEventType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *SharedFunctionSpaceEventType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetEventStatus

`func (o *SharedFunctionSpaceEventType) GetEventStatus() BookingStatusType`

GetEventStatus returns the EventStatus field if non-nil, zero value otherwise.

### GetEventStatusOk

`func (o *SharedFunctionSpaceEventType) GetEventStatusOk() (*BookingStatusType, bool)`

GetEventStatusOk returns a tuple with the EventStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStatus

`func (o *SharedFunctionSpaceEventType) SetEventStatus(v BookingStatusType)`

SetEventStatus sets EventStatus field to given value.

### HasEventStatus

`func (o *SharedFunctionSpaceEventType) HasEventStatus() bool`

HasEventStatus returns a boolean if a field has been set.

### GetCateringDeductInventory

`func (o *SharedFunctionSpaceEventType) GetCateringDeductInventory() bool`

GetCateringDeductInventory returns the CateringDeductInventory field if non-nil, zero value otherwise.

### GetCateringDeductInventoryOk

`func (o *SharedFunctionSpaceEventType) GetCateringDeductInventoryOk() (*bool, bool)`

GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringDeductInventory

`func (o *SharedFunctionSpaceEventType) SetCateringDeductInventory(v bool)`

SetCateringDeductInventory sets CateringDeductInventory field to given value.

### HasCateringDeductInventory

`func (o *SharedFunctionSpaceEventType) HasCateringDeductInventory() bool`

HasCateringDeductInventory returns a boolean if a field has been set.

### GetFunctionSpaceCode

`func (o *SharedFunctionSpaceEventType) GetFunctionSpaceCode() string`

GetFunctionSpaceCode returns the FunctionSpaceCode field if non-nil, zero value otherwise.

### GetFunctionSpaceCodeOk

`func (o *SharedFunctionSpaceEventType) GetFunctionSpaceCodeOk() (*string, bool)`

GetFunctionSpaceCodeOk returns a tuple with the FunctionSpaceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceCode

`func (o *SharedFunctionSpaceEventType) SetFunctionSpaceCode(v string)`

SetFunctionSpaceCode sets FunctionSpaceCode field to given value.

### HasFunctionSpaceCode

`func (o *SharedFunctionSpaceEventType) HasFunctionSpaceCode() bool`

HasFunctionSpaceCode returns a boolean if a field has been set.

### GetAttendees

`func (o *SharedFunctionSpaceEventType) GetAttendees() int32`

GetAttendees returns the Attendees field if non-nil, zero value otherwise.

### GetAttendeesOk

`func (o *SharedFunctionSpaceEventType) GetAttendeesOk() (*int32, bool)`

GetAttendeesOk returns a tuple with the Attendees field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendees

`func (o *SharedFunctionSpaceEventType) SetAttendees(v int32)`

SetAttendees sets Attendees field to given value.

### HasAttendees

`func (o *SharedFunctionSpaceEventType) HasAttendees() bool`

HasAttendees returns a boolean if a field has been set.

### GetIsShared

`func (o *SharedFunctionSpaceEventType) GetIsShared() bool`

GetIsShared returns the IsShared field if non-nil, zero value otherwise.

### GetIsSharedOk

`func (o *SharedFunctionSpaceEventType) GetIsSharedOk() (*bool, bool)`

GetIsSharedOk returns a tuple with the IsShared field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsShared

`func (o *SharedFunctionSpaceEventType) SetIsShared(v bool)`

SetIsShared sets IsShared field to given value.

### HasIsShared

`func (o *SharedFunctionSpaceEventType) HasIsShared() bool`

HasIsShared returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


