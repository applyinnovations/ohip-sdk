# EventResourcesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventResourcesProcessedInfoList** | Pointer to [**CopyCateringEventResourcesProcessedInfoList**](CopyCateringEventResourcesProcessedInfoList.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewEventResourcesResponse

`func NewEventResourcesResponse() *EventResourcesResponse`

NewEventResourcesResponse instantiates a new EventResourcesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventResourcesResponseWithDefaults

`func NewEventResourcesResponseWithDefaults() *EventResourcesResponse`

NewEventResourcesResponseWithDefaults instantiates a new EventResourcesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventResourcesProcessedInfoList

`func (o *EventResourcesResponse) GetEventResourcesProcessedInfoList() CopyCateringEventResourcesProcessedInfoList`

GetEventResourcesProcessedInfoList returns the EventResourcesProcessedInfoList field if non-nil, zero value otherwise.

### GetEventResourcesProcessedInfoListOk

`func (o *EventResourcesResponse) GetEventResourcesProcessedInfoListOk() (*CopyCateringEventResourcesProcessedInfoList, bool)`

GetEventResourcesProcessedInfoListOk returns a tuple with the EventResourcesProcessedInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventResourcesProcessedInfoList

`func (o *EventResourcesResponse) SetEventResourcesProcessedInfoList(v CopyCateringEventResourcesProcessedInfoList)`

SetEventResourcesProcessedInfoList sets EventResourcesProcessedInfoList field to given value.

### HasEventResourcesProcessedInfoList

`func (o *EventResourcesResponse) HasEventResourcesProcessedInfoList() bool`

HasEventResourcesProcessedInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *EventResourcesResponse) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *EventResourcesResponse) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *EventResourcesResponse) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *EventResourcesResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *EventResourcesResponse) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *EventResourcesResponse) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *EventResourcesResponse) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *EventResourcesResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


