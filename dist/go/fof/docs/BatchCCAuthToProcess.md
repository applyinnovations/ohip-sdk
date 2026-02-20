# BatchCCAuthToProcess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchId** | Pointer to **int32** |  | [optional] 
**ProcessId** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBatchCCAuthToProcess

`func NewBatchCCAuthToProcess() *BatchCCAuthToProcess`

NewBatchCCAuthToProcess instantiates a new BatchCCAuthToProcess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBatchCCAuthToProcessWithDefaults

`func NewBatchCCAuthToProcessWithDefaults() *BatchCCAuthToProcess`

NewBatchCCAuthToProcessWithDefaults instantiates a new BatchCCAuthToProcess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBatchId

`func (o *BatchCCAuthToProcess) GetBatchId() int32`

GetBatchId returns the BatchId field if non-nil, zero value otherwise.

### GetBatchIdOk

`func (o *BatchCCAuthToProcess) GetBatchIdOk() (*int32, bool)`

GetBatchIdOk returns a tuple with the BatchId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchId

`func (o *BatchCCAuthToProcess) SetBatchId(v int32)`

SetBatchId sets BatchId field to given value.

### HasBatchId

`func (o *BatchCCAuthToProcess) HasBatchId() bool`

HasBatchId returns a boolean if a field has been set.

### GetProcessId

`func (o *BatchCCAuthToProcess) GetProcessId() string`

GetProcessId returns the ProcessId field if non-nil, zero value otherwise.

### GetProcessIdOk

`func (o *BatchCCAuthToProcess) GetProcessIdOk() (*string, bool)`

GetProcessIdOk returns a tuple with the ProcessId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessId

`func (o *BatchCCAuthToProcess) SetProcessId(v string)`

SetProcessId sets ProcessId field to given value.

### HasProcessId

`func (o *BatchCCAuthToProcess) HasProcessId() bool`

HasProcessId returns a boolean if a field has been set.

### GetLinks

`func (o *BatchCCAuthToProcess) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BatchCCAuthToProcess) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BatchCCAuthToProcess) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BatchCCAuthToProcess) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BatchCCAuthToProcess) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BatchCCAuthToProcess) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BatchCCAuthToProcess) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BatchCCAuthToProcess) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


