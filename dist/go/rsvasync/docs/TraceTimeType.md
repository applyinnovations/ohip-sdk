# TraceTimeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**TraceTime** | Pointer to **string** | Time of the trace in 24 hour time. | [optional] 

## Methods

### NewTraceTimeType

`func NewTraceTimeType() *TraceTimeType`

NewTraceTimeType instantiates a new TraceTimeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceTimeTypeWithDefaults

`func NewTraceTimeTypeWithDefaults() *TraceTimeType`

NewTraceTimeTypeWithDefaults instantiates a new TraceTimeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateTimeSpan

`func (o *TraceTimeType) GetDateTimeSpan() DateTimeSpanType`

GetDateTimeSpan returns the DateTimeSpan field if non-nil, zero value otherwise.

### GetDateTimeSpanOk

`func (o *TraceTimeType) GetDateTimeSpanOk() (*DateTimeSpanType, bool)`

GetDateTimeSpanOk returns a tuple with the DateTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTimeSpan

`func (o *TraceTimeType) SetDateTimeSpan(v DateTimeSpanType)`

SetDateTimeSpan sets DateTimeSpan field to given value.

### HasDateTimeSpan

`func (o *TraceTimeType) HasDateTimeSpan() bool`

HasDateTimeSpan returns a boolean if a field has been set.

### GetTraceTime

`func (o *TraceTimeType) GetTraceTime() string`

GetTraceTime returns the TraceTime field if non-nil, zero value otherwise.

### GetTraceTimeOk

`func (o *TraceTimeType) GetTraceTimeOk() (*string, bool)`

GetTraceTimeOk returns a tuple with the TraceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTime

`func (o *TraceTimeType) SetTraceTime(v string)`

SetTraceTime sets TraceTime field to given value.

### HasTraceTime

`func (o *TraceTimeType) HasTraceTime() bool`

HasTraceTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


