# ChangeEventsResourcesByChainRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetails** | Pointer to [**[]EventInfoType**](EventInfoType.md) | Pertain event information. | [optional] 
**EventItems** | Pointer to [**EventItemsType**](EventItemsType.md) |  | [optional] 
**EventMenus** | Pointer to [**EventMenusType**](EventMenusType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewChangeEventsResourcesByChainRequest

`func NewChangeEventsResourcesByChainRequest() *ChangeEventsResourcesByChainRequest`

NewChangeEventsResourcesByChainRequest instantiates a new ChangeEventsResourcesByChainRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeEventsResourcesByChainRequestWithDefaults

`func NewChangeEventsResourcesByChainRequestWithDefaults() *ChangeEventsResourcesByChainRequest`

NewChangeEventsResourcesByChainRequestWithDefaults instantiates a new ChangeEventsResourcesByChainRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetails

`func (o *ChangeEventsResourcesByChainRequest) GetEventDetails() []EventInfoType`

GetEventDetails returns the EventDetails field if non-nil, zero value otherwise.

### GetEventDetailsOk

`func (o *ChangeEventsResourcesByChainRequest) GetEventDetailsOk() (*[]EventInfoType, bool)`

GetEventDetailsOk returns a tuple with the EventDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetails

`func (o *ChangeEventsResourcesByChainRequest) SetEventDetails(v []EventInfoType)`

SetEventDetails sets EventDetails field to given value.

### HasEventDetails

`func (o *ChangeEventsResourcesByChainRequest) HasEventDetails() bool`

HasEventDetails returns a boolean if a field has been set.

### GetEventItems

`func (o *ChangeEventsResourcesByChainRequest) GetEventItems() EventItemsType`

GetEventItems returns the EventItems field if non-nil, zero value otherwise.

### GetEventItemsOk

`func (o *ChangeEventsResourcesByChainRequest) GetEventItemsOk() (*EventItemsType, bool)`

GetEventItemsOk returns a tuple with the EventItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventItems

`func (o *ChangeEventsResourcesByChainRequest) SetEventItems(v EventItemsType)`

SetEventItems sets EventItems field to given value.

### HasEventItems

`func (o *ChangeEventsResourcesByChainRequest) HasEventItems() bool`

HasEventItems returns a boolean if a field has been set.

### GetEventMenus

`func (o *ChangeEventsResourcesByChainRequest) GetEventMenus() EventMenusType`

GetEventMenus returns the EventMenus field if non-nil, zero value otherwise.

### GetEventMenusOk

`func (o *ChangeEventsResourcesByChainRequest) GetEventMenusOk() (*EventMenusType, bool)`

GetEventMenusOk returns a tuple with the EventMenus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMenus

`func (o *ChangeEventsResourcesByChainRequest) SetEventMenus(v EventMenusType)`

SetEventMenus sets EventMenus field to given value.

### HasEventMenus

`func (o *ChangeEventsResourcesByChainRequest) HasEventMenus() bool`

HasEventMenus returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeEventsResourcesByChainRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeEventsResourcesByChainRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeEventsResourcesByChainRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeEventsResourcesByChainRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeEventsResourcesByChainRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeEventsResourcesByChainRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeEventsResourcesByChainRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeEventsResourcesByChainRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


