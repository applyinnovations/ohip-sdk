# PostAutomaticTransmissionSchedulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutomaticTransmissionSchedules** | Pointer to [**[]AutomaticTransmissionScheduleType**](AutomaticTransmissionScheduleType.md) | List of automatic transmission schedules | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAutomaticTransmissionSchedulesRequest

`func NewPostAutomaticTransmissionSchedulesRequest() *PostAutomaticTransmissionSchedulesRequest`

NewPostAutomaticTransmissionSchedulesRequest instantiates a new PostAutomaticTransmissionSchedulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAutomaticTransmissionSchedulesRequestWithDefaults

`func NewPostAutomaticTransmissionSchedulesRequestWithDefaults() *PostAutomaticTransmissionSchedulesRequest`

NewPostAutomaticTransmissionSchedulesRequestWithDefaults instantiates a new PostAutomaticTransmissionSchedulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutomaticTransmissionSchedules

`func (o *PostAutomaticTransmissionSchedulesRequest) GetAutomaticTransmissionSchedules() []AutomaticTransmissionScheduleType`

GetAutomaticTransmissionSchedules returns the AutomaticTransmissionSchedules field if non-nil, zero value otherwise.

### GetAutomaticTransmissionSchedulesOk

`func (o *PostAutomaticTransmissionSchedulesRequest) GetAutomaticTransmissionSchedulesOk() (*[]AutomaticTransmissionScheduleType, bool)`

GetAutomaticTransmissionSchedulesOk returns a tuple with the AutomaticTransmissionSchedules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutomaticTransmissionSchedules

`func (o *PostAutomaticTransmissionSchedulesRequest) SetAutomaticTransmissionSchedules(v []AutomaticTransmissionScheduleType)`

SetAutomaticTransmissionSchedules sets AutomaticTransmissionSchedules field to given value.

### HasAutomaticTransmissionSchedules

`func (o *PostAutomaticTransmissionSchedulesRequest) HasAutomaticTransmissionSchedules() bool`

HasAutomaticTransmissionSchedules returns a boolean if a field has been set.

### GetLinks

`func (o *PostAutomaticTransmissionSchedulesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAutomaticTransmissionSchedulesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAutomaticTransmissionSchedulesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAutomaticTransmissionSchedulesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAutomaticTransmissionSchedulesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAutomaticTransmissionSchedulesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAutomaticTransmissionSchedulesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAutomaticTransmissionSchedulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


