# PostHousekeepingAttendantScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttendantsScheduleInfo** | Pointer to [**HousekeepingAttendantsScheduleType**](HousekeepingAttendantsScheduleType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostHousekeepingAttendantScheduleRequest

`func NewPostHousekeepingAttendantScheduleRequest() *PostHousekeepingAttendantScheduleRequest`

NewPostHousekeepingAttendantScheduleRequest instantiates a new PostHousekeepingAttendantScheduleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHousekeepingAttendantScheduleRequestWithDefaults

`func NewPostHousekeepingAttendantScheduleRequestWithDefaults() *PostHousekeepingAttendantScheduleRequest`

NewPostHousekeepingAttendantScheduleRequestWithDefaults instantiates a new PostHousekeepingAttendantScheduleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendantsScheduleInfo

`func (o *PostHousekeepingAttendantScheduleRequest) GetAttendantsScheduleInfo() HousekeepingAttendantsScheduleType`

GetAttendantsScheduleInfo returns the AttendantsScheduleInfo field if non-nil, zero value otherwise.

### GetAttendantsScheduleInfoOk

`func (o *PostHousekeepingAttendantScheduleRequest) GetAttendantsScheduleInfoOk() (*HousekeepingAttendantsScheduleType, bool)`

GetAttendantsScheduleInfoOk returns a tuple with the AttendantsScheduleInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantsScheduleInfo

`func (o *PostHousekeepingAttendantScheduleRequest) SetAttendantsScheduleInfo(v HousekeepingAttendantsScheduleType)`

SetAttendantsScheduleInfo sets AttendantsScheduleInfo field to given value.

### HasAttendantsScheduleInfo

`func (o *PostHousekeepingAttendantScheduleRequest) HasAttendantsScheduleInfo() bool`

HasAttendantsScheduleInfo returns a boolean if a field has been set.

### GetLinks

`func (o *PostHousekeepingAttendantScheduleRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHousekeepingAttendantScheduleRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHousekeepingAttendantScheduleRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHousekeepingAttendantScheduleRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHousekeepingAttendantScheduleRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHousekeepingAttendantScheduleRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHousekeepingAttendantScheduleRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHousekeepingAttendantScheduleRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


