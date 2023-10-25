# PutAccountTraceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TraceInfo** | Pointer to [**ARAccountTraceCriteriaType**](ARAccountTraceCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAccountTraceRequest

`func NewPutAccountTraceRequest() *PutAccountTraceRequest`

NewPutAccountTraceRequest instantiates a new PutAccountTraceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAccountTraceRequestWithDefaults

`func NewPutAccountTraceRequestWithDefaults() *PutAccountTraceRequest`

NewPutAccountTraceRequestWithDefaults instantiates a new PutAccountTraceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutAccountTraceRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAccountTraceRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAccountTraceRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAccountTraceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTraceInfo

`func (o *PutAccountTraceRequest) GetTraceInfo() ARAccountTraceCriteriaType`

GetTraceInfo returns the TraceInfo field if non-nil, zero value otherwise.

### GetTraceInfoOk

`func (o *PutAccountTraceRequest) GetTraceInfoOk() (*ARAccountTraceCriteriaType, bool)`

GetTraceInfoOk returns a tuple with the TraceInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceInfo

`func (o *PutAccountTraceRequest) SetTraceInfo(v ARAccountTraceCriteriaType)`

SetTraceInfo sets TraceInfo field to given value.

### HasTraceInfo

`func (o *PutAccountTraceRequest) HasTraceInfo() bool`

HasTraceInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAccountTraceRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAccountTraceRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAccountTraceRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAccountTraceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


