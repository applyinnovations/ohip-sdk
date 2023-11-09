# ScheduleShiftRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**HousekeepingScheduleShiftRequestType**](HousekeepingScheduleShiftRequestType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewScheduleShiftRequest

`func NewScheduleShiftRequest() *ScheduleShiftRequest`

NewScheduleShiftRequest instantiates a new ScheduleShiftRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleShiftRequestWithDefaults

`func NewScheduleShiftRequestWithDefaults() *ScheduleShiftRequest`

NewScheduleShiftRequestWithDefaults instantiates a new ScheduleShiftRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ScheduleShiftRequest) GetCriteria() HousekeepingScheduleShiftRequestType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ScheduleShiftRequest) GetCriteriaOk() (*HousekeepingScheduleShiftRequestType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ScheduleShiftRequest) SetCriteria(v HousekeepingScheduleShiftRequestType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ScheduleShiftRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ScheduleShiftRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ScheduleShiftRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ScheduleShiftRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ScheduleShiftRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ScheduleShiftRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ScheduleShiftRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ScheduleShiftRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ScheduleShiftRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


