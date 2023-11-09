# PostCalendarTaskRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalendarTaskDetails** | Pointer to [**CalendarTaskType**](CalendarTaskType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCalendarTaskRequest

`func NewPostCalendarTaskRequest() *PostCalendarTaskRequest`

NewPostCalendarTaskRequest instantiates a new PostCalendarTaskRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCalendarTaskRequestWithDefaults

`func NewPostCalendarTaskRequestWithDefaults() *PostCalendarTaskRequest`

NewPostCalendarTaskRequestWithDefaults instantiates a new PostCalendarTaskRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCalendarTaskDetails

`func (o *PostCalendarTaskRequest) GetCalendarTaskDetails() CalendarTaskType`

GetCalendarTaskDetails returns the CalendarTaskDetails field if non-nil, zero value otherwise.

### GetCalendarTaskDetailsOk

`func (o *PostCalendarTaskRequest) GetCalendarTaskDetailsOk() (*CalendarTaskType, bool)`

GetCalendarTaskDetailsOk returns a tuple with the CalendarTaskDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCalendarTaskDetails

`func (o *PostCalendarTaskRequest) SetCalendarTaskDetails(v CalendarTaskType)`

SetCalendarTaskDetails sets CalendarTaskDetails field to given value.

### HasCalendarTaskDetails

`func (o *PostCalendarTaskRequest) HasCalendarTaskDetails() bool`

HasCalendarTaskDetails returns a boolean if a field has been set.

### GetLinks

`func (o *PostCalendarTaskRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCalendarTaskRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCalendarTaskRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCalendarTaskRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCalendarTaskRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCalendarTaskRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCalendarTaskRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCalendarTaskRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


