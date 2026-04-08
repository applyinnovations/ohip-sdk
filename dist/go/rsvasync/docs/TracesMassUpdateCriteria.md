# TracesMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**TimeInfo** | Pointer to [**TraceTimeType**](TraceTimeType.md) |  | [optional] 
**DepartmentIds** | Pointer to **[]string** | Indicates the Department code. | [optional] 
**TraceText** | Pointer to **string** | The information this trace contains. | [optional] 
**Frequency** | Pointer to [**MassUpdateTracesFrequencyType**](MassUpdateTracesFrequencyType.md) |  | [optional] 

## Methods

### NewTracesMassUpdateCriteria

`func NewTracesMassUpdateCriteria() *TracesMassUpdateCriteria`

NewTracesMassUpdateCriteria instantiates a new TracesMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTracesMassUpdateCriteriaWithDefaults

`func NewTracesMassUpdateCriteriaWithDefaults() *TracesMassUpdateCriteria`

NewTracesMassUpdateCriteriaWithDefaults instantiates a new TracesMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *TracesMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *TracesMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *TracesMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *TracesMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetTimeInfo

`func (o *TracesMassUpdateCriteria) GetTimeInfo() TraceTimeType`

GetTimeInfo returns the TimeInfo field if non-nil, zero value otherwise.

### GetTimeInfoOk

`func (o *TracesMassUpdateCriteria) GetTimeInfoOk() (*TraceTimeType, bool)`

GetTimeInfoOk returns a tuple with the TimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInfo

`func (o *TracesMassUpdateCriteria) SetTimeInfo(v TraceTimeType)`

SetTimeInfo sets TimeInfo field to given value.

### HasTimeInfo

`func (o *TracesMassUpdateCriteria) HasTimeInfo() bool`

HasTimeInfo returns a boolean if a field has been set.

### GetDepartmentIds

`func (o *TracesMassUpdateCriteria) GetDepartmentIds() []string`

GetDepartmentIds returns the DepartmentIds field if non-nil, zero value otherwise.

### GetDepartmentIdsOk

`func (o *TracesMassUpdateCriteria) GetDepartmentIdsOk() (*[]string, bool)`

GetDepartmentIdsOk returns a tuple with the DepartmentIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentIds

`func (o *TracesMassUpdateCriteria) SetDepartmentIds(v []string)`

SetDepartmentIds sets DepartmentIds field to given value.

### HasDepartmentIds

`func (o *TracesMassUpdateCriteria) HasDepartmentIds() bool`

HasDepartmentIds returns a boolean if a field has been set.

### GetTraceText

`func (o *TracesMassUpdateCriteria) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *TracesMassUpdateCriteria) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *TracesMassUpdateCriteria) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *TracesMassUpdateCriteria) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetFrequency

`func (o *TracesMassUpdateCriteria) GetFrequency() MassUpdateTracesFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *TracesMassUpdateCriteria) GetFrequencyOk() (*MassUpdateTracesFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *TracesMassUpdateCriteria) SetFrequency(v MassUpdateTracesFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *TracesMassUpdateCriteria) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


