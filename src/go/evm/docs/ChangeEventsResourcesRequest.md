# ChangeEventsResourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetails** | Pointer to [**EventsInfoType**](EventsInfoType.md) |  | [optional] 
**EventItems** | Pointer to [**EventItemsType**](EventItemsType.md) |  | [optional] 
**EventMenus** | Pointer to [**EventMenusType**](EventMenusType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeEventsResourcesRequest

`func NewChangeEventsResourcesRequest() *ChangeEventsResourcesRequest`

NewChangeEventsResourcesRequest instantiates a new ChangeEventsResourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeEventsResourcesRequestWithDefaults

`func NewChangeEventsResourcesRequestWithDefaults() *ChangeEventsResourcesRequest`

NewChangeEventsResourcesRequestWithDefaults instantiates a new ChangeEventsResourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetails

`func (o *ChangeEventsResourcesRequest) GetEventDetails() EventsInfoType`

GetEventDetails returns the EventDetails field if non-nil, zero value otherwise.

### GetEventDetailsOk

`func (o *ChangeEventsResourcesRequest) GetEventDetailsOk() (*EventsInfoType, bool)`

GetEventDetailsOk returns a tuple with the EventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetails

`func (o *ChangeEventsResourcesRequest) SetEventDetails(v EventsInfoType)`

SetEventDetails sets EventDetails field to given value.

### HasEventDetails

`func (o *ChangeEventsResourcesRequest) HasEventDetails() bool`

HasEventDetails returns a boolean if a field has been set.

### GetEventItems

`func (o *ChangeEventsResourcesRequest) GetEventItems() EventItemsType`

GetEventItems returns the EventItems field if non-nil, zero value otherwise.

### GetEventItemsOk

`func (o *ChangeEventsResourcesRequest) GetEventItemsOk() (*EventItemsType, bool)`

GetEventItemsOk returns a tuple with the EventItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventItems

`func (o *ChangeEventsResourcesRequest) SetEventItems(v EventItemsType)`

SetEventItems sets EventItems field to given value.

### HasEventItems

`func (o *ChangeEventsResourcesRequest) HasEventItems() bool`

HasEventItems returns a boolean if a field has been set.

### GetEventMenus

`func (o *ChangeEventsResourcesRequest) GetEventMenus() EventMenusType`

GetEventMenus returns the EventMenus field if non-nil, zero value otherwise.

### GetEventMenusOk

`func (o *ChangeEventsResourcesRequest) GetEventMenusOk() (*EventMenusType, bool)`

GetEventMenusOk returns a tuple with the EventMenus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenus

`func (o *ChangeEventsResourcesRequest) SetEventMenus(v EventMenusType)`

SetEventMenus sets EventMenus field to given value.

### HasEventMenus

`func (o *ChangeEventsResourcesRequest) HasEventMenus() bool`

HasEventMenus returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeEventsResourcesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeEventsResourcesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeEventsResourcesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeEventsResourcesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeEventsResourcesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeEventsResourcesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeEventsResourcesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeEventsResourcesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


