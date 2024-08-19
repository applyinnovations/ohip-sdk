# EventItemInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventItem** | Pointer to [**EventItemType**](EventItemType.md) |  | [optional] 
**EventItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewEventItemInfoType

`func NewEventItemInfoType() *EventItemInfoType`

NewEventItemInfoType instantiates a new EventItemInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventItemInfoTypeWithDefaults

`func NewEventItemInfoTypeWithDefaults() *EventItemInfoType`

NewEventItemInfoTypeWithDefaults instantiates a new EventItemInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventItem

`func (o *EventItemInfoType) GetEventItem() EventItemType`

GetEventItem returns the EventItem field if non-nil, zero value otherwise.

### GetEventItemOk

`func (o *EventItemInfoType) GetEventItemOk() (*EventItemType, bool)`

GetEventItemOk returns a tuple with the EventItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventItem

`func (o *EventItemInfoType) SetEventItem(v EventItemType)`

SetEventItem sets EventItem field to given value.

### HasEventItem

`func (o *EventItemInfoType) HasEventItem() bool`

HasEventItem returns a boolean if a field has been set.

### GetEventItemId

`func (o *EventItemInfoType) GetEventItemId() UniqueIDType`

GetEventItemId returns the EventItemId field if non-nil, zero value otherwise.

### GetEventItemIdOk

`func (o *EventItemInfoType) GetEventItemIdOk() (*UniqueIDType, bool)`

GetEventItemIdOk returns a tuple with the EventItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventItemId

`func (o *EventItemInfoType) SetEventItemId(v UniqueIDType)`

SetEventItemId sets EventItemId field to given value.

### HasEventItemId

`func (o *EventItemInfoType) HasEventItemId() bool`

HasEventItemId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


