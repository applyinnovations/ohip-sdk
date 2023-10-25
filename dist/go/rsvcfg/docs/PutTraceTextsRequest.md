# PutTraceTextsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TraceTexts** | Pointer to [**[]TraceTextChangeType**](TraceTextChangeType.md) | Collection of trace texts that will be modified. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutTraceTextsRequest

`func NewPutTraceTextsRequest() *PutTraceTextsRequest`

NewPutTraceTextsRequest instantiates a new PutTraceTextsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutTraceTextsRequestWithDefaults

`func NewPutTraceTextsRequestWithDefaults() *PutTraceTextsRequest`

NewPutTraceTextsRequestWithDefaults instantiates a new PutTraceTextsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutTraceTextsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutTraceTextsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutTraceTextsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutTraceTextsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTraceTexts

`func (o *PutTraceTextsRequest) GetTraceTexts() []TraceTextChangeType`

GetTraceTexts returns the TraceTexts field if non-nil, zero value otherwise.

### GetTraceTextsOk

`func (o *PutTraceTextsRequest) GetTraceTextsOk() (*[]TraceTextChangeType, bool)`

GetTraceTextsOk returns a tuple with the TraceTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceTexts

`func (o *PutTraceTextsRequest) SetTraceTexts(v []TraceTextChangeType)`

SetTraceTexts sets TraceTexts field to given value.

### HasTraceTexts

`func (o *PutTraceTextsRequest) HasTraceTexts() bool`

HasTraceTexts returns a boolean if a field has been set.

### GetWarnings

`func (o *PutTraceTextsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutTraceTextsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutTraceTextsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutTraceTextsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


