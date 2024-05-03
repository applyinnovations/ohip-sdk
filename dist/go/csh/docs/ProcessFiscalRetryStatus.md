# ProcessFiscalRetryStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioSeqId** | Pointer to **int32** | Fiscal Folio sequence ID stored in queue table. | [optional] 
**IsLastRetry** | Pointer to **bool** | Indicating if it is last trial for fiscal printing. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProcessFiscalRetryStatus

`func NewProcessFiscalRetryStatus() *ProcessFiscalRetryStatus`

NewProcessFiscalRetryStatus instantiates a new ProcessFiscalRetryStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessFiscalRetryStatusWithDefaults

`func NewProcessFiscalRetryStatusWithDefaults() *ProcessFiscalRetryStatus`

NewProcessFiscalRetryStatusWithDefaults instantiates a new ProcessFiscalRetryStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioSeqId

`func (o *ProcessFiscalRetryStatus) GetFolioSeqId() int32`

GetFolioSeqId returns the FolioSeqId field if non-nil, zero value otherwise.

### GetFolioSeqIdOk

`func (o *ProcessFiscalRetryStatus) GetFolioSeqIdOk() (*int32, bool)`

GetFolioSeqIdOk returns a tuple with the FolioSeqId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqId

`func (o *ProcessFiscalRetryStatus) SetFolioSeqId(v int32)`

SetFolioSeqId sets FolioSeqId field to given value.

### HasFolioSeqId

`func (o *ProcessFiscalRetryStatus) HasFolioSeqId() bool`

HasFolioSeqId returns a boolean if a field has been set.

### GetIsLastRetry

`func (o *ProcessFiscalRetryStatus) GetIsLastRetry() bool`

GetIsLastRetry returns the IsLastRetry field if non-nil, zero value otherwise.

### GetIsLastRetryOk

`func (o *ProcessFiscalRetryStatus) GetIsLastRetryOk() (*bool, bool)`

GetIsLastRetryOk returns a tuple with the IsLastRetry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastRetry

`func (o *ProcessFiscalRetryStatus) SetIsLastRetry(v bool)`

SetIsLastRetry sets IsLastRetry field to given value.

### HasIsLastRetry

`func (o *ProcessFiscalRetryStatus) HasIsLastRetry() bool`

HasIsLastRetry returns a boolean if a field has been set.

### GetLinks

`func (o *ProcessFiscalRetryStatus) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProcessFiscalRetryStatus) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProcessFiscalRetryStatus) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProcessFiscalRetryStatus) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProcessFiscalRetryStatus) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProcessFiscalRetryStatus) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProcessFiscalRetryStatus) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProcessFiscalRetryStatus) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


