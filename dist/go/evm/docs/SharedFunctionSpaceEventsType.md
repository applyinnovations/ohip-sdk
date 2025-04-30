# SharedFunctionSpaceEventsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SharedFunctionSpaceEvent** | Pointer to [**[]SharedFunctionSpaceEventType**](SharedFunctionSpaceEventType.md) | Pertain shared event Information. | [optional] 
**MaxCapacity** | Pointer to **int32** | Maximum capcity of the shared function space. | [optional] 
**MaxEvents** | Pointer to **int32** | Maximum number of events for the shared function space. | [optional] 

## Methods

### NewSharedFunctionSpaceEventsType

`func NewSharedFunctionSpaceEventsType() *SharedFunctionSpaceEventsType`

NewSharedFunctionSpaceEventsType instantiates a new SharedFunctionSpaceEventsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSharedFunctionSpaceEventsTypeWithDefaults

`func NewSharedFunctionSpaceEventsTypeWithDefaults() *SharedFunctionSpaceEventsType`

NewSharedFunctionSpaceEventsTypeWithDefaults instantiates a new SharedFunctionSpaceEventsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSharedFunctionSpaceEvent

`func (o *SharedFunctionSpaceEventsType) GetSharedFunctionSpaceEvent() []SharedFunctionSpaceEventType`

GetSharedFunctionSpaceEvent returns the SharedFunctionSpaceEvent field if non-nil, zero value otherwise.

### GetSharedFunctionSpaceEventOk

`func (o *SharedFunctionSpaceEventsType) GetSharedFunctionSpaceEventOk() (*[]SharedFunctionSpaceEventType, bool)`

GetSharedFunctionSpaceEventOk returns a tuple with the SharedFunctionSpaceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharedFunctionSpaceEvent

`func (o *SharedFunctionSpaceEventsType) SetSharedFunctionSpaceEvent(v []SharedFunctionSpaceEventType)`

SetSharedFunctionSpaceEvent sets SharedFunctionSpaceEvent field to given value.

### HasSharedFunctionSpaceEvent

`func (o *SharedFunctionSpaceEventsType) HasSharedFunctionSpaceEvent() bool`

HasSharedFunctionSpaceEvent returns a boolean if a field has been set.

### GetMaxCapacity

`func (o *SharedFunctionSpaceEventsType) GetMaxCapacity() int32`

GetMaxCapacity returns the MaxCapacity field if non-nil, zero value otherwise.

### GetMaxCapacityOk

`func (o *SharedFunctionSpaceEventsType) GetMaxCapacityOk() (*int32, bool)`

GetMaxCapacityOk returns a tuple with the MaxCapacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxCapacity

`func (o *SharedFunctionSpaceEventsType) SetMaxCapacity(v int32)`

SetMaxCapacity sets MaxCapacity field to given value.

### HasMaxCapacity

`func (o *SharedFunctionSpaceEventsType) HasMaxCapacity() bool`

HasMaxCapacity returns a boolean if a field has been set.

### GetMaxEvents

`func (o *SharedFunctionSpaceEventsType) GetMaxEvents() int32`

GetMaxEvents returns the MaxEvents field if non-nil, zero value otherwise.

### GetMaxEventsOk

`func (o *SharedFunctionSpaceEventsType) GetMaxEventsOk() (*int32, bool)`

GetMaxEventsOk returns a tuple with the MaxEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxEvents

`func (o *SharedFunctionSpaceEventsType) SetMaxEvents(v int32)`

SetMaxEvents sets MaxEvents field to given value.

### HasMaxEvents

`func (o *SharedFunctionSpaceEventsType) HasMaxEvents() bool`

HasMaxEvents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


