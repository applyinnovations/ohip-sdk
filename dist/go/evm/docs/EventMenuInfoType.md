# EventMenuInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventMenu** | Pointer to [**EventMenuType**](EventMenuType.md) |  | [optional] 
**EventMenuId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewEventMenuInfoType

`func NewEventMenuInfoType() *EventMenuInfoType`

NewEventMenuInfoType instantiates a new EventMenuInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventMenuInfoTypeWithDefaults

`func NewEventMenuInfoTypeWithDefaults() *EventMenuInfoType`

NewEventMenuInfoTypeWithDefaults instantiates a new EventMenuInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventMenu

`func (o *EventMenuInfoType) GetEventMenu() EventMenuType`

GetEventMenu returns the EventMenu field if non-nil, zero value otherwise.

### GetEventMenuOk

`func (o *EventMenuInfoType) GetEventMenuOk() (*EventMenuType, bool)`

GetEventMenuOk returns a tuple with the EventMenu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenu

`func (o *EventMenuInfoType) SetEventMenu(v EventMenuType)`

SetEventMenu sets EventMenu field to given value.

### HasEventMenu

`func (o *EventMenuInfoType) HasEventMenu() bool`

HasEventMenu returns a boolean if a field has been set.

### GetEventMenuId

`func (o *EventMenuInfoType) GetEventMenuId() UniqueIDType`

GetEventMenuId returns the EventMenuId field if non-nil, zero value otherwise.

### GetEventMenuIdOk

`func (o *EventMenuInfoType) GetEventMenuIdOk() (*UniqueIDType, bool)`

GetEventMenuIdOk returns a tuple with the EventMenuId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenuId

`func (o *EventMenuInfoType) SetEventMenuId(v UniqueIDType)`

SetEventMenuId sets EventMenuId field to given value.

### HasEventMenuId

`func (o *EventMenuInfoType) HasEventMenuId() bool`

HasEventMenuId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


