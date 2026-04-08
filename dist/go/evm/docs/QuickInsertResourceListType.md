# QuickInsertResourceListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code where menu(s) or item(s) or template(s) will be added. | [optional] 
**EventId** | Pointer to [**EventId**](EventId.md) |  | [optional] 
**QuickInsertResourceInfo** | Pointer to [**[]QuickInsertResourceType**](QuickInsertResourceType.md) | Quick insert resource type. | [optional] 

## Methods

### NewQuickInsertResourceListType

`func NewQuickInsertResourceListType() *QuickInsertResourceListType`

NewQuickInsertResourceListType instantiates a new QuickInsertResourceListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQuickInsertResourceListTypeWithDefaults

`func NewQuickInsertResourceListTypeWithDefaults() *QuickInsertResourceListType`

NewQuickInsertResourceListTypeWithDefaults instantiates a new QuickInsertResourceListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *QuickInsertResourceListType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *QuickInsertResourceListType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *QuickInsertResourceListType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *QuickInsertResourceListType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetEventId

`func (o *QuickInsertResourceListType) GetEventId() EventId`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *QuickInsertResourceListType) GetEventIdOk() (*EventId, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *QuickInsertResourceListType) SetEventId(v EventId)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *QuickInsertResourceListType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetQuickInsertResourceInfo

`func (o *QuickInsertResourceListType) GetQuickInsertResourceInfo() []QuickInsertResourceType`

GetQuickInsertResourceInfo returns the QuickInsertResourceInfo field if non-nil, zero value otherwise.

### GetQuickInsertResourceInfoOk

`func (o *QuickInsertResourceListType) GetQuickInsertResourceInfoOk() (*[]QuickInsertResourceType, bool)`

GetQuickInsertResourceInfoOk returns a tuple with the QuickInsertResourceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuickInsertResourceInfo

`func (o *QuickInsertResourceListType) SetQuickInsertResourceInfo(v []QuickInsertResourceType)`

SetQuickInsertResourceInfo sets QuickInsertResourceInfo field to given value.

### HasQuickInsertResourceInfo

`func (o *QuickInsertResourceListType) HasQuickInsertResourceInfo() bool`

HasQuickInsertResourceInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


