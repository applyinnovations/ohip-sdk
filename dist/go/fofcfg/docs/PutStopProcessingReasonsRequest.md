# PutStopProcessingReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StopProcessingReasons** | Pointer to [**[]StopProcessingReasonType**](StopProcessingReasonType.md) | List of the Stop Processing Reasons to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutStopProcessingReasonsRequest

`func NewPutStopProcessingReasonsRequest() *PutStopProcessingReasonsRequest`

NewPutStopProcessingReasonsRequest instantiates a new PutStopProcessingReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutStopProcessingReasonsRequestWithDefaults

`func NewPutStopProcessingReasonsRequestWithDefaults() *PutStopProcessingReasonsRequest`

NewPutStopProcessingReasonsRequestWithDefaults instantiates a new PutStopProcessingReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStopProcessingReasons

`func (o *PutStopProcessingReasonsRequest) GetStopProcessingReasons() []StopProcessingReasonType`

GetStopProcessingReasons returns the StopProcessingReasons field if non-nil, zero value otherwise.

### GetStopProcessingReasonsOk

`func (o *PutStopProcessingReasonsRequest) GetStopProcessingReasonsOk() (*[]StopProcessingReasonType, bool)`

GetStopProcessingReasonsOk returns a tuple with the StopProcessingReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopProcessingReasons

`func (o *PutStopProcessingReasonsRequest) SetStopProcessingReasons(v []StopProcessingReasonType)`

SetStopProcessingReasons sets StopProcessingReasons field to given value.

### HasStopProcessingReasons

`func (o *PutStopProcessingReasonsRequest) HasStopProcessingReasons() bool`

HasStopProcessingReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PutStopProcessingReasonsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutStopProcessingReasonsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutStopProcessingReasonsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutStopProcessingReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutStopProcessingReasonsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutStopProcessingReasonsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutStopProcessingReasonsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutStopProcessingReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


