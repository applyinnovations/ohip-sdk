# PostHousekeepingTasksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Tasks** | Pointer to [**HousekeepingTasksConfigType**](HousekeepingTasksConfigType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostHousekeepingTasksRequest

`func NewPostHousekeepingTasksRequest() *PostHousekeepingTasksRequest`

NewPostHousekeepingTasksRequest instantiates a new PostHousekeepingTasksRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHousekeepingTasksRequestWithDefaults

`func NewPostHousekeepingTasksRequestWithDefaults() *PostHousekeepingTasksRequest`

NewPostHousekeepingTasksRequestWithDefaults instantiates a new PostHousekeepingTasksRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostHousekeepingTasksRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHousekeepingTasksRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHousekeepingTasksRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHousekeepingTasksRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTasks

`func (o *PostHousekeepingTasksRequest) GetTasks() HousekeepingTasksConfigType`

GetTasks returns the Tasks field if non-nil, zero value otherwise.

### GetTasksOk

`func (o *PostHousekeepingTasksRequest) GetTasksOk() (*HousekeepingTasksConfigType, bool)`

GetTasksOk returns a tuple with the Tasks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTasks

`func (o *PostHousekeepingTasksRequest) SetTasks(v HousekeepingTasksConfigType)`

SetTasks sets Tasks field to given value.

### HasTasks

`func (o *PostHousekeepingTasksRequest) HasTasks() bool`

HasTasks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHousekeepingTasksRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHousekeepingTasksRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHousekeepingTasksRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHousekeepingTasksRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


