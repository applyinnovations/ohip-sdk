# TracesByDateRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TracesInfoList** | Pointer to [**[]MiscTraceType**](MiscTraceType.md) | List of the traces | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTracesByDateRange

`func NewTracesByDateRange() *TracesByDateRange`

NewTracesByDateRange instantiates a new TracesByDateRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTracesByDateRangeWithDefaults

`func NewTracesByDateRangeWithDefaults() *TracesByDateRange`

NewTracesByDateRangeWithDefaults instantiates a new TracesByDateRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TracesByDateRange) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TracesByDateRange) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TracesByDateRange) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TracesByDateRange) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTracesInfoList

`func (o *TracesByDateRange) GetTracesInfoList() []MiscTraceType`

GetTracesInfoList returns the TracesInfoList field if non-nil, zero value otherwise.

### GetTracesInfoListOk

`func (o *TracesByDateRange) GetTracesInfoListOk() (*[]MiscTraceType, bool)`

GetTracesInfoListOk returns a tuple with the TracesInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTracesInfoList

`func (o *TracesByDateRange) SetTracesInfoList(v []MiscTraceType)`

SetTracesInfoList sets TracesInfoList field to given value.

### HasTracesInfoList

`func (o *TracesByDateRange) HasTracesInfoList() bool`

HasTracesInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *TracesByDateRange) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TracesByDateRange) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TracesByDateRange) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TracesByDateRange) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


