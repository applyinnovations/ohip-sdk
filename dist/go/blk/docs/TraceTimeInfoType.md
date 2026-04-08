# TraceTimeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**TraceOn** | Pointer to **string** | Date of the trace. | [optional] 
**TraceTime** | Pointer to **string** | Time of the trace | [optional] 
**EnteredBy** | Pointer to **string** | User that entered this trace. | [optional] 

## Methods

### NewTraceTimeInfoType

`func NewTraceTimeInfoType() *TraceTimeInfoType`

NewTraceTimeInfoType instantiates a new TraceTimeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceTimeInfoTypeWithDefaults

`func NewTraceTimeInfoTypeWithDefaults() *TraceTimeInfoType`

NewTraceTimeInfoTypeWithDefaults instantiates a new TraceTimeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateTimeSpan

`func (o *TraceTimeInfoType) GetDateTimeSpan() DateTimeSpanType`

GetDateTimeSpan returns the DateTimeSpan field if non-nil, zero value otherwise.

### GetDateTimeSpanOk

`func (o *TraceTimeInfoType) GetDateTimeSpanOk() (*DateTimeSpanType, bool)`

GetDateTimeSpanOk returns a tuple with the DateTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTimeSpan

`func (o *TraceTimeInfoType) SetDateTimeSpan(v DateTimeSpanType)`

SetDateTimeSpan sets DateTimeSpan field to given value.

### HasDateTimeSpan

`func (o *TraceTimeInfoType) HasDateTimeSpan() bool`

HasDateTimeSpan returns a boolean if a field has been set.

### GetTraceOn

`func (o *TraceTimeInfoType) GetTraceOn() string`

GetTraceOn returns the TraceOn field if non-nil, zero value otherwise.

### GetTraceOnOk

`func (o *TraceTimeInfoType) GetTraceOnOk() (*string, bool)`

GetTraceOnOk returns a tuple with the TraceOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceOn

`func (o *TraceTimeInfoType) SetTraceOn(v string)`

SetTraceOn sets TraceOn field to given value.

### HasTraceOn

`func (o *TraceTimeInfoType) HasTraceOn() bool`

HasTraceOn returns a boolean if a field has been set.

### GetTraceTime

`func (o *TraceTimeInfoType) GetTraceTime() string`

GetTraceTime returns the TraceTime field if non-nil, zero value otherwise.

### GetTraceTimeOk

`func (o *TraceTimeInfoType) GetTraceTimeOk() (*string, bool)`

GetTraceTimeOk returns a tuple with the TraceTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTime

`func (o *TraceTimeInfoType) SetTraceTime(v string)`

SetTraceTime sets TraceTime field to given value.

### HasTraceTime

`func (o *TraceTimeInfoType) HasTraceTime() bool`

HasTraceTime returns a boolean if a field has been set.

### GetEnteredBy

`func (o *TraceTimeInfoType) GetEnteredBy() string`

GetEnteredBy returns the EnteredBy field if non-nil, zero value otherwise.

### GetEnteredByOk

`func (o *TraceTimeInfoType) GetEnteredByOk() (*string, bool)`

GetEnteredByOk returns a tuple with the EnteredBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnteredBy

`func (o *TraceTimeInfoType) SetEnteredBy(v string)`

SetEnteredBy sets EnteredBy field to given value.

### HasEnteredBy

`func (o *TraceTimeInfoType) HasEnteredBy() bool`

HasEnteredBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


