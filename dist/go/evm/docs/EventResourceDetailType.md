# EventResourceDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetailInfo** | Pointer to [**EventInfoType**](EventInfoType.md) |  | [optional] 
**Menu** | Pointer to [**EventMenuInfoType**](EventMenuInfoType.md) |  | [optional] 
**Item** | Pointer to [**EventItemInfoType**](EventItemInfoType.md) |  | [optional] 

## Methods

### NewEventResourceDetailType

`func NewEventResourceDetailType() *EventResourceDetailType`

NewEventResourceDetailType instantiates a new EventResourceDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventResourceDetailTypeWithDefaults

`func NewEventResourceDetailTypeWithDefaults() *EventResourceDetailType`

NewEventResourceDetailTypeWithDefaults instantiates a new EventResourceDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetailInfo

`func (o *EventResourceDetailType) GetEventDetailInfo() EventInfoType`

GetEventDetailInfo returns the EventDetailInfo field if non-nil, zero value otherwise.

### GetEventDetailInfoOk

`func (o *EventResourceDetailType) GetEventDetailInfoOk() (*EventInfoType, bool)`

GetEventDetailInfoOk returns a tuple with the EventDetailInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetailInfo

`func (o *EventResourceDetailType) SetEventDetailInfo(v EventInfoType)`

SetEventDetailInfo sets EventDetailInfo field to given value.

### HasEventDetailInfo

`func (o *EventResourceDetailType) HasEventDetailInfo() bool`

HasEventDetailInfo returns a boolean if a field has been set.

### GetMenu

`func (o *EventResourceDetailType) GetMenu() EventMenuInfoType`

GetMenu returns the Menu field if non-nil, zero value otherwise.

### GetMenuOk

`func (o *EventResourceDetailType) GetMenuOk() (*EventMenuInfoType, bool)`

GetMenuOk returns a tuple with the Menu field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenu

`func (o *EventResourceDetailType) SetMenu(v EventMenuInfoType)`

SetMenu sets Menu field to given value.

### HasMenu

`func (o *EventResourceDetailType) HasMenu() bool`

HasMenu returns a boolean if a field has been set.

### GetItem

`func (o *EventResourceDetailType) GetItem() EventItemInfoType`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *EventResourceDetailType) GetItemOk() (*EventItemInfoType, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *EventResourceDetailType) SetItem(v EventItemInfoType)`

SetItem sets Item field to given value.

### HasItem

`func (o *EventResourceDetailType) HasItem() bool`

HasItem returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


